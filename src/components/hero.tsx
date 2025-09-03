"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MultiStepForm } from '@/components/multi-step-form';

export function Hero() {
  const [location, setLocation] = useState("your area");

  useEffect(() => {
    const fetchExactLocation = async () => {
      try {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              try {
                const { latitude, longitude } = position.coords;
                const response = await fetch(
                  `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
                );
                if (response.ok) {
                  const data = await response.json();
                  const city = data.locality || data.city || data.principalSubdivision;
                  if (city) {
                    setLocation(city);
                    return;
                  }
                }
              } catch (error) {
                console.error('Error getting location from reverse geocoding, falling back to IP.', error);
              }
              // If reverse geocoding fails, fallback to IP
              fallbackToIPLocation();
            },
            (geoError) => {
              console.warn(`Geolocation error (${geoError.code}): ${geoError.message}, falling back to IP.`);
              fallbackToIPLocation();
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
          );
        } else {
          fallbackToIPLocation();
        }
      } catch (error) {
        console.error('Error in fetchExactLocation:', error);
        fallbackToIPLocation();
      }
    };
    
    const fallbackToIPLocation = async () => {
        try {
            const response = await fetch('/api/get-location-data');
             if (response.ok) {
                 const data = await response.json();
                 if (data.derivedLocationString) {
                     setLocation(data.derivedLocationString);
                 }
             }
        } catch (error) {
            console.error('Error fetching location from IP:', error);
        }
    };

    fetchExactLocation();
  }, []);

  return (
    <section className="relative w-full bg-primary">
      <div className="absolute inset-0 lg:hidden">
         <Image
            src="https://static.wixstatic.com/media/c5947c_df507abdf87647b4abca62a33bc81449~mv2.jpg"
            alt="Caregiver with a senior patient"
            fill
            className="object-cover"
            data-ai-hint="caregiver patient"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-white py-12 lg:py-16">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Simplifying the search for in home care in <span className="text-accent">{location}</span>
          </h1>

          <MultiStepForm initialLocation={location} />
        </div>
        <div className="relative h-full min-h-[350px] lg:min-h-0 lg:h-full w-full hidden lg:block">
          <Image
            src="https://static.wixstatic.com/media/c5947c_df507abdf87647b4abca62a33bc81449~mv2.jpg"
            alt="Caregiver with a senior patient"
            fill
            className="object-cover object-center lg:object-left lg:rounded-lg lg:shadow-xl"
            data-ai-hint="caregiver patient"
            priority
          />
        </div>
      </div>
    </section>
  );
}
