import React, { useState } from 'react';
import { Calculator, Clock, CheckCircle2, MessageCircle, ArrowRight, Sparkles, Layers } from 'lucide-react';

interface ScopeOption {
  id: string;
  name: string;
  category: 'design' | 'copy' | 'suite';
  description: string;
  baseDays: number;
  estPrice: number;
}

const AVAILABLE_SERVICES: ScopeOption[] = [
  {
    id: 'logo-identity',
    name: 'Brand Identity & Logo Suite',
    category: 'design',
    description: 'Primary vector mark, monochrome variants, typography guidelines, and complete export kit.',
    baseDays: 4,
    estPrice: 280
  },
  {
    id: 'web-copy',
    name: 'High-Converting Web Copywriting',
    category: 'copy',
    description: 'Hero hooks, value propositions, about story, service cards, and conversion CTA microcopy.',
    baseDays: 4,
    estPrice: 250
  },
  {
    id: 'social-kit',
    name: 'Social Media Campaign & Ad Kit',
    category: 'design',
    description: '10 custom carousel templates, story banners, and coordinated promotional post layouts.',
    baseDays: 3,
    estPrice: 190
  },
  {
    id: 'print-collateral',
    name: 'Print, Poster & Event Collateral',
    category: 'design',
    description: 'Print-ready CMYK event flyers, large-format roll-up banners, and corporate presentation layouts.',
    baseDays: 3,
    estPrice: 170
  },
  {
    id: 'brand-style-guide',
    name: 'Comprehensive Brand Style Guide',
    category: 'suite',
    description: 'Detailed brand book covering logo clear space, color rules, typography hierarchy, and dos/don\'ts.',
    baseDays: 3,
    estPrice: 220
  }
];

interface ScopeEstimatorProps {
  onTransferToContact?: (summary: string, serviceType: string) => void;
}

export const ScopeEstimator: React.FC<ScopeEstimatorProps> = ({ onTransferToContact }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'logo-identity',
    'web-copy'
  ]);
  const [urgency, setUrgency] = useState<'standard' | 'priority' | 'express'>('standard');
  const [scale, setScale] = useState<'starter' | 'growth'>('starter');

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id)
        ? prev.length > 1
          ? prev.filter((item) => item !== id)
          : prev // Keep at least one selected
        : [...prev, id]
    );
  };

  // Turnaround days calculation
  const totalBaseDays = selectedServices.reduce((acc, id) => {
    const item = AVAILABLE_SERVICES.find((s) => s.id === id);
    return acc + (item ? item.baseDays : 0);
  }, 0);

  // Parallel workflow multiplier (a creative studio works in parallel)
  let calculatedDays = Math.ceil(totalBaseDays * 0.65);
  if (urgency === 'priority') calculatedDays = Math.max(3, Math.ceil(calculatedDays * 0.7));
  if (urgency === 'express') calculatedDays = Math.max(2, Math.ceil(calculatedDays * 0.5));

  // Investment bracket calculation
  const baseCost = selectedServices.reduce((acc, id) => {
    const item = AVAILABLE_SERVICES.find((s) => s.id === id);
    return acc + (item ? item.estPrice : 0);
  }, 0);

  const scaleMultiplier = scale === 'growth' ? 1.4 : 1.0;
  const urgencyMultiplier = urgency === 'express' ? 1.35 : urgency === 'priority' ? 1.15 : 1.0;
  const calculatedEstimate = Math.round(baseCost * scaleMultiplier * urgencyMultiplier);

  // Generate Scope Summary Text
  const getSelectedNames = () =>
    selectedServices
      .map((id) => AVAILABLE_SERVICES.find((s) => s.id === id)?.name)
      .filter(Boolean)
      .join(', ');

  const scopeSummary = `Project Scope Estimate:
• Services: ${getSelectedNames()}
• Scale: ${scale === 'growth' ? 'Growth / Multi-Asset Campaign' : 'Starter / Single Brand Package'}
• Urgency: ${urgency.toUpperCase()} (~${calculatedDays} business days turnaround)
• Estimated Bracket: ~$${calculatedEstimate - 40} – $${calculatedEstimate + 50} USD (or equivalent in NGN)
Please confirm availability and kickoff timeline.`;

  const handleTransfer = () => {
    if (onTransferToContact) {
      const hasDesign = selectedServices.some((id) =>
        ['logo-identity', 'social-kit', 'print-collateral', 'brand-style-guide'].includes(id)
      );
      const hasCopy = selectedServices.includes('web-copy');
      const serviceType = hasDesign && hasCopy ? 'both' : hasCopy ? 'copywriting' : 'design';

      onTransferToContact(scopeSummary, serviceType);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleWhatsAppSend = () => {
    const encoded = encodeURIComponent(`Hi Aaron, I built a project scope on the EFX Media website:\n\n${scopeSummary}`);
    window.open(`https://wa.me/2348003396334?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="scope-calculator" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase font-bold tracking-widest text-teal-700 dark:text-teal-400 block mb-2">
          Transparent Scoping
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
          Interactive Scope & Turnaround Estimator
        </h2>
        <p className="text-base text-[var(--text-secondary)] leading-relaxed">
          Select the creative modules your brand needs to see an estimated delivery timeline and investment bracket immediately.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Selectors */}
        <div className="lg:col-span-7 space-y-6">
          {/* Service Modules */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-3">
              1. Choose Required Deliverables
            </label>
            <div className="space-y-2.5">
              {AVAILABLE_SERVICES.map((service) => {
                const isChecked = selectedServices.includes(service.id);
                return (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                      isChecked
                        ? 'border-teal-700 bg-teal-800/5 dark:bg-teal-400/10 shadow-xs'
                        : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 transition-colors ${
                          isChecked
                            ? 'bg-teal-800 dark:bg-teal-500 text-white'
                            : 'border border-[var(--border-strong)] bg-[var(--bg-canvas)]'
                        }`}
                      >
                        {isChecked && <CheckCircle2 size={13} />}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[var(--text-primary)]">
                          {service.name}
                        </h4>
                        <p className="text-xs text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold text-teal-700 dark:text-teal-400 shrink-0">
                      ~{service.baseDays}d base
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scale & Urgency Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Urgency */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-2">
                2. Delivery Pace
              </label>
              <div className="grid grid-cols-3 gap-1.5 p-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
                <button
                  type="button"
                  onClick={() => setUrgency('standard')}
                  className={`py-1.5 px-2 rounded-md text-xs font-medium transition-all ${
                    urgency === 'standard'
                      ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] font-bold shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Standard
                </button>
                <button
                  type="button"
                  onClick={() => setUrgency('priority')}
                  className={`py-1.5 px-2 rounded-md text-xs font-medium transition-all ${
                    urgency === 'priority'
                      ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] font-bold shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Priority
                </button>
                <button
                  type="button"
                  onClick={() => setUrgency('express')}
                  className={`py-1.5 px-2 rounded-md text-xs font-medium transition-all ${
                    urgency === 'express'
                      ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] font-bold shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Express
                </button>
              </div>
            </div>

            {/* Brand Scale */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-2">
                3. Project Scale
              </label>
              <div className="grid grid-cols-2 gap-1.5 p-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
                <button
                  type="button"
                  onClick={() => setScale('starter')}
                  className={`py-1.5 px-2 rounded-md text-xs font-medium transition-all ${
                    scale === 'starter'
                      ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] font-bold shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Single Brand
                </button>
                <button
                  type="button"
                  onClick={() => setScale('growth')}
                  className={`py-1.5 px-2 rounded-md text-xs font-medium transition-all ${
                    scale === 'growth'
                      ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] font-bold shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Multi-Asset
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Estimate Summary Card */}
        <div className="lg:col-span-5 mature-card p-6 sm:p-8 sticky top-24 border-teal-800/20 shadow-md">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 flex items-center gap-1.5">
              <Calculator size={14} />
              <span>Project Summary</span>
            </span>
            <span className="text-xs text-[var(--text-muted)]">
              {selectedServices.length} Selected
            </span>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="p-3.5 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-subtle)]">
              <span className="text-[11px] font-semibold text-[var(--text-secondary)] block flex items-center gap-1 mb-1">
                <Clock size={12} className="text-teal-700 dark:text-teal-400" />
                <span>Estimated Turnaround</span>
              </span>
              <div className="text-xl font-black text-[var(--text-primary)]">
                {calculatedDays} – {calculatedDays + 2} <span className="text-xs font-normal text-[var(--text-secondary)]">Days</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-subtle)]">
              <span className="text-[11px] font-semibold text-[var(--text-secondary)] block flex items-center gap-1 mb-1">
                <Sparkles size={12} className="text-teal-700 dark:text-teal-400" />
                <span>Estimate Bracket</span>
              </span>
              <div className="text-xl font-black text-teal-800 dark:text-teal-400">
                ${calculatedEstimate - 30} – ${calculatedEstimate + 40}
              </div>
            </div>
          </div>

          {/* Included Deliverables List */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2.5">
              Included in this scope:
            </h4>
            <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
              {selectedServices.map((id) => {
                const s = AVAILABLE_SERVICES.find((item) => item.id === id);
                return (
                  <li key={id} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-700 dark:bg-teal-400"></div>
                    <span>{s?.name}</span>
                  </li>
                );
              })}
              <li className="flex items-center gap-2 text-teal-800 dark:text-teal-300 font-medium pt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                <span>Unlimited revision rounds during concept phase</span>
              </li>
              <li className="flex items-center gap-2 text-teal-800 dark:text-teal-300 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                <span>Full commercial copyright transfer upon delivery</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <button
              onClick={handleTransfer}
              className="w-full py-3 px-4 rounded-lg font-bold text-xs bg-teal-800 hover:bg-teal-900 dark:bg-teal-600 dark:hover:bg-teal-500 text-white transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <span>Transfer Scope to Contact Form</span>
              <ArrowRight size={14} />
            </button>

            <button
              onClick={handleWhatsAppSend}
              className="w-full py-2.5 px-4 rounded-lg font-semibold text-xs border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-subtle)] text-[var(--text-primary)] transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={14} className="text-emerald-600 dark:text-emerald-400" />
              <span>Send this Scope directly to WhatsApp</span>
            </button>
          </div>

          <p className="text-[11px] text-[var(--text-muted)] text-center mt-4">
            Custom milestone billing available. No hidden fees.
          </p>
        </div>
      </div>
    </section>
  );
};
