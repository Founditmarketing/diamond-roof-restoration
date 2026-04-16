import { useState, useEffect } from 'react';
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

export default function App() {
  // phase 0 = splash visible, phase 1 = splash gone
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setPhase(1), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white selection:bg-cyan selection:text-white">

      {/* Splash Screen — completely self-contained, just fades out, no layoutId */}
      <AnimatePresence>
        {phase === 0 && (
          <motion.div
            key="splash"
            className="fixed inset-0 z-[9999] bg-[#0a1628] flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: 'easeInOut' }}
          >
            <motion.img
              src="/diamondrooflogo.webp"
              alt="Diamond Roof Restoration"
              className="w-44 sm:w-56"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header — logo fades in independently with no shared element tracking */}
      <div className="relative z-[10000]">
        <AnnouncementBar />
        <Header splashDone={phase >= 1} />
      </div>

      {/* Main content */}
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
