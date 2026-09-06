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
import { updatePageSeo } from './utils/seo';
import { useLenis } from './hooks/useLenis';

export default function App() {
  const lenisRef = useLenis();
  const heroImage = '/hero-home.webp?v=2';
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (pathname.startsWith('/projects/') || hash.startsWith('#/projects/')) {
        return pathname.startsWith('/projects/') ? pathname : hash.replace(/^#/, '');
      }
      if (pathname === '/contact' || hash === '#contact' || hash === '#/contact') {
        return '/contact';
      }
      if (pathname === '/services' || hash === '#services' || hash === '#/services') {
        return '/services';
      }
      if (pathname === '/about' || hash === '#about' || hash === '#/about') {
        return '/about';
      }
      if (pathname === '/projects' || hash === '#projects' || hash === '#/projects') {
        return '/projects';
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
      if (pathname.startsWith('/projects/') || hash.startsWith('#/projects/')) {
        setCurrentPath(pathname.startsWith('/projects/') ? pathname : hash.replace(/^#/, ''));
      } else if (pathname === '/contact' || hash === '#contact' || hash === '#/contact') {
        setCurrentPath('/contact');
      } else if (pathname === '/services' || hash === '#services' || hash === '#/services') {
        setCurrentPath('/services');
      } else if (pathname === '/about' || hash === '#about' || hash === '#/about') {
        setCurrentPath('/about');
      } else if (pathname === '/projects' || hash === '#projects' || hash === '#/projects') {
        setCurrentPath('/projects');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const activeProject = currentPath.startsWith('/projects/')
    ? getProjectBySlug(currentPath.replace('/projects/', '').replace(/^\//, ''))
    : undefined;

  // Set page meta tags and OpenGraph dynamically based on route for optimal SEO and social sharing
  useEffect(() => {
    if (activeProject) {
      updatePageSeo({
        title: `${activeProject.fullTitle} — Nyksys | Architecture d'Intérieur`,
        description: `${activeProject.fullTitle} : ${activeProject.infoText.slice(0, 150)}...`,
        url: `/projects/${activeProject.slug}`,
        image: activeProject.heroImage || activeProject.highlightImage || '/hero-home.webp',
        type: 'article',
      });
    } else if (currentPath === '/contact') {
      updatePageSeo({
        title: "Contact — Studio d'Architecture Nyksys | Place Vendôme, Paris",
        description: "Prenez contact avec les architectes du studio Nyksys (Place Vendôme, Paris). Conception d'espaces intérieurs d'exception et suivi sur-mesure de vos projets résidentiels.",
        url: '/contact',
        image: '/contact-hero.webp',
      });
    } else if (currentPath === '/services') {
      updatePageSeo({
        title: "Services & Savoir-Faire — Nyksys | Architecture d'Intérieur",
        description: "Découvrez l'ensemble de nos services d'architecture d'intérieur : conception sur-mesure, space planning, ébénisterie d'art, éclairage architectural et maîtrise d'œuvre.",
        url: '/services',
        image: '/services-hero.webp',
      });
    } else if (currentPath === '/about') {
      updatePageSeo({
        title: "À Propos du Studio — Nyksys | Architecture d'Intérieur",
        description: "Découvrez l'histoire et la philosophie du studio d'architecture d'intérieur Nyksys. Élégance intemporelle, maîtrise des volumes et exigence artisanale.",
        url: '/about',
        image: '/about-hero.webp',
      });
    } else if (currentPath === '/projects') {
      updatePageSeo({
        title: "Projets & Réalisations — Nyksys | Architecture d'Intérieur",
        description: "Explorez les réalisations et résidences d'exception conçues par le studio Nyksys. Function meets elegance.",
        url: '/projects',
        image: '/projects-hero.webp',
      });
    } else {
      updatePageSeo({
        title: "Nyksys — Architecture d'Intérieur | Résidences & Espaces d'Exception",
        description: "Là où commencent les intérieurs intemporels. Studio d'architecture d'intérieur haut de gamme : conception sur-mesure, space planning et résidences d'exception.",
        url: '/',
        image: '/hero-home.webp',
      });
    }
  }, [currentPath, activeProject]);

  const scrollToPageTop = (immediate = true) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate });
    } else {
      window.scrollTo({ top: 0, behavior: immediate ? 'instant' : 'smooth' });
    }
  };

  const scrollToAnchor = (targetId: string) => {
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
    if (pathOrSection.startsWith('/projects/') || pathOrSection.startsWith('#/projects/')) {
      const cleanPath = pathOrSection.replace(/^#/, '');
      if (currentPath !== cleanPath) {
        setCurrentPath(cleanPath);
        window.history.pushState({}, '', cleanPath);
      }
      scrollToPageTop(true);
      return;
    }

    // 2. Project slug alone (e.g., 'oakroom-residence')
    const possibleProject = getProjectBySlug(pathOrSection);
    if (possibleProject) {
      const projectPath = `/projects/${possibleProject.slug}`;
      if (currentPath !== projectPath) {
        setCurrentPath(projectPath);
        window.history.pushState({}, '', projectPath);
      }
      scrollToPageTop(true);
      return;
    }

    // 3. Contact page
    if (pathOrSection === 'contact' || pathOrSection === '/contact') {
      if (currentPath !== '/contact') {
        setCurrentPath('/contact');
        window.history.pushState({}, '', '/contact');
      }
      scrollToPageTop(true);
      return;
    }

    // 4. Services page
    if (pathOrSection === 'services' || pathOrSection === '/services') {
      if (currentPath !== '/services') {
        setCurrentPath('/services');
        window.history.pushState({}, '', '/services');
      }
      scrollToPageTop(true);
      return;
    }

    // 5. About page
    if (pathOrSection === 'about' || pathOrSection === '/about') {
      if (currentPath !== '/about') {
        setCurrentPath('/about');
        window.history.pushState({}, '', '/about');
      }
      scrollToPageTop(true);
      return;
    }

    // 6. Projects listing page
    if (pathOrSection === 'projects' || pathOrSection === '/projects') {
      if (currentPath !== '/projects') {
        setCurrentPath('/projects');
        window.history.pushState({}, '', '/projects');
      }
      scrollToPageTop(true);
      return;
    }

    // 7. Navigating to home or section on home
    if (currentPath !== '/') {
      setCurrentPath('/');
      window.history.pushState({}, '', '/');
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
      window.history.pushState({}, '', '/');
      scrollToPageTop(true);
    } else {
      scrollToPageTop(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0d0c0b] text-neutral-900 selection:bg-neutral-800 selection:text-white font-sans">
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
      ) : currentPath === '/about' ? (
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
      ) : currentPath === '/projects' ? (
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
                onNavigateToProjects={() => navigateTo('/projects')}
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
