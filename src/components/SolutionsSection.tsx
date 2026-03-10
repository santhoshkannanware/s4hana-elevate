import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "fin", label: "Finance", eyebrow: "S/4HANA Finance", title: "Record to Report,\nReimagined", desc: "End-to-end financial transformation — from GL to close, treasury to consolidation, billing to analytics.", kpis: [{ val: "R2R", lbl: "End-to-end financial close" }, { val: "AFC", lbl: "Accelerated close cycles" }, { val: "Group", lbl: "Consolidation & IFRS" }, { val: "AI+", lbl: "Anomaly detection" }], modules: [
    { code: "FI", title: "Financial Accounting", items: ["General Ledger", "AP & AR", "Asset Accounting", "Bank Accounting"] },
    { code: "CO", title: "Controlling", items: ["Cost Centers", "Profit Centers", "Internal Orders", "Product Costing"] },
    { code: "TR", title: "Treasury & Risk", items: ["Cash Management", "Liquidity Planning", "Risk Mitigation", "Bank Comms"] },
    { code: "GR", title: "Group Reporting", items: ["Consolidation", "Intercompany Elim.", "IFRS / GAAP", "Currency Translation"] },
  ]},
  { id: "hr", label: "Human Capital", eyebrow: "SAP SuccessFactors", title: "Hire to Retire,\nReimagined", desc: "Connect talent, payroll, learning, and workforce analytics on a single AI-powered HR platform.", kpis: [{ val: "H2R", lbl: "Complete Hire-to-Retire" }, { val: "Global", lbl: "Multi-country payroll" }, { val: "Cloud", lbl: "Full-cloud SuccessFactors" }, { val: "AI+", lbl: "Talent insights" }], modules: [
    { code: "EC", title: "Employee Central", items: ["Core HR & Org Mgmt", "Position Management", "Time & Attendance", "Global Benefits"] },
    { code: "RCM", title: "Recruiting", items: ["Recruiting Management", "Recruiting Marketing", "Onboarding 2.0", "Background Verification"] },
    { code: "PM", title: "Performance & Goals", items: ["Goal Management", "Performance Reviews", "360° Feedback", "Calibration"] },
    { code: "LMS", title: "Learning", items: ["Learning Management", "Compliance Training", "Skills Catalogue", "Mobile Learning"] },
  ]},
  { id: "sc", label: "Supply Chain", eyebrow: "Supply Chain", title: "Resilient, Visible,\nEnd-to-End", desc: "From procurement to production, warehouse to transportation — AI-driven efficiency at every node.", kpis: [{ val: "P2P", lbl: "Procure-to-Pay automation" }, { val: "S&OP", lbl: "SAP IBP with AI" }, { val: "EWM", lbl: "Warehouse automation" }, { val: "AI+", lbl: "Demand forecasting" }], modules: [
    { code: "MM", title: "Materials Mgmt", items: ["Procurement (P2P)", "Inventory Management", "Invoice Verification", "Material Valuation"] },
    { code: "PP", title: "Production Planning", items: ["MRP & MPS", "Shop Floor Control", "Capacity Planning", "Manufacturing Exec."] },
    { code: "EWM", title: "Warehouse Mgmt", items: ["Ext. Warehouse Mgmt", "Slotting & Replenish.", "Labour Management", "Shipping & Receiving"] },
    { code: "TM", title: "Transportation", items: ["Freight Order Mgmt", "Carrier Selection", "Route Optimisation", "Freight Settlement"] },
  ]},
  { id: "cx", label: "Customer Experience", eyebrow: "Customer Experience", title: "Connected Journeys\nat Enterprise Scale", desc: "Unify sales, service, marketing, and commerce — connected to your SAP back-office core.", kpis: [{ val: "360°", lbl: "Unified customer view" }, { val: "OTC", lbl: "Order-to-Cash integration" }, { val: "B2B/C", lbl: "Commerce Cloud" }, { val: "AI+", lbl: "Lead scoring" }], modules: [
    { code: "SAL", title: "Sales Cloud", items: ["CRM & Opportunity", "Sales Performance", "CPQ", "Revenue Intelligence"] },
    { code: "SVC", title: "Service Cloud", items: ["Case Management", "Field Service", "Knowledge Base", "Self-Service Portal"] },
    { code: "MKT", title: "Marketing Cloud", items: ["Campaign Mgmt", "Segmentation", "Lead Nurturing", "CDP"] },
    { code: "COM", title: "Commerce Cloud", items: ["B2B/B2C Storefronts", "Product Content", "Order Management", "Merchandising"] },
  ]},
];

export default function SolutionsSection() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="section-spacing" id="expertise" style={{ background: "hsl(var(--bg2))" }}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="eyebrow">SAP Expertise</div>
          <h2 className="sec-h">Full-spectrum SAP<br /><em>practice areas.</em></h2>
        </motion.div>

        <div className="grid lg:grid-cols-[240px_1fr] border border-border overflow-hidden min-h-[580px]">
          {/* Left sidebar tabs */}
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible" style={{ background: "#0c0c0c" }}>
            <div className="hidden lg:block px-5 py-4 text-[.55rem] font-bold tracking-[.2em] uppercase text-white/30 border-b border-white/[0.06]">Practice Areas</div>
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`relative px-5 py-4 flex items-center justify-between gap-2 border-b lg:border-b border-r lg:border-r-0 border-white/[0.06] text-left transition-colors duration-200 cursor-none whitespace-nowrap ${active === i ? "bg-[rgba(232,160,0,.07)]" : "hover:bg-white/[0.04]"}`}
              >
                {active === i && <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold" />}
                <span className={`text-[.82rem] ${active === i ? "text-gold font-semibold" : "text-white/50 font-normal"}`}>{t.label}</span>
                <span className={`text-[.65rem] hidden lg:block ${active === i ? "text-gold" : "text-white/20"}`}>→</span>
              </button>
            ))}
          </div>

          {/* Right panel */}
          <div style={{ background: "hsl(var(--bg2))" }}>
            {/* Panel hero */}
            <div className="bg-white p-6 md:p-10 border-b border-border grid md:grid-cols-[1fr_auto] gap-8 items-start">
              <div>
                <div className="text-[.6rem] font-bold tracking-[.18em] uppercase text-gold mb-2">{tab.eyebrow}</div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-2.5 leading-tight whitespace-pre-line">{tab.title}</h3>
                <p className="text-[.85rem] text-muted-foreground font-light leading-[1.8] max-w-[480px]">{tab.desc}</p>
              </div>
              <div className="grid grid-cols-2 gap-2.5 min-w-[240px]">
                {tab.kpis.map((k) => (
                  <div key={k.val} className="border border-border p-3.5 transition-all duration-200 hover:border-gold hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(232,160,0,.1)] cursor-none" style={{ background: "hsl(var(--bg2))" }}>
                    <div className="text-xl font-bold text-gold leading-none mb-1">{k.val}</div>
                    <div className="text-[.68rem] text-muted-foreground leading-[1.4]">{k.lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modules grid */}
            <div className="px-6 md:px-10 py-3 text-[.55rem] font-bold tracking-[.2em] uppercase text-muted-foreground border-b border-border" style={{ background: "hsl(var(--bg2))" }}>SAP Modules</div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {tab.modules.map((mod) => (
                <div key={mod.code} className="bg-white p-5 cursor-none transition-all duration-200 hover:bg-bg2 hover:translate-y-[-3px] hover:shadow-[0_14px_40px_rgba(0,0,0,.08)] hover:z-10 relative">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[.58rem] font-bold tracking-[.14em] uppercase text-gold bg-[rgba(232,160,0,.09)] px-2 py-0.5">{mod.code}</span>
                  </div>
                  <h4 className="text-[.86rem] font-bold text-foreground mb-2 leading-tight">{mod.title}</h4>
                  <ul className="list-none">
                    {mod.items.map((item) => (
                      <li key={item} className="text-[.73rem] text-muted-foreground py-1 border-b border-[#f2ede8] last:border-0 leading-[1.45]">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}