'use client';

import Image from 'next/image';

const logos = [
  { name: 'Forbes', id: 1, src: '/logos for carousel/forbes-logos-black-png-download-7.png' },
  { name: 'Food Network', id: 2, src: '/logos for carousel/Food_Network_logo.svg.png' },
  { name: 'Bon Appétit', id: 3, src: '/logos for carousel/Bon_Appétit_logo.svg.png' },
  { name: 'The New York Times', id: 4, src: '/logos for carousel/New-York-Times-logo.png' },
  { name: 'Eater', id: 5, src: '/logos for carousel/Eater_logo.svg.png' },
  { name: 'Atlanta Magazine', id: 6, src: '/logos for carousel/Atlanta_Magazine.webp' },
];

export function LogoCarousel() {
  return (
    <section className="relative overflow-hidden bg-tbs-cream py-16 sm:py-20">
      {/* Top Decorative Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tbs-gold/30 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Label - Elegant */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <span className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-tbs-gold/30" />
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-tbs-taupe">
            Featured In
          </p>
          <span className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-tbs-gold/30" />
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Masks - Elegant fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-tbs-cream via-tbs-cream/80 to-transparent sm:w-32 md:w-40" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-tbs-cream via-tbs-cream/80 to-transparent sm:w-32 md:w-40" />

          {/* Scrolling Track */}
          <div className="flex animate-scroll items-center">
            {/* First set of logos */}
            {logos.map((logo) => {
              const isNYT = logo.name === 'The New York Times';
              const isFoodNetwork = logo.name === 'Food Network';
              const isLarge = isFoodNetwork || isNYT;
              return (
                <div
                  key={`first-${logo.id}`}
                  className={`mx-8 flex flex-shrink-0 items-center sm:mx-12 md:mx-16 ${
                    isNYT ? 'h-16 sm:h-20 md:h-24' : isFoodNetwork ? 'h-12 sm:h-16 md:h-20' : 'h-10 sm:h-14'
                  }`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={isNYT ? 280 : isLarge ? 200 : 160}
                    height={isNYT ? 100 : isLarge ? 80 : 48}
                    className={`w-auto object-contain opacity-40 grayscale transition-all duration-500 hover:opacity-70 hover:grayscale-0 ${
                      isNYT ? 'h-12 sm:h-16 md:h-20' : isFoodNetwork ? 'h-10 sm:h-14 md:h-16' : 'h-7 sm:h-10'
                    }`}
                  />
                </div>
              );
            })}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo) => {
              const isNYT = logo.name === 'The New York Times';
              const isFoodNetwork = logo.name === 'Food Network';
              const isLarge = isFoodNetwork || isNYT;
              return (
                <div
                  key={`second-${logo.id}`}
                  className={`mx-8 flex flex-shrink-0 items-center sm:mx-12 md:mx-16 ${
                    isNYT ? 'h-16 sm:h-20 md:h-24' : isFoodNetwork ? 'h-12 sm:h-16 md:h-20' : 'h-10 sm:h-14'
                  }`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={isNYT ? 280 : isLarge ? 200 : 160}
                    height={isNYT ? 100 : isLarge ? 80 : 48}
                    className={`w-auto object-contain opacity-40 grayscale transition-all duration-500 hover:opacity-70 hover:grayscale-0 ${
                      isNYT ? 'h-12 sm:h-16 md:h-20' : isFoodNetwork ? 'h-10 sm:h-14 md:h-16' : 'h-7 sm:h-10'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Bottom Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tbs-gold/30 to-transparent" />
    </section>
  );
}
