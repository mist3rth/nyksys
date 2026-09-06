import React from 'react';
import { motion } from 'motion/react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'amara-okoye',
    name: 'Amara Okoye',
    role: 'Directrice de Création',
    image: '/p1.webp',
  },
  {
    id: 'tobi-adebayo',
    name: 'Tobi Adebayo',
    role: "Designer d'Intérieur Senior",
    image: '/p2.webp',
  },
  {
    id: 'daniel-brooks',
    name: 'Daniel Brooks',
    role: "Architecte d'Intérieur Principal",
    image: '/p3.webp',
  },
];

export const AboutTeamSection: React.FC = () => {
  return (
    <section
      id="about-team-section"
      className="relative z-20 w-full bg-[#faf9f6] text-neutral-900 pt-20 sm:pt-28 md:pt-36 pb-24 sm:pb-32 md:pb-40 border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-[1580px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header centered */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm font-bold tracking-[0.2em] text-neutral-900 uppercase mb-4 sm:mb-6"
          >
            ABOUT US
          </motion.p>

          <motion.h2
            id="about-team-title"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-neutral-900 tracking-tight leading-[1.08]"
          >
            The Minds
            <br />
            Behind Haven
          </motion.h2>
        </div>

        {/* Team Grid: 3 cards per row, no shadows, no borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.85,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col bg-transparent"
            >
              {/* Member Portrait */}
              <div className="relative w-full aspect-square overflow-hidden bg-neutral-200 mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Member Details */}
              <div className="flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight leading-snug">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm sm:text-base font-normal text-neutral-800 tracking-normal">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
