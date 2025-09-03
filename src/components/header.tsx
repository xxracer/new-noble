"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";

const navLinks = [
  { href: "#", label: "Services" },
  { href: "#areas-we-serve", label: "Areas We Serve" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Work with Us" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
           <Link href="/">
            <Logo />
          </Link>
          <nav className="items-center gap-6 text-base font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground text-lg"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="hidden md:flex items-center gap-2">
           <Button variant="outline" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 hover:text-accent-foreground text-sm font-bold">
            <Link href="https://www.mynoblehealth.com/free-consultation" target="_blank" rel="noopener noreferrer">
              FREE CARE CONSULTATION
            </Link>
          </Button>
           <a href="tel:+17133642295">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Phone className="mr-2 h-4 w-4" />
                <div className="text-left">
                    <div className="text-xs leading-tight">CALL US</div>
                    <div className="text-sm font-bold leading-tight">(713) 364-2295</div>
                </div>
            </Button>
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="flex w-full items-center justify-between md:hidden">
            <div className="flex items-center gap-2">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="Toggle menu" className="h-9 w-9">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <div className="px-2 py-6">
                      <div className="mb-6" onClick={() => setIsOpen(false)}>
                        <Link href="/">
                          <Logo />
                        </Link>
                      </div>
                      <nav className="grid gap-4">
                        {navLinks.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            className="text-lg font-medium text-foreground/80 hover:text-foreground"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </nav>
                      <div className="mt-6">
                         <Button variant="outline" asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 hover:text-accent-foreground font-bold">
                            <Link href="https://www.mynoblehealth.com/free-consultation" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                              FREE CARE CONSULTATION
                            </Link>
                          </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
                 <Link href="/" className="flex-shrink-0">
                    <Logo />
                 </Link>
            </div>

            <div className="flex items-center">
                <a href="tel:+17133642295">
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs px-3 whitespace-nowrap">
                        <Phone className="mr-1 h-3 w-3" />
                        <span>(713) 364-2295</span>
                    </Button>
                </a>
            </div>
        </div>
      </div>
    </header>
  );
}
