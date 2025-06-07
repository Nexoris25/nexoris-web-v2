'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-20 right-6 z-50 bg-[var(--color-primary)] hover:bg-[var(--color-dark-alt)] text-white rounded-full p-3 cursor-pointer shadow-lg transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <FaArrowUp className="w-4 h-4" />
    </button>
  );
}
