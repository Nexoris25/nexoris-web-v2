import { NextResponse } from 'next/server';

export function GET() {
  const body = `
User-agent: *
Disallow: /?_task=login
Disallow: /webmail
Disallow: /roundcube
Disallow: /mail
Disallow: /admin
Disallow: /login
Disallow: /?*
Disallow: /$
Disallow: /navbar-logo-webp
Disallow: /favicon.ico
Disallow: /sitemap.xml.gz
Disallow: /robots.txt
Disallow: /manifest.json
Disallow: /api/
Disallow: /404
Disallow: /500
Disallow: /_next/
Disallow: /server/
Disallow: /*.ts$
Disallow: /*.tsx$


Sitemap: https://www.nexoristech.com/sitemap.xml
`;

  return new NextResponse(body.trim(), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
