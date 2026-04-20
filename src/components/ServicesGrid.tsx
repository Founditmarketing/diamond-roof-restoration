import { motion } from 'motion/react';
import { Building2, Factory, Home, Droplets, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    title: 'Commercial TPO',
    icon: Building2,
    description: 'Advanced thermoplastic polyolefin membranes engineered for superior reflectivity and energy efficiency in high-demand environments.',
    features: ['Heat-welded waterproof seams', 'Class A fire rating', '20+ year extended lifespan'],
    image: '/diamondroofgallery19.jpg'
  },
  {
    title: 'Metal Systems',
    icon: Factory,
    description: 'Comprehensive rust inhibition and seamless waterproofing coatings that extend the life of existing metal roofs without tear-offs.',
    features: ['Thermal shock protection', 'Stops leaks instantly', 'Reduces cooling costs'],
    image: '/diamondroofgallery12.jpg'
  },
  {
    title: 'Asphalt Shingles',
    icon: Home,
    description: 'Premium architectural shingles providing exceptional durability, weather resistance, and curb appeal for residential properties.',
    features: ['130mph wind resistance', 'Algae-defense technology', 'Lifetime warranty options'],
    image: '/diamondroofresidential1.jpg'
  },
  {
    title: 'Membrane Restoration',
    icon: Droplets,
    description: 'Fluid-applied elastomeric systems that create a seamless, waterproof barrier over aging single-ply and modified bitumen roofs.',
    features: ['Expands & contracts with weather', 'Highly reflective surface', 'Sustainable, eco-friendly solution'],
    image: '/diamondroofgallery10.jpg'
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent"></div>
      <div className="absolute -left-[200px] top-[20%] w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 md:flex md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6 uppercase tracking-tight">
              Engineered Solutions
            </h2>
            <p className="text-ghost/80 text-lg leading-relaxed">
              We don't just patch leaks; we engineer comprehensive restoration systems tailored to your specific roofing material and environmental challenges.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-cyan font-bold uppercase tracking-widest text-[12px] hover:text-white transition-colors mt-6 md:mt-0">
            View All Systems <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group p-6 md:p-10 border border-white/10 bg-navy hover:border-cyan/40 transition-all duration-500 cursor-pointer flex flex-col h-full relative overflow-hidden rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
            >
              {/* Card Background Image Layer */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.05] mix-blend-luminosity grayscale group-hover:opacity-[0.15] group-hover:grayscale-0 transition-all duration-700 pointer-events-none group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-0 mb-3 md:mb-6 relative z-10">
                <service.icon className="w-6 h-6 md:w-8 md:h-8 text-cyan shrink-0 md:mb-5 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-wider">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-ghost/70 text-[13px] md:text-[14px] leading-relaxed mb-5 md:mb-8 flex-grow relative z-10">
                {service.description}
              </p>

              <ul className="space-y-2 md:space-y-3 mb-5 md:mb-8 relative z-10">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[12px] md:text-[13px] text-ghost/80">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 md:pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                <span className="text-[11px] uppercase font-bold text-cyan tracking-widest group-hover:text-white transition-colors">
                  Explore System
                </span>
                <ArrowRight className="w-5 h-5 text-cyan group-hover:translate-x-2 group-hover:text-white transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="md:hidden w-full flex items-center justify-center gap-2 text-cyan font-bold uppercase tracking-widest text-[12px] hover:text-white transition-colors mt-10 border border-cyan/30 py-4 rounded">
          View All Systems <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
