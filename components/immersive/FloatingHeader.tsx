'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function FloatingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.3);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile Header - Always visible */}
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <div className={cn(
          "flex items-center justify-end px-5 py-4 transition-all duration-500",
          isScrolled ? "bg-tbs-noir/95 backdrop-blur-md" : "bg-transparent"
        )}>
          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2"
            aria-label="Open menu"
          >
            <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-tbs-champagne/70">
              Menu
            </span>
            <div className="flex flex-col gap-1">
              <span className="w-5 h-px bg-tbs-champagne/70" />
              <span className="w-3 h-px bg-tbs-champagne/70 ml-auto" />
            </div>
          </button>
        </div>
      </div>

      {/* Desktop - Menu Button (appears on scroll) */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className={cn(
          "fixed top-8 right-8 z-50 hidden lg:flex items-center gap-3 group transition-all duration-700",
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        )}
      >
        <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-tbs-champagne/70 group-hover:text-tbs-gold transition-colors">
          Menu
        </span>
        <div className="flex flex-col gap-1.5">
          <span className="w-6 h-px bg-tbs-champagne/70 group-hover:bg-tbs-gold transition-colors" />
          <span className="w-4 h-px bg-tbs-champagne/70 group-hover:bg-tbs-gold transition-colors ml-auto" />
        </div>
      </button>

      {/* Full Screen Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-[100] transition-all duration-500",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="absolute inset-0 bg-tbs-noir/98 backdrop-blur-xl" />
        
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-5 lg:top-8 lg:right-8 z-10 flex items-center gap-2 lg:gap-3 group"
          aria-label="Close menu"
        >
          <span className="text-[9px] lg:text-[10px] font-medium tracking-[0.2em] lg:tracking-[0.3em] uppercase text-tbs-champagne/70 group-hover:text-tbs-gold transition-colors">
            Close
          </span>
          <div className="relative w-5 h-5 lg:w-6 lg:h-6">
            <span className="absolute top-1/2 left-0 w-5 lg:w-6 h-px bg-tbs-champagne/70 group-hover:bg-tbs-gold transition-colors rotate-45" />
            <span className="absolute top-1/2 left-0 w-5 lg:w-6 h-px bg-tbs-champagne/70 group-hover:bg-tbs-gold transition-colors -rotate-45" />
          </div>
        </button>

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6">
          {/* Decorative Element - Hidden on mobile for cleaner look */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 hidden lg:block">
            <div className="w-64 h-64 border border-tbs-gold rounded-full" />
            <div className="absolute inset-4 border border-tbs-gold rounded-full" />
            <div className="absolute inset-8 border border-tbs-gold rounded-full" />
          </div>
          
          <nav className="relative flex flex-col items-center gap-4 lg:gap-6" aria-label="Main navigation">
            {[
              { label: 'Home', href: '#intro' },
              { label: 'Experience', href: '#experience' },
              { label: 'Atmosphere', href: '#atmosphere' },
              { label: 'Schedule', href: '#schedule' },
              { label: 'Social', href: '#social' },
              { label: 'Private Events', href: '#private' },
              { label: 'Contact', href: '#contact' },
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "group relative overflow-hidden transition-all duration-500",
                  isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 75 + 150}ms` }}
              >
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-tbs-ivory tracking-wide transition-colors group-hover:text-tbs-gold">
                  {item.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-tbs-gold transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button - Mobile */}
          <a
            href="#schedule"
            onClick={() => setIsMenuOpen(false)}
            className={cn(
              "mt-10 btn-filled transition-all duration-500",
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: '700ms' }}
          >
            Reserve Now
          </a>

          {/* Decorative Footer */}
          <div className={cn(
            "absolute bottom-8 lg:bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4 lg:gap-6 text-tbs-stone text-[10px] lg:text-xs tracking-[0.15em] lg:tracking-[0.2em] transition-all duration-500",
            isMenuOpen ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: '800ms' }}
          >
            <span>Atlanta, GA</span>
            <span className="text-tbs-gold">✦</span>
            <span>Est. 2024</span>
          </div>
        </div>
      </div>
    </>
  );
}
