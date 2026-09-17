import React from 'react';
import { PenTool, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase font-bold tracking-widest text-teal-700 dark:text-teal-400 block mb-2">
          Capabilities & Solutions
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
          Thoughtful Design & Persuasive Copy
        </h2>
        <p className="text-base text-[var(--text-secondary)] leading-relaxed">
          We combine visual art with strategic writing so your brand communicates clearly, engages naturally, and drives real action.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Service 1: Copywriting */}
        <div className="mature-card p-8 flex flex-col justify-between">
          <div>
            <div className="w-11 h-11 rounded-xl bg-teal-800/10 dark:bg-teal-400/10 text-teal-800 dark:text-teal-300 flex items-center justify-center mb-6">
              <PenTool size={20} />
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
              Strategic Copywriting
            </h3>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
              Words shape perception. We help clarify your core message and articulate value propositions that educate, persuade, and turn casual observers into committed partners.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Website & Landing Page Copy',
                'Email Sequences & Campaign Strategy',
                'Brand Voice & Editorial Guidelines',
                'Social Media Captions & Hook Writing'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm text-[var(--text-primary)] font-medium">
                  <CheckCircle2 size={16} className="text-teal-700 dark:text-teal-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-5 border-t border-[var(--border-subtle)] flex items-center justify-between">
            <span className="text-xs text-[var(--text-muted)] font-medium">
              Tailored to your specific audience
            </span>
            <a
              href="#contact"
              className="text-xs font-semibold text-teal-800 dark:text-teal-300 hover:underline inline-flex items-center gap-1"
            >
              <span>Inquire about copy</span>
              <ArrowRight size={12} />
            </a>
          </div>
        </div>

        {/* Service 2: Visual Identity */}
        <div className="mature-card p-8 flex flex-col justify-between">
          <div>
            <div className="w-11 h-11 rounded-xl bg-teal-800/10 dark:bg-teal-400/10 text-teal-800 dark:text-teal-300 flex items-center justify-center mb-6">
              <Layers size={20} />
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
              Visual Identity & Design
            </h3>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
              A distinctive aesthetic builds immediate confidence. From brand mark creation to marketing collateral, we ensure every visual touchpoint conveys polish, care, and quality.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Brand Identity Systems & Logos',
                'Event Posters, Flyers & Banners',
                'Social Media Assets & Content Kits',
                'Marketing & Presentation Decks'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm text-[var(--text-primary)] font-medium">
                  <CheckCircle2 size={16} className="text-teal-700 dark:text-teal-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-5 border-t border-[var(--border-subtle)] flex items-center justify-between">
            <span className="text-xs text-[var(--text-muted)] font-medium">
              Crafted with balanced typography
            </span>
            <a
              href="#portfolio"
              className="text-xs font-semibold text-teal-800 dark:text-teal-300 hover:underline inline-flex items-center gap-1"
            >
              <span>View design work</span>
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Welcoming Note */}
      <div className="mt-8 p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-[var(--text-primary)]">
            Looking for a cohesive brand launch?
          </h4>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">
            We often partner on unified packages where design and copy are crafted side-by-side.
          </p>
        </div>
        <a
          href="#contact"
          className="shrink-0 px-4 py-2 rounded-lg text-xs font-semibold bg-teal-800 dark:bg-teal-600 hover:bg-teal-900 text-white transition-all shadow-2xs"
        >
          Request a Custom Package
        </a>
      </div>
    </section>
  );
};
