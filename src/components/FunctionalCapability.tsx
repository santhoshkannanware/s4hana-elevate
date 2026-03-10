import { motion } from "framer-motion";

const processes = [
  { name: "Record to Report", desc: "End-to-end financial closing, consolidation, and reporting", icon: "R2R" },
  { name: "Order to Cash", desc: "Revenue recognition, billing, and accounts receivable", icon: "O2C" },
  { name: "Source to Pay", desc: "Procurement, invoice processing, and accounts payable", icon: "S2P" },
  { name: "Treasury", desc: "Cash management, risk mitigation, and liquidity planning", icon: "TRS" },
  { name: "Operate & Maintain", desc: "Continuous support, optimization, and system health", icon: "O&M" },
];

export default function FunctionalCapability() {
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Functional Capability</h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl">
            Deep process expertise across every core SAP Finance domain.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-border -translate-y-1/2" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {processes.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-md p-5 text-center hover:border-warm-gold/30 transition-colors duration-200 relative"
              >
                <div className="font-heading text-lg font-bold text-warm-gold mb-1">{p.icon}</div>
                <div className="font-heading text-sm font-bold text-foreground mb-2">{p.name}</div>
                <div className="font-body text-xs text-muted-foreground leading-relaxed">{p.desc}</div>
                <div className="hidden lg:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-background border-2 border-warm-gold/30" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
