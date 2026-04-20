import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ChevronRight, ChevronLeft, ArrowRight, Phone, X } from 'lucide-react';

const PROJECT_IMAGES = [
  { src: '/diamondroofgallery14.jpg', alt: 'Commercial flat roof restoration' },
  { src: '/diamondroofgallery10.jpg', alt: 'Industrial membrane coating' },
  { src: '/diamondroofgallery12.jpg', alt: 'Metal roof spray foam application' },
  { src: '/diamondroofgallery18.jpg', alt: 'Energy reflective TPO roofing' },
  { src: '/diamondroofgallery5.jpg', alt: 'Seamless silicone waterproofing' },
  { src: '/diamondroofresidential1.jpg', alt: 'Premium residential asphalt shingle' },
  { src: '/diamondroofgallery11.jpg', alt: 'Heavy commercial warehouse roof' },
  { src: '/diamondroofgallery15.jpg', alt: 'Multi-family residential complex roof' },
  { src: '/diamondroofresidential3.jpg', alt: 'Residential metal roof transition' },
  { src: '/diamondroofgallery22.jpg', alt: 'Ponding water mitigation' },
  { src: '/diamondroofgallery19.jpg', alt: 'TPO membrane welding' },
  { src: '/diamondroofgallery21.jpg', alt: 'Spray polyurethane foam expansion' },
  { src: '/diamondroofresidential2.jpg', alt: 'Shingle rejuvenation treatment' },
  { src: '/diamondroofgallery4.jpg', alt: 'Parapet wall flashing repair' },
  { src: '/diamondroofgallery20.jpg', alt: 'Industrial facility skylight sealing' },
  { src: '/diamondroofgallery23.jpg', alt: 'Completed monolithic membrane' },
  { src: '/diamondroofresidential4.jpg', alt: 'Home exterior roof restoration' },
  { src: '/diamondroofgallery9.jpg', alt: 'Structural fabric embedment' },
  { src: '/diamondroofresidential5.jpg', alt: 'Residential architectural shingle' },
];

export function ProjectsPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? PROJECT_IMAGES.length - 1 : lightboxIndex - 1);
    }
  };

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === PROJECT_IMAGES.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  useEffect(() => {
    document.title = "Our Projects | Diamond Roof Restorations";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-navy relative pt-32 lg:pt-32 pb-0 overflow-hidden text-white">
      {/* Background element */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay"></div>

      {/* --- SECTION 1: HERO --- */}
      <section className="relative w-full flex flex-col justify-center items-center text-center px-6 pb-4 pt-24">
        <div className="absolute inset-0 bg-[url('/diamondroofgallery14.jpg')] bg-cover bg-center bg-no-repeat opacity-20 -z-10 blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40 -z-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[150px] -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl z-10 mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-[10px] font-bold uppercase tracking-[2px] mb-6 shadow-[0_0_15px_rgba(64,145,177,0.2)]">
            <ShieldCheck className="w-3.5 h-3.5" />
            Proven Results
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[70px] font-display font-extrabold text-white mb-8 uppercase tracking-tight leading-[1.05] text-balance">
            Our <span className="text-cyan">Project Gallery</span>
          </h1>
          <p className="text-ghost/90 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-light">
            Decades of combined experience scaling everything from massive commercial flat roofs to highly detailed residential restorations. See the Diamond Standard in action.
          </p>
        </motion.div>
      </section>

      {/* --- SECTION 2: BENTO GRID GALLERY --- */}
      <section className="pt-4 pb-24 relative overflow-hidden bg-navy min-h-screen">
        <div className="w-full px-4 sm:px-6 md:px-8 relative z-10 max-w-full">
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 auto-rows-[200px] grid-flow-dense">
            {PROJECT_IMAGES.map((img, idx) => {
              // Creating a dynamic sizing pattern for the grid
              const isLarge = idx % 5 === 0;  // Every 5th image is 2x2
              const isTall = idx % 7 === 3;   // Every 7th image is tall (1x2)
              const gridSpan = isLarge ? 'md:col-span-2 md:row-span-2' : isTall ? 'md:col-span-1 md:row-span-2' : 'md:col-span-1 md:row-span-1';
              
              return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                onClick={() => setLightboxIndex(idx)}
                className={`relative overflow-hidden rounded-xl border border-white/10 group cursor-pointer bg-black/20 ${gridSpan}`}
              >
                {/* Subtle Cyan Back-Glow on Hover */}
                <div className="absolute inset-0 bg-cyan/0 group-hover:bg-cyan/10 transition-colors duration-500 z-10 pointer-events-none" />
                
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
              </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- SECTION 3: CTA --- */}
      <section className="py-24 relative bg-cyan overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-navy/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-navy uppercase tracking-tight mb-6 leading-none">
            Ready to secure your future?
          </h2>
          <p className="text-navy/80 font-bold text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
            Book a free, no-obligation inspection with our regional experts today. We deploy rapidly across the Southeast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="w-full sm:w-auto bg-navy text-white px-10 py-5 rounded text-[14px] font-extrabold uppercase tracking-[2px] shadow-2xl hover:bg-navy/90 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group">
              Schedule Your Inspection
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="tel:9122076273" className="w-full sm:w-auto bg-transparent border-2 border-navy text-navy hover:bg-navy/10 px-10 py-4.5 rounded text-[14px] font-extrabold uppercase tracking-[2px] transition-all flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Call (912) 207-6273
            </a>
          </div>
        </div>
      </section>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy/95 backdrop-blur-md p-4 sm:p-12"
            onClick={() => setLightboxIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50"
              onClick={() => setLightboxIndex(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              className="absolute left-2 sm:left-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-50"
              onClick={prevImage}
            >
              <ChevronLeft className="w-10 h-10 sm:w-16 sm:h-16" />
            </button>

            <img 
              src={PROJECT_IMAGES[lightboxIndex].src} 
              alt={PROJECT_IMAGES[lightboxIndex].alt} 
              className="max-w-full max-h-full object-contain rounded drop-shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              className="absolute right-2 sm:right-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-50"
              onClick={nextImage}
            >
              <ChevronRight className="w-10 h-10 sm:w-16 sm:h-16" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
