import React, { useState } from 'react';
import { MapPin, X } from 'lucide-react';
import FoldText from './FoldText';

interface FeaturedProjectBlock {
  id: string;
  titleLine1: string;
  titleLine2: string;
  imageSrc: string;
  altText: string;
  category: string;
  location: string;
  year: string;
  area: string;
  description: string;
  materials: string[];
  galleryImages: string[];
}

const FOUR_FEATURED_PROJECTS: FeaturedProjectBlock[] = [
  {
    id: 'oakroom-residence',
    titleLine1: 'Oakroom',
    titleLine2: 'Residence',
    imageSrc: '/oakroom-residence.webp',
    altText: 'Oakroom Residence - Salon panoramique au crépuscule',
    category: 'Architecture Résidentielle',
    location: 'Miami Beach, Floride',
    year: '2025',
    area: '520 m²',
    description: 'Une résidence ouverte sur l’horizon marin, privilégiant le bois chaud, des assises profondes et un éclairage d’ambiance crépusculaire.',
    materials: ['Bois de Noyer Massif', 'Bronze Doré', 'Laine Bouclée', 'Travertin Navona'],
    galleryImages: [
      '/oakroom-residence.webp',
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85'
    ]
  },
  {
    id: 'ellhmart-penthouse',
    titleLine1: 'Ellhmart',
    titleLine2: 'Penthouse',
    imageSrc: '/ellhmart-penthouse.webp',
    altText: 'Ellhmart Penthouse - Salon sculptural et boiseries nobles',
    category: 'Résidence Contemporaine',
    location: 'Genève, Suisse',
    year: '2024',
    area: '440 m²',
    description: 'Lignes épurées, boiseries noyer sculpturales et mobilier d’exception créant une atmosphère feutrée et intemporelle.',
    materials: ['Boiseries Sculptées', 'Cuir Camel', 'Laiton Brossé', 'Marbre Noir Marquina'],
    galleryImages: [
      '/ellhmart-penthouse.webp',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85'
    ]
  },
  {
    id: 'kyoto-sanctuary',
    titleLine1: 'Kyoto',
    titleLine2: 'Sanctuary',
    imageSrc: '/kyoto.webp',
    altText: 'Kyoto Sanctuary - Sérénité et architecture japonaise contemporaine',
    category: 'Architecture Résidentielle',
    location: 'Higashiyama, Kyoto',
    year: '2024',
    area: '380 m²',
    description: 'Harmonie des textures naturelles, cèdre brûlé et cadrages contemplatifs ouverts sur des jardins intérieurs zens.',
    materials: ['Bois de Hinoki', 'Papier Washi', 'Pierre de Basalte', 'Cèdre Brûlé'],
    galleryImages: [
      '/kyoto.webp',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1600&q=85'
    ]
  },
  {
    id: 'foundry-loft',
    titleLine1: 'Foundry',
    titleLine2: 'Loft',
    imageSrc: '/foundry-loft.webp',
    altText: 'Foundry Loft - Volumes monumentaux et finitions industrielles raffinées',
    category: 'Rénovation d’Exception',
    location: 'Tribeca, New York',
    year: '2023',
    area: '410 m²',
    description: 'Volumes monumentaux réinterprétés avec raffinement, cloisons suspendues et finitions artisanales sur mesure.',
    materials: ['Acier Noirci', 'Pierre de Stéatite', 'Pin de Récupération', 'Calcaire Vieilli'],
    galleryImages: [
      '/foundry-loft.webp',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85'
    ]
  }
];

interface ProjectsSectionProps {
  onNavigate?: (path: string) => void;
  onNavigateToProjects?: () => void;
  hideViewAllLink?: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onNavigate,
  onNavigateToProjects,
  hideViewAllLink = false,
}) => {
  const [activeProjectModal, setActiveProjectModal] = useState<FeaturedProjectBlock | null>(null);

  // Close modal on Escape key press
  React.useEffect(() => {
    if (!activeProjectModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProjectModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProjectModal]);

  const handleCardClick = (project: FeaturedProjectBlock) => {
    if (onNavigate) {
      onNavigate(`/projects/${project.id}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveProjectModal(project);
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-12 lg:px-16 max-w-[1580px] mx-auto">
      {/* Section Header centered as in the reference */}
      <div className="text-center max-w-5xl mx-auto mb-16 md:mb-20">
        <span className="text-xs sm:text-sm uppercase font-bold tracking-[0.2em] text-neutral-900 block mb-5">
          Projets Sélectionnés
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
          Pensé avec soin,
          <br />
          Vécu avec élégance
        </h2>
      </div>

      {/* 4 Image Blocks Grid (2x2) matching the reference */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-16 lg:gap-y-20">
        {FOUR_FEATURED_PROJECTS.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            role="button"
            tabIndex={0}
            aria-label={`Voir le projet ${project.titleLine1} ${project.titleLine2} — ${project.category}`}
            onClick={() => handleCardClick(project)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCardClick(project);
              }
            }}
            className="group cursor-pointer flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4 rounded-none transition-all"
          >
            {/* Image Container */}
            <div className="relative aspect-square w-full overflow-hidden rounded-none bg-[#e8e6e0] shadow-sm">
              <img
                src={project.imageSrc}
                alt={project.altText}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
            </div>

            {/* Bottom Details: Title on left + VIEW PROJECT on right */}
            <div className="mt-5 sm:mt-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-neutral-900 tracking-tight leading-[1.08] transition-colors group-hover:text-neutral-700">
                  <FoldText
                    text={`${project.titleLine1}\n${project.titleLine2}`}
                    splitBy="char"
                    hinge="top"
                    trigger="scroll"
                    duration={0.65}
                    stagger={0.045}
                    ease="power3.out"
                    perspective={700}
                    creaseShading={0}
                  />
                </h3>
              </div>

            <div className="pt-1.5 flex-shrink-0">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-neutral-900 group-hover:text-neutral-500 transition-colors whitespace-nowrap inline-block">
                  VOIR LE PROJET
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Link: Voir tous les projets */}
      {!hideViewAllLink && (
        <div className="mt-16 sm:mt-24 text-center flex justify-center">
          {onNavigateToProjects ? (
            <button
              type="button"
              onClick={onNavigateToProjects}
              className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-neutral-900 hover:text-neutral-600 transition-colors duration-300 tracking-tight cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-lg px-2"
            >
              Voir tous les projets
            </button>
          ) : (
            <a
              href="#projects"
              className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-neutral-900 hover:text-neutral-600 transition-colors duration-300 tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-lg px-2"
            >
              Voir tous les projets
            </a>
          )}
        </div>
      )}

      {/* Project Detail Modal */}
      {activeProjectModal && (
        <div
          id="project-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="featured-project-modal-title"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveProjectModal(null)}
        >
          <div
            id="project-modal-card"
            className="bg-[#faf9f6] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center text-neutral-800 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
              aria-label="Fermer la vue détaillée du projet"
            >
              <X size={20} aria-hidden="true" />
            </button>

            {/* Modal Header */}
            <div className="mb-8 pr-12">
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold block mb-2">
                {activeProjectModal.category}
              </span>
              <h2 id="featured-project-modal-title" className="text-3xl sm:text-4xl font-bold text-neutral-900">
                {activeProjectModal.titleLine1} {activeProjectModal.titleLine2}
              </h2>
              <p className="text-sm text-neutral-600 mt-1 flex items-center space-x-2">
                <MapPin size={14} className="text-amber-700" />
                <span>{activeProjectModal.location}</span>
                <span>•</span>
                <span>{activeProjectModal.area}</span>
              </p>
            </div>

            {/* Large Image Preview */}
            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-8 shadow-md">
              <img
                src={activeProjectModal.imageSrc}
                alt={`${activeProjectModal.titleLine1} ${activeProjectModal.titleLine2}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text description */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-2">
                <h3 className="text-sm uppercase tracking-wider font-bold text-neutral-800 mb-2">
                  Récit Architectural
                </h3>
                <p className="text-neutral-700 text-base leading-relaxed">
                  {activeProjectModal.description}
                </p>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider font-bold text-neutral-800 mb-2">
                  Palette de Matières
                </h3>
                <ul className="space-y-1.5">
                  {activeProjectModal.materials.map((mat, i) => (
                    <li key={i} className="text-sm text-neutral-600 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-700" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            <div>
              <h3 className="text-sm uppercase tracking-wider font-bold text-neutral-800 mb-3">
                Perspectives du Projet
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {activeProjectModal.galleryImages.map((img, i) => (
                  <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm bg-neutral-200">
                    <img src={img} alt={`Galerie ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
