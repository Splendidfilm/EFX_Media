import React, { useEffect, useState } from 'react';
import { PortfolioItem } from '../types';
import { X, ChevronLeft, ChevronRight, ExternalLink, BookOpen, Image as ImageIcon, CheckCircle2, MessageCircle } from 'lucide-react';

interface LightboxModalProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  onClose: () => void;
  onSelect: (item: PortfolioItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect
}) => {
  const [activeTab, setActiveTab] = useState<'artwork' | 'case-study'>('artwork');

  useEffect(() => {
    // Reset to artwork view when item changes
    setActiveTab('artwork');
  }, [item?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && item) {
        const idx = items.findIndex((i) => i.id === item.id);
        onSelect(items[(idx + 1) % items.length]);
      } else if (e.key === 'ArrowLeft' && item) {
        const idx = items.findIndex((i) => i.id === item.id);
        onSelect(items[(idx - 1 + items.length) % items.length]);
      }
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, items, onClose, onSelect]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(items[(currentIndex - 1 + items.length) % items.length]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(items[(currentIndex + 1) % items.length]);
  };

  const handleDiscussProject = () => {
    const encoded = encodeURIComponent(`Hi Aaron, I was reviewing the case study for "${item.title}" on EFX Media and would like to discuss a similar project.`);
    window.open(`https://wa.me/2348003396334?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const caseStudy = item.caseStudy;

  return (
    <div
      className="mature-lightbox"
      onClick={onClose}
      id="popupOverlay"
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col md:flex-row items-stretch rounded-2xl overflow-hidden border border-white/10 bg-[#161d1e] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 hover:bg-white text-white hover:text-black transition-colors backdrop-blur-xs shadow-md"
          aria-label="Close Lightbox"
          id="closePopup"
        >
          <X size={18} />
        </button>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/60 hover:bg-white text-white hover:text-black transition-colors backdrop-blur-xs shadow-md"
          aria-label="Previous Item"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/60 hover:bg-white text-white hover:text-black transition-colors backdrop-blur-xs shadow-md"
          aria-label="Next Item"
        >
          <ChevronRight size={20} />
        </button>

        {/* Left Side: Artwork Visual Frame */}
        <div className="w-full md:w-3/5 min-h-[340px] md:min-h-[560px] flex items-center justify-center p-6 bg-black/50 relative">
          <img
            src={item.imageSrc}
            alt={item.title}
            className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
            id="popupImage"
          />

          {/* Quick indicator badge */}
          {caseStudy && (
            <div className="absolute bottom-4 left-6 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-xs border border-teal-500/30 text-teal-300 text-[11px] font-semibold">
              <BookOpen size={12} />
              <span>Full Case Study Available</span>
            </div>
          )}
        </div>

        {/* Right Side: Meta / Case Study Content Panel */}
        <div className="w-full md:w-2/5 p-6 sm:p-7 flex flex-col justify-between text-left text-white bg-[#1a2324] overflow-y-auto max-h-[50vh] md:max-h-[85vh]">
          <div>
            {/* Top Navigation Bar: Category & Tabs */}
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800/40">
                  {item.category}
                </span>
                {caseStudy && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-700/40">
                    Flagship
                  </span>
                )}
              </div>

              <span className="text-xs text-neutral-400 font-medium">
                {currentIndex + 1} of {items.length}
              </span>
            </div>

            {/* View Mode Tabs (if case study exists) */}
            {caseStudy && (
              <div className="grid grid-cols-2 gap-1.5 p-1 rounded-lg bg-black/40 border border-white/10 mb-5">
                <button
                  onClick={() => setActiveTab('artwork')}
                  className={`py-1.5 px-2.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    activeTab === 'artwork'
                      ? 'bg-teal-700 text-white shadow-xs'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <ImageIcon size={13} />
                  <span>Artwork Overview</span>
                </button>
                <button
                  onClick={() => setActiveTab('case-study')}
                  className={`py-1.5 px-2.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    activeTab === 'case-study'
                      ? 'bg-teal-700 text-white shadow-xs'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <BookOpen size={13} />
                  <span>Case Study</span>
                </button>
              </div>
            )}

            {/* Title & Client */}
            <h3 className="text-xl font-bold mb-1 text-white leading-snug">
              {item.title}
            </h3>

            {item.client && (
              <p className="text-xs font-semibold text-neutral-300 mb-4">
                Client / Brand: <span className="text-teal-400">{item.client}</span>
              </p>
            )}

            {/* TAB 1: Artwork Overview Mode */}
            {activeTab === 'artwork' && (
              <div className="space-y-4 text-xs text-neutral-300 leading-relaxed font-normal">
                <p>
                  {item.description || 'Custom creative design produced by EFX Media.'}
                </p>

                {item.tags && item.tags.length > 0 && (
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                      Tags & Classification
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[11px] bg-white/5 border border-white/10 text-neutral-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {caseStudy && (
                  <div className="p-3.5 rounded-xl bg-teal-950/40 border border-teal-800/40 mt-3">
                    <span className="text-[11px] font-bold text-teal-300 block mb-1">
                      Key Client Result:
                    </span>
                    <p className="text-xs text-neutral-200">
                      {caseStudy.results}
                    </p>
                    <button
                      onClick={() => setActiveTab('case-study')}
                      className="mt-2 text-xs font-bold text-teal-400 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read Complete Case Study</span>
                      <ChevronRight size={12} />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: Case Study Breakdown Mode */}
            {activeTab === 'case-study' && caseStudy && (
              <div className="space-y-4 text-xs text-neutral-300 leading-relaxed font-normal animate-in fade-in duration-200">
                {/* Challenge */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    The Challenge
                  </span>
                  <p className="text-neutral-200 leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>

                {/* Strategy */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 block mb-1">
                    Creative Strategy & Rationale
                  </span>
                  <p className="text-neutral-200 leading-relaxed">
                    {caseStudy.strategy}
                  </p>
                </div>

                {/* Swatches & Fonts */}
                {(caseStudy.palette || caseStudy.fontPairing) && (
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 space-y-2">
                    {caseStudy.palette && (
                      <div>
                        <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">
                          Harmonic Palette
                        </span>
                        <div className="flex items-center gap-2">
                          {caseStudy.palette.map((color, idx) => (
                            <div key={idx} className="flex items-center gap-1">
                              <span
                                className="w-5 h-5 rounded-md border border-white/20 shadow-xs"
                                style={{ backgroundColor: color }}
                                title={color}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {caseStudy.fontPairing && (
                      <div className="pt-1">
                        <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                          Typography Pairing:
                        </span>
                        <span className="text-neutral-200 font-semibold text-[11px]">
                          {caseStudy.fontPairing}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Deliverables */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                    Delivered Assets
                  </span>
                  <ul className="space-y-1 text-neutral-300">
                    {caseStudy.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 size={12} className="text-teal-400 shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results & Outcome */}
                <div className="p-3 rounded-lg bg-teal-900/30 border border-teal-500/30">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 block mb-1">
                    Outcome & Impact
                  </span>
                  <p className="text-white font-medium">
                    {caseStudy.results}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Action Strip */}
          <div className="pt-5 border-t border-white/10 mt-6 space-y-2.5">
            <button
              onClick={handleDiscussProject}
              className="w-full py-2.5 px-3.5 rounded-lg font-bold text-xs bg-teal-700 hover:bg-teal-600 text-white transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageCircle size={13} />
              <span>Discuss Similar Project with Aaron</span>
            </button>

            <div className="flex items-center justify-between text-xs text-neutral-400 pt-1">
              <span>EFX Media Studio</span>
              <a
                href={item.imageSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-300 hover:text-teal-200"
              >
                <span>Full Source</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
