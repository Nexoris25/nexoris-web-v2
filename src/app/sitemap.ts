// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function generateSitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nexoristech.com';
  const lastModified = new Date().toISOString();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified,
    },
  ];
}
