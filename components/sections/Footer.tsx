import Image from 'next/image';
import { siteConfig, navLinks, footerContent } from '@/lib/landingContent';

export function Footer() {
  return (
    <footer className="relative bg-cream">
      {/* Top 80s gradient accent */}
      <div className="h-1 bg-gradient-to-r from-teal via-gold to-coral" />
      
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Logo */}
          <Image
            src="/Baking Social Logo.png"
            alt="The Baking Social"
            width={320}
            height={96}
            className="h-16 w-auto sm:h-20"
          />

          {/* 80s Decorative divider */}
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rotate-45 bg-coral" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="h-1.5 w-1.5 rounded-full bg-teal" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="h-2 w-2 rotate-45 bg-blush" />
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm text-taupe transition-colors hover:text-coral"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Location */}
          <p className="text-sm text-taupe">{siteConfig.location.city}, {siteConfig.location.state}</p>
        </div>

        {/* Bottom section */}
        <div className="mt-10 border-t border-espresso/10 pt-8">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
            <p className="text-[10px] tracking-wider text-taupe/60">
              {footerContent.legalText}
            </p>
            <p className="text-[10px] tracking-wider text-taupe/60">
              Crafted with ♥ in Atlanta
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
