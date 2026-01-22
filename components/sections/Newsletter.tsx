'use client';

import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 800);
  };

  return (
    <section className="relative bg-tbs-burgundy py-20 sm:py-24">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-art-deco opacity-5" />
      
      {/* Decorative Borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tbs-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tbs-gold/30 to-transparent" />
      
      <div className="relative mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 text-center">
        {/* Decorative Element */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-8 bg-tbs-gold/40" />
          <span className="text-tbs-gold text-sm">✦</span>
          <span className="h-px w-8 bg-tbs-gold/40" />
        </div>
        
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-tbs-cream">
          Join Our Circle
        </h2>
        <p className="mt-4 text-base text-tbs-cream/70 max-w-xl mx-auto leading-relaxed">
          Receive exclusive invitations, early access to new classes, and seasonal 
          recipes delivered to your inbox.
        </p>

        {isSubmitted ? (
          <div className="mt-10 flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center border border-tbs-gold text-tbs-gold">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="mt-4 font-display text-lg text-tbs-cream">Welcome to the circle.</p>
            <p className="mt-2 text-sm text-tbs-cream/60">Check your inbox for a confirmation.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-3 max-w-lg mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full border border-tbs-gold/30 bg-tbs-burgundy/50 px-5 py-4 text-sm text-tbs-cream placeholder:text-tbs-cream/50 transition-colors focus:border-tbs-gold focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="relative overflow-hidden bg-tbs-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] text-tbs-charcoal transition-all hover:bg-tbs-cream disabled:opacity-70"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                </span>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
        )}

        <p className="mt-6 text-xs text-tbs-cream/50">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
