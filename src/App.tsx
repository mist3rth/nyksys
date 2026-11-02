import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutIntroSection } from './components/AboutIntroSection';
import { FeelsLikeHomeSection } from './components/FeelsLikeHomeSection';
import { FullWidthParallaxSection } from './components/FullWidthParallaxSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesShowcaseSection } from './components/ServicesShowcaseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { JourneyCtaSection } from './components/JourneyCtaSection';
import { ContactPage } from './components/ContactPage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { getProjectBySlug } from './data/projectsData';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { Seo } from './components/Seo';
import { useLenis } from './hooks/useLenis';

export interface AppProps {
  initialPath?: string;
}

function normalizePath(rawPath?: string): string {
  if (!rawPath) return '/';
  const clean = rawPath.toLowerCase().replace(/^#/, '');
  if (clean.startsWith('/projects/')) {
    return clean.replace('/projects/', '/projets/');
  }
  if (clean === '/projects' || clean === 'projects') {
    return '/projets';
  }
  if (clean === '/about' || clean === 'about') {
    return '/a-propos';
  }
  return clean;
}

export default function App({ initialPath }: AppProps = {}) {
  const lenisRef = useLenis();
  const heroImage = '/hero-home.webp?v=2';
  
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (initialPath) return normalizePath(initialPath);
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (
        pathname.startsWith('/projets/') ||
        pathname.startsWith('/projects/') ||
        hash.startsWith('#/projets/') ||
        hash.startsWith('#/projects/')
      ) {
        return normalizePath(pathname.startsWith('/projets/') || pathname.startsWith('/projects/') ? pathname : hash);
      }
      if (pathname === '/contact' || hash === '#contact' || hash === '#/contact') {
        return '/contact';
      }
      if (pathname === '/services' || hash === '#services' || hash === '#/services') {
        return '/services';
      }
      if (pathname === '/a-propos' || pathname === '/about' || hash === '#about' || hash === '#/a-propos' || hash === '#/about') {
        return '/a-propos';
      }
      if (pathname === '/projets' || pathname === '/projects' || hash === '#projects' || hash === '#/projets' || hash === '#/projects') {
        return '/projets';
      }
    }
    return '/';
  });

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Sync routing with browser back / forward navigation and address bar
  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (
        pathname.startsWith('/projets/') ||
        pathname.startsWith('/projects/') ||
        hash.startsWith('#/projets/') ||
        hash.startsWith('#/projects/')
      ) {
        setCurrentPath(normalizePath(pathname.startsWith('/projets/') || pathname.startsWith('/projects/') ? pathname : hash));
      } else if (pathname === '/contact' || hash === '#contact' || hash === '#/contact') {
        setCurrentPath('/contact');
      } else if (pathname === '/services' || hash === '#services' || hash === '#/services') {
        setCurrentPath('/services');
      } else if (pathname === '/a-propos' || pathname === '/about' || hash === '#about' || hash === '#/a-propos' || hash === '#/about') {
        setCurrentPath('/a-propos');
      } else if (pathname === '/projets' || pathname === '/projects' || hash === '#projects' || hash === '#/projets' || hash === '#/projects') {
        setCurrentPath('/projets');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const activeProject = (currentPath.startsWith('/projets/') || currentPath.startsWith('/projects/'))
    ? getProjectBySlug(currentPath.replace(/^\/(projets|projects)\//, '').replace(/^\//, ''))
    : undefined;

  // Compute SEO props for the current route
  const seoProps = React.useMemo(() => {
    if (activeProject) {
      const pImg = activeProject.heroImage || activeProject.highlightImage || '/hero-home.webp';
      return {
        title: `${activeProject.fullTitle} — Nyksys | Architecture d'Intérieur`,
        description: `${activeProject.infoText.slice(0, 150)}...`,
        url: `/projets/${activeProject.slug}`,
        image: pImg,
        preloadImage: pImg,
        type: 'article',
      };
    } else if (currentPath === '/contact') {
      return {
        title: "Contact — Studio d'Architecture Nyksys | Place Vendôme, Paris",
        description: "Prenez contact avec les architectes du studio Nyksys (Place Vendôme, Paris). Conception d'espaces intérieurs d'exception et suivi sur-mesure de vos projets résidentiels.",
        url: '/contact',
        image: '/contact-hero.webp',
        preloadImage: '/contact-hero.webp',
      };
    } else if (currentPath === '/services') {
      return {
        title: "Services & Savoir-Faire — Nyksys | Architecture d'Intérieur",
        description: "Découvrez l'ensemble de nos services d'architecture d'intérieur : conception sur-mesure, space planning, ébénisterie d'art, éclairage architectural et maîtrise d'œuvre.",
        url: '/services',
        image: '/services-hero.webp',
        preloadImage: '/services-hero.webp',
      };
    } else if (currentPath === '/a-propos' || currentPath === '/about') {
      return {
        title: "À Propos du Studio — Nyksys | Architecture d'Intérieur",
        description: "Découvrez l'histoire et la philosophie du studio d'architecture d'intérieur Nyksys. Élégance intemporelle, maîtrise des volumes et exigence artisanale.",
        url: '/a-propos',
        image: '/about-hero.webp',
        preloadImage: '/about-hero.webp?v=1',
      };
    } else if (currentPath === '/projets' || currentPath === '/projects') {
      return {
        title: "Projets & Réalisations — Nyksys | Architecture d'Intérieur",
        description: "Explorez les réalisations et résidences d'exception conçues par le studio Nyksys. Function meets elegance.",
        url: '/projets',
        image: '/projects-hero.webp',
        preloadImage: '/projects-hero.webp',
      };
    } else {
      return {
        title: "Nyksys — Architecture d'Intérieur | Résidences & Espaces d'Exception",
        description: "Là où commencent les intérieurs intemporels. Studio d'architecture d'intérieur haut de gamme : conception sur-mesure, space planning et résidences d'exception.",
        url: '/',
        image: '/hero-home.webp',
        preloadImage: '/hero-home.webp?v=2',
      };
    }
  }, [currentPath, activeProject]);

  const scrollToPageTop = (immediate = true) => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: immediate ? 'instant' : 'smooth' });
    }
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate });
    }
  };

  // Scroll to top unconditionally whenever currentPath changes
  useEffect(() => {
    scrollToPageTop(true);
  }, [currentPath]);

  const scrollToAnchor = (targetId: string) => {
    if (typeof document === 'undefined') return;
    const el = document.getElementById(targetId);
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { duration: 1.2, offset: 0 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      scrollToPageTop(false);
    }
  };

  const navigateTo = (pathOrSection: string) => {
    // 1. Direct Project Detail Page Navigation
    if (
      pathOrSection.startsWith('/projets/') ||
      pathOrSection.startsWith('/projects/') ||
      pathOrSection.startsWith('#/projets/') ||
      pathOrSection.startsWith('#/projects/')
    ) {
      const cleanPath = normalizePath(pathOrSection);
      if (currentPath !== cleanPath) {
        setCurrentPath(cleanPath);
        if (typeof window !== 'undefined') {
          window.history.pushState({}, '', cleanPath);
        }
      }
      scrollToPageTop(true);
      return;
    }

    // 2. Project slug alone (e.g., 'oakroom-residence')
    const possibleProject = getProjectBySlug(pathOrSection);
    if (possibleProject) {
      const projectPath = `/projets/${possibleProject.slug}`;
      if (currentPath !== projectPath) {
        setCurrentPath(projectPath);
        if (typeof window !== 'undefined') {
          window.history.pushState({}, '', projectPath);
        }
      }
      scrollToPageTop(true);
      return;
    }

    // 3. Contact page
    if (pathOrSection === 'contact' || pathOrSection === '/contact') {
      if (currentPath !== '/contact') {
        setCurrentPath('/contact');
        if (typeof window !== 'undefined') {
          window.history.pushState({}, '', '/contact');
        }
      }
      scrollToPageTop(true);
      return;
    }

    // 4. Services page
    if (pathOrSection === 'services' || pathOrSection === '/services') {
      if (currentPath !== '/services') {
        setCurrentPath('/services');
        if (typeof window !== 'undefined') {
          window.history.pushState({}, '', '/services');
        }
      }
      scrollToPageTop(true);
      return;
    }

    // 5. About page (/a-propos)
    if (pathOrSection === 'about' || pathOrSection === '/about' || pathOrSection === 'a-propos' || pathOrSection === '/a-propos') {
      if (currentPath !== '/a-propos') {
        setCurrentPath('/a-propos');
        if (typeof window !== 'undefined') {
          window.history.pushState({}, '', '/a-propos');
        }
      }
      scrollToPageTop(true);
      return;
    }

    // 6. Projects listing page (/projets)
    if (pathOrSection === 'projects' || pathOrSection === '/projects' || pathOrSection === 'projets' || pathOrSection === '/projets') {
      if (currentPath !== '/projets') {
        setCurrentPath('/projets');
        if (typeof window !== 'undefined') {
          window.history.pushState({}, '', '/projets');
        }
      }
      scrollToPageTop(true);
      return;
    }

    // 7. Navigating to home or section on home
    if (currentPath !== '/') {
      setCurrentPath('/');
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', '/');
      }
      // Wait for DOM to render home sections before scrolling
      setTimeout(() => {
        scrollToAnchor(pathOrSection);
      }, 100);
    } else {
      scrollToAnchor(pathOrSection);
    }
  };

  const handleNavigateHome = () => {
    if (currentPath !== '/') {
      setCurrentPath('/');
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', '/');
      }
      scrollToPageTop(true);
    } else {
      scrollToPageTop(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0d0c0b] text-neutral-900 selection:bg-neutral-800 selection:text-white font-sans">
      <Seo {...seoProps} />
      {/* Keyboard Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-2.5 focus:bg-amber-100 focus:text-neutral-950 focus:font-bold focus:shadow-2xl focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all rounded-md"
      >
        Passer au contenu principal
      </a>

      {/* Fixed Navigation Bar */}
      <Navbar
        onOpenContact={() => navigateTo('/contact')}
        onNavigate={navigateTo}
        onNavigateHome={handleNavigateHome}
        currentPath={currentPath}
      />

      {/* View 1: Dedicated Contact Page */}
      {currentPath === '/contact' ? (
        <main key="contact-page" id="main-content" tabIndex={-1} className="outline-none">
          <ContactPage
            onNavigateHomeSection={(sectionId) => navigateTo(sectionId)}
            onOpenContactModal={() => setIsContactModalOpen(true)}
          />
        </main>
      ) : currentPath === '/services' ? (
        /* View 2: Dedicated Services Page */
        <main key="services-page" id="main-content" tabIndex={-1} className="outline-none">
          <ServicesPage
            onNavigate={navigateTo}
            onOpenContact={() => navigateTo('/contact')}
          />
        </main>
      ) : (currentPath === '/a-propos' || currentPath === '/about') ? (
        /* View 3: Dedicated About Page */
        <main key="about-page" id="main-content" tabIndex={-1} className="outline-none">
          <AboutPage
            onNavigate={navigateTo}
            onOpenContact={() => navigateTo('/contact')}
          />
        </main>
      ) : activeProject ? (
        /* View 4: Dedicated Project Detail Page */
        <main key={`project-${activeProject.slug}`} id="main-content" tabIndex={-1} className="outline-none">
          <ProjectDetailPage
            project={activeProject}
            onNavigate={navigateTo}
            onOpenContact={() => navigateTo('/contact')}
          />
        </main>
      ) : (currentPath === '/projets' || currentPath === '/projects') ? (
        /* View 5: Dedicated Projects Page */
        <main key="projects-page" id="main-content" tabIndex={-1} className="outline-none">
          <ProjectsPage
            onNavigate={navigateTo}
            onOpenContact={() => navigateTo('/contact')}
          />
        </main>
      ) : (
        /* View 6: Home Page */
        <React.Fragment key="home-page">
          {/* Sticky Parallax Hero Section */}
          <HeroSection heroImage={heroImage} />

          {/* Subsequent Section that slides over the hero */}
          <main
            id="main-content"
            tabIndex={-1}
            className="relative z-20 bg-[#faf9f6] text-[#1a1918] rounded-none shadow-[0_-25px_60px_rgba(0,0,0,0.65)] border-t border-neutral-300/40 will-change-transform outline-none"
          >
            {/* First section: About Us editorial statement */}
            <AboutIntroSection id="about" />

            {/* Feels Like Home section with image containers */}
            <FeelsLikeHomeSection
              smallImage="/cheznous2.webp"
              largeImage="/cheznous.webp"
              onNavigateToAbout={() => navigateTo('/a-propos')}
            />

            {/* Full-width image with scroll de-zoom and sticky pin (1) */}
            <FullWidthParallaxSection
              id="fullwidth-showcase-1"
              imageSrc="/fullwidth-architecture.webp"
              zIndex="z-10"
            />

            {/* First overlay group: Projects Section */}
            <div className="relative z-20 bg-[#faf9f6] shadow-[0_-25px_60px_rgba(0,0,0,0.35)] border-t border-neutral-300/60">
              <ProjectsSection
                onNavigate={navigateTo}
                onNavigateToProjects={() => navigateTo('/projets')}
              />
            </div>

            {/* Second full-width image with scroll de-zoom and sticky pin (2) */}
            <FullWidthParallaxSection
              id="fullwidth-showcase-2"
              imageSrc="/fullwidth-second.webp"
              altText="Immersion architecturale et design d’intérieur"
              zIndex="z-10"
            />

            {/* Second overlay group that passes over the second sticky image */}
            <div className="relative z-20 bg-[#faf9f6] shadow-[0_-25px_60px_rgba(0,0,0,0.35)] border-t border-neutral-300/60">
              {/* Services Showcase Section */}
              <ServicesShowcaseSection onNavigateToServices={() => navigateTo('/services')} />
            </div>

            {/* Third full-width image with scroll de-zoom and sticky pin (3) */}
            <FullWidthParallaxSection
              id="fullwidth-showcase-3"
              imageSrc="/fullwidth-third.webp"
              altText="Séjour contemporain et patio extérieur paysager"
              zIndex="z-10"
            />

            {/* Third overlay group that passes over the third sticky image */}
            <div className="relative z-20 bg-[#faf9f6] shadow-[0_-25px_60px_rgba(0,0,0,0.35)] border-t border-neutral-300/60">
              {/* Testimonials Section */}
              <TestimonialsSection />

              {/* FAQ Section */}
              <FaqSection />

              {/* Full-width interactive Journey CTA with scroll de-zoom */}
              <JourneyCtaSection onOpenContact={() => navigateTo('/contact')} />

              {/* Studio Footer */}
              <Footer
                onOpenContact={() => navigateTo('/contact')}
                onNavigate={navigateTo}
              />
            </div>
          </main>
        </React.Fragment>
      )}

      {/* Optional Quick Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
