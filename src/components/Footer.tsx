import React from 'react';
import { Phone, Mail, ArrowUp, FileText, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenDeck?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeck }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)] transition-colors duration-200" id="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-800 dark:bg-teal-600 text-white flex items-center justify-center font-black text-xs">
                E
              </div>
              <span className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
                EFX <span className="font-script text-teal-700 dark:text-teal-400 font-normal">Media</span>
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm font-normal">
              A boutique creative studio dedicated to deliberate visual identity, editorial clarity, and persuasive conversion copywriting.
            </p>
            {onOpenDeck && (
              <div className="pt-2">
                <button
                  onClick={onOpenDeck}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-teal-700/30 text-teal-800 dark:text-teal-300 text-xs font-semibold hover:bg-[var(--bg-surface)] transition-colors"
                >
                  <FileText size={13} />
                  <span>Download / Print Studio Capability Deck</span>
                </button>
              </div>
            )}
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              <li><a href="#about-ceo" className="hover:text-[var(--text-primary)] transition-colors">About Aaron & EFX</a></li>
              <li><a href="#services" className="hover:text-[var(--text-primary)] transition-colors">Creative Services</a></li>
              <li><a href="#portfolio" className="hover:text-[var(--text-primary)] transition-colors">Selected Portfolio</a></li>
              <li><a href="#scope-calculator" className="hover:text-[var(--text-primary)] transition-colors font-semibold text-teal-700 dark:text-teal-400">Scope & Turnaround Estimator</a></li>
              <li><a href="#why-choose-us" className="hover:text-[var(--text-primary)] transition-colors">Why Work With Us</a></li>
              <li><a href="#testimonials" className="hover:text-[var(--text-primary)] transition-colors">Client Reviews</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-3">
              Connect Directly
            </h4>
            <div className="flex items-center gap-2 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-canvas)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center p-2 transition-colors"
                aria-label="Facebook"
              >
                <img src="/images/logo/icon-facebook.svg" alt="Facebook" className="w-full h-full opacity-70 hover:opacity-100" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-canvas)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center p-2 transition-colors"
                aria-label="Instagram"
              >
                <img src="/images/logo/icon-instagram.svg" alt="Instagram" className="w-full h-full opacity-70 hover:opacity-100" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-canvas)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center p-2 transition-colors"
                aria-label="LinkedIn"
              >
                <img src="/images/logo/icons8-linkedin-ios-17-filled/icons8-linkedin-16.svg" alt="LinkedIn" className="w-full h-full opacity-70 hover:opacity-100" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-canvas)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center p-2 transition-colors"
                aria-label="Twitter / X"
              >
                <img src="/images/logo/icon-twitter.svg" alt="Twitter" className="w-full h-full opacity-70 hover:opacity-100" />
              </a>
            </div>

            <a
              href="https://wa.me/2348003396334"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
            >
              <MessageCircle size={13} />
              <span>WhatsApp: +234 800-EFX-MEDIA</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-4">
          <p>
            &copy; {new Date().getFullYear()} EFX Media. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
