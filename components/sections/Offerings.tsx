'use client';

import Image from 'next/image';
import { offeringsContent } from '@/lib/landingContent';

export function Offerings() {
  return (
    <section id="offerings" className="relative bg-tbs-ivory py-24 sm:py-32 lg:py-40">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-linen" />
      
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header - Luxury Style */}
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20 lg:mb-24">
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-8 bg-tbs-gold/50" />
            <span className="text-tbs-gold text-xs">✦</span>
            <span className="h-px w-8 bg-tbs-gold/50" />
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-tbs-charcoal">
            Curated Experiences
          </h2>
          <p className="mt-6 text-base sm:text-lg text-tbs-taupe leading-relaxed max-w-xl mx-auto">
            From intimate workshops to grand celebrations, each experience is 
            thoughtfully designed for moments that linger.
          </p>
          
          {/* Gold Accent Line */}
          <div className="mt-8 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-tbs-gold to-transparent" />
        </div>

        {/* Offerings Grid - Elegant Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offeringsContent.map((offering, index) => (
            <a
              key={offering.id}
              href={offering.ctaAnchor}
              className="group relative block overflow-hidden"
            >
              {/* Card Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                {/* Background Image */}
                <Image
                  src={offering.imageSrc}
                  alt={offering.title}
                  fill
                  className="object-cover img-vintage transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-tbs-charcoal/80 via-tbs-charcoal/20 to-transparent" />
                
                {/* Decorative Frame */}
                <div className="absolute inset-4 border border-tbs-cream/20 transition-all duration-500 group-hover:inset-6" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  {/* Title */}
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-tbs-cream tracking-wide">
                    {offering.title}
                  </h3>
                  
                  {/* Divider */}
                  <div className="my-4 h-px w-12 bg-tbs-gold transition-all duration-300 group-hover:w-20" />
                  
                  {/* Description - if available */}
                  {offering.description && (
                    <p className="text-sm text-tbs-cream/80 leading-relaxed mb-4 max-w-xs">
                      {offering.description}
                    </p>
                  )}
                  
                  {/* CTA */}
                  <div className="flex items-center gap-3 text-tbs-gold">
                    <span className="text-xs uppercase tracking-[0.2em] font-medium">
                      Explore
                    </span>
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Index Number - Decorative */}
                <div className="absolute top-6 right-6">
                  <span className="font-display text-5xl font-light text-tbs-cream/10">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
