import { HeartPulse } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <HeartPulse className="h-7 w-7 text-primary" />
      <span className="font-headline text-xl font-bold text-primary-foreground-intense">
        Noble Health
      </span>
    </Link>
  );
}
