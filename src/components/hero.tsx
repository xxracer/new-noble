import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export function Hero() {
  return (
    <section className="relative w-full bg-primary">
      <div className="container grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative z-10 text-white py-12 lg:py-24">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Simplifying the search for in home care in Caracas, Distrito Federal
          </h1>

          <Card className="mt-10">
            <CardContent className="p-6">
                <p className="mb-4 text-lg text-foreground font-semibold">
                    Start by entering your ZIP code and we&apos;ll match you with the right in-home care options, personalized for your needs.
                </p>
                <form>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <Input
                    type="text"
                    placeholder="Enter ZIP code"
                    className="flex-grow text-base h-12 text-gray-800"
                    aria-label="ZIP code"
                    />
                    <Button type="submit" size="lg" className="h-12 bg-accent hover:bg-accent/90 text-accent-foreground">
                    Find Care Near Me
                    </Button>
                </div>
                </form>
            </CardContent>
          </Card>
        </div>
        <div className="relative h-full min-h-[300px] lg:min-h-0 lg:h-full w-full">
            <div className="hidden lg:block absolute bg-accent w-full h-full -skew-x-6 -ml-16"></div>
             <Image
                src="https://picsum.photos/800/900"
                alt="Caregiver with a senior patient"
                fill
                className="object-cover lg:rounded-lg lg:shadow-xl lg:-skew-x-6"
                data-ai-hint="caregiver patient"
                priority
            />
        </div>
      </div>
    </section>
  );
}
