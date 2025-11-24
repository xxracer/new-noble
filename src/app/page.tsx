import { ConsultationBanner } from "@/components/consultation-banner";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { InfoCards } from "@/components/info-cards";
import { ServiceCarousel } from "@/components/service-carousel";
import { AreasWeServe } from "@/components/areas-we-serve";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <div id="services">
          <InfoCards />
        </div>
        <ConsultationBanner />
        <ContactSection />
        <AreasWeServe />
        <ServiceCarousel />
      </main>
      <Footer />
    </div>
  );
}
