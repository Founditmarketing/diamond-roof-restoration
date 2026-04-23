import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWidget } from './components/FloatingWidget';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { LocationPage } from './pages/LocationPage';
import { AboutPage } from './pages/AboutPage';
import { ServicePage } from './pages/ServicePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { EmploymentPage } from './pages/EmploymentPage';
import { SalesApplicationPage, LaborApplicationPage } from './pages/ApplicationPages';

interface FlyCoords {
  fromX: number;
  fromY: number;
  fromW: number;
  toX: number;
  toY: number;
  toW: number;
}

export default function App() {
  // 0 = splash showing, 1 = logo flying, 2 = done
  const [phase, setPhase] = useState(() => {
    return sessionStorage.getItem('splashDone') ? 2 : 0;
  });
  const [flyCoords, setFlyCoords] = useState<FlyCoords | null>(null);
  const splashLogoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Measure splash logo's exact current position (center of screen)
      const splashRect = splashLogoRef.current?.getBoundingClientRect();

      // Measure header logo's exact position — select by device type
      const isMob = window.matchMedia('(max-width: 767px)').matches;
      const targetEl = document.getElementById(
        isMob ? 'header-logo-mobile' : 'header-logo-desktop'
      );
      const targetRect = targetEl?.getBoundingClientRect();

      if (splashRect && targetRect && targetRect.width > 0) {
        setFlyCoords({
          fromX: splashRect.left,
          fromY: splashRect.top,
          fromW: splashRect.width,
          toX: targetRect.left,
          toY: targetRect.top,
          toW: targetRect.width,
        });
        setPhase(1);
      } else {
        // Fallback: skip directly to done
        setPhase(2);
        sessionStorage.setItem('splashDone', 'true');
      }
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    setPhase(2);
    sessionStorage.setItem('splashDone', 'true');
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-navy text-white selection:bg-cyan selection:text-white">

      {/* Dark full-screen overlay — fades away as logo flies */}
      <AnimatePresence>
        {phase < 2 && (
          <motion.div
            key="splash-bg"
            className="fixed inset-0 z-[9998] bg-[#0a1628]"
            animate={{ opacity: phase >= 1 ? 0 : 1 }}
            transition={{ duration: 0.9, ease: 'easeInOut', delay: phase >= 1 ? 0.1 : 0 }}
          />
        )}
      </AnimatePresence>

      {/* Phase 0: Logo sitting centered on splash screen */}
      {phase === 0 && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
          <motion.img
            ref={splashLogoRef}
            src="/diamondrooflogo.webp"
            alt="Diamond Roof Restoration"
            className="w-44"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      )}

      {/* Phase 1: Single logo physically flies from splash center → header position */}
      {phase === 1 && flyCoords && (
        <motion.img
          src="/diamondrooflogo.webp"
          alt=""
          aria-hidden="true"
          className="fixed top-0 left-0 z-[9999] pointer-events-none"
          initial={{
            x: flyCoords.fromX,
            y: flyCoords.fromY,
            width: flyCoords.fromW,
          }}
          animate={{
            x: flyCoords.toX,
            y: flyCoords.toY,
            width: flyCoords.toW,
          }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          onAnimationComplete={handleAnimationComplete}
        />
      )}

      {/* Header — always mounted so getBoundingClientRect works on load */}
      <div className="relative z-50">
        <AnnouncementBar />
        <Header splashDone={phase >= 2} />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services/:serviceId" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/service-areas/:cityId" element={<LocationPage />} />
        <Route path="/employment" element={<EmploymentPage />} />
        <Route path="/employment/sales" element={<SalesApplicationPage />} />
        <Route path="/employment/labor" element={<LaborApplicationPage />} />
      </Routes>

      <Footer />
      <FloatingWidget />
    </div>
    </BrowserRouter>
  );
}
