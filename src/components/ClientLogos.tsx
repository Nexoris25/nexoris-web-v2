'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const logos = [
  '/images/logo1.png',
  '/images/logo2.png',
  '/images/logo4.png',
  '/images/logo5.png',
  '/images/logo6.png',
  '/images/logo7.png',
  '/images/logo8.png',
  '/images/logo9.png',
];

export default function ClientLogosCarousel() {
  return (
    <section
      aria-label="Our Clients"
      className="w-full overflow-hidden py-10 bg-gradient-to-br from-[#f6f4ff] to-[#ffffff]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <h2 className="text-center text-xl md:text-2xl font-kanit font-semibold text-[var(--color-primary)] mb-6">
          Trusted by forward-thinking teams
        </h2>

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={30}
          loop={true}
          freeMode={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
          }}
          className="w-full"
        >
          {[...logos, ...logos].map((src, i) => (
            <SwiperSlide
              key={i}
              className="!w-36 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="h-20 w-full flex items-center justify-center">
                <Image
                  src={src}
                  alt={`Client logo ${i + 1}`}
                  width={120}
                  height={60}
                  className="object-contain cursor-pointer h-full w-auto grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
