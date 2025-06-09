'use client';

import Image from 'next/image';
import { HiCheckCircle } from 'react-icons/hi';

export default function About() {
  return (
    <section
      id="about"
      role="region"
      aria-labelledby="about-heading"
      className="bg-[var(--purple-6)] text-[var(--foreground)] py-10 lg:py-16 px-6 sm:px-10 lg:px-20 font-rajdhani"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center lg:text-left mb-16">
          <h2
            id="about-heading"
            className="text-3xl md:text-5xl font-kanit font-bold text-[var(--color-primary)] mb-4"
          >
            About Nexoris Technologies
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-4xl mx-auto lg:mx-0">
            Smart solutions. Trusted team. Built to grow with you.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column with Image + Text */}
          <div className="space-y-6 text-[var(--foreground)] h-full flex flex-col justify-between">
            <div className="relative w-full h-[200px] md:h-[260px] rounded-lg overflow-hidden mb-4 hidden md:block">
              <Image
                src="/images/about-us.webp"
                alt="Nexoris team collaborating"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            <div className="space-y-6">
              <p>
                At Nexoris, we believe technology should simplify how you work — not complicate it. We help startups, scale-ups, and enterprises design smarter workflows, build digital platforms, and scale with clarity.
              </p>
              <p>
                Whether you&apos;re building from scratch or optimizing what already exists, our cross-functional team brings together developers, designers, engineers, and product thinkers to turn bold ideas into scalable, human-centered software.
              </p>
              <p>
                From launch to iteration, we don&apos;t just deliver. We stay. Because long-term success is built on clarity, care, and continuous improvement.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-kanit text-[var(--color-primary)] mb-2">Our Mission</h3>
              <p>
                To help businesses thrive by delivering simple, secure, and sustainable digital tools — built with care, backed by strategy, and designed to grow.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-kanit text-[var(--color-primary)] mb-2">Our Vision</h3>
              <p>
                To become the most trusted tech partner for businesses seeking smart, scalable, and human-centered digital solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-kanit text-[var(--color-primary)] mb-4">What Sets Us Apart</h3>
              <ul className="space-y-3">
                {[
                  ['We stay', 'Ongoing support, real improvements, and a team that grows with you.'],
                  ['We fit', 'Solutions that match your workflow, not just the brief.'],
                  ['We simplify', 'No jargon. Just clarity and clean execution.'],
                  ['We obsess over quality', 'Every detail tested. Every feature refined.'],
                  ['We build for real people', 'Tech that feels natural — for teams and users alike.'],
                ].map(([title, desc], i) => (
                  <li key={i} className="flex items-start gap-3 text-left">
                    <HiCheckCircle className="text-[var(--color-primary)] w-6 h-6 mt-1 shrink-0" aria-hidden="true" />
                    <span>
                      <strong>{title}:</strong> {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/get-a-quote"
            className="inline-block bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] transition-colors duration-200 font-medium px-8 py-4 rounded-full"
            aria-label="Jump to contact form to get in touch with Nexoris"
          >
            Let&apos;s Build What’s Next Together →
          </a>
        </div>
      </div>
    </section>
  );
}
