import type { Metadata } from "next";
import Script from "next/script";
import { Kanit, Rajdhani } from "next/font/google";
import "./globals.css";

import ClientLayout from "@/components/ClientLayout"; // ✅ Server-safe import

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-kanit",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexoris Technologies – Engineering Scalable Digital Solutions",
  description: "Custom web, mobile, and cloud software development tailored to your business by Nexoris Technologies.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`light ${kanit.variable} ${rajdhani.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y1ZM9PF3N3"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y1ZM9PF3N3', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="font-rajdhani antialiased bg-white text-[#101115]">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
