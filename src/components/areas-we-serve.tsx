import { CheckCircle } from "lucide-react";

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
    <section className="py-20 sm:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Areas We Serve
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Providing compassionate in-home care across the greater Houston area and beyond.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 max-w-4xl mx-auto">
          {locations.map((location) => (
            <div key={location} className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">{location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
