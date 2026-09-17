import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const WELCOMING_MESSAGES = [
  'Welcome to EFX Media.',
  "Let's bring your vision to life.",
  "Have a project in mind? We're ready to listen."
];

export const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = WELCOMING_MESSAGES[index];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), 2800);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % WELCOMING_MESSAGES.length);
    } else {
      const speed = deleting ? 35 : 60;
      timer = setTimeout(() => {
        setText(
          deleting
            ? current.substring(0, text.length - 1)
            : current.substring(0, text.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <section className="hero-banner pt-14 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Subtle Category Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-800/10 dark:bg-teal-400/10 text-teal-800 dark:text-teal-300 border border-teal-800/15 dark:border-teal-400/20 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 animate-pulse"></span>
          <span>Graphic Design & Conversion Copywriting Studio</span>
        </div>

        {/* Dynamic Typewriter Greeting */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] min-h-[3.8rem] flex items-center justify-center">
          <span>{text}</span>
          <span className="typewriter-cursor"></span>
        </h1>

        {/* Welcoming Body */}
        <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed font-normal">
          We partner with visionary founders, businesses, and organizations to craft thoughtful visual identities, high-impact marketing designs, and articulate copy that inspires genuine trust.
        </p>

        {/* Tactile, Mature Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#portfolio"
            className="px-6 py-3 rounded-xl font-semibold text-sm tracking-wide bg-teal-800 hover:bg-teal-900 dark:bg-teal-600 dark:hover:bg-teal-500 text-white shadow-xs transition-all flex items-center gap-2"
            id="hero-explore-btn"
          >
            <span>Explore Portfolio</span>
            <ArrowRight size={15} />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-semibold text-sm border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-subtle)] text-[var(--text-primary)] transition-all"
            id="hero-contact-btn"
          >
            Start a Conversation
          </a>
        </div>

        {/* Welcoming Reassurance Pillars */}
        <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)]">
            <CheckCircle2 size={16} className="text-teal-700 dark:text-teal-400 shrink-0" />
            <span>Bespoke Creative Solutions</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)]">
            <CheckCircle2 size={16} className="text-teal-700 dark:text-teal-400 shrink-0" />
            <span>Clear, Honest Timelines</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)]">
            <CheckCircle2 size={16} className="text-teal-700 dark:text-teal-400 shrink-0" />
            <span>Direct Creative Collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
};
