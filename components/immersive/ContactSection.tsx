'use client';

import { useState } from 'react';
import Image from 'next/image';

export function ContactSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

  return (
    <section id="contact" className="relative bg-tbs-noir">
      {/* Newsletter Section */}
      <div className="relative py-16 sm:py-20 lg:py-24 xl:py-32 border-b border-tbs-champagne/10">
        <div className="relative z-10 max-w-2xl mx-auto text-center px-5 sm:px-6">
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <span className="h-px w-6 sm:w-8 bg-tbs-gold/30" />
            <span className="text-tbs-gold text-xs">✦</span>
            <span className="h-px w-6 sm:w-8 bg-tbs-gold/30" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-tbs-ivory mb-3 sm:mb-4">
            Join Our Circle
          </h2>
          <p className="text-tbs-stone text-sm sm:text-base mb-8 sm:mb-10 max-w-md mx-auto">
            Receive exclusive invitations, early access to new classes, and seasonal recipes.
          </p>

          {isSubscribed ? (
            <div className="flex items-center justify-center gap-3">
              <span className="text-tbs-gold">✓</span>
              <span className="text-tbs-champagne text-sm sm:text-base">Welcome to the circle</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-transparent border border-tbs-champagne/20 px-4 sm:px-5 py-3 sm:py-4 text-sm text-tbs-ivory placeholder:text-tbs-stone/50 focus:border-tbs-gold focus:outline-none transition-colors"
              />
              <button type="submit" className="btn-filled shrink-0 text-center justify-center">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-20">
          {/* Mobile Footer - Stacked */}
          <div className="lg:hidden space-y-10">
            {/* Brand */}
            <div className="text-center">
              <Image
                src="/Beige Rustic Bakery Bake House Logo.png"
                alt="The Baking Social"
                width={140}
                height={45}
                className="h-9 w-auto brightness-0 invert opacity-80 mx-auto mb-4"
              />
              <p className="text-tbs-stone text-sm leading-relaxed max-w-xs mx-auto">
                An intimate culinary experience where time-honored techniques meet modern elegance.
              </p>
            </div>

            {/* Info Grid - 2 columns on mobile */}
            <div className="grid grid-cols-2 gap-8">
              {/* Visit */}
              <div>
                <h4 className="text-[9px] font-medium tracking-[0.2em] uppercase text-tbs-gold mb-4">Visit</h4>
                <address className="not-italic text-tbs-stone text-sm space-y-1">
                  <p className="text-tbs-ivory/80">123 Main Street</p>
                  <p>Atlanta, GA 30308</p>
                </address>
              </div>

              {/* Hours */}
              <div>
                <h4 className="text-[9px] font-medium tracking-[0.2em] uppercase text-tbs-gold mb-4">Hours</h4>
                <ul className="text-tbs-stone text-sm space-y-1">
                  <li>Tue–Fri: 11am–10pm</li>
                  <li>Sat: 9am–10pm</li>
                  <li>Sun: 9am–8pm</li>
                </ul>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="text-center pt-6 border-t border-tbs-champagne/10">
              <a href="mailto:hello@thebakingsocial.com" className="text-tbs-ivory/80 text-sm hover:text-tbs-gold transition-colors">
                hello@thebakingsocial.com
              </a>
              
              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-6">
                {[
                  { name: 'Instagram', href: 'https://instagram.com/thebakingsocial' },
                  { name: 'TikTok', href: 'https://tiktok.com/@thebakingsocial' },
                  { name: 'Facebook', href: '#' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center border border-tbs-champagne/20 text-tbs-stone hover:border-tbs-gold hover:text-tbs-gold transition-colors"
                    aria-label={social.name}
                  >
                    {social.name === 'Instagram' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    )}
                    {social.name === 'TikTok' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                      </svg>
                    )}
                    {social.name === 'Facebook' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Footer - Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Image
                src="/Beige Rustic Bakery Bake House Logo.png"
                alt="The Baking Social"
                width={160}
                height={50}
                className="h-10 w-auto brightness-0 invert opacity-80 mb-6"
              />
              <p className="text-tbs-stone text-sm leading-relaxed max-w-xs">
                An intimate culinary experience where time-honored techniques meet modern elegance.
              </p>
            </div>

            {/* Visit */}
            <div>
              <h4 className="text-[10px] font-medium tracking-[0.25em] uppercase text-tbs-gold mb-6">Visit</h4>
              <address className="not-italic text-tbs-stone text-sm space-y-2">
                <p className="text-tbs-ivory/80">123 Main Street</p>
                <p>Atlanta, GA 30308</p>
                <p className="mt-4">
                  <a href="mailto:hello@thebakingsocial.com" className="text-tbs-ivory/80 hover:text-tbs-gold transition-colors">
                    hello@thebakingsocial.com
                  </a>
                </p>
              </address>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-[10px] font-medium tracking-[0.25em] uppercase text-tbs-gold mb-6">Hours</h4>
              <ul className="text-tbs-stone text-sm space-y-2">
                <li className="flex justify-between gap-4">
                  <span>Tue – Fri</span>
                  <span className="text-tbs-ivory/80">11am – 10pm</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Saturday</span>
                  <span className="text-tbs-ivory/80">9am – 10pm</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Sunday</span>
                  <span className="text-tbs-ivory/80">9am – 8pm</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Monday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-[10px] font-medium tracking-[0.25em] uppercase text-tbs-gold mb-6">Follow</h4>
              <div className="flex gap-4">
                {[
                  { name: 'Instagram', href: 'https://instagram.com/thebakingsocial' },
                  { name: 'TikTok', href: 'https://tiktok.com/@thebakingsocial' },
                  { name: 'Facebook', href: '#' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center border border-tbs-champagne/20 text-tbs-stone hover:border-tbs-gold hover:text-tbs-gold transition-colors"
                    aria-label={social.name}
                  >
                    {social.name === 'Instagram' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    )}
                    {social.name === 'TikTok' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                      </svg>
                    )}
                    {social.name === 'Facebook' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-tbs-champagne/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-tbs-stone text-[10px] sm:text-xs">
              © {new Date().getFullYear()} The Baking Social. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 text-[10px] sm:text-xs text-tbs-stone">
              <a href="#" className="hover:text-tbs-gold transition-colors">Privacy</a>
              <a href="#" className="hover:text-tbs-gold transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
