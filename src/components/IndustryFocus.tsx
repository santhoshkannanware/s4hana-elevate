import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import industryEnergy from "@/assets/industry-energy.jpg";
import industryManufacturing from "@/assets/industry-manufacturing.jpg";
import industryFinance from "@/assets/industry-finance.jpg";
import industryTech from "@/assets/industry-tech.jpg";
import teamCollab from "@/assets/team-collab.jpg";
import deliveryPhase from "@/assets/delivery-phase.jpg";
import { useRegion } from "@/contexts/RegionContext";
import { getIndustryHeader, getIndustryContent } from "@/data/regionContent";

const industryImages = [industryEnergy, industryManufacturing, industryFinance, industryTech, teamCollab, deliveryPhase];

export default function IndustryFocus() {
  const [active, setActive] = useState(0);
  const { region } = useRegion();
  const indHeader = getIndustryHeader(region);
  const industries = getIndustryContent(region).map((ind, i) => ({ ...ind, image: industryImages[i % industryImages.length] }));

  return (
    <section className="py-24 md:py-32 bg-card" id="industries">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="eyebrow">Industries</div>
          <h2 className="sec-h">
            Deep experience<br /><em>across every sector.</em>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mt-4 font-light leading-relaxed">
            We bring domain-specific SAP expertise to the industries that matter most — combining deep functional knowledge with proven delivery frameworks.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-0 rounded-xl overflow-hidden border border-border">
          {/* Left — industry list */}
          <div className="flex flex-col bg-background">
            {industries.map((ind, i) => (
              <button
                key={ind.title}
                onClick={() => setActive(i)}
                className={`text-left px-5 py-4 border-b border-border transition-all duration-300 cursor-none ${
                  active === i
                    ? "bg-secondary text-gold border-l-2 border-l-gold"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 border-l-2 border-l-transparent"
                }`}
              >
                <span className="text-[.95rem] font-medium tracking-tight">{ind.title}</span>
              </button>
            ))}
          </div>

          {/* Right — expanded detail with image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="relative min-h-[420px] flex flex-col bg-secondary overflow-hidden"
            >
              {/* Background image */}
              <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                <motion.img
                  key={industries[active].image}
                  src={industries[active].image}
                  alt={industries[active].title}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/60 to-secondary" />
                {/* Stat badge */}
                <div className="absolute top-4 right-4 bg-gold/90 text-black text-[.78rem] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">
                  {industries[active].stat}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-10 flex-1">
                <h3 className="text-foreground text-2xl md:text-3xl font-bold tracking-tight mb-2">
                  {industries[active].title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 font-light leading-relaxed max-w-lg">
                  {industries[active].desc}
                </p>

                <p className="text-[.78rem] font-bold tracking-[.2em] uppercase text-gold mb-4">Challenges we solve</p>
                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
                  {industries[active].challenges.map((c, i) => (
                    <motion.div
                      key={c}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-gold text-sm mt-0.5 shrink-0">→</span>
                      <span className="text-foreground/70 text-[.95rem] font-light leading-relaxed">{c}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
