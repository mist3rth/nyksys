import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenContact: () => void;
  onNavigate: (target: string) => void;
  onNavigateHome: () => void;
  currentPath: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  onNavigate,
  onNavigateHome,
  currentPath,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  const isProjectsActive =
    currentPath === '/projects' ||
    currentPath.startsWith('/projects/') ||
    currentPath === '#projects';
  const isContactActive = currentPath === '/contact' || currentPath === '#contact';
  const isServicesActive = currentPath === '/services' || currentPath === '#services';
  const isAboutActive = currentPath === '/about' || currentPath === '#about';

  return (
    <>
      <header
        id="main-navbar"
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0e0d0c]/85 backdrop-blur-md py-4 border-b border-white/10 shadow-lg'
            : 'bg-transparent py-7 md:py-8'
        }`}
      >
        <div className="w-full max-w-[1580px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-logo-btn"
            onClick={onNavigateHome}
            aria-label="Nyksys Studio — Retour à l'accueil"
            className="text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0d0c] rounded-sm"
          >
            <span className="text-2xl md:text-[28px] font-bold tracking-tight text-white transition-opacity duration-300 group-hover:opacity-85">
              Nyksys<sup className="text-xs md:text-sm font-medium ml-0.5">®</sup>
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav
            id="desktop-nav"
            aria-label="Navigation principale"
            className="hidden md:flex items-center space-x-10 lg:space-x-14"
          >
            <div className="flex items-center space-x-8 lg:space-x-12">
              <button
                id="nav-link-projects"
                onClick={() => handleLinkClick('/projects')}
                className={`text-[15px] font-semibold tracking-wide transition-all duration-200 cursor-pointer hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0d0c] rounded-sm ${
                  isProjectsActive
                    ? 'text-white border-b-2 border-white pb-0.5'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Projets
              </button>
              <button
                id="nav-link-about"
                onClick={() => handleLinkClick('/about')}
                className={`text-[15px] font-semibold tracking-wide transition-all duration-200 cursor-pointer hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0d0c] rounded-sm ${
                  isAboutActive
                    ? 'text-white border-b-2 border-white pb-0.5'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                À propos
              </button>
              <button
                id="nav-link-services"
                onClick={() => handleLinkClick('services')}
                className={`text-[15px] font-semibold tracking-wide transition-all duration-200 cursor-pointer hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0d0c] rounded-sm ${
                  isServicesActive
                    ? 'text-white border-b-2 border-white pb-0.5'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Services
              </button>
            </div>

            <button
              id="nav-link-contact"
              onClick={onOpenContact}
              className={`text-[15px] font-semibold tracking-wide transition-all duration-200 cursor-pointer hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0d0c] rounded-sm ml-4 ${
                isContactActive
                  ? 'text-amber-200 border-b-2 border-amber-200 pb-0.5'
                  : 'text-white hover:text-white/80'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              id="mobile-contact-quick-btn"
              onClick={() => {
                onOpenContact();
                setMobileMenuOpen(false);
              }}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-white/15 backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Contact
            </button>
            <button
              id="mobile-nav-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg"
              aria-label={mobileMenuOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            id="mobile-nav-drawer"
            data-lenis-prevent
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation mobile"
            className="fixed inset-0 z-40 bg-[#0e0d0c]/95 backdrop-blur-xl flex flex-col justify-center px-8 md:hidden"
          >
          <div className="flex flex-col space-y-7 text-center">
            <button
              onClick={() => handleLinkClick('/projects')}
              className={`text-3xl font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg py-1 ${
                isProjectsActive ? 'text-amber-200' : 'text-white hover:text-neutral-400'
              }`}
            >
              Projets
            </button>
            <button
              onClick={() => handleLinkClick('/about')}
              className={`text-3xl font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg py-1 ${
                isAboutActive ? 'text-amber-200' : 'text-white hover:text-neutral-400'
              }`}
            >
              À propos
            </button>
            <button
              onClick={() => handleLinkClick('services')}
              className="text-3xl font-bold text-white hover:text-neutral-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg py-1"
            >
              Services
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className={`text-3xl font-bold transition-colors pt-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg py-1 ${
                isContactActive ? 'text-amber-200' : 'text-white hover:text-amber-200'
              }`}
            >
              Contact
            </button>
          </div>

          <div className="absolute bottom-10 left-0 right-0 text-center text-xs text-neutral-400">
            Nyksys® Studio d'Architecture d'Intérieur
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
};
