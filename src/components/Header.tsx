import { useState, useEffect } from 'react';
import { Phone, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerTop = Math.max(0, 30 - scrollY);

  return (
    <header
      style={{ top: `${headerTop}px` }}
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-header py-2 shadow-2xl shadow-black/50' : 'bg-transparent pt-1 pb-4'
      }`}
    >
      <div className="w-full px-6 lg:px-12 xl:px-20 relative flex items-center justify-between md:justify-center">
        
        {/* Mobile Logo */}
        <div className="md:hidden flex-shrink-0 z-50">
          <img 
            src="/diamondrooflogo.webp" 
            alt="Diamond Roof Restoration" 
            className="h-16 w-auto drop-shadow-[0_0_15px_rgba(64,145,177,0.3)]"
          />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white z-50 p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <Menu className="w-6 h-6 text-cyan" />
        </button>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full items-start justify-between relative">
          
          {/* Left Side */}
          <div className="flex-1 flex items-center justify-end pr-10 lg:pr-16 gap-6 lg:gap-10 pt-3 lg:pt-5">
            {/* Contact Detail Added */}
            <a href="tel:8885557663" className="hidden xl:flex items-center gap-3 text-white hover:text-cyan transition-colors group mr-auto">
              <div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center border border-cyan/20 group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4 text-cyan"/>
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-[2px] text-ghost font-bold mb-0.5">24/7 Emergency</div>
                <div className="text-[14px] font-bold tracking-[1px]">(888) 555-ROOF</div>
              </div>
            </a>
            
            {['Services', 'Commercial'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white hover:text-cyan text-[12px] lg:text-[13px] font-bold tracking-[1.5px] uppercase relative group transition-colors"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Centered Logo */}
          <div className="flex-shrink-0 z-50 relative group px-4">
            {/* Logo Glow Effect */}
            <div className="absolute inset-0 bg-cyan blur-[40px] opacity-20 scale-150 rounded-full group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
            
            {/* The Logo image, shrinking slightly when scrolled */}
            <a href="#">
              <img 
                src="/diamondrooflogo.webp" 
                alt="Diamond Roof Restoration" 
                className={`transition-all duration-500 relative z-10 drop-shadow-[0_0_15px_rgba(64,145,177,0.3)] hover:scale-105 ${
                  scrolled ? 'h-20 lg:h-24' : 'h-28 lg:h-36'
                } w-auto`}
              />
            </a>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex items-center justify-start pl-10 lg:pl-16 gap-6 lg:gap-10 pt-3 lg:pt-5">
            {['Residential', 'About Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white hover:text-cyan text-[12px] lg:text-[13px] font-bold tracking-[1.5px] uppercase relative group transition-colors"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* CTA Button Added */}
            <button className="hidden lg:block shimmer-btn bg-cyan text-white px-6 py-3.5 rounded text-[11px] font-extrabold uppercase tracking-[2px] shadow-[0_0_20px_rgba(64,145,177,0.4)] hover:bg-cyan/90 transition-all ml-auto whitespace-nowrap transform hover:-translate-y-0.5">
              GET A FREE QUOTE
            </button>
          </div>
          
        </div>
      </div>
    </header>
  );
}
