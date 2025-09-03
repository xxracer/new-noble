"use client";

import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const locations = [
  "Harris County",
  "The Woodlands",
  "Sugar Land",
  "Katy",
  "Cypress",
  "Pearland",
  "Friendswood",
  "League City",
  "Clear Lake",
  "Galveston",
  "Conroe",
  "Montgomery",
];

export function AreasWeServe() {
  return (
    <section id="areas-we-serve" className="py-20 sm:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Areas We Serve
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Providing compassionate in-home care across the greater Houston area and beyond. We are proud to serve families in the following communities:
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {locations.map((location) => (
            <Card key={location} className="group overflow-hidden rounded-lg border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <MapPin className="h-8 w-8 mb-3 text-primary/80 group-hover:text-primary transition-colors duration-300" />
                <span className="font-semibold text-foreground text-base">{location}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
    