'use client';

import { useEffect, useRef } from 'react';

interface SocialEmbed {
  id: string;
  platform: 'tiktok' | 'instagram';
  embedUrl: string;
  creator: string;
}

const socialEmbeds: SocialEmbed[] = [
  { id: '1', platform: 'tiktok', embedUrl: 'https://www.tiktok.com/embed/v2/7324732357808868640', creator: '@fitwaffle' },
  { id: '2', platform: 'instagram', embedUrl: 'https://www.instagram.com/p/CPg4IVSBPrl/embed/', creator: '@baking' },
  { id: '3', platform: 'instagram', embedUrl: 'https://www.instagram.com/p/CPRhluQh4mv/embed/', creator: '@baking' },
  { id: '4', platform: 'tiktok', embedUrl: 'https://www.tiktok.com/embed/v2/7449413296064662826', creator: '@danahassonn' },
];

const duplicatedEmbeds = [...socialEmbeds, ...socialEmbeds];

export function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const igScript = document.createElement('script');
    igScript.src = 'https://www.instagram.com/embed.js';
    igScript.async = true;
    document.body.appendChild(igScript);

    igScript.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    return () => {
      if (document.body.contains(igScript)) {
        document.body.removeChild(igScript);
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-tbs-charcoal py-20 sm:py-28 lg:py-36">
      {/* Subtle Art Deco Pattern */}
      <div className="absolute inset-0 bg-art-deco opacity-5" />
      
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-tbs-gold/30" />
            <span className="text-tbs-gold text-xs">✦</span>
            <span className="h-px w-12 bg-tbs-gold/30" />
          </div>
          
          {/* Live Badge */}
          <div className="mb-6 inline-flex items-center gap-3 border border-tbs-gold/20 px-5 py-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tbs-gold opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-tbs-gold"></span>
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-tbs-gold">Live on Social</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-tbs-cream">
            From Our Studio
          </h2>
          <p className="mt-4 text-base text-tbs-taupe leading-relaxed">
            A glimpse into the artistry, the laughter, and the delicious creations
          </p>
        </div>

        {/* Auto-scrolling Carousel */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-tbs-charcoal via-tbs-charcoal/80 to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-tbs-charcoal via-tbs-charcoal/80 to-transparent sm:w-32" />

          {/* Scrolling container */}
          <div ref={scrollRef} className="group flex overflow-hidden">
            <div className="flex animate-scroll-gallery gap-6 hover:[animation-play-state:paused]">
              {duplicatedEmbeds.map((embed, index) => (
                <div
                  key={`${embed.id}-${index}`}
                  className="relative w-[280px] flex-shrink-0 overflow-hidden bg-tbs-ivory sm:w-[340px]"
                >
                  {/* Decorative Frame */}
                  <div className="absolute inset-2 border border-tbs-gold/10 pointer-events-none z-20" />
                  
                  {/* Platform Badge */}
                  <div className="absolute left-4 top-4 z-20">
                    <div className={`flex items-center gap-2 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] ${
                      embed.platform === 'tiktok' 
                        ? 'bg-tbs-charcoal text-tbs-cream' 
                        : 'bg-tbs-burgundy text-tbs-cream'
                    }`}>
                      {embed.platform === 'tiktok' ? (
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                        </svg>
                      ) : (
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      )}
                      <span>{embed.creator}</span>
                    </div>
                  </div>

                  {/* Embed Container */}
                  <div className="aspect-[9/16]">
                    <iframe
                      src={embed.embedUrl}
                      className="h-full w-full border-0"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      loading="lazy"
                      title={`${embed.platform} video by ${embed.creator}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links CTA */}
        <div className="mt-14 text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-tbs-taupe">
            Follow our journey
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <a
              href="https://tiktok.com/@thebakingsocial"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 border border-tbs-gold/30 bg-transparent px-8 py-4 text-tbs-cream transition-all hover:bg-tbs-gold/10 hover:border-tbs-gold"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-[0.15em]">@thebakingsocial</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="https://instagram.com/thebakingsocial"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 border border-tbs-gold/30 bg-transparent px-8 py-4 text-tbs-cream transition-all hover:bg-tbs-gold/10 hover:border-tbs-gold"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-[0.15em]">@thebakingsocial</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
