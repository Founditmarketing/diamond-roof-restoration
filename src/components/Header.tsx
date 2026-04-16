import { useState, useEffect } from 'react';
import { Phone, Menu, X, Facebook, Instagram, MapPin, Mail, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = {
  left: [
    { name: 'Home', link: '#' },
    { 
      name: 'Our Services', 
      link: '#',
      dropdown: [
        { name: 'Roofing Contractor', link: '#roofing-contractor' },
        { name: 'Metal Roof Installation', link: '#metal-roof-installation' },
        { name: 'Asphalt Shingle Roof Installation', link: '#asphalt-shingle-roof-installation' },
        { name: 'Membrane Roofing Installation', link: '#membrane-roofing-installation' },
        { name: 'Single Ply Roofing Installation', link: '#single-ply-roofing-installation' },
        { name: 'Fabric Reinforced Roofing Installation', link: '#fabric-reinforced-roofing-installation' },
        { name: 'Commercial Roof Waterproofing', link: '#commercial-roof-waterproofing' },
        { name: 'Spray Foam Roofing Installation', link: '#spray-foam-roofing-installation' },
        { name: 'TPO', link: '#tpo' }
      ]
    }
  ],
  right: [
    {
      name: 'Service Areas',
      link: '#',
      dropdown: [
        { name: 'Baxley, GA', link: '#baxley-ga' },
        { name: 'Blackshear, GA', link: '#blackshear-ga' },
        { name: 'Brunswick, GA', link: '#brunswick-ga' },
        { name: 'Hilton Head, SC', link: '#hilton-head-sc' },
        { name: 'Hinesville, GA', link: '#hinesville-ga' },
        { name: 'Jacksonville, FL', link: '#jacksonville-fl' },
        { name: 'Jesup, GA', link: '#jesup-ga' },
        { name: 'Pooler, GA', link: '#pooler-ga' }
      ]
    },
    {
      name: 'About',
      link: '#',
      dropdown: [
        { name: 'About', link: '#about' },
        { name: 'Projects', link: '#proof' },
        { name: 'Contact Us', link: '#contact' }
      ]
    }
  ]
};

export function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileExpandedDropdown, setMobileExpandedDropdown] = useState<string | null>(null);
  
  // Track mobile viewport for Framer Motion layout routing synchronously
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      <div className="w-full px-4 lg:px-8 xl:px-12 relative flex items-center justify-between md:justify-center">
        
        {/* Mobile Logo */}
        <div className="md:hidden flex-shrink-0 z-50">
          <motion.img 
            layoutId={isMobile ? "main-logo" : undefined}
            transition={{ layout: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } }}
            src="/diamondrooflogo.webp" 
            alt="Diamond Roof Restoration" 
            className={`w-auto drop-shadow-[0_0_15px_rgba(64,145,177,0.3)] transition-[height] duration-500 ${
              scrolled ? 'h-12' : 'h-20'
            }`}
          />
        </div>

        {/* Mobile Socials & Menu Button */}
        <div className="md:hidden flex items-center gap-2 z-50">
          <a href="https://www.facebook.com/diamondroofrestorations" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#1877F2] text-white transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="https://www.instagram.com/diamondroofrestoration/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#E1306C] text-white transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white ml-2 p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center"
          >
            {isMenuOpen ? <X className="w-5 h-5 text-cyan" /> : <Menu className="w-5 h-5 text-cyan" />}
          </button>
        </div>

        {/* Desktop Layout */}
        <div className={`hidden md:flex w-full justify-between relative transition-all duration-300 ${scrolled ? 'items-center' : 'items-start'}`}>
          
          {/* Left Side */}
          <div className={`flex-1 flex items-center justify-end pr-6 lg:pr-8 xl:pr-12 gap-4 lg:gap-8 transition-all duration-300 ${scrolled ? 'pt-0' : 'pt-3 lg:pt-5'}`}>
            {/* Restructured Contact & Socials */}
            <div className="hidden xl:flex items-center gap-4 mr-auto">
              <div className="flex items-center gap-2 border-r border-white/20 pr-4">
                <a href="https://www.facebook.com/diamondroofrestorations" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#1877F2] hover:border-[#1877F2] text-white transition-all hover:scale-110">
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.instagram.com/diamondroofrestoration/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#E1306C] hover:border-[#E1306C] text-white transition-all hover:scale-110">
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a href="https://google.com/maps/place/Diamond+Roof+Restorations/data=!4m2!3m1!1s0x0:0x7881f2a0a8a703ea?sa=X&ved=1t:2428&hl=en&ictx=111" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#4285F4] hover:border-[#4285F4] text-white transition-all hover:scale-110">
                  <MapPin className="w-3.5 h-3.5" />
                </a>
              </div>
              <a href="tel:9122076273" className="flex flex-col group">
                <div className="text-[9px] uppercase tracking-[2px] text-cyan font-bold mb-0.5 group-hover:text-white transition-colors">Direct Contact</div>
                <div className="text-[13px] font-bold tracking-[1px] text-white transition-colors">(912) 207-6273</div>
              </a>
            </div>
            
            {navItems.left.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.link || '#'}
                  className="text-white hover:text-cyan text-[12px] lg:text-[13px] font-bold tracking-[1.5px] uppercase relative flex items-center transition-colors py-4"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />}
                  <span className="absolute bottom-3 left-0 w-0 h-0.5 bg-cyan transition-all duration-300 group-hover:w-full"></span>
                </a>
                
                {item.dropdown && (
                  <div className="absolute top-[80%] left-0 w-[280px] bg-navy/95 backdrop-blur-3xl border border-cyan/20 shadow-2xl rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50">
                    <ul className="py-2">
                      {item.dropdown.map((sub, idx) => (
                        <li key={idx}>
                          <a href={sub.link} className="block px-6 py-3 text-[10px] lg:text-[11px] text-white hover:text-cyan hover:bg-white/5 transition-colors uppercase tracking-[2px] leading-relaxed border-b border-white/5 last:border-0">
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Centered Logo */}
          <div className="flex-shrink-0 z-50 relative group px-4">
            {/* Logo Glow Effect */}
            <div className={`absolute inset-0 bg-cyan blur-[40px] opacity-20 scale-150 rounded-full group-hover:opacity-40 transition-opacity duration-500 pointer-events-none ${scrolled ? 'hidden' : 'block'}`}></div>
            
            {/* The Logo image, shrinking significantly when scrolled */}
            <a href="#">
              <motion.img 
                layoutId={!isMobile ? "main-logo" : undefined}
                whileHover={{ scale: 1.05 }}
                transition={{ layout: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } }}
                src="/diamondrooflogo.webp" 
                alt="Diamond Roof Restoration" 
                className={`relative z-10 drop-shadow-[0_0_15px_rgba(64,145,177,0.3)] transition-[height] duration-500 ${
                  scrolled ? 'h-14 lg:h-16' : 'h-28 lg:h-36'
                } w-auto`}
              />
            </a>
          </div>

          {/* Right Side */}
          <div className={`flex-1 flex items-center justify-start pl-6 lg:pl-8 xl:pl-12 gap-4 lg:gap-8 transition-all duration-300 ${scrolled ? 'pt-0' : 'pt-3 lg:pt-5'}`}>
            {navItems.right.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.link || '#'}
                  className="text-white hover:text-cyan text-[12px] lg:text-[13px] font-bold tracking-[1.5px] uppercase relative flex items-center transition-colors py-4"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />}
                  <span className="absolute bottom-3 left-0 w-0 h-0.5 bg-cyan transition-all duration-300 group-hover:w-full"></span>
                </a>
                
                {item.dropdown && (
                  <div className="absolute top-[80%] left-0 w-[240px] bg-navy/95 backdrop-blur-3xl border border-cyan/20 shadow-2xl rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50">
                    <ul className="py-2">
                      {item.dropdown.map((sub, idx) => (
                        <li key={idx}>
                          <a href={sub.link} className="block px-6 py-3 text-[10px] lg:text-[11px] text-white hover:text-cyan hover:bg-white/5 transition-colors uppercase tracking-[2px] leading-relaxed border-b border-white/5 last:border-0">
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button Added */}
            <button className="hidden lg:block shimmer-btn bg-cyan text-white px-6 py-3.5 rounded text-[11px] font-extrabold uppercase tracking-[2px] shadow-[0_0_20px_rgba(64,145,177,0.4)] hover:bg-cyan/90 transition-all ml-auto whitespace-nowrap transform hover:-translate-y-0.5">
              GET A FREE QUOTE
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Slide-Out Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 w-full h-[100dvh] bg-navy/98 backdrop-blur-3xl border-l border-white/5 overflow-y-auto md:hidden shadow-2xl z-[-1] pt-28 pb-8"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {[...navItems.left, ...navItems.right].map((item) => (
                <div key={item.name} className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileExpandedDropdown(mobileExpandedDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between text-white hover:text-cyan text-base font-bold tracking-[2px] uppercase transition-colors w-full text-left"
                      >
                        {item.name}
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileExpandedDropdown === item.name ? 'rotate-180 text-cyan' : 'text-white/50'}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpandedDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col space-y-4 pt-4 pl-4 border-l border-white/10 mt-2">
                              {item.dropdown.map((sub, idx) => (
                                <a
                                  key={idx}
                                  onClick={() => setIsMenuOpen(false)}
                                  href={sub.link}
                                  className="text-ghost text-sm hover:text-cyan uppercase tracking-widest font-semibold transition-colors leading-[1.4]"
                                >
                                  {sub.name}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      onClick={() => setIsMenuOpen(false)}
                      href={item.link || '#'}
                      className="text-white hover:text-cyan text-base font-bold tracking-[2px] uppercase transition-colors"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              
              <div className="h-px w-full bg-white/10 my-4"></div>

              <a href="tel:9122076273" className="flex items-center gap-4 text-white hover:text-cyan transition-colors group mb-2">
                <div className="w-12 h-12 rounded-full bg-cyan/10 flex flex-shrink-0 items-center justify-center border border-cyan/20 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-cyan"/>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[2px] text-ghost font-bold mb-1">24/7 Emergency Service</div>
                  <div className="text-lg font-bold tracking-[1px]">(912) 207-6273</div>
                </div>
              </a>

              {/* Extended Contact Info Added */}
              <div className="flex flex-col gap-4 border-t border-white/10 pt-4">
                <a href="mailto:diamondroofrestorations@protonmail.com" className="flex items-center text-ghost/80 text-[12px] group hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex flex-shrink-0 items-center justify-center mr-3 border border-white/10 group-hover:border-cyan transition-colors">
                    <Mail className="w-3.5 h-3.5 text-cyan" />
                  </div>
                  <span className="truncate">diamondroofrestorations@protonmail.com</span>
                </a>
                <div className="flex items-start text-ghost/80 text-[12px]">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex flex-shrink-0 items-center justify-center mr-3 border border-white/10 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan" />
                  </div>
                  <div className="leading-relaxed">
                    <strong className="text-white">Diamond Roof Restorations</strong><br/>
                    133 W Cherry St Suite 204<br/>
                    Jesup, GA 31545
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-full shimmer-btn bg-cyan text-white px-6 py-4 rounded text-sm font-extrabold uppercase tracking-[2px] shadow-[0_0_20px_rgba(64,145,177,0.4)] mt-4 transition-all hover:bg-cyan/90"
              >
                GET A FREE QUOTE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
