import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Property Manager',
    text: "Diamond Roof Restoration completely transformed our 50,000 sq ft facility. The team was professional, fast, and the new TPO system is flawless. We haven't had a single leak since.",
    rating: 5,
    avatar: '/diamondroofgallery19.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Homeowner',
    text: "After a massive hail storm, Diamond was the only company that gave us a straight answer. They handled the insurance claim and installed a beautiful architectural shingle roof in two days.",
    rating: 5,
    avatar: '/diamondroofgallery20.jpg'
  },
  {
    id: 3,
    name: 'David Rodriguez',
    role: 'Facility Director',
    text: "Their commercial waterproofing process is top-notch. They saved us tens of thousands by restoring our existing metal roof instead of a full tear-off.",
    rating: 5,
    avatar: '/diamondroofgallery21.jpg'
  },
  {
    id: 4,
    name: 'Emily Carter',
    role: 'HOA President',
    text: "We hired Diamond to replace the roofs on 12 multi-family buildings. The project management was exceptional, keeping residents informed and finishing ahead of schedule.",
    rating: 5,
    avatar: '/diamondroofgallery22.jpg'
  },
  {
    id: 5,
    name: 'James Wilson',
    role: 'Warehouse Owner',
    text: "The spray foam coating they applied to our aging warehouse roof stopped all our leaks immediately and noticeably reduced our cooling costs this summer. Highly recommended.",
    rating: 5,
    avatar: '/diamondroofgallery23.jpg'
  },
  {
    id: 6,
    name: 'Linda Martinez',
    role: 'Retail Store Owner',
    text: "Professional from start to finish. They repaired our flat roof without disrupting our business hours. The crew was clean, respectful, and the work is guaranteed.",
    rating: 5,
    avatar: '/diamondroofgallery4.jpg'
  }
];

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    if (offset.x < -50 || velocity.x < -500) {
      next();
    } else if (offset.x > 50 || velocity.x > 500) {
      prev();
    }
  };

  return (
    <section id="reviews" className="py-24 bg-navy text-white relative overflow-hidden border-t border-white/5">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 uppercase tracking-tight">
            Don't Just Take Our Word For It
          </h2>
          <p className="text-ghost/80 text-lg">
            Hear directly from property managers and homeowners who trusted Diamond with their most valuable assets.
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div 
          className="relative h-[450px] md:h-[400px] flex items-center justify-center w-full max-w-6xl mx-auto"
          style={{ perspective: 1000 }}
        >
          <AnimatePresence initial={false}>
            {reviews.map((review, index) => {
              // Calculate relative position for infinite wrap effect
              let offset = index - currentIndex;
              if (offset < -Math.floor(reviews.length / 2)) offset += reviews.length;
              if (offset > Math.floor(reviews.length / 2)) offset -= reviews.length;

              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;
              const isHidden = Math.abs(offset) > 1;

              return (
                <motion.div
                  key={review.id}
                  className="absolute w-full max-w-[320px] md:max-w-md cursor-grab active:cursor-grabbing"
                  initial={false}
                  animate={{
                    x: isCenter ? '0%' : isLeft ? '-105%' : isRight ? '105%' : offset > 1 ? '200%' : '-200%',
                    scale: isCenter ? 1 : 0.85,
                    opacity: isCenter ? 1 : isHidden ? 0 : 0.4,
                    zIndex: isCenter ? 30 : isHidden ? 10 : 20,
                    rotateY: isCenter ? 0 : isLeft ? 15 : isRight ? -15 : 0,
                  }}
                  transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  onClick={() => {
                    if (isLeft) prev();
                    if (isRight) next();
                  }}
                >
                  <div className={`h-[380px] md:h-[350px] bg-navy border rounded-2xl p-8 flex flex-col relative transition-colors duration-500 ${
                    isCenter 
                      ? 'border-cyan/50 shadow-[0_20px_50px_rgba(64,145,177,0.2)] bg-white/10' 
                      : 'border-white/10 shadow-xl bg-white/5'
                  }`}>
                    <Quote className={`absolute top-8 right-8 w-16 h-16 transition-colors duration-500 ${isCenter ? 'text-cyan/20' : 'text-white/5'}`} />
                    
                    <div className="flex gap-1 mb-6 relative z-10">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 fill-current transition-colors duration-500 ${isCenter ? 'text-cyan' : 'text-ghost/50'}`} />
                      ))}
                    </div>
                    
                    <blockquote className={`text-lg mb-8 flex-grow leading-relaxed relative z-10 transition-colors duration-500 ${isCenter ? 'text-white' : 'text-ghost/70'}`}>
                      "{review.text}"
                    </blockquote>
                    
                    <div className="flex flex-col mt-auto relative z-10">
                      <div className="font-bold uppercase tracking-wider text-white">{review.name}</div>
                      <div className="text-cyan text-[10px] font-bold uppercase tracking-widest mt-1">{review.role}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-8 mt-8">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-cyan hover:border-cyan hover:text-navy transition-all group"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <div className="flex gap-3">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  idx === currentIndex ? 'w-8 bg-cyan shadow-[0_0_10px_rgba(64,145,177,0.5)]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-cyan hover:border-cyan hover:text-navy transition-all group"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
