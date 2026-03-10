import { motion } from "framer-motion";

const pillars = [
  { question: "What", phase: "Discovery", desc: "Comprehensive assessment of current state, pain points, and strategic objectives." },
  { question: "How", phase: "Strategy", desc: "Solution architecture and transformation roadmap aligned to business outcomes." },
  { question: "When", phase: "Roadmap", desc: "Phased delivery plan with clear milestones, dependencies, and risk mitigation." },
  { question: "Who", phase: "Execution", desc: "The right blend of advisory, functional, and technical expertise." },
];

export default function AdvisoryModel() {
  return (
    <section className="section-spacing" style={{ background: "linear-gradient(180deg, hsl(var(--background)), hsl(220 26% 10%))" }}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              Advisory{" "}
              <span className="text-gradient-blue">model</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-lg">
              A structured approach to transformation, built for executive trust and operational clarity.
            </p>
          </motion.div>

          {/* Clean stacked list — no boxes */}
          <div className="space-y-10">
            {pillars.map((p, i) => (
              <motion.div
                key={p.question}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group flex items-start gap-6 cursor-default"
              >
                <div className="font-heading text-4xl md:text-5xl font-black text-electric-blue/15 group-hover:text-electric-blue/40 transition-colors duration-500 min-w-[80px]">
                  {p.question}
                </div>
                <div>
                  <div className="font-heading text-lg font-bold text-foreground mb-1 group-hover:text-electric-blue transition-colors duration-300">{p.phase}</div>
                  <div className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
