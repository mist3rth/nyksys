import React from 'react';
import SplitText from './SplitText';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#faf9f6]">
      <div className="max-w-[1580px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Testimonials Header from user reference */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-neutral-900 block mb-6">
            TÉMOIGNAGES
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-tight text-neutral-900 leading-[1.06]">
            Recommandé par
            <br />
            les propriétaires qui
            <br />
            exigent l’excellence
          </h2>
        </div>

        {/* Featured Testimonial (Portrait image on left, Quote & Avatar on right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-20 items-center">
          {/* Left Column: Portrait Architecture Image */}
          <div className="lg:col-span-6">
            <div className="w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-neutral-200 shadow-sm">
              <img
                src="/t-ambiance.webp"
                alt="Intérieur architectural d’exception - Témoignage Nyksys"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Quote + Author */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <SplitText
              text="“Nyksys a complètement transformé la façon dont nous vivons notre maison. Chaque détail a été pensé avec soin, et le résultat final est élégant, chaleureux et profondément personnel.”"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold text-neutral-900 tracking-tight leading-[1.12] mb-12 sm:mb-16"
              delay={40}
              duration={1.2}
              ease="power3.out"
              splitType="lines"
              from={{ opacity: 0, y: 35 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.12}
              rootMargin="-50px"
              textAlign="left"
              tag="blockquote"
            />

            <div className="flex flex-col items-start">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-neutral-200 mb-4 shadow-sm">
                <img
                  src="/testimonial-avatar.webp"
                  alt="Sophia Bennett - Propriétaire"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                Sophia Bennett
              </p>
              <p className="text-sm sm:text-base text-neutral-600 font-medium mt-1">
                Propriétaire
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
