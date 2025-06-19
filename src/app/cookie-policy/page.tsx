import { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = "force-dynamic";


const title = 'Cookie Policy – Nexoris Technologies';
const description =
  'This Cookie Policy explains how Nexoris Technologies Ltd uses cookies and similar tracking technologies across our website and platforms.';
const pageUrl = 'https://www.nexoristech.com/cookie-policy';

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
  title: 'Nexoris Technologies – Building the Future of Digital Products',
  description:
    'Nexoris delivers scalable, secure, and performance-driven tech solutions - from custom software to cloud migration.',
  url: 'https://www.nexoristech.com/cookie-policy',
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
        <li className="text-muted-foreground">Cookie Policy</li>
      </ol>
    </nav>
  );
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 sm:px-10 lg:px-20 py-20 font-rajdhani">
      <article className="container mx-auto">
        <Breadcrumbs />

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-kanit text-[var(--color-primary)] mb-2">
            Cookie Policy
          </h1>
          <p className="text-sm text-[var(--text-muted)]">Last Updated: 25 May 2025</p>
        </header>

        <section className="space-y-8 text-base leading-relaxed">
          <p>
            This Cookie Policy explains how Nexoris Technologies Ltd (&quot;Nexoris&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar tracking technologies on our website and digital platforms.
          </p>
          <p>
            By continuing to browse or use our site, you agree to the use of cookies as described in this policy. You can adjust your cookie preferences at any time using your browser settings or cookie banner controls.
          </p>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device (computer, phone, tablet) when you visit a website. They help websites remember your preferences, improve performance, analyze usage, and deliver personalized content or ads.
          </p>
          <p>There are different types of cookies:</p>
          <ul className="list-disc list-inside pl-4">
            <li>First-party cookies: Set by the website you&apos;re visiting</li>
            <li>Third-party cookies: Set by external platforms for analytics, ads, or integrations</li>
            <li>Session cookies: Temporary and deleted after your visit</li>
            <li>Persistent cookies: Stored on your device for a set period</li>
          </ul>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">2. Why We Use Cookies</h2>
          <p>Nexoris uses cookies to:</p>
          <ul className="list-disc list-inside pl-4">
            <li>Ensure core functionality and performance of our website</li>
            <li>Enhance user experience by remembering your preferences</li>
            <li>Analyze site traffic and usage patterns</li>
            <li>Provide secure login and form submission functionality</li>
            <li>Support marketing and retargeting efforts (e.g., Google Ads, LinkedIn Ads)</li>
          </ul>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">3. Types of Cookies We Use</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border border-gray-300 text-sm">
              <thead className="bg-[var(--color-primary)] text-white">
                <tr>
                  <th className="p-3 text-left">Type</th>
                  <th className="p-3 text-left">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="p-3 font-medium">Strictly Necessary</td>
                  <td className="p-3">Enable basic features such as navigation, login, and security. Required for the site to function.</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-3 font-medium">Performance &amp; Analytics</td>
                  <td className="p-3">Collect anonymous data about site usage to help us improve functionality.</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-3 font-medium">Functionality</td>
                  <td className="p-3">Remember user preferences to provide a more personalized experience.</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-3 font-medium">Targeting &amp; Advertising</td>
                  <td className="p-3">Help deliver relevant ads or content and measure campaign effectiveness.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">4. Third-Party Cookies</h2>
          <p>We may use third-party services that set their own cookies, including:</p>
          <ul className="list-disc list-inside pl-4">
            <li>Google Analytics</li>
            <li>Meta Pixel / LinkedIn Tag</li>
            <li>Stripe / Paystack</li>
            <li>YouTube / Vimeo</li>
          </ul>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">5. How to Manage Cookies</h2>
          <p>You can manage or disable cookies through your browser settings:</p>
          <ul className="list-disc list-inside pl-4">
            <li><strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies</li>
            <li><strong>Firefox:</strong> Preferences &gt; Privacy & Security</li>
            <li><strong>Safari:</strong> Preferences &gt; Privacy</li>
            <li><strong>Edge:</strong> Settings &gt; Site Permissions</li>
          </ul>
          <p>
            You can also opt out of personalized ads via{' '}
            <Link
              href="https://youradchoices.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] underline"
            >
              youradchoices.com
            </Link>{' '}
            or{' '}
            <Link
              href="https://www.networkadvertising.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] underline"
            >
              networkadvertising.org
            </Link>.
          </p>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">6. Updates to This Policy</h2>
          <p>We may revise this Cookie Policy from time to time. Changes will be posted with the updated date.</p>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">7. Contact Us</h2>
          <address className="not-italic text-sm mt-2 text-[var(--text-muted)] leading-relaxed">
            Nexoris Technologies Ltd
            <br />
            Email:{' '}
            <Link
              href="mailto:support@nexoristech.com"
              className="text-[var(--color-primary)] underline"
            >
              support@nexoristech.com
            </Link>
            <br />
            Phone: +234 (0) 9138133224
          </address>
        </section>
      </article>
    </main>
  );
}
