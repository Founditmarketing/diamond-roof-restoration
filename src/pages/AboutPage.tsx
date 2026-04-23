import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, ChevronRight, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

export function AboutPage() {
  useEffect(() => {
    document.title = "About Us | Diamond Roof Restorations";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-navy relative pt-40 lg:pt-48 pb-0 overflow-hidden text-white">
      {/* Background element */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay"></div>

      {/* --- SECTION 1: HERO --- */}
      <section className="relative w-full min-h-[50vh] lg:min-h-[60vh] flex flex-col justify-center items-center text-center px-6 pb-12">
        
        <div className="absolute inset-0 bg-[url('/diamondroofgallery10.jpg')] bg-cover bg-center bg-no-repeat opacity-20 -z-10 blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40 -z-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[150px] -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-[10px] font-bold uppercase tracking-[2px] mb-6 shadow-[0_0_15px_rgba(64,145,177,0.2)]">
            <ShieldCheck className="w-3.5 h-3.5" />
            Our Legacy
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[90px] font-display font-extrabold text-white mb-8 uppercase tracking-tight leading-[1]">
            Protecting What <br />
            <span className="text-cyan">Matters Most.</span>
          </h1>
          <p className="text-ghost/90 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-light">
            We are Georgia’s premier commercial and residential roof restoration specialists. Relentless engineering, uncompromising quality, and decades of leak-free protection.
          </p>
        </motion.div>
      </section>

      {/* --- SECTION 2: BODY CONTENT --- */}
      <section className="pt-12 pb-24 relative overflow-hidden bg-navy">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image Block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
            >
              <div className="absolute inset-0 bg-cyan/20 blur-[80px] -z-10 rounded-full mix-blend-screen" />
              <img 
                src="/diamondroofgallery21.jpg" 
                alt="Diamond Roof Restorations Team" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent z-10" />
              
              <div className="absolute bottom-8 left-8 z-20">
                <div className="text-4xl font-display font-extrabold text-white mb-1">10+ Years</div>
                <div className="text-cyan font-bold uppercase tracking-widest text-[11px]">Combined Regional Experience</div>
              </div>
            </motion.div>

            {/* Right Text Block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white uppercase tracking-tight mb-8">
                The <span className="text-cyan">Diamond</span> Standard.
              </h2>
              
              <div className="space-y-6 text-ghost/80 text-lg leading-relaxed font-light">
                <p>
                  At Diamond Roof Restorations, we believe that tearing off a perfectly functional—but leaking—roof is a massive waste of your capital and environmental resources. Our mission is to restore, fortify, and extend the life of existing commercial and residential roofing systems.
                </p>
                <p>
                  Operating heavily throughout Georgia, South Carolina, and Florida, we specialize in high-performance acrylic, silicone, and single-ply membrane installations. We don't just patch leaks; we completely re-engineer the waterproof barrier of your facility to withstand extreme Southeast weather dynamics.
                </p>
                <p>
                  Our crews are highly trained experts focused strictly on non-disruptive processes. This means your facility, employees, and operations continue running smoothly while we secure the roof overhead.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 bg-white/5 border border-white/10 p-6 rounded-2xl">
                {[
                  "Zero Operational Downtime",
                  "Energy-Reflective Coatings",
                  "10-20 Year Warranties",
                  "Fraction of Replacement Cost"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan flex-shrink-0" />
                    <span className="font-bold text-sm tracking-wide text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- SECTION 3: CTA --- */}
      <section className="py-24 relative bg-cyan overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        
        {/* Subtle decorative elements */}
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

    </main>
  );
}
