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
  return (
    <div className="min-h-screen bg-navy text-white selection:bg-cyan selection:text-white">
      <AnnouncementBar />
      <Header />
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
