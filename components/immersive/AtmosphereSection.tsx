'use client';

import Image from 'next/image';

const features = [
  { label: 'Intimate Setting', value: '20 Seats' },
  { label: 'Expert Guidance', value: 'Professional Artisans' },
  { label: 'All Inclusive', value: 'Ingredients & Tools' },
  { label: 'Take Home', value: 'Your Creations' },
];

export function AtmosphereSection() {
  return (
    <section id="atmosphere" className="relative bg-tbs-ivory overflow-hidden">
      {/* Background Elements - Desktop only */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-tbs-noir" />
      </div>

      <div className="relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Image First on Mobile - Polaroid Style */}
          <div className="px-5 sm:px-6 py-8 sm:py-12 bg-tbs-noir">
            <div className="relative mx-auto max-w-sm bg-white p-3 pb-12 shadow-2xl rotate-1">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/Baking Social Mock up (1).png"
                  alt="The Baking Social studio"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-5 sm:px-6 py-12 sm:py-16 bg-tbs-ivory">
            <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.3em] sm:tracking-[0.4em] uppercase text-tbs-stone mb-3 block">
              The Atmosphere
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-light text-tbs-noir leading-[1.1] mb-6">
              A space designed
              <br />
              <span className="italic text-tbs-burgundy">for creation</span>
            </h2>

            <p className="text-tbs-stone text-sm sm:text-base leading-relaxed mb-8">
              A kitchen made for good times. Come as you are, bake something amazing, 
              and take home more than just treats—take home the memories.
            </p>

            {/* Features Grid - 2 columns on mobile */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="border-l-2 border-tbs-gold/30 pl-3 sm:pl-4">
                  <p className="text-[9px] sm:text-[10px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-tbs-stone mb-1">
                    {feature.label}
                  </p>
                  <p className="font-display text-base sm:text-lg text-tbs-noir">
                    {feature.value}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="#schedule" className="btn-elegant !text-tbs-noir !border-tbs-noir/30 hover:!border-tbs-gold hover:!text-tbs-noir inline-flex text-xs">
              View Schedule
            </a>
          </div>

          {/* Quote Card - Mobile */}
          <div className="mx-5 sm:mx-6 -mt-4 mb-8 bg-tbs-noir p-5 sm:p-6 border border-tbs-gold/20">
            <p className="text-tbs-gold text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2">Since 2024</p>
            <p className="font-display text-lg sm:text-xl text-tbs-ivory leading-snug">
              &ldquo;Atlanta&apos;s most refined baking experience&rdquo;
            </p>
            <p className="mt-2 sm:mt-3 text-tbs-stone text-[10px] sm:text-xs">— Atlanta Magazine</p>
          </div>
        </div>

        {/* Desktop Layout - Split Screen */}
        <div className="hidden lg:grid lg:grid-cols-2 min-h-screen">
          {/* Left - Light Side */}
          <div className="relative flex flex-col justify-center px-12 xl:px-20 2xl:px-24 py-20">
            {/* Decorative */}
            <div className="absolute top-20 left-12 xl:left-16">
              <div className="w-24 h-24 border border-tbs-gold/20 rotate-45" />
            </div>

            <div className="relative">
              <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-tbs-stone mb-4 block">
                The Atmosphere
              </span>
              <h2 className="font-display text-4xl xl:text-5xl 2xl:text-6xl font-light text-tbs-noir leading-[1.1] mb-8">
                A space designed
                <br />
                <span className="italic text-tbs-burgundy">for creation</span>
              </h2>

              <p className="text-tbs-stone text-base lg:text-lg leading-relaxed max-w-lg mb-12">
                A kitchen made for good times. Come as you are, bake something amazing, 
                and take home more than just treats—take home the memories.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="border-l-2 border-tbs-gold/30 pl-4">
                    <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-tbs-stone mb-1">
                      {feature.label}
                    </p>
                    <p className="font-display text-lg text-tbs-noir">
                      {feature.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12">
                <a href="#schedule" className="btn-elegant !text-tbs-noir !border-tbs-noir/30 hover:!border-tbs-gold hover:!text-tbs-noir">
                  View Schedule
                </a>
              </div>
            </div>
          </div>

          {/* Right - Dark Side with Polaroid Image */}
          <div className="relative flex items-center justify-center p-12 xl:p-16 bg-tbs-noir">
            {/* Main Image - Polaroid Style */}
            <div className="relative">
              <div className="relative bg-white p-4 pb-16 shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="relative w-96 xl:w-[28rem] 2xl:w-[32rem] aspect-[4/5]">
                  <Image
                    src="/Baking Social Mock up (1).png"
                    alt="The Baking Social studio"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-12 -left-12 xl:-left-20 bg-tbs-noir p-6 lg:p-8 border border-tbs-gold/20 max-w-xs z-10">
                <p className="text-tbs-gold text-xs tracking-[0.2em] uppercase mb-2">Since 2024</p>
                <p className="font-display text-xl text-tbs-ivory leading-snug">
                  &ldquo;Atlanta&apos;s most refined baking experience&rdquo;
                </p>
                <p className="mt-3 text-tbs-stone text-xs">— Atlanta Magazine</p>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -top-12 -right-12 w-32 h-32 border border-tbs-gold/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="relative mt-8 sm:mt-12 lg:mt-20 xl:mt-32 py-4 sm:py-6 bg-tbs-noir/90 backdrop-blur-sm overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex items-center">
              <span className="mx-4 sm:mx-8 text-[9px] sm:text-[10px] font-medium tracking-[0.3em] sm:tracking-[0.4em] uppercase text-tbs-champagne/50">
                Artisan Breads
              </span>
              <span className="text-tbs-gold/30">✦</span>
              <span className="mx-4 sm:mx-8 text-[9px] sm:text-[10px] font-medium tracking-[0.3em] sm:tracking-[0.4em] uppercase text-tbs-champagne/50">
                Handcrafted Pastries
              </span>
              <span className="text-tbs-gold/30">✦</span>
              <span className="mx-4 sm:mx-8 text-[9px] sm:text-[10px] font-medium tracking-[0.3em] sm:tracking-[0.4em] uppercase text-tbs-champagne/50">
                Decorated Confections
              </span>
              <span className="text-tbs-gold/30">✦</span>
              <span className="mx-4 sm:mx-8 text-[9px] sm:text-[10px] font-medium tracking-[0.3em] sm:tracking-[0.4em] uppercase text-tbs-champagne/50">
                Classic Desserts
              </span>
              <span className="text-tbs-gold/30">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
