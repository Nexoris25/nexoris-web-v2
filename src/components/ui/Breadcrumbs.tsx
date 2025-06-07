'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronRight } from 'react-icons/fa';

interface Crumb {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  segments?: { name: string; path: string }[]; // allow optional override
}

function formatSegment(segment: string): string {
  return decodeURIComponent(segment)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

export default function Breadcrumbs({ segments }: BreadcrumbsProps) {
  const pathname = usePathname();

  const crumbs: Crumb[] = segments
    ? segments.map((s) => ({ name: s.name, href: s.path }))
    : [
        { name: 'Home', href: '/' },
        ...pathname
          .split('/')
          .filter(Boolean)
          .map((seg, idx, arr) => ({
            name: formatSegment(seg),
            href: '/' + arr.slice(0, idx + 1).join('/'),
          })),
      ];

  return (
    <nav
      className="text-sm text-[var(--color-muted)] mb-6 flex items-center flex-wrap overflow-x-auto"
      aria-label="Breadcrumb"
    >
      {crumbs.map((crumb, index) => (
        <span key={crumb.href} className="flex items-center space-x-2">
          {index > 0 && <FaChevronRight className="text-xs" aria-hidden="true" />}
          {index < crumbs.length - 1 ? (
            <Link
              href={crumb.href}
              className="hover:text-[var(--color-primary)] transition-colors duration-150 ease-in-out"
            >
              {crumb.name}
            </Link>
          ) : (
            <span className="text-[var(--foreground)]" aria-current="page">
              {crumb.name}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
