import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const practices = [
  {
    id: "fin",
    label: "Finance",
    color: "#E8A000",
    eyebrow: "S/4HANA Finance",
    title: "Record to Report, Reimagined",
    desc: "End-to-end financial transformation — from GL to close, treasury to consolidation, billing to analytics.",
    capabilities: [
      { title: "Financial Accounting", items: ["General Ledger", "AP & AR", "Asset Accounting", "Bank Accounting"] },
      { title: "Controlling", items: ["Cost Centers", "Profit Centers", "Internal Orders", "Product Costing"] },
      { title: "Treasury & Risk", items: ["Cash Management", "Liquidity Planning", "Risk Mitigation", "Bank Comms"] },
      { title: "Group Reporting", items: ["Consolidation", "Intercompany Elim.", "IFRS / GAAP", "Currency Translation"] },
    ],
    stats: [
      { val: "R2R", label: "End-to-end close" },
      { val: "AFC", label: "Accelerated cycles" },
      { val: "Group", label: "Consolidation & IFRS" },
      { val: "AI+", label: "Anomaly detection" },
    ],
  },
  {
    id: "hr",
    label: "Human Capital",
    color: "#059669",
    eyebrow: "SAP SuccessFactors",
    title: "Hire to Retire, Reimagined",
    desc: "Connect talent, payroll, learning, and workforce analytics on a single AI-powered HR platform.",
    capabilities: [
      { title: "Employee Central", items: ["Core HR & Org Mgmt", "Position Management", "Time & Attendance", "Global Benefits"] },
      { title: "Recruiting", items: ["Recruiting Management", "Recruiting Marketing", "Onboarding 2.0", "Background Verification"] },
      { title: "Performance & Goals", items: ["Goal Management", "Performance Reviews", "360° Feedback", "Calibration"] },
      { title: "Learning", items: ["Learning Management", "Compliance Training", "Skills Catalogue", "Mobile Learning"] },
    ],
    stats: [
      { val: "H2R", label: "Hire-to-Retire" },
      { val: "Global", label: "Multi-country payroll" },
      { val: "Cloud", label: "Full SuccessFactors" },
      { val: "AI+", label: "Talent insights" },
    ],
  },
  {
    id: "sc",
    label: "Supply Chain",
    color: "#6366f1",
    eyebrow: "Supply Chain Management",
    title: "Resilient, Visible, End-to-End",
    desc: "From procurement to production, warehouse to transportation — AI-driven efficiency at every node.",
    capabilities: [
      { title: "Materials Mgmt", items: ["Procurement (P2P)", "Inventory Management", "Invoice Verification", "Material Valuation"] },
      { title: "Production Planning", items: ["MRP & MPS", "Shop Floor Control", "Capacity Planning", "Manufacturing Exec."] },
      { title: "Warehouse Mgmt", items: ["Ext. Warehouse Mgmt", "Slotting & Replenish.", "Labour Management", "Shipping & Receiving"] },
      { title: "Transportation", items: ["Freight Order Mgmt", "Carrier Selection", "Route Optimisation", "Freight Settlement"] },
    ],
    stats: [
      { val: "P2P", label: "Procure-to-Pay" },
      { val: "S&OP", label: "SAP IBP with AI" },
      { val: "EWM", label: "Warehouse automation" },
      { val: "AI+", label: "Demand forecasting" },
    ],
  },
  {
    id: "cx",
    label: "Customer Experience",
    color: "#a855f7",
    eyebrow: "Customer Experience",
    title: "Connected Journeys at Scale",
    desc: "Unify sales, service, marketing, and commerce — connected to your SAP back-office core.",
    capabilities: [
      { title: "Sales Cloud", items: ["CRM & Opportunity", "Sales Performance", "CPQ", "Revenue Intelligence"] },
      { title: "Service Cloud", items: ["Case Management", "Field Service", "Knowledge Base", "Self-Service Portal"] },
      { title: "Marketing Cloud", items: ["Campaign Mgmt", "Segmentation", "Lead Nurturing", "CDP"] },
      { title: "Commerce Cloud", items: ["B2B/B2C Storefronts", "Product Content", "Order Management", "Merchandising"] },
    ],
    stats: [
      { val: "360°", label: "Unified customer view" },
      { val: "OTC", label: "Order-to-Cash" },
      { val: "B2B/C", label: "Commerce Cloud" },
      { val: "AI+", label: "Lead scoring" },
    ],
  },
];

export default function SolutionsSection() {
  const [active, setActive] = useState(0);
  const practice = practices[active];

  return (
    <section className="py-24 md:py-32 bg-[#0c0c0c] relative overflow-hidden" id="expertise">
      {/* Ambient glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.06] transition-all duration-700 blur-3xl"
        style={{
          background: practice.color,
          top: "20%",
          right: "-10%",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="eyebrow" style={{ color: "rgba(232,160,0,.6)" }}>SAP Expertise</div>
          <h2 className="text-white font-bold leading-[1.08] tracking-[-0.03em] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Full-spectrum SAP<br /><em className="text-gold font-normal">practice areas.</em>
          </h2>
        </motion.div>

        {/* Tab bar */}
        <div className="flex gap-1 mb-12 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {practices.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`relative px-6 py-3.5 rounded-full text-[.82rem] font-medium transition-all duration-300 cursor-none whitespace-nowrap ${
                active === i
                  ? "text-black"
                  : "text-white/45 hover:text-white/70 hover:bg-white/[0.05]"
              }`}
            >
              {active === i && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full"
                  style={{ background: p.color }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{p.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Hero row */}
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start mb-12">
              <div>
                <span
                  className="text-[.6rem] font-bold tracking-[.2em] uppercase mb-3 block"
                  style={{ color: practice.color }}
                >
                  {practice.eyebrow}
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-3 leading-tight">
                  {practice.title}
                </h3>
                <p className="text-white/55 text-[.92rem] font-light leading-[1.8] max-w-xl">
                  {practice.desc}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 min-w-[260px]">
                {practice.stats.map((s, i) => (
                  <motion.div
                    key={s.val}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08 }}
                    className="border border-white/[0.08] rounded-lg p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03] cursor-none"
                  >
                    <div className="text-xl font-bold mb-1" style={{ color: practice.color }}>{s.val}</div>
                    <div className="text-[.68rem] text-white/40 leading-snug">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden">
              {practice.capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="bg-white/[0.03] backdrop-blur-sm p-6 border-r border-b border-white/[0.05] last:border-r-0 hover:bg-white/[0.06] transition-colors duration-300 cursor-none group"
                >
                  <h4 className="text-[.88rem] font-bold text-white mb-4 tracking-tight group-hover:text-gold transition-colors duration-300">
                    {cap.title}
                  </h4>
                  <ul className="space-y-2">
                    {cap.items.map((item) => (
                      <li key={item} className="text-[.76rem] text-white/40 font-light flex items-center gap-2 group-hover:text-white/55 transition-colors duration-300">
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ background: practice.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
