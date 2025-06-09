'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  'Web Development',
  'Mobile App Development',
  'Custom Software Solutions',
  'UI/UX Design and Consulting',
  'Product Design and Management',
  'SEO and Content Marketing',
  'API Integrations',
  'Data Analytics and Reporting',
  'Digital Transformation Consulting',
  'Cybersecurity Services',
  'Performance Optimization',
  'Website Maintenance and Support',
  'Marketing Automation',
  'Cloud Migration Services',
  'Software Testing and QA',
  'E-commerce Development',
];

export default function GetAQuoteClient() {
  const [otherService, setOtherService] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('https://formsubmit.co/ajax/nexoristechnologiesltd@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (res.ok) {
        form.reset();
        setOtherService(false);
        setSuccessMessage('Thank you! Your message has been sent.');
        setTimeout(() => setSuccessMessage(''), 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Something went wrong. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  }

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
        <li className="text-muted-foreground">Get a Quote</li>
      </ol>
    </nav>
  );
}
  return (
    <section
      id="get-a-quote"
      aria-labelledby="quote-heading"
      className="py-16 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-[#f6f4ff] to-white"
    >
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs/>
        <header className="mb-12 text-center">
          <h1
            id="quote-heading"
            className="text-4xl lg:text-5xl font-bold font-heading text-[var(--color-primary)]"
          >
            Request a Quote
          </h1>
          <p className="mt-4 text-lg text-[var(--color-dark-alt)] max-w-2xl mx-auto">
            Let&apos;s explore how Nexoris can bring your ideas to life. Tell us what you need — we&apos;ll handle the complexity.
          </p>
        </header>

        {successMessage && (
          <div className="mb-6 text-green-600 text-center font-medium bg-green-50 border border-green-200 rounded-md p-3">
            {successMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 bg-white p-8 rounded-2xl shadow-xl"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New quote request from Nexoris" />
          <input type="hidden" name="_template" value="box" />

          <div className="sm:col-span-2">
            <label htmlFor="fullName" className="block text-base font-medium text-[var(--color-dark-alt)]">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="Full Name"
              required
              autoComplete="name"
              className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-base font-medium text-[var(--color-dark-alt)]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              required
              autoComplete="email"
              className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-base font-medium text-[var(--color-dark-alt)]">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="Phone"
              required
              autoComplete="tel"
              className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="service" className="block text-base font-medium text-[var(--color-dark-alt)]">
              Service of Interest
            </label>
            <select
              id="service"
              name="Service"
              required
              className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] cursor-pointer"
              onChange={(e) => setOtherService(e.target.value === 'Other')}
            >
              <option value="">-- Select a service --</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
              <option value="Other">Other (not listed)</option>
            </select>
          </div>

          {otherService && (
            <div className="sm:col-span-2">
              <label htmlFor="customService" className="block text-base font-medium text-[var(--color-dark-alt)]">
                Custom Service
              </label>
              <input
                type="text"
                id="customService"
                name="Custom Service"
                required
                className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>
          )}

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-base font-medium text-[var(--color-dark-alt)]">
              Project Brief / Message
            </label>
            <textarea
              id="message"
              name="Message"
              required
              rows={5}
              placeholder="Briefly describe your project, timeline, or specific challenges."
              className="resize-none mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            ></textarea>
          </div>

          <div className="sm:col-span-2 flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              name="Consent"
              required
              className="mt-1"
              aria-describedby="consent-desc"
            />
            <label htmlFor="consent" id="consent-desc" className="text-sm text-[var(--color-dark-alt)]">
              I consent to Nexoris Technologies handling my data in accordance with its{' '}
              <Link
                href="/privacy-policy"
                className="text-[var(--color-primary)] underline hover:text-[var(--color-secondary)]"
              >
                Privacy Policy
              </Link>
              .
            </label>
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-[var(--color-primary)] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[var(--color-secondary)] transition disabled:opacity-60"
            >
              {isSubmitting ? 'Submitting...' : 'Request Quote'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
