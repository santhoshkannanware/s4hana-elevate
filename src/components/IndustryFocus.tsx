import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import industryTech from "@/assets/industry-tech.jpg";

const industries = [
  { title: "Energy & Natural Resources", challenges: ["JVA & production accounting", "Asset lifecycle management", "Commodity hedging & risk", "Regulatory & sustainability reporting"] },
  { title: "Discrete Manufacturing", challenges: ["Production planning & scheduling", "Cost controlling & variance analysis", "Integrated supply chain & QM", "Shop floor integration"] },
  { title: "Financial Services", challenges: ["IFRS 9, 16 & 17 compliance", "Regulatory reporting automation", "Real-time risk analytics", "Treasury & cash management"] },
  { title: "Public Services", challenges: ["Fund management & grants", "IPSAS reporting standards", "Budget execution & monitoring", "Citizen service portals"] },
  { title: "Consumer & Retail", challenges: ["Trade promotion management", "D2C & omnichannel commerce", "Revenue recognition", "Demand-driven inventory"] },
  { title: "Food & Beverage", challenges: ["Batch & shelf-life management", "COGS optimisation", "Compliance & traceability", "Recipe & formula management"] },
];

export default function IndustryFocus() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-card" id="industries">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="eyebrow">Industries</div>
            <h2 className="sec-h">
              Deep experience<br /><em>across every sector.</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border hidden lg:block"
          >
            <img src={industryTech} alt="Enterprise technology" className="w-full h-[240px] object-cover" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-[280px_1fr] gap-0 rounded-xl overflow-hidden border border-border">
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
                <span className="text-[.82rem] font-medium tracking-tight">{ind.title}</span>
              </button>
            ))}
          </div>

          {/* Right — expanded detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative min-h-[320px] flex flex-col justify-center p-10 md:p-16 bg-secondary overflow-hidden"
            >
              {/* Subtle pattern */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,.1) 1px, transparent 1px)",
                backgroundSize: "24px 24px"
              }} />

              <div className="relative z-10">
                <h3 className="text-foreground text-2xl md:text-3xl font-bold tracking-tight mb-2">
                  {industries[active].title}
                </h3>
                <p className="text-muted-foreground text-sm mb-8">Challenges we solve</p>

                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
                  {industries[active].challenges.map((c, i) => (
                    <motion.div
                      key={c}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-gold text-sm mt-0.5 shrink-0">→</span>
                      <span className="text-foreground/70 text-[.88rem] font-light leading-relaxed">{c}</span>
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
