import { HeartPulse } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <div className='bg-white p-1 rounded-md'>
        <HeartPulse className="h-7 w-7 text-primary" />
      </div>
      <span className="font-headline text-xl font-bold text-primary-foreground md:text-gray-800">
        Noble Health
      </span>
    </Link>
  );
}
