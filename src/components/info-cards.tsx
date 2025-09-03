import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Home, Users, HeartHandshake, Smile, ShieldCheck } from "lucide-react";

const cardData = [
  {
    icon: Stethoscope,
    title: "24/7 Medical Support",
    text: "Access to round-the-clock medical advice and support from our qualified professionals."
  },
  {
    icon: Home,
    title: "Comfortable In-Home Care",
    text: "Personalized care services delivered in the comfort and familiarity of your own home."
  },
  {
    icon: Users,
    title: "Companion Care",
    text: "Friendly companionship to engage in activities, provide emotional support, and prevent loneliness."
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care Plans",
    text: "We work with you to create a customized care plan that meets your specific needs and preferences."
  },
  {
    icon: Smile,
    title: "Specialized Dementia Care",
    text: "Expert care for individuals with Alzheimer's and other forms of dementia, focusing on safety and quality of life."
  },
  {
    icon: ShieldCheck,
    title: "Vetted & Trained Caregivers",
    text: "All our caregivers are thoroughly screened, trained, and insured for your peace of mind."
  },
];

export function InfoCards() {
  return (
    <section className="py-20 sm:py-28 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Noble Health?</h2>
            <p className="mt-4 text-lg text-muted-foreground">We are dedicated to providing the highest quality of care with compassion and respect.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card key={index} className="flex flex-col text-center items-center p-6 bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground">{card.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
