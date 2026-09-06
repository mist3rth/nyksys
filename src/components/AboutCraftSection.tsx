import React from 'react';
import { motion } from 'motion/react';

interface AboutCraftSectionProps {
  smallImageSrc?: string;
  largeImageSrc?: string;
}

export const AboutCraftSection: React.FC<AboutCraftSectionProps> = ({
  smallImageSrc = '/craft-small.webp',
  largeImageSrc = '/craft-large.webp',
}) => {
  return (
    <section
      id="about-craft-statement-section"
      className="relative z-20 w-full bg-[#faf9f6] text-neutral-900 pt-8 sm:pt-14 md:pt-20 pb-20 sm:pb-28 md:pb-36 border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-[1580px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-stretch">
          {/* Left Column: Small thumbnail + Large Statement Headline */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-start">
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 lg:gap-10">
              {/* Small Portrait Image Thumbnail */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-32 sm:w-40 md:w-44 lg:w-48 xl:w-52 flex-shrink-0 overflow-hidden bg-neutral-200"
              >
                <img
                  src={smallImageSrc}
                  alt="Nyksys — Salon moderne baigné de lumière"
                  className="w-full aspect-[3/4] object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </motion.div>

              {/* Bold Manifesto Typography */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1"
              >
                <h3
                  id="about-craft-headline"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] font-bold text-neutral-900 tracking-tight leading-[1.14] select-text"
                >
                  Du premier concept à la mise en scène finale, Nyksys conçoit des espaces qui reflètent votre personnalité, subliment le confort, la durabilité et traversent le temps.
                </h3>

                <p className="mt-6 text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-xl">
                  Chaque détail est pensé dans la continuité architecturale du lieu : choix méticuleux des essences nobles, équilibre subtil des volumes et intégration invisible des technologies contemporaines.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Large Architectural Photography with reflective pool */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 relative w-full h-[420px] sm:h-[520px] lg:h-full min-h-[460px] lg:min-h-[580px] overflow-hidden bg-neutral-200"
          >
            <img
              src={largeImageSrc}
              alt="Nyksys — Villa contemporaine et bassin miroir au crépuscule"
              className="w-full h-full object-cover object-center hover:scale-[1.03] transition-transform duration-1000 ease-out"
              loading="lazy"
            />
            {/* Subtle soft gradient border overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
