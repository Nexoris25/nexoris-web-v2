import { NextResponse } from 'next/server';

export function GET() {
  const body = `
User-agent: *

# Block Roundcube and webmail-related routes
Disallow: /roundcube/
Disallow: /webmail
Disallow: /mail

# Block admin and login areas
Disallow: /admin
Disallow: /login

# Block internal framework and API routes
Disallow: /api/
Disallow: /_next/
Disallow: /server/

# Optional: Block error pages if they expose sensitive output
# Disallow: /404
# Disallow: /500

# Do NOT block favicon, manifest, or sitemap
Allow: /
Allow: /robots.txt
Allow: /sitemap.xml
Allow: /favicon.ico
Allow: /manifest.json

Sitemap: https://www.nexoristech.com/sitemap.xml
`;

  return new NextResponse(body.trim(), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
