'use client';

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/2349138133224" 
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all"
    >
      <FaWhatsapp className="w-6 h-6" />
    </Link>
  );
}
