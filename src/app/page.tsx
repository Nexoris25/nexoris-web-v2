import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import OurProcess from '@/components/Process';
import FaqsSection from '@/components/FAQs';

import Script from 'next/script';
import { Metadata } from 'next';
import { generateNexorisStructuredData } from '@/lib/schema/generateSchema';
import { faqs } from '@/data/faqs'; 

export const metadata: Metadata = {
  title: 'Nexoris Technologies – Building the Future of Digital Products',
  description:
    'Nexoris delivers scalable, secure, and performance-driven tech solutions—from custom software to cloud migration. Build with us.',
  metadataBase: new URL('https://www.nexoristech.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Nexoris Technologies – Building the Future of Digital Products',
    description:
      'Nexoris delivers scalable, secure, and performance-driven tech solutions—from custom software to cloud migration.',
    url: 'https:/www.nexoristech.com',
    siteName: 'Nexoris Technologies',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexoris Technologies',
    description:
      'Build with confidence. Nexoris crafts modern digital products with performance, scale, and security in mind.',
    creator: '@nexoristech',
  },
};

// Generate JSON-LD structured data
const schema = generateNexorisStructuredData({
  pageTitle: metadata.title as string,
  pageDescription: metadata.description as string,
  pageUrl: 'https://www.nexoristech.com',
  faqs, // Injected for FAQPage schema
});

export default function Home() {
  return (
    <main>
      {/* Inject structured data via Next.js best practice */}
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Hero />
      <About />
      <Services />
      <OurProcess />
      <Testimonials />
      <Contact />
      <FaqsSection />
    </main>
  );
}
