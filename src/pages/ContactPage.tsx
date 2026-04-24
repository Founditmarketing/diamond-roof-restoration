import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ContactPage() {
  return (
    <main className="min-h-screen bg-navy relative pt-48 pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 uppercase tracking-tight">
            Get In <span className="text-cyan">Touch</span>
          </h1>
          <p className="text-ghost/80 text-lg">
            We are ready to provide an expert consultation. Please fill out the form below or contact us directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden group hover:border-cyan/30 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 rounded-full blur-3xl group-hover:bg-cyan/20 transition-colors"></div>
              <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center border border-cyan/20 mb-6 text-cyan">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Call Us</h3>
              <p className="text-ghost/80 mb-4 text-sm">24/7 Emergency Service Available.</p>
              <a href="tel:9122076273" className="text-cyan font-bold text-2xl group flex items-center gap-2">
                (912) 207-6273
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden group hover:border-cyan/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center border border-cyan/20 mb-6 text-cyan">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Email Us</h3>
              <p className="text-ghost/80 mb-4 text-sm">Send us a detailed message anytime.</p>
              <a href="mailto:diamondroofrestorations@protonmail.com" className="text-white/90 hover:text-cyan font-semibold text-sm transition-colors block break-words">
                diamondroofrestorations@protonmail.com
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden group hover:border-cyan/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center border border-cyan/20 mb-6 text-cyan">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Our Office</h3>
              <p className="text-ghost/80 mb-4 text-sm leading-relaxed">
                Diamond Roof Restorations<br />
                133 W Cherry St Suite 204<br />
                Jesup, GA 31545
              </p>
              <a href="https://google.com/maps" target="_blank" rel="noreferrer" className="text-cyan text-sm font-semibold hover:underline">
                View on Google Maps →
              </a>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <form className="p-2 md:p-4 bg-transparent">
              <div className="flex flex-col gap-6 mb-6">
                <div>
                  <label className="block text-ghost/80 text-[11px] font-bold uppercase tracking-[1px] mb-2">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-ghost/80 text-[11px] font-bold uppercase tracking-[1px] mb-2">
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6 mb-6">
                <div>
                  <label className="block text-ghost/80 text-[11px] font-bold uppercase tracking-[1px] mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-ghost/80 text-[11px] font-bold uppercase tracking-[1px] mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-ghost/80 text-[11px] font-bold uppercase tracking-[1px] mb-2">
                  How can we help? *
                </label>
                <textarea 
                  rows={5}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all resize-none"
                  placeholder="Describe your project or issue..."
                  required
                ></textarea>
              </div>

                <div className="flex items-start gap-3 mt-4 mb-6">
                  <input 
                    type="checkbox" 
                    id="consent-contact" 
                    required
                    className="mt-0.5 flex-shrink-0 w-4 h-4 rounded appearance-none border border-white/20 bg-white/5 checked:bg-cyan checked:border-cyan relative cursor-pointer before:content-[''] before:absolute before:inset-0 before:flex before:items-center before:justify-center checked:before:content-['✓'] before:text-navy before:font-bold before:text-[10px] transition-colors"
                  />
                  <label htmlFor="consent-contact" className="text-[10px] text-ghost/70 leading-[1.5] cursor-pointer">
                    I agree to the <Link to="/terms" className="text-cyan hover:underline">Terms &amp; Conditions</Link> provided by the company. By providing my phone number, I agree to receive text messages from the business. We respect your privacy - learn how we handle your data in our <Link to="/privacy" className="text-cyan hover:underline">Privacy Policy</Link>.
                  </label>
                </div>

              <button 
                type="submit"
                className="w-full group relative shimmer-btn bg-cyan text-white px-8 py-5 rounded-xl text-[14px] font-extrabold uppercase tracking-[2px] shadow-[0_0_30px_rgba(64,145,177,0.3)] hover:shadow-[0_0_40px_rgba(64,145,177,0.5)] transition-all flex items-center justify-center gap-3 overflow-hidden"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
