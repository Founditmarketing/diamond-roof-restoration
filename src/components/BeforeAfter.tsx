import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const allProjects = [
  {
    id: 'c1',
    category: 'commercial',
    image: '/diamondroofgallery10.jpg',
  },
  {
    id: 'c2',
    category: 'commercial',
    image: '/diamondroofgallery11.jpg',
  },
  {
    id: 'c3',
    category: 'commercial',
    image: '/diamondroofgallery12.jpg',
  },
  {
    id: 'c4',
    category: 'commercial',
    image: '/diamondroofgallery13.jpg',
  },
  {
    id: 'r1',
    category: 'residential',
    image: '/diamondroofgallery15.jpg',
  },
  {
    id: 'r2',
    category: 'residential',
    image: '/diamondroofgallery17.jpg',
  },
  {
    id: 'r3',
    category: 'residential',
    image: '/diamondroofgallery.jpg',
  }
];

export function BeforeAfter() {
  const [filter, setFilter] = useState<'all' | 'commercial' | 'residential'>('all');
  const [spotlightId, setSpotlightId] = useState(allProjects[0].id);

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  // Ensure spotlightId is valid for current filter
  useEffect(() => {
    if (!filteredProjects.find(p => p.id === spotlightId)) {
      setSpotlightId(filteredProjects[0].id);
    }
  }, [filter, filteredProjects, spotlightId]);

  const spotlitProject = filteredProjects.find(p => p.id === spotlightId) || filteredProjects[0];
  const smallerProjects = filteredProjects.filter(p => p.id !== spotlitProject.id);

  return (
    <section id="proof" className="py-24 bg-navy">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4 uppercase tracking-tight">
              The Proof is in the Performance
            </h2>
            <p className="text-ghost/80 text-lg">
              Browse our portfolio of completed restorations. We strip problems down and rebuild with superior materials.
            </p>
          </div>
          
          {/* Filter */}
          <div className="flex bg-white/5 p-1 rounded-lg self-start md:self-end border border-white/10 overflow-x-auto w-full md:w-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {['all', 'commercial', 'residential'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`flex-1 md:flex-none px-3 md:px-6 py-2.5 rounded-md text-[11px] md:text-sm font-semibold transition-all uppercase tracking-wide md:tracking-wider whitespace-nowrap ${
                  filter === f ? 'bg-cyan text-white shadow-sm' : 'text-ghost/60 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Spotlit Image */}
          <div className="lg:col-span-8 h-[280px] md:h-[450px] lg:h-[600px] relative rounded-2xl overflow-hidden border border-cyan/30 shadow-[0_40px_100px_rgba(0,0,0,0.5)] group">
            <AnimatePresence mode="wait">
              <motion.img
                key={spotlitProject.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                src={spotlitProject.image}
                alt="Featured Project"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>

          {/* Smaller Images Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4 content-start">
            <AnimatePresence mode="popLayout">
              {smallerProjects.map((project) => (
                <motion.button
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  onClick={() => setSpotlightId(project.id)}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 hover:border-cyan/50 transition-all duration-300 group shadow-lg"
                >
                  <img 
                    src={project.image} 
                    alt="Project Thumbnail" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/40 group-hover:bg-transparent transition-colors duration-300" />
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
