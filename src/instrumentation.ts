'use client';

import { onCLS, onLCP, onTTFB, onINP } from 'web-vitals';

export function reportWebVitalsToGA() {
  const sendToAnalytics = ({ name, delta, id }: { name: string; delta: number; id: string }) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(name === 'CLS' ? delta * 1000 : delta),
        event_label: id,
        non_interaction: true,
      });
    }
  };

  onCLS(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
  onINP(sendToAnalytics);
}
