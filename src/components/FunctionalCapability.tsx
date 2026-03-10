import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const processes = [
  { abbr: "R2R", name: "Record to Report", desc: "End-to-end financial closing, consolidation, and reporting automation." },
  { abbr: "O2C", name: "Order to Cash", desc: "Revenue recognition, billing, credit management, and receivables." },
  { abbr: "S2P", name: "Source to Pay", desc: "Procurement, invoice processing, vendor management, and payables." },
  { abbr: "TRS", name: "Treasury", desc: "Cash management, liquidity planning, risk mitigation, and bank comms." },
  { abbr: "O&M", name: "Operate & Maintain", desc: "Continuous support, performance monitoring, and optimization." },
];

export default function FunctionalCapability() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="section-spacing relative" style={{ background: "linear-gradient(180deg, hsl(var(--background)), hsl(220 26% 10%))" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            Process{" "}
            <span className="text-gradient-blue">expertise</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl">
            Deep functional capability across every core SAP Finance domain, connected as a continuous value chain.
          </p>
        </motion.div>

        {/* Horizontal connected flow — text-based, no cards */}
        <div className="hidden md:flex items-start justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-5 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent" />

          {processes.map((p, i) => (
            <motion.div
              key={p.abbr}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex-1 text-center cursor-default relative group"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Dot on the line */}
              <div className={`w-2.5 h-2.5 rounded-full mx-auto mb-6 transition-all duration-500 ${
                active === i 
                  ? "bg-electric-blue shadow-lg shadow-electric-blue/40 scale-150" 
                  : "bg-electric-blue/30"
              }`} />

              <div className={`font-heading text-xs font-bold tracking-[0.2em] uppercase mb-2 transition-colors duration-300 ${
                active === i ? "text-electric-blue" : "text-electric-blue/40"
              }`}>
                {p.abbr}
              </div>

              <h3 className={`font-heading text-base font-bold mb-2 transition-colors duration-300 ${
                active === i ? "text-foreground" : "text-muted-foreground"
              }`}>
                {p.name}
              </h3>

              <AnimatePresence>
                {active === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-body text-xs text-muted-foreground leading-relaxed max-w-[180px] mx-auto overflow-hidden"
                  >
                    {p.desc}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Arrow */}
              {i < processes.length - 1 && (
                <div className="absolute top-4 -right-1 text-electric-blue/20 text-xs hidden md:block">→</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile — simple stacked list */}
        <div className="md:hidden space-y-6">
          {processes.map((p, i) => (
            <motion.div
              key={p.abbr}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <div className="font-heading text-xs font-bold text-electric-blue tracking-widest mt-1 min-w-[36px]">{p.abbr}</div>
              <div>
                <div className="font-heading text-base font-bold text-foreground">{p.name}</div>
                <div className="font-body text-sm text-muted-foreground mt-1">{p.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
