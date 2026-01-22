'use client';

import { useState } from 'react';
import { faqItems } from '@/lib/landingContent';

export function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="faq" className="bg-tbs-cream py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-tbs-brown sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-tbs-gray">
            Everything you need to know before your first class
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-12 space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-tbs-crimson focus-visible:ring-offset-2"
                aria-expanded={openItem === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="font-display text-lg font-semibold text-tbs-brown">
                  {item.question}
                </span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-tbs-crimson transition-transform duration-200 ${
                    openItem === item.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`faq-answer-${item.id}`}
                className={`grid transition-all duration-200 ease-in-out ${
                  openItem === item.id
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-tbs-gray/10 px-6 py-5">
                    <p className="leading-relaxed text-tbs-gray">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 rounded-2xl bg-tbs-azure-light/50 p-8 text-center">
          <h3 className="font-display text-xl font-semibold text-tbs-brown">
            Still have questions?
          </h3>
          <p className="mt-2 text-tbs-gray">
            We&apos;re here to help. Reach out and we&apos;ll get back to you within 24 hours.
          </p>
          <a
            href="mailto:hello@thebakingsocial.com"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-tbs-crimson px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-tbs-crimson/90 hover:shadow-md active:scale-[0.98]"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

