
import { generateServiceDetails, ServiceDetailsOutput } from "@/ai/flows/service-details";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { services } from "@/data/services";
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export async function generateStaticParams() {
    return services.map((service) => ({
      slug: service.slug,
    }))
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const serviceInfo = services.find(s => s.slug === params.slug);

  if (!serviceInfo) {
    return (
      <div>
        <Header />
        <main className="container py-12">
          <h1 className="text-2xl font-bold">Service not found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  let serviceDetails: ServiceDetailsOutput | null = null;
  let aiError = false;
  try {
    serviceDetails = await generateServiceDetails(serviceInfo.title);
  } catch (error) {
    console.error(`AI service failed for "${serviceInfo.title}":`, error);
    aiError = true;
    // Fallback content if AI fails
    serviceDetails = {
        slogan: `Quality ${serviceInfo.title} You Can Trust`,
        description: serviceInfo.points.join('\n\n'), // Use points as a fallback description
        benefits: [],
        faq: [],
    };
  }


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 sm:py-32 bg-primary text-white">
          <div className="absolute inset-0">
            <Image
                src={serviceInfo.bgImage}
                alt={serviceInfo.title}
                fill
                className="object-cover"
                data-ai-hint={serviceInfo.dataAiHint}
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="container relative z-10 text-center">
            <Badge variant="secondary" className="mb-4 text-sm">{serviceInfo.title}</Badge>
            <h1 className="font-headline text-4xl sm:text-6xl font-bold tracking-tight">
              {serviceDetails.slogan}
            </h1>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-background">
            <div className="container grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <h2 className="font-headline text-3xl font-bold text-foreground">
                        Comprehensive {serviceInfo.title}
                    </h2>
                    {aiError && (
                         <Alert variant="destructive">
                            <AlertTriangle className="h-4 w-4" />
                            <AlertTitle>AI Content Failed</AlertTitle>
                            <AlertDescription>
                                The AI-generated content could not be loaded. Displaying default information.
                            </AlertDescription>
                        </Alert>
                    )}
                    <div className="text-lg text-muted-foreground whitespace-pre-wrap">
                        {serviceDetails.description.split('\n\n').map((paragraph, i) => (
                            <p key={i} className={i > 0 ? 'mt-4' : ''}>{paragraph}</p>
                        ))}
                    </div>
                </div>
                {serviceDetails.benefits && serviceDetails.benefits.length > 0 && (
                    <div className="bg-secondary p-8 rounded-lg shadow-lg">
                        <h3 className="font-headline text-2xl font-bold text-foreground mb-6">
                            Key Benefits
                        </h3>
                        <ul className="space-y-4">
                            {serviceDetails.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                                        <p className="text-muted-foreground">{benefit.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>

        {serviceDetails.faq && serviceDetails.faq.length > 0 && (
            <section className="py-20 sm:py-28 bg-secondary">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="font-headline text-3xl font-bold text-center mb-12 text-foreground">
                        Frequently Asked Questions
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                        {serviceDetails.faq.map((item, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="text-lg font-semibold text-left">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
