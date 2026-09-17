import React, { useState, useEffect } from 'react';
import { Award, Clock, HeartHandshake, ChevronDown, CheckCircle2 } from 'lucide-react';

const MOTTO_PHRASES = [
  'Creativity rooted in clarity and purpose.',
  'Every detail counts. Every message matters.',
  'Turning ideas into visual assets that endure.',
  'Thoughtful design that tells your authentic story.'
];

export const WhyChooseSection: React.FC = () => {
  const [mottoIndex, setMottoIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>('craft');

  useEffect(() => {
    const current = MOTTO_PHRASES[mottoIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === current) {
      timer = setTimeout(() => setIsDeleting(true), 2800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setMottoIndex((prev) => (prev + 1) % MOTTO_PHRASES.length);
    } else {
      const speed = isDeleting ? 30 : 55;
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, mottoIndex]);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section id="why-choose-us" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Title & Subtle Motto */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase font-bold tracking-widest text-teal-700 dark:text-teal-400 block mb-2">
          The EFX Standard
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
          Why Partner With EFX Media?
        </h2>
        <div className="min-h-[2.2rem] flex items-center justify-center">
          <p className="text-sm sm:text-base font-medium text-teal-800 dark:text-teal-300">
            <span>{displayText}</span>
            <span className="typewriter-cursor"></span>
          </p>
        </div>
      </div>

      {/* 3 Core Value Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Card 1 */}
        <div className="mature-card p-6 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-teal-800/10 dark:bg-teal-400/10 text-teal-800 dark:text-teal-300 flex items-center justify-center mb-4">
              <Award size={20} />
            </div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
              Proven Craftsmanship
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
              Years of practical design and writing expertise focused on converting prospects and building authority for growing brands.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-xs font-semibold text-teal-700 dark:text-teal-400">
            Strategic Outcomes First
          </div>
        </div>

        {/* Card 2 */}
        <div className="mature-card p-6 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-teal-800/10 dark:bg-teal-400/10 text-teal-800 dark:text-teal-300 flex items-center justify-center mb-4">
              <Clock size={20} />
            </div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
              Punctual & Dependable
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
              We know marketing campaigns operate on strict schedules. You receive reliable timelines, proactive updates, and on-time deliverables.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-xs font-semibold text-teal-700 dark:text-teal-400">
            Reliable Delivery Guarantee
          </div>
        </div>

        {/* Card 3 */}
        <div className="mature-card p-6 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-teal-800/10 dark:bg-teal-400/10 text-teal-800 dark:text-teal-300 flex items-center justify-center mb-4">
              <HeartHandshake size={20} />
            </div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
              Direct & Accessible
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
              Work directly with the creative minds shaping your project. No bureaucratic layers or hidden fees—just genuine, attentive collaboration.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-xs font-semibold text-teal-700 dark:text-teal-400">
            Transparent Pricing
          </div>
        </div>
      </div>

      {/* Accordion Detail */}
      <div className="max-w-3xl mx-auto space-y-3">
        {/* Item 1 */}
        <div className="mature-card overflow-hidden transition-all">
          <button
            onClick={() => toggleAccordion('craft')}
            className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-sm sm:text-base text-[var(--text-primary)]"
          >
            <span className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-teal-700 dark:text-teal-400" />
              Multidisciplinary Design & Copy Team
            </span>
            <ChevronDown
              size={18}
              className={`text-[var(--text-muted)] transform transition-transform duration-200 ${
                openAccordion === 'craft' ? 'rotate-180 text-teal-700 dark:text-teal-400' : ''
              }`}
            />
          </button>
          {openAccordion === 'craft' && (
            <div className="px-6 pb-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)] pt-3">
              We bring together deep typographic knowledge, art direction, and conversion copywriting psychology. Rather than treating design and text as separate steps, we create unified assets where the imagery and words complement each other effortlessly.
            </div>
          )}
        </div>

        {/* Item 2 */}
        <div className="mature-card overflow-hidden transition-all">
          <button
            onClick={() => toggleAccordion('custom')}
            className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-sm sm:text-base text-[var(--text-primary)]"
          >
            <span className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-teal-700 dark:text-teal-400" />
              Bespoke Concepts, Zero Mass-Produced Templates
            </span>
            <ChevronDown
              size={18}
              className={`text-[var(--text-muted)] transform transition-transform duration-200 ${
                openAccordion === 'custom' ? 'rotate-180 text-teal-700 dark:text-teal-400' : ''
              }`}
            />
          </button>
          {openAccordion === 'custom' && (
            <div className="px-6 pb-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)] pt-3">
              Every client has a unique niche and competitive space. We conduct focused research into your industry to craft identities and marketing materials that distinguish you from competitors rather than blending in.
            </div>
          )}
        </div>

        {/* Item 3 */}
        <div className="mature-card overflow-hidden transition-all">
          <button
            onClick={() => toggleAccordion('revision')}
            className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-sm sm:text-base text-[var(--text-primary)]"
          >
            <span className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-teal-700 dark:text-teal-400" />
              Collaborative Revisions & Satisfaction
            </span>
            <ChevronDown
              size={18}
              className={`text-[var(--text-muted)] transform transition-transform duration-200 ${
                openAccordion === 'revision' ? 'rotate-180 text-teal-700 dark:text-teal-400' : ''
              }`}
            />
          </button>
          {openAccordion === 'revision' && (
            <div className="px-6 pb-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)] pt-3">
              We view client feedback as an essential part of the creative process. We present concepts clearly, welcome your input, and iterate until the final deliverable satisfies your standard and fulfills its business purpose.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
