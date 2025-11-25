"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Users, HeartHandshake } from 'lucide-react';
import { LocationContactForm } from '@/components/location-contact-form';

export function ContactSection() {
    return (
        <section id="contact-shortlink" className="py-12 md:py-20 bg-secondary">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    <Card className="bg-card">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 font-headline text-xl">
                                <ShieldCheck className="h-6 w-6 text-primary" />
                                Qualified & Professional
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">
                            <p>At Noble Health, every caregiver is thoroughly background-checked, insured, and professional so you can feel confident knowing your family is in safe, capable hands.</p>
                        </CardContent>
                    </Card>
                     <Card className="bg-card">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 font-headline text-xl">
                                <Users className="h-6 w-6 text-primary" />
                                Trusted & Compassionate
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">
                            <p>We're a trusted local provider with a commitment to compassion, reliability, and integrity. Let us support your loved one like they're part of our own family.</p>
                        </CardContent>
                    </Card>
                     <Card className="bg-card">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 font-headline text-xl">
                                <HeartHandshake className="h-6 w-6 text-primary" />
                                Full-Service Provider
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">
                             <p>Beyond Caregiving: While we specialize in private caregiver services, Noble Health is also a full-service home health provider. Through our trusted partner network that includes hospice care, assisted living communities, and skilled nursing we can quickly connect families to the right support, no matter the need.</p>
                        </CardContent>
                    </Card>
                    <div className="mt-6 flex justify-center">
                        <Image
                            src="https://static.wixstatic.com/media/c5947c_b368149f9fad4a548d3266fd4e26cae9~mv2.jpg"
                            alt="Noble Health Logo"
                            width={150}
                            height={50}
                            className="h-auto"
                        />
                    </div>
                </div>
                <LocationContactForm />
            </div>
        </section>
    );
}