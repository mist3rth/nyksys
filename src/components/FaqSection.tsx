import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'services',
    question: 'Quels services propose Nyksys ?',
    answer:
      'Nyksys propose des prestations complètes d’architecture d’intérieur, de planification spatiale, de direction artistique, de sélection et conception de mobilier sur-mesure, de conseil en rénovation et de transformation intégrale d’espaces résidentiels d’exception.'
  },
  {
    id: 'styles',
    question: 'Travaillez-vous avec différents styles de design ?',
    answer:
      'Chaque projet est unique. Nous adaptons notre écriture spatiale à votre sensibilité et au contexte de votre bien, tout en insufflant notre signature faite de matières nobles, de lignes épurées et d’élégance intemporelle.'
  },
  {
    id: 'turnkey',
    question: 'Nyksys peut-il piloter un projet de A à Z ?',
    answer:
      'Absolument. De l’esquisse préliminaire aux plans techniques détaillés, de la sélection des maîtres artisans à la coordination des chantiers et à la mise en place du mobilier, nous assurons une gestion clé en main sans compromis.'
  },
  {
    id: 'consultation',
    question: 'Proposez-vous un premier rendez-vous avant de démarrer ?',
    answer:
      'Oui, nous organisons une consultation initiale afin de cerner vos attentes, d’évaluer la faisabilité technique et esthétique de votre projet et de définir un cadre budgétaire et calendaire précis.'
  },
  {
    id: 'duration',
    question: 'Combien de temps dure généralement un projet d’intérieur ?',
    answer:
      'Les délais s’ajustent selon l’envergure des travaux : comptez généralement 3 à 6 mois pour un aménagement et une scénographie complète, et 6 à 18 mois pour une rénovation architecturale et structurelle d’envergure.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#1a1a1a] text-white">
      <div className="max-w-[1580px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Eyebrow + Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-neutral-400 block mb-6">
              FAQ
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-white leading-[1.08]">
              Vos questions,
              <br />
              nos réponses
            </h2>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 divide-y divide-neutral-700/80 border-t border-b border-neutral-700/80">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.id} className="py-7 sm:py-9">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left flex items-start justify-between gap-6 group cursor-pointer"
                  >
                    <h3 className="text-2xl sm:text-3xl md:text-[34px] font-bold tracking-tight text-white group-hover:text-neutral-300 transition-colors leading-[1.15]">
                      {item.question}
                    </h3>
                    <span className="text-2xl sm:text-3xl font-light text-white group-hover:text-neutral-300 transition-colors flex-shrink-0 w-8 text-right select-none pt-0.5">
                      {isOpen ? '—' : '+'}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
