import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBanner } from './components/TrustBanner';
import { ServicesGrid } from './components/ServicesGrid';
import { BeforeAfter } from './components/BeforeAfter';
import { ReviewsCarousel } from './components/ReviewsCarousel';
import { ReactiveMap } from './components/ReactiveMap';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { FloatingWidget } from './components/FloatingWidget';

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
  const [phase, setPhase] = useState(0);
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
      }
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
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
          onAnimationComplete={() => setPhase(2)}
        />
      )}

      {/* Header — always mounted so getBoundingClientRect works on load */}
      <div className="relative z-50">
        <AnnouncementBar />
        <Header splashDone={phase >= 2} />
      </div>

      <main>
        <Hero />
        <TrustBanner />
        <ServicesGrid />
        <BeforeAfter />
        <ReviewsCarousel />
        <ReactiveMap />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingWidget />
    </div>
  );
}
