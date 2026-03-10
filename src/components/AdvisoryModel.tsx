import { motion } from "framer-motion";

const pillars = [
  { question: "What", phase: "Discovery", desc: "Comprehensive assessment of your current state, pain points, and strategic objectives." },
  { question: "How", phase: "Strategy", desc: "Solution architecture and transformation roadmap aligned to business outcomes." },
  { question: "When", phase: "Roadmap", desc: "Phased delivery plan with clear milestones, dependencies, and risk mitigation." },
  { question: "Who", phase: "Execution Team", desc: "The right blend of advisory, functional, and technical expertise for your transformation." },
];

export default function AdvisoryModel() {
  return (
    <section className="section-spacing">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Advisory Model</h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl">
            A structured approach to transformation, built for executive trust and operational clarity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              <div className="text-electric-blue font-heading text-4xl md:text-5xl font-bold opacity-20 mb-2">
                {p.question}
              </div>
              <div className="font-heading text-lg font-bold text-foreground mb-2">{p.phase}</div>
              <div className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</div>
              {i < pillars.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-3 text-electric-blue/30 text-2xl">→</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
