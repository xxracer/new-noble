import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    // Vercel provides the 'x-forwarded-for' header with the client's IP
    const ip = req.headers.get('x-forwarded-for') || req.ip || '8.8.8.8'; // fallback to Google DNS
    const token = process.env.IPINFO_TOKEN;
    
    // Construct URL with token if it exists
    const url = token ? `https://ipinfo.io/${ip}?token=${token}` : `https://ipinfo.io/${ip}/json`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
        const errorData = await response.text();
        console.error(`IPInfo.io error response: ${errorData}`);
        throw new Error(`IPInfo.io request failed with status ${response.status}`);
    }

    const data = await response.json();

    // The logic from your original code to determine the best location string
    const locationString = data.city && data.region 
      ? `${data.city}, ${data.region}` 
      : data.city || data.region || 'your area';

    const locationData = {
        city: data.city || 'your city',
        region: data.region || 'TX',
        zip: data.postal,
        ip: data.ip,
        derivedLocationString: locationString
    };

    return NextResponse.json(locationData, { status: 200 });
  } catch (error) {
    console.error('Error in /api/get-location-data:', error);
    // Return a default/fallback response in case of any error
    return NextResponse.json({ 
        error: 'Failed to fetch location data', 
        city: 'your city', 
        region: 'TX',
        derivedLocationString: 'your area'
    }, { status: 500 });
  }
}
