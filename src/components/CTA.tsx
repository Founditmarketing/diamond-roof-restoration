import { motion } from 'motion/react';
import { ArrowRight, PhoneCall } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden border-t border-white/5">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Diamond accent */}
      <div className="absolute -bottom-[100px] -left-[100px] w-[300px] h-[300px] bg-gradient-to-tr from-transparent via-transparent to-cyan/10 rotate-45 z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 uppercase tracking-tight">
            Secure Your <span className="text-cyan">Asset</span> Today.
          </h2>
          <p className="text-ghost/80 text-lg md:text-xl mb-10 leading-relaxed">
            Don't wait for a leak to compromise your operations. Get a comprehensive, no-obligation inspection from our certified specialists.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="shimmer-btn w-full sm:w-auto bg-cyan text-white px-8 py-4 rounded text-[14px] font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(64,145,177,0.4)] hover:bg-cyan/90 transition-all hover:scale-105 flex items-center justify-center gap-3">
              Schedule Inspection <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="tel:8885557663" 
              className="w-full sm:w-auto bg-white/5 border border-white/20 text-white px-8 py-4 rounded text-[14px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center justify-center gap-3"
            >
              <PhoneCall className="w-5 h-5 text-cyan" />
              (888) 555-ROOF
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
