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
  const [phase, setPhase] = useState(0);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    window.addEventListener('resize', handleResize);
    
    // Phase 1: Logo flies to header, Background dissolves simultaneously
    const timer1 = setTimeout(() => {
      setPhase(1);
    }, 1500);
    
    return () => {
      clearTimeout(timer1);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white selection:bg-cyan selection:text-white">
      
      {/* Background Dissolve Overlay */}
      <AnimatePresence>
        {phase === 0 && (
          <motion.div 
            className="fixed inset-0 z-[9998] bg-navy"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {/* Centered Splash Logo */}
      <AnimatePresence>
        {phase === 0 && (
          <motion.div 
            className="fixed inset-0 z-[9999] flex items-center justify-center p-6 pointer-events-none"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {isMobile ? (
              <motion.img 
                layoutId="main-logo-mobile"
                transition={{ layout: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } }}
                src="/diamondrooflogo.webp"
                alt="Diamond Roof Restoration Mobile"
                className="w-48 relative z-10"
              />
            ) : (
              <motion.img 
                layoutId="main-logo-desktop"
                transition={{ layout: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } }}
                src="/diamondrooflogo.webp"
                alt="Diamond Roof Restoration Desktop"
                className="w-64 relative z-10"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header (Mounted at Phase 1 to trigger layoutId flight) */}
      {phase >= 1 && (
        <div className="relative z-[10000]">
          <AnnouncementBar />
          <Header />
        </div>
      )}

      {/* Underlying UI (Mounted immediately to resolve entrance animations under curtain) */}
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
