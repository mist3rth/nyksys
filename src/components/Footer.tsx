import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="w-full bg-[#faf9f6] text-neutral-900 pt-20 sm:pt-28 md:pt-36 pb-8 sm:pb-12 overflow-hidden border-t border-neutral-200">
      <div className="max-w-[1580px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Top 4-Column Navigation & Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 pb-20 sm:pb-28 md:pb-36 items-start">
          {/* Column 1: Contact Address */}
          <div className="lg:col-span-3">
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 mb-6">
              Contact
            </h4>
            <address className="not-italic text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 leading-snug space-y-1">
              <p>Place Vendôme,</p>
              <p>75001 Paris,</p>
              <p>France</p>
            </address>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 mb-6">
              Nav
            </h4>
            <ul className="space-y-2 text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/projects')}
                  className="hover:opacity-60 transition-opacity cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-sm"
                >
                  Projets
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/about')}
                  className="hover:opacity-60 transition-opacity cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-sm"
                >
                  À Propos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/services')}
                  className="hover:opacity-60 transition-opacity cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="hover:opacity-60 transition-opacity cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Networks */}
          <div className="lg:col-span-3">
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 mb-6">
              Réseaux
            </h4>
            <ul className="space-y-2 text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil Linkedin du studio Nyksys (s'ouvre dans un nouvel onglet)"
                  className="hover:opacity-60 transition-opacity inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-sm"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Compte Instagram du studio Nyksys (s'ouvre dans un nouvel onglet)"
                  className="hover:opacity-60 transition-opacity inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-sm"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Compte X / Twitter du studio Nyksys (s'ouvre dans un nouvel onglet)"
                  className="hover:opacity-60 transition-opacity inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-sm"
                >
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="lg:col-span-3">
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 mb-6 sm:mb-8">
              S’inscrire à notre newsletter
            </h4>

            {isSubscribed ? (
              <div className="flex items-center gap-2 py-3 text-neutral-900 font-medium text-base border-b border-neutral-900">
                <Check className="w-5 h-5 text-emerald-700" />
                <span>Merci de votre inscription.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative w-full">
                <label htmlFor="newsletter-email-input" className="sr-only">
                  Adresse email pour s'inscrire à la newsletter
                </label>
                <div className="flex items-center border-b border-neutral-900 pb-2">
                  <input
                    id="newsletter-email-input"
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="email"
                    aria-label="Adresse email pour la newsletter"
                    className="w-full bg-transparent text-lg sm:text-xl text-neutral-900 placeholder:text-neutral-500 font-normal focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900 pr-8"
                  />
                  <button
                    type="submit"
                    aria-label="Valider l'inscription à la newsletter"
                    className="p-1 text-neutral-900 hover:translate-x-1.5 transition-transform cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-sm"
                  >
                    <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.75]" aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Monumental Brand Typography Full Width */}
        <div className="w-full pt-8 sm:pt-12 pb-8 sm:pb-12 select-none">
          <svg
            viewBox="0 0 1300 230"
            role="img"
            aria-label="Logo monumental du studio Nyksys"
            className="w-full h-auto block fill-neutral-900 overflow-visible select-none"
          >
            <text
              x="0"
              y="200"
              textLength="1300"
              lengthAdjust="spacingAndGlyphs"
              className="font-black text-[240px] tracking-[-0.03em] uppercase"
              style={{ fontWeight: 900 }}
            >
              NYKSYS®
            </text>
          </svg>
        </div>

        {/* Bottom Bar: Copyright (Left) & Made by Link (Right) */}
        <div className="pt-6 sm:pt-8 border-t border-neutral-300/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-base sm:text-lg md:text-xl font-bold tracking-tight text-neutral-900">
          <div>
            <span>Nyksys © 2026</span>
          </div>

          <div>
            <a
              href="https://present-me-lake.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfolio du créateur T.THIESSON (s'ouvre dans un nouvel onglet)"
              className="hover:opacity-60 transition-opacity inline-flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-sm"
            >
              Made by T.THIESSON
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
