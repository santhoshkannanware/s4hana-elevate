import { motion } from "framer-motion";

const floatingCards = [
  { label: "S/4HANA Finance", sub: "Real-time GL & Close", color: "rgba(232,160,0,.1)", stroke: "#E8A000", pos: "top-[18%] left-[4%]", delay: 0.8 },
  { label: "SuccessFactors", sub: "HR & Payroll", color: "rgba(5,150,105,.1)", stroke: "#059669", pos: "top-[30%] left-[8%]", delay: 1 },
  { label: "Supply Chain", sub: "EWM & IBP", color: "rgba(99,102,241,.1)", stroke: "#6366f1", pos: "top-[55%] left-[3%]", delay: 1.2 },
  { label: "SAP BTP", sub: "AI & Integration", color: "rgba(232,160,0,.1)", stroke: "#E8A000", pos: "top-[72%] left-[10%]", delay: 1.4 },
  { label: "Analytics Cloud", sub: "BI & Planning", color: "rgba(239,68,68,.1)", stroke: "#ef4444", pos: "top-[18%] right-[4%]", delay: 0.9 },
  { label: "SAP Ariba", sub: "Source-to-Pay", color: "rgba(14,165,233,.1)", stroke: "#0ea5e9", pos: "top-[35%] right-[6%]", delay: 1.1 },
  { label: "SAP CX Suite", sub: "Sales & Service", color: "rgba(168,85,247,.1)", stroke: "#a855f7", pos: "top-[55%] right-[3%]", delay: 1.3 },
  { label: "GROW with SAP", sub: "Public Cloud", color: "rgba(232,160,0,.1)", stroke: "#E8A000", pos: "top-[72%] right-[9%]", delay: 1.5 },
];

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col pt-16 bg-background relative overflow-hidden" id="hero">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(232,160,0,.07) 0%, transparent 65%), radial-gradient(ellipse 40% 30% at 15% 60%, rgba(232,160,0,.04) 0%, transparent 55%), radial-gradient(ellipse 40% 30% at 85% 60%, rgba(232,160,0,.04) 0%, transparent 55%)"
      }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-50" style={{
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,.06) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
        maskImage: "radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 80%)"
      }} />

      {/* Floating module cards — hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden xl:block" aria-hidden="true">
        {floatingCards.map((card) => (
          <motion.div
            key={card.label}
            className={`absolute ${card.pos} bg-white border border-border rounded-[14px] px-3 py-2.5 flex items-center gap-2.5 shadow-[0_4px_20px_rgba(0,0,0,.07)]`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ delay: card.delay, duration: 5, repeat: Infinity, repeatType: "reverse" }}
          >
            <div className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0" style={{ background: card.color }}>
              <svg viewBox="0 0 24 24" fill="none" stroke={card.stroke} strokeWidth="1.5" strokeLinecap="round" className="w-[18px] h-[18px]">
                <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <div>
              <div className="text-[.72rem] font-semibold text-foreground whitespace-nowrap tracking-tight">{card.label}</div>
              <div className="text-[.62rem] text-muted-foreground whitespace-nowrap">{card.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Centered content */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 md:px-10 relative z-10 text-center">
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white border border-border px-4 py-1.5 rounded-full mb-8 shadow-[0_2px_12px_rgba(0,0,0,.06)]"
        >
          <span className="w-[7px] h-[7px] bg-gold rounded-full" style={{ animation: "pulseDot 2s ease-in-out infinite" }} />
          <span className="text-[.68rem] font-semibold tracking-[.1em] uppercase text-gold">SAP Certified AI-First Implementation Partner</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold leading-[1.0] tracking-[-0.04em] text-foreground mb-5"
          style={{ fontSize: "clamp(2.6rem, 6.5vw, 6.8rem)" }}
        >
          Accelerate Your<br />
          Enterprise<br />
          <span className="text-gold italic">with SAP.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="text-muted-foreground font-light leading-[1.8] max-w-[560px] mx-auto mb-9"
          style={{ fontSize: "clamp(.92rem, 1.5vw, 1.1rem)" }}
        >
          Kannanware deploys SAP across <strong className="font-semibold text-foreground">Finance, Supply Chain, HR, CX &amp; beyond</strong> — with AI built into every stage of delivery. Faster implementations. Better outcomes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="flex gap-3.5 justify-center flex-wrap mb-16"
        >
          <button
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
            className="px-9 py-4 bg-gold text-black text-[.88rem] font-semibold rounded-full cursor-none shadow-[0_4px_20px_rgba(232,160,0,.3)] hover:translate-y-[-3px] hover:shadow-[0_14px_40px_rgba(232,160,0,.45)] transition-all duration-250"
          >
            Book a Consultation →
          </button>
          <button
            onClick={() => document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" })}
            className="px-9 py-4 bg-transparent text-foreground text-[.88rem] font-normal border-[1.5px] border-border rounded-full cursor-none flex items-center gap-2 hover:border-gold hover:text-gold hover:translate-y-[-3px] transition-all duration-250"
          >
            <span className="w-5 h-5 rounded-full border-[1.5px] border-current flex items-center justify-center text-[.45rem]">▶</span>
            Explore SAP Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}