import { motion } from "framer-motion";

const stories = [
  {
    title: "GROW with SAP — Public Cloud Transformation",
    challenge: "Professional services firm on legacy ECC needing rapid cloud migration.",
    outcome: "25% fewer go-live incidents, 35% faster reporting.",
  },
  {
    title: "Stores Capitalization Automation",
    challenge: "Manual asset capitalization consuming excessive finance team hours.",
    outcome: "90% manual effort reduction, near-zero errors.",
  },
  {
    title: "Treasury & POS Reconciliation",
    challenge: "Fragmented payment and treasury processes at scale.",
    outcome: "70% manual effort reduction, 45% efficiency gain.",
  },
  {
    title: "FICO Transformation & Valuation Correction",
    challenge: "Complex valuation and financial closing issues at a heavy equipment provider.",
    outcome: "One-week turnaround for a long-persistent issue.",
  },
  {
    title: "US-India Plant Integration Rollout",
    challenge: "Manufacturing company integrating a US plant with India operations.",
    outcome: "20–40% cycle time reduction across processes.",
  },
  {
    title: "Data Migration — Dhaksha Unmanned Systems",
    challenge: "Complex data migration for emerging drone technology company.",
    outcome: "40% reduced manual effort, clean data foundation.",
  },
];

export default function SuccessStories() {
  return (
    <section className="section-spacing" id="stories">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            Success{" "}
            <span className="text-gradient-blue">stories</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl">
            Outcome-led transformation, measured in real business impact.
          </p>
        </motion.div>

        <div className="space-y-1">
          {stories.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group grid md:grid-cols-[1fr,1.5fr,1fr] gap-4 md:gap-8 items-baseline py-6 border-b border-border/50 hover:border-electric-blue/20 transition-colors duration-300 cursor-default"
            >
              <h3 className="font-heading text-sm font-bold text-foreground group-hover:text-electric-blue transition-colors duration-300 leading-snug">
                {s.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {s.challenge}
              </p>
              <div className="font-body text-sm font-medium text-cyan-glow">
                {s.outcome}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
