import { featuredClasses } from '@/lib/landingContent';

export function FeaturedClasses() {
  const categoryColors: Record<string, string> = {
    baking: 'bg-tbs-crimson/20 text-tbs-brown',
    decorating: 'bg-tbs-azure-light text-tbs-crimson',
    bread: 'bg-tbs-azure text-tbs-crimson',
    specialty: 'bg-tbs-crimson/10 text-tbs-crimson',
  };

  return (
    <section id="classes" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-tbs-brown sm:text-4xl">
            Popular Classes
          </h2>
          <p className="mt-4 text-lg text-tbs-gray">
            Hands-on experiences for every skill level
          </p>
        </div>

        {/* Classes Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredClasses.map((classItem) => (
            <div
              key={classItem.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-tbs-cream shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-tbs-azure-light via-tbs-azure to-tbs-crimson/30">
                  {/* Grain texture */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    }}
                  />
                  {/* Decorative element */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <CategoryIcon category={classItem.category} />
                    </div>
                  </div>
                </div>

                {/* Badge */}
                {classItem.badge && (
                  <div className="absolute left-3 top-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                        classItem.badge === 'Most Popular'
                          ? 'bg-tbs-crimson text-white'
                          : classItem.badge === 'Trending'
                          ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white'
                          : 'bg-white/90 text-tbs-brown backdrop-blur-sm'
                      }`}
                    >
                      {classItem.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                {/* Category + Duration */}
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      categoryColors[classItem.category]
                    }`}
                  >
                    {classItem.category.charAt(0).toUpperCase() + classItem.category.slice(1)}
                  </span>
                  <span className="text-xs text-tbs-gray">
                    {classItem.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold leading-snug text-tbs-brown group-hover:text-tbs-crimson transition-colors">
                  {classItem.title}
                </h3>

                {/* Description */}
                <p className="mt-2 flex-1 text-sm leading-relaxed text-tbs-gray line-clamp-2">
                  {classItem.description}
                </p>

                {/* Price + CTA */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-lg font-bold text-tbs-brown">
                    ${classItem.price}
                    <span className="text-sm font-normal text-tbs-gray">/person</span>
                  </span>
                  <a
                    href="#schedule"
                    data-cta="book-class"
                    className="inline-flex items-center justify-center rounded-full bg-tbs-crimson px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-tbs-crimson/90 hover:shadow-md active:scale-[0.98]"
                  >
                    Book
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <a
            href="#schedule"
            data-cta="view-schedule"
            className="inline-flex items-center gap-2 text-base font-semibold text-tbs-crimson transition-colors hover:text-tbs-crimson/80"
          >
            View Full Schedule
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function CategoryIcon({ category }: { category: string }) {
  const icons: Record<string, React.ReactNode> = {
    baking: (
      <svg className="h-8 w-8 text-tbs-brown/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
      </svg>
    ),
    decorating: (
      <svg className="h-8 w-8 text-tbs-brown/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    bread: (
      <svg className="h-8 w-8 text-tbs-brown/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    specialty: (
      <svg className="h-8 w-8 text-tbs-brown/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  };

  return icons[category] || icons.baking;
}

