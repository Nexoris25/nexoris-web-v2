import { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const title = 'Terms of Service – Nexoris Technologies';
const description =
  'These Terms of Service govern your access to and use of Nexoris Technologies Ltd platforms, digital services, and client engagements.';
const pageUrl = 'https://www.nexoristech.com/terms-of-service';

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
  url: 'https://www.nexoristech.com/terms-of-service',
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
        <li className="text-muted-foreground">Terms of Service</li>
      </ol>
    </nav>
  );
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 sm:px-10 lg:px-20 py-20 font-rajdhani">
      <article className="container mx-auto">
        <Breadcrumbs />

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-kanit text-[var(--color-primary)] mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-[var(--text-muted)]">Last Updated: 25 May 2025</p>
        </header>

        <section className="space-y-8 text-base leading-relaxed">
          <p>
            Welcome to Nexoris Technologies Ltd. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website, digital platforms, and any services we provide, including but not limited to web development, mobile app development, custom software solutions, and consulting engagements.
          </p>
          <p>
            Please read these Terms carefully. By accessing or using any part of our services, you agree to be bound by these Terms and all applicable laws. If you do not agree, please do not access or use our services.
          </p>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">1. Who We Are</h2>
          <p>Nexoris Technologies Ltd (&quot;Nexoris&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a technology company specializing in:</p>
          <ul className="list-disc list-inside pl-4">
            <li>Web &amp; Mobile Development</li>
            <li>UI/UX Design &amp; Product Consulting</li>
            <li>Custom Software Solutions</li>
            <li>API &amp; Systems Integration</li>
            <li>Data Analytics &amp; Cloud Optimization</li>
            <li>SEO, Content Marketing, and Automation</li>
            <li>Cybersecurity and Quality Assurance</li>
          </ul>
          <p>We operate in compliance with international data protection standards and local business regulations where applicable.</p>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">2. Eligibility</h2>
          <p>You must be at least 18 years old or the legal age of majority in your jurisdiction to use our services. By using our website or entering into any agreement with us, you confirm that you meet this requirement.</p>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">3. Scope of Services</h2>
          <p>
            We provide technical services on a project or retainer basis. The specific scope, deliverables, timelines, and costs are outlined in individual project proposals or service agreements. Nexoris reserves the right to decline any request or project that does not align with our business policies or capabilities.
          </p>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">4. User Responsibilities</h2>
          <p>When interacting with our platforms or engaging with our team, you agree to:</p>
          <ul className="list-disc list-inside pl-4">
            <li>Provide accurate and complete information</li>
            <li>Use our services only for lawful purposes</li>
            <li>Refrain from infringing on intellectual property or proprietary rights</li>
            <li>Avoid introducing malware, viruses, or any harmful code</li>
          </ul>
          <p>
            You are responsible for maintaining the confidentiality of any login credentials or API keys associated with your project or account.
          </p>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">5. Intellectual Property</h2>
          <p>
            All content, software, branding elements, and proprietary tools developed by Nexoris remain our intellectual property unless otherwise stated in a signed agreement. Clients retain ownership of original content, data, and assets provided to us for use in projects.
          </p>
          <p>No part of our website, codebase, or digital assets may be copied, repurposed, or redistributed without our written permission.</p>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">6. Payments &amp; Invoicing</h2>
          <p>Our services are subject to payment terms defined in each agreement. Unless otherwise specified:</p>
          <ul className="list-disc list-inside pl-4">
            <li>Invoices are payable within 15 days of receipt</li>
            <li>Late payments may incur penalties or service suspensions</li>
            <li>All amounts are exclusive of taxes, which may be added as required by law</li>
          </ul>
          <p>No project will begin without confirmation of an approved proposal, signed agreement, and initial deposit (if applicable).</p>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">7. Confidentiality</h2>
          <p>We treat all non-public information shared with us as confidential, including business strategies, product roadmaps, and proprietary data. We may sign additional NDAs upon request.</p>
          <p>However, confidentiality obligations do not apply to information that:</p>
          <ul className="list-disc list-inside pl-4">
            <li>Was publicly known at the time of disclosure</li>
            <li>Becomes publicly available without breach</li>
            <li>Is disclosed with written permission</li>
          </ul>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">8. Third-Party Services</h2>
          <p>
            Certain Nexoris solutions may integrate third-party tools or APIs (e.g., Stripe, AWS, Firebase). We are not liable for failures, breaches, or data loss arising from these third-party platforms. Clients are encouraged to review their individual terms and privacy policies.
          </p>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">9. Disclaimers</h2>
          <p>
            All services are provided on an &quot;as-is&quot; basis. While Nexoris strives for high standards, we do not guarantee that our services will be error-free, uninterrupted, or perfectly secure.
          </p>
          <p>
            We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement, to the fullest extent permitted by law.
          </p>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">10. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Nexoris will not be liable for any indirect, incidental, consequential, or punitive damages arising from the use of our services, even if advised of the possibility of such damages.
          </p>
          <p>
            Our total liability for any claim related to our services will not exceed the amount paid by you for the specific service that gave rise to the claim.
          </p>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">11. Termination</h2>
          <p>Either party may terminate an engagement by giving written notice, subject to terms in the signed agreement. Upon termination:</p>
          <ul className="list-disc list-inside pl-4">
            <li>You must pay for all services delivered up to that point</li>
            <li>Any licenses or accesses granted by Nexoris will be revoked</li>
            <li>Confidentiality obligations remain in effect</li>
          </ul>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">12. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law principles.
          </p>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">13. Changes to These Terms</h2>
          <p>
            We may update these Terms periodically. All changes will be effective upon posting. Continued use of our services after changes are published constitutes acceptance of the new Terms.
          </p>

          <h2 className="text-xl font-kanit text-[var(--color-primary)]">14. Contact Us</h2>
          <address className="not-italic text-sm mt-2 text-[var(--text-muted)] leading-relaxed">
            Nexoris Technologies Ltd
            <br />
            Lekki, Lagos, Nigeria
            <br />
            Email:{' '}
            <Link href="mailto:support@nexoristech.com" className="text-[var(--color-primary)] underline">
              hello@nexoristech.com
            </Link>
            <br />
            Phone:{' '}
            <Link href="tel:09138133224" className="text-[var(--color-primary)] underline">
              +234 (0) 9138133224
            </Link>
          </address>
        </section>
      </article>
    </main>
  );
}
