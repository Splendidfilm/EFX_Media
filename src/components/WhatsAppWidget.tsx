import React, { useState } from 'react';
import { MessageCircle, X, Send, Clock, Sparkles } from 'lucide-react';

const STUDIO_PHONE = '2348003396334'; // International format for studio inquiries

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');

  const quickPrompts = [
    'Hi Aaron, I would like to discuss a custom Brand & Logo Identity.',
    'Hello EFX Media, I need high-converting Copywriting for my business.',
    'Hi Aaron, can we discuss an upcoming Campaign & Poster design?',
    'Hi! I need a fast quote for a complete creative package (Copy + Design).'
  ];

  const handleSend = (text: string) => {
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${STUDIO_PHONE}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end" id="whatsapp-widget">
      {/* Expanded Chat Card */}
      {isOpen && (
        <div className="mb-3 w-[340px] sm:w-[360px] rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-teal-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/images/designs/Aaron.jpg"
                  alt="Aaron Founder"
                  className="w-10 h-10 rounded-full object-cover border-2 border-teal-400"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-teal-900 rounded-full"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Aaron</h4>
                <p className="text-[11px] text-teal-200 flex items-center gap-1">
                  <Clock size={10} />
                  <span>Founder & Lead • Online</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-teal-200 hover:text-white hover:bg-teal-800 transition-colors"
              aria-label="Close Chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[var(--bg-canvas)] space-y-3 max-h-[360px] overflow-y-auto">
            <div className="bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] leading-relaxed shadow-xs">
              <p className="font-semibold text-[var(--text-primary)] mb-1 flex items-center gap-1.5">
                <Sparkles size={12} className="text-teal-700 dark:text-teal-400" />
                <span>Welcome to EFX Media</span>
              </p>
              Hi there! How can we assist your brand today? Select a quick topic or type your inquiry below to connect with me directly on WhatsApp.
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                Quick Project Inquiries:
              </p>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="w-full text-left text-xs p-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-teal-700 hover:bg-teal-50/50 dark:hover:bg-teal-950/30 text-[var(--text-primary)] transition-all flex items-center justify-between group"
                >
                  <span className="line-clamp-1">{prompt}</span>
                  <Send size={11} className="text-[var(--text-muted)] group-hover:text-teal-700 dark:group-hover:text-teal-400 shrink-0 ml-2" />
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (customMessage.trim()) {
                  handleSend(customMessage.trim());
                  setCustomMessage('');
                }
              }}
              className="pt-2 flex items-center gap-2"
            >
              <input
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Type your brief or question..."
                className="flex-1 px-3 py-2 text-xs rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] focus:outline-none focus:border-teal-700"
              />
              <button
                type="submit"
                className="p-2 rounded-lg bg-teal-800 hover:bg-teal-900 text-white transition-colors shrink-0"
                aria-label="Send via WhatsApp"
              >
                <Send size={13} />
              </button>
            </form>
          </div>

          {/* Footer note */}
          <div className="px-4 py-2 bg-[var(--bg-subtle)] border-t border-[var(--border-subtle)] text-[10px] text-center text-[var(--text-muted)]">
            Instant redirection to WhatsApp chat
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-teal-800 hover:bg-teal-900 text-white shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        aria-label="Chat with Aaron on WhatsApp"
      >
        <div className="relative">
          <MessageCircle size={20} className="text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-teal-800 animate-pulse"></span>
        </div>
        <span className="text-xs font-bold tracking-tight pr-0.5">
          {isOpen ? 'Close Chat' : 'Chat on WhatsApp'}
        </span>
      </button>
    </div>
  );
};
