import { motion } from "framer-motion";

const themes = [
  { title: "Innovation Centre", desc: "R&D and emerging technology exploration" },
  { title: "Continuous Mentoring", desc: "Structured growth for every team member" },
  { title: "AI, ML & Cloud Focus", desc: "Investing in next-generation skills" },
  { title: "Inclusive Culture", desc: "Diverse perspectives driving better outcomes" },
  { title: "Low Attrition", desc: "A team that stays and grows together" },
  { title: "Performance Recognition", desc: "Merit-driven culture of excellence" },
];

export default function CultureSection() {
  return (
    <section className="section-spacing">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-6">
              Culture &{" "}
              <span className="text-gradient-blue">innovation</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-lg">
              A young, modern team building the future of SAP Finance consulting. We invest in people because that's how transformation happens.
            </p>
          </motion.div>

          {/* Simple list — no cards, no icons */}
          <div className="space-y-0">
            {themes.map((theme, i) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group py-5 border-b border-border/30 cursor-default"
              >
                <div className="font-heading text-base font-bold text-foreground group-hover:text-electric-blue transition-colors duration-300">{theme.title}</div>
                <div className="font-body text-sm text-muted-foreground mt-0.5">{theme.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
