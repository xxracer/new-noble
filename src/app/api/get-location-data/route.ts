import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const ip = req.ip || req.headers.get('x-forwarded-for') || '8.8.8.8';
    const token = process.env.IPINFO_TOKEN;
    const url = token ? `https://ipinfo.io/${ip}?token=${token}` : `https://ipinfo.io/${ip}/json`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
        const errorData = await response.text();
        console.error(`IPInfo.io error response: ${errorData}`);
        throw new Error(`IPInfo.io request failed with status ${response.status}`);
    }

    const data = await response.json();

    const locationData = {
        city: data.city || 'your city',
        region: data.region || 'TX',
        zip: data.postal,
        ip: data.ip
    };

    return NextResponse.json(locationData, { status: 200 });
  } catch (error) {
    console.error('Error in /api/get-location-data:', error);
    // Return a default/fallback response in case of any error
    return NextResponse.json({ error: 'Failed to fetch location data', city: 'your city', region: 'TX' }, { status: 500 });
  }
}
