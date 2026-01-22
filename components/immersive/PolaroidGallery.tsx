'use client';

import Image from 'next/image';

const polaroids = [
  { id: 1, rotation: '-rotate-6', image: '/Baking Social Mock up.png' },
  { id: 2, rotation: 'rotate-3', image: '/Baking Social Mock up copy.png' },
  { id: 3, rotation: '-rotate-2', image: '/Baking Social Mock up copy 2.png' },
  { id: 4, rotation: 'rotate-5', image: '/Baking Social Mock up copy 3.png' },
];

export function PolaroidGallery() {
  return (
    <section className="relative bg-tbs-noir pt-4 sm:pt-6 lg:pt-12 lg:-mt-20 pb-4 sm:pb-6 lg:pb-8 overflow-visible">

      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        {/* Polaroids Container - Horizontal scroll on mobile */}
        <div className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:overflow-visible lg:justify-center lg:flex-wrap">
          {polaroids.map((polaroid, index) => (
            <div
              key={polaroid.id}
              className={`relative flex-shrink-0 snap-center ${polaroid.rotation} hover:rotate-0 transition-transform duration-300`}
              style={{ 
                marginTop: `${(index % 3) * 20 + 10}px`,
              }}
            >
              {/* Clip/Pin */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                <div className="w-4 h-8 bg-gradient-to-b from-tbs-gold to-tbs-champagne rounded-sm shadow-md" />
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-tbs-noir/30 rounded-full" />
              </div>
              
              {/* String from clip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-px h-6 bg-tbs-champagne/50" />
              
              {/* Polaroid Frame */}
              <div className="bg-white p-2 pb-10 shadow-xl w-40 sm:w-48 lg:w-56">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={polaroid.image}
                    alt={`Baking Social moment ${polaroid.id}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle gradient overlays for scroll indication on mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-tbs-noir to-transparent pointer-events-none lg:hidden" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-tbs-noir to-transparent pointer-events-none lg:hidden" />
    </section>
  );
}
