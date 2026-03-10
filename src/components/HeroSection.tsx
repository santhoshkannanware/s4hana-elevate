import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Old dashboard mock data
const oldDashRows = [
  { vendor: "VND-4821", desc: "Mat. Procurement Q3", amount: "€ 142,890.00", status: "PARKED", date: "12.03.2024" },
  { vendor: "VND-1093", desc: "Intrcmp. Settle FY23", amount: "€ 891,204.50", status: "BLOCKED", date: "08.01.2024" },
  { vendor: "VND-7745", desc: "Dep. Run Asset Grp 4", amount: "€ 56,100.00", status: "CLEARED", date: "22.11.2023" },
  { vendor: "VND-3320", desc: "Accrual Rev. Period 6", amount: "€ 318,440.00", status: "PARKED", date: "15.09.2023" },
  { vendor: "VND-5501", desc: "GR/IR Reconciliation", amount: "€ 74,220.75", status: "OPEN", date: "03.07.2023" },
];

function OldDashboard() {
  return (
    <div className="bg-[hsl(220,10%,92%)] rounded p-3 md:p-4 text-[hsl(220,10%,25%)] font-body text-[10px] md:text-xs w-full overflow-hidden">
      <div className="flex items-center justify-between mb-2 border-b border-[hsl(220,10%,80%)] pb-2">
        <span className="font-bold text-[11px]">SAP FI — Document Journal</span>
        <div className="flex gap-1">
          {["All", "Parked", "Blocked", "Open"].map(f => (
            <span key={f} className="px-2 py-0.5 bg-[hsl(220,10%,85%)] rounded-sm">{f}</span>
          ))}
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left border-b border-[hsl(220,10%,82%)]">
            <th className="py-1 font-semibold">Vendor</th>
            <th className="py-1 font-semibold hidden md:table-cell">Description</th>
            <th className="py-1 font-semibold text-right">Amount</th>
            <th className="py-1 font-semibold text-center">Status</th>
            <th className="py-1 font-semibold text-right hidden sm:table-cell">Date</th>
          </tr>
        </thead>
        <tbody>
          {oldDashRows.map((r, i) => (
            <tr key={i} className="border-b border-[hsl(220,10%,86%)]">
              <td className="py-1.5 font-mono">{r.vendor}</td>
              <td className="py-1.5 hidden md:table-cell">{r.desc}</td>
              <td className="py-1.5 text-right font-mono">{r.amount}</td>
              <td className="py-1.5 text-center">
                <span className={`px-1.5 py-0.5 rounded-sm text-[9px] font-bold ${
                  r.status === "BLOCKED" ? "bg-[hsl(0,50%,85%)] text-[hsl(0,50%,35%)]" :
                  r.status === "CLEARED" ? "bg-[hsl(120,20%,85%)] text-[hsl(120,30%,30%)]" :
                  "bg-[hsl(40,30%,85%)] text-[hsl(40,40%,30%)]"
                }`}>{r.status}</span>
              </td>
              <td className="py-1.5 text-right hidden sm:table-cell">{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function NewDashboard() {
  return (
    <div className="bg-card rounded p-3 md:p-4 font-body text-[10px] md:text-xs w-full overflow-hidden border border-border">
      {/* KPI row */}
      <div className="grid grid-cols-3 gap-2 md:gap-3 mb-3">
        {[
          { label: "Cash Position", value: "€ 4.2M", delta: "+12%", color: "text-cyan-glow" },
          { label: "Days to Close", value: "3.1", delta: "-40%", color: "text-cyan-glow" },
          { label: "Forecast Accuracy", value: "94%", delta: "+8%", color: "text-cyan-glow" },
        ].map((kpi, i) => (
          <div key={i} className="bg-secondary rounded p-2 md:p-3">
            <div className="text-muted-foreground text-[9px] mb-1">{kpi.label}</div>
            <div className="text-foreground font-heading font-bold text-sm md:text-lg">{kpi.value}</div>
            <div className={`${kpi.color} text-[9px] font-semibold`}>{kpi.delta}</div>
          </div>
        ))}
      </div>
      {/* Mini chart area */}
      <div className="grid grid-cols-2 gap-2 md:gap-3 mb-3">
        <div className="bg-secondary rounded p-2 md:p-3">
          <div className="text-muted-foreground text-[9px] mb-2">Revenue by Quarter</div>
          <div className="flex items-end gap-1 h-10">
            {[40, 55, 45, 70, 65, 80, 75, 90].map((h, i) => (
              <div key={i} className="flex-1 rounded-t" style={{
                height: `${h}%`,
                background: i >= 6 ? "hsl(191 91% 53%)" : "hsl(217 91% 60% / 0.4)"
              }} />
            ))}
          </div>
        </div>
        <div className="bg-secondary rounded p-2 md:p-3">
          <div className="text-muted-foreground text-[9px] mb-1">AI Insight</div>
          <div className="text-foreground text-[10px] leading-relaxed">
            <span className="text-electric-blue font-semibold">Pattern detected:</span> Intercompany settlement cycle can be reduced by 2.3 days with automated reconciliation.
          </div>
        </div>
      </div>
      {/* Clean table */}
      <div className="bg-secondary rounded p-2">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-electric-blue text-[9px] font-semibold">● Live</span>
          <span className="text-muted-foreground text-[9px]">Financial Documents</span>
        </div>
        {oldDashRows.slice(0, 3).map((r, i) => (
          <div key={i} className="flex items-center justify-between py-1 border-b border-border last:border-0">
            <span className="text-foreground font-mono">{r.vendor}</span>
            <span className="text-foreground font-mono text-right">{r.amount}</span>
            <span className={`px-1.5 py-0.5 rounded-sm text-[9px] font-semibold ${
              r.status === "CLEARED" ? "text-cyan-glow" : "text-electric-blue"
            }`}>{r.status === "BLOCKED" ? "PROCESSING" : r.status === "PARKED" ? "REVIEWED" : r.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [transformed, setTransformed] = useState(false);
  const [scanActive, setScanActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !transformed) {
          setTimeout(() => {
            setScanActive(true);
            setTimeout(() => {
              setTransformed(true);
              setScanActive(false);
            }, 800);
          }, 1200);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [transformed]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold leading-[1.1] mb-6">
              From SAP complexity to{" "}
              <span className="text-gradient-blue">AI‑enabled financial clarity</span>
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Kannanware helps the Office of the CFO modernize finance operations with advisory‑led SAP solutions across Finance, Treasury, Analytics, and transformation delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-sm hover:bg-primary/90 transition-colors duration-200"
              >
                Book a Consultation
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center px-6 py-3 border border-border text-foreground font-body font-semibold text-sm rounded-sm hover:border-electric-blue hover:text-electric-blue transition-colors duration-200"
              >
                Explore Solutions
              </a>
            </div>
          </motion.div>

          {/* Right: Dashboard transformation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-md overflow-hidden">
              {/* Scan line */}
              {scanActive && (
                <div className="scan-line animate-scan-sweep z-20" />
              )}

              {/* Dashboard states */}
              <div className={`transition-opacity duration-500 ${transformed ? "opacity-0 absolute inset-0" : "opacity-100"}`}>
                <OldDashboard />
              </div>
              <div className={`transition-opacity duration-500 ${transformed ? "opacity-100" : "opacity-0 absolute inset-0"}`}>
                <NewDashboard />
              </div>
            </div>

            {/* Subtle glow behind dashboard */}
            <div className="absolute -inset-4 bg-electric-blue/5 rounded-lg blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Background atmospheric element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-glow/3 rounded-full blur-3xl -z-10" />
    </section>
  );
}
