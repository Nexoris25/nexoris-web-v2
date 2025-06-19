'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import AnalyticsProvider from "@/components/AnalyticsProvider";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <AnalyticsProvider />
      {children}
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </>
  );
}
