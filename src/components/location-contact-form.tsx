"use client";

import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export function LocationContactForm() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const { toast } = useToast();
    const [form, setForm] = useState({
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
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.contactName || !form.contactPhone || !form.contactEmail || !form.careRecipientName || !form.zipcode || !form.bestTime || !form.contactMethod || !form.additionalInfo) {
            toast({
                title: "Error",
                description: "Please fill out all required fields.",
                variant: "destructive",
            });
            return;
        }
        setLoading(true);
        try {
            await axios.post('/api/submit-form', { ...form, formName: 'Location Contact Form' });
            setSubmitted(true);
             toast({
                title: "Thank You!",
                description: "Your form has been submitted. We will be in touch shortly.",
            });
        } catch (error) {
            console.error('Form submission error:', error);
            toast({
                title: "Submission Error",
                description: "There was an error submitting your form. Please try again.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="bg-card p-8 rounded-lg shadow-lg text-center">
                <Image
                    src="https://static.wixstatic.com/media/c5947c_b368149f9fad4a548d3266fd4e26cae9~mv2.jpg"
                    alt="Noble Health Logo"
                    width={120}
                    height={40}
                    className="mx-auto mb-4"
                />
                <h2 className="text-2xl font-bold mb-2 text-foreground">Thank You!</h2>
                <p className="text-muted-foreground">Your information has been submitted successfully.</p>
                <p className="text-muted-foreground">We will contact you shortly.</p>
            </div>
        )
    }

    return (
        <div className="bg-card p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-bold text-center mb-4 text-foreground">Get Free Help</h2>
                
                <Input type="text" placeholder="Name of person needing care" required value={form.careRecipientName} onChange={(e) => setForm({ ...form, careRecipientName: e.target.value })} className="bg-muted"/>
                <Input type="text" placeholder="Zip code" required value={form.zipcode} onChange={(e) => setForm({ ...form, zipcode: e.target.value })} className="bg-muted"/>
                <Input type="text" placeholder="Contact Name (First and Last Name)" required value={form.contactName} onChange={(e) => setForm({ ...form, contactName: e.target.value })} className="bg-muted"/>
                <Input type="tel" placeholder="Contact Phone Number" required value={form.contactPhone} onChange={(e) => setForm({ ...form, contactPhone: e.target.value })} className="bg-muted"/>
                <Input type="email" placeholder="Contact Email" required value={form.contactEmail} onChange={(e) => setForm({ ...form, contactEmail: e.target.value })} className="bg-muted"/>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select onValueChange={(value) => setForm({ ...form, bestTime: value })} value={form.bestTime}>
                        <SelectTrigger className="bg-muted"><SelectValue placeholder="Best time to contact?" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="morning">Morning (8AM-12PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12PM-5PM)</SelectItem>
                            <SelectItem value="evening">Evening (5PM-8PM)</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select onValueChange={(value) => setForm({ ...form, contactMethod: value })} value={form.contactMethod}>
                        <SelectTrigger className="bg-muted"><SelectValue placeholder="Contact method?" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="phone">Phone Call</SelectItem>
                            <SelectItem value="text">Text Message</SelectItem>
                            <SelectItem value="email">Email</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <h4 className="text-sm font-medium mb-2 text-foreground">Is there anything else we should know?</h4>
                    <Textarea placeholder="Example: Please contact me on Monday afternoon" required value={form.additionalInfo} onChange={(e) => setForm({ ...form, additionalInfo: e.target.value })} className="bg-muted"/>
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={loading}>
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    Get Quick Assistance
                </Button>

                <div className="text-xs text-muted-foreground space-y-2 pt-2">
                    <p>By submitting this form, you consent to Noble Health contacting you via phone call, text message, and email using the information provided. Standard message and data rates may apply.</p>
                    <p>We value your privacy. Noble Health will NEVER sell, share, or distribute your personal information to third parties.</p>
                </div>
            </form>
        </div>
    );
}
