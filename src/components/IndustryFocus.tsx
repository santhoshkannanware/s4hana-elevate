import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const industries = [
  { title: "Energy & Natural Resources", challenges: ["JVA & production accounting", "Asset lifecycle management", "Commodity hedging & risk", "Regulatory & sustainability reporting"], gradient: "from-amber-900/90 to-stone-900/95" },
  { title: "Discrete Manufacturing", challenges: ["Production planning & scheduling", "Cost controlling & variance analysis", "Integrated supply chain & QM", "Shop floor integration"], gradient: "from-slate-800/90 to-zinc-900/95" },
  { title: "Financial Services", challenges: ["IFRS 9, 16 & 17 compliance", "Regulatory reporting automation", "Real-time risk analytics", "Treasury & cash management"], gradient: "from-blue-900/90 to-slate-900/95" },
  { title: "Public Services", challenges: ["Fund management & grants", "IPSAS reporting standards", "Budget execution & monitoring", "Citizen service portals"], gradient: "from-emerald-900/90 to-teal-900/95" },
  { title: "Consumer & Retail", challenges: ["Trade promotion management", "D2C & omnichannel commerce", "Revenue recognition", "Demand-driven inventory"], gradient: "from-purple-900/90 to-indigo-900/95" },
  { title: "Food & Beverage", challenges: ["Batch & shelf-life management", "COGS optimisation", "Compliance & traceability", "Recipe & formula management"], gradient: "from-orange-900/90 to-red-900/95" },
];

export default function IndustryFocus() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-[#0c0c0c]" id="industries">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="eyebrow" style={{ color: "rgba(232,160,0,.6)" }}>Industries</div>
          <h2 className="text-white font-bold leading-[1.08] tracking-[-0.03em] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Deep experience<br /><em className="text-gold font-normal">across every sector.</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[280px_1fr] gap-0">
          {/* Left — industry list */}
          <div className="flex flex-col border-r border-white/[0.08]">
            {industries.map((ind, i) => (
              <button
                key={ind.title}
                onClick={() => setActive(i)}
                className={`text-left px-5 py-4 border-b border-white/[0.06] transition-all duration-300 cursor-none ${
                  active === i
                    ? "bg-white/[0.05] text-gold border-l-2 border-l-gold"
                    : "text-white/50 hover:text-white/80 hover:bg-white/[0.02] border-l-2 border-l-transparent"
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
              className={`relative min-h-[320px] flex flex-col justify-center p-10 md:p-16 bg-gradient-to-br ${industries[active].gradient} rounded-none md:rounded-r-lg overflow-hidden`}
            >
              {/* Subtle pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,.08) 1px, transparent 1px)",
                backgroundSize: "24px 24px"
              }} />

              <div className="relative z-10">
                <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-2">
                  {industries[active].title}
                </h3>
                <p className="text-white/50 text-sm mb-8">Challenges we solve</p>

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
                      <span className="text-white/80 text-[.88rem] font-light leading-relaxed">{c}</span>
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
