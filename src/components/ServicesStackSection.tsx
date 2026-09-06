import React from 'react';

export interface ServiceStackItem {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const SERVICES_DATA: ServiceStackItem[] = [
  {
    number: '01',
    title: 'Architecture\nd’Intérieur',
    description:
      'Des intérieurs soigneusement conçus qui allient élégance, confort et fonctionnalité pour un art de vivre contemporain et pérenne.',
    image: '/service-1.webp',
    alt: 'Architecture d’Intérieur — Conception sur mesure et art de vivre contemporain',
  },
  {
    number: '02',
    title: 'Agencement\ndes Espaces',
    description:
      'Une étude morphologique rigoureuse des circulations, optimisant les volumes et la pénétration de la lumière naturelle à chaque instant.',
    image: '/service-2.webp',
    alt: 'Agencement des Espaces — Séjour cathédrale sous poutres en bois et baies vitrées',
  },
  {
    number: '03',
    title: 'Menuiserie &\nÉbénisterie',
    description:
      'Dessin et confection de pièces uniques, agencements intégrés et bibliothèques sur-mesure façonnés par nos maîtres artisans ébénistes.',
    image: '/service-3.webp',
    alt: 'Menuiserie & Ébénisterie — Agencement sur-mesure en noyer et détails de laiton',
  },
  {
    number: '04',
    title: 'Scénographie\nLumineuse',
    description:
      'Conception sur-mesure de scénarios d’éclairage direct et indirect pour sculpter les espaces et magnifier la texture des matières nobles.',
    image: '/service-4.webp',
    alt: 'Scénographie Lumineuse — Salon d’exception avec éclairage indirect et suspensions d’art',
  },
  {
    number: '05',
    title: 'Matières &\nFinitions',
    description:
      'Sélection exigeante de pierres naturelles, plâtres à la chaux, cuirs patinés et essences de bois rares sourcés de manière durable.',
    image: '/service-5.webp',
    alt: 'Matières & Finitions — Échantillonnage de travertin, marbre et bois nobles',
  },
  {
    number: '06',
    title: 'Gestion\nClé en Main',
    description:
      'Coordination intégrale de l’ensemble des corps d’état d’art, respect strict du calendrier et exigences de finitions jusqu’à la livraison finale.',
    image: '/service-6.webp',
    alt: 'Gestion Clé en Main — Réalisation résidentielle clé en main livrée avec excellence',
  },
];

export const ServicesStackSection: React.FC = () => {
  return (
    <section
      id="services-stack-section"
      className="relative z-20 w-full bg-[#faf9f6] text-neutral-900 pt-16 sm:pt-24 md:pt-32 pb-24 sm:pb-36 shadow-[0_-25px_60px_rgba(0,0,0,0.45)] border-t border-neutral-300/60"
    >
      <div className="max-w-[1580px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="border-b border-neutral-300 pb-12 sm:pb-16 mb-12 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
            <div className="md:col-span-4">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                Nos Expertises
              </span>
            </div>
            <div className="md:col-span-8">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-snug">
                Six piliers d'excellence dédiés à la création d'intérieurs remarquables.
              </p>
            </div>
          </div>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative space-y-12 sm:space-y-16 lg:space-y-24">
          {SERVICES_DATA.map((service, index) => {
            // Z-index increases so subsequent cards stack cleanly over previous ones
            const zIndexClass = [
              'z-[11]',
              'z-[12]',
              'z-[13]',
              'z-[14]',
              'z-[15]',
              'z-[16]',
            ][index];

            return (
              <div
                key={service.number}
                id={`service-card-${service.number}`}
                className={`sticky top-20 sm:top-24 lg:top-28 ${zIndexClass} w-full bg-[#faf9f6] border-t border-neutral-300/90 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-start">
                  {/* Left Column: Number */}
                  <div className="lg:col-span-2">
                    <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold text-neutral-900 leading-none tracking-tight block">
                      {service.number}
                    </span>
                  </div>

                  {/* Middle Column: Title & Description */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-[160px] lg:min-h-[300px] pr-0 lg:pr-8">
                    <div>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-neutral-900 leading-[1.05] tracking-tight whitespace-pre-line">
                        {service.title}
                      </h2>
                    </div>

                    <div className="mt-8 sm:mt-12 lg:mt-auto pt-4">
                      <p className="text-lg sm:text-xl font-medium text-neutral-800 leading-relaxed max-w-md">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Architectural Photography */}
                  <div className="lg:col-span-5">
                    <div className="overflow-hidden rounded-none aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] w-full">
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
