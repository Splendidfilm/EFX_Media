import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CeoSection } from './components/CeoSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { ScopeEstimator } from './components/ScopeEstimator';
import { WhyChooseSection } from './components/WhyChooseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { FullGalleryView } from './components/FullGalleryView';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { CapabilityDeckModal } from './components/CapabilityDeckModal';
import { PortfolioItem } from './types';
import { portfolioItems } from './data/portfolioData';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('efx_dark_mode');
    if (saved !== null) {
      return saved === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [activeView, setActiveView] = useState<'home' | 'gallery'>('home');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isDeckOpen, setIsDeckOpen] = useState(false);

  // Prefill state transferred from Scope Estimator to Contact Form
  const [contactPrefill, setContactPrefill] = useState({
    message: '',
    service: 'both'
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('efx_dark_mode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('efx_dark_mode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleTransferToContact = (summary: string, serviceType: string) => {
    setContactPrefill({
      message: summary,
      service: serviceType
    });

    // Smooth scroll down to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      {/* Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenDeck={() => setIsDeckOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {activeView === 'home' ? (
          <>
            <Hero />
            <CeoSection />
            <ServicesSection />
            <PortfolioGallery onSelectItem={(item) => setSelectedItem(item)} />
            <ScopeEstimator onTransferToContact={handleTransferToContact} />
            <WhyChooseSection />
            <TestimonialsSection />
            <ContactSection
              initialMessage={contactPrefill.message}
              initialService={contactPrefill.service}
            />
          </>
        ) : (
          <FullGalleryView
            onBack={() => setActiveView('home')}
            onSelectItem={(item) => setSelectedItem(item)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onOpenDeck={() => setIsDeckOpen(true)} />

      {/* Global Image Lightbox Modal with Case Studies */}
      <LightboxModal
        item={selectedItem}
        items={portfolioItems}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
      />

      {/* Floating 1-Click WhatsApp Support Widget */}
      <WhatsAppWidget />

      {/* Official Downloadable/Printable Capability Deck Modal */}
      <CapabilityDeckModal
        isOpen={isDeckOpen}
        onClose={() => setIsDeckOpen(false)}
      />
    </div>
  );
};

export default App;
