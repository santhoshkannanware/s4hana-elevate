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

export default function PlatformExpertise() {
  return (
    <section className="section-spacing bg-card" id="expertise">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Platform Expertise</h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl">
            Deep capability across the SAP ecosystem, from core finance to analytics and cloud platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name + p.sub}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-background border border-border rounded-md p-4 md:p-5 hover:border-warm-gold/30 transition-colors duration-200"
            >
              <div className="font-heading text-sm font-bold text-foreground mb-0.5">{p.name}</div>
              <div className="font-body text-xs text-muted-foreground">{p.sub}</div>
              <div className="mt-2">
                <span className={`text-[9px] font-body font-semibold uppercase tracking-wider ${
                  p.tier === "core" ? "text-warm-gold" : p.tier === "analytics" ? "text-electric-blue" : "text-muted-foreground"
                }`}>
                  {p.tier}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
