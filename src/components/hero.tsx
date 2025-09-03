import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/1600/900"
          alt="Caregiver with a senior patient"
          fill
          className="object-cover"
          data-ai-hint="caregiver patient"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container relative z-10 text-center text-white">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Compassionate Care, Right at Your Doorstep
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200 md:text-xl">
          Find trusted, professional in-home care for your loved ones. We provide personalized support to help them live comfortably and independently.
        </p>
        <form className="mx-auto mt-10 max-w-xl">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Input
              type="text"
              placeholder="Enter your ZIP code"
              className="flex-grow text-base h-14 text-gray-800"
              aria-label="ZIP code"
            />
            <Button type="submit" size="lg" className="h-14 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Search className="mr-2 h-5 w-5" />
              Find Care
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
