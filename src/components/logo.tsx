import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
       <Image 
        src="https://static.wixstatic.com/media/c5947c_b368149f9fad4a548d3266fd4e26cae9~mv2.jpg" 
        alt="Noble Health Logo"
        width={40}
        height={40}
        className='rounded-md'
      />
      <span className="font-headline text-xl font-bold text-primary-foreground md:text-gray-800">
        Noble Health
      </span>
    </div>
  );
}
