import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { InfoCards } from "@/components/info-cards";
import { MiniForm } from "@/components/mini-form";
import { ServiceCarousel } from "@/components/service-carousel";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <InfoCards />
        <ServiceCarousel />
        <CtaSection />
        <MiniForm />
      </main>
      <Footer />
    </div>
  );
}
