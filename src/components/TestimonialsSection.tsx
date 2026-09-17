import React, { useState } from 'react';
import { testimonials } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2, Building2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
  };

  const next = () => {
    setIndex((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
  };

  const activeTestimonial = testimonials[index];

  return (
    <section id="testimonials" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs uppercase font-bold tracking-widest text-teal-700 dark:text-teal-400 block mb-2">
          Endorsements
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
          What Our Clients Say
        </h2>
        <p className="text-base text-[var(--text-secondary)] leading-relaxed">
          Reflections from the founders, corporate leads, and media networks we have had the privilege to serve.
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="mature-card p-8 sm:p-12 relative flex flex-col items-center text-center">
        {/* Verified Badge */}
        {activeTestimonial.verified && (
          <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-800/10 dark:bg-teal-400/10 text-teal-800 dark:text-teal-300 text-[11px] font-semibold border border-teal-800/20">
            <CheckCircle2 size={12} />
            <span>Verified Client Endorsement</span>
          </div>
        )}

        {/* Rating */}
        <div className="flex items-center gap-1 mb-5 text-amber-500">
          {[...Array(activeTestimonial.rating)].map((_, i) => (
            <Star key={i} size={18} fill="currentColor" />
          ))}
        </div>

        {/* Quote Icon */}
        <div className="text-teal-800/20 dark:text-teal-400/20 mb-3">
          <Quote size={32} />
        </div>

        {/* Quote Content */}
        <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-[var(--text-primary)] leading-relaxed mb-6 font-editorial italic max-w-2xl">
          "{activeTestimonial.quote}"
        </blockquote>

        {/* Author Attribution */}
        <div className="space-y-1">
          <div className="font-bold text-base text-[var(--text-primary)]">
            {activeTestimonial.author}
          </div>
          {activeTestimonial.role && (
            <div className="text-xs font-semibold text-teal-700 dark:text-teal-400">
              {activeTestimonial.role}
              {activeTestimonial.company && ` • ${activeTestimonial.company}`}
            </div>
          )}
          {activeTestimonial.project && (
            <div className="text-[11px] text-[var(--text-muted)] flex items-center justify-center gap-1 mt-1">
              <Building2 size={11} />
              <span>Delivered: {activeTestimonial.project}</span>
            </div>
          )}
        </div>

        {/* Slide Controls */}
        <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-[var(--border-subtle)] w-full max-w-xs">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-[var(--border-subtle)] hover:bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  index === i ? 'w-5 bg-teal-800 dark:bg-teal-400' : 'w-2 bg-[var(--border-subtle)]'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 rounded-full border border-[var(--border-subtle)] hover:bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
