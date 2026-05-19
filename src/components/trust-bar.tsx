import { CheckCircle2 } from "lucide-react";

export function TrustBar() {
  const benefits = [
    "100% Free Consultation",
    "Certified Care Matching",
    "Trusted by Texas Families",
    "Rapid Response Time",
  ];

  return (
    <div className="bg-accent/30 border-b border-accent/20 py-4">
      <div className="container flex flex-wrap justify-center gap-6 md:gap-12 items-center">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-2 text-sm md:text-base font-medium text-foreground/80">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
