import React, { useState } from 'react';
import { Moon, Sun, Menu, X, Grid, FileText, Calculator } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  activeView: 'home' | 'gallery';
  setActiveView: (view: 'home' | 'gallery') => void;
  onOpenDeck: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  activeView,
  setActiveView,
  onOpenDeck,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-colors duration-200 backdrop-blur-md bg-[var(--bg-canvas)]/90 border-b border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => { setActiveView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
          id="navbar-brand-logo"
        >
          <div className="w-8 h-8 rounded-lg bg-teal-800 dark:bg-teal-600 text-white flex items-center justify-center font-black text-sm tracking-tight shadow-xs">
            E
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[var(--text-primary)] leading-none">
              EFX <span className="font-script text-teal-700 dark:text-teal-400 font-normal ml-0.5">Media</span>
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-widest text-[var(--text-muted)] mt-0.5">
              Design & Copy Studio
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-[var(--text-secondary)]">
          <a
            href="#about-ceo"
            onClick={(e) => { e.preventDefault(); handleNavClick('#about-ceo'); }}
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }}
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={(e) => { e.preventDefault(); handleNavClick('#portfolio'); }}
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#scope-calculator"
            onClick={(e) => { e.preventDefault(); handleNavClick('#scope-calculator'); }}
            className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1 text-teal-800 dark:text-teal-400 font-semibold"
          >
            <Calculator size={13} />
            <span>Scope Estimator</span>
          </a>
          <a
            href="#testimonials"
            onClick={(e) => { e.preventDefault(); handleNavClick('#testimonials'); }}
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            Reviews
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            Contact
          </a>

          <div className="h-4 w-px bg-[var(--border-subtle)]" />

          {/* Capability Deck Modal Trigger */}
          <button
            onClick={onOpenDeck}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-teal-700/30 text-teal-800 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 transition-colors"
            title="Download or print studio capability deck"
          >
            <FileText size={13} />
            <span>Studio Deck</span>
          </button>

          {/* Gallery View Switcher */}
          <button
            onClick={() => setActiveView(activeView === 'home' ? 'gallery' : 'home')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              activeView === 'gallery'
                ? 'bg-teal-700 text-white border-teal-700'
                : 'border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-teal-700/40'
            }`}
            id="toggle-full-gallery-btn"
          >
            <Grid size={13} />
            <span>{activeView === 'home' ? 'Full Archive' : 'Home'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-full border border-[var(--border-subtle)] hover:border-teal-700/40 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Toggle Theme"
            id="darkModeToggle"
          >
            {darkMode ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-teal-700" />}
          </button>
        </nav>

        {/* Mobile / Tablet Actions */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenDeck}
            className="p-2 rounded-lg border border-[var(--border-subtle)] text-teal-700 dark:text-teal-300 text-xs font-semibold flex items-center gap-1"
            title="Capability Deck"
          >
            <FileText size={15} />
            <span className="hidden sm:inline">Deck</span>
          </button>

          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)]"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-teal-700" />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-[var(--text-primary)]"
            aria-label="Toggle Menu"
            id="hamburger-menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 py-5 flex flex-col gap-3.5 shadow-lg">
          <a
            href="#about-ceo"
            onClick={(e) => { e.preventDefault(); handleNavClick('#about-ceo'); }}
            className="text-sm font-medium py-1 text-[var(--text-primary)]"
          >
            About Aaron & EFX
          </a>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }}
            className="text-sm font-medium py-1 text-[var(--text-primary)]"
          >
            Services & Expertise
          </a>
          <a
            href="#portfolio"
            onClick={(e) => { e.preventDefault(); handleNavClick('#portfolio'); }}
            className="text-sm font-medium py-1 text-[var(--text-primary)]"
          >
            Portfolio Work
          </a>
          <a
            href="#scope-calculator"
            onClick={(e) => { e.preventDefault(); handleNavClick('#scope-calculator'); }}
            className="text-sm font-semibold py-1 text-teal-700 dark:text-teal-400 flex items-center gap-2"
          >
            <Calculator size={14} />
            <span>Scope & Turnaround Estimator</span>
          </a>
          <a
            href="#testimonials"
            onClick={(e) => { e.preventDefault(); handleNavClick('#testimonials'); }}
            className="text-sm font-medium py-1 text-[var(--text-primary)]"
          >
            Client Reviews
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="text-sm font-medium py-1 text-[var(--text-primary)]"
          >
            Get In Touch
          </a>

          <div className="pt-2 border-t border-[var(--border-subtle)] flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenDeck();
              }}
              className="py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 border border-teal-700/40 text-teal-800 dark:text-teal-300"
            >
              <FileText size={14} />
              <span>Open Printable Capability Deck</span>
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setActiveView(activeView === 'home' ? 'gallery' : 'home');
              }}
              className="py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 bg-teal-800 dark:bg-teal-600 text-white"
            >
              <Grid size={14} />
              <span>{activeView === 'home' ? 'Explore Full Catalog Archive' : 'Back to Home'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
