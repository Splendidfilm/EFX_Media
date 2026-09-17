import React from 'react';
import { X, Printer, Download, Check, Sparkles, Mail, Phone, ExternalLink } from 'lucide-react';
import { portfolioItems } from '../data/portfolioData';

interface CapabilityDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CapabilityDeckModal: React.FC<CapabilityDeckModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const summary = `EFX Media — Studio Capability Overview
Founder & Creative Lead: Aaron
Focus: Bespoke Brand Identity, Editorial Design & Conversion Copywriting
Contact: hello@efxmedia.com | +234 (0) 800-EFX-MEDIA
Website: https://efxmedia.com

Core Services:
1. Brand Identity Systems & Scalable Vector Marks
2. High-Converting Web & Campaign Copywriting
3. Social Media Content Engines & Campaign Graphics
4. Editorial Posters, Event Collateral & Conference Assets

Selected Clients: Casfon Media Network, Ella Beauty Shop, Empowering Dreams Initiative, Peniel Assembly.`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const flagshipItems = portfolioItems.filter((i) => i.caseStudy).slice(0, 4);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-[var(--bg-surface)] text-[var(--text-primary)] rounded-2xl border border-[var(--border-subtle)] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar (hidden on print) */}
        <div className="p-4 border-b border-[var(--border-subtle)] flex items-center justify-between bg-[var(--bg-subtle)] print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Official Capability Deck
            </span>
            <span className="text-[11px] text-[var(--text-muted)] hidden sm:inline">
              • Printable PDF Ready
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-canvas)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5"
            >
              {copied ? <Check size={13} className="text-emerald-500" /> : <Sparkles size={13} />}
              <span>{copied ? 'Copied' : 'Copy Brief'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Printer size={13} />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-canvas)] transition-colors ml-1"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Document Content */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible" id="printable-deck">
          {/* Deck Header */}
          <div className="border-b border-[var(--border-subtle)] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-teal-800 dark:bg-teal-600 text-white flex items-center justify-center font-black text-sm">
                  E
                </div>
                <span className="text-2xl font-bold tracking-tight">
                  EFX <span className="font-script text-teal-700 dark:text-teal-400 font-normal">Media</span>
                </span>
              </div>
              <p className="text-xs uppercase tracking-widest text-teal-700 dark:text-teal-400 font-bold">
                Studio Capabilities & Agency Lookbook
              </p>
            </div>

            <div className="text-left sm:text-right text-xs text-[var(--text-secondary)] space-y-1">
              <div>Lead: <strong className="text-[var(--text-primary)]">Aaron</strong></div>
              <div>Turnaround: <strong>48h – 7 business days</strong></div>
              <div>Direct: <strong>hello@efxmedia.com</strong></div>
            </div>
          </div>

          {/* Studio Philosophy & Intro */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-2">
              Studio Vision
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-editorial italic text-base sm:text-lg text-[var(--text-primary)]">
              "We believe outstanding design captures attention, but deliberate copywriting inspires action. At EFX Media, we unite both disciplines under one roof so founders never have to bridge the gap between their aesthetic and their sales message."
            </p>
          </div>

          {/* Core Service Matrix */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
              Core Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-canvas)]">
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1">
                  1. Brand Identity & Visual Systems
                </h4>
                <ul className="text-xs text-[var(--text-secondary)] space-y-1 leading-relaxed">
                  <li>• Vector Logo Suite & Scalable Marks</li>
                  <li>• Color Harmonic Theory & Typography Hierarchy</li>
                  <li>• Comprehensive Brand Guidelines & Asset Kits</li>
                  <li>• Broadcast, Digital & Print Formats</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-canvas)]">
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1">
                  2. Conversion Copywriting
                </h4>
                <ul className="text-xs text-[var(--text-secondary)] space-y-1 leading-relaxed">
                  <li>• High-Impact Website & Landing Page Copy</li>
                  <li>• Value Propositions & Positioning Messaging</li>
                  <li>• Direct-Response Campaign Ad Hooks</li>
                  <li>• Editorial Storytelling & Founder Bios</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-canvas)]">
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1">
                  3. Campaign & Social Media Engines
                </h4>
                <ul className="text-xs text-[var(--text-secondary)] space-y-1 leading-relaxed">
                  <li>• Branded Multi-Slide Instagram Carousels</li>
                  <li>• Video Title Cards & Livestream Assets</li>
                  <li>• Event Announcements & Launch Sequences</li>
                  <li>• Coordinated Digital Advertising Sets</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-canvas)]">
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1">
                  4. Print & Event Collateral
                </h4>
                <ul className="text-xs text-[var(--text-secondary)] space-y-1 leading-relaxed">
                  <li>• High-Resolution CMYK Event Posters</li>
                  <li>• Conference Banners & Stage Backdrops</li>
                  <li>• Official Certificates & Executive Stationery</li>
                  <li>• Product Packaging & Retail Labels</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Flagship Case Studies Showcase */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
              Featured Case Studies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {flagshipItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] flex gap-3.5 items-start"
                >
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-16 h-20 rounded-lg object-cover shrink-0 border border-[var(--border-subtle)]"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold uppercase text-teal-700 dark:text-teal-400 block">
                      {item.client}
                    </span>
                    <h5 className="text-xs font-bold text-[var(--text-primary)] truncate">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-[var(--text-secondary)] line-clamp-2 mt-1 leading-relaxed">
                      {item.caseStudy?.strategy || item.description}
                    </p>
                    {item.caseStudy?.results && (
                      <div className="mt-2 text-[10px] font-semibold text-teal-800 dark:text-teal-300">
                        Result: {item.caseStudy.results}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonial Endorsement */}
          <div className="p-4 rounded-xl border border-teal-700/20 bg-teal-800/5 dark:bg-teal-400/5">
            <blockquote className="text-xs font-medium text-[var(--text-primary)] italic font-editorial leading-relaxed mb-2">
              "EFX Media transformed our brand! The visual identity and copywriting gave us an immediate lift in client inquiries. Aaron understood our core values faster than agencies charging triple the price."
            </blockquote>
            <div className="text-[11px] font-bold text-teal-800 dark:text-teal-400">
              — Femi Adeleke, Managing Director at Apex Lifestyle & Retail Group
            </div>
          </div>

          {/* Booking & Next Steps */}
          <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-secondary)] gap-4">
            <div>
              <span className="font-bold text-[var(--text-primary)]">Ready to initiate your creative brief?</span>
              <p className="text-[11px] text-[var(--text-muted)]">Available worldwide for remote collaborations and retainers.</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="mailto:hello@efxmedia.com"
                className="font-semibold text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-1"
              >
                <Mail size={12} />
                <span>hello@efxmedia.com</span>
              </a>
              <span>•</span>
              <a
                href="https://wa.me/2348003396334"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-1"
              >
                <Phone size={12} />
                <span>+234 (0) 800-EFX-MEDIA</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
