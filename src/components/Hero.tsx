import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronDown, Building2, Home, ArrowLeft, ArrowRight, Cog, HardHat, ShieldCheck, ClipboardCheck } from 'lucide-react';

export function Hero() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: '',
    serviceType: '',
    timeframe: '',
    zipCode: '',
    name: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setStep(1);
        setFormData({ propertyType: '', serviceType: '', timeframe: '', zipCode: '', name: '', phone: '' });
      }, 4000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  const [direction, setDirection] = useState(1);
  const handleNext = () => { setDirection(1); nextStep(); };
  const handlePrev = () => { setDirection(-1); prevStep(); };

  return (
    <section className="relative min-h-screen flex items-center pt-32 lg:pt-40 pb-20 overflow-hidden bg-navy">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          src="/diamondroofgallery18.jpg"
          alt="Commercial Roof"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/50 pointer-events-none" />
      </div>

      <div className="absolute -top-[100px] -right-[100px] w-[500px] h-[500px] bg-gradient-to-br from-transparent via-transparent to-cyan/5 rotate-45 z-0 pointer-events-none" />

      <div className="w-full px-6 lg:px-12 xl:px-32 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
        {/* Left: Typography */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-3xl xl:max-w-4xl mt-10 md:mt-20 lg:mt-0 lg:justify-self-end">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-[82px] xl:text-[96px] font-display font-extrabold text-white leading-[0.9] tracking-[-2px] uppercase mb-6"
          >
            The <span className="text-cyan">Diamond</span> Standard in Roof Restoration.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-[18px] xl:text-[20px] text-ghost/80 font-sans max-w-[500px] xl:max-w-[600px] mb-10 leading-[1.6]"
          >
            Premium commercial and residential roofing solutions engineered for longevity, durability, and absolute protection.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <a 
              href="#services" 
              className="group shimmer-btn bg-cyan text-white px-8 py-4 rounded text-[13px] xl:text-[14px] font-extrabold uppercase tracking-[2px] shadow-[0_0_20px_rgba(64,145,177,0.4)] hover:bg-cyan/90 transition-all flex items-center gap-2 hover:-translate-y-1"
            >
              Explore Services
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </a>
            <a 
              href="#faq" 
              className="bg-white/5 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded text-[13px] xl:text-[14px] font-extrabold uppercase tracking-[2px] hover:bg-white/10 hover:border-white/30 transition-all hover:-translate-y-1"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Progressive Lead Capture Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="justify-self-center lg:justify-self-start lg:ml-8 xl:ml-16 w-full max-w-[600px] xl:max-w-[650px]"
        >
          <div className="flex flex-col relative w-full min-h-[460px]">
            
            {/* Header & Progress Bar */}
            <div className="pb-6 md:pb-8 relative z-10 w-full pt-4">
              <div className="flex items-center justify-between mb-4">
                {step > 1 && !isSuccess && (
                  <button onClick={handlePrev} className="text-ghost hover:text-cyan transition-colors flex items-center text-[11px] md:text-xs uppercase font-extrabold tracking-widest gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                )}
                {step === 1 && !isSuccess && <div className="text-[11px] md:text-xs text-cyan font-extrabold uppercase tracking-[2px]">Let us help you get started!</div>}
                
                {!isSuccess && (
                  <div className="text-ghost text-[11px] md:text-xs font-extrabold tracking-[2px]">
                    STEP {step}/4
                  </div>
                )}
              </div>
              
              {!isSuccess && (
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-cyan transition-all duration-500 ease-out shadow-[0_0_15px_rgba(64,145,177,0.8)]"
                    style={{ width: `${(step / 4) * 100}%` }}
                  />
                </div>
              )}
            </div>

            {/* Form Body - AnimatePresence wrapper */}
            <div className="flex-1 relative w-full">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                
                {/* SUCCESS SCREEN */}
                {isSuccess && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-cyan/10 flex items-center justify-center mb-6 border border-cyan/40 shadow-[0_0_40px_rgba(64,145,177,0.3)]">
                      <Check className="w-12 h-12 text-cyan" />
                    </div>
                    <h3 className="text-3xl font-display font-extrabold text-white mb-3 uppercase tracking-wide">Request Received</h3>
                    <p className="text-ghost/80 text-lg max-w-sm">
                      Thank you for trusting Diamond Roof. Our team will review your details and contact you shortly.
                    </p>
                  </motion.div>
                )}

                {/* STEP 1: PROPERTY TYPE */}
                {step === 1 && !isSuccess && (
                  <motion.div
                    key="step1"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                    className="absolute inset-0 flex flex-col"
                  >
                    <h3 className="text-3xl md:text-[32px] font-display font-extrabold text-white mb-8 tracking-[-0.5px] leading-[1.2]">What type of property <span className="text-cyan">needs servicing?</span></h3>
                    <div className="grid grid-cols-2 gap-4 md:gap-6 flex-1">
                      <button
                        onClick={() => { updateForm('propertyType', 'Commercial'); handleNext(); }}
                        className={`p-6 border-2 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all group ${
                          formData.propertyType === 'Commercial' ? 'bg-cyan border-cyan text-white shadow-[0_0_30px_rgba(64,145,177,0.4)]' : 'bg-black/20 border-white/20 text-ghost hover:border-cyan hover:bg-cyan/5'
                        }`}
                      >
                        <Building2 className={`w-12 h-12 transition-transform group-hover:scale-110 ${formData.propertyType === 'Commercial' ? 'text-white' : 'text-white/60 group-hover:text-cyan'}`} />
                        <span className="font-bold text-base tracking-wide uppercase">Commercial</span>
                      </button>
                      <button
                        onClick={() => { updateForm('propertyType', 'Residential'); handleNext(); }}
                        className={`p-6 border-2 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all group ${
                          formData.propertyType === 'Residential' ? 'bg-cyan border-cyan text-white shadow-[0_0_30px_rgba(64,145,177,0.4)]' : 'bg-black/20 border-white/20 text-ghost hover:border-cyan hover:bg-cyan/5'
                        }`}
                      >
                        <Home className={`w-12 h-12 transition-transform group-hover:scale-110 ${formData.propertyType === 'Residential' ? 'text-white' : 'text-white/60 group-hover:text-cyan'}`} />
                        <span className="font-bold text-base tracking-wide uppercase">Residential</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: SERVICE TYPE */}
                {step === 2 && !isSuccess && (
                  <motion.div
                    key="step2"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                    className="absolute inset-0 flex flex-col"
                  >
                    <h3 className="text-3xl md:text-[32px] font-display font-extrabold text-white mb-8 tracking-[-0.5px] leading-[1.2]">What service are you <span className="text-cyan">looking for?</span></h3>
                    <div className="space-y-3 md:space-y-4">
                      {[
                        { label: 'Roof Restoration / Coating', icon: <Cog className="w-6 h-6"/> },
                        { label: 'Full Replacement', icon: <HardHat className="w-6 h-6"/> },
                        { label: 'Leak Repair', icon: <ShieldCheck className="w-6 h-6"/> },
                        { label: 'Free Inspection', icon: <ClipboardCheck className="w-6 h-6"/> }
                      ].map((service) => (
                        <button
                          key={service.label}
                          onClick={() => { updateForm('serviceType', service.label); handleNext(); }}
                          className={`w-full p-4 md:p-5 border-2 rounded-xl flex items-center gap-5 transition-all text-left group ${
                            formData.serviceType === service.label ? 'bg-cyan border-cyan text-white shadow-[0_0_20px_rgba(64,145,177,0.4)]' : 'bg-black/20 border-white/20 text-ghost hover:border-cyan hover:bg-cyan/5'
                          }`}
                        >
                          <div className={`transition-transform group-hover:scale-110 ${formData.serviceType === service.label ? 'text-white' : 'text-white/40 group-hover:text-cyan'}`}>
                            {service.icon}
                          </div>
                          <span className="font-extrabold lg:text-[15px] tracking-[1px] uppercase">{service.label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: TIMEFRAME & LOCATION */}
                {step === 3 && !isSuccess && (
                  <motion.div
                    key="step3"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                    className="absolute inset-0 flex flex-col"
                  >
                    <h3 className="text-3xl md:text-[32px] font-display font-extrabold text-white mb-8 tracking-[-0.5px] leading-[1.2]">Tell us about your <span className="text-cyan">timeline.</span></h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-[11px] uppercase mb-3 md:mb-4 text-cyan font-bold tracking-[2px]">When do you need this done?</label>
                        <div className="grid grid-cols-3 gap-3 md:gap-4">
                          {['ASAP', '1-3 Months', 'Flexible'].map((time) => (
                            <button
                              key={time}
                              onClick={() => updateForm('timeframe', time)}
                              className={`py-4 border-2 text-[11px] md:text-sm font-extrabold uppercase tracking-[1px] rounded-xl transition-all ${
                                formData.timeframe === time ? 'bg-cyan border-cyan text-white shadow-[0_0_20px_rgba(64,145,177,0.4)]' : 'bg-black/20 border-white/20 text-ghost hover:border-cyan hover:bg-cyan/5 hover:text-white'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase mb-3 text-cyan font-bold tracking-[2px]">Zip Code</label>
                        <input
                          type="text"
                          value={formData.zipCode}
                          onChange={(e) => updateForm('zipCode', e.target.value)}
                          placeholder="Enter Zip Code"
                          className="w-full bg-black/30 border-2 border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan focus:bg-cyan/5 transition-all text-base md:text-lg font-bold"
                        />
                      </div>
                    </div>

                    <button
                      onClick={handleNext}
                      disabled={!formData.timeframe || !formData.zipCode}
                      className="w-full bg-white text-navy font-extrabold py-5 rounded-xl mt-auto md:mt-8 flex items-center justify-center gap-2 transition-all hover:bg-cyan hover:text-white disabled:opacity-50 disabled:cursor-not-allowed uppercase text-[13px] tracking-[2px] shadow-[0_0_20px_rgba(255,255,255,0.1)] group"
                    >
                      Continue <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.div>
                )}

                {/* STEP 4: CONTACT INFO */}
                {step === 4 && !isSuccess && (
                  <motion.div
                    key="step4"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                    className="absolute inset-0 flex flex-col"
                  >
                    <h3 className="text-3xl md:text-[32px] font-display font-extrabold text-white mb-8 tracking-[-0.5px] leading-[1.2]">Where should we send your <span className="text-cyan">estimate?</span></h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-5 flex flex-col flex-1">
                      <div>
                        <label className="block text-[11px] uppercase mb-3 text-cyan font-bold tracking-[2px]">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => updateForm('name', e.target.value)}
                          placeholder="John Diamond"
                          className="w-full bg-black/30 border-2 border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan focus:bg-cyan/5 transition-all text-base md:text-lg font-bold"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase mb-3 text-cyan font-bold tracking-[2px]">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => updateForm('phone', e.target.value)}
                          placeholder="(555) 000-0000"
                          className="w-full bg-black/30 border-2 border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan focus:bg-cyan/5 transition-all text-base md:text-lg font-bold"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-cyan text-white font-extrabold py-5 rounded-xl mt-auto mb-2 flex items-center justify-center gap-2 transition-all hover:bg-cyan/90 disabled:opacity-80 uppercase text-[13px] tracking-[2px] shadow-[0_0_30px_rgba(64,145,177,0.5)] relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12" />
                        
                        {isSubmitting ? (
                          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full bg-transparent" />
                        ) : (
                          'Get My Estimate'
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
