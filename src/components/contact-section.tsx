"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Users, HeartHandshake } from 'lucide-react';

export function ContactSection() {
    const [submitted, setSubmitted] = useState(false);
    const [finalForm, setFinalForm] = useState({
        careRecipientName: '',
        zipcode: '',
        contactName: '',
        contactPhone: '',
        contactEmail: '',
        bestTime: '',
        contactMethod: '',
        additionalInfo: '',
        isSelf: false,
    });
    const [errors, setErrors] = useState<any>({});


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!finalForm.contactName || !finalForm.contactPhone || !finalForm.contactEmail) {
            alert('Please fill out all required fields.');
            return;
        }
        console.log('Form submitted:', finalForm);
        setSubmitted(true);
    };

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
                            src="/logo-dark.png"
                            alt="Noble Health Logo"
                            width={150}
                            height={50}
                            className="h-auto"
                        />
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-lg">
                    {submitted ? (
                        <div className="text-center">
                            <Image
                                src="/logo-dark.png"
                                alt="Noble Health Logo"
                                width={120}
                                height={40}
                                className="mx-auto mb-4"
                            />
                            <h2 className="text-2xl font-bold mb-2 text-foreground">Thank You!</h2>
                            <p className="text-muted-foreground">Your information has been submitted successfully.</p>
                            <p className="text-muted-foreground">We will contact you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <h2 className="text-2xl font-bold text-center mb-4 text-foreground">Get Free Help</h2>
                            
                            <Input type="text" placeholder="Name of person needing care" value={finalForm.careRecipientName} onChange={(e) => setFinalForm({ ...finalForm, careRecipientName: e.target.value })} disabled={finalForm.isSelf} />
                            <Input type="text" placeholder="Zip code" value={finalForm.zipcode} onChange={(e) => setFinalForm({ ...finalForm, zipcode: e.target.value })} />
                            <Input type="text" placeholder="Contact Name (First and Last Name)" required value={finalForm.contactName} onChange={(e) => setFinalForm({ ...finalForm, contactName: e.target.value })} />
                            <Input type="tel" placeholder="Contact Phone Number" required value={finalForm.contactPhone} onChange={(e) => setFinalForm({ ...finalForm, contactPhone: e.target.value })} />
                            <Input type="email" placeholder="Contact Email" required value={finalForm.contactEmail} onChange={(e) => setFinalForm({ ...finalForm, contactEmail: e.target.value })} />
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Select onValueChange={(value) => setFinalForm({ ...finalForm, bestTime: value })}>
                                    <SelectTrigger><SelectValue placeholder="Best time to contact?" /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="morning">Morning (8AM-12PM)</SelectItem>
                                        <SelectItem value="afternoon">Afternoon (12PM-5PM)</SelectItem>
                                        <SelectItem value="evening">Evening (5PM-8PM)</SelectItem>
                                    </SelectContent>
                                </Select>

                                <Select onValueChange={(value) => setFinalForm({ ...finalForm, contactMethod: value })}>
                                    <SelectTrigger><SelectValue placeholder="Contact method?" /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="phone">Phone Call</SelectItem>
                                        <SelectItem value="text">Text Message</SelectItem>
                                        <SelectItem value="email">Email</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium mb-2 text-foreground">Is there anything else we should know?</h4>
                                <Textarea placeholder="Example: Please contact me on Monday afternoon" value={finalForm.additionalInfo} onChange={(e) => setFinalForm({ ...finalForm, additionalInfo: e.target.value })} />
                            </div>

                            <Button type="submit" className="w-full bg-accent hover:bg-accent/90">Get Quick Assistance</Button>

                            <div className="text-xs text-muted-foreground space-y-2 pt-2">
                                <p>By submitting this form, you consent to Noble Health contacting you via phone call, text message, and email using the information provided. Standard message and data rates may apply.</p>
                                <p>We value your privacy. Noble Health will NEVER sell, share, or distribute your personal information to third parties.</p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
