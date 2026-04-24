import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar, ChevronRight } from 'lucide-react';

const posts = [
  {
    id: 'roof-maintenance-guide',
    category: 'Maintenance',
    date: 'April 10, 2025',
    readTime: '6 min read',
    title: 'The Complete Guide to Roof Maintenance: What Every Property Owner Should Know',
    excerpt: 'Routine roof maintenance is the single highest-ROI action you can take to protect your property. Here\'s exactly what to inspect, when to do it, and what to never ignore.',
    image: '/diamondroofgallery11.jpg',
    content: [
      {
        heading: 'Why Maintenance Matters More Than You Think',
        body: `Most property owners don't think about their roof until water is coming through the ceiling. By then, what could have been a $300 repair has turned into a $15,000 project. The math is simple: consistent, low-cost maintenance prevents catastrophic, high-cost failure.\n\nA well-maintained commercial or residential roof can last 20–40% longer than a neglected one. That's not marketing — that's physics. When small cracks seal and water has nowhere to pool, membranes and coatings stay intact far beyond their base lifespan.`
      },
      {
        heading: 'The Four Seasons of Roof Care',
        body: `**Spring:** After winter, inspect for cracked sealant around penetrations, lifted flashing, and any membrane blistering. Clear all drains and gutters of debris that accumulated over winter.\n\n**Summer:** Heat expansion can stress seams and coating edges. Check for bubbling or delamination on flat roofs. Inspect HVAC curbs and any roof-mounted equipment for rust or water infiltration.\n\n**Fall:** This is the most important season. Clear gutters before the first heavy rain. Inspect valleys and low-slope transitions where leaves accumulate and hold moisture.\n\n**Winter:** After any major storm, do a visual check for displaced or cracked materials. Standing water that freezes causes ice damming — a leading driver of interior leaks.`
      },
      {
        heading: 'The 10-Point Inspection Checklist',
        body: `1. Inspect all field membrane or shingles for cracks, tears, or lifting edges\n2. Check all penetration flashings (vents, pipes, HVAC) for gap separation\n3. Inspect perimeter edge metal for rust, buckling, or separation\n4. Verify all drains and scuppers are clear and functioning\n5. Look for standing water 48+ hours after rain\n6. Check interior ceiling tiles for staining or soft spots\n7. Inspect sealant at all termination bars and coping joints\n8. Look for biological growth — algae and moss hold moisture and accelerate degradation\n9. Document any changes with photos for your maintenance record\n10. Note any new rooftop equipment installations — these are common leak entry points`
      },
      {
        heading: 'When to Call a Professional',
        body: `DIY visual inspections are valuable, but nothing replaces a trained eye. You should call a professional roofer if you find: any interior water staining, visible daylight through roof decking, membrane splits longer than 6 inches, or flashing that has fully separated from the substrate.\n\nDiamond Roof Restoration offers maintenance plan memberships specifically for past clients — giving you scheduled inspections and priority repair access so you never fall behind on care.`
      },
    ],
  },
  {
    id: 'hiring-proven-professionals',
    category: 'Industry Insight',
    date: 'March 22, 2025',
    readTime: '5 min read',
    title: 'Why Hiring a Proven Roofing Professional Is the Most Important Decision You\'ll Make',
    excerpt: 'Low bids are tempting. But roofing is one of the few trades where a bad hire can cost you ten times what you saved. Here\'s what separates proven professionals from the rest.',
    image: '/diamondroofgallery14.jpg',
    content: [
      {
        heading: 'The Real Cost of a Bad Roof Job',
        body: `Every year, thousands of property owners hire the lowest bidder for roof work — and end up spending three to five times more fixing what went wrong. Improper installation voids manufacturer warranties, creates hidden leak pathways, and in commercial applications, can compromise the structural integrity of the entire building envelope.\n\nThe problem isn't just workmanship. It's accountability. Fly-by-night contractors disappear after the check clears. Proven professionals stand behind their work because their reputation depends on it.`
      },
      {
        heading: 'What "Proven" Actually Means',
        body: `A proven professional isn't just someone with a truck and a ladder. Look for:\n\n**Verifiable track record:** Can they show you completed projects similar in scope to yours? Not stock photos — actual local jobs you can verify.\n\n**Manufacturer certifications:** Top roofing material brands (Firestone, GAF, Carlisle) only certify contractors who meet strict installation training standards. A certified contractor means warranty coverage extends beyond just the material.\n\n**Proper licensing and insurance:** In Georgia and Florida, roofing contractors must be licensed. Ask for a copy. Ask for proof of general liability AND workers' comp. If a worker is injured on your property with an uninsured contractor, you can be held liable.\n\n**Local presence:** A contractor with a physical office and established local reputation has far more to lose from a bad job than one working out of a van.`
      },
      {
        heading: 'Red Flags to Walk Away From Immediately',
        body: `• Asking for full payment upfront before any work begins\n• No physical address or verifiable business registration\n• Pressure to sign immediately, often after a storm\n• Unable to provide proof of insurance on the spot\n• No written contract detailing scope, materials, and warranty\n• Bid that is 40%+ below all other quotes — someone is cutting corners\n\nStorm chasers are particularly common in Georgia and Florida. They follow hurricane and hail events, solicit aggressively, do fast low-quality work, and are gone before issues emerge.`
      },
      {
        heading: 'The Diamond Difference',
        body: `Diamond Roof Restoration has built its reputation on completed work, not promises. Every project we take on is documented, permitted where required, and backed by both our workmanship guarantee and manufacturer material warranties.\n\nWe encourage every client to verify our license, check our reviews, and speak with past customers before signing anything. That transparency is what separates proven professionals from those just passing through.`
      },
    ],
  },
  {
    id: 'solar-installs-and-roofs',
    category: 'Technology',
    date: 'February 14, 2025',
    readTime: '7 min read',
    title: 'Solar Installations and Your Roof: What You Must Know Before You Sign',
    excerpt: 'Solar panels are a smart long-term investment — but installing them on an unprepared or aging roof is a recipe for expensive problems. A roofing professional should always be your first call.',
    image: '/diamondroofgallery22.jpg',
    content: [
      {
        heading: 'The Solar Boom and the Roofing Problem Nobody Talks About',
        body: `Solar adoption has accelerated dramatically across Georgia, Florida, and South Carolina. Lower panel costs, federal tax incentives, and rising energy rates are making solar attractive for both residential and commercial properties.\n\nBut solar companies are focused on energy output — not on what's underneath the panels. In our experience, a significant percentage of solar installs happen on roofs that are either too old, structurally compromised, or simply not prepared for the penetrations and added load that come with a panel system.`
      },
      {
        heading: 'How Solar Panels Affect Your Roof',
        body: `**Penetrations are permanent leak risks.** Most racking systems require lag bolts driven through the roofing material into rafters. Even with flashing and sealant, every penetration is a potential water entry point — especially as sealants age and settle.\n\n**Added weight stresses the structure.** A standard residential solar array adds 2–4 pounds per square foot. On an already-stressed or aging roof deck, this can accelerate deflection and cracking.\n\n**Panels trap heat and moisture.** The space between panels and the roof surface creates a microenvironment. In humid climates like coastal Georgia and Florida, this accelerates biological growth (algae, moss, mold) and can degrade shingles or membranes faster than an exposed surface would.\n\n**Maintenance access becomes complicated.** Any roof work after installation requires panel removal, which solar companies typically charge for separately. A roof problem that costs $800 pre-solar can cost $3,000+ post-solar once removal and reinstallation is factored in.`
      },
      {
        heading: 'What to Do Before You Go Solar',
        body: `**Step 1: Get an independent roof inspection.** Not from the solar company — from a roofing professional with no financial stake in the solar sale. You need an honest assessment of your roof's remaining lifespan and current condition.\n\n**Step 2: Address any issues first.** If your roof is within 5–10 years of end-of-life, it's almost always more cost-effective to restore or replace the roof before installing solar. Removing and reinstalling panels later costs significantly more.\n\n**Step 3: Ask the solar company about their penetration and flashing warranty.** A reputable solar installer will provide a separate warranty for any roof penetrations they create — usually 10 years minimum. If they won't, that's a red flag.\n\n**Step 4: Document everything.** Photograph your roof before, during, and after installation. This protects you if leak disputes arise later between the solar company and your roofer.`
      },
      {
        heading: 'Commercial Properties: Additional Considerations',
        body: `For flat commercial roofs — TPO, EPDM, PVC, or spray foam — solar mounting systems are different but the risks are comparable. Ballasted systems avoid penetrations but add significant weight. Penetrating systems require certified installation by someone who understands your specific membrane system.\n\nDiamond Roof Restoration works with commercial property owners before and after solar installations — inspecting substrates, repairing any installation-related damage, and providing the documentation you need to protect your building warranty.\n\nIf you're considering solar for a property we've serviced, reach out before you sign with any solar provider. A 30-minute consultation can save you years of headaches.`
      },
    ],
  },
];

/* ─── Blog List ─────────────────────────────────────── */
export function BlogPage() {
  const [activePost, setActivePost] = useState<string | null>(null);

  if (activePost) {
    const post = posts.find(p => p.id === activePost)!;
    return <BlogPost post={post} onBack={() => { setActivePost(null); window.scrollTo({ top: 0 }); }} />;
  }

  return (
    <main className="min-h-screen bg-navy pt-44 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-[11px] font-bold uppercase tracking-[2px] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" /> Expert Insights
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tight mb-5">
            The Diamond <span className="text-cyan">Blog</span>
          </h1>
          <p className="text-ghost/70 text-lg max-w-2xl mx-auto">Industry knowledge, maintenance tips, and straight talk from roofing professionals.</p>
        </motion.div>

        {/* Featured post */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          onClick={() => setActivePost(posts[0].id)}
          className="cursor-pointer group relative rounded-2xl overflow-hidden border border-white/10 hover:border-cyan/30 transition-all mb-8 grid md:grid-cols-2">
          <div className="relative h-64 md:h-auto overflow-hidden">
            <img src={posts[0].image} alt={posts[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent" />
          </div>
          <div className="p-8 md:p-12 bg-white/5 backdrop-blur-sm flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-[10px] font-bold uppercase tracking-[2px]">{posts[0].category}</span>
              <span className="text-ghost/40 text-xs flex items-center gap-1"><Calendar className="w-3 h-3" />{posts[0].date}</span>
              <span className="text-ghost/40 text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{posts[0].readTime}</span>
            </div>
            <h2 className="text-white font-extrabold text-2xl md:text-3xl leading-tight mb-4 group-hover:text-cyan transition-colors">{posts[0].title}</h2>
            <p className="text-ghost/60 text-sm leading-relaxed mb-6">{posts[0].excerpt}</p>
            <span className="inline-flex items-center gap-2 text-cyan text-sm font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
              Read Article <ChevronRight className="w-4 h-4" />
            </span>
          </div>
        </motion.div>

        {/* Posts 2 & 3 */}
        <div className="grid md:grid-cols-2 gap-6">
          {posts.slice(1).map((post, i) => (
            <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              onClick={() => setActivePost(post.id)}
              className="cursor-pointer group rounded-2xl overflow-hidden border border-white/10 hover:border-cyan/30 transition-all bg-white/5">
              <div className="relative h-52 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-[10px] font-bold uppercase tracking-[2px]">{post.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-ghost/40 text-xs">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                </div>
                <h2 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-cyan transition-colors">{post.title}</h2>
                <p className="text-ghost/60 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-cyan text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                  Read Article <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

/* ─── Individual Post ───────────────────────────────── */
function BlogPost({ post, onBack }: { post: typeof posts[0]; onBack: () => void }) {
  return (
    <main className="min-h-screen bg-navy pt-44 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <button onClick={onBack} className="inline-flex items-center gap-2 text-ghost/50 hover:text-cyan text-xs uppercase tracking-[2px] font-bold transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </button>

          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-[10px] font-bold uppercase tracking-[2px]">{post.category}</span>
            <span className="text-ghost/40 text-xs flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
            <span className="text-ghost/40 text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight mb-8">{post.title}</h1>

          <div className="rounded-2xl overflow-hidden mb-10 h-72 md:h-96">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <p className="text-ghost/80 text-lg leading-relaxed mb-10 border-l-4 border-cyan pl-5 italic">{post.excerpt}</p>

          <div className="flex flex-col gap-10">
            {post.content.map((section) => (
              <div key={section.heading}>
                <h2 className="text-white font-bold text-xl md:text-2xl mb-4 flex items-start gap-3">
                  <span className="w-1 h-7 bg-cyan rounded-full flex-shrink-0 mt-0.5" />
                  {section.heading}
                </h2>
                <div className="text-ghost/70 leading-relaxed text-base whitespace-pre-line pl-4">{section.body}</div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 rounded-2xl bg-white/5 border border-cyan/20 text-center">
            <h3 className="text-white font-bold text-xl mb-3">Ready to protect your roof?</h3>
            <p className="text-ghost/60 text-sm mb-6">Schedule a professional inspection with Diamond Roof Restoration today.</p>
            <a href="tel:9122076273" className="inline-flex items-center gap-2 shimmer-btn bg-cyan text-white px-8 py-4 rounded-xl text-[12px] font-extrabold uppercase tracking-[2px] shadow-[0_0_30px_rgba(64,145,177,0.3)] hover:shadow-[0_0_50px_rgba(64,145,177,0.5)] transition-all">
              Call (912) 207-6273
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
