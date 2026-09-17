import React, { useState, useEffect, useMemo } from 'react';
import { portfolioItems } from '../data/portfolioData';
import { PortfolioItem, PortfolioCategory } from '../types';
import { ArrowLeft, Play, Pause, Eye, Filter, Search, X, BookOpen } from 'lucide-react';

interface FullGalleryViewProps {
  onBack: () => void;
  onSelectItem: (item: PortfolioItem) => void;
}

export const FullGalleryView: React.FC<FullGalleryViewProps> = ({
  onBack,
  onSelectItem
}) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPlayingSlideshow, setIsPlayingSlideshow] = useState(false);

  useEffect(() => {
    if (!isPlayingSlideshow) return;
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % portfolioItems.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlayingSlideshow]);

  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesQuery =
        item.title.toLowerCase().includes(query) ||
        (item.client && item.client.toLowerCase().includes(query)) ||
        (item.description && item.description.toLowerCase().includes(query)) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(query)));

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const currentSlide = portfolioItems[slideIndex];

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border-subtle)]">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-subtle)] text-xs font-semibold text-[var(--text-primary)] transition-colors"
          id="return"
        >
          <ArrowLeft size={15} />
          <span>Back to Home Overview</span>
        </button>

        <div className="text-right">
          <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
            Complete Archive
          </span>
          <h1 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
            Design & Identity Catalog
          </h1>
        </div>
      </div>

      {/* Featured Slide Showcase */}
      <div className="mature-card overflow-hidden mb-12 relative h-[320px] sm:h-[440px] flex items-end group">
        <img
          src={currentSlide.imageSrc}
          alt={currentSlide.title}
          className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 filter brightness-90 group-hover:scale-[1.02]"
          id="slide"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

        <div className="relative z-10 p-6 sm:p-8 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-teal-300 bg-teal-950/80 px-2.5 py-1 rounded border border-teal-500/30 mb-2 inline-block">
              {currentSlide.category}
            </span>
            <h2 className="text-2xl font-bold text-white mb-1">
              {currentSlide.title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2">
              {currentSlide.description}
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsPlayingSlideshow(!isPlayingSlideshow)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/20 hover:bg-white/30 text-white backdrop-blur-xs transition-colors flex items-center gap-1.5"
            >
              {isPlayingSlideshow ? <Pause size={13} /> : <Play size={13} />}
              <span>{isPlayingSlideshow ? 'Pause Slideshow' : 'Autoplay'}</span>
            </button>
            <button
              onClick={() => onSelectItem(currentSlide)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white text-teal-950 hover:bg-neutral-100 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Eye size={13} />
              <span>Inspect</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Controls & Search */}
      <div className="space-y-4 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Instant Search Bar */}
          <div className="relative max-w-md w-full">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search catalog by title, client, or tag..."
              className="w-full pl-10 pr-9 py-2 text-xs rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] focus:outline-none focus:border-teal-700 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                aria-label="Clear Search"
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {(['all', 'logos', 'social-media', 'branding', 'posters'] as PortfolioCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`mature-pill text-xs py-1.5 px-3.5 ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat === 'all' ? 'All Works' : cat.replace('-', ' ').toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-secondary)]">
          <Filter size={14} className="text-teal-700 dark:text-teal-400" />
          <span>Showing {filteredItems.length} curated works</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectItem(item)}
            className="mature-card group cursor-pointer overflow-hidden flex flex-col"
          >
            <div className="relative aspect-4/5 w-full overflow-hidden bg-[var(--bg-subtle)]">
              <img
                src={item.imageSrc}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-3 py-1 rounded-full bg-white text-teal-950 font-semibold text-xs flex items-center gap-1">
                  <Eye size={12} />
                  <span>Inspect</span>
                </span>
              </div>

              {item.caseStudy && (
                <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-xs border border-teal-500/30 text-teal-300 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <BookOpen size={9} />
                  <span>Case Study</span>
                </div>
              )}
            </div>

            <div className="p-3.5 flex flex-col justify-between flex-1">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 block mb-1">
                  {item.client || item.category}
                </span>
                <h3 className="text-xs font-semibold text-[var(--text-primary)] line-clamp-1">
                  {item.title}
                </h3>
              </div>

              {item.tags && (
                <div className="flex flex-wrap gap-1 mt-2.5 pt-2 border-t border-[var(--border-subtle)]">
                  {item.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] text-[var(--text-muted)] bg-[var(--bg-subtle)] px-1.5 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
