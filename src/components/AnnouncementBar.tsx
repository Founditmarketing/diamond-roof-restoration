import { motion } from 'motion/react';

export function AnnouncementBar() {
  return (
    <div className="absolute top-0 left-0 w-full h-[30px] bg-cyan text-navy flex items-center overflow-hidden z-50">
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: '-50%' }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 20,
        }}
        className="flex whitespace-nowrap items-center text-[10px] font-bold uppercase tracking-[2px]"
      >
        {/* Duplicate content for seamless looping */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="mx-4">•</span>
            <span>Emergency Storm Response Available 24/7</span>
            <span className="mx-4">•</span>
            <span>Call (888) 555-ROOF</span>
            <span className="mx-4">•</span>
            <span>Free Inspections For A Limited Time</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
