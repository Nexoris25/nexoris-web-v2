import { lazyWithRetry } from '@/utils/lazyWithRetry';
import React, { Suspense } from 'react';

// Lazily load components with retry logic to fix ChunkLoadError
const Hero = lazyWithRetry(() => import('@/components/Hero'));
const About = lazyWithRetry(() => import('@/components/About'));
const Services = lazyWithRetry(() => import('@/components/Services'));
const Testimonials = lazyWithRetry(() => import('@/components/Testimonials'));
const Contact = lazyWithRetry(() => import('@/components/Contact'));
const OurProcess = lazyWithRetry(() => import('@/components/Process'));
const FaqsSection = lazyWithRetry(() => import('@/components/FAQs'));

import Script from 'next/script';
import { Metadata } from 'next';
import { generateNexorisStructuredData } from '@/lib/schema/generateSchema';
import { faqs } from '@/data/faqs'; 

export const dynamic = "force-dynamic";


export const metadata: Metadata = {
  title: 'Nexoris Technologies – Digital Product & Growth Experts',
  description:
    'Nexoris designs and builds secure, scalable digital products across web, mobile, and cloud that help businesses grow with clarity, speed, and lasting impact.',
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
    'Nexoris delivers scalable, secure, and performance-driven tech solutions — from custom software to cloud migration.',
  url: 'https://www.nexoristech.com',
  siteName: 'Nexoris Technologies',
  type: 'website',
  locale: 'en_US',
  images: [
    {
      url: 'https://www.nexoristech.com/navbar-logo-webp',
      width: 1200,
      height: 630,
      alt: 'Nexoris Technologies – Custom Software & Digital Solutions',
    },
  ],
},
twitter: {
  card: 'summary_large_image',
  title: 'Nexoris Technologies',
  description:
    'Build with confidence. Nexoris crafts modern digital products with performance, scale, and security in mind.',
  creator: '@nexoristech',
  images: ['https://www.nexoristech.com/navbar-logo.webp'],
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

      <Suspense fallback={null}>
  <Hero />
</Suspense>

<Suspense fallback={null}>
  <About />
</Suspense>

<Suspense fallback={null}>
  <Services />
</Suspense>

<Suspense fallback={null}>
  <OurProcess />
</Suspense>

<Suspense fallback={null}>
  <Testimonials />
</Suspense>

<Suspense fallback={null}>
  <Contact />
</Suspense>

<Suspense fallback={null}>
  <FaqsSection />
</Suspense>

    </main>
  );
}
