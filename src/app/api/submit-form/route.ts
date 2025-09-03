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

        // Common data for Make.com webhook
        const makePayload = {
            timestamp: new Date().toISOString(),
            contact_info: {
                name: body.contactName,
                phone: body.contactPhone,
                email: body.contactEmail,
                location: body.locationText || 'Not provided'
            },
            lead_details: {
                urgency: body.urgency,
                payment: body.payment
            },
            metadata: body, // Send the whole form body
        };

        const makeWebhookUrl = process.env.MAKE_WEBHOOK_URL;
        if (!makeWebhookUrl) {
             console.error('Make.com Webhook URL is not configured.');
             // Still try to submit to AxisCare if it's that form
        }

        if (formName === 'Multi-Step Hero Form') {
            // This form goes to both AxisCare and Make.com
            const axisCareUrl = `${process.env.AXISCARE_BASE_URL}/leads`;
            const apiToken = process.env.AXISCARE_API_TOKEN;
            const apiVersion = process.env.AXISCARE_API_VERSION;

            if (!axisCareUrl || !apiToken || !apiVersion) {
                console.error('AxisCare environment variables are not configured.');
                return NextResponse.json({ error: 'Server is not configured for AxisCare submissions.' }, { status: 500 });
            }

            const axisCareData = mapToAxisCareLead(body);

            // Use Promise.all to send to both services concurrently
            const [axisResponse, makeResponse] = await Promise.allSettled([
                axios.post(axisCareUrl, axisCareData, {
                    headers: {
                        'Authorization': `Bearer ${apiToken}`,
                        'axiscare-version': apiVersion,
                        'Content-Type': 'application/json',
                    },
                }),
                makeWebhookUrl ? axios.post(makeWebhookUrl, makePayload, { headers: { 'Content-Type': 'application/json' } }) : Promise.resolve({ status: 'skipped' })
            ]);

            const axisFailed = axisResponse.status === 'rejected';
            const makeFailed = makeResponse.status === 'rejected';

            if (axisFailed) {
                 console.error('AxisCare submission failed:', axisResponse.reason?.response?.data || axisResponse.reason.message);
            }
             if (makeFailed) {
                console.error('Make.com submission failed:', makeResponse.reason?.response?.data || makeResponse.reason.message);
            }

            if (axisFailed || makeFailed) {
                 return NextResponse.json({ 
                    success: false, 
                    message: 'One or more submissions failed.',
                    axisCareStatus: axisFailed ? 'Failed' : 'Success',
                    makeComStatus: makeFailed ? 'Failed' : 'Success',
                }, { status: 502 });
            }

            return NextResponse.json({ success: true, message: 'Lead submitted to AxisCare and Make.com successfully' }, { status: 200 });

        } else {
            // Other forms (like Contact Form) only go to Make.com
            if (!makeWebhookUrl) {
                return NextResponse.json({ error: 'Server is not configured for this form submission.' }, { status: 500 });
            }
            
            await axios.post(makeWebhookUrl, body, {
                headers: { 'Content-Type': 'application/json' },
            });

            return NextResponse.json({ success: true, message: 'Form submitted successfully' }, { status: 200 });
        }

    } catch (error) {
        console.error('Error in /api/submit-form:');
        if (axios.isAxiosError(error)) {
            console.error('Axios error details:', error.response?.data);
            return NextResponse.json({ error: 'Failed to forward form data', details: error.response?.data }, { status: error.response?.status || 502 });
        }
        console.error(error);
        return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
    }
}
