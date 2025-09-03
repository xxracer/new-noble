import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center", className)}>
       <Image 
        src="https://static.wixstatic.com/media/c5947c_b368149f9fad4a548d3266fd4e26cae9~mv2.jpg" 
        alt="Noble Health Logo"
        width={150}
        height={50}
        className='h-auto w-auto'
      />
    </div>
  );
}
