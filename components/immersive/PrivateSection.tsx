'use client';

import { useState } from 'react';
import Image from 'next/image';

const eventTypes = [
  'Team Building',
  'Birthday Parties',
  'Bachelorette',
  'Corporate Events',
  'Date Night',
  'Girls Night',
];

export function PrivateSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    groupSize: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section id="private" className="relative bg-tbs-noir overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/team-group-shot-home-min.jpg"
          alt="Private events at The Baking Social"
          fill
          className="object-cover img-luxe opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tbs-noir via-tbs-noir/80 to-tbs-noir lg:bg-gradient-to-r lg:from-tbs-noir lg:via-tbs-noir/90 lg:to-tbs-noir/70" />
      </div>

      <div className="relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden px-5 sm:px-6 py-16 sm:py-20">
          {/* Content */}
          <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.3em] sm:tracking-[0.4em] uppercase text-tbs-gold mb-3 block">
            Private Events
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-tbs-ivory leading-[1.1] mb-4 sm:mb-6">
            Host your next
            <br />
            <span className="italic text-tbs-champagne">unforgettable gathering</span>
          </h2>

          <p className="text-tbs-stone text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
            Transform any occasion into an extraordinary experience. Our studio becomes your 
            private baking sanctuary—complete with expert guidance, premium ingredients, and 
            memories that last forever.
          </p>

          {/* Event Types - Scrollable on mobile */}
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            {eventTypes.map((type) => (
              <span
                key={type}
                className="px-3 py-1.5 text-[9px] sm:text-[10px] tracking-[0.1em] sm:tracking-[0.15em] uppercase border border-tbs-champagne/20 text-tbs-champagne/70"
              >
                {type}
              </span>
            ))}
          </div>

          {/* Features - 2 columns */}
          <div className="grid grid-cols-2 gap-4 mb-8 sm:mb-10">
            {[
              { label: 'Group Size', value: '10-40 guests' },
              { label: 'Duration', value: '2-3 hours' },
              { label: 'Includes', value: 'Everything' },
              { label: 'Beverages', value: 'Wine & Beer' },
            ].map((item, i) => (
              <div key={i} className="border-l border-tbs-gold/30 pl-3">
                <p className="text-[9px] tracking-[0.15em] uppercase text-tbs-stone">{item.label}</p>
                <p className="font-display text-base text-tbs-ivory">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-tbs-noir/80 backdrop-blur-sm border border-tbs-gold/20 p-5 sm:p-6">
            {isSubmitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 mx-auto border border-tbs-gold flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-tbs-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-xl text-tbs-ivory mb-2">Thank You</h3>
                <p className="text-tbs-stone text-sm">We&apos;ll be in touch within 24 hours.</p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', eventType: '', groupSize: '', message: '' });
                  }}
                  className="mt-4 text-[10px] tracking-[0.15em] uppercase text-tbs-gold"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl text-tbs-ivory mb-1">Begin Your Inquiry</h3>
                <p className="text-tbs-stone text-sm mb-6">Tell us about your occasion</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-tbs-champagne/20 py-3 text-sm text-tbs-ivory placeholder:text-tbs-stone/50 focus:border-tbs-gold focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-tbs-champagne/20 py-3 text-sm text-tbs-ivory placeholder:text-tbs-stone/50 focus:border-tbs-gold focus:outline-none"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      required
                      className="w-full bg-transparent border-b border-tbs-champagne/20 py-3 text-sm text-tbs-ivory focus:border-tbs-gold focus:outline-none appearance-none"
                    >
                      <option value="" className="bg-tbs-noir text-tbs-stone">Event Type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type} className="bg-tbs-noir">{type}</option>
                      ))}
                    </select>
                    <select
                      value={formData.groupSize}
                      onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                      required
                      className="w-full bg-transparent border-b border-tbs-champagne/20 py-3 text-sm text-tbs-ivory focus:border-tbs-gold focus:outline-none appearance-none"
                    >
                      <option value="" className="bg-tbs-noir text-tbs-stone">Group Size</option>
                      <option value="10-15" className="bg-tbs-noir">10-15</option>
                      <option value="16-25" className="bg-tbs-noir">16-25</option>
                      <option value="26-40" className="bg-tbs-noir">26-40</option>
                    </select>
                  </div>
                  <textarea
                    placeholder="Tell us about your event..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full bg-transparent border-b border-tbs-champagne/20 py-3 text-sm text-tbs-ivory placeholder:text-tbs-stone/50 focus:border-tbs-gold focus:outline-none resize-none"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-filled w-full mt-2"
                  >
                    {isLoading ? 'Sending...' : 'Submit Inquiry'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 min-h-screen">
          {/* Left - Content */}
          <div className="flex flex-col justify-center px-12 xl:px-20 2xl:px-24 py-20">
            <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-tbs-gold mb-4">
              Private Events
            </span>
            <h2 className="font-display text-4xl xl:text-5xl 2xl:text-6xl font-light text-tbs-ivory leading-[1.1] mb-6">
              Host your next
              <br />
              <span className="italic text-tbs-champagne">unforgettable gathering</span>
            </h2>

            <p className="text-tbs-stone text-base lg:text-lg leading-relaxed max-w-lg mb-10">
              Transform any occasion into an extraordinary experience. Our studio becomes your 
              private baking sanctuary—complete with expert guidance, premium ingredients, and 
              memories that last forever.
            </p>

            {/* Event Types */}
            <div className="flex flex-wrap gap-2 mb-10">
              {eventTypes.map((type) => (
                <span
                  key={type}
                  className="px-4 py-2 text-[10px] tracking-[0.15em] uppercase border border-tbs-champagne/20 text-tbs-champagne/70 hover:border-tbs-gold hover:text-tbs-gold transition-colors cursor-default"
                >
                  {type}
                </span>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Group Size', value: '10-40 guests' },
                { label: 'Duration', value: '2-3 hours' },
                { label: 'Includes', value: 'Everything' },
                { label: 'Beverages', value: 'Wine & Beer' },
              ].map((item, i) => (
                <div key={i} className="border-l border-tbs-gold/30 pl-4">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-tbs-stone">{item.label}</p>
                  <p className="font-display text-lg text-tbs-ivory">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="flex items-center justify-center px-12 xl:px-16 py-20">
            <div className="w-full max-w-md bg-tbs-noir/80 backdrop-blur-sm border border-tbs-gold/20 p-8 lg:p-10">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto border border-tbs-gold flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-tbs-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-tbs-ivory mb-3">Thank You</h3>
                  <p className="text-tbs-stone text-sm">We&apos;ll be in touch within 24 hours to discuss your event.</p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', eventType: '', groupSize: '', message: '' });
                    }}
                    className="mt-6 text-[10px] tracking-[0.2em] uppercase text-tbs-gold hover:text-tbs-champagne transition-colors"
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl text-tbs-ivory mb-2">Begin Your Inquiry</h3>
                  <p className="text-tbs-stone text-sm mb-8">Tell us about your occasion</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-transparent border-b border-tbs-champagne/20 py-3 text-tbs-ivory placeholder:text-tbs-stone/50 focus:border-tbs-gold focus:outline-none transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-transparent border-b border-tbs-champagne/20 py-3 text-tbs-ivory placeholder:text-tbs-stone/50 focus:border-tbs-gold focus:outline-none transition-colors"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        required
                        className="w-full bg-transparent border-b border-tbs-champagne/20 py-3 text-tbs-ivory focus:border-tbs-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-tbs-noir">Event Type</option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type} className="bg-tbs-noir">{type}</option>
                        ))}
                      </select>
                      <select
                        value={formData.groupSize}
                        onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                        required
                        className="w-full bg-transparent border-b border-tbs-champagne/20 py-3 text-tbs-ivory focus:border-tbs-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-tbs-noir">Group Size</option>
                        <option value="10-15" className="bg-tbs-noir">10-15 guests</option>
                        <option value="16-25" className="bg-tbs-noir">16-25 guests</option>
                        <option value="26-40" className="bg-tbs-noir">26-40 guests</option>
                      </select>
                    </div>
                    <textarea
                      placeholder="Tell us about your event..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      className="w-full bg-transparent border-b border-tbs-champagne/20 py-3 text-tbs-ivory placeholder:text-tbs-stone/50 focus:border-tbs-gold focus:outline-none transition-colors resize-none"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-filled w-full mt-4"
                    >
                      {isLoading ? 'Sending...' : 'Submit Inquiry'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
