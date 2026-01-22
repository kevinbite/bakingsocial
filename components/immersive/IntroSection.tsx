'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export function IntroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="intro" className="section-full relative bg-tbs-noir">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/PNG image.PNG"
          alt="The Baking Social atmosphere"
          fill
          className="object-cover img-luxe opacity-40"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tbs-noir via-transparent to-tbs-noir" />
        <div className="absolute inset-0 bg-gradient-to-r from-tbs-noir/80 via-transparent to-tbs-noir/80" />
      </div>

      {/* Decorative Frame - Adjusted for mobile */}
      <div className="absolute inset-4 sm:inset-8 lg:inset-20 border border-tbs-gold/10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 sm:px-6 max-w-5xl pt-20 lg:pt-0">
        {/* Logo/Brand */}
        <div className={`-my-8 sm:-my-20 lg:-my-40 xl:-my-44 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
          <Image
            src="/Beige Rustic Bakery Bake House Logo.png"
            alt="The Baking Social"
            width={800}
            height={300}
            className="w-[280px] sm:w-[400px] lg:w-[500px] xl:w-[600px] h-auto brightness-0 invert"
            priority
          />
        </div>

        {/* Tagline */}
        <h1 className={`font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light text-tbs-ivory tracking-wide leading-tight transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
          Where the art of baking
          <br />
          <span className="italic text-tbs-gold">becomes an experience</span>
        </h1>

        {/* Decorative Element */}
        <div className={`mt-1 mb-1 flex items-center gap-3 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
          <span className="h-px w-6 sm:w-8 bg-tbs-gold/30" />
          <span className="text-tbs-gold text-xs">✦</span>
          <span className="h-px w-6 sm:w-8 bg-tbs-gold/30" />
        </div>

        {/* Description */}
        <p className={`text-sm sm:text-base lg:text-lg text-tbs-champagne/80 max-w-md lg:max-w-xl leading-relaxed font-light transition-all duration-1000 px-2 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1000ms' }}>
          An intimate gathering space for hands-on culinary craftsmanship. 
          Twenty seats. Unforgettable moments. Timeless techniques.
        </p>

        {/* CTA */}
        <div className={`mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1200ms' }}>
          <a href="#schedule" className="btn-filled text-center">
            RESERVE YOUR SEAT
          </a>
          <a href="#schedule" className="btn-elegant text-center">
            VIEW SCHEDULE
          </a>
        </div>
      </div>


      {/* Decorative Corner Elements - Smaller on mobile */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 lg:top-12 lg:left-12 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-l border-t border-tbs-gold/20" />
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 lg:top-12 lg:right-12 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-r border-t border-tbs-gold/20" />
      <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 lg:bottom-12 lg:left-12 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-l border-b border-tbs-gold/20" />
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 lg:bottom-12 lg:right-12 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-r border-b border-tbs-gold/20" />
    </section>
  );
}
