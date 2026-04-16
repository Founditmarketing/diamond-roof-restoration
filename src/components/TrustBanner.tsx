import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'motion/react';
import CountUp from 'react-countup';

function TiltBadge({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="flex items-center justify-center p-4 bg-white/5 rounded border border-white/10 cursor-pointer"
    >
      <div style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

export function TrustBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-navy py-6 border-y border-white/5 relative z-20">
      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        <div className="flex flex-row flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-6 md:gap-4 lg:gap-8 w-full">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-2 md:gap-4 group">
            <div className="text-[28px] md:text-[36px] lg:text-[44px] font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 flex items-center group-hover:scale-105 transition-transform duration-500">
              {isInView ? <CountUp end={500} duration={2.5} easingFn={(t, b, c, d) => c * (t /= d) * t * t + b} /> : '0'}
              <span className="text-cyan ml-1 text-[20px] md:text-[24px] lg:text-[32px]">+</span>
            </div>
            <div className="text-ghost/60 text-[9px] lg:text-[11px] uppercase tracking-[1px] md:tracking-[2px] leading-[1.2] md:leading-[1.3] font-bold">Roofs<br/><span className="text-white">Restored</span></div>
          </div>

          <div className="hidden md:block w-px h-10 lg:h-12 bg-gradient-to-b from-transparent via-cyan/20 to-transparent"></div>

          {/* Stat 2 */}
          <div className="flex items-center gap-2 md:gap-4 group">
            <div className="text-[28px] md:text-[36px] lg:text-[44px] font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 flex items-center group-hover:scale-105 transition-transform duration-500">
              {isInView ? <CountUp end={120} duration={2.5} easingFn={(t, b, c, d) => c * (t /= d) * t * t + b} /> : '0'}
              <span className="text-cyan ml-1 text-[20px] md:text-[24px] lg:text-[32px]">+</span>
            </div>
            <div className="text-ghost/60 text-[9px] lg:text-[11px] uppercase tracking-[1px] md:tracking-[2px] leading-[1.2] md:leading-[1.3] font-bold">Commercial<br/><span className="text-white">Sites</span></div>
          </div>

          <div className="hidden md:block w-px h-10 lg:h-12 bg-gradient-to-b from-transparent via-cyan/20 to-transparent"></div>

          {/* Stat 3 */}
          <div className="flex items-center gap-2 md:gap-4 group">
            <div className="text-[28px] md:text-[36px] lg:text-[44px] font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 flex items-center group-hover:scale-105 transition-transform duration-500">
              {isInView ? <CountUp end={4.9} decimals={1} duration={2.5} easingFn={(t, b, c, d) => c * (t /= d) * t * t + b} /> : '0'}
              <span className="text-cyan ml-1 text-[16px] md:text-[20px] lg:text-[24px]">/5</span>
            </div>
            <div className="text-ghost/60 text-[9px] lg:text-[11px] uppercase tracking-[1px] md:tracking-[2px] leading-[1.2] md:leading-[1.3] font-bold">Customer<br/><span className="text-white">Rating</span></div>
          </div>

          <div className="hidden lg:block w-px h-10 lg:h-12 bg-gradient-to-b from-transparent via-cyan/20 to-transparent"></div>

          {/* Badges */}
          <div className="flex items-center justify-center gap-4 lg:gap-6 perspective-1000 mt-2 md:mt-0">
            <TiltBadge>
              <div className="text-white font-display font-bold text-sm lg:text-lg tracking-tighter">BBB <span className="text-cyan text-[9px] lg:text-[11px]">A+</span></div>
            </TiltBadge>
            <TiltBadge>
              <div className="text-white font-display font-bold text-sm lg:text-lg tracking-tighter">OSHA <span className="text-cyan text-[9px] lg:text-[11px]">CERT</span></div>
            </TiltBadge>
          </div>

        </div>
      </div>
    </section>
  );
}
