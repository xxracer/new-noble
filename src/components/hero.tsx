"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MultiStepForm } from '@/components/multi-step-form';

export function Hero() {
  const [location, setLocation] = useState("your city, TX");

  useEffect(() => {
    const fetchLocation = async () => {
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
                  const city = data.locality || data.city;
                  const state = data.principalSubdivisionCode ? data.principalSubdivisionCode.replace('US-','') : 'TX';
                  if (city && state) {
                    setLocation(`${city}, ${state}`);
                  }
                }
              } catch (error) {
                console.error('Error getting location from reverse geocoding:', error);
                // Fallback to IP-based location
                fetchLocationFromIp();
              }
            },
            (error) => {
              console.warn(`Geolocation error (${error.code}): ${error.message}`);
              fetchLocationFromIp();
            },
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
          );
        } else {
          fetchLocationFromIp();
        }
      } catch (error) {
        console.error('Error in fetchLocation:', error);
        fetchLocationFromIp();
      }
    };
    
    const fetchLocationFromIp = async () => {
        try {
            const response = await fetch('/api/get-location-data');
             if (response.ok) {
                 const data = await response.json();
                 if (data.city && data.region) {
                     setLocation(`${data.city}, ${data.region}`);
                 }
             }
        } catch (error) {
            console.error('Error fetching location from IP:', error);
        }
    };

    fetchLocation();
  }, []);

  return (
    <section className="relative w-full bg-primary">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10 text-white py-12 lg:py-16">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Simplifying the search for in home care in <span className="text-accent">{location}</span>
          </h1>

          <MultiStepForm initialLocation={location} />
        </div>
        <div className="relative h-full min-h-[350px] lg:min-h-0 lg:h-full w-full">
          <div className="hidden lg:block absolute bg-accent w-full h-full -skew-x-6 -ml-16"></div>
          <Image
            src="https://static.wixstatic.com/media/c5947c_ae07f633ef7b4881957225ef75782961~mv2.jpg"
            alt="Caregiver with a senior patient"
            fill
            className="object-cover lg:rounded-lg lg:shadow-xl lg:-skew-x-6"
            data-ai-hint="caregiver patient"
            priority
          />
        </div>
      </div>
    </section>
  );
}
