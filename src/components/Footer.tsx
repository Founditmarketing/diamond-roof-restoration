export function Footer() {
  return (
    <footer className="bg-navy pt-20 pb-10 border-t border-cyan/30 relative overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topo" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 100 Q 25 50 50 100 T 100 100 M0 80 Q 25 30 50 80 T 100 80 M0 60 Q 25 10 50 60 T 100 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 text-white font-extrabold text-[1.2rem] uppercase tracking-[2px] mb-6">
              <div className="w-[30px] h-[30px] border-2 border-cyan rotate-45 flex items-center justify-center">
                <div className="w-[10px] h-[10px] bg-cyan"></div>
              </div>
              Diamond Roof
            </div>
            <p className="text-ghost/60 text-[13px] leading-relaxed max-w-sm mb-8">
              The industry standard in commercial and premium residential roof restoration. Engineered for longevity, executed with precision.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'LinkedIn', 'Instagram'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/10 hover:bg-cyan hover:border-cyan transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-white/80" style={{ maskImage: 'url(https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg)', maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }}></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Columns */}
          <div>
            <h4 className="font-display font-bold text-[12px] uppercase tracking-widest text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Projects', 'Service Areas', 'About Us', 'Contact', 'Review Us'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-ghost/60 hover:text-cyan text-[13px] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Hours Column */}
          <div>
            <h4 className="font-display font-bold text-[12px] uppercase tracking-widest text-white mb-6">Our Services</h4>
            <ul className="space-y-3 mb-8">
              {['Roofing Contractor', 'Metal Roof Installation', 'Asphalt Shingle Roof Installation'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-ghost/60 hover:text-cyan text-[12px] transition-colors block">{link}</a>
                </li>
              ))}
            </ul>

            <h4 className="font-display font-bold text-[12px] uppercase tracking-widest text-white mb-4">Operating Hours</h4>
            <div className="text-ghost/60 text-[12px] space-y-1">
              <div>Mon - Fri: 9:00 am - 5:00 pm</div>
              <div>Sat - Sun: Closed</div>
            </div>
          </div>

          {/* Location & Contact Column */}
          <div>
            <h4 className="font-display font-bold text-[12px] uppercase tracking-widest text-white mb-6">Contact & HQ</h4>
            <div className="mb-6">
              <div className="text-ghost font-bold text-[13px] leading-relaxed mb-3">
                Diamond Roof Restorations<br/>
                133 W Cherry St Suite 204<br/>
                Jesup, GA 31545, USA
              </div>
              <a href="tel:9122076273" className="block text-cyan hover:text-white transition-colors font-bold text-[16px] mb-1">(912) 207-6273</a>
              <a href="mailto:diamondroofrestorations@protonmail.com" className="block text-cyan/80 hover:text-white transition-colors text-[11px] break-all">diamondroofrestorations@protonmail.com</a>
            </div>
            <div>
              <h4 className="font-display font-bold text-[12px] uppercase tracking-widest text-white mb-3">Service Areas</h4>
              <div className="text-ghost/70 text-[11px] leading-relaxed">
                Baxley, GA &bull; Blackshear, GA &bull; Brunswick, GA &bull; Hilton Head, SC &bull; Hinesville, GA &bull; Jacksonville, FL &bull; Jesup, GA &bull; Pooler, GA
                <div className="mt-2">
                  <a href="#locations" className="text-cyan hover:text-white transition-colors uppercase font-bold text-[10px] tracking-wider">See All Service Areas →</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ghost/40 text-[12px]">
            &copy; {new Date().getFullYear()} Diamond Roof Restoration. All rights reserved.
          </p>
          <div className="flex gap-6 text-[12px]">
            <a href="#" className="text-ghost/40 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-ghost/40 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
