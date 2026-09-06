import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, animate } from 'motion/react';
import SplitText from './SplitText';

interface StatItem {
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
}

const STATS_DATA: StatItem[] = [
  {
    numericValue: 12,
    suffix: '+',
    label: 'Années d’Expérience',
    description:
      'Années passées à transformer des résidences en espaces intemporels définis par l’élégance et le confort.',
  },
  {
    numericValue: 40,
    suffix: '+',
    label: 'Artisans & Partenaires',
    description:
      'Collaborateurs talentueux et artisans de confiance dévoués aux standards d’excellence les plus élevés.',
  },
  {
    numericValue: 150,
    suffix: '+',
    label: 'Réalisations d’Exception',
    description:
      'Espaces d’exception concrétisés avec créativité, précision et un souci absolu du détail.',
  },
  {
    numericValue: 98,
    suffix: '%',
    label: 'Satisfaction Client',
    description:
      'Confiance client acquise grâce à une exécution fluide, une transparence totale et une expérience d’exception.',
  },
];

const AnimatedCounter: React.FC<{ target: number; suffix: string; duration?: number }> = ({
  target,
  suffix,
  duration = 2,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => setCount(Math.round(value)),
    });
    return () => controls.stop();
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export const AboutStatsSection: React.FC = () => {
  return (
    <section
      id="about-stats-section"
      className="relative z-20 w-full bg-[#faf9f6] text-neutral-900 pt-20 sm:pt-28 md:pt-36 pb-20 sm:pb-28 shadow-[0_-25px_60px_rgba(0,0,0,0.45)] border-t border-neutral-300/60"
    >
      <div className="max-w-[1580px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Large Editorial Manifesto */}
        <div className="pb-20 sm:pb-28 md:pb-36 border-b border-neutral-300/80">
          <SplitText
            text="Chez Nyksys, nous croyons que l’architecture d’intérieur va bien au-delà de l’agencement des espaces, c’est l’art de façonner la façon dont la vie y est vécue. Notre travail s’enracine dans la précision, l’équilibre et une élégance intemporelle, créant des intérieurs pensés avec intention et naturellement raffinés."
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] font-bold text-neutral-900 tracking-tight leading-[1.12] max-w-[1400px]"
            delay={40}
            duration={1.2}
            ease="power3.out"
            splitType="lines"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-60px"
            textAlign="left"
            tag="h2"
          />
        </div>

        {/* 4 Stats Grid */}
        <div className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-14 lg:gap-16">
            {STATS_DATA.map((stat, idx) => (
              <motion.div
                key={idx}
                id={`about-stat-col-${idx + 1}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-start"
              >
                {/* Big Number with Animated Counter */}
                <div className="mb-4 sm:mb-6">
                  <span className="text-6xl sm:text-7xl md:text-[80px] lg:text-[90px] font-bold text-neutral-900 tracking-tight leading-none block">
                    <AnimatedCounter target={stat.numericValue} suffix={stat.suffix} duration={1.8 + idx * 0.2} />
                  </span>
                </div>

                {/* Subtitle / Paragraph */}
                <p className="text-base sm:text-lg text-neutral-800 font-medium leading-relaxed max-w-sm">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
