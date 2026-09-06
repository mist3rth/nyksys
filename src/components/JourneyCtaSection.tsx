import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface JourneyCtaSectionProps {
  onOpenContact: () => void;
}

export const JourneyCtaSection: React.FC<JourneyCtaSectionProps> = ({ onOpenContact }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress as the section passes through the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax translation along the Y axis without scale/zoom
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <section
      ref={containerRef}
      id="start-project"
      className="relative w-full min-h-[90vh] md:min-h-screen overflow-hidden bg-neutral-950 flex flex-col justify-between"
    >
      {/* Background Image with Parallax Motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute -top-[15%] left-0 w-full h-[130%] will-change-transform"
        >
          <img
            src="/cta-journey.webp"
            alt="Salon d'architecte aux teintes chaudes, assises sculpturales et matières organiques"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          {/* Subtle gradient overlay for pristine text contrast */}
          <div className="absolute inset-0 bg-black/45 md:bg-black/35" />
        </motion.div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-[1580px] mx-auto px-6 md:px-12 lg:px-16 py-16 sm:py-24 md:py-32 flex-1 flex flex-col justify-between">
        {/* Top Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Main Title (Left) */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-white leading-[1.04] drop-shadow-sm">
              Donnez vie à
              <br />
              votre projet
              <br />
              d’exception
            </h2>
          </div>

          {/* Descriptive Text (Right) */}
          <div className="lg:col-span-5 lg:pt-3">
            <p className="text-base sm:text-lg md:text-xl text-neutral-100 font-normal leading-relaxed drop-shadow-sm max-w-lg">
              Laissez Nyksys transformer votre vision en une expérience de vie raffinée, guidée par une architecture réfléchie, une esthétique intemporelle et des détails méticuleusement orchestrés.
            </p>
          </div>
        </div>

        {/* Bottom CTA Link (Left) */}
        <div className="mt-16 sm:mt-24 md:mt-32">
          <button
            type="button"
            id="cta-initier-projet-btn"
            onClick={onOpenContact}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white hover:text-neutral-300 transition-colors cursor-pointer focus:outline-none"
          >
            Initier un projet
          </button>
        </div>
      </div>
    </section>
  );
};
