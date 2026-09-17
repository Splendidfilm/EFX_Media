import React from 'react';
import { Quote } from 'lucide-react';

export const CeoSection: React.FC = () => {
  return (
    <section id="about-ceo" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="mature-card p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* CEO Portrait */}
        <div className="relative shrink-0">
          <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-subtle)] shadow-sm">
            <img
              src="/images/designs/portrait.jpg"
              alt="Aaron - Founder and CEO of EFX Media"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-2.5 -right-2.5 p-2 rounded-xl bg-teal-800 dark:bg-teal-600 text-white shadow-sm">
            <Quote size={15} />
          </div>
        </div>

        {/* Story & Philosophy */}
        <div className="flex-1 flex flex-col gap-3.5 text-center md:text-left">
          <div className="inline-flex items-center justify-center md:justify-start gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-teal-700 dark:text-teal-400">
              Leadership & Vision
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            "Design and words that build lasting trust."
          </h2>

          <div className="space-y-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
            <p>
              Hello, I'm <strong className="text-[var(--text-primary)] font-semibold">Aaron</strong>, founder and creative director at{' '}
              <span className="font-semibold text-[var(--text-primary)]">
                EFX <i className="font-script text-teal-700 dark:text-teal-400 not-italic font-normal">Media</i>
              </span>.
            </p>
            <p>
              We know that every brand has a distinct personality and story. Our mission is to take the pressure off your shoulders by providing high-caliber visual identity design and articulate copywriting that speaks directly to your audience.
            </p>
            <p>
              Whether you are announcing an initiative, launching a new campaign, or refreshing your look, we treat your business with the care, diligence, and precision it deserves.
            </p>
          </div>

          <div className="pt-2 flex items-center justify-center md:justify-start gap-3">
            <div>
              <p className="text-sm font-bold text-[var(--text-primary)] leading-tight">
                Aaron
              </p>
              <p className="text-xs text-[var(--text-muted)]">
                Founder & Creative Director, EFX Media
              </p>
            </div>
            <div className="h-6 w-px bg-[var(--border-subtle)] mx-1"></div>
            <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
              Client-First Focus
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
