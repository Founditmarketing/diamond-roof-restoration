import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, ChevronRight, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

const SERVICES_DATA = [
  {
    id: "roofing-contractor",
    shortName: "Roofing Contractor",
    title: "Commercial & Residential Roofing Contractor",
    heroDesc: "The premier full-service roofing contractor in the Southeast. We deliver engineered solutions, not temporary patches.",
    headerTag: "Expert Contractors",
    bodyTitle: "A Contractor You Can Trust.",
    bodyHtml: [
      "Finding a reliable commercial roofing contractor shouldn't be a gamble. Diamond Roof Restorations operates on transparency, speed, and uncompromising quality.",
      "Whether you are dealing with a massive warehouse leak or looking to secure a residential property, our localized crews deploy rapidly to assess your asset. We utilize advanced drone technology and thermal imaging to locate exact failure points before we ever propose a solution.",
      "We differentiate ourselves by prioritizing restoration over replacement. By applying state-of-the-art acrylics and silicones directly over your existing structure, we save our clients 50-70% compared to traditional tear-offs."
    ],
    features: ["Thermal & Drone Inspections", "Licensed & Insured", "Warranty-Backed Projects", "Rapid Dispatch"],
    image: "/diamondroofgallery10.jpg"
  },
  {
    id: "metal-roof-installation",
    shortName: "Metal Roofs",
    title: "Metal Roof Restoration & Installation",
    heroDesc: "Halt rust, stop condensation, and permanently seal metal seams. Engineered metal coatings for heavy commercial facilities.",
    headerTag: "Metal Specialists",
    bodyTitle: "Defend Your Metal Assets.",
    bodyHtml: [
      "Metal roofs are incredible assets, but fastener back-out, seam separation, and rust can quickly compromise a building's integrity. Instead of costly panel replacement, our Metal Roof Restoration system completely eliminates vulnerabilities.",
      "We begin by thoroughly power washing the surface, treating existing oxidation with advanced rust-inhibitors, and sealing every individual fastener. We then apply fabric-reinforced tape to all seams before layering an ultra-reflective top coat.",
      "The result? A seamless, watertight membrane that moves flexibly with the severe thermal expansion common in metal buildings, cutting cooling costs by up to 30%."
    ],
    features: ["Rust Halting Treatments", "Fastener Encapsulation", "30% Cooling Reductions", "Seamless Protection"],
    image: "/diamondroofgallery12.jpg"
  },
  {
    id: "asphalt-shingle-roof-installation",
    shortName: "Asphalt Shingles",
    title: "Asphalt Shingle Roof Restoration",
    heroDesc: "Extend the life of your shingle roof. We restore protective oils and granular adhesion to aging residential and commercial shingles.",
    headerTag: "Shingle Restoration",
    bodyTitle: "Revitalize Aging Asphalt.",
    bodyHtml: [
      "Over time, the brutal Southern sun bakes the essential petrochemical oils out of asphalt shingles, causing them to dry, crack, and lose their water-shedding granules.",
      "Instead of a messy, expensive tear-off, our advanced shingle rejuvenation treatments penetrate deep into the asphalt matrix. This restores flexibility, re-adheres loose granules, and instantly adds up to 10-15 years of functional life to the roof.",
      "Our process is fast, environmentally friendly (keeping tons of asphalt out of local landfills), and costs a fraction of a full replacement."
    ],
    features: ["10-15 Year Life Extension", "Restores Shingle Flexibility", "Eco-Friendly Process", "Zero Tear-Off Mess"],
    image: "/diamondroofresidential3.jpg"
  },
  {
    id: "membrane-roofing-installation",
    shortName: "Roof Restoration",
    title: "Roof Restoration Services",
    heroDesc: "High-performance fluid-applied membranes that form a monolithic, watertight seal over existing commercial roofs.",
    headerTag: "Liquid Membrane",
    bodyTitle: "Monolithic Waterproofing.",
    bodyHtml: [
      "Traditional rolled roofing fails at the seams. Our membrane roofing systems are fluid-applied, curing into a continuous, rubber-like barrier with zero structural seams or failure points.",
      "We apply specialized elastomeric acrylics or high-solids silicone over aging modified bitumen, Built-Up Roofs (BUR), or concrete. This creates a brilliant white, highly reflective shield that aggressively fights off tropical rains and blistering UV rays.",
      "Because the system is fully bonded to the existing roof, there is no threat of wind uplift, making it incredibly resilient during regional hurricane seasons."
    ],
    features: ["Zero Seams to Fail", "Hurricane Wind Resistant", "Bonds Directly to Substrate", "Highly Reflective Topcoat"],
    image: "/diamondroofgallery15.jpg"
  },
  {
    id: "single-ply-roofing-installation",
    shortName: "Single Ply Roofing",
    title: "Single Ply Roofing Installation",
    heroDesc: "Durable, energy-efficient Single-Ply membrane installations designed for massive commercial and industrial warehouse spans.",
    headerTag: "Single Ply Masters",
    bodyTitle: "Engineered Commercial Roofing.",
    bodyHtml: [
      "For extensive flat or low-slope commercial facilities, Single-Ply roofing remains a cornerstone of reliable protection. We specialize in retrofitting TPO, PVC, and EPDM systems.",
      "Using mechanically fastened or fully-adhered application methods, we ensure the membrane is flawlessly secured. Our technicians expertly heat-weld the seams, creating an impenetrable plastic fusion that water simply cannot pass through.",
      "Single-ply systems remain incredibly flexible, easily handling building settlement and thermal cycling without fracturing."
    ],
    features: ["Heat-Welded Seams", "Tear & Puncture Resistant", "Ideal for Massive Facilities", "Proven Longevity"],
    image: "/diamondroofgallery11.jpg"
  },
  {
    id: "fabric-reinforced-roofing-installation",
    shortName: "Fabric Reinforced",
    title: "Fabric Reinforced Roofing Systems",
    heroDesc: "The ultimate combination of fluid coatings and specialized structural fabric to build a bulletproof roofing layer.",
    headerTag: "Structural Fortification",
    bodyTitle: "Rugged Fabric Integration.",
    bodyHtml: [
      "For older roofs with extensive cracking, alligatoring, or severe structural fatigue, simple fluid coatings aren't enough. Our Fabric Reinforced system acts as a cast for your roof.",
      "We embed a tough, flexible spun-lace polyester fabric directly into a heavy base coat of acrylic or silicone. Once the top coats are applied over the fabric, the roof achieves massive tensile strength.",
      "This multi-layered approach bridges huge gaps, prevents future tearing, and easily handles extreme rooftop foot traffic or heavy HVAC service requirements."
    ],
    features: ["Massive Tensile Strength", "Bridges Existing Cracks", "Withstands Heavy Foot Traffic", "Extends Roof Life by Decades"],
    image: "/diamondroofgallery4.jpg"
  },
  {
    id: "commercial-roof-waterproofing",
    shortName: "Waterproofing",
    title: "Commercial Roof Waterproofing",
    heroDesc: "Eliminate pooling water anomalies and structural leaks with our advanced commercial waterproofing protocols.",
    headerTag: "Commercial Defense",
    bodyTitle: "Total Water Mitigation.",
    bodyHtml: [
      "Waterproofing a commercial roof is not about simple caulking; it requires understanding hydrodynamics and facility architecture. We locate exactly how and why water is bypassing your barrier.",
      "By utilizing high-build silicone flashing grades and specialized primers, we target vulnerable zones: scuppers, parapet walls, HVAC curbs, and skylights. These high-risk penetration points are sealed completely.",
      "Our waterproofing ensures that even on zero-slope roofs where water ponds for days, moisture cannot penetrate the molecular structure of the coating."
    ],
    features: ["Ponding Water Resistance", "Parapet Wall Sealing", "HVAC Curb Protection", "Instant Leak Cessation"],
    image: "/diamondroofgallery22.jpg"
  },
  {
    id: "spray-foam-roofing-installation",
    shortName: "Spray Foam",
    title: "Spray Polyurethane Foam (SPF) Roofing",
    heroDesc: "The ultimate insulator and waterproofer. SPF roofing instantly solves leaks while drastically slashing facility energy costs.",
    headerTag: "Energy Efficiency",
    bodyTitle: "Insulate and Seal Simultaneously.",
    bodyHtml: [
      "Spray Polyurethane Foam (SPF) is a marvel of modern roofing engineering. Applied as a liquid, it expands 30 times its original volume, instantly filling every crack, divot, and seam before hardening into a dense insulating layer.",
      "Unlike traditional insulation boards, SPF is perfectly seamless and inherently waterproof. Because it provides an exceptionally high R-value, industrial facilities see immediate and dramatic reductions in their HVAC loads and power bills.",
      "We top the foam with durable, UV-resistant elastomeric coatings to protect the system indefinitely. When maintained properly, an SPF roof can last the lifetime of the building."
    ],
    features: ["Massive Energy Savings", "Highest R-Value per Inch", "Fills Every Micro-Crack", "Self-Flashing Around Units"],
    image: "/diamondroofgallery21.jpg"
  },
  {
    id: "tpo",
    shortName: "TPO Systems",
    title: "TPO Roof Installation & Restoration",
    heroDesc: "Thermoplastic Polyolefin (TPO) experts. We install new massive TPO arrays or restore failing, weathered TPO membranes.",
    headerTag: "TPO Certified",
    bodyTitle: "Modern Flat Roof Solutions.",
    bodyHtml: [
      "TPO is the fastest-growing commercial roofing system globally, favored for its affordability, bright white reflectivity, and strong heat-welded seams.",
      "Whether you are constructing a new facility and need raw TPO installation, or managing an aging 15-year-old TPO roof that is chalking, shrinking, and pulling at the seams, we have the exact solution.",
      "Our TPO Restoration fluid-applied systems can actually bond directly to weathered TPO, essentially gluing the failing seams back down and coating it in a monolithic protective layer without ever triggering a landfill tear-off."
    ],
    features: ["New TPO Installation", "Weathered TPO Restoration", "Heat-Welded Seam Repair", "Extreme UV Resistance"],
    image: "/diamondroofgallery19.jpg"
  },
  {
    id: "vinyl-siding",
    shortName: "Vinyl Siding",
    title: "Vinyl Siding Installation & Replacement",
    heroDesc: "Durable, low-maintenance vinyl siding that protects your property from the elements while elevating curb appeal. Expert installation across Georgia, Florida, and South Carolina.",
    headerTag: "Exterior Specialists",
    bodyTitle: "Protect Your Walls. Elevate Your Property.",
    bodyHtml: [
      "Your roof isn't the only barrier between your property and the elements — your siding is equally critical. Failing, cracked, or aging siding allows moisture infiltration, promotes mold growth inside wall cavities, and dramatically reduces your property's energy efficiency and resale value.",
      "Diamond Roof Restoration brings the same precision and professionalism to vinyl siding that we apply to every roofing project. We install high-grade, impact-resistant vinyl panels that are engineered to withstand the humidity, heat, and severe storm seasons common across the Southeast. Our siding systems require virtually zero maintenance and hold their color and structure for decades.",
      "Whether you are replacing deteriorating wood or aluminum siding on a residential property, or refreshing the exterior of a commercial building, our crews work cleanly, efficiently, and to a finished standard that we're proud to put our name on."
    ],
    features: ["Impact-Resistant Panels", "Moisture & Mold Barrier", "Energy Efficiency Boost", "Full Trim & Wrap Included"],
    image: "/diamondroofresidential1.jpg"
  },
  {
    id: "deck-building",
    shortName: "Deck Building",
    title: "Custom Deck Design & Construction",
    heroDesc: "Beautifully crafted, structurally engineered decks built to last in the Southern climate. From concept to completion, we handle everything.",
    headerTag: "Custom Construction",
    bodyTitle: "Expand Your Living Space Outdoors.",
    bodyHtml: [
      "A well-built deck does more than add square footage — it transforms how you use and enjoy your property. Diamond Roof Restoration builds custom decks for residential homeowners and commercial properties across Georgia, Florida, and South Carolina, engineered specifically for the demands of the Southern climate: heat, humidity, UV exposure, and seasonal storm loads.",
      "We work with a range of premium decking materials — pressure-treated lumber, composite decking (Trex, TimberTech), and PVC board — depending on your budget, aesthetic goals, and maintenance preferences. Every deck we build is engineered with proper footing depths, joist sizing, and ledger connections to meet or exceed local building codes.",
      "From a simple ground-level platform to a multi-level entertainment structure with built-in seating, railings, and integrated lighting, our team handles design, permitting, and construction start to finish. You get one point of contact, transparent pricing, and a finished product backed by our workmanship warranty."
    ],
    features: ["Custom Design & Permitting", "Composite & Treated Lumber", "Code-Compliant Engineering", "Workmanship Warranty"],
    image: "/diamondroofresidential2.jpg"
  }
];

export function ServicePage() {
  const { serviceId } = useParams();
  
  const serviceData = SERVICES_DATA.find(srv => srv.id === serviceId);

  useEffect(() => {
    if (serviceData) {
      document.title = `${serviceData.shortName} | Diamond Roof Restorations`;
      window.scrollTo(0, 0);
    }
  }, [serviceData]);

  if (!serviceData) {
    return <Navigate to="/#services" replace />;
  }

  return (
    <main className="min-h-screen bg-navy relative pt-40 lg:pt-48 pb-0 overflow-hidden text-white">
      {/* Background element */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay"></div>

      {/* --- SECTION 1: HERO --- */}
      <section className="relative w-full min-h-[50vh] lg:min-h-[60vh] flex flex-col justify-center items-center text-center px-6 pb-12">
        
        <div className="absolute inset-0 bg-[url('/diamondroofgallery19.jpg')] bg-cover bg-center bg-no-repeat opacity-20 -z-10 blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40 -z-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[150px] -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl z-10 mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-[10px] font-bold uppercase tracking-[2px] mb-6 shadow-[0_0_15px_rgba(64,145,177,0.2)]">
            <ShieldCheck className="w-3.5 h-3.5" />
            {serviceData.headerTag}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[70px] font-display font-extrabold text-white mb-8 uppercase tracking-tight leading-[1.05] text-balance">
            <span className="text-cyan">{serviceData.title.split(' ').slice(0, -1).join(' ')}</span>
            {' '}{serviceData.title.split(' ').slice(-1)}
          </h1>
          <p className="text-ghost/90 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-light">
            {serviceData.heroDesc}
          </p>
        </motion.div>
      </section>

      {/* --- SECTION 2: BODY CONTENT --- */}
      <section className="pt-12 pb-24 relative overflow-hidden bg-navy">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image Block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
            >
              <div className="absolute inset-0 bg-cyan/20 blur-[80px] -z-10 rounded-full mix-blend-screen" />
              <img 
                src={serviceData.image} 
                alt={serviceData.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent z-10" />
            </motion.div>

            {/* Right Text Block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white uppercase tracking-tight mb-8">
                {serviceData.bodyTitle}
              </h2>
              
              <div className="space-y-6 text-ghost/80 text-lg leading-relaxed font-light">
                {serviceData.bodyHtml.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 bg-white/5 border border-white/10 p-6 rounded-2xl">
                {serviceData.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan flex-shrink-0" />
                    <span className="font-bold text-sm tracking-wide text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- SECTION 3: CTA --- */}
      <section className="py-24 relative bg-cyan overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        
        {/* Subtle decorative elements */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-navy/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-navy uppercase tracking-tight mb-6 leading-none">
            Ready to secure your future?
          </h2>
          <p className="text-navy/80 font-bold text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
            Book a free, no-obligation {serviceData.shortName} inspection with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="w-full sm:w-auto bg-navy text-white px-10 py-5 rounded text-[14px] font-extrabold uppercase tracking-[2px] shadow-2xl hover:bg-navy/90 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group">
              Schedule Your Inspection
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="tel:9122076273" className="w-full sm:w-auto bg-transparent border-2 border-navy text-navy hover:bg-navy/10 px-10 py-4.5 rounded text-[14px] font-extrabold uppercase tracking-[2px] transition-all flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Call (912) 207-6273
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
