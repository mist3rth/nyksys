import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ProjectHeroSectionProps {
  titleLine1: string;
  titleLine2: string;
  imageSrc: string;
  altText: string;
}

export const ProjectHeroSection: React.FC<ProjectHeroSectionProps> = ({
  titleLine1,
  titleLine2,
  imageSrc,
  altText,
}) => {
  const { scrollY } = useScroll();

  // Smooth scroll de-zoom effect: starts zoomed in (1.22) and scales down to 1.00
  const scale = useTransform(scrollY, [0, 800], [1.22, 1.0], { clamp: true });
  const y = useTransform(scrollY, [0, 800], ['0%', '15%']);

  const textY = useTransform(scrollY, [0, 600], [0, -35]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0.4]);

  return (
    <section
      id="project-hero"
      className="sticky top-0 left-0 w-full h-[100dvh] min-h-[500px] sm:min-h-[660px] md:min-h-[720px] overflow-hidden bg-[#0d0c0b] z-0 select-none"
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
          alt={altText}
          className="w-full h-full object-cover object-center brightness-[0.88] contrast-[1.04]"
          loading="eager"
          decoding="async"
        />

        {/* Soft atmospheric gradient overlays for contrast & legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/35 pointer-events-none" />
      </motion.div>

      {/* Hero Bottom-Left Title (matching reference image) */}
      <motion.div
        className="absolute top-28 sm:top-32 lg:top-auto lg:bottom-16 md:bottom-20 left-0 w-full px-6 md:px-12 lg:px-16 pointer-events-none z-10"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="max-w-[1580px] mx-auto">
          <h1
            id="project-hero-title"
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[112px] font-bold text-white tracking-tight leading-[0.98] drop-shadow-md select-text"
          >
            <span className="block overflow-hidden py-1">
              <motion.span
                className="block will-change-transform"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              >
                {titleLine1}
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                className="block will-change-transform"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
              >
                {titleLine2}
              </motion.span>
            </span>
          </h1>
        </div>
      </motion.div>
    </section>
  );
};
