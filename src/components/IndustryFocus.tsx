import { motion } from "framer-motion";

const industries = [
  { code: "EN", title: "Energy & Natural Resources", desc: "JVA, production, asset management, hedging" },
  { code: "MF", title: "Discrete Manufacturing", desc: "PP, cost controlling, supply chain, QM" },
  { code: "FS", title: "Financial Services", desc: "IFRS 9, 17, regulatory reporting" },
  { code: "PS", title: "Public Services", desc: "Fund management, grants, IPSAS reporting" },
  { code: "CR", title: "Consumer & Retail", desc: "Trade promotions, D2C, revenue, inventory" },
  { code: "FB", title: "Food & Beverage", desc: "Batch management, COGS, compliance" },
  { code: "PR", title: "Professional Services", desc: "Project systems, resource billing, PSA" },
  { code: "HL", title: "Healthcare & Life Sciences", desc: "GxP, materials, serialisation, clinical finance" },
];

export default function IndustryFocus() {
  return (
    <section className="section-spacing bg-white" id="industries">
      <div className="section-container mb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="eyebrow">Industries</div>
          <h2 className="sec-h">Deep experience<br /><em>across every sector.</em></h2>
        </motion.div>
      </div>

      <div className="flex overflow-x-auto border-t border-border" style={{ scrollbarWidth: "none" }}>
        {industries.map((ind, i) => (
          <motion.div
            key={ind.code}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="w-[200px] shrink-0 px-5 py-7 border-r border-border bg-white cursor-none relative overflow-hidden transition-colors duration-200 hover:bg-bg2 group"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold transform scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
            <div className="text-[.68rem] font-bold tracking-[.14em] text-gold bg-[rgba(232,160,0,.08)] border border-[rgba(232,160,0,.18)] inline-flex items-center justify-center w-9 h-7 mb-4 transition-all duration-200 group-hover:bg-[rgba(232,160,0,.2)] group-hover:border-[rgba(232,160,0,.35)]">{ind.code}</div>
            <h4 className="text-[.86rem] font-bold text-foreground mb-1.5">{ind.title}</h4>
            <p className="text-[.73rem] text-muted-foreground font-light leading-[1.55]">{ind.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}