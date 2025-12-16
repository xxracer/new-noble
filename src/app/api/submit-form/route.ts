import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// Helper function to map form data to AxisCare lead format
const mapToAxisCareLead = (data: any) => {
    const [firstName, ...lastNameParts] = data.contactName.split(' ');
    const lastName = lastNameParts.join(' ') || 'Last Name';

    const formSelections = {
        "Lead Source": "Lead from Home Page",
        "ZIP Code": data.zipcode,
        "Who Are You Searching Care For?": data.relationship ? data.relationship.replace(/-/g, ' ').toUpperCase() : 'N/A',
        "How Quickly Do You Need Care?": data.urgency === '7days' ? 'Within 7 days' : 
                                        data.urgency === '30days' ? 'Within 30 days' : 
                                        data.urgency ? data.urgency.charAt(0).toUpperCase() + data.urgency.slice(1) : 'N/A',
        "Hours Needed Per Week": data.hours === 'less10' ? 'Less than 10' :
                                data.hours === '11-20' ? '11-20' :
                                data.hours === '21-40' ? '21-40' :
                                data.hours === '40plus' ? '40+' : 'Not sure',
        "How Do You Plan to Pay?": data.payment === 'va' ? 'VA' :
                                  data.payment === 'insurance' ? 'Long-term care insurance' :
                                  data.payment ? data.payment.charAt(0).toUpperCase() + data.payment.slice(1) : 'N/A',
        "Name of the person needing care": data.careRecipientName || 'N/A',
        "Check if for yourself": data.isSelf ? "Yes" : "No",
        "Contact name": data.contactName,
        "Contact phone number": data.contactPhone.replace(/\D/g, ''),
        "Contact email": data.contactEmail,
        "Best time to contact you": data.bestTime || 'Not specified',
        "Best contact method": data.contactMethod || 'Not specified',
        "Additional notes": data.additionalInfo || 'None'
    };

    const formattedSelections = Object.entries(formSelections)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');

    return {
        firstName: firstName || 'First Name',
        lastName: lastName,
        personalEmail: data.contactEmail,
        homePhone: data.contactPhone.replace(/\D/g, ''),
        mobilePhone: data.contactPhone.replace(/\D/g, ''),
        status: "Active",
        priorityNote: formattedSelections
    };
};

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { formName } = body;

        const makeWebhookUrl = process.env.MAKE_WEBHOOK_URL;
        const makePayload = {
            timestamp: new Date().toISOString(),
            form_name: formName,
            ...body,
        };

        if (formName === 'Multi-Step Hero Form') {
            const axisCareUrl = `${process.env.AXISCARE_BASE_URL}/leads`;
            const apiToken = process.env.AXISCARE_API_TOKEN;
            const apiVersion = process.env.AXISCARE_API_VERSION;

            let axisCareSuccess = false;
            if (axisCareUrl && apiToken && apiVersion) {
                try {
                    const axisCareData = mapToAxisCareLead(body);
                    await axios.post(axisCareUrl, axisCareData, {
                        headers: {
                            'Authorization': `Bearer ${apiToken}`,
                            'axiscare-version': apiVersion,
                            'Content-Type': 'application/json',
                        },
                    });
                    axisCareSuccess = true;
                } catch (axisError) {
                    console.error('AxisCare submission failed:', axios.isAxiosError(axisError) ? axisError.response?.data : axisError);
                }
            } else {
                console.warn('AxisCare environment variables are not fully configured.');
            }

            // Always try to submit to Make.com as a fallback/secondary
            if (makeWebhookUrl) {
                try {
                    await axios.post(makeWebhookUrl, makePayload);
                    // If AxisCare failed but Make.com succeeded, we consider it a success for the user.
                    return NextResponse.json({ success: true, message: 'Lead captured successfully.' }, { status: 200 });
                } catch (makeError) {
                    console.error('Make.com submission failed after AxisCare attempt:', axios.isAxiosError(makeError) ? makeError.response?.data : makeError);
                    // If both fail, return an error
                    if (!axisCareSuccess) {
                        return NextResponse.json({ error: 'All lead submission services failed.' }, { status: 502 });
                    }
                }
            }
            
            // If only AxisCare succeeded (and no Make URL)
            if (axisCareSuccess) {
                 return NextResponse.json({ success: true, message: 'Lead submitted to AxisCare successfully.' }, { status: 200 });
            }

            // If we are here, it means AxisCare failed and there was no Make.com URL
            return NextResponse.json({ error: 'Lead submission to primary service failed and no fallback is configured.' }, { status: 500 });

        } else {
            // Other forms (like Contact Form) only go to Make.com
            if (!makeWebhookUrl) {
                 console.error('Make.com Webhook URL is not configured for this form.');
                 return NextResponse.json({ error: 'Server is not configured for this form submission.' }, { status: 500 });
            }
            
            await axios.post(makeWebhookUrl, makePayload, {
                headers: { 'Content-Type': 'application/json' },
            });

            return NextResponse.json({ success: true, message: 'Form submitted successfully' }, { status: 200 });
        }

    } catch (error) {
        console.error('Error in /api/submit-form:', error);
        return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
    }
}
