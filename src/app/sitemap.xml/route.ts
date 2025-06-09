export async function GET(): Promise<Response> {
  const baseUrl = 'https://www.nexoristech.com';
  const lastModified = new Date().toISOString();

  const staticRoutes = [
    '/',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
    '/get-a-quote',
  ];

  const urls = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (route) => `<url>
  <loc>${route.url}</loc>
  <lastmod>${route.lastModified}</lastmod>
</url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
