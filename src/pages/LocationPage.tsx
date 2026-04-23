import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, ShieldCheck, ChevronRight, Droplets, Sun, Wind, CheckCircle2, Factory, Waves, ArrowRight, CloudRain } from 'lucide-react';

const SERVICE_AREAS = [
  { 
    id: 'baxley-ga', 
    city: 'Baxley', 
    state: 'GA', 
    description: 'Expert commercial and residential roof restoration serving the greater Baxley area. We protect local properties from intense Georgia sun and driving rain.',
    weatherContext: 'Inland Georgia experiences relentless summer heat and sudden, torrential thunderstorms. Our UV-reflective silicone coatings and seamless single-ply membranes are engineered to expand and contract with the Baxley climate, preventing thermal shock cracking while keeping building interiors cooler.',
    weatherIcon: Sun,
    image: '/diamondroofgallery10.jpg'
  },
  { 
    id: 'blackshear-ga', 
    city: 'Blackshear', 
    state: 'GA', 
    description: 'Delivering top-tier membrane and asphalt shingle roof solutions to Blackshear. Engineered to withstand harsh weather patterns without requiring a complete tear-off.',
    weatherContext: 'Blackshear properties require roofing networks capable of enduring high humidity and seasonal squalls. Our advanced waterproofing systems penetrate deep into existing commercial roofs, eliminating pooling water vulnerabilities before they cascade into interior asset damage.',
    weatherIcon: Droplets,
    image: '/diamondroofgallery6.jpg'
  },
  { 
    id: 'brunswick-ga', 
    city: 'Brunswick', 
    state: 'GA', 
    description: 'Specialized coastal roof waterproofing and restoration for Brunswick businesses and homeowners facing heavy sea-air humidity and tropical storms.',
    weatherContext: 'As a coastal city, Brunswick commercial properties face aggressive salt-air corrosion, high-velocity wind events, and massive atmospheric moisture. We deploy marine-grade fabric reinforced roofing and localized spray foam systems specifically formulated to survive Atlantic coastal dynamics.',
    weatherIcon: Waves,
    image: '/diamondroofgallery18.jpg'
  },
  { 
    id: 'hilton-head-sc', 
    city: 'Hilton Head', 
    state: 'SC', 
    description: 'Premium roof coating and restoration tailored for Hilton Head`s unique coastal climate, preserving property value against salt air and hurricane seasons.',
    weatherContext: 'Hilton Head demands premium aesthetic continuity paired with brute-force Atlantic storm resistance. Our fluid-applied acrylic and silicone restorations lock out seasonal hurricane impacts and harsh sea spray while adhering instantly to aging metal, TPO, and EPDM flat roofs.',
    weatherIcon: Wind,
    image: '/diamondroofgallery2.jpg'
  },
  { 
    id: 'hinesville-ga', 
    city: 'Hinesville', 
    state: 'GA', 
    description: 'Trusted roofing contractor providing seamless spray foam and single-ply roofing installations to secure Hinesville commercial and residential properties.',
    weatherContext: 'Hinesville\'s mix of coastal proximity and inland heat requires highly adaptive structural fortification. We utilize specialized commercial roof waterproofing and metal roof restoration protocols to seal seams, stop rust, and halt leaks during peak summer storm seasons.',
    weatherIcon: Sun,
    image: '/diamondroofgallery5.jpg'
  },
  { 
    id: 'jacksonville-fl', 
    city: 'Jacksonville', 
    state: 'FL', 
    description: 'Professional commercial roof restoration in Jacksonville. We specialize in flat roof waterproofing to combat extreme Florida heat and tropical moisture.',
    weatherContext: 'Jacksonville roofs battle relentless solar radiation 300 days a year, punctuated by extreme tropical deluges. Our white-reflective TPO and Spray Foam roofing systems deflect up to 85% of UV rays, massively cutting Florida utility costs while sealing out driving rain.',
    weatherIcon: Sun,
    image: '/diamondroofgallery12.jpg'
  },
  { 
    id: 'jesup-ga', 
    city: 'Jesup', 
    state: 'GA', 
    description: 'Our headquarters. Proudly delivering unmatched roofing craftsmanship and 24/7 service to our neighbors in Jesup and surrounding communities.',
    weatherContext: 'As our absolute home base, we understand Jesup\'s exact geographic stress factors. From sudden temperature plummets in winter to sweltering summer thermal loading, our proprietary restoration coatings ensure your facility remains totally operational, totally dry, and under a decade-long warranty.',
    weatherIcon: ShieldCheck,
    image: '/diamondroofgallery14.jpg'
  },
  { 
    id: 'pooler-ga', 
    city: 'Pooler', 
    state: 'GA', 
    description: 'Reliable roof leak repair and comprehensive restoration for the rapidly expanding commercial and industrial sectors across Pooler.',
    weatherContext: 'Pooler\'s massive industrial growth means large-scale warehousing and manufacturing facilities are dealing with expansive flat roofs. We execute massive square-footage membrane and waterproofing restorations that halt leaks instantly without disrupting daily supply-chain operations.',
    weatherIcon: Factory,
    image: '/diamondroofgallery11.jpg'
  },
];

const SERVICES = [
  "Commercial Roof Waterproofing",
  "Metal Roof Restoration",
  "Fabric Reinforced Roofing",
  "Spray Foam Systems",
  "Single Ply / TPO Systems",
  "Emergency Leak Repairs"
];

export function LocationPage() {
  const { cityId } = useParams();
  
  const locationData = SERVICE_AREAS.find(area => area.id === cityId);

  // Dynamic SEO Document Header handling
  useEffect(() => {
    if (locationData) {
      document.title = `Commercial Roof Restoration in ${locationData.city}, ${locationData.state} | Diamond Roof R.`;
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', locationData.description);
      }
    }
  }, [locationData]);

  if (!locationData) {
    return <Navigate to="/" replace />;
  }

  const WeatherIcon = locationData.weatherIcon;

  return (
    <main className="min-h-screen bg-navy relative pt-40 lg:pt-48 pb-0 overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay"></div>

      {/* --- SECTION 1: HERO --- */}
      <section className="container mx-auto px-6 relative z-10 max-w-7xl pb-16">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-ghost/50 mb-10">
          <Link to="/" className="hover:text-cyan transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ghost">Areas</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-cyan">{locationData.city}, {locationData.state}</span>
        </div>

        <div className="max-w-5xl">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-[10px] font-bold uppercase tracking-[2px] mb-6 shadow-[0_0_15px_rgba(64,145,177,0.2)]">
              <MapPin className="w-3.5 h-3.5 animate-bounce" />
              Verified Service Zone
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-[85px] font-display font-extrabold text-white mb-8 uppercase tracking-tight leading-[1]">
              Roof Restorations in <br/>
              <span className="text-cyan">{locationData.city}, {locationData.state}</span>
            </h1>
            
            <p className="text-ghost/90 text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl">
              {locationData.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
              <Link to="/contact" className="w-full sm:w-auto shimmer-btn bg-cyan text-white px-10 py-5 rounded text-[14px] font-extrabold uppercase tracking-[2px] shadow-[0_0_20px_rgba(64,145,177,0.4)] hover:bg-cyan/90 transition-all text-center flex justify-center items-center gap-2 group">
                Request {locationData.city} Estimate
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="tel:9122076273" className="w-full sm:w-auto bg-white/5 border border-white/20 text-white hover:border-cyan hover:bg-cyan/10 px-10 py-5 rounded text-[14px] font-extrabold uppercase tracking-[2px] transition-all flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-cyan" /> Call (912) 207-6273
              </a>
            </div>
            <div className="text-[11px] text-ghost/50 uppercase tracking-widest font-bold ml-1 text-center sm:text-left mt-4 sm:mt-0">
              • Fast Commercial & Residential Dispatch
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: WEATHER & REGIONAL MASTERY --- */}
      <section className="pb-24 relative border-b border-white/5">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 items-start relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-cyan before:to-transparent pl-8">
            
            <div className="lg:col-span-4 flex flex-col gap-4 pt-2">
              <div className="flex items-center gap-4">
                <CloudRain className="w-8 h-8 text-cyan" />
                <div className="text-[10px] text-ghost/50 uppercase tracking-widest font-bold">Local Climate Defense</div>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white uppercase tracking-tight leading-[1.1]">
                Engineered for <span className="text-cyan">{locationData.city} Weather</span>
              </h2>
            </div>

            <div className="lg:col-span-8">
               <p className="text-lg md:text-xl text-ghost/80 font-light leading-relaxed max-w-3xl">
                 {locationData.weatherContext}
               </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 3: LOCALIZED SERVICES GRID --- */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white uppercase tracking-tight mb-4">
              Our Services in <span className="text-cyan">{locationData.city}</span>
            </h2>
            <p className="text-ghost/80 text-lg max-w-2xl mx-auto">
              We provide complete lifecycle management for commercial and industrial roofs across the entire {locationData.city} sector. No tearing off required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <div 
                key={idx}
                className="bg-navy/80 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/5 hover:border-cyan/40 transition-all group shadow-xl hover:shadow-[0_10px_40px_rgba(64,145,177,0.15)] flex flex-col items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center text-cyan group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-white font-bold text-lg uppercase tracking-wide leading-snug">
                  {service} <br/><span className="text-ghost/60 text-sm">{locationData.state}</span>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: LOCAL CTA --- */}
      <section className="py-24 relative bg-cyan">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-navy uppercase tracking-tight mb-6 leading-none">
            Secure Your {locationData.city} Property Today.
          </h2>
          <p className="text-navy/80 font-bold text-xl mb-10 max-w-2xl mx-auto">
            Book a free, no-obligation inspection anywhere in {locationData.city}, {locationData.state}. We deploy rapidly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-navy text-white px-10 py-5 rounded text-[14px] font-extrabold uppercase tracking-[2px] shadow-2xl hover:bg-navy/90 hover:-translate-y-1 transition-all">
              Schedule Local Inspection
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
