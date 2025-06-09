'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 lg:py-2 rounded-3xl w-full bg-[var(--surface)] border-b border-[#e2e2e7] shadow-sm backdrop-blur-md transition-all font-rajdhani"
      role="navigation"
      aria-label="Primary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-[var(--color-primary)] font-kanit text-2xl sm:text-3xl tracking-tight"
          aria-label="Nexoris Home"
        >
          <Image
            src="/navbar-logo.webp"
            alt="Nexoris Technologies Logo"
            width={125}
            height={85}
            className="h-full w-full"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-base">
          <ul className="flex gap-6" role="list">
            <li>
              <Link
                href="/"
                className="text-[var(--color-dark-alt)] hover:text-[var(--color-primary)] font-medium tracking-wide"
              >
                Home
              </Link>
            </li>
            {['about', 'services', 'testimonials', 'contact'].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item}`}
                  className="text-[var(--color-dark-alt)] hover:text-[var(--color-primary)] font-medium tracking-wide transition-colors duration-200"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/get-a-quote"
            className="ml-4 bg-[var(--color-primary)] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[var(--color-secondary)] transition"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]"
        >
          {isOpen ? <HiX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isOpen && (
        <ul
          className="md:hidden w-full bg-[var(--surface)] border-t border-[#eaeaea] px-6 pb-6 pt-4 text-sm font-medium text-[var(--foreground)] space-y-3"
          role="list"
          aria-label="Mobile Menu"
        >
          {['about', 'services', 'testimonials', 'contact'].map((item) => (
            <li key={item}>
              <Link
                href={`#${item}`}
                className="block py-1 hover:text-[var(--color-primary)] transition"
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/get-a-quote"
              className="inline-block mt-3 w-full bg-[var(--color-primary)] text-white text-center py-2 rounded-lg hover:bg-[var(--color-secondary)] transition"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
