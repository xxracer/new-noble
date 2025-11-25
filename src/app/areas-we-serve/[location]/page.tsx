import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { locations } from "@/data/locations";
import { notFound } from "next/navigation";
import { LocationContactForm } from "@/components/location-contact-form";

export async function generateStaticParams() {
  return locations.map((location) => ({
    location: location.slug,
  }));
}

export default async function LocationPage({ params }: { params: { location: string } }) {
  const location = locations.find((l) => l.slug === params.location);

  if (!location) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-12 md:py-20">
        <div className="container">
          <h1 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-center mb-12">
            In-Home Care in {location.name}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-headline text-2xl font-bold mb-6">Request Information</h2>
              <LocationContactForm />
            </div>
            <div className="h-full w-full min-h-[450px] md:min-h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d525498.5717543017!2d-95.7949976148979!3d29.83477444036334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c5c9274a9745%3A0xd5432a5038eb09b!2sNoble%20Health%20inc!5e1!3m2!1ses!2sve!4v1764044803153!5m2!1ses!2sve"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
