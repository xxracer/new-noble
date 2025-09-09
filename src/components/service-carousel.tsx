"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Link from 'next/link';

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { services } from "@/data/services";
import { PersonStanding, Clock, Brain, Activity, HeartPulse, HandHeart, Users, Shield, Star, Home, Car, Utensils, Pill, Stethoscope, HandHelping, ShoppingCart, House, HeartHandshake } from "lucide-react";

// Map string names to Lucide components
const iconMap: { [key: string]: React.ComponentType<any> } = {
    "Personal Care": HandHeart,
    "Companionship": Users,
    "Meal Preparation": Utensils,
    "Medication Reminders": Pill,
    "Mobility & Fall Prevention": HandHelping,
    "Light Housekeeping": Home,
    "Errands & Transportation": ShoppingCart,
    "Family Respite": Clock,
    "Live-in Care": HeartHandshake,
    "Alzheimer’s & Dementia Care": Brain,
};


export function ServiceCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 sm:py-28 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Care Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">A range of services to meet every need.</p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {services.map((service, index) => {
              const Icon = iconMap[service.title] || Shield;
              return(
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <Link href={`/services/${service.slug}`} className="block group">
                    <div className="p-1">
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center p-6 gap-4 aspect-square transition-colors group-hover:bg-primary/5">
                            <Icon className="h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                            <span className="text-lg font-semibold text-center font-headline">{service.title}</span>
                        </CardContent>
                    </Card>
                    </div>
                </Link>
              </CarouselItem>
            )})}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
