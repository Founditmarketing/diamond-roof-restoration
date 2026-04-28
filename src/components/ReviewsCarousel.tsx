import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Ivo Vissenberg',
    role: 'Commercial Client',
    text: "Tyler and his group did a fabulous job. The man knows his product and he delivers it in a timely and professional manner. Our business is thankful to have found DRR and heartily recommends it to any who have a need for a roof restoration done right the first time.",
    rating: 5
  },
  {
    id: 2,
    name: 'Jeremy Wiggins',
    role: 'Commercial Client',
    text: "Tyler and his guys did a great job on my commercial business with around 20,000 sq ft of 20 year old metal roof. Did the job in a timely manner and did everything he said he would. Will definitely use him again and highly recommend Diamond Roof Restorations.",
    rating: 5
  },
  {
    id: 3,
    name: 'ellen mansfield',
    role: 'Residential Client',
    text: "Mr. Wiggins came to my home an inspected my roof for damage, he was very respectful an very informative as to what condition roof was in at present time an added it needed nothing, but gave a very affordable price on doing my roof.",
    rating: 5
  },
  {
    id: 4,
    name: 'Gaming Nishan',
    role: 'Satisfied Customer',
    text: "Diamond Roof Restoration exceeded my expectations with their top-notch service. The team was punctual, skilled, and very courteous. They transformed my roof, using high-quality materials and leaving no mess behind. I am extremely happy with the results.",
    rating: 5
  },
  {
    id: 5,
    name: 'Arifa Akter',
    role: 'Satisfied Customer',
    text: "Diamond Roof Restoration provides excellent service! Their professional team works quickly and efficiently, making the roof look brand new. Using quality materials and completing the job on time, I am completely satisfied. Highly recommend their services.",
    rating: 5
  },
  {
    id: 6,
    name: 'Loretta Dye',
    role: 'Satisfied Customer',
    text: "Diamond Roof Restoration did an excellent job restoring my roof off life support. The team was very knowledgeable, professional and polite. I often get calls requesting their number. I highly recommend Diamond Roof Restoration if you want the job done right the first time.",
    rating: 5
  },
  {
    id: 7,
    name: 'Fred Barber',
    role: 'Commercial Client',
    text: "Fast, reasonable and professional service. They have an honest and reputable company and care about their customers. I would highly recommend them to anyone without hesitation. For our company, they are now my go to roofing company.",
    rating: 5
  },
  {
    id: 8,
    name: 'Darryl Huggins',
    role: 'Commercial Client',
    text: "Diamond Roof Restorations was responsive and professional from the bidding process all the way through the completion of the project. They offered a service that had not been offered by previous companies. The professionalism and courtesy shown by Tyler and his team has opened more opportunities for business.",
    rating: 5
  },
  {
    id: 9,
    name: 'edwin stanley',
    role: 'Commercial Client',
    text: "Company was very responsive from the first call. Came to my business from a couple hours away, inspected my roof and before the end of day, emailed me an estimate. I called them, set up a date and time and they came and repaired my roof.",
    rating: 5
  },
  {
    id: 10,
    name: 'Donna Grover',
    role: 'Commercial Client',
    text: "Mr. Wiggins came and inspected my boutique store a month ago. He restored the whole roof in immaculate time. He was very responsive and professional. My store is so much cooler in this Georgia heat. Cant wait to save on the energy bill.",
    rating: 5
  },
  {
    id: 11,
    name: 'John crosier',
    role: 'Commercial Client',
    text: "Diamond roof coating saved our warehouse storage building, we had so many leaks. Our building is very large, with a metal standing seam roof. They cleaned all the rusty tin and sprayed thier sealant on roof. Great looking finish product. And long term warranty.",
    rating: 5
  },
  {
    id: 12,
    name: 'Jodee',
    role: 'Commercial Client',
    text: "Tyler Wiggins did a great job on our warehouse. He was professional, punctual and dependable. We all know how hard it is to get someone to actually show up to work. Thank you for such a great job.",
    rating: 5
  },
  {
    id: 13,
    name: 'Linda Durrence',
    role: 'Commercial Client',
    text: "Diamond Roof Restorations did an excellent job on my roof at my commercial building. I loved that they did a recording of the process and the before and after of the finished product. They began quickly as my roof was leaking in so many places. Definitely would use them again!",
    rating: 5
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
          className="relative h-[500px] md:h-[420px] flex items-center justify-center w-full max-w-6xl mx-auto"
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
                  <div className={`h-[460px] md:h-[380px] bg-navy border rounded-2xl p-6 pb-10 md:p-8 flex flex-col relative transition-colors duration-500 ${
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
                    
                    <blockquote className={`text-[14px] md:text-[15px] mb-4 md:mb-6 flex-grow leading-relaxed relative z-10 transition-colors duration-500 ${isCenter ? 'text-white' : 'text-ghost/70'}`}>
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
