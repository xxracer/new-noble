import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Ready to Start the Conversation?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Our care coordinators are here to help. Schedule a free, no-obligation consultation to discuss your needs.
        </p>
        <div className="mt-8">
          <Button size="lg" className="h-14 px-10 text-lg bg-accent hover:bg-accent/90 text-accent-foreground">
            FREE CARE CONSULTATION
          </Button>
        </div>
      </div>
    </section>
  );
}
