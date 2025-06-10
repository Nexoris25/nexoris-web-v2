'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';

const navItems = ['about', 'services', 'testimonials', 'contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      role="navigation"
      aria-label="Primary"
      className="sticky top-0 z-50 h-16 lg:h-20 rounded-b-3xl w-full bg-[var(--surface)] border-b border-[#e2e2e7] shadow-sm backdrop-blur-md transition-all font-rajdhani"
    >
      <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Nexoris Home"
          className="flex items-center h-full text-[var(--color-primary)] font-kanit text-2xl sm:text-3xl tracking-tight"
        >
          <Image
            src="/navbar-logo.webp"
            alt="Nexoris Technologies Logo"
            width={125}
            height={85}
            className="object-contain lg:h-12 w-auto"
            priority
          />
        </Link>

        {/* Mobile CTA */}
        <Link
          href="/get-a-quote"
          className="block md:hidden order-2 bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[var(--color-secondary)] transition"
        >
          Get a Quote
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-base">
          <ul className="flex gap-6 items-center" role="list">
            <li>
              <Link
                href="/"
                className="text-[var(--color-dark-alt)] hover:text-[var(--color-primary)] font-medium tracking-wide"
              >
                Home
              </Link>
            </li>
            {navItems.map((item) => (
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
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden order-3 text-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]"
        >
          {isOpen ? <HiX className="w-8 h-8" /> : <HiOutlineMenu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <ul
          className="md:hidden w-full bg-[var(--surface)] border-t border-[#eaeaea] px-6 pb-6 pt-4 text-sm font-medium text-[var(--foreground)] space-y-3"
          role="list"
          aria-label="Mobile Menu"
        >
          {navItems.map((item) => (
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
        </ul>
      )}
    </nav>
  );
}
