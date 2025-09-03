import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const ip = req.ip || req.headers.get('x-forwarded-for') || '8.8.8.8';
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,region,city,zip,query`);
    
    if (!response.ok) {
        const errorData = await response.text();
        console.error(`IP-API error response: ${errorData}`);
        throw new Error(`IP-API request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (data.status === 'fail') {
        console.warn(`IP-API failed for IP ${ip}: ${data.message}`);
        return NextResponse.json({ city: 'your city', region: 'TX' }, { status: 200 });
    }

    const locationData = {
        city: data.city || 'your city',
        region: data.region || 'TX',
        zip: data.zip,
        ip: data.query
    };

    return NextResponse.json(locationData, { status: 200 });
  } catch (error) {
    console.error('Error in /api/get-location-data:', error);
    // Return a default/fallback response in case of any error
    return NextResponse.json({ error: 'Failed to fetch location data' }, { status: 500 });
  }
}
