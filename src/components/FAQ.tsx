import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Send, Phone } from 'lucide-react';

const faqs = [
  {
    question: "What roofing services does Diamond Roof Restorations offer?",
    answer: "We specialize in metal roof installation, asphalt shingle roof installation, membrane roofing, single ply roofing, fabric reinforced roofing, waterproofing, and spray foam roofing for commercial properties. Our focus is restoring existing roofs to extend their life rather than requiring full replacement."
  },
  {
    question: "How can roof restoration save money compared to full replacement?",
    answer: "Roof restoration uses high-performance coatings to stop leaks and improve energy efficiency at a fraction of replacement cost. Many commercial roofs in Savannah and across Georgia can be restored instead of torn off and rebuilt."
  },
  {
    question: "What should I do if my roof is leaking?",
    answer: "Contact Diamond Roof Restorations for a professional inspection in your area—whether you're in Jacksonville, Valdosta, or another Georgia service location. We'll assess the damage and recommend the right restoration solution to stop the leak."
  },
  {
    question: "How do I schedule a roof inspection in Jesup or nearby areas?",
    answer: "Call Diamond Roof Restorations to request an inspection at your commercial property. We serve Jesup, Baxley, Waycross, Brunswick, and surrounding areas with fast scheduling to get you answers quickly."
  },
  {
    question: "What is the difference between roof restoration and replacement?",
    answer: "Restoration applies protective coatings to stop leaks and extend roof life without removal. Replacement removes and rebuilds the entire roof system—a much larger investment we avoid unless truly necessary."
  },
  {
    question: "Do you offer waterproofing services for flat roofs?",
    answer: "Yes, we provide waterproofing and specialized coatings for flat commercial roofs, including membrane, single ply, and spray foam systems. Our waterproofing solutions protect properties from leaks year-round across Georgia and into Florida."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="faq" className="py-24 bg-navy relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: FAQs */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4 uppercase tracking-tight">
              Common Questions
            </h2>
            <p className="text-ghost/80 text-lg mb-10">
              Everything you need to know about our restoration process, warranties, and services.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index} 
                    className={`border rounded-lg overflow-hidden transition-colors duration-300 ${
                      isOpen ? 'border-cyan/50 bg-white/5' : 'border-white/10 bg-transparent hover:border-white/20'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className={`font-bold text-lg pr-8 transition-colors ${isOpen ? 'text-cyan' : 'text-white'}`}>
                        {faq.question}
                      </span>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                        isOpen ? 'border-cyan text-cyan bg-cyan/10' : 'border-white/20 text-white/60'
                      }`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 text-ghost/80 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Contact Form / Info */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-white/5 border border-cyan/30 rounded-2xl p-8 md:p-10 shadow-[0_40px_100px_rgba(0,0,0,0.3)] backdrop-blur-sm relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase tracking-wide">
                Still have questions?
              </h3>
              <p className="text-ghost/80 mb-8">
                Send us a message or call us directly. Our roofing experts are ready to help.
              </p>

              <div className="flex items-center gap-4 mb-8 p-4 bg-black/20 rounded-lg border border-white/5">
                <div className="w-12 h-12 rounded-full bg-cyan/20 flex items-center justify-center text-cyan">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-ghost/60 font-bold mb-1">24/7 Support Line</div>
                  <a href="tel:9122076273" className="text-lg md:text-xl font-bold text-white hover:text-cyan transition-colors">
                    (912) 207-6273
                  </a>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase mb-2 text-cyan font-bold">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase mb-2 text-cyan font-bold">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[10px] uppercase mb-2 text-cyan font-bold">How can we help?</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your roofing needs..."
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full bg-cyan text-white font-bold py-4 rounded-lg mt-2 flex items-center justify-center gap-2 transition-all hover:bg-cyan/90 disabled:opacity-80 uppercase text-[12px] tracking-widest shadow-[0_0_20px_rgba(64,145,177,0.3)]"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : isSuccess ? (
                    <>Message Sent Successfully</>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
