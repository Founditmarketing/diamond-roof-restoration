import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Briefcase, HardHat, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function EmploymentPage() {
  const [role, setRole] = useState('');
  const [touched, setTouched] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    setTouched(true);
    if (role === 'sales') navigate('/employment/sales');
    if (role === 'labor') navigate('/employment/labor');
  };

  const cards = [
    {
      id: 'sales',
      icon: Briefcase,
      title: 'Sales Representative',
      description:
        'Drive growth by connecting homeowners and businesses with our industry-leading roofing solutions. Competitive commissions & flexible schedule.',
      perks: ['Uncapped commission', 'Flexible hours', 'Training provided'],
    },
    {
      id: 'labor',
      icon: HardHat,
      title: 'Labor / Subcontractor',
      description:
        'Join our skilled crew on residential and commercial roofing projects. We value craftsmanship, reliability, and a strong work ethic.',
      perks: ['Steady project pipeline', 'Competitive pay', 'Team environment'],
    },
  ];

  return (
    <main className="min-h-screen bg-navy relative pt-44 pb-24 overflow-hidden">
      {/* BG Decorations */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-cyan/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-[11px] font-bold uppercase tracking-[2px] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            Now Hiring
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tight mb-6">
            Join the <span className="text-cyan">Diamond</span> Team
          </h1>
          <p className="text-ghost/70 text-lg max-w-2xl mx-auto leading-relaxed">
            We're growing fast and looking for driven individuals who take pride in their work.
            Select the role that fits you below to get started.
          </p>
        </motion.div>

        {/* Role Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14"
        >
          {cards.map((card, i) => {
            const Icon = card.icon;
            const selected = role === card.id;
            return (
              <motion.button
                key={card.id}
                onClick={() => { setRole(card.id); setTouched(false); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className={`relative w-full text-left p-8 rounded-2xl border transition-all duration-300 group cursor-pointer focus:outline-none ${
                  selected
                    ? 'border-cyan bg-cyan/10 shadow-[0_0_40px_rgba(64,145,177,0.25)]'
                    : 'border-white/10 bg-white/5 hover:border-cyan/40 hover:bg-white/8'
                }`}
              >
                {/* Selection indicator */}
                <AnimatePresence>
                  {selected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute top-4 right-4 w-6 h-6 rounded-full bg-cyan flex items-center justify-center"
                    >
                      <span className="text-navy text-xs font-black">✓</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className={`w-14 h-14 rounded-xl flex items-center justify-center border mb-6 transition-colors ${
                  selected ? 'bg-cyan/20 border-cyan/40 text-cyan' : 'bg-white/5 border-white/10 text-cyan group-hover:bg-cyan/10'
                }`}>
                  <Icon className="w-7 h-7" />
                </div>

                <h2 className="text-white font-bold text-xl mb-3">{card.title}</h2>
                <p className="text-ghost/70 text-sm leading-relaxed mb-5">{card.description}</p>

                <ul className="flex flex-col gap-2">
                  {card.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-ghost/80 text-xs">
                      <span className="w-1 h-1 rounded-full bg-cyan flex-shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Dropdown alternative + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-xl mx-auto"
        >
          {/* Dropdown for mobile convenience */}
          <div className="mb-6">
            <label className="block text-ghost/80 text-[11px] font-bold uppercase tracking-[1px] mb-2">
              Or select your role
            </label>
            <div className="relative">
              <select
                id="role-select"
                value={role}
                onChange={(e) => { setRole(e.target.value); setTouched(false); }}
                className="w-full appearance-none bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all cursor-pointer"
              >
                <option value="" disabled className="bg-navy">Select a position...</option>
                <option value="sales" className="bg-navy">Sales Representative</option>
                <option value="labor" className="bg-navy">Labor / Subcontractor</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan pointer-events-none" />
            </div>
            {touched && !role && (
              <p className="text-red-400 text-xs mt-2 font-semibold">Please select a role to continue.</p>
            )}
          </div>

          <button
            onClick={handleContinue}
            className="w-full group shimmer-btn bg-cyan text-white px-8 py-5 rounded-xl text-[13px] font-extrabold uppercase tracking-[2px] shadow-[0_0_30px_rgba(64,145,177,0.3)] hover:shadow-[0_0_50px_rgba(64,145,177,0.5)] transition-all flex items-center justify-center gap-3"
          >
            <span>Start My Application</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-center text-ghost/40 text-xs mt-6">
            Applications are reviewed within 2–3 business days. We look forward to hearing from you.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
