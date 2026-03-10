import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const metrics = [
  { value: 28, suffix: "+", label: "Delighted customers across regions" },
  { value: 50, suffix: "K", label: "Project hours experience" },
  { value: 500, suffix: "", label: "Years combined domain knowledge" },
  { value: 75, suffix: "%", label: "SAP-certified consultants" },
  { value: 45, suffix: "+", label: "Multi-regional industry experts" },
];

const capabilities = [
  "Transformation Specialists",
  "Finance, Treasury & Analytics",
  "Innovation at Core",
  "Local Presence, Global Expertise",
  "Maximized ROI",
  "Faster Response Times",
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function WhyKannanware() {
  return (
    <section className="section-spacing" id="why">
      <div className="section-container">
        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              Why enterprises choose{" "}
              <span className="text-gradient-blue">Kannanware</span>
            </h2>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              We don't just implement SAP. We transform how finance organizations think, operate, and compete — with advisory depth and execution precision that larger firms can't match.
            </p>
            <div className="w-16 h-[2px] bg-electric-blue/40" />
          </motion.div>

          <div className="space-y-8">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-baseline gap-6 group"
              >
                <div className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-gradient-blue min-w-[140px] md:min-w-[180px]">
                  <AnimatedCounter value={m.value} suffix={m.suffix} />
                </div>
                <div className="font-body text-sm md:text-base text-muted-foreground leading-snug flex-1 group-hover:text-foreground transition-colors duration-300">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Capability strip — flowing text, no boxes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-border/50 pt-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12">
            {capabilities.map((cap, i) => (
              <span
                key={cap}
                className="font-body text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default"
              >
                {i > 0 && <span className="text-electric-blue/30 mr-8 md:mr-12">·</span>}
                {cap}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
