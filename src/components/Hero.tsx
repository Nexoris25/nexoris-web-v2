'use client';

import Link from 'next/link';
import Image from 'next/image';
import ClientLogosCarousel from './ClientLogos';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      role="region"
      className="w-full py-10 lg:pt-24 px-6 sm:px-10 lg:px-20 
                 bg-gradient-to-br from-[#f6f4ff] to-white text-[var(--primary-gray)]"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* TEXT SIDE */}
        <header className="text-center lg:text-left">
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl font-kanit font-bold leading-tight mb-6 text-[var(--color-primary)]"
          >
            You Dream It.<br className="hidden md:block" />
            We Build It Right.<br className="hidden md:block" />
            From Day One.
          </h1>
          <p className="text-lg md:text-xl font-rajdhani mb-8 max-w-xl mx-auto lg:mx-0 text-[var(--primary-gray)]">
            You&apos;ve been sketching, pitching, overthinking. Maybe even burned by slow devs or unstable builds. At Nexoris, we don&apos;t just launch MVPs — we build fast, scalable products that are easy to grow, easy to love, and ready for whatever&apos;s next.
          </p>
          <Link
            href="/get-a-quote"
            aria-label="Start your Nexoris project — jump to contact form"
            className="inline-block font-medium font-rajdhani px-6 py-3 rounded-full shadow 
                       bg-[var(--color-primary)] text-white 
                       hover:bg-[var(--color-secondary)] transition-colors duration-200"
          >
            Let&apos;s Build Something Great →
          </Link>
        </header>

        {/* IMAGE SIDE */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/hero-image.svg"
            alt="A Nigerian software team collaborating on a web and mobile project for clients"
            fill
            className="object-cover"
            priority
            loading="eager"
          />
        </div>
      </div>
      <ClientLogosCarousel />
    </section>
  );
}
