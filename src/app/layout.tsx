import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

export const metadata: Metadata = {
  title: 'Noble Health | Premier Home Health Care Services in Texas',
  description: 'Noble Health provides compassionate, professional in-home health care across Texas. Find the perfect care match for your loved ones today with our free care consultation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Noble Health",
    "url": "https://www.mynoblehealth.com",
    "telephone": "+17133780781",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "description": "Premier provider of personalized in-home health care services throughout Texas, matching patients with optimal care options.",
    "serviceType": [
      "Home Health Care",
      "Skilled Nursing",
      "Personal Care Assistance",
      "Senior Care"
    ],
    "areaServed": {
      "@type": "State",
      "name": "Texas"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning={true}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
