import { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, CheckCircle, Star, Zap, Phone, Send, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    id: 'essential',
    icon: Shield,
    name: 'Essential',
    tagline: 'Peace of mind for homeowners',
    price: 'TBD',
    period: '/ year',
    highlight: false,
    features: [
      'Annual roof inspection',
      'Detailed condition report',
      'Minor leak sealing (up to 2 spots)',
      'Gutter & drainage check',
      'Priority scheduling',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    id: 'pro',
    icon: Star,
    name: 'Pro',
    tagline: 'Best value for most clients',
    price: 'TBD',
    period: '/ year',
    highlight: true,
    features: [
      'Everything in Essential',
      'Bi-annual inspections',
      'Minor repairs included',
      'Flashing & sealant maintenance',
      'Post-storm priority response',
      'Dedicated account manager',
      'Photo inspection report',
    ],
    cta: 'Most Popular',
  },
  {
    id: 'elite',
    icon: Zap,
    name: 'Elite',
    tagline: 'Full-coverage for commercial properties',
    price: 'TBD',
    period: '/ year',
    highlight: false,
    features: [
      'Everything in Pro',
      'Quarterly inspections',
      'Extended repair coverage',
      'Coating maintenance included',
      '24/7 emergency response',
      'Annual restoration credit',
      'Full documentation archive',
    ],
    cta: 'Contact Us',
  },
];

const benefits = [
  {
    icon: Shield,
    title: 'Prevent Costly Damage',
    desc: 'Routine inspections catch small issues before they become five-figure repairs. Protect your investment proactively.',
  },
  {
    icon: Star,
    title: 'Extend Roof Lifespan',
    desc: 'Regular maintenance can add years — even decades — to your roof\'s serviceable life, maximizing your ROI.',
  },
  {
    icon: Zap,
    title: 'Priority Service Access',
    desc: 'Plan members jump the queue. After storms or emergencies, you get scheduled first — no waiting.',
  },
  {
    icon: CheckCircle,
    title: 'Exclusive to Past Clients',
    desc: 'We only offer maintenance plans to properties we\'ve serviced. We know your roof inside and out.',
  },
];

export function MaintenancePage() {
  const [formSent, setFormSent] = useState(false);
  const [interest, setInterest] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-navy relative overflow-hidden pt-44 pb-24">
      {/* BG */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-cyan/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-[11px] font-bold uppercase tracking-[2px] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            Exclusive to Diamond Clients
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tight mb-6 leading-tight">
            Diamond <span className="text-cyan">Maintenance</span> Plans
          </h1>
          <p className="text-ghost/70 text-lg leading-relaxed">
            A subscription-based roofing care program designed for clients who have already trusted us with their property. We handle the maintenance — you enjoy the peace of mind.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-ghost/50 text-xs font-semibold uppercase tracking-widest">
            ⚠ Pricing & plan details coming soon — register your interest below
          </div>
        </motion.div>

        {/* ── Benefits ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
        >
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan/30 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center text-cyan mb-4 group-hover:bg-cyan/20 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{b.title}</h3>
                <p className="text-ghost/60 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Plan Cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight mb-3">
            Choose Your <span className="text-cyan">Plan</span>
          </h2>
          <p className="text-ghost/60 text-base">Final pricing will be confirmed — lock in your spot by registering below.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 items-stretch">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                  plan.highlight
                    ? 'border-cyan bg-gradient-to-b from-cyan/10 to-transparent shadow-[0_0_60px_rgba(64,145,177,0.2)]'
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan text-navy text-[10px] font-extrabold uppercase tracking-[2px]">
                    Most Popular
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 ${
                  plan.highlight ? 'bg-cyan/20 border-cyan/40 text-cyan' : 'bg-white/5 border-white/10 text-cyan'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>

                <div className="mb-1 text-[11px] font-bold uppercase tracking-[2px] text-cyan">{plan.name}</div>
                <h3 className="text-white font-bold text-lg mb-1">{plan.tagline}</h3>
                <div className="text-3xl font-extrabold text-white mt-3 mb-1">
                  {plan.price}
                  <span className="text-base font-normal text-ghost/50 ml-1">{plan.period}</span>
                </div>
                <p className="text-ghost/40 text-xs mb-6 italic">Pricing to be announced</p>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-ghost/80 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#register-interest"
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl text-[12px] font-extrabold uppercase tracking-[2px] transition-all ${
                    plan.highlight
                      ? 'bg-cyan text-white shadow-[0_0_30px_rgba(64,145,177,0.4)] hover:shadow-[0_0_50px_rgba(64,145,177,0.6)]'
                      : 'bg-white/10 text-white hover:bg-white/15 border border-white/10'
                  }`}
                >
                  Register Interest <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* ── Interest Form ── */}
        <motion.div
          id="register-interest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-2xl bg-white/5 border border-cyan/20 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 rounded-full blur-[80px] pointer-events-none" />

            {formSent ? (
              <div className="text-center py-8 relative z-10">
                <div className="w-16 h-16 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-cyan" />
                </div>
                <h3 className="text-2xl font-extrabold text-white uppercase tracking-tight mb-3">You're on the List!</h3>
                <p className="text-ghost/70 text-base leading-relaxed mb-6">
                  We've received your interest. We'll reach out as soon as Maintenance Plan details are finalized — you'll be first to know.
                </p>
                <Link to="/" className="inline-flex items-center gap-2 text-cyan text-sm font-bold uppercase tracking-widest hover:underline">
                  ← Back to Home
                </Link>
              </div>
            ) : (
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight mb-2">
                  Register Your <span className="text-cyan">Interest</span>
                </h2>
                <p className="text-ghost/60 text-sm leading-relaxed mb-8">
                  Plans are launching soon and are exclusive to past Diamond clients. Drop your info below and we'll reach out when everything is ready.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[1px] text-ghost/70 mb-2">Full Name *</label>
                      <input id="maint-name" type="text" required placeholder="Jane Smith"
                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[1px] text-ghost/70 mb-2">Phone Number *</label>
                      <input id="maint-phone" type="tel" required placeholder="(555) 000-0000"
                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[1px] text-ghost/70 mb-2">Email Address *</label>
                    <input id="maint-email" type="email" required placeholder="jane@example.com"
                      className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all" />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[1px] text-ghost/70 mb-2">Property Address</label>
                    <input id="maint-address" type="text" placeholder="123 Main St, Jesup, GA"
                      className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all" />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[1px] text-ghost/70 mb-2">Which Plan Interests You?</label>
                    <div className="relative">
                      <select
                        id="maint-plan"
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full appearance-none bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all cursor-pointer"
                      >
                        <option value="" className="bg-navy">Not sure yet</option>
                        <option value="essential" className="bg-navy">Essential</option>
                        <option value="pro" className="bg-navy">Pro</option>
                        <option value="elite" className="bg-navy">Elite</option>
                      </select>
                      <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[1px] text-ghost/70 mb-2">Anything Else? (Optional)</label>
                    <textarea id="maint-notes" rows={3} placeholder="Questions, special requests, property details..."
                      className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all resize-none" />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="maint-consent" required
                      className="mt-0.5 flex-shrink-0 w-4 h-4 rounded appearance-none border border-white/20 bg-white/5 checked:bg-cyan checked:border-cyan cursor-pointer transition-colors" />
                    <label htmlFor="maint-consent" className="text-[10px] text-ghost/60 leading-relaxed cursor-pointer">
                      I agree to the <Link to="/terms" className="text-cyan hover:underline">Terms &amp; Conditions</Link> and <Link to="/privacy" className="text-cyan hover:underline">Privacy Policy</Link>. I understand this is an expression of interest and not a binding contract.
                    </label>
                  </div>

                  <button type="submit"
                    className="w-full shimmer-btn bg-cyan text-white px-8 py-5 rounded-xl text-[13px] font-extrabold uppercase tracking-[2px] shadow-[0_0_30px_rgba(64,145,177,0.3)] hover:shadow-[0_0_50px_rgba(64,145,177,0.5)] transition-all flex items-center justify-center gap-3 group">
                    <span>Register My Interest</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </main>
  );
}
