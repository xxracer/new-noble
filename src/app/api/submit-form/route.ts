import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// Helper function to map form data to AxisCare format
const mapToAxisCareLead = (data: any) => {
    const nameParts = data.contactName.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    let relationshipToClient = 'Other';
    const relationshipMap: { [key: string]: string } = {
        'spouse': 'Spouse',
        'parent': 'Child',
        'myself': 'Self',
        'someone-else': 'Other'
    };
    if (data.relationship && relationshipMap[data.relationship]) {
        relationshipToClient = relationshipMap[data.relationship];
    }
    
    return {
        marketing_referral_source_id: 1, // Default or map as needed
        client_first_name: data.isSelf ? firstName : data.careRecipientName || 'Unknown',
        client_last_name: data.isSelf ? lastName : '(lead)',
        client_zip: data.zipcode,
        caller_first_name: firstName,
        caller_last_name: lastName,
        caller_email: data.contactEmail,
        caller_phone: data.contactPhone,
        relationship_to_client: relationshipToClient,
        notes: `
            Urgency: ${data.urgency || 'N/A'}
            Hours per week: ${data.hours || 'N/A'}
            Payment method: ${data.payment || 'N/A'}
            Best time to contact: ${data.bestTime || 'N/A'}
            Contact method: ${data.contactMethod || 'N/A'}
            Additional Info: ${data.additionalInfo || 'N/A'}
        `,
    };
};


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { formName } = body;

        if (formName === 'Multi-Step Hero Form') {
            // Route to AxisCare API
            const axisCareUrl = `${process.env.AXISCARE_BASE_URL}/leads`;
            const apiToken = process.env.AXISCARE_API_TOKEN;
            const apiVersion = process.env.AXISCARE_API_VERSION;

            if (!axisCareUrl || !apiToken || !apiVersion) {
                console.error('AxisCare environment variables are not configured.');
                return NextResponse.json({ error: 'Server is not configured for AxisCare submissions.' }, { status: 500 });
            }

            const axisCareData = mapToAxisCareLead(body);

            await axios.post(axisCareUrl, axisCareData, {
                headers: {
                    'Authorization': `Bearer ${apiToken}`,
                    'axiscare-version': apiVersion,
                    'Content-Type': 'application/json',
                },
            });

            return NextResponse.json({ success: true, message: 'Lead submitted to AxisCare successfully' }, { status: 200 });

        } else {
            // Route to Make.com Webhook
            const webhookUrl = process.env.MAKE_WEBHOOK_URL;
            if (!webhookUrl) {
                console.error('Make.com Webhook URL is not configured.');
                return NextResponse.json({ error: 'Server is not configured for this form submission.' }, { status: 500 });
            }
            
            await axios.post(webhookUrl, body, {
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
        // Log the full error object for non-Axios errors
        console.error(error);
        return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
    }
}
