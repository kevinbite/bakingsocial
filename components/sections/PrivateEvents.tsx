'use client';

import { useState } from 'react';
import Image from 'next/image';
import { privateEventsContent } from '@/lib/landingContent';

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`h-4 w-4 ${filled ? 'text-tbs-gold' : 'text-tbs-taupe/30'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
  </svg>
);

export function PrivateEvents() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    groupSize: '',
    eventType: '',
    preferredDates: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1000);
  };

  const { headline, steps, eventTypes } = privateEventsContent;

  const reviews = [
    {
      id: 1,
      text: "An unforgettable evening. The attention to detail and service was impeccable.",
      author: "Sarah M.",
      source: "Google",
      rating: 5,
    },
    {
      id: 2,
      text: "The perfect venue for my sister's celebration. Elegant, intimate, and so much fun.",
      author: "Jessica L.",
      source: "Yelp",
      rating: 5,
    },
    {
      id: 3,
      text: "Our team building event exceeded all expectations. Truly a world-class experience.",
      author: "Amanda R.",
      source: "Google",
      rating: 5,
    },
  ];

  return (
    <section id="private-events" className="relative overflow-hidden bg-tbs-ivory py-20 sm:py-28 lg:py-36">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-linen" />
      
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center">
            {/* Decorative Element */}
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-tbs-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-tbs-taupe font-medium">
                Exclusive Gatherings
              </span>
            </div>
            
            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-tbs-charcoal leading-tight">
              {headline}
            </h2>
            
            {/* Divider */}
            <div className="my-8 h-px w-20 bg-tbs-gold/40" />

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="group flex gap-5">
                  <div className="relative flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center border border-tbs-gold/30 font-display text-lg text-tbs-gold transition-colors group-hover:bg-tbs-gold group-hover:text-tbs-cream">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute left-1/2 top-14 h-8 w-px -translate-x-1/2 bg-tbs-gold/20" />
                    )}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-display text-lg font-semibold text-tbs-charcoal">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-tbs-taupe leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Event Types */}
            <div className="mt-10">
              <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-tbs-taupe mb-4">
                Perfect For
              </h4>
              <div className="flex flex-wrap gap-2">
                {eventTypes.map((type) => (
                  <span
                    key={type}
                    className="border border-tbs-charcoal/10 px-4 py-2 text-xs tracking-wider text-tbs-charcoal transition-colors hover:border-tbs-gold hover:text-tbs-burgundy"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="mt-12">
              <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-tbs-taupe mb-5">
                Guest Testimonials
              </h4>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-tbs-cream p-5 border border-tbs-gold/10">
                    <div className="flex items-center gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} filled={i < review.rating} />
                      ))}
                    </div>
                    <p className="text-sm text-tbs-charcoal leading-relaxed italic">&ldquo;{review.text}&rdquo;</p>
                    <p className="mt-3 text-xs text-tbs-taupe">
                      <span className="font-medium text-tbs-charcoal">{review.author}</span> · {review.source}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image & Form */}
          <div className="relative">
            {/* Background Image */}
            <div className="relative aspect-[4/3] mb-8 lg:mb-0 lg:absolute lg:inset-0 lg:aspect-auto">
              <Image
                src="/team-group-shot-home-min.jpg"
                alt="Private event at The Baking Social"
                fill
                className="object-cover img-vintage"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative Frame */}
              <div className="absolute inset-4 border border-tbs-gold/20 pointer-events-none" />
              {/* Overlay for form readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-tbs-charcoal/90 via-tbs-charcoal/60 to-transparent lg:bg-gradient-to-b lg:from-transparent lg:via-tbs-charcoal/40 lg:to-tbs-charcoal/80" />
            </div>

            {/* Form Card */}
            <div className="relative lg:absolute lg:bottom-8 lg:left-8 lg:right-8 bg-tbs-ivory p-6 sm:p-8 shadow-xl">
              {/* Decorative top line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-tbs-gold to-transparent" />
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center border border-tbs-gold text-tbs-gold mb-6">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-tbs-charcoal">
                    Thank You
                  </h3>
                  <p className="mt-3 max-w-sm text-sm text-tbs-taupe leading-relaxed">
                    We&apos;ll be in touch within 24 hours to discuss your vision and craft an unforgettable experience.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', groupSize: '', eventType: '', preferredDates: '', message: '' });
                    }}
                    className="mt-6 text-xs font-medium uppercase tracking-[0.15em] text-tbs-burgundy hover:text-tbs-gold transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-center mb-6">
                    <h3 className="font-display text-xl font-semibold text-tbs-charcoal">
                      Begin Your Inquiry
                    </h3>
                    <p className="mt-1 text-sm text-tbs-taupe">Tell us about your occasion</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium uppercase tracking-[0.1em] text-tbs-taupe mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-tbs-charcoal/10 bg-tbs-cream px-4 py-3 text-sm text-tbs-charcoal placeholder:text-tbs-taupe/60 transition-colors focus:border-tbs-gold focus:outline-none"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium uppercase tracking-[0.1em] text-tbs-taupe mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-tbs-charcoal/10 bg-tbs-cream px-4 py-3 text-sm text-tbs-charcoal placeholder:text-tbs-taupe/60 transition-colors focus:border-tbs-gold focus:outline-none"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="groupSize" className="block text-xs font-medium uppercase tracking-[0.1em] text-tbs-taupe mb-2">
                        Group Size
                      </label>
                      <select
                        id="groupSize"
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleChange}
                        required
                        className="w-full appearance-none border border-tbs-charcoal/10 bg-tbs-cream px-4 py-3 text-sm text-tbs-charcoal transition-colors focus:border-tbs-gold focus:outline-none"
                      >
                        <option value="">Select size</option>
                        <option value="10-15">10-15 guests</option>
                        <option value="16-25">16-25 guests</option>
                        <option value="26-40">26-40 guests</option>
                        <option value="40+">40+ guests</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="eventType" className="block text-xs font-medium uppercase tracking-[0.1em] text-tbs-taupe mb-2">
                        Event Type
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                        className="w-full appearance-none border border-tbs-charcoal/10 bg-tbs-cream px-4 py-3 text-sm text-tbs-charcoal transition-colors focus:border-tbs-gold focus:outline-none"
                      >
                        <option value="">Select type</option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferredDates" className="block text-xs font-medium uppercase tracking-[0.1em] text-tbs-taupe mb-2">
                      Preferred Dates
                    </label>
                    <input
                      type="text"
                      id="preferredDates"
                      name="preferredDates"
                      value={formData.preferredDates}
                      onChange={handleChange}
                      className="w-full border border-tbs-charcoal/10 bg-tbs-cream px-4 py-3 text-sm text-tbs-charcoal placeholder:text-tbs-taupe/60 transition-colors focus:border-tbs-gold focus:outline-none"
                      placeholder="e.g., March 15-20, 2025"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium uppercase tracking-[0.1em] text-tbs-taupe mb-2">
                      Tell Us More
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full border border-tbs-charcoal/10 bg-tbs-cream px-4 py-3 text-sm text-tbs-charcoal placeholder:text-tbs-taupe/60 transition-colors focus:border-tbs-gold focus:outline-none resize-none"
                      placeholder="Share your vision for the event..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-luxury w-full"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span>Submit Inquiry</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
