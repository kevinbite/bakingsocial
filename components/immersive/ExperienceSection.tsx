'use client';

import Image from 'next/image';

const experiences = [
  {
    id: 1,
    title: 'Studio Classes',
    subtitle: 'Weekly Sessions',
    description: 'Join fellow enthusiasts in our signature workshops. From artisan breads to decadent desserts, each class is a journey into culinary excellence.',
    image: '/cooking-camps-180.webp',
    accent: 'tbs-burgundy',
  },
  {
    id: 2,
    title: 'Private Events',
    subtitle: 'Exclusive Gatherings',
    description: 'Transform your celebration into an unforgettable experience. Corporate retreats, bridal parties, and intimate milestones—elevated.',
    image: '/team-group-shot-home-min.jpg',
    accent: 'tbs-emerald',
  },
  {
    id: 3,
    title: 'Curated Moments',
    subtitle: 'Date Nights & More',
    description: 'Intimate experiences designed for connection. Create together, savor together, remember forever.',
    image: '/pexels-photo-6944045.jpeg',
    accent: 'tbs-sapphire',
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-tbs-noir pt-8 sm:pt-12 lg:pt-16 pb-20 sm:pb-28 lg:pb-32 xl:pb-40">
      {/* Section Header */}
      <div className="relative z-10 mb-12 sm:mb-16 lg:mb-20 xl:mb-32 px-5 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 lg:items-end">
            <div>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.3em] sm:tracking-[0.4em] uppercase text-tbs-gold mb-3 sm:mb-4 block">
                The Experience
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-tbs-ivory leading-[1.1]">
                Crafted for
                <br />
                <span className="italic text-tbs-champagne">those who savor</span>
              </h2>
            </div>
            <div className="lg:text-right">
              <p className="text-tbs-stone text-sm sm:text-base lg:text-lg leading-relaxed max-w-md lg:ml-auto">
                Each moment at The Baking Social is designed to inspire, delight, and create lasting memories through the timeless art of baking.
              </p>
            </div>
          </div>
          
          {/* Decorative Line */}
          <div className="mt-8 sm:mt-10 lg:mt-12 h-px bg-gradient-to-r from-tbs-gold/30 via-tbs-gold/10 to-transparent" />
        </div>
      </div>

      {/* Experience Cards */}
      <div className="relative z-10 px-5 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className={`relative mb-16 sm:mb-20 lg:mb-32 xl:mb-40 last:mb-0`}
            >
              {/* Mobile Layout - Stacked */}
              <div className="lg:hidden">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden group mb-6">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover img-luxe transition-transform duration-700 group-hover:scale-105"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tbs-noir/60 via-transparent to-transparent" />
                  <div className="absolute inset-3 sm:inset-4 border border-tbs-gold/20 pointer-events-none" />
                  
                  {/* Number */}
                  <div className="absolute bottom-4 right-4 font-display text-6xl sm:text-7xl font-light text-tbs-gold/10">
                    0{exp.id}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-tbs-stone mb-2 block">
                    {exp.subtitle}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-light text-tbs-ivory mb-4">
                    {exp.title}
                  </h3>
                  <p className="text-tbs-champagne/70 text-sm sm:text-base leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <a 
                    href={exp.id === 2 ? '#private' : '#schedule'} 
                    className="btn-elegant inline-flex text-xs"
                  >
                    {exp.id === 2 ? 'Book an Event' : 'View Schedule'}
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Desktop Layout - Alternating */}
              <div className={`hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 ${
                index % 2 === 1 ? 'lg:text-right' : ''
              }`}>
                {/* Image */}
                <div className={`relative lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                  <div className="relative aspect-[16/10] overflow-hidden group">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover img-luxe transition-transform duration-700 group-hover:scale-105"
                      sizes="60vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tbs-noir/60 via-transparent to-transparent" />
                    <div className="absolute inset-4 border border-tbs-gold/20 pointer-events-none transition-all duration-500 group-hover:inset-6" />
                  </div>

                  {/* Number */}
                  <div className={`absolute -bottom-8 ${index % 2 === 1 ? 'left-8' : 'right-8'} font-display text-8xl lg:text-9xl font-light text-tbs-gold/10`}>
                    0{exp.id}
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1 lg:text-right lg:items-end' : ''
                }`}>
                  <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-tbs-stone mb-3">
                    {exp.subtitle}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-tbs-ivory mb-6">
                    {exp.title}
                  </h3>
                  <p className={`text-tbs-champagne/70 leading-relaxed mb-8 max-w-md ${index % 2 === 1 ? 'lg:ml-auto' : ''}`}>
                    {exp.description}
                  </p>
                  <div>
                    <a 
                      href={exp.id === 2 ? '#private' : '#schedule'} 
                      className="btn-elegant inline-flex"
                    >
                      {exp.id === 2 ? 'Book an Event' : 'View Schedule'}
                      <svg className="ml-3 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
