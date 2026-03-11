import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const metrics = [
  { target: 28, suffix: "+", label: "Delighted Customers Across Regions", sublabel: "Local Presence, Global Expertise", ghost: "28" },
  { target: 50, suffix: "K", label: "Project Hours Experience", sublabel: "Maximized ROI", ghost: "50K" },
  { target: 500, suffix: "", label: "Years Combined Domain Knowledge", sublabel: "Transformation Specialists", ghost: "500" },
  { target: 75, suffix: "%", label: "SAP-Certified Consultants", sublabel: "Finance, Treasury & Analytics", ghost: "75" },
  { target: 45, suffix: "+", label: "Multi-Regional Industry Experts", sublabel: "Innovation at Core", ghost: "45" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const dur = 2000;
    const steps = 60;
    const inc = target / steps;
    let cur = 0;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(cur));
    }, dur / steps);
    return () => clearInterval(t);
  }, [started, target]);

  return <div ref={ref}>{count}{suffix}</div>;
}

export default function WhyKannanware() {
  return (
    <div className="relative overflow-hidden" style={{ background: "#0c0c0c" }}>
      {/* Noise texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")"
      }} />

      {/* Top gold accent line */}
      <div className="h-[1px] w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(232,160,0,.4), transparent)" }} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden px-8 py-11 border-r border-white/[0.08] last:border-r-0 cursor-none transition-all duration-500 hover:bg-[rgba(232,160,0,.06)]"
            whileHover={{ y: -4 }}
          >
            <div className="text-[3.6rem] font-bold text-white leading-none tracking-[-0.04em] mb-2 relative z-10">
              <CountUp target={m.target} suffix={m.suffix} />
            </div>
            <div className="text-[.82rem] text-white/65 font-light leading-[1.5] relative z-10">{m.label}</div>
            <div className="text-[.7rem] text-[rgba(232,160,0,.7)] font-normal leading-[1.45] mt-1.5 tracking-[.01em] relative z-10">{m.sublabel}</div>
            <div className="absolute right-[-10px] bottom-[-24px] text-[8rem] text-[rgba(232,160,0,.07)] font-bold pointer-events-none leading-none">{m.ghost}</div>
          </motion.div>
        ))}
      </div>

      {/* Bottom gold accent line */}
      <div className="h-[1px] w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(232,160,0,.4), transparent)" }} />
    </div>
  );
}
