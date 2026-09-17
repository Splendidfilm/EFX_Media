import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Mail, Phone, Clock, MessageCircle } from 'lucide-react';

interface ContactSectionProps {
  initialMessage?: string;
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialMessage = '',
  initialService = 'both'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService,
    message: initialMessage
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({
        ...prev,
        message: initialMessage,
        service: initialService || prev.service
      }));
    }
  }, [initialMessage, initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', service: 'both', message: '' });
    }, 500);
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent("Hi Aaron, I'm reaching out from EFX Media to discuss a new creative brief.");
    window.open(`https://wa.me/2348003396334?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs uppercase font-bold tracking-widest text-teal-700 dark:text-teal-400 block mb-2">
          Direct Inquiries
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
          Let's Start a Conversation
        </h2>
        <p className="text-base text-[var(--text-secondary)] leading-relaxed">
          Whether you have a complete project brief ready or want to discuss an exploratory idea, our team is ready to listen and assist.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Info Sidebar */}
        <div className="md:col-span-1 flex flex-col justify-between mature-card p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">
                EFX Media Studio
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Dedicated to bespoke graphic art, identity systems, and conversion-driven copywriting.
              </p>
            </div>

            <div className="space-y-4 text-xs text-[var(--text-secondary)]">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[var(--text-primary)]">Email</div>
                  <span>hello@efxmedia.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={16} className="text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[var(--text-primary)]">Telephone / WhatsApp</div>
                  <span>+234 (0) 800-EFX-MEDIA</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={16} className="text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[var(--text-primary)]">Turnaround Time</div>
                  <span>Typically responds within 24 business hours</span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleOpenWhatsApp}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold border border-emerald-600/30 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={14} />
                <span>Message Aaron on WhatsApp</span>
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] mt-6">
            "Your vision, articulated with precision."
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 mature-card p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-teal-800/10 dark:bg-teal-400/10 text-teal-800 dark:text-teal-300 flex items-center justify-center mb-4">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                Thank You for Reaching Out
              </h3>
              <p className="text-sm text-[var(--text-secondary)] max-w-sm mb-6 leading-relaxed">
                Your message has been delivered directly to Aaron and the creative team. We will review your requirements and respond shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 rounded-lg text-xs font-semibold bg-[var(--bg-subtle)] hover:bg-[var(--border-subtle)] text-[var(--text-primary)] transition-all border border-[var(--border-subtle)]"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" id="contactForm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
                    Your Name <span className="text-teal-700 dark:text-teal-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-teal-700/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
                    Email Address <span className="text-teal-700 dark:text-teal-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. eleanor@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-teal-700/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
                  How Can We Help?
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-teal-700/60 transition-colors"
                >
                  <option value="copywriting">Copywriting Services (Website, Campaign, Messaging)</option>
                  <option value="design">Visual Identity & Graphic Design</option>
                  <option value="both">Comprehensive Creative Suite (Both Copy & Design)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
                  Project Overview <span className="text-teal-700 dark:text-teal-400">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us a little about your brand, your timeline, and what you're aiming to achieve..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-teal-700/60 transition-colors resize-y font-mono text-xs sm:text-xs"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-5 rounded-lg font-semibold text-sm bg-teal-800 hover:bg-teal-900 dark:bg-teal-600 dark:hover:bg-teal-500 text-white transition-all shadow-xs flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span>Delivering Note...</span>
                ) : (
                  <>
                    <Send size={14} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
