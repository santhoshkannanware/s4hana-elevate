import { motion } from "framer-motion";

const metrics = [
  { value: "28+", label: "Delighted customers across regions" },
  { value: "50K", label: "Project hours experience" },
  { value: "500", label: "Years combined domain knowledge" },
  { value: "75%", label: "SAP-certified consultants" },
  { value: "45+", label: "Multi-regional industry experts" },
];

const pillars = [
  "Transformation specialists",
  "Finance, Treasury & Analytics depth",
  "Innovation at core",
  "Faster response times",
  "Local presence, global expertise",
  "Maximized ROI",
];

export default function WhyKannanware() {
  return (
    <section className="bg-card section-spacing" id="why">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Kannanware
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
            Proof, not promises. Our numbers speak to the depth and scale of transformation we deliver.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 mb-16">
          {metrics.map((m, i) => (
            <motion.div
              key={m.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-3xl md:text-4xl font-bold mb-1 text-warm-gold">
                {m.value}
              </div>
              <div className="font-body text-sm leading-snug text-muted-foreground">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="flex items-start gap-2 font-body text-sm text-foreground"
            >
              <span className="text-warm-gold text-lg leading-none mt-0.5">•</span>
              {p}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
