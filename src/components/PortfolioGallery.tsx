import React, { useState, useMemo } from 'react';
import { PortfolioCategory, PortfolioItem } from '../types';
import { portfolioItems } from '../data/portfolioData';
import { Eye, ArrowUpRight, Search, X, BookOpen, Tag } from 'lucide-react';

interface PortfolioGalleryProps {
  onSelectItem: (item: PortfolioItem) => void;
}

const CATEGORIES: { label: string; value: PortfolioCategory }[] = [
  { label: 'All Works', value: 'all' },
  { label: 'Logos & Identity', value: 'logos' },
  { label: 'Social Content', value: 'social-media' },
  { label: 'Brand Suites', value: 'branding' },
  { label: 'Posters & Flyers', value: 'posters' },
];

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => {
      // Category filter
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;

      // Keyword search across title, client, description, and tags
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

  return (
    <section id="portfolio" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header & Description */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs uppercase font-bold tracking-widest text-teal-700 dark:text-teal-400 block mb-2">
          Selected Creative Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
          Our Portfolio Showcase
        </h2>
        <p className="text-base text-[var(--text-secondary)] leading-relaxed">
          Explore a curated catalog of custom brand identities, editorial posters, and digital campaigns crafted for diverse clients.
        </p>
      </div>

      {/* Search & Category Filter Control Bar */}
      <div className="space-y-4 mb-10 max-w-3xl mx-auto">
        {/* Instant Search Bar */}
        <div className="relative">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search portfolio by brand, keyword, industry, or tag (e.g. TV, beauty, event, conference)..."
            className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] focus:outline-none focus:border-teal-700 shadow-xs transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Clear Search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Category Pills & Live Count */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex flex-wrap items-center gap-1.5">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`mature-pill ${isActive ? 'active' : ''}`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <span className="text-xs text-[var(--text-muted)] font-medium">
            Showing {filteredItems.length} of {portfolioItems.length} pieces
          </span>
        </div>
      </div>

      {/* No Results Message */}
      {filteredItems.length === 0 && (
        <div className="text-center py-16 mature-card max-w-md mx-auto">
          <Tag size={28} className="text-teal-700 dark:text-teal-400 mx-auto mb-3 opacity-60" />
          <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">
            No matching projects found
          </h3>
          <p className="text-xs text-[var(--text-secondary)] mb-4">
            Try searching for another keyword or reset the category filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-teal-800 text-white hover:bg-teal-900 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectItem(item)}
            className="mature-card group cursor-pointer overflow-hidden flex flex-col"
          >
            {/* Image Preview */}
            <div className="relative aspect-4/5 w-full overflow-hidden bg-[var(--bg-subtle)]">
              <img
                src={item.imageSrc}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-teal-950 font-semibold text-xs shadow-md">
                  <Eye size={13} />
                  <span>Inspect Piece</span>
                </span>
              </div>

              {/* Case Study Indicator Tag */}
              {item.caseStudy && (
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs border border-teal-500/30 text-teal-300 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <BookOpen size={10} />
                  <span>Case Study</span>
                </div>
              )}
            </div>

            {/* Content Details */}
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                    {item.client || item.category}
                  </span>
                  <ArrowUpRight size={14} className="text-[var(--text-muted)] group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-snug line-clamp-1">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs text-[var(--text-secondary)] mt-2 line-clamp-2 leading-relaxed">
                {item.description}
              </p>

              {/* Tags preview */}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3 pt-2.5 border-t border-[var(--border-subtle)]">
                  {item.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium text-[var(--text-muted)] bg-[var(--bg-subtle)] px-1.5 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                  {item.tags.length > 2 && (
                    <span className="text-[10px] text-[var(--text-muted)] self-center">
                      +{item.tags.length - 2}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
