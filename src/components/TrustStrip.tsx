import { motion } from "framer-motion";

const trustItems = [
  { label: "Founded 2021", sub: "Chennai" },
  { label: "India", sub: "Innovation Centre" },
  { label: "UAE", sub: "Regional Presence" },
  { label: "USA", sub: "Americas Office" },
  { label: "SAP Partner", sub: "Certified" },
  { label: "ISO 27001:2022", sub: "Information Security" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-border bg-card">
      <div className="section-container py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-sm font-heading font-bold text-foreground">{item.label}</div>
              <div className="text-xs font-body text-muted-foreground mt-0.5">{item.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
