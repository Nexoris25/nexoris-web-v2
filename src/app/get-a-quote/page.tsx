import { Metadata } from 'next';
import { generateNexorisStructuredData } from '@/lib/schema/generateSchema';
import GetAQuoteClient from './GetAQuoteClient';

// Separate constants to ensure proper string typing
const pageTitle = 'Request a Quote – Nexoris Technologies';
const pageDescription =
  'Tell us what you need. Our team will craft a tailored solution to meet your business goals with speed, security, and precision.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: 'https://www.nexoristech.com/get-a-quote',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://www.nexoristech.com/get-a-quote',
    type: 'website',
    siteName: 'Nexoris Technologies',
  },
};

export default function GetAQuotePage() {
  const schemaMarkup = generateNexorisStructuredData({
    pageTitle,
    pageDescription,
    pageUrl: 'https://www.nexoristech.com/get-a-quote',
    faqs: [], 
  });

  return (
    <>
      {/* Inject structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      {/* Main page content */}
      <GetAQuoteClient />
    </>
  );
}
