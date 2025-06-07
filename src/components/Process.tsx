'use client';

import {
  FaLightbulb,
  FaCogs,
  FaDraftingCompass,
  FaCode,
  FaClipboardCheck,
  FaRocket,
} from 'react-icons/fa';

const steps = [
  {
    title: 'Discover Your Edge',
    icon: FaLightbulb,
    description:
      'We start by deeply understanding your goals, users, and pain points so we can design a site that works exactly the way your team and customers need it to.',
    bg: 'bg-[#f6f4ff]',
    hover: 'hover:bg-[var(--color-primary)]',
  },
  {
    title: 'Plan for Scale',
    icon: FaCogs,
    description:
      'Together, we define the right tech stack, content structure, and architecture that supports your growth now and in the future.',
    bg: 'bg-[#fff9ec]',
    hover: 'hover:bg-[var(--color-primary)]',
  },
  {
    title: 'Design with Intent',
    icon: FaDraftingCompass,
    description:
      'Every layout, interaction, and component is crafted to reflect your brand, engage your users, and guide them toward action.',
    bg: 'bg-[#eefdf6]',
    hover: 'hover:bg-[var(--color-primary)]',
  },
  {
    title: 'Build with Precision',
    icon: FaCode,
    description:
      'We write clean, modular, high-performance code that integrates seamlessly across frontend and backend, optimized for speed and stability.',
    bg: 'bg-[#fef3f5]',
    hover: 'hover:bg-[var(--color-primary)]',
  },
  {
    title: 'Test, Refine, and Assure Quality',
    icon: FaClipboardCheck,
    description:
      'From usability and SEO to performance and accessibility, we run detailed QA checks on every component across devices, browsers, and breakpoints.',
    bg: 'bg-[#e8f0fe]',
    hover: 'hover:bg-[var(--color-primary)]',
  },
  {
    title: 'Launch & Support',
    icon: FaRocket,
    description:
      'Once your site is live, we don’t disappear. We provide technical documentation, performance monitoring, and ongoing support to keep things running smoothly.',
    bg: 'bg-[#f1f8e9]',
    hover: 'hover:bg-[var(--color-primary)]',
  },
];

export default function OurProcess() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-10 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-[#f6f4ff] to-[#ffffff] text-[var(--foreground)]"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2
            id="process-heading"
            className="text-3xl md:text-5xl font-kanit font-bold text-[var(--color-primary)]"
          >
            Our Process
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[var(--color-dark-alt)] max-w-3xl mx-auto">
            Clear, collaborative, and built for results — here&apos;s how we bring your vision to life.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer">
          {steps.map(({ title, icon: Icon, description, bg, hover }, index) => (
            <article
              key={index}
              className={`group rounded-2xl p-6 shadow-sm transition duration-300 ${bg} ${hover}`}
              role="group"
              aria-label={title}
            >
              <Icon
                className="w-8 h-8 mb-4 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300"
                aria-hidden="true"
              />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">
                {title}
              </h3>
              <p className="text-base text-[var(--color-dark-alt)] group-hover:text-white transition-colors duration-300">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
