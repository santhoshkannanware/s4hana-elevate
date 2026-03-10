import { motion } from "framer-motion";

const industries = [
  "Manufacturing",
  "Food & Beverage",
  "Oil & Gas",
  "Automotive, Retail & Consumer Goods",
  "Agro Products",
  "Financial & Transformation-Oriented Enterprise",
];

export default function IndustryFocus() {
  return (
    <section className="section-spacing border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Industry Focus</h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl">
            SAP Finance transformation expertise tailored to industry-specific challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card border border-border rounded-md p-5 hover:border-warm-gold/30 transition-colors duration-200 flex items-start gap-2"
            >
              <span className="text-warm-gold text-lg leading-none">•</span>
              <span className="font-body text-sm font-medium text-foreground">{ind}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
