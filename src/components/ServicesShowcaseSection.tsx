import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

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
            <span className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-neutral-900 tracking-tight leading-none block">
              Services
            </span>
          </div>
          <div className="md:col-span-8 lg:col-span-8">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-tight text-neutral-900 leading-[1.06]">
              Transformer les idées en
              <br />
              espaces intemporels
            </h2>
          </div>
        </div>

        {/* 3 Interactive Service Items (Smooth Animated Accordion) */}
        <div className="border-b border-neutral-300 mb-20 md:mb-24">
          {SERVICES_LIST.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={service.number}
                id={`service-item-${service.number}`}
                className="border-t border-neutral-300 py-8 sm:py-12 transition-colors duration-300"
              >
                {/* Header row / Accessible trigger */}
                <button
                  type="button"
                  onClick={() => toggleService(index)}
                  aria-expanded={isOpen}
                  aria-controls={`service-content-${service.number}`}
                  className="w-full text-left cursor-pointer grid grid-cols-12 gap-4 sm:gap-8 lg:gap-10 items-start select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4 rounded-none"
                >
                  {/* Number column */}
                  <div className="col-span-3 sm:col-span-2 lg:col-span-2">
                    <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-neutral-900 group-hover:text-neutral-600 transition-colors duration-300 leading-none block">
                      {service.number}
                    </span>
                  </div>

                  {/* Title column */}
                  <div className="col-span-8 sm:col-span-9 lg:col-span-9">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors duration-300 leading-[1.08] tracking-tight whitespace-pre-line">
                      {service.title}
                    </h3>
                  </div>

                  {/* Right Toggle Icon with smooth 45° rotation */}
                  <div className="col-span-1 flex justify-end pt-1 sm:pt-2">
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-neutral-900 group-hover:text-neutral-600 transition-colors duration-300"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 sm:w-7 sm:h-7"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </motion.div>
                  </div>
                </button>

                {/* Expandable Content Panel with smooth height & opacity */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`service-content-${service.number}`}
                      role="region"
                      aria-labelledby={`service-item-${service.number}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: {
                          height: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.4, ease: 'easeOut', delay: 0.1 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.2, ease: 'easeIn' },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-10 pt-6 sm:pt-8 lg:pt-10 items-stretch">
                        {/* Spacer matching the number column */}
                        <div className="hidden sm:block sm:col-span-2 lg:col-span-2" />

                        {/* Description Column (4 cols on desktop) */}
                        <div className="col-span-12 sm:col-span-10 lg:col-span-4 flex flex-col justify-between">
                          <motion.p
                            initial={{ y: 12, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -8, opacity: 0 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
                            className="text-base sm:text-lg text-neutral-800 leading-relaxed max-w-sm"
                          >
                            {service.description}
                          </motion.p>
                        </div>

                        {/* Image Column (5 cols on desktop) */}
                        <div className="col-span-12 lg:col-span-5 mt-6 lg:mt-0">
                          <div className="w-full aspect-[16/10] overflow-hidden rounded-none bg-neutral-200 shadow-sm">
                            <motion.img
                              initial={{ scale: 1.05, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 1.03, opacity: 0 }}
                              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                              src={service.image}
                              alt={service.alt}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {/* Right Spacer for 12th column alignment */}
                        <div className="hidden lg:block lg:col-span-1" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Centered Link: Voir les services */}
        <div className="text-center flex justify-center">
          <a
            id="link-services-showcase"
            href="/services"
            onClick={(e) => {
              if (onNavigateToServices) {
                e.preventDefault();
                onNavigateToServices();
              }
            }}
            aria-label="Découvrir l'ensemble des services d'architecture d'intérieur Nyksys"
            className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-neutral-900 hover:text-neutral-600 transition-colors duration-300 tracking-tight cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4 rounded-sm"
          >
            Voir les services
          </a>
        </div>
      </div>
    </section>
  );
};

