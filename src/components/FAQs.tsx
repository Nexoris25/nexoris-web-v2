'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { faqs } from '@/data/faqs';

export default function FaqsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-heading"
      className="py-8 px-6 sm:px-10 lg:px-20bg-gradient-to-br from-[#f6f4ff] to-white"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h2
            id="faqs-heading"
            className="text-3xl md:text-4xl font-kanit font-bold text-[var(--color-primary)]"
          >
            Frequently Asked Questions
          </h2>
        </header>
        <dl className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[var(--color-accent)] rounded-xl overflow-hidden shadow-sm"
            >
              <dt>
                <button
                  className="w-full flex justify-between cursor-pointer items-center text-left p-5 text-[var(--color-primary)] font-semibold text-lg focus:outline-none focus:ring-1 focus:ring-[var(--color-muted)]"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  {faq.question}
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </dt>
              <dd
                id={`faq-answer-${index}`}
                className={`px-5 pb-5 pt-0 text-base text-[var(--color-dark-alt)] mt-2 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
