import { motion } from "framer-motion";

const pillars = [
  { question: "What", phase: "Discovery", desc: "Comprehensive assessment of your current state, pain points, and strategic objectives." },
  { question: "How", phase: "Strategy", desc: "Solution architecture and transformation roadmap aligned to business outcomes." },
  { question: "When", phase: "Roadmap", desc: "Phased delivery plan with clear milestones, dependencies, and risk mitigation." },
  { question: "Who", phase: "Execution Team", desc: "The right blend of advisory, functional, and technical expertise." },
];

export default function AdvisoryModel() {
  return (
    <section className="section-spacing" style={{ background: "linear-gradient(180deg, hsl(var(--background)), hsl(220 26% 10%))" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            Advisory{" "}
            <span className="text-gradient-blue">model</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured approach to transformation, built for executive trust and operational clarity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-0 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-electric-blue/0 via-electric-blue/20 to-electric-blue/0" />

          {pillars.map((p, i) => (
            <motion.div
              key={p.question}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center px-6 py-8 group cursor-default"
            >
              <div className="font-heading text-6xl md:text-7xl font-black text-electric-blue/10 group-hover:text-electric-blue/25 transition-colors duration-500 mb-4">
                {p.question}
              </div>
              <div className="font-heading text-xl font-bold text-foreground mb-3">{p.phase}</div>
              <div className="font-body text-sm text-muted-foreground leading-relaxed max-w-[220px] mx-auto">{p.desc}</div>
              {i < pillars.length - 1 && (
                <div className="hidden md:block absolute text-electric-blue/20 text-lg" style={{ top: "60px", left: `${25 * (i + 1)}%`, transform: "translateX(-50%)" }}>→</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
