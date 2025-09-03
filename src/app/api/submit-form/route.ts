import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;

    if (!webhookUrl || webhookUrl === 'YOUR_MAKE_COM_OR_API_URL_HERE') {
      console.error('Webhook URL is not configured in .env.local');
      return NextResponse.json({ error: 'Server is not configured to receive form submissions.' }, { status: 500 });
    }

    // Forward the data to the external webhook
    const response = await axios.post(webhookUrl, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return NextResponse.json({ success: true, message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error in /api/submit-form:', error);
    // Determine if the error is from Axios
    if (axios.isAxiosError(error)) {
        console.error('Axios error details:', error.response?.data);
        return NextResponse.json({ error: 'Failed to forward form data', details: error.response?.data }, { status: 502 });
    }
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
