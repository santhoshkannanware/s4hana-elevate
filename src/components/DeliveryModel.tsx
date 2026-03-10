import { motion } from "framer-motion";

const phases = [
  "Business Requirement",
  "Business Walkthrough",
  "Configuration & Development",
  "Unit Testing",
  "System Integration",
  "End User Training & UAT",
  "Go-Live",
  "Hypercare & Support",
];

const models = [
  { name: "Onshore", desc: "Local teams embedded with your business" },
  { name: "Offshore", desc: "Cost-optimized delivery from our innovation centre" },
  { name: "Hybrid", desc: "Flexible blend of onshore leadership and offshore execution" },
];

export default function DeliveryModel() {
  return (
    <section className="section-spacing border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Delivery Model</h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl">
            Mature, flexible delivery that adapts to your scale and geography.
          </p>
        </motion.div>

        {/* Models */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {models.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded p-5 hover:border-electric-blue/30 transition-colors duration-200"
            >
              <div className="font-heading text-lg font-bold text-foreground mb-1">{m.name}</div>
              <div className="font-body text-sm text-muted-foreground">{m.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Phases timeline */}
        <div className="relative">
          <div className="hidden md:block absolute top-4 left-0 right-0 h-[1px] bg-border" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-2">
            {phases.map((phase, i) => (
              <motion.div
                key={phase}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="text-center relative pt-6 md:pt-8"
              >
                <div className="hidden md:block absolute top-2.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-background border-2 border-electric-blue/40" />
                <div className="text-electric-blue font-heading text-xs font-bold mb-1">{String(i + 1).padStart(2, "0")}</div>
                <div className="font-body text-xs text-foreground leading-snug">{phase}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
