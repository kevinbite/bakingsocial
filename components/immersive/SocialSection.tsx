'use client';

import { useEffect } from 'react';

interface SocialEmbed {
  id: string;
  platform: 'tiktok' | 'instagram';
  embedUrl: string;
  creator: string;
}

const socialEmbeds: SocialEmbed[] = [
  { id: '1', platform: 'instagram', embedUrl: 'https://www.instagram.com/p/DTwJj-sgLWY/embed/', creator: '@thebakingsocial' },
  { id: '2', platform: 'instagram', embedUrl: 'https://www.instagram.com/p/DTwJgbSAP4a/embed/', creator: '@thebakingsocial' },
  { id: '3', platform: 'instagram', embedUrl: 'https://www.instagram.com/p/DTwJI4bgGp5/embed/', creator: '@thebakingsocial' },
];

const duplicatedEmbeds = [...socialEmbeds, ...socialEmbeds, ...socialEmbeds, ...socialEmbeds];

export function SocialSection() {
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
    <section id="social" className="relative bg-tbs-noir pt-12 pb-20 lg:pt-0 lg:-mt-16 lg:pb-24 overflow-hidden">
      {/* Decorative Frame - Hidden on mobile */}
      <div className="absolute inset-6 sm:inset-12 lg:inset-20 border border-tbs-gold/5 pointer-events-none hidden sm:block" />
      
      {/* Decorative Corner Elements - Adjusted for mobile */}
      <div className="absolute top-4 left-4 sm:top-12 sm:left-12 w-12 h-12 sm:w-20 sm:h-20 border-l border-t border-tbs-gold/10" />
      <div className="absolute top-4 right-4 sm:top-12 sm:right-12 w-12 h-12 sm:w-20 sm:h-20 border-r border-t border-tbs-gold/10" />
      <div className="absolute bottom-4 left-4 sm:bottom-12 sm:left-12 w-12 h-12 sm:w-20 sm:h-20 border-l border-b border-tbs-gold/10" />
      <div className="absolute bottom-4 right-4 sm:bottom-12 sm:right-12 w-12 h-12 sm:w-20 sm:h-20 border-r border-b border-tbs-gold/10" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center px-5 sm:px-6 mb-12 sm:mb-16 lg:mb-20">
          {/* Decorative */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <span className="h-px w-8 sm:w-12 bg-tbs-gold/30" />
            <span className="text-tbs-gold text-xs">✦</span>
            <span className="h-px w-8 sm:w-12 bg-tbs-gold/30" />
          </div>
          
          {/* Live Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 border border-tbs-gold/20 px-4 sm:px-6 py-2 sm:py-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tbs-gold opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-tbs-gold"></span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.3em] sm:tracking-[0.4em] uppercase text-tbs-champagne">
              Live on Social
            </span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-tbs-ivory leading-[1.1] mb-4 sm:mb-6">
            From our studio
            <br />
            <span className="italic text-tbs-champagne">to yours</span>
          </h2>
          <p className="text-tbs-stone text-sm sm:text-base lg:text-lg max-w-lg mx-auto leading-relaxed">
            Every class streamed live. Follow along for behind-the-scenes moments, 
            tips from our artisans, and delicious inspiration.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-tbs-noir via-tbs-noir/90 to-transparent lg:w-48" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-tbs-noir via-tbs-noir/90 to-transparent lg:w-48" />

          {/* Scrolling Container */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-gallery gap-8 hover:[animation-play-state:paused]">
              {duplicatedEmbeds.map((embed, index) => (
                <div
                  key={`${embed.id}-${index}`}
                  className="relative w-[280px] flex-shrink-0 group sm:w-[320px]"
                >
                  {/* Card with Frame */}
                  <div className="relative border border-tbs-gold/10 transition-all duration-500 group-hover:border-tbs-gold/30">
                    {/* Inner Frame */}
                    <div className="absolute inset-2 border border-tbs-gold/5 pointer-events-none z-20 transition-all duration-500 group-hover:inset-3" />
                    
                    {/* Platform Badge */}
                    <div className="absolute left-4 top-4 z-30">
                      <div className={`flex items-center gap-2 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.2em] border ${
                        embed.platform === 'tiktok' 
                          ? 'bg-tbs-noir/90 border-tbs-champagne/20 text-tbs-champagne' 
                          : 'bg-tbs-noir/90 border-tbs-gold/20 text-tbs-gold'
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

                    {/* Embed */}
                    <div className="aspect-[9/16] bg-tbs-noir">
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center px-5 sm:px-6">
          <p className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-tbs-stone mb-6 sm:mb-8">
            Follow Our Journey
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://tiktok.com/@thebakingsocial"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-elegant group w-full sm:w-auto justify-center text-xs"
            >
              <svg className="h-4 w-4 mr-2 sm:mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
              TikTok
              <svg className="ml-2 sm:ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://instagram.com/thebakingsocial"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-elegant group w-full sm:w-auto justify-center text-xs"
            >
              <svg className="h-4 w-4 mr-2 sm:mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Instagram
              <svg className="ml-2 sm:ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Line at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tbs-gold/20 to-transparent" />
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
