import React, { useEffect } from 'react';
import { ProjectsHeroSection } from './ProjectsHeroSection';
import { ProjectsSection } from './ProjectsSection';
import { FaqSection } from './FaqSection';
import { JourneyCtaSection } from './JourneyCtaSection';
import { Footer } from './Footer';

interface ProjectsPageProps {
  onNavigate: (pathOrSection: string) => void;
  onOpenContact: () => void;
  heroImage?: string;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenContact,
  heroImage = '/hero-projet.webp',
}) => {
  useEffect(() => {
    // Scroll to top upon mounting projects page
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Update document title and meta description for SEO
    const originalTitle = document.title;
    document.title = "Projets & Réalisations — Nyksys | Architecture d'Intérieur";

    const metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Explorez les projets emblématiques du studio d'architecture d'intérieur Nyksys : résidences d'exception, penthouses et aménagements contemporains sur mesure."
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
      <ProjectsHeroSection imageSrc={heroImage} />

      {/* 2. Content overlay that smoothly slides over the sticky hero */}
      <main
        id="projects-main-content"
        className="relative z-20 bg-[#faf9f6] text-[#1a1918] rounded-none will-change-transform shadow-[0_-25px_60px_rgba(0,0,0,0.65)] border-t border-neutral-300/40"
      >
        {/* The 4 Featured Projects with direct project page navigation */}
        <div className="relative z-20 bg-[#faf9f6]">
          <ProjectsSection onNavigate={onNavigate} hideViewAllLink={true} />
        </div>

        {/* FAQ Section */}
        <div className="relative z-20">
          <FaqSection />
        </div>

        {/* Journey CTA Banner */}
        <div className="relative z-20 bg-[#faf9f6]">
          <JourneyCtaSection onOpenContact={onOpenContact} />
        </div>

        {/* Studio Footer */}
        <Footer
          onOpenContact={onOpenContact}
          onNavigate={(target) => onNavigate(target)}
        />
      </main>
    </div>
  );
};
