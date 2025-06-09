// src/components/AnalyticsProvider.tsx
'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function AnalyticsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-Y1ZM9PF3N3', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
