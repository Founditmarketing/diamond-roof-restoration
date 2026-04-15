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
    <section className="bg-navy py-10 border-t border-cyan/30 relative z-20">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
          
          <div className="flex flex-wrap gap-10">
            {/* Stats */}
            <div className="flex flex-col items-center md:items-start">
              <div className="text-[24px] font-display font-extrabold text-cyan flex items-center">
                {isInView ? <CountUp end={500} duration={2.5} easingFn={(t, b, c, d) => c * (t /= d) * t * t + b} /> : '0'}
                <span>+</span>
              </div>
              <div className="text-ghost text-[11px] uppercase tracking-[1px] mt-1">Roofs Restored</div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="text-[24px] font-display font-extrabold text-cyan flex items-center">
                {isInView ? <CountUp end={120} duration={2.5} easingFn={(t, b, c, d) => c * (t /= d) * t * t + b} /> : '0'}
                <span>+</span>
              </div>
              <div className="text-ghost text-[11px] uppercase tracking-[1px] mt-1">Commercial Sites</div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="text-[24px] font-display font-extrabold text-cyan flex items-center">
                {isInView ? <CountUp end={4.9} decimals={1} duration={2.5} easingFn={(t, b, c, d) => c * (t /= d) * t * t + b} /> : '0'}
                <span>/5</span>
              </div>
              <div className="text-ghost text-[11px] uppercase tracking-[1px] mt-1">Customer Rating</div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex items-center justify-center md:justify-end gap-4 perspective-1000">
            <TiltBadge>
              <div className="text-white font-display font-bold text-xl tracking-tighter">BBB <span className="text-cyan text-sm">A+</span></div>
            </TiltBadge>
            <TiltBadge>
              <div className="text-white font-display font-bold text-xl tracking-tighter">OSHA <span className="text-cyan text-sm">CERT</span></div>
            </TiltBadge>
          </div>

        </div>
      </div>
    </section>
  );
}
