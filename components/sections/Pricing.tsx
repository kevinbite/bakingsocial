'use client';

import { useState } from 'react';
import { pricingTiers } from '@/lib/landingContent';

export function Pricing() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail('');
    }, 800);
  };

  return (
    <section id="pricing" className="bg-tbs-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-tbs-brown sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-tbs-gray">
            Everything you need for a great experience
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col overflow-hidden rounded-2xl ${
                tier.highlighted
                  ? 'bg-tbs-crimson shadow-xl shadow-tbs-crimson/20'
                  : 'bg-white shadow-lg'
              }`}
            >
              {/* Highlighted Badge */}
              {tier.highlighted && (
                <div className="absolute right-4 top-4">
                  <span className="inline-flex items-center rounded-full bg-tbs-crimson px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-8">
                {/* Title */}
                <h3
                  className={`font-display text-xl font-semibold ${
                    tier.highlighted ? 'text-white' : 'text-tbs-brown'
                  }`}
                >
                  {tier.title}
                </h3>

                {/* Price */}
                <div className="mt-4">
                  <span
                    className={`font-display text-4xl font-bold ${
                      tier.highlighted ? 'text-white' : 'text-tbs-brown'
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`ml-2 text-sm ${
                      tier.highlighted ? 'text-white/80' : 'text-tbs-gray'
                    }`}
                  >
                    {tier.description}
                  </span>
                </div>

                {/* Features */}
                <ul className="mt-8 flex-1 space-y-4">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                          tier.highlighted ? 'text-tbs-crimson' : 'text-tbs-crimson'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          tier.highlighted ? 'text-white/90' : 'text-tbs-gray'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href="#schedule"
                    data-cta="book-class"
                    className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition-all active:scale-[0.98] ${
                      tier.highlighted
                        ? 'bg-white text-tbs-crimson hover:bg-white/90'
                        : 'bg-tbs-crimson text-white hover:bg-tbs-crimson/90'
                    }`}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Email Capture */}
        <div className="mx-auto mt-16 max-w-xl text-center">
          <div className="rounded-2xl bg-tbs-azure-light/50 p-8">
            <h3 className="font-display text-xl font-semibold text-tbs-brown">
              Get Notified When Booking Opens
            </h3>
            <p className="mt-2 text-sm text-tbs-gray">
              Be the first to know about new class schedules and special offers.
            </p>

            {isSubmitted ? (
              <div className="mt-6 flex items-center justify-center gap-2 rounded-full bg-green-50 px-6 py-3 text-green-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">You&apos;re on the list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="min-w-0 flex-1 rounded-full border border-tbs-gray/20 bg-white px-5 py-3 text-sm text-tbs-brown placeholder:text-tbs-gray/50 focus:border-tbs-crimson focus:outline-none focus:ring-2 focus:ring-tbs-crimson/20"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  data-cta="email-signup"
                  className="inline-flex items-center justify-center rounded-full bg-tbs-crimson px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-tbs-crimson/90 active:scale-[0.98] disabled:opacity-70"
                >
                  {isLoading ? (
                    <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : (
                    'Notify Me'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

