import { NextResponse } from 'next/server';

export function GET() {
  const body = `
User-agent: *
Allow: /

Sitemap: https://www.nexoristech.com/sitemap.xml
`;

  return new NextResponse(body.trim(), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
