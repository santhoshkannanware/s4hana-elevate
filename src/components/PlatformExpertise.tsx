import { motion } from "framer-motion";

const platforms = [
  { name: "SAP S/4HANA", sub: "Public Cloud", tier: "core" },
  { name: "SAP S/4HANA", sub: "Private Cloud", tier: "core" },
  { name: "SAP ECC", sub: "Legacy & Migration", tier: "core" },
  { name: "SAP BTP", sub: "Business Technology Platform", tier: "platform" },
  { name: "SAP Analytics Cloud", sub: "Planning & BI", tier: "analytics" },
  { name: "SAP Datasphere", sub: "Data Integration", tier: "analytics" },
  { name: "SAP BW/4HANA", sub: "Data Warehousing", tier: "analytics" },
  { name: "SAP Business Objects", sub: "Enterprise Reporting", tier: "analytics" },
  { name: "GROW with SAP", sub: "Cloud ERP Adoption", tier: "platform" },
];

const tiers = [
  { key: "core", label: "Core Finance", color: "text-electric-blue" },
  { key: "platform", label: "Platform", color: "text-cyan-glow" },
  { key: "analytics", label: "Analytics", color: "text-electric-blue" },
];

export default function PlatformExpertise() {
  return (
    <section className="section-spacing" id="expertise" style={{ background: "linear-gradient(180deg, hsl(220 26% 10%), hsl(var(--background)))" }}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-6">
              Platform{" "}
              <span className="text-gradient-blue">expertise</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              Deep capability across the SAP ecosystem — from core finance to analytics and cloud platforms.
            </p>

            {/* Tier legend */}
            <div className="flex flex-wrap gap-4">
              {tiers.map((t) => (
                <div key={t.key} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${t.color === "text-cyan-glow" ? "bg-cyan-glow" : "bg-electric-blue"}`} />
                  <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">{t.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Platform list — clean, no cards */}
          <div className="space-y-1">
            {platforms.map((p, i) => (
              <motion.div
                key={p.name + p.sub}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex items-center justify-between py-4 border-b border-border/50 hover:border-electric-blue/30 transition-colors duration-300 cursor-default"
              >
                <div>
                  <span className="font-heading text-base font-bold text-foreground group-hover:text-electric-blue transition-colors duration-300">{p.name}</span>
                  <span className="font-body text-sm text-muted-foreground ml-3">{p.sub}</span>
                </div>
                <span className={`text-[10px] font-body font-semibold uppercase tracking-wider ${
                  p.tier === "core" ? "text-electric-blue" : p.tier === "analytics" ? "text-electric-blue/60" : "text-cyan-glow"
                }`}>
                  {p.tier}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
