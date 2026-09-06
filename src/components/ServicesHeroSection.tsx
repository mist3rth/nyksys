import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface ServicesHeroSectionProps {
  imageSrc?: string;
}

export const ServicesHeroSection: React.FC<ServicesHeroSectionProps> = ({
  imageSrc = '/services-hero.webp',
}) => {
  const { scrollY } = useScroll();

  // Scroll de-zoom effect: starts zoomed in (1.20) and gently de-zooms toward 1.00 on scroll down
  const scale = useTransform(scrollY, [0, 800], [1.22, 1.0], { clamp: true });
  const y = useTransform(scrollY, [0, 800], ['0%', '15%']);

  const textY = useTransform(scrollY, [0, 600], [0, -40]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <section
      id="services-hero"
      className="sticky top-0 left-0 w-full h-screen min-h-[660px] md:min-h-[720px] overflow-hidden bg-[#0d0c0b] z-0 select-none"
    >
      {/* Background Image Container with Scroll De-Zoom */}
      <motion.div
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{ scale, y }}
      >
        <motion.img
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          src={imageSrc}
          alt="Nyksys — Craftsmanship & Quality, Architecture d'Intérieur"
          className="w-full h-full object-cover object-center brightness-[0.92] contrast-[1.04]"
          loading="eager"
          decoding="async"
        />

        {/* Soft atmospheric gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* Hero Content Layer */}
      <motion.div
        className="relative z-10 w-full h-full flex flex-col justify-end max-w-[1580px] mx-auto px-6 md:px-12 lg:px-16 pb-12 sm:pb-16 md:pb-20 pointer-events-none"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Title: Savoir-Faire & Qualité */}
          <div className="lg:col-span-8 pointer-events-auto">
            <h1
              id="services-hero-title"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold text-white tracking-tight leading-[0.94] drop-shadow-md select-text"
            >
              <span className="block overflow-hidden py-1">
                <motion.span
                  className="block will-change-transform"
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                >
                  Savoir-Faire
                </motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span
                  className="block will-change-transform"
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
                >
                  & Qualité
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Right Statement */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="lg:col-span-4 pointer-events-auto pb-1 sm:pb-2"
          >
            <p
              id="services-hero-desc"
              className="text-base sm:text-lg md:text-xl font-medium text-white/95 leading-snug drop-shadow-sm select-text"
            >
              Une approche architecturale sur-mesure guidée par la précision du geste, la noblesse des matières et l'exigence absolue du détail.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center opacity-75">
        <ChevronDown size={18} className="text-white animate-bounce" />
      </div>
    </section>
  );
};
