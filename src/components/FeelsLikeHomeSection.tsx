import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface FeelsLikeHomeSectionProps {
  smallImage?: string;
  largeImage?: string;
}

export const FeelsLikeHomeSection: React.FC<FeelsLikeHomeSectionProps> = ({
  smallImage = '/cheznous2.webp',
  largeImage = '/cheznous.webp',
}) => {
  return (
    <section
      id="feels-like-home"
      className="relative z-20 w-full border-b border-neutral-300 bg-[#faf9f6]"
    >
      <div className="max-w-[1580px] mx-auto px-6 md:px-12 lg:px-16 py-14 sm:py-18 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch min-h-[550px] lg:min-h-[680px]">
          {/* Left Column: Heading + Bottom Left Image Container */}
          <div className="flex flex-col justify-between relative min-h-[480px] lg:min-h-full">
            {/* Top Heading */}
            <div className="pt-2">
              <h3 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-neutral-900 tracking-tight leading-none">
                Comme chez soi
              </h3>
            </div>

            {/* Bottom-Left Image Container */}
            <div className="mt-8 lg:mt-auto pt-6">
              <div className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[320px] aspect-[3/4] rounded-none overflow-hidden bg-[#eeece6] border border-neutral-300 relative group shadow-sm">
                {smallImage ? (
                  <img
                    src={smallImage}
                    alt="Détail architectural intérieur"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-neutral-600 bg-neutral-100/90 border-2 border-dashed border-neutral-300/90">
                    <div className="w-12 h-12 rounded-full bg-neutral-200/80 flex items-center justify-center mb-3">
                      <ImageIcon size={22} className="text-neutral-500" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                      Conteneur Image
                    </span>
                    <span className="text-[11px] text-neutral-500 mt-1">
                      Format Portrait (3:4)
                    </span>
                    <span className="text-[10px] text-neutral-400 mt-2 px-2.5 py-0.5 rounded-full bg-neutral-200 font-mono">
                      smallImage
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Large Architectural Image Container */}
          <div className="flex w-full">
            <div className="w-full h-full min-h-[420px] sm:min-h-[520px] lg:min-h-[640px] rounded-none overflow-hidden bg-[#eeece6] border border-neutral-300 relative group shadow-sm flex items-center justify-center">
              {largeImage ? (
                <img
                  src={largeImage}
                  alt="Vue architecturale principale"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full min-h-[420px] sm:min-h-[520px] lg:min-h-[640px] flex flex-col items-center justify-center p-8 text-center text-neutral-600 bg-neutral-100/90 border-2 border-dashed border-neutral-300/90">
                  <div className="w-16 h-16 rounded-full bg-neutral-200/80 flex items-center justify-center mb-4">
                    <ImageIcon size={30} className="text-neutral-500" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider text-neutral-800">
                    Grand Conteneur Image
                  </span>
                  <span className="text-xs text-neutral-500 mt-1.5 max-w-xs">
                    Vue architecturale panoramique / pièce de vie
                  </span>
                  <span className="text-[11px] text-neutral-400 mt-3 px-3 py-1 rounded-full bg-neutral-200 font-mono">
                    largeImage
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Centered Link: Découvrir */}
        <div className="mt-14 sm:mt-20 text-center flex justify-center">
          <a
            id="link-decouvrir-about"
            href="#about"
            className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-neutral-900 hover:text-neutral-600 transition-colors duration-300 tracking-tight"
          >
            Découvrir
          </a>
        </div>
      </div>
    </section>
  );
};
