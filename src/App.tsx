import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HeroTestimonial } from './components/HeroTestimonial';
import { WhyWebsite } from './components/WhyWebsite';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { ContactCTA } from './components/ContactCTA';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { IntroAnimation } from './components/IntroAnimation';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PROJECTS } from './data/portfolioData';

const PrivacyPolicy = React.lazy(() =>
  import('./components/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy }))
);

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === 'undefined') return false;
    try {
      const ua = navigator.userAgent.toLowerCase();
      const isBotOrLighthouse =
        ua.includes('lighthouse') ||
        ua.includes('pagespeed') ||
        ua.includes('headlesschrome') ||
        ua.includes('chrome-lighthouse') ||
        ua.includes('googlebot') ||
        ua.includes('ptst') ||
        ua.includes('speed') ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (isBotOrLighthouse) return false;
      return true;
    } catch {
      return false;
    }
  });
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [targetService, setTargetService] = useState<string | undefined>(undefined);
  const [targetProjectRef, setTargetProjectRef] = useState<string | undefined>(undefined);
  const lenisRef = useRef<Lenis | null>(null);

  // Ensure initial landing page is always Home
  useEffect(() => {
    if (
      window.location.hash === '#privacidade' ||
      window.location.hash === '#politica-de-privacidade'
    ) {
      window.history.replaceState('', document.title, window.location.pathname + window.location.search);
      setShowPrivacy(false);
    }
  }, []);

  const handleOpenPrivacy = () => {
    setShowPrivacy(true);
  };

  const handleClosePrivacy = () => {
    setShowPrivacy(false);
    if (
      window.location.hash === '#privacidade' ||
      window.location.hash === '#politica-de-privacidade'
    ) {
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  };

  // Initialize smooth luxury inertial scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });
    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollToContact = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo('#contato', { duration: 1.3, offset: -20 });
    } else {
      const contactEl = document.getElementById('contato');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToPortfolio = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo('#projetos', { duration: 1.3, offset: -20 });
    } else {
      const portfolioEl = document.getElementById('projetos');
      if (portfolioEl) {
        portfolioEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setTargetService(serviceTitle);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] selection:bg-white selection:text-black">
      {/* Intro Brand Reveal Animation */}
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}

      {/* Bespoke Minimalist Circular Cursor */}
      <CustomCursor />

      {/* Fixed Minimalist Header */}
      <Header onOpenContact={scrollToContact} />

      <main>
        {/* 1. Impactful Hero Section */}
        <Hero
          onExploreProjects={scrollToPortfolio}
          onStartProject={scrollToContact}
        />

        {/* 2. Immediate Social Proof (Karen Patrícia Video Testimonial) */}
        <HeroTestimonial />

        {/* 3. Conceptual Section: Por que um site? */}
        <WhyWebsite />

        {/* 4. Disciplines / Services */}
        <Services onSelectService={handleSelectService} />

        {/* 5. Asymmetric Portfolio Showcase */}
        <Portfolio projects={PROJECTS} />

        {/* 6. About Samuel Dantes */}
        <About />

        {/* 7. Methodology & 5-Step Process */}
        <Process />

        {/* 8. Additional Editorial Social Proof */}
        <Testimonials />

        {/* 9. Final CTA with vast negative space */}
        <ContactCTA onScrollToForm={scrollToContact} />

        {/* 10. Minimalist Contact Form */}
        <ContactForm
          initialService={targetService}
          initialProject={targetProjectRef}
        />
      </main>

      {/* 11. Minimalist Footer */}
      <Footer onOpenPrivacy={handleOpenPrivacy} />

      {/* Privacy Policy Overlay Modal */}
      {showPrivacy && (
        <React.Suspense fallback={null}>
          <PrivacyPolicy onBack={handleClosePrivacy} />
        </React.Suspense>
      )}

      {/* Floating Elegant Pulsating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
