import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface FullWidthParallaxSectionProps {
  id?: string;
  imageSrc?: string;
  altText?: string;
  zIndex?: string;
}

export const FullWidthParallaxSection: React.FC<FullWidthParallaxSectionProps> = ({
  id = 'fullwidth-showcase',
  imageSrc = '/fullwidth-architecture.webp',
  altText = 'Vue architecturale immersive',
  zIndex = 'z-10',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress as the section travels from the bottom of the viewport (0)
  // to the top of the viewport (1).
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  // At start: slightly zoomed in (1.25)
  // While scrolling up: smoothly de-zooms to 1.00
  // When top hits 0px (start start): de-zoom stops and stays clamped at 1.00
  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1.0], { clamp: true });

  return (
    <section
      ref={containerRef}
      id={id}
      className={`sticky top-0 ${zIndex} w-full h-screen min-h-[520px] overflow-hidden bg-neutral-950 flex items-center justify-center select-none pointer-events-none`}
    >
      <motion.div
        style={{ scale }}
        className="relative w-full h-full will-change-transform flex items-center justify-center overflow-hidden"
      >
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Subtle vignette for contrast and depth */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </motion.div>
    </section>
  );
};
