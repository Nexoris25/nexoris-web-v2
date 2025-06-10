'use client';

import Link from 'next/link';
import {
  FaCode,
  FaMobileAlt,
  FaCogs,
  FaPaintBrush,
  FaCloudUploadAlt,
  FaPlug,
  FaChartLine,
  FaTachometerAlt,
} from 'react-icons/fa';

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description:
      'Custom websites built for speed, scalability, and pixel-perfect performance across all devices.',
    icon: <FaCode className="w-8 h-8 text-[var(--color-primary)]" aria-hidden="true" />,
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description:
      'Cross-platform apps engineered for performance, usability, and growth — iOS, Android, and beyond.',
    icon: <FaMobileAlt className="w-8 h-8 text-[var(--color-primary)]" aria-hidden="true" />,
  },
  {
    id: 'custom-software-solutions',
    title: 'Custom Software Solutions',
    description:
      'Tailored systems that solve real business problems — from dashboards to full-scale platforms.',
    icon: <FaCogs className="w-8 h-8 text-[var(--color-primary)]" aria-hidden="true" />,
  },
  {
    id: 'ui-ux-design-consulting',
    title: 'UI/UX Design & Consulting',
    description:
      'Design-first experiences that are intuitive, accessible, and aligned with your business goals.',
    icon: <FaPaintBrush className="w-8 h-8 text-[var(--color-primary)]" aria-hidden="true" />,
  },
  {
    id: 'cloud-migration-optimization',
    title: 'Cloud Migration & Optimization',
    description:
      'Seamless migration and optimization strategies for high availability, performance, and cost savings.',
    icon: <FaCloudUploadAlt className="w-8 h-8 text-[var(--color-primary)]" aria-hidden="true" />,
  },
  {
    id: 'api-integrations-automation',
    title: 'API Integrations & Automation',
    description:
      'Connect your systems and automate workflows to reduce friction, save time, and boost efficiency.',
    icon: <FaPlug className="w-8 h-8 text-[var(--color-primary)]" aria-hidden="true" />,
  },
  {
    id: 'seo-content-marketing',
    title: 'SEO & Content Marketing',
    description:
      'Search-optimized content and on-page SEO that bring the right users to your platform.',
    icon: <FaChartLine className="w-8 h-8 text-[var(--color-primary)]" aria-hidden="true" />,
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimization',
    description:
      'Speed, stability, and accessibility improvements that delight users and increase conversions.',
    icon: <FaTachometerAlt className="w-8 h-8 text-[var(--color-primary)]" aria-hidden="true" />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      role="region"
      aria-labelledby="services-heading"
      className="bg-gradient-to-br from-[#f6f4ff] to-[#ffffff] py-10 lg:py-16 px-6 sm:px-10 lg:px-20"
    >
      <div className="container mx-auto">
        <header className="text-center mb-14">
          <h2
            id="services-heading"
            className="text-3xl md:text-5xl font-kanit font-bold text-[var(--color-primary)] mb-4"
          >
            What We Do
          </h2>
          <p className="text-lg text-[var(--color-dark-alt)] max-w-2xl mx-auto">
            Nexoris Technologies delivers end-to-end digital services tailored to your business goals — no bloat, no fluff, just results.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ id, title, description, icon }) => (
            <Link
              key={id}
              href={`#${id}`}
              scroll={true}
              className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              aria-labelledby={`${id}-title`}
            >
              <div className="flex items-center gap-4 mb-4">
                {icon}
                <h3
                  id={`${id}-title`}
                  className="text-xl font-semibold text-[var(--color-primary)] group-hover:underline font-rajdhani"
                >
                  {title}
                </h3>
              </div>
              <p className="text-base text-[var(--color-dark-alt)]">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
