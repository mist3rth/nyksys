import React, { useEffect } from 'react';
import { ProjectHeroSection } from './ProjectHeroSection';
import { ProjectDetail, getProjectBySlug } from '../data/projectsData';
import { JourneyCtaSection } from './JourneyCtaSection';
import { Footer } from './Footer';

interface ProjectDetailPageProps {
  project: ProjectDetail;
  onNavigate: (pathOrSection: string) => void;
  onOpenContact: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onNavigate,
  onOpenContact,
}) => {
  const nextProject = getProjectBySlug(project.nextProjectSlug);

  useEffect(() => {
    // Scroll to top instantly on project mount or change
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Update document title and meta description
    const originalTitle = document.title;
    document.title = `${project.fullTitle} — Nyksys | Architecture d'Intérieur`;

    const metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        `${project.fullTitle} : ${project.infoText.slice(0, 150)}...`
      );
    }

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
    };
  }, [project]);

  return (
    <div className="relative min-h-screen bg-[#0d0c0b] text-neutral-900 selection:bg-neutral-800 selection:text-white font-sans">
      {/* 1. Sticky Hero with Scroll De-Zoom and Bottom-Left Title */}
      <ProjectHeroSection
        titleLine1={project.titleLine1}
        titleLine2={project.titleLine2}
        imageSrc={project.heroImage}
        altText={project.altText}
      />

      {/* 2. Main Content Card Overlay that slides over the Hero */}
      <main
        id="project-main-content"
        className="relative z-20 bg-[#faf9f6] text-[#1a1918] rounded-none shadow-[0_-25px_60px_rgba(0,0,0,0.65)] border-t border-neutral-300/40 will-change-transform"
      >
        {/* Project Info Section */}
        <section id="project-info" className="pt-20 sm:pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-12 lg:px-16 max-w-[1580px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Info Label & Narrative Paragraph */}
            <div className="lg:col-span-6 xl:col-span-6 pr-0 lg:pr-6">
              <span className="text-sm sm:text-base font-semibold text-neutral-900 block mb-6 tracking-tight">
                Informations
              </span>
              <p className="text-lg sm:text-xl md:text-2xl font-normal text-neutral-800 leading-[1.4] tracking-tight">
                {project.infoText}
              </p>
            </div>

            {/* Right Column: Key-Value Structured Metadata Grid */}
            <div className="lg:col-span-6 xl:col-span-6 pt-1 lg:pt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 sm:gap-y-14 gap-x-6 sm:gap-x-10">
                {/* Date / Année */}
                <div>
                  <span className="text-sm font-medium text-neutral-500 block mb-1.5 tracking-tight">
                    Année
                  </span>
                  <span className="text-lg sm:text-xl font-semibold text-neutral-900 block">
                    {project.date}
                  </span>
                </div>

                {/* Status / Statut */}
                <div>
                  <span className="text-sm font-medium text-neutral-500 block mb-1.5 tracking-tight">
                    Statut
                  </span>
                  <span className="text-lg sm:text-xl font-semibold text-neutral-900 block">
                    {project.status}
                  </span>
                </div>

                {/* Location / Localisation */}
                <div>
                  <span className="text-sm font-medium text-neutral-500 block mb-1.5 tracking-tight">
                    Localisation
                  </span>
                  <span className="text-lg sm:text-xl font-semibold text-neutral-900 block">
                    {project.location}
                  </span>
                </div>

                {/* Size / Surface */}
                <div>
                  <span className="text-sm font-medium text-neutral-500 block mb-1.5 tracking-tight">
                    Surface
                  </span>
                  <span className="text-lg sm:text-xl font-semibold text-neutral-900 block">
                    {project.size}
                  </span>
                </div>

                {/* Client */}
                <div>
                  <span className="text-sm font-medium text-neutral-500 block mb-1.5 tracking-tight">
                    Client
                  </span>
                  <span className="text-lg sm:text-xl font-semibold text-neutral-900 block">
                    {project.client}
                  </span>
                </div>

                {/* Sector / Secteur */}
                <div>
                  <span className="text-sm font-medium text-neutral-500 block mb-1.5 tracking-tight">
                    Secteur
                  </span>
                  <span className="text-lg sm:text-xl font-semibold text-neutral-900 block">
                    {project.sector}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Top Large Showcase Image */}
        <section className="px-6 md:px-12 lg:px-16 max-w-[1580px] mx-auto mb-10 md:mb-16">
          <div className="w-full aspect-[16/9] md:aspect-[21/10] overflow-hidden bg-[#e8e6e0]">
            <img
              src={project.highlightImage}
              alt={`${project.fullTitle} - Ambiance principale`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* 4. Two-Column Gallery Pair 1 */}
        <section className="px-6 md:px-12 lg:px-16 max-w-[1580px] mx-auto mb-10 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="aspect-square sm:aspect-[4/5] w-full overflow-hidden bg-[#e8e6e0]">
              <img
                src={project.galleryPair1.left}
                alt={project.galleryPair1.altLeft || `${project.fullTitle} - Vue 1`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div className="aspect-square sm:aspect-[4/5] w-full overflow-hidden bg-[#e8e6e0]">
              <img
                src={project.galleryPair1.right}
                alt={project.galleryPair1.altRight || `${project.fullTitle} - Vue 2`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* 5. Two-Column Gallery Pair 2 */}
        <section className="px-6 md:px-12 lg:px-16 max-w-[1580px] mx-auto mb-24 sm:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="aspect-square sm:aspect-[4/5] w-full overflow-hidden bg-[#e8e6e0]">
              <img
                src={project.galleryPair2.left}
                alt={project.galleryPair2.altLeft || `${project.fullTitle} - Détail architectural`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div className="aspect-square sm:aspect-[4/5] w-full overflow-hidden bg-[#e8e6e0]">
              <img
                src={project.galleryPair2.right}
                alt={project.galleryPair2.altRight || `${project.fullTitle} - Perspective spatiale`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* 6. Other Projects Section (Renvoi vers le projet suivant) */}
        {nextProject && (
          <section id="other-projects" className="py-20 sm:py-28 px-6 md:px-12 lg:px-16 max-w-[1580px] mx-auto border-t border-neutral-300/60">
            {/* Header: Autres Projets */}
            <div className="mb-10 sm:mb-14">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.05]">
                Autres
                <br />
                Projets
              </h2>
            </div>

            {/* Next Project Big Banner Card */}
            <article
              id={`next-project-${nextProject.slug}`}
              onClick={() => {
                onNavigate(`/projects/${nextProject.slug}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Full-width image container */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#e8e6e0]">
                <img
                  src={nextProject.heroImage}
                  alt={nextProject.altText}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
              </div>

              {/* Bottom details: Project Name on left + VOIR LE PROJET on right */}
              <div className="mt-6 sm:mt-8 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-neutral-900 tracking-tight transition-colors group-hover:text-neutral-600">
                    {nextProject.fullTitle}
                  </h3>
                </div>

                <div className="flex-shrink-0">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-neutral-900 group-hover:text-neutral-500 transition-colors whitespace-nowrap inline-block">
                    VOIR LE PROJET
                  </span>
                </div>
              </div>
            </article>
          </section>
        )}

        {/* 7. Journey CTA & Footer */}
        <JourneyCtaSection onOpenContact={onOpenContact} />
        <Footer onNavigate={onNavigate} onOpenContact={onOpenContact} />
      </main>
    </div>
  );
};
