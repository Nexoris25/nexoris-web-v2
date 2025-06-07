// lib/schema/generateSchema.ts

export function generateNexorisStructuredData({
  pageTitle,
  pageDescription,
  pageUrl,
  faqs,
}: {
  pageTitle: string;
  pageDescription: string;
  pageUrl: string;
  faqs: { question: string; answer: string }[];
}) {
  const organization = {
    '@type': 'Organization',
    '@id': 'https://www.nexoristech.com/#organization',
    name: 'Nexoris Technologies',
    url: 'https://www.nexoristech.com',
    logo: 'https://www.nexoristech.com/logo.svg',
    sameAs: [
      'https://www.linkedin.com/company/nexoris',
      'https://twitter.com/nexoristech',
    ],
  };

  const webPage = {
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageTitle,
    description: pageDescription,
    inLanguage: 'en',
    isPartOf: { '@id': 'https://www.nexoristech.com/#website' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: pageUrl,
        },
      ],
    },
  };

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
    'Performance Optimization (Web and Apps)',
    'Website Maintenance and Support',
    'Marketing Automation Setup & Management',
    'Cloud Migration and Optimization Services',
    'Software Testing and Quality Assurance',
    'E-commerce Development and Consulting',
  ].map((name) => ({
    '@type': 'Service',
    name,
    provider: { '@id': 'https://www.nexoristech.com/#organization' },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
  }));

  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, webPage, ...services, faqSchema],
  };
}
