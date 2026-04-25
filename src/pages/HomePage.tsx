import { Hero } from '../components/Hero';
import { TrustBanner } from '../components/TrustBanner';
import { ServicesGrid } from '../components/ServicesGrid';
import { BeforeAfter } from '../components/BeforeAfter';
import { ReviewsCarousel } from '../components/ReviewsCarousel';
import { ReactiveMap } from '../components/ReactiveMap';
import { FAQ } from '../components/FAQ';


export function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBanner />
      <ServicesGrid />
      <BeforeAfter />
      <ReviewsCarousel />
      <ReactiveMap />
      <FAQ />

    </main>
  );
}
