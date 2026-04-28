import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Plus, Minus, Send, Phone, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FaqFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

type FaqSubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const INITIAL_FAQ_FORM: FaqFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  consent: false,
};

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
    question: "How do I schedule a roof inspection?",
    answer: "Scheduling is simple — just give us a call or fill out the contact form on our website. We'll confirm your location, assess your needs, and get an inspection on the calendar as quickly as possible. We serve residential and commercial properties across Georgia, Florida, and South Carolina."
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
  const [faqForm, setFaqForm] = useState<FaqFormState>(INITIAL_FAQ_FORM);
  const [faqStatus, setFaqStatus] = useState<FaqSubmitStatus>('idle');
  const [faqError, setFaqError] = useState('');

  function handleFaqChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    setFaqForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleFaqSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFaqStatus('loading');
    setFaqError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: faqForm.firstName,
          lastName:  faqForm.lastName,
          email:     faqForm.email,
          phone:     faqForm.phone,
          message:   faqForm.message,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
      setFaqStatus('success');
      setFaqForm(INITIAL_FAQ_FORM);
    } catch (err: unknown) {
      setFaqStatus('error');
      setFaqError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

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

          {/* Right Side: Real Contact Form */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-white/5 border border-cyan/30 rounded-2xl p-8 md:p-10 shadow-[0_40px_100px_rgba(0,0,0,0.3)] backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-cyan to-transparent opacity-50 mb-8 -mt-2" />

              <AnimatePresence mode="wait">
                {faqStatus === 'success' ? (
                  <motion.div
                    key="faq-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center gap-4 py-10 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-cyan" />
                    </div>
                    <h3 className="text-white text-2xl font-extrabold">Message Sent!</h3>
                    <p className="text-ghost/70 text-sm max-w-xs leading-relaxed">
                      Thank you for reaching out. We'll be in touch within one business day.
                    </p>
                    <button
                      onClick={() => setFaqStatus('idle')}
                      className="mt-2 px-6 py-2.5 rounded-xl border border-cyan/40 text-cyan text-xs font-bold uppercase tracking-widest hover:bg-cyan/10 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="faq-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase tracking-wide">
                      Still have questions?
                    </h3>
                    <p className="text-ghost/80 mb-6">
                      Send us a message or call us directly. Our roofing experts are ready to help.
                    </p>

                    <div className="flex items-center gap-4 mb-6 p-4 bg-black/20 rounded-lg border border-white/5">
                      <div className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center text-cyan flex-shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-ghost/60 font-bold mb-0.5">24/7 Support Line</div>
                        <a href="tel:9122076273" className="text-lg font-bold text-white hover:text-cyan transition-colors">
                          (912) 207-6273
                        </a>
                      </div>
                    </div>

                    <form onSubmit={handleFaqSubmit} className="space-y-4 relative z-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase mb-2 text-cyan font-bold">First Name *</label>
                          <input
                            type="text"
                            name="firstName"
                            value={faqForm.firstName}
                            onChange={handleFaqChange}
                            required
                            placeholder="John"
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase mb-2 text-cyan font-bold">Last Name *</label>
                          <input
                            type="text"
                            name="lastName"
                            value={faqForm.lastName}
                            onChange={handleFaqChange}
                            required
                            placeholder="Doe"
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase mb-2 text-cyan font-bold">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={faqForm.email}
                            onChange={handleFaqChange}
                            required
                            placeholder="john@example.com"
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase mb-2 text-cyan font-bold">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={faqForm.phone}
                            onChange={handleFaqChange}
                            placeholder="(912) 000-0000"
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase mb-2 text-cyan font-bold">How can we help? *</label>
                        <textarea
                          name="message"
                          value={faqForm.message}
                          onChange={handleFaqChange}
                          required
                          rows={4}
                          placeholder="Tell us about your roofing needs..."
                          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan transition-all resize-none"
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="consent-faq"
                          name="consent"
                          checked={faqForm.consent}
                          onChange={handleFaqChange}
                          required
                          className="mt-0.5 flex-shrink-0 w-4 h-4 rounded appearance-none border border-white/20 bg-white/5 checked:bg-cyan checked:border-cyan relative cursor-pointer before:content-[''] before:absolute before:inset-0 before:flex before:items-center before:justify-center checked:before:content-['✓'] before:text-navy before:font-bold before:text-[10px] transition-colors"
                        />
                        <label htmlFor="consent-faq" className="text-[9px] max-w-[90%] text-ghost/70 leading-[1.4] cursor-pointer block">
                          I agree to the <Link to="/terms" className="text-cyan hover:underline">Terms &amp; Conditions</Link>. By providing my phone number, I agree to receive text messages from the business. See our <Link to="/privacy" className="text-cyan hover:underline">Privacy Policy</Link>.
                        </label>
                      </div>

                      {faqStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs"
                        >
                          <XCircle className="w-4 h-4 flex-shrink-0" />
                          <span>{faqError}</span>
                        </motion.div>
                      )}

                      <button
                        type="submit"
                        disabled={faqStatus === 'loading'}
                        className="w-full bg-cyan text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:bg-cyan/90 disabled:opacity-60 disabled:cursor-not-allowed uppercase text-[12px] tracking-widest shadow-[0_0_20px_rgba(64,145,177,0.3)]"
                      >
                        {faqStatus === 'loading' ? (
                          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
