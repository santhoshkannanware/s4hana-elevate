import { motion } from "framer-motion";

const trustItems = [
  "Founded 2021 · Chennai",
  "India Innovation Centre",
  "UAE Presence",
  "USA Office",
  "SAP Partner",
  "ISO 27001:2022",
];

export default function TrustStrip() {
  return (
    <section className="border-y border-border/30 py-6">
      <div className="section-container">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-12">
          {trustItems.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="font-body text-xs md:text-sm text-muted-foreground"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
