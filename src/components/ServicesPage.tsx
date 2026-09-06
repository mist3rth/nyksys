import React, { useEffect } from 'react';
import { ServicesHeroSection } from './ServicesHeroSection';
import { ServicesStackSection } from './ServicesStackSection';
import { JourneyCtaSection } from './JourneyCtaSection';
import { Footer } from './Footer';

interface ServicesPageProps {
  onNavigate: (pathOrSection: string) => void;
  onOpenContact: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenContact,
}) => {
  useEffect(() => {
    // Scroll to top upon mounting services page
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Update document title and meta description for SEO
    const originalTitle = document.title;
    document.title = "Services & Savoir-Faire — Nyksys | Architecture d'Intérieur";

    const metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Découvrez l'ensemble de nos services d'architecture d'intérieur : conception sur-mesure, space planning, ébénisterie d'art, éclairage architectural et maîtrise d'œuvre."
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
      <ServicesHeroSection imageSrc="/services-hero.webp?v=2" />

      {/* 2. Content overlay that slides over the hero */}
      <main
        id="services-main-content"
        className="relative z-20 bg-[#faf9f6] text-[#1a1918] rounded-none will-change-transform"
      >
        {/* 6 Stacking Cards Section */}
        <ServicesStackSection />

        {/* Journey CTA banner */}
        <JourneyCtaSection onOpenContact={onOpenContact} />

        {/* Footer */}
        <Footer
          onOpenContact={onOpenContact}
          onNavigate={(target) => onNavigate(target)}
        />
      </main>
    </div>
  );
};
