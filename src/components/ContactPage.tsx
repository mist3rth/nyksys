import React, { useEffect } from 'react';
import { ContactHeroSection } from './ContactHeroSection';
import { ContactFormSection } from './ContactFormSection';
import { FaqSection } from './FaqSection';
import { Footer } from './Footer';

interface ContactPageProps {
  onNavigateHomeSection: (sectionId: string) => void;
  onOpenContactModal?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateHomeSection,
}) => {
  useEffect(() => {
    // Scroll to top upon mounting contact page
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Update document title and meta description for search engine indexation
    const originalTitle = document.title;
    document.title = "Contact — Nyksys | Studio d'Architecture d'Intérieur";

    const metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Entrez en contact avec le studio d'architecture d'intérieur Nyksys (Place Vendôme, Paris). Échangez avec nos architectes pour concevoir vos espaces sur-mesure."
      );
    }

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0d0c0b] text-neutral-900 selection:bg-neutral-800 selection:text-white font-sans">
      {/* 1. Hero with full-width image and scroll de-zoom */}
      <ContactHeroSection imageSrc="/contact-hero.webp" />

      {/* 2. Content overlay that slides over the hero */}
      <main
        id="contact-main-content"
        className="relative z-20 bg-[#faf9f6] text-[#1a1918] rounded-none will-change-transform shadow-[0_-25px_60px_rgba(0,0,0,0.65)] border-t border-neutral-300/40"
      >
        {/* Contact Coordinates & Minimalist Underline Form */}
        <ContactFormSection />

        {/* FAQ Section */}
        <div className="relative z-20">
          <FaqSection />
        </div>

        {/* Footer (Full Width NYKSYS® & Made by T.THIESSON) */}
        <Footer
          onOpenContact={() => {
            const el = document.getElementById('contact-details-form');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onNavigate={(sectionId) => onNavigateHomeSection(sectionId)}
        />
      </main>
    </div>
  );
};
