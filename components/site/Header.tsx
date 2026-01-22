'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { navLinks, siteConfig } from '@/lib/landingContent';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Elegant Announcement Banner */}
      <div className={cn(
        'transition-all duration-500 overflow-hidden',
        isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
      )}>
        <div className="bg-tbs-burgundy py-2.5">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 text-sm lg:px-8">
            <span className="h-px w-8 bg-tbs-gold/50 hidden sm:block" />
            <span className="text-tbs-cream/90 tracking-widest uppercase text-xs font-light">
              Now Welcoming Guests in Atlanta
            </span>
            <span className="text-tbs-gold mx-2">✦</span>
            <a 
              href="#schedule" 
              className="text-tbs-gold tracking-widest uppercase text-xs hover:text-tbs-cream transition-colors"
            >
              Reserve Your Experience
            </a>
            <span className="h-px w-8 bg-tbs-gold/50 hidden sm:block" />
          </div>
        </div>
      </div>

      {/* Main Navigation - Creative Centered Layout */}
      <div
        className={cn(
          'transition-all duration-500',
          isScrolled
            ? 'bg-tbs-cream/95 backdrop-blur-md shadow-sm'
            : 'bg-tbs-cream/80 backdrop-blur-sm'
        )}
      >
        {/* Decorative Top Border */}
        <div className="h-px bg-gradient-to-r from-transparent via-tbs-gold/40 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between lg:h-24">
            
            {/* Left Navigation - Desktop */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation left">
              {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((link, index) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="group relative px-5 py-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10 text-xs font-medium uppercase tracking-[0.2em] text-tbs-charcoal/80 transition-colors group-hover:text-tbs-burgundy">
                    {link.label}
                  </span>
                  {/* Elegant underline animation */}
                  <span className="absolute bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-tbs-gold transition-all duration-300 group-hover:w-3/4" />
                </a>
              ))}
            </nav>

            {/* Center Logo - Elegant Presentation */}
            <a
              href="#"
              className="relative flex flex-col items-center group"
              aria-label={siteConfig.name}
            >
              {/* Decorative frame around logo */}
              <div className="relative">
                <Image
                  src="/Baking Social Logo.png"
                  alt="The Baking Social"
                  width={280}
                  height={80}
                  className={cn(
                    "transition-all duration-500",
                    isScrolled ? "h-12 w-auto" : "h-14 sm:h-16 w-auto"
                  )}
                  priority
                />
              </div>
              {/* Subtle tagline - only on larger screens when not scrolled */}
              <span className={cn(
                "text-[10px] tracking-[0.3em] uppercase text-tbs-taupe mt-1 transition-all duration-300",
                isScrolled ? "opacity-0 h-0" : "opacity-100 hidden lg:block"
              )}>
                Atlanta&apos;s Baking Atelier
              </span>
            </a>

            {/* Right Navigation - Desktop */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation right">
              {navLinks.slice(Math.ceil(navLinks.length / 2)).map((link, index) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="group relative px-5 py-3"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <span className="relative z-10 text-xs font-medium uppercase tracking-[0.2em] text-tbs-charcoal/80 transition-colors group-hover:text-tbs-burgundy">
                    {link.label}
                  </span>
                  <span className="absolute bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-tbs-gold transition-all duration-300 group-hover:w-3/4" />
                </a>
              ))}
              
              {/* CTA Button - Elegant */}
              <a
                href="#schedule"
                className="ml-4 relative group overflow-hidden"
                data-cta="book-class"
              >
                <span className="relative z-10 flex items-center gap-2 px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-tbs-cream bg-tbs-burgundy transition-all duration-300 group-hover:bg-tbs-navy">
                  Reserve
                </span>
                <span className="absolute inset-0 border border-tbs-gold/30" />
              </a>
            </nav>

            {/* Mobile Menu Button - Elegant */}
            <button
              type="button"
              className="relative lg:hidden flex flex-col items-center justify-center w-12 h-12 gap-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className={cn(
                "w-6 h-px bg-tbs-charcoal transition-all duration-300",
                isMobileMenuOpen && "rotate-45 translate-y-[5px]"
              )} />
              <span className={cn(
                "w-6 h-px bg-tbs-charcoal transition-all duration-300",
                isMobileMenuOpen && "opacity-0"
              )} />
              <span className={cn(
                "w-6 h-px bg-tbs-charcoal transition-all duration-300",
                isMobileMenuOpen && "-rotate-45 -translate-y-[5px]"
              )} />
            </button>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="h-px bg-gradient-to-r from-transparent via-tbs-gold/30 to-transparent" />
      </div>

      {/* Mobile Menu - Full Screen Elegant Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-500',
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-tbs-cream/98 backdrop-blur-lg"
          onClick={handleNavClick}
        />
        
        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-8">
          {/* Decorative Element */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
            <div className="w-64 h-64 border border-tbs-gold rounded-full" />
            <div className="absolute inset-4 border border-tbs-gold rounded-full" />
            <div className="absolute inset-8 border border-tbs-gold rounded-full" />
          </div>
          
          <nav className="relative flex flex-col items-center gap-2" aria-label="Mobile navigation">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                onClick={handleNavClick}
                className={cn(
                  "group relative py-3 transition-all duration-500",
                  isMobileMenuOpen 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <span className="font-display text-2xl sm:text-3xl font-light text-tbs-charcoal tracking-wide transition-colors group-hover:text-tbs-burgundy">
                  {link.label}
                </span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-tbs-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          
          {/* Mobile CTAs */}
          <div className={cn(
            "mt-12 flex flex-col items-center gap-4 transition-all duration-500",
            isMobileMenuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: `${navLinks.length * 75 + 100}ms` }}
          >
            <a
              href="#private-events"
              onClick={handleNavClick}
              className="text-sm uppercase tracking-[0.2em] text-tbs-taupe hover:text-tbs-burgundy transition-colors"
              data-cta="private-events"
            >
              Private Events
            </a>
            
            <a
              href="#schedule"
              onClick={handleNavClick}
              className="btn-luxury mt-2"
              data-cta="book-class"
            >
              Reserve Your Spot
            </a>
          </div>
          
          {/* Decorative bottom element */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <span className="h-px w-12 bg-tbs-gold/30" />
            <span className="text-tbs-gold text-xs">✦</span>
            <span className="h-px w-12 bg-tbs-gold/30" />
          </div>
        </div>
      </div>
    </header>
  );
}
