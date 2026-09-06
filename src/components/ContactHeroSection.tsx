import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface ContactHeroSectionProps {
  imageSrc?: string;
}

export const ContactHeroSection: React.FC<ContactHeroSectionProps> = ({
  imageSrc = '/fullwidth-second.webp',
}) => {
  const { scrollY } = useScroll();

  // Scroll de-zoom effect: starts zoomed in (1.20) and gently de-zooms toward 1.00 on scroll down
  const scale = useTransform(scrollY, [0, 800], [1.22, 1.0], { clamp: true });
  const y = useTransform(scrollY, [0, 800], ['0%', '15%']);

  const textY = useTransform(scrollY, [0, 600], [0, -40]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <section
      id="contact-hero"
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
          alt="Nyksys — Espace d'exception et architecture d'intérieur"
          className="w-full h-full object-cover object-center brightness-[0.95] contrast-[1.02]"
          loading="eager"
          decoding="async"
        />

        {/* Soft, lighter ambient gradient overlays for clarity and text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* Hero Content Layer */}
      <motion.div
        className="relative z-10 w-full h-full flex flex-col justify-end max-w-[1580px] mx-auto px-6 md:px-12 lg:px-16 pb-12 sm:pb-16 md:pb-20 pointer-events-none"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Title: Let's Bring Your Space to Life */}
          <div className="lg:col-span-7 min-w-0 pointer-events-auto">
            <h1
              id="contact-hero-title"
              className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-[5.2rem] 2xl:text-[6rem] font-bold text-white tracking-tight leading-[0.96] drop-shadow-md select-text"
            >
              <span className="block overflow-hidden py-1">
                <motion.span
                  className="block will-change-transform"
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                >
                  Donnez Vie à
                </motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span
                  className="block will-change-transform"
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
                >
                  Votre Espace
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Right Statement */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="lg:col-span-5 min-w-0 pointer-events-auto pb-1 sm:pb-2"
          >
            <p
              id="contact-hero-desc"
              className="text-base sm:text-lg md:text-xl font-medium text-white/95 leading-snug drop-shadow-sm select-text"
            >
              Entrez en contact avec Nyksys pour débuter une conversation autour de la création d'espaces conçus sur-mesure pour sublimer votre art de vivre.
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
