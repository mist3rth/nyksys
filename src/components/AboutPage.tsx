import React, { useEffect } from 'react';
import { AboutHeroSection } from './AboutHeroSection';
import { AboutStatsSection } from './AboutStatsSection';
import { AboutCraftSection } from './AboutCraftSection';
import { AboutCollaborationSection } from './AboutCollaborationSection';
import { AboutTeamSection } from './AboutTeamSection';
import { JourneyCtaSection } from './JourneyCtaSection';
import { Footer } from './Footer';

interface AboutPageProps {
  onNavigate: (pathOrSection: string) => void;
  onOpenContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenContact,
}) => {
  useEffect(() => {
    // Scroll to top upon mounting about page
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Update document title and meta description for SEO
    const originalTitle = document.title;
    document.title = "À Propos du Studio — Nyksys | Architecture d'Intérieur";

    const metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Découvrez l'histoire et la philosophie du studio d'architecture d'intérieur Nyksys. Élégance intemporelle, maîtrise des volumes et exigence artisanale."
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
      <AboutHeroSection imageSrc="/about-hero.webp?v=1" />

      {/* 2. Content overlay that slides over the hero */}
      <main
        id="about-main-content"
        className="relative z-20 bg-[#faf9f6] text-[#1a1918] rounded-none will-change-transform"
      >
        {/* Editorial manifesto & 4 Key statistics */}
        <AboutStatsSection />

        {/* Editorial statement block with dual architectural imagery */}
        <AboutCraftSection />

        {/* Editorial collaboration statement with portrait accent and tall panoramic imagery */}
        <AboutCollaborationSection />

        {/* About Us / The Minds Behind Nyksys team section */}
        <AboutTeamSection />

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
