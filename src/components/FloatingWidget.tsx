import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, X, Send } from 'lucide-react';

export function FloatingWidget() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Initial delay before first tooltip
    const initialTimer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 5000);

    // Recurring interval
    const interval = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Native frontend event wrapper for backend hook targeting
    console.log("Form submitted via widget");
  };

  return (
    <div className="fixed bottom-[20px] md:bottom-[30px] right-[20px] md:right-[30px] z-[9000] flex flex-col items-end">
      
      {/* Interactive Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-navy border border-cyan/30 shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-2xl w-[calc(100vw-40px)] sm:w-[380px] mb-4 overflow-hidden flex flex-col"
          >
            {/* Modal Header */}
            <div className="bg-white/5 border-b border-white/10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan animate-pulse"></div>
                <span className="text-white font-bold text-sm tracking-wide uppercase">Connect With Us</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-ghost hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Split Pane 1: Call Now */}
            <div className="p-6 border-b border-white/5 flex flex-col items-center justify-center bg-gradient-to-b from-navy to-navy/50">
              <h3 className="text-white font-display font-bold text-lg mb-2 text-center">Need Immediate Help?</h3>
              <p className="text-ghost/80 text-xs text-center mb-4 leading-relaxed">
                Connect directly with our 24/7 service dispatcher right now.
              </p>
              <a 
                href="tel:9122076273"
                className="w-full relative group bg-cyan/10 border border-cyan/30 rounded-xl p-4 flex items-center justify-center gap-3 hover:bg-cyan hover:border-cyan text-cyan hover:text-navy transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span className="font-bold tracking-widest">(912) 207-6273</span>
              </a>
            </div>

            {/* Split Pane 2: Quick Form */}
            <div className="p-6 bg-white/5">
              <h3 className="text-white font-display font-bold text-sm mb-4">Or Send a Quick Message</h3>
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan/50 transition-colors placeholder:text-ghost/30"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan/50 transition-colors placeholder:text-ghost/30"
                  required
                />
                <textarea 
                  placeholder="How can we help?" 
                  rows={2}
                  className="w-full bg-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan/50 transition-colors placeholder:text-ghost/30 resize-none"
                  required
                ></textarea>
                <button 
                  type="submit"
                  className="w-full mt-1 bg-cyan text-white shadow-[0_0_15px_rgba(64,145,177,0.3)] hover:shadow-[0_0_25px_rgba(64,145,177,0.5)] rounded-lg px-4 py-3 text-xs font-bold uppercase tracking-widest hover:bg-cyan/90 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex items-center">
        {/* Tooltip */}
        <AnimatePresence>
          {(showTooltip || (isHovered && !isOpen)) && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-[75px] bg-white text-navy px-[15px] py-[8px] rounded font-bold text-[12px] whitespace-nowrap shadow-lg"
            >
              Emergency Leak? Text Us
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Action Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(64,145,177,0.5)] hover:scale-105 transition-all duration-300 ${
            isOpen ? 'bg-white text-navy' : 'bg-cyan text-white'
          }`}
          aria-label="Toggle contact modal"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}
