import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Send, XCircle, PhoneCall, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const INITIAL_FORM: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  consent: false,
};

const TRUST_ITEMS = [
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: Clock,  label: 'Fast Response Time' },
  { icon: CheckCircle, label: 'Free Inspections' },
];

export function CTA() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName:  form.lastName,
          email:     form.email,
          phone:     form.phone,
          message:   form.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    }
  }

  return (
    <section
      id="contact-cta"
      className="py-28 bg-navy relative overflow-hidden border-t border-white/5"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-cyan/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-cyan text-xs font-bold uppercase tracking-[3px] mb-4">
            Get A Free Estimate
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-5 uppercase tracking-tight">
            Secure Your <span className="text-cyan">Asset</span> Today.
          </h2>
          <p className="text-ghost/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Don't wait for a leak to compromise your operations. Fill out the form below and our certified specialists will reach out promptly.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-ghost/60 text-sm">
                <Icon className="w-4 h-4 text-cyan flex-shrink-0" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
            {/* Top cyan accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan to-transparent opacity-60" />

            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center gap-5 py-10 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-cyan" />
                    </div>
                    <h3 className="text-white text-3xl font-extrabold">Message Sent!</h3>
                    <p className="text-ghost/70 max-w-sm leading-relaxed">
                      Thank you for reaching out. We'll be in touch within one business day.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-2 px-8 py-3 rounded-xl border border-cyan/40 text-cyan text-sm font-bold uppercase tracking-widest hover:bg-cyan/10 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                  >
                    {/* Name row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-ghost/70 text-[11px] font-bold uppercase tracking-[1px] mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                          placeholder="John"
                          className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-ghost/70 text-[11px] font-bold uppercase tracking-[1px] mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Doe"
                          className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email & Phone row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-ghost/70 text-[11px] font-bold uppercase tracking-[1px] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-ghost/70 text-[11px] font-bold uppercase tracking-[1px] mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(912) 000-0000"
                          className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                      <label className="block text-ghost/70 text-[11px] font-bold uppercase tracking-[1px] mb-2">
                        How can we help? *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Describe your project or issue..."
                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all resize-none"
                      />
                    </div>

                    {/* Consent */}
                    <div className="flex items-start gap-3 mb-7">
                      <input
                        type="checkbox"
                        id="consent-cta"
                        name="consent"
                        checked={form.consent}
                        onChange={handleChange}
                        required
                        className="mt-0.5 flex-shrink-0 w-4 h-4 rounded appearance-none border border-white/20 bg-white/5 checked:bg-cyan checked:border-cyan relative cursor-pointer before:content-[''] before:absolute before:inset-0 before:flex before:items-center before:justify-center checked:before:content-['✓'] before:text-navy before:font-bold before:text-[10px] transition-colors"
                      />
                      <label htmlFor="consent-cta" className="text-[10px] text-ghost/60 leading-[1.6] cursor-pointer">
                        I agree to the{' '}
                        <Link to="/terms" className="text-cyan hover:underline">Terms & Conditions</Link>
                        {' '}provided by the company. By providing my phone number, I agree to receive text messages from the business. We respect your privacy — see our{' '}
                        <Link to="/privacy" className="text-cyan hover:underline">Privacy Policy</Link>.
                      </label>
                    </div>

                    {/* Error banner */}
                    <AnimatePresence>
                      {status === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                        >
                          <XCircle className="w-5 h-5 flex-shrink-0" />
                          <span>{errorMsg}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit + Call row */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="flex-1 group shimmer-btn bg-cyan text-white px-8 py-4 rounded-xl text-[13px] font-extrabold uppercase tracking-[2px] shadow-[0_0_30px_rgba(64,145,177,0.35)] hover:shadow-[0_0_45px_rgba(64,145,177,0.55)] transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden"
                      >
                        {status === 'loading' ? (
                          <>
                            <span>Sending…</span>
                            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                            </svg>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>

                      <a
                        href="tel:9122076273"
                        className="sm:w-auto bg-white/5 border border-white/15 text-white px-8 py-4 rounded-xl text-[13px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center justify-center gap-3 whitespace-nowrap"
                      >
                        <PhoneCall className="w-4 h-4 text-cyan" />
                        (912) 207-6273
                      </a>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
