"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  zip: z.string().regex(/^\d{5}$/, { message: "Please enter a valid 5-digit ZIP code." }),
});

export function MiniForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      zip: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Thank you!",
      description: "We've received your information and will be in touch shortly.",
    });
    form.reset();
  }

  return (
    <section className="py-20 sm:py-28">
        <div className="container">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                    Have a Question? Get in Touch.
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Fill out the form below and one of our care specialists will contact you to answer your questions.
                </p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-12 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-3">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="(555) 123-4567" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="zip"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ZIP Code</FormLabel>
                                <FormControl>
                                    <Input placeholder="90210" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="mt-8 text-center">
                    <Button type="submit" size="lg" className="h-14 px-10 text-lg bg-accent hover:bg-accent/90 text-accent-foreground">
                        Request Information
                    </Button>
                </div>
                </form>
            </Form>
        </div>
    </section>
  );
}
