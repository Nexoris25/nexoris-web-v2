'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote: 'Nexoris brought our vision to life. The speed, quality, and communication were top-notch.',
    name: 'AdaoraSegun K.',
    role: 'Startup Founder',
    image: '/images/client6.webp',
  },
  {
    quote: 'Our digital transformation journey became smooth with Nexoris by our side. Highly recommended!',
    name: 'Funmi K.',
    role: 'Operations Lead, Logistics Firm',
    image: '/images/client5.webp',
  },
  {
    quote: 'From UI design to full-stack implementation, Nexoris delivered beyond expectations.',
    name: 'Bayo T.',
    role: 'CTO, Fintech Company',
    image: '/images/client2.webp',
  },
  {
    quote: 'Reliable, strategic, and skilled — Nexoris is our go-to partner for digital execution.',
    name: 'Emmanuel M.',
    role: 'Product Manager, HealthTech Startup',
    image: '/images/client4.webp',
  },
  {
    quote: 'Our website speed and UX improved drastically after Nexoris stepped in.',
    name: 'Nneka I.',
    role: 'Growth Lead, eCommerce Brand',
    image: '/images/client3.webp',
  },
  {
    quote: 'They listened, adapted, and executed with excellence. A true tech partner.',
    name: 'Peter I.',
    role: 'Founder, EduTech Platform',
    image: '/images/client1.webp',
  },
];

function TestimonialCard({ quote, name, role, image }: (typeof testimonials)[0]) {
  return (
    <div className="w-full h-[12rem] bg-white rounded-2xl border cursor-pointer border-[var(--color-accent)] p-6 flex flex-col justify-between shadow-md transition-all duration-300 ease-in-out hover:shadow-[0_6px_16px_rgba(84,60,218,0.12)] hover:scale-[1.02]">
      <p className="text-[var(--color-dark-alt)] italic mb-6 font-rajdhani text-sm md:text-base leading-relaxed">
        “{quote}”
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-10 h-10 relative rounded-full overflow-hidden border border-[var(--color-accent)] bg-white flex-shrink-0">
          <Image
            src={image}
            alt={`${name} profile photo`}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div className="text-xs md:text-sm font-rajdhani text-[var(--color-dark-alt)]">
          <span className="block text-[var(--foreground)] font-semibold">{name}</span>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true); // Only after DOM is mounted
  }, []);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonial-heading"
      className="bg-gradient-to-br from-[#f6f4ff] to-[#ffffff] py-20 px-6 sm:px-10 lg:px-20"
    >
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h2
            id="testimonial-heading"
            className="text-3xl md:text-5xl font-kanit font-bold text-[var(--color-primary)]"
          >
            What Our Clients Say
          </h2>
        </header>

        <div className="relative" suppressHydrationWarning>
          {swiperReady && (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              navigation={{
                prevEl: prevRef.current!,
                nextEl: nextRef.current!,
              }}
              onBeforeInit={(swiper) => {
                // @ts-expect-error – ref elements are assigned post-render, safe to override here
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-expect-error – ref elements are assigned post-render, safe to override here
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              pagination={{
                el: '.swiper-pagination',
                clickable: true,
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="testimonial-swiper"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i} aria-label={`Testimonial from ${t.name}`}>
                  <TestimonialCard {...t} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <div className="flex justify-center gap-4 mt-4">
            <button
              ref={prevRef}
              aria-label="Previous testimonial"
              className="w-9 h-9 flex items-center justify-center border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary)] hover:text-white transition cursor-pointer"
            >
              <FaArrowLeft className="w-4 h-4" />
            </button>
            <button
              ref={nextRef}
              aria-label="Next testimonial"
              className="w-9 h-9 flex items-center justify-center border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary)] hover:text-white transition cursor-pointer"
            >
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
