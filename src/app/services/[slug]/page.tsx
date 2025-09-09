
import { generateServiceDetails } from "@/ai/flows/service-details";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { services } from "@/data/services";
import Image from "next/image";

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

  const serviceDetails = await generateServiceDetails(serviceInfo.name);

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
                    <p className="text-lg text-muted-foreground whitespace-pre-wrap">
                        {serviceDetails.description}
                    </p>
                </div>
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
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
