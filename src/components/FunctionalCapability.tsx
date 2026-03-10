import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const processes = [
  { abbr: "R2R", name: "Record to Report", desc: "End-to-end financial closing, consolidation, and reporting automation across complex org structures." },
  { abbr: "O2C", name: "Order to Cash", desc: "Revenue recognition, billing, credit management, and accounts receivable optimization." },
  { abbr: "S2P", name: "Source to Pay", desc: "Procurement, invoice processing, vendor management, and accounts payable streamlining." },
  { abbr: "TRS", name: "Treasury", desc: "Cash management, liquidity planning, risk mitigation, and bank communication automation." },
  { abbr: "O&M", name: "Operate & Maintain", desc: "Continuous support, performance monitoring, and system health management." },
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
          className="mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            Process{" "}
            <span className="text-gradient-blue">expertise</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl">
            Deep functional capability across every core SAP Finance domain, connected as a continuous value chain.
          </p>
        </motion.div>

        {/* Timeline flow */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[42px] left-0 right-0 h-[2px] z-0">
            <div className="w-full h-full bg-gradient-to-r from-electric-blue/0 via-electric-blue/30 to-electric-blue/0" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0 relative z-10">
            {processes.map((p, i) => (
              <motion.div
                key={p.abbr}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative cursor-default"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                {/* Node */}
                <div className="flex flex-col items-center text-center px-3">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${
                    active === i 
                      ? "bg-electric-blue text-white shadow-lg shadow-electric-blue/30 scale-110" 
                      : "glass-panel text-electric-blue"
                  }`}>
                    <span className="font-heading text-lg font-black">{p.abbr}</span>
                  </div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{p.name}</h3>

                  {/* Arrow between steps */}
                  {i < processes.length - 1 && (
                    <div className="hidden md:block absolute top-[38px] -right-1 text-electric-blue/30 text-sm z-20">→</div>
                  )}

                  {/* Expanded detail */}
                  <AnimatePresence>
                    {active === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="font-body text-xs text-muted-foreground leading-relaxed mt-3 max-w-[200px]">
                          {p.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
