import { motion } from "framer-motion";
import { Zap, CheckCircle, Globe, Play } from "lucide-react";

const oldDashRows = [
  { vendor: "VND-4821", desc: "Mat. Procurement Q3", amount: "€ 142,890.00", status: "PARKED", date: "12.03.2024" },
  { vendor: "VND-1093", desc: "Intrcmp. Settle FY23", amount: "€ 891,204.50", status: "BLOCKED", date: "08.01.2024" },
  { vendor: "VND-7745", desc: "Dep. Run Asset Grp 4", amount: "€ 56,100.00", status: "CLEARED", date: "22.11.2023" },
  { vendor: "VND-3320", desc: "Accrual Rev. Period 6", amount: "€ 318,440.00", status: "PARKED", date: "15.09.2023" },
  { vendor: "VND-5501", desc: "GR/IR Reconciliation", amount: "€ 74,220.75", status: "OPEN", date: "03.07.2023" },
];

function OldDashboard() {
  return (
    <div className="rounded-lg p-4 md:p-6 text-[10px] md:text-xs w-full" style={{ background: "hsl(220 10% 92%)", color: "hsl(220 10% 25%)" }}>
      <div className="flex items-center justify-between mb-3 border-b pb-2" style={{ borderColor: "hsl(220 10% 80%)" }}>
        <span className="font-bold text-xs md:text-sm">SAP FI — Document Journal</span>
        <div className="flex gap-1">
          {["All", "Parked", "Blocked", "Open"].map(f => (
            <span key={f} className="px-2 py-0.5 rounded-sm" style={{ background: "hsl(220 10% 85%)" }}>{f}</span>
          ))}
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left border-b" style={{ borderColor: "hsl(220 10% 82%)" }}>
            <th className="py-1.5 font-semibold">Vendor</th>
            <th className="py-1.5 font-semibold hidden md:table-cell">Description</th>
            <th className="py-1.5 font-semibold text-right">Amount</th>
            <th className="py-1.5 font-semibold text-center">Status</th>
            <th className="py-1.5 font-semibold text-right hidden sm:table-cell">Date</th>
          </tr>
        </thead>
        <tbody>
          {oldDashRows.map((r, i) => (
            <tr key={i} className="border-b" style={{ borderColor: "hsl(220 10% 86%)" }}>
              <td className="py-2 font-mono">{r.vendor}</td>
              <td className="py-2 hidden md:table-cell">{r.desc}</td>
              <td className="py-2 text-right font-mono">{r.amount}</td>
              <td className="py-2 text-center">
                <span className="px-1.5 py-0.5 rounded-sm text-[9px] font-bold" style={{
                  background: r.status === "BLOCKED" ? "hsl(0 50% 85%)" : r.status === "CLEARED" ? "hsl(120 20% 85%)" : "hsl(40 30% 85%)",
                  color: r.status === "BLOCKED" ? "hsl(0 50% 35%)" : r.status === "CLEARED" ? "hsl(120 30% 30%)" : "hsl(40 40% 30%)"
                }}>{r.status}</span>
              </td>
              <td className="py-2 text-right hidden sm:table-cell">{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function NewDashboard() {
  return (
    <div className="rounded-lg p-4 md:p-6 text-[10px] md:text-xs w-full" style={{ background: "hsl(0 0% 100%)", color: "hsl(220 26% 14%)", border: "1px solid hsl(210 15% 89%)" }}>
      <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4">
        {[
          { label: "Cash Position", value: "€ 4.2M", delta: "+12%" },
          { label: "Days to Close", value: "3.1", delta: "-40%" },
          { label: "Forecast Accuracy", value: "94%", delta: "+8%" },
        ].map((kpi, i) => (
          <div key={i} className="rounded-md p-3 md:p-4" style={{ background: "hsl(210 20% 97%)" }}>
            <div className="text-[9px] mb-1" style={{ color: "hsl(215 16% 46%)" }}>{kpi.label}</div>
            <div className="font-heading font-bold text-sm md:text-lg">{kpi.value}</div>
            <div className="text-[9px] font-semibold" style={{ color: "hsl(var(--warm-gold))" }}>{kpi.delta}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4">
        <div className="rounded-md p-3 md:p-4" style={{ background: "hsl(210 20% 97%)" }}>
          <div className="text-[9px] mb-2" style={{ color: "hsl(215 16% 46%)" }}>Revenue by Quarter</div>
          <div className="flex items-end gap-1 h-12">
            {[40, 55, 45, 70, 65, 80, 75, 90].map((h, i) => (
              <div key={i} className="flex-1 rounded-t" style={{
                height: `${h}%`,
                background: i >= 6 ? "hsl(var(--warm-gold))" : "hsl(var(--warm-gold) / 0.25)"
              }} />
            ))}
          </div>
        </div>
        <div className="rounded-md p-3 md:p-4" style={{ background: "hsl(210 20% 97%)" }}>
          <div className="text-[9px] mb-1" style={{ color: "hsl(215 16% 46%)" }}>AI Insight</div>
          <div className="text-[10px] leading-relaxed">
            <span className="font-semibold" style={{ color: "hsl(var(--warm-gold))" }}>Pattern detected:</span> Intercompany settlement cycle can be reduced by 2.3 days.
          </div>
        </div>
      </div>
      <div className="rounded-md p-3" style={{ background: "hsl(210 20% 97%)" }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[9px] font-semibold" style={{ color: "hsl(var(--warm-gold))" }}>● Live</span>
          <span className="text-[9px]" style={{ color: "hsl(215 16% 46%)" }}>Financial Documents</span>
        </div>
        {oldDashRows.slice(0, 3).map((r, i) => (
          <div key={i} className="flex items-center justify-between py-1.5" style={{ borderBottom: i < 2 ? "1px solid hsl(210 15% 89%)" : "none" }}>
            <span className="font-mono">{r.vendor}</span>
            <span className="font-mono text-right">{r.amount}</span>
            <span className="px-1.5 py-0.5 rounded-sm text-[9px] font-semibold" style={{ color: "hsl(var(--warm-gold))" }}>
              {r.status === "BLOCKED" ? "PROCESSING" : r.status === "PARKED" ? "REVIEWED" : r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const badges = [
  { icon: Zap, label: "AI-Accelerated Delivery" },
  { icon: CheckCircle, label: "SAP Certified Partner" },
  { icon: Globe, label: "Global Delivery Footprint" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-soft-slate">
      {/* Looping dashboard background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-full max-w-5xl px-8 relative">
          <div className="absolute inset-0" style={{ animation: "dashboard-loop 12s ease-in-out infinite" }}>
            <OldDashboard />
          </div>
          <div className="scan-line absolute left-0 right-0 z-10" style={{ animation: "scan-loop 12s ease-in-out infinite" }} />
          <div style={{ animation: "dashboard-loop-alt 12s ease-in-out infinite" }}>
            <NewDashboard />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-[1]" style={{ background: "hsl(var(--soft-slate-bg) / 0.82)" }} />

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 md:mb-10">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-widest uppercase" style={{ border: "1px solid hsl(var(--warm-gold) / 0.4)", color: "hsl(var(--warm-gold))" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-warm-gold" />
              SAP Certified AI-First Implementation Partner
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-6 md:mb-8" style={{ color: "hsl(var(--soft-slate-fg))" }}>
            The AI-First SAP{" "}<br className="hidden sm:block" />
            Consulting Partner{" "}<br />
            <span className="text-warm-gold italic">Built for Enterprises.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="font-body text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl" style={{ color: "hsl(var(--slate-text))" }}>
            Kannanware deploys SAP across{" "}
            <strong style={{ color: "hsl(var(--soft-slate-fg))" }}>Finance, Supply Chain, HR, CX &amp; beyond</strong>
            {" "}— with AI built into every stage of delivery. Faster implementations. Better outcomes. Smarter SAP.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }} className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
            {badges.map((badge) => (
              <div key={badge.label} className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium" style={{ border: "1px solid hsl(var(--warm-gold) / 0.3)", color: "hsl(var(--soft-slate-fg))" }}>
                <badge.icon className="w-4 h-4 text-warm-gold" />
                {badge.label}
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="inline-flex items-center px-8 py-3.5 bg-warm-gold font-body font-bold text-sm md:text-base rounded-md hover:opacity-90 transition-opacity duration-200" style={{ color: "white" }}>
              Book a Consultation →
            </a>
            <a href="#solutions" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 rounded-md font-body font-bold text-sm md:text-base transition-colors duration-200" style={{ borderColor: "hsl(var(--soft-slate-fg))", color: "hsl(var(--soft-slate-fg))" }}>
              <Play className="w-4 h-4" />
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
