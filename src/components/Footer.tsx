import { Facebook, Instagram, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Maintenance Plans', path: '/maintenance' },
    { name: 'Service Areas', path: '/#locations' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/employment' },
  ];

  const servicesLinks = [
    { name: 'Roofing Contractor', path: '/services/roofing-contractor' },
    { name: 'Metal Roof Installation', path: '/services/metal-roof-installation' },
    { name: 'Asphalt Shingle Roof Installation', path: '/services/asphalt-shingle-roof-installation' },
    { name: 'Vinyl Siding', path: '/services/vinyl-siding' },
    { name: 'Deck Building', path: '/services/deck-building' },
  ];

  return (
    <footer className="bg-navy pt-20 pb-10 border-t border-cyan/30 relative overflow-hidden">
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
              <a href="https://www.facebook.com/diamondroofrestorations" target="_blank" rel="noreferrer" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#1877F2] hover:border-[#1877F2] text-white hover:scale-110 transition-all">
                <span className="sr-only">Facebook</span>
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/diamondroofrestoration/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#E1306C] hover:border-[#E1306C] text-white hover:scale-110 transition-all">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://google.com/maps/place/Diamond+Roof+Restorations/data=!4m2!3m1!1s0x0:0x7881f2a0a8a703ea?sa=X&ved=1t:2428&hl=en&ictx=111" target="_blank" rel="noreferrer" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#4285F4] hover:border-[#4285F4] text-white hover:scale-110 transition-all">
                <span className="sr-only">Google Maps</span>
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Columns */}
          <div>
            <h4 className="font-display font-bold text-[12px] uppercase tracking-widest text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-ghost/60 hover:text-cyan text-[13px] transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Hours Column */}
          <div>
            <h4 className="font-display font-bold text-[12px] uppercase tracking-widest text-white mb-6">Our Services</h4>
            <ul className="space-y-3 mb-8">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-ghost/60 hover:text-cyan text-[12px] transition-colors block">{link.name}</Link>
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
                  <Link to="/#locations" className="text-cyan hover:text-white transition-colors uppercase font-bold text-[10px] tracking-wider">See All Service Areas →</Link>
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
            <Link to="/privacy" className="text-ghost/40 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-ghost/40 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
