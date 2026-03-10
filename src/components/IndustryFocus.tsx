import { motion } from "framer-motion";

const industries = [
  {
    name: "Manufacturing & Industrial",
    stat: "20–40% cycle time reduction",
    challenges: "Multi-plant cost allocation, production cost visibility, intercompany settlement at scale.",
  },
  {
    name: "Energy & Natural Resources",
    stat: "45% operational efficiency gain",
    challenges: "Commodity price hedging, multi-jurisdiction compliance, capital asset lifecycle management.",
  },
  {
    name: "Food, Beverage & Consumer",
    stat: "70% manual effort reduction",
    challenges: "POS and treasury reconciliation, margin optimization, revenue recognition complexity.",
  },
  {
    name: "Agro & Automotive",
    stat: "35% faster reporting",
    challenges: "Seasonal demand planning, supply chain cost optimization, multi-currency consolidation.",
  },
];

export default function IndustryFocus() {
  return (
    <section className="section-spacing" id="industries">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            Industry{" "}
            <span className="text-gradient-blue">focus</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl">
            SAP Finance transformation tailored to your industry's most critical challenges.
          </p>
        </motion.div>

        {/* Full-width editorial rows — no cards */}
        <div className="space-y-0">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group grid md:grid-cols-[1fr_auto_1.5fr] gap-4 md:gap-12 items-baseline py-10 md:py-12 border-t border-border/40 cursor-default"
            >
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground group-hover:text-electric-blue transition-colors duration-300">
                {ind.name}
              </h3>
              <span className="font-heading text-sm font-bold text-cyan-glow whitespace-nowrap">
                {ind.stat}
              </span>
              <p className="font-body text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/60 transition-colors duration-300">
                {ind.challenges}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-border/40" />
        </div>
      </div>
    </section>
  );
}
