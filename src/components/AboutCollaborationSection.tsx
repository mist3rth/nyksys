import React from 'react';
import { motion } from 'motion/react';

interface AboutCollaborationSectionProps {
  portraitImageSrc?: string;
  panoramicImageSrc?: string;
}

export const AboutCollaborationSection: React.FC<AboutCollaborationSectionProps> = ({
  portraitImageSrc = '/collab-portrait.webp',
  panoramicImageSrc = '/collab-panoramic.webp',
}) => {
  return (
    <section
      id="about-collaboration-section"
      className="relative z-20 w-full bg-[#faf9f6] text-neutral-900 pt-12 sm:pt-20 md:pt-28 pb-20 sm:pb-28 md:pb-36 overflow-hidden border-t border-neutral-200/80"
    >
      <div className="max-w-[1580px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Top Block: Text Statement on Left + Portrait Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* Left: Bold Statement Text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 xl:col-span-8"
          >
            <h3
              id="about-collaboration-headline"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[44px] font-bold text-neutral-900 tracking-tight leading-[1.18] select-text max-w-4xl"
            >
              Nous collaborons étroitement avec les propriétaires pour concrétiser chaque vision, en associant une réflexion architecturale rigoureuse, des matières d'exception et une esthétique soignée.
            </h3>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-700 font-medium leading-relaxed max-w-3xl">
              Chaque projet est façonné avec la plus grande exigence, veillant à ce que beauté, confort et fonctionnalité s’unissent dans une harmonie parfaite et pérenne.
            </p>
          </motion.div>

          {/* Right: Portrait Image (Arched interior with warm lighting) */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 xl:col-span-4 flex justify-start lg:justify-end"
          >
            <div className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px] xl:max-w-[420px] aspect-[4/5] overflow-hidden bg-neutral-200">
              <img
                src={portraitImageSrc}
                alt="Nyksys — Perspective sous arcades et cuisine sculpturale"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Block: Tall Panoramic / Architectural Full-Width Image */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-20 md:mt-24 w-full h-[480px] sm:h-[620px] md:h-[720px] lg:h-[840px] overflow-hidden bg-neutral-200 relative group"
        >
          <img
            src={panoramicImageSrc}
            alt="Nyksys — Architecture double hauteur, verrières panoramiques et mezzanine contemporaine"
            className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
            loading="lazy"
          />
          {/* Subtle soft gradient lighting overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};
