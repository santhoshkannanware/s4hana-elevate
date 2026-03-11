import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

/* ─── Transformation Wheel Segments ─── */
const wheelSegments = [
  { label: "SAP Treasury &\nRisk Management", shortLabel: "Treasury & Risk", desc: "Comprehensive treasury operations including cash management, liquidity forecasting, and financial risk mitigation across global entities.", icon: "🏦" },
  { label: "SAP Analytics\nCloud", shortLabel: "Analytics Cloud", desc: "Real-time insight into P&L, balance sheets, and forecasting with embedded AI-driven predictive analytics.", icon: "📊" },
  { label: "SAP Group\nReporting", shortLabel: "Group Reporting", desc: "True consolidation with audit trails and disclosure support for multi-entity financial reporting.", icon: "📋" },
  { label: "SAP Advanced\nFinancial Closing", shortLabel: "Financial Closing", desc: "Automated period-end closing orchestration that reduces cycle time and ensures compliance.", icon: "⏱️" },
  { label: "SAP Document\nReporting Compliance", shortLabel: "Doc Compliance", desc: "Regulatory document management ensuring compliance across jurisdictions with automated workflows.", icon: "📄" },
  { label: "SAP Billing &\nRevenue Innovation", shortLabel: "Billing & Revenue", desc: "Flexible billing models and revenue recognition aligned with IFRS 15 and ASC 606 standards.", icon: "💰" },
];

/* ─── Solution Table Data ─── */
const solutions = [
  {
    title: "SAP FI/CO",
    value: "End-to-end financial integrity, multi-entity consolidation",
    kpis: ["Time to close", "Compliance rate", "Reconciliation time"],
    accent: "hsl(var(--gold))",
  },
  {
    title: "SAP Analytics Cloud (SAC)",
    value: "Real-time insight into P&L, balance sheets, and forecasting",
    kpis: ["Decision speed", "Forecast accuracy"],
    accent: "hsl(var(--gold-light))",
  },
  {
    title: "Group Reporting",
    value: "True consolidation with audit trails and disclosure support",
    kpis: ["Audit readiness", "Cycle time"],
    accent: "hsl(var(--gold))",
  },
  {
    title: "Intercompany Reconciliation",
    value: "Automation across geographies/entities",
    kpis: ["Manual effort reduction", "Error rates"],
    accent: "hsl(var(--gold-light))",
  },
  {
    title: "Fiori for Finance",
    value: "Role-based user experience for CFO teams",
    kpis: ["UX efficiency", "Adoption rates"],
    accent: "hsl(var(--gold))",
  },
];

/* ─── Interactive Transformation Wheel ─── */
function TransformationWheel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (!isAutoPlay) return;
    timerRef.current = setInterval(() => {
      setActiveIdx((i) => (i + 1) % wheelSegments.length);
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, [isAutoPlay]);

  const handleClick = (i: number) => {
    setActiveIdx(i);
    setIsAutoPlay(false);
    clearInterval(timerRef.current);
    // Resume auto-play after 8 seconds of inactivity
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const seg = wheelSegments[activeIdx];
  const segCount = wheelSegments.length;

  return (
    <div className="relative w-full max-w-[520px] mx-auto aspect-square">
      {/* Outer ring glow */}
      <div className="absolute inset-[-20px] rounded-full pointer-events-none" style={{
        background: "radial-gradient(circle, rgba(232,160,0,.08) 40%, transparent 70%)",
      }} />

      {/* Outer circle border */}
      <div className="absolute inset-0 rounded-full" style={{
        border: "1px solid rgba(232,160,0,.12)",
      }} />

      {/* Rotating dashed ring */}
      <motion.div
        className="absolute inset-3 rounded-full pointer-events-none"
        style={{ border: "1px dashed rgba(232,160,0,.15)" }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />

      {/* Segment buttons around the wheel */}
      {wheelSegments.map((s, i) => {
        const angle = (i * 360) / segCount - 90; // start from top
        const rad = (angle * Math.PI) / 180;
        const radius = 42; // percentage from center
        const x = 50 + radius * Math.cos(rad);
        const y = 50 + radius * Math.sin(rad);
        const isActive = i === activeIdx;

        return (
          <motion.button
            key={i}
            onClick={() => handleClick(i)}
            className="absolute cursor-none z-10"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="flex flex-col items-center gap-1.5"
              animate={{
                scale: isActive ? 1 : 0.85,
                opacity: isActive ? 1 : 0.5,
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Node dot */}
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-lg transition-all duration-500"
                style={{
                  background: isActive ? "rgba(232,160,0,.2)" : "rgba(255,255,255,.04)",
                  border: isActive ? "2px solid hsl(var(--gold))" : "1px solid rgba(255,255,255,.1)",
                  boxShadow: isActive ? "0 0 20px rgba(232,160,0,.3)" : "none",
                }}
              >
                {s.icon}
              </div>
              {/* Label */}
              <span
                className="text-[.6rem] font-semibold text-center leading-tight max-w-[90px] transition-colors duration-500"
                style={{ color: isActive ? "hsl(var(--gold))" : "rgba(255,255,255,.35)" }}
              >
                {s.shortLabel}
              </span>
            </motion.div>
          </motion.button>
        );
      })}

      {/* Connector lines from center to active node */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
        {wheelSegments.map((_, i) => {
          const angle = (i * 360) / segCount - 90;
          const rad = (angle * Math.PI) / 180;
          const radius = 42;
          const x = 50 + radius * Math.cos(rad);
          const y = 50 + radius * Math.sin(rad);
          const isActive = i === activeIdx;

          return (
            <line
              key={i}
              x1="50" y1="50" x2={x} y2={y}
              stroke={isActive ? "rgba(232,160,0,.4)" : "rgba(255,255,255,.04)"}
              strokeWidth={isActive ? "0.4" : "0.15"}
              strokeDasharray={isActive ? "none" : "1 1"}
              style={{ transition: "all 0.5s" }}
            />
          );
        })}
      </svg>

      {/* Center hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div
          className="w-36 h-36 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center text-center p-4"
          style={{
            background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold-light)))",
            boxShadow: "0 0 40px rgba(232,160,0,.3), inset 0 1px 0 rgba(255,255,255,.2)",
          }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <span className="text-[.6rem] font-bold uppercase tracking-[.15em] text-black/60 mb-1">SAP CFO</span>
          <span className="text-[.85rem] font-bold text-black leading-tight">Transformation</span>
          <span className="text-[.85rem] font-bold text-black leading-tight">Wheel</span>
        </motion.div>
      </div>

      {/* Active segment detail - below wheel on mobile, overlay on desktop */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIdx}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="absolute -bottom-28 left-0 right-0 text-center px-4"
        >
          <p className="text-[.72rem] font-bold text-gold tracking-[.1em] uppercase mb-1.5">{seg.shortLabel}</p>
          <p className="text-[.8rem] font-light text-muted-foreground leading-[1.7] max-w-[360px] mx-auto">{seg.desc}</p>
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5">
        {wheelSegments.map((_, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-1.5 h-1.5 rounded-full transition-all duration-500 cursor-none"
            style={{
              background: i === activeIdx ? "hsl(var(--gold))" : "rgba(255,255,255,.15)",
              transform: i === activeIdx ? "scale(1.5)" : "scale(1)",
              boxShadow: i === activeIdx ? "0 0 8px rgba(232,160,0,.4)" : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export default function OfficeCFO() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-background" id="cfo">
      {/* Top accent */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(232,160,0,.3), transparent)" }} />

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none opacity-[0.04]" style={{ background: "radial-gradient(ellipse, hsl(var(--gold)), transparent 65%)" }} />

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="eyebrow justify-center">Office of the CFO</div>
          <h2 className="sec-h">
            How We Help the<br />
            <em>Office of the CFO</em>
          </h2>
          <p className="sec-p mx-auto text-center">
            Comprehensive SAP solutions that transform finance operations, accelerate close cycles,
            and deliver real-time intelligence to the modern CFO.
          </p>
        </motion.div>

        {/* Two-column: Wheel + Solutions */}
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-16 items-start">
          {/* Left — Interactive Wheel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative pt-4 pb-36"
          >
            <TransformationWheel />
          </motion.div>

          {/* Right — Solution Value Table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[.65rem] font-bold tracking-[.2em] uppercase text-gold mb-6 flex items-center gap-2">
              <span className="w-5 h-px bg-gold inline-block" />
              Solution & Services
            </p>

            <div className="space-y-3">
              {solutions.map((sol, i) => (
                <motion.div
                  key={sol.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onMouseEnter={() => setHoveredRow(i)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className="group relative p-5 rounded-xl cursor-none border transition-all duration-400"
                  style={{
                    background: hoveredRow === i ? "rgba(232,160,0,.04)" : "hsl(var(--card))",
                    borderColor: hoveredRow === i ? "rgba(232,160,0,.2)" : "hsl(var(--border))",
                  }}
                >
                  {/* Left gold bar */}
                  <motion.div
                    className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full"
                    style={{ background: sol.accent }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: hoveredRow === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-[.92rem] font-bold text-foreground mb-1.5 tracking-tight">
                        {sol.title}
                      </h4>
                      <p className="text-[.8rem] font-light text-muted-foreground leading-[1.7] mb-3">
                        {sol.value}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {sol.kpis.map((kpi) => (
                          <span
                            key={kpi}
                            className="text-[.65rem] font-medium px-2.5 py-1 rounded-full transition-all duration-300"
                            style={{
                              background: hoveredRow === i ? "rgba(232,160,0,.12)" : "rgba(255,255,255,.04)",
                              color: hoveredRow === i ? "hsl(var(--gold))" : "rgba(255,255,255,.4)",
                              border: hoveredRow === i ? "1px solid rgba(232,160,0,.2)" : "1px solid rgba(255,255,255,.06)",
                            }}
                          >
                            {kpi}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      className="mt-1 text-gold/30 group-hover:text-gold transition-colors duration-300"
                      animate={{ x: hoveredRow === i ? 4 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
