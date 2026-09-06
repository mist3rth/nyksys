import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  heroImage: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ heroImage }) => {
  // Parallax scroll hooks
  const { scrollY } = useScroll();

  // As user scrolls down:
  // 1. Image translates down smoothly (parallax depth)
  const imageY = useTransform(scrollY, [0, 900], ['0%', '22%']);
  const imageScale = useTransform(scrollY, [0, 900], [1, 1.08]);

  // 2. Text gently lifts and fades slightly
  const textY = useTransform(scrollY, [0, 600], [0, -50]);
  const textOpacity = useTransform(scrollY, [0, 550], [1, 0.25]);

  return (
    <section
      id="hero-section"
      className="sticky top-0 left-0 w-full h-[100dvh] min-h-[500px] sm:min-h-[660px] md:min-h-[720px] overflow-hidden bg-[#0d0c0b] z-0 select-none"
    >
      {/* Parallax Background Image Container */}
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%] left-0 will-change-transform"
        style={{ y: imageY, scale: imageScale }}
      >
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          src={heroImage}
          alt="Architecture d'intérieur Nyksys — Salon contemporain au coucher de soleil"
          className="w-full h-full object-cover object-center brightness-[0.98] contrast-[1.03]"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1080}
        />

        {/* Cinematic ambient gradient overlays for optimal text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/25 pointer-events-none" />
      </motion.div>

      {/* Main Hero Content Layer - Widened container and title positioned higher up */}
      <motion.div
        className="relative z-10 w-full h-full flex flex-col justify-between max-w-[1580px] mx-auto px-6 md:px-12 lg:px-16 pt-24 sm:pt-28 md:pt-32 pb-24 sm:pb-10 md:pb-12 pointer-events-none"
        style={{ y: textY, opacity: textOpacity }}
      >
        {/* Top Headline - Lifted closer to top header with generous wide expanse */}
        <div className="mt-2 sm:mt-4 md:mt-6 max-w-5xl lg:max-w-6xl xl:max-w-7xl pointer-events-auto">
          <h1
            id="hero-headline"
            className="text-[44px] sm:text-6xl md:text-7xl lg:text-[5.6rem] xl:text-[6.3rem] 2xl:text-[6.8rem] font-bold text-white tracking-tight leading-[0.98] drop-shadow-md select-text"
          >
            <span className="block overflow-hidden py-1">
              <motion.span
                className="block will-change-transform"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              >
                Là où commencent
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                className="block will-change-transform"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
              >
                les intérieurs intemporels<span className="text-white">.</span>
              </motion.span>
            </span>
          </h1>
        </div>

        {/* Bottom Statement Bar - Wider layout and positioned gracefully */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          className="w-full flex flex-col md:flex-row items-start md:items-end justify-end pointer-events-auto pt-6"
        >
          <p
            id="hero-statement"
            className="max-w-md sm:max-w-lg md:max-w-xl text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-semibold text-white/95 leading-snug drop-shadow-sm select-text text-left md:text-right"
          >
            Chez Nyksys, chaque espace est pensé avec soin pour offrir confort,
            équilibre et art de vivre avec une grâce naturelle.
          </p>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Indicator Cue at Bottom */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85 }}
        className="absolute bottom-6 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center hover:opacity-100 transition-opacity"
      >
        <ChevronDown size={18} className="text-white animate-bounce" />
      </motion.div>
    </section>
  );
};
