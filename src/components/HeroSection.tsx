import { motion } from "framer-motion";
import { Zap, CheckCircle, Globe, Play } from "lucide-react";

const badges = [
  { icon: Zap, label: "AI-Accelerated Delivery" },
  { icon: CheckCircle, label: "SAP Certified Partner" },
  { icon: Globe, label: "Global Delivery Footprint" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-soft-slate pt-20 overflow-hidden">
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-10"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-warm-gold/40 text-warm-gold text-xs md:text-sm font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-warm-gold" />
              SAP Certified AI-First Implementation Partner
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-6 md:mb-8"
            style={{ color: "hsl(var(--soft-slate-fg))" }}
          >
            The AI-First SAP{" "}
            <br className="hidden sm:block" />
            Consulting Partner{" "}
            <br />
            <span className="text-warm-gold italic">Built for Enterprises.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{ color: "hsl(var(--slate-text))" }}
          >
            Kannanware deploys SAP across{" "}
            <strong style={{ color: "hsl(var(--soft-slate-fg))" }}>
              Finance, Supply Chain, HR, CX &amp; beyond
            </strong>{" "}
            — with AI built into every stage of delivery. Faster implementations. Better outcomes. Smarter SAP.
          </motion.p>

          {/* Badges row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10"
          >
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-warm-gold/30 text-sm font-medium"
                style={{ color: "hsl(var(--soft-slate-fg))" }}
              >
                <badge.icon className="w-4 h-4 text-warm-gold" />
                {badge.label}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 bg-warm-gold text-white font-body font-bold text-sm md:text-base rounded-md hover:bg-warm-gold/90 transition-colors duration-200"
            >
              Book a Consultation →
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 rounded-md font-body font-bold text-sm md:text-base transition-colors duration-200"
              style={{
                borderColor: "hsl(var(--soft-slate-fg))",
                color: "hsl(var(--soft-slate-fg))",
              }}
            >
              <Play className="w-4 h-4" />
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
