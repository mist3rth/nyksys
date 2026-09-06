import React, { useState } from 'react';
import { motion } from 'motion/react';

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const SERVICES_LIST: ServiceItem[] = [
  {
    number: '01',
    title: 'Architecture\nd’intérieur',
    description: 'Des intérieurs soigneusement conçus qui allient élégance, confort et fonctionnalité pour un art de vivre contemporain.',
    image: '/service-1.webp',
    alt: 'Architecture d’intérieur haut de gamme'
  },
  {
    number: '02',
    title: 'Architecture\n& Rénovation',
    description: 'Une conception globale qui sublime les volumes, capte la lumière naturelle et crée une continuité sans rupture entre l’intérieur et l’extérieur.',
    image: '/service-2.webp',
    alt: 'Rénovation architecturale contemporaine et volumes sculptés'
  },
  {
    number: '03',
    title: 'Mobilier sur mesure\n& Direction artistique',
    description: 'Sélection rigoureuse de matières nobles, dessin de pièces exclusives façonnées par des maîtres artisans et scénographie spatiale.',
    image: '/service-3.webp',
    alt: 'Mobilier sur-mesure et textures de matières nobles'
  }
];

interface ServicesShowcaseSectionProps {
  onNavigateToServices?: () => void;
}

export const ServicesShowcaseSection: React.FC<ServicesShowcaseSectionProps> = ({
  onNavigateToServices,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services-showcase" className="py-20 md:py-32 bg-[#faf9f6]">
      <div className="max-w-[1580px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header: 'Services' on left, French title on right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start mb-20 md:mb-28">
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-neutral-900 tracking-tight leading-none">
              Services
            </h3>
          </div>
          <div className="md:col-span-8 lg:col-span-8">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-tight text-neutral-900 leading-[1.06]">
              Transformer les idées en
              <br />
              espaces intemporels
            </h2>
          </div>
        </div>

        {/* 3 Interactive Service Items (Accordion Open & Closed states) */}
        <div className="border-b border-neutral-300 mb-20 md:mb-24">
          {SERVICES_LIST.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={service.number}
                id={`service-item-${service.number}`}
                className="border-t border-neutral-300 py-10 sm:py-14 transition-colors"
              >
                {/* Header row / Click trigger */}
                <div
                  onClick={() => toggleService(index)}
                  className="cursor-pointer grid grid-cols-12 gap-4 sm:gap-8 lg:gap-10 items-start select-none"
                >
                  {/* Number column */}
                  <div className="col-span-3 sm:col-span-2 lg:col-span-2">
                    <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-neutral-900 leading-none block">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & (when open) Description column */}
                  <div
                    className={`${
                      isOpen ? 'col-span-8 sm:col-span-9 lg:col-span-4' : 'col-span-8 sm:col-span-9 lg:col-span-9'
                    } flex flex-col justify-between transition-all duration-300`}
                  >
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-[1.08] tracking-tight whitespace-pre-line">
                      {service.title}
                    </h3>

                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.1 }}
                        className="mt-8 sm:mt-12 lg:mt-24 text-base sm:text-lg text-neutral-800 leading-snug max-w-sm"
                      >
                        {service.description}
                      </motion.p>
                    )}
                  </div>

                  {/* Center Image Column (Desktop: 5 cols when open, hidden when closed) */}
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="col-span-12 lg:col-span-5 mt-6 lg:mt-0"
                    >
                      <div className="w-full aspect-[16/10] overflow-hidden rounded-none bg-neutral-200 shadow-sm">
                        <img
                          src={service.image}
                          alt={service.alt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Right Toggle Icon */}
                  <div className="col-span-1 flex justify-end pt-1">
                    <span
                      className="text-3xl sm:text-4xl font-light text-neutral-900 hover:text-neutral-500 transition-colors leading-none select-none inline-block w-8 text-right"
                    >
                      {isOpen ? '—' : '+'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered Link: Voir les services */}
        <div className="text-center flex justify-center">
          <button
            type="button"
            onClick={onNavigateToServices}
            className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-neutral-900 hover:text-neutral-600 transition-colors duration-300 tracking-tight cursor-pointer focus:outline-none"
          >
            Voir les services
          </button>
        </div>
      </div>
    </section>
  );
};
