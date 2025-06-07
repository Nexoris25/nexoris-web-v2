import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { generateNexorisStructuredData } from '@/lib/schema/generateSchema';

const title = 'Privacy Policy – Nexoris Technologies';
const description =
  'Learn how we collect, use, and safeguard your data. Our privacy policy reflects our global commitment to data protection, transparency, and user rights.';
const pageUrl = 'https://www.nexoristech.com/privacy-policy';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: 'website',
    siteName: 'Nexoris Technologies',
  },
};

const structuredData = generateNexorisStructuredData({
  pageTitle: title,
  pageDescription: description,
  pageUrl,
  faqs: [],
});

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap gap-2 text-sm text-muted-foreground">
        <li>
          <Link
            href="/"
            className="text-[var(--color-primary)] underline hover:no-underline"
          >
            Home
          </Link>
          <span className="mx-1">/</span>
        </li>
        <li className="text-muted-foreground">Privacy Policy</li>
      </ol>
    </nav>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 sm:px-10 lg:px-20 py-20 font-rajdhani">
        <article className="max-w-4xl mx-auto">
          <Breadcrumbs />

          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-kanit text-[var(--color-primary)] mb-2">
              Privacy Policy
            </h1>
            <p className="text-sm text-[var(--text-muted)]">
              Effective Date: June 01, 2025<br />
              Last Updated: May 31, 2025
            </p>
          </header>

          <section className="space-y-8 text-base leading-relaxed">
            <p>
              Nexoris Technologies Ltd. (&quot;Nexoris&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you interact with our website, services, or team.
            </p>
            <p>By accessing our website or engaging with our services, you consent to the practices outlined below.</p>

            <h2 className="text-xl font-kanit text-[var(--color-primary)]">1. What Information We Collect</h2>

            <h3 className="font-semibold">a) Information You Provide</h3>
            <p>We collect personal information that you voluntarily provide when you:</p>
            <ul className="list-disc list-inside pl-4">
              <li>Fill out a contact or inquiry form</li>
              <li>Request a quote or consultation</li>
              <li>Sign up for our newsletter</li>
              <li>Apply for a job</li>
              <li>Enter into a service agreement</li>
            </ul>
            <p>Typical data includes:</p>
            <ul className="list-disc list-inside pl-4">
              <li>Full name</li>
              <li>Company name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Job title or role</li>
              <li>Billing details</li>
              <li>Project requirements</li>
            </ul>

            <h3 className="font-semibold">b) Information We Collect Automatically</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul className="list-disc list-inside pl-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages viewed, time spent, referring URLs</li>
              <li>Error logs and usage behavior</li>
            </ul>

            <h3 className="font-semibold">c) Third-Party Data Sources</h3>
            <p>We may also receive personal data from:</p>
            <ul className="list-disc list-inside pl-4">
              <li>Referrals and partners</li>
              <li>Marketing platforms (e.g., LinkedIn, Meta, Google Ads)</li>
              <li>Analytics providers</li>
            </ul>

            <h2 className="text-xl font-kanit text-[var(--color-primary)]">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside pl-4">
              <li>Deliver and manage our services</li>
              <li>Communicate with you regarding inquiries or projects</li>
              <li>Improve website performance and user experience</li>
              <li>Personalize our marketing and outreach</li>
              <li>Send service updates, newsletters, or promotional materials</li>
              <li>Comply with legal or contractual obligations</li>
              <li>Prevent fraud, misuse, or system abuse</li>
            </ul>

            <h2 className="text-xl font-kanit text-[var(--color-primary)]">3. Legal Basis for Processing</h2>
            <ul className="list-disc list-inside pl-4">
              <li><strong>Consent:</strong> for activities like email marketing</li>
              <li><strong>Contractual necessity:</strong> to fulfill a project or agreement</li>
              <li><strong>Legal obligation:</strong> to comply with applicable regulations</li>
              <li><strong>Legitimate interest:</strong> for internal analytics, communication, or business development</li>
            </ul>

            <h2 className="text-xl font-kanit text-[var(--color-primary)]">4. Who We Share Your Data With</h2>
            <ul className="list-disc list-inside pl-4">
              <li>Technology providers (e.g., cloud storage, CRM, email services)</li>
              <li>Payment processors and financial institutions</li>
              <li>Legal or regulatory authorities, where required</li>
              <li>Business partners, with your consent</li>
              <li>Successors, in the event of a merger or acquisition</li>
            </ul>

            <h2 className="text-xl font-kanit text-[var(--color-primary)]">5. International Transfers</h2>
            <p>Your data may be processed in jurisdictions with different levels of protection. We use Standard Contractual Clauses (SCCs) or equivalent safeguards for international transfers.</p>

            <h2 className="text-xl font-kanit text-[var(--color-primary)]">6. Data Retention</h2>
            <p>We retain data only as long as necessary. After that, it&apos;s securely deleted or anonymized.</p>

            <h2 className="text-xl font-kanit text-[var(--color-primary)]">7. Your Rights</h2>
            <ul className="list-disc list-inside pl-4">
              <li>Access or correct your data</li>
              <li>Request deletion</li>
              <li>Object to processing</li>
              <li>Withdraw consent</li>
              <li>Request data portability</li>
            </ul>

            <h2 className="text-xl font-kanit text-[var(--color-primary)]">8. Contact</h2>
            <address className="not-italic text-sm mt-2 text-[var(--text-muted)] leading-relaxed">
              Nexoris Technologies Ltd.<br />
              Email:{' '}
              <Link
                href="mailto:hello@nexoristech.com"
                className="text-[var(--color-primary)] underline"
              >
                hello@nexoristech.com
              </Link><br />
              Website:{' '}
              <Link
                href="https://www.nexoristech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] underline"
              >
                www.nexoristech.com
              </Link><br />
              Address: Lekki, Lagos, Nigeria
            </address>
          </section>
        </article>
      </main>
    </>
  );
}
