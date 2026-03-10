import { motion } from "framer-motion";

const themes = [
  "Innovation Centre — R&D and emerging technology exploration",
  "Continuous Mentoring — Structured growth for every team member",
  "AI, ML & Cloud Focus — Investing in next-generation skills",
  "Inclusive Culture — Diverse perspectives driving better outcomes",
  "Low Attrition — A team that stays and grows together",
  "Performance Recognition — Merit-driven culture of excellence",
];

export default function CultureSection() {
  return (
    <section className="section-spacing">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Culture & Innovation</h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl">
            A young, modern team building the future of SAP Finance consulting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {themes.map((theme, i) => {
            const [title, desc] = theme.split(" — ");
            return (
              <motion.div
                key={theme}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 p-4"
              >
                <span className="text-electric-blue text-lg leading-none mt-0.5">•</span>
                <div>
                  <div className="font-heading text-sm font-bold text-foreground">{title}</div>
                  <div className="font-body text-xs text-muted-foreground">{desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
