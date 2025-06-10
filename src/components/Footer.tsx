'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-white py-10 px-6 sm:px-10 lg:px-20 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Logo + About */}
        <div>
          <Link href="/" aria-label="Nexoris Home">
            <Image
              src="/footer-logo.webp"
              alt="Nexoris Technologies Logo"
              width={140}
              height={40}
              priority
            />
          </Link>
          <p className="mt-4 text-sm text-gray-300 max-w-xs">
            Nexoris Technologies builds scalable, secure, and high-performance digital products for startups and enterprises worldwide.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-base font-semibold mb-4 text-white">Contact</h2>
          <ul className="space-y-2 text-sm text-gray-300" aria-label="Contact Information">
            <li>
              Email:{' '}
              <a
                href="mailto:hello@nexoristech.com"
                className="text-white hover:underline"
              >
                hello@nexoristech.com
              </a>
            </li>
            <li>
              Phone:{' '}
              <p className="inline text-white">+234 (0) 913 813 3224</p>
            </li>
            <li>
              Office: Lekki, Lagos, Nigeria (Remote-first, serving clients globally)
            </li>
            <li>Business Hours: Monday – Friday</li>
            <li>Timezone-friendly scheduling available worldwide</li>
          </ul>
        </div>

        {/* Links + Socials */}
        <div>
          <h2 className="text-base font-semibold mb-4 text-white">Explore</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/privacy-policy" className="text-white hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="text-white hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="text-white hover:underline">
                Cookie Policy
              </Link>
            </li>
          </ul>

          <div className="mt-6 flex gap-4 items-center" aria-label="Nexoris social media links">
            <Link
              href="https://www.linkedin.com/company/nexoris-technologies/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nexoris on LinkedIn"
              className="hover:text-[var(--color-accent)] transition text-xl"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://x.com/Nexoristech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nexoris on X (formerly Twitter)"
              className="hover:text-[var(--color-accent)] transition text-xl"
            >
              <FaXTwitter/>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61575547172687&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nexoris on Facebook"
              className="hover:text-[var(--color-accent)] transition text-xl"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.instagram.com/nexoristechnologies/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nexoris on Instagram"
              className="hover:text-[var(--color-accent)] transition text-xl"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.tiktok.com/@nexoristech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nexoris on TikTok"
              className="hover:text-[var(--color-accent)] transition text-xl"
            >
              <FaTiktok />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Nexoris Technologies. All rights reserved.
      </div>
    </footer>
  );
}
