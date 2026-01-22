import Image from 'next/image';
import { footerContent, siteConfig } from '@/lib/landingContent';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { contact, hours, social } = footerContent;

  return (
    <footer className="relative bg-tbs-charcoal">
      {/* Top Decorative Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-tbs-gold/30 to-transparent" />
      
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Image
              src="/Baking Social Logo.png"
              alt="The Baking Social"
              width={180}
              height={60}
              className="h-12 w-auto brightness-0 invert opacity-90"
            />
            <p className="mt-6 text-sm text-tbs-taupe leading-relaxed max-w-xs">
              An intimate culinary experience where time-honored techniques meet modern elegance.
            </p>
            
            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border border-tbs-taupe/30 text-tbs-taupe transition-all hover:border-tbs-gold hover:text-tbs-gold"
                  aria-label={item.name}
                >
                  {item.name === 'Instagram' && (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  )}
                  {item.name === 'TikTok' && (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                    </svg>
                  )}
                  {item.name === 'Facebook' && (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-tbs-gold mb-6">
              Visit Us
            </h3>
            <address className="not-italic text-sm text-tbs-taupe leading-relaxed space-y-4">
              <div>
                <p className="text-tbs-cream/90">{contact.address.street}</p>
                <p>{contact.address.city}, {contact.address.state} {contact.address.zip}</p>
              </div>
              <div>
                <a 
                  href={`mailto:${contact.email}`} 
                  className="text-tbs-cream/90 hover:text-tbs-gold transition-colors"
                >
                  {contact.email}
                </a>
              </div>
              <div>
                <a 
                  href={`tel:${contact.phone}`} 
                  className="text-tbs-cream/90 hover:text-tbs-gold transition-colors"
                >
                  {contact.phone}
                </a>
              </div>
            </address>
          </div>

          {/* Hours Column */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-tbs-gold mb-6">
              Studio Hours
            </h3>
            <ul className="space-y-3 text-sm text-tbs-taupe">
              {hours.map((item, index) => (
                <li key={index} className="flex justify-between gap-4">
                  <span>{item.days}</span>
                  <span className="text-tbs-cream/80">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-tbs-gold mb-6">
              Explore
            </h3>
            <nav className="space-y-3" aria-label="Footer navigation">
              <a href="#schedule" className="block text-sm text-tbs-taupe hover:text-tbs-gold transition-colors">
                Class Schedule
              </a>
              <a href="#private-events" className="block text-sm text-tbs-taupe hover:text-tbs-gold transition-colors">
                Private Events
              </a>
              <a href="#offerings" className="block text-sm text-tbs-taupe hover:text-tbs-gold transition-colors">
                Experiences
              </a>
              <a href="#" className="block text-sm text-tbs-taupe hover:text-tbs-gold transition-colors">
                Gift Cards
              </a>
              <a href="#" className="block text-sm text-tbs-taupe hover:text-tbs-gold transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-tbs-taupe/10">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-tbs-taupe">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-tbs-taupe">
              <a href="#" className="hover:text-tbs-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-tbs-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
