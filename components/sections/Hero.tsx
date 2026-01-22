import Image from 'next/image';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-tbs-cream"
    >
      {/* Decorative Art Deco Pattern - Subtle Background */}
      <div className="absolute inset-0 bg-art-deco opacity-30" />
      
      {/* Main Content Grid */}
      <div className="relative min-h-screen grid lg:grid-cols-2">
        
        {/* Left Side - Content */}
        <div className="relative flex flex-col justify-center px-6 py-32 sm:px-12 lg:px-16 xl:px-24 lg:py-0">
          {/* Decorative vertical line */}
          <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-tbs-gold/40 to-transparent hidden lg:block" />
          
          <div className="max-w-xl">
            {/* Elegant Pre-title */}
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-tbs-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-tbs-taupe font-medium">
                Atlanta&apos;s Premier Destination
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight text-tbs-charcoal">
              <span className="block">The Art of</span>
              <span className="block mt-2 text-gold-gradient">Baking,</span>
              <span className="block mt-2 italic font-normal">Refined.</span>
            </h1>
            
            {/* Elegant Divider */}
            <div className="my-8 flex items-center gap-4">
              <span className="h-px flex-1 bg-tbs-gold/30" />
              <span className="text-tbs-gold text-sm">✦</span>
              <span className="h-px flex-1 bg-tbs-gold/30" />
            </div>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-tbs-taupe leading-relaxed font-light">
              An intimate culinary experience where time-honored techniques meet 
              modern elegance. Join us for hands-on classes, private events, and 
              moments crafted to inspire.
            </p>
            
            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#schedule"
                className="btn-luxury group"
                data-cta="book-class"
              >
                <span>Reserve Your Experience</span>
                <svg
                  className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1"
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
              </a>
              <a
                href="#private-events"
                className="btn-luxury-outline group"
                data-cta="private-events"
              >
                <span>Private Events</span>
              </a>
            </div>
            
            {/* Trust Elements */}
            <div className="mt-16 pt-8 border-t border-tbs-gold/20">
              <div className="flex flex-wrap items-center gap-8 text-sm text-tbs-taupe">
                <div className="flex items-center gap-2">
                  <span className="text-tbs-gold">✦</span>
                  <span className="tracking-wide">20 Intimate Seats</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-tbs-gold">✦</span>
                  <span className="tracking-wide">Expert Artisans</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-tbs-gold">✦</span>
                  <span className="tracking-wide">All Inclusive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Hero Image */}
        <div className="relative h-[50vh] lg:h-auto order-first lg:order-last">
          {/* Main Image */}
          <div className="absolute inset-0">
            <Image
              src="/Gemini_Generated_Image_432uds432uds432u.jpeg"
              alt="Elegant baking studio atmosphere"
              fill
              className="object-cover img-vintage"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* Subtle Overlay for elegance */}
            <div className="absolute inset-0 bg-gradient-to-t from-tbs-cream via-transparent to-transparent lg:bg-gradient-to-r lg:from-tbs-cream lg:via-transparent" />
          </div>
          
          {/* Decorative Frame */}
          <div className="absolute inset-8 lg:inset-12 border border-tbs-gold/20 pointer-events-none" />
          <div className="absolute inset-12 lg:inset-16 border border-tbs-gold/10 pointer-events-none" />
          
          {/* Floating Badge */}
          <div className="absolute bottom-6 right-6 lg:bottom-12 lg:right-12 bg-tbs-cream/95 backdrop-blur-sm px-6 py-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-px h-8 bg-tbs-gold" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-tbs-taupe">Est.</p>
                <p className="font-display text-lg text-tbs-charcoal">2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 hidden lg:flex">
        <span className="text-[10px] uppercase tracking-[0.3em] text-tbs-taupe">Discover</span>
        <div className="w-px h-12 bg-gradient-to-b from-tbs-gold to-transparent" />
      </div>
    </section>
  );
}
