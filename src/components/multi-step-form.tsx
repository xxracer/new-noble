"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

// Schemas
const step1Schema = z.object({
  zipcode: z.string().regex(/^\d{5}$/, "Please enter a valid 5-digit US ZIP code."),
});
const step2Schema = z.object({ relationship: z.string().min(1) });
const step3Schema = z.object({ urgency: z.string().min(1) });
const step4Schema = z.object({ hours: z.string().min(1) });
const step5Schema = z.object({ payment: z.string().min(1) });
const finalStepSchema = z.object({
  contactName: z.string().min(2, "Name is required."),
  contactEmail: z.string().email("Invalid email address."),
  contactPhone: z.string().regex(/^\d{10,}$/, "Invalid phone number (must be at least 10 digits)."),
  careRecipientName: z.string().optional(),
  bestTime: z.string().optional(),
  contactMethod: z.string().optional(),
  additionalInfo: z.string().optional(),
  isSelf: z.boolean().optional(),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type Step3Data = z.infer<typeof step3Schema>;
type Step4Data = z.infer<typeof step4Schema>;
type Step5Data = z.infer<typeof step5Schema>;
type FinalStepData = z.infer<typeof finalStepSchema>;

export function MultiStepForm({ initialLocation }: { initialLocation: string }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [locationText, setLocationText] = useState(initialLocation);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    zipcode: "",
    relationship: "",
    urgency: "",
    hours: "",
    payment: "",
    isVeteran: "",
    additionalServices: [],
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    careRecipientName: "",
    bestTime: "",
    contactMethod: "",
    additionalInfo: "",
    isSelf: false,
  });

  const step1Form = useForm<Step1Data>({ resolver: zodResolver(step1Schema) });
  const step2Form = useForm<Step2Data>({ resolver: zodResolver(step2Schema) });
  const step3Form = useForm<Step3Data>({ resolver: zodResolver(step3Schema) });
  const step4Form = useForm<Step4Data>({ resolver: zodResolver(step4Schema) });
  const step5Form = useForm<Step5Data>({ resolver: zodResolver(step5Schema) });
  const finalForm = useForm<FinalStepData>({ resolver: zodResolver(finalStepSchema) });

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const onStep1Submit = async (data: Step1Data) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.zippopotam.us/us/${data.zipcode}`);
      if (response.data.places?.length > 0) {
        const place = response.data.places[0];
        setLocationText(`${place["place name"]}, ${place["state abbreviation"]} ${data.zipcode}`);
        setFormData((prev) => ({ ...prev, zipcode: data.zipcode }));
        nextStep();
      } else {
        step1Form.setError("zipcode", { type: "manual", message: "Valid ZIP code but no location found." });
      }
    } catch (error) {
      step1Form.setError("zipcode", { type: "manual", message: "Invalid ZIP code. Please enter a valid US ZIP code." });
    } finally {
      setLoading(false);
    }
  };
  
  const onStepSubmit = (step: number, field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if(step === 5) {
      setCurrentStep(6);
      setTimeout(() => setCurrentStep(7), 3000);
    } else {
      nextStep();
    }
  };

  const onFinalSubmit = async (data: FinalStepData) => {
    setLoading(true);
    const fullFormData = { ...formData, ...data };
    // Here you would integrate with your API (AxisCare, Make.com etc.)
    console.log("Submitting final form data:", fullFormData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setLoading(false);
    setSubmitted(true);
    toast({
      title: "Thank you!",
      description: "We've received your information and will be in touch shortly.",
    });
  };
  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Form {...step1Form}>
            <form onSubmit={step1Form.handleSubmit(onStep1Submit)} className="space-y-4">
              <p className="mb-4 text-lg text-foreground font-semibold">
                Start by entering your ZIP code and we&apos;ll match you with the right in-home care options, personalized for your needs.
              </p>
              <FormField
                control={step1Form.control}
                name="zipcode"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <FormControl>
                        <Input placeholder="Enter ZIP code" {...field} className="flex-grow text-base h-12 text-gray-800" />
                      </FormControl>
                      <Button type="submit" size="lg" className="h-12 bg-accent hover:bg-accent/90 text-accent-foreground" disabled={loading}>
                        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                        Find Care Near Me
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        );

      case 2:
        const relationshipOptions = ['spouse', 'parent', 'myself', 'someone-else'];
        return (
          <div className="text-foreground">
            <h3 className="font-bold text-lg mb-2">Who Are You Searching For Care For?</h3>
            <p className="text-sm mb-4">Question 1 of 4</p>
            <RadioGroup onValueChange={(value) => onStepSubmit(2, "relationship", value)} className="grid grid-cols-2 gap-4">
                {relationshipOptions.map(opt => (
                    <RadioGroupItem key={opt} value={opt} id={`rel-${opt}`} className="sr-only" />
                ))}
                {relationshipOptions.map(opt => (
                     <label key={`label-${opt}`} htmlFor={`rel-${opt}`} className={`border rounded-md p-4 text-center cursor-pointer hover:bg-accent/20 ${formData.relationship === opt ? 'bg-accent text-accent-foreground border-accent' : 'bg-white'}`}>
                        {opt.replace('-', ' ').toUpperCase()}
                    </label>
                ))}
            </RadioGroup>
             <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={prevStep}>Back</Button>
            </div>
          </div>
        );
    
      case 3:
        const urgencyOptions = ['immediately', '7days', '30days', 'flexible'];
        return (
           <div className="text-foreground">
            <h3 className="font-bold text-lg mb-2">How Quickly Do You Need Care?</h3>
            <p className="text-sm mb-4">Question 2 of 4</p>
            <RadioGroup onValueChange={(value) => onStepSubmit(3, "urgency", value)} className="grid grid-cols-2 gap-4">
                {urgencyOptions.map(opt => (
                    <RadioGroupItem key={opt} value={opt} id={`urg-${opt}`} className="sr-only" />
                ))}
                {urgencyOptions.map(opt => (
                    <label key={`label-${opt}`} htmlFor={`urg-${opt}`} className={`border rounded-md p-4 text-center cursor-pointer hover:bg-accent/20 ${formData.urgency === opt ? 'bg-accent text-accent-foreground border-accent' : 'bg-white'}`}>
                        {opt === '7days' ? 'Within 7 days' : opt === '30days' ? 'Within 30 days' : opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </label>
                ))}
            </RadioGroup>
             <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={prevStep}>Back</Button>
            </div>
          </div>
        );

      case 4:
        const hoursOptions = ['less10', '11-20', '21-40', '40plus', 'unsure'];
        return (
            <div className="text-foreground">
                <h3 className="font-bold text-lg mb-2">Hours Needed Per Week</h3>
                <p className="text-sm mb-4">Question 3 of 4</p>
                <RadioGroup onValueChange={(value) => onStepSubmit(4, "hours", value)} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {hoursOptions.map(opt => (
                        <RadioGroupItem key={opt} value={opt} id={`hr-${opt}`} className="sr-only" />
                    ))}
                    {hoursOptions.map(opt => (
                        <label key={`label-${opt}`} htmlFor={`hr-${opt}`} className={`border rounded-md p-4 text-center cursor-pointer hover:bg-accent/20 ${formData.hours === opt ? 'bg-accent text-accent-foreground border-accent' : 'bg-white'}`}>
                            {opt === 'less10' ? '< 10' : opt === '40plus' ? '40+' : opt === 'unsure' ? 'Not Sure' : opt}
                        </label>
                    ))}
                </RadioGroup>
                <div className="mt-6 flex justify-between">
                    <Button variant="outline" onClick={prevStep}>Back</Button>
                </div>
            </div>
        );

      case 5:
        const paymentOptions = ['personal funds', 'va', 'medicaid', 'insurance'];
        return (
             <div className="text-foreground">
                <h3 className="font-bold text-lg mb-2">How Do You Plan to Pay?</h3>
                <p className="text-sm mb-4">Question 4 of 4</p>
                <RadioGroup onValueChange={(value) => onStepSubmit(5, "payment", value)} className="grid grid-cols-2 gap-4">
                    {paymentOptions.map(opt => (
                        <RadioGroupItem key={opt} value={opt} id={`pay-${opt}`} className="sr-only" />
                    ))}
                    {paymentOptions.map(opt => (
                        <label key={`label-${opt}`} htmlFor={`pay-${opt}`} className={`border rounded-md p-4 text-center cursor-pointer hover:bg-accent/20 ${formData.payment === opt ? 'bg-accent text-accent-foreground border-accent' : 'bg-white'}`}>
                             {opt === 'va' ? 'VA' : opt === 'insurance' ? 'Long-term care insurance' : opt.charAt(0).toUpperCase() + opt.slice(1)}
                        </label>
                    ))}
                </RadioGroup>
                <div className="mt-6 flex justify-between">
                    <Button variant="outline" onClick={prevStep}>Back</Button>
                </div>
            </div>
        );
      
      case 6:
        return (
          <div className="flex flex-col items-center justify-center text-foreground p-8">
            <Loader2 className="h-12 w-12 animate-spin text-accent" />
            <p className="mt-4 text-lg">Searching for options in your area...</p>
          </div>
        );

      case 7:
        return (
          <div className="text-foreground">
             {submitted ? (
              <div className="text-center p-4">
                <h3 className="font-bold text-2xl mb-2">Thank you!</h3>
                <p>Our team will reach out to you as soon as possible. If you'd like to speak with us sooner, you can text us directly at <strong>713-364-2295</strong>.</p>
              </div>
            ) : (
                <Form {...finalForm}>
                <form onSubmit={finalForm.handleSubmit(onFinalSubmit)} className="space-y-4">
                    <h3 className="font-bold text-lg">Contact Information</h3>
                    <p className="text-sm text-muted-foreground">You are in: {locationText}</p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                        <FormField
                            control={finalForm.control}
                            name="careRecipientName"
                            render={({ field }) => (
                                <FormItem className="flex-grow w-full">
                                    <FormControl>
                                        <Input placeholder="Name of person needing care" {...field} disabled={finalForm.watch("isSelf")} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={finalForm.control}
                            name="isSelf"
                            render={({ field }) => (
                                <FormItem className="flex items-center space-x-2 pt-2 sm:pt-0">
                                     <FormControl>
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange}/>
                                    </FormControl>
                                    <FormLabel>For myself</FormLabel>
                                </FormItem>
                            )}
                        />
                    </div>
                    
                    <FormField control={finalForm.control} name="contactName" render={({ field }) => (<FormItem><FormControl><Input placeholder="Contact Name (First and Last Name)" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={finalForm.control} name="contactPhone" render={({ field }) => (<FormItem><FormControl><Input type="tel" placeholder="Contact Phone Number" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={finalForm.control} name="contactEmail" render={({ field }) => (<FormItem><FormControl><Input type="email" placeholder="Contact Email" {...field} /></FormControl><FormMessage /></FormItem>)} />

                    <FormField control={finalForm.control} name="bestTime" render={({ field }) => (
                        <FormItem>
                           <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger><SelectValue placeholder="Best time to contact you?" /></SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                                    <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                                    <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                                    <SelectItem value="anytime">Anytime</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}/>

                     <FormField control={finalForm.control} name="contactMethod" render={({ field }) => (
                        <FormItem>
                           <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger><SelectValue placeholder="Best contact method?" /></SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="phone">Call</SelectItem>
                                    <SelectItem value="text">Text</SelectItem>
                                    <SelectItem value="email">Email</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}/>
                    
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={loading}>
                        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                        Request a Callback
                    </Button>
                    <p className="text-xs text-muted-foreground pt-2">
                        By submitting, you consent to Noble Health contacting you via phone, text, and email. Standard rates may apply. You can opt out anytime. We will never sell your information.
                    </p>
                </form>
                </Form>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <Card className="mt-10">
      <CardContent className="p-6">
        {renderStep()}
      </CardContent>
    </Card>
  );
}
