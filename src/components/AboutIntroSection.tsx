import React from 'react';
import SplitText from './SplitText';

interface AboutIntroSectionProps {
  id?: string;
}

export const AboutIntroSection: React.FC<AboutIntroSectionProps> = ({ id = 'about' }) => {
  return (
    <section
      id={id}
      className="py-20 sm:py-28 md:py-36 lg:py-44 px-6 md:px-12 lg:px-16 max-w-[1580px] mx-auto border-b border-neutral-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Left Column: À propos Heading with matching typography */}
        <div className="lg:col-span-3 xl:col-span-3">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-neutral-900 tracking-tight leading-none">
            À propos
          </h2>
        </div>

        {/* Right Column: Editorial Statement with animated SplitText */}
        <div className="lg:col-span-9 xl:col-span-9">
          <SplitText
            text="Nyksys transforme les intérieurs en espaces soigneusement composés, reflets de style, d’équilibre et de singularité. Notre approche associe un design d’exception à des détails attentifs pour concevoir des résidences à l’élégance naturelle."
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] 2xl:text-[68px] font-bold text-neutral-900 tracking-tight leading-[1.08]"
            delay={45}
            duration={1.2}
            ease="power3.out"
            splitType="lines"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-60px"
            textAlign="left"
            tag="p"
          />
        </div>
      </div>
    </section>
  );
};
