import { motion } from "framer-motion";

const stories = [
  {
    title: "GROW with SAP — Public Cloud Transformation",
    challenge: "Professional services firm on legacy ECC needing rapid cloud migration.",
    solution: "End-to-end GROW with SAP implementation with finance process redesign.",
    outcome: "25% fewer go-live incidents, 35% faster reporting.",
  },
  {
    title: "Stores Capitalization Automation",
    challenge: "Manual asset capitalization consuming excessive finance team hours.",
    solution: "Automated stores capitalization workflow with validation rules.",
    outcome: "90% manual effort reduction, near-zero errors.",
  },
  {
    title: "Treasury & POS Reconciliation",
    challenge: "Food & beverage company with fragmented payment and treasury processes.",
    solution: "Integrated payment, treasury, POS, and reconciliation automation.",
    outcome: "70% manual effort reduction, 45% operational efficiency gain.",
  },
  {
    title: "FICO Transformation & Valuation Correction",
    challenge: "Heavy equipment provider with complex valuation and financial closing issues.",
    solution: "FICO transformation support with systematic valuation correction.",
    outcome: "One-week turnaround for a long-persistent issue.",
  },
  {
    title: "US-India Plant Integration Rollout",
    challenge: "Manufacturing company integrating a US plant with India operations on SAP.",
    solution: "Rollout services with cross-regional configuration and testing.",
    outcome: "20–40% cycle time reduction across integrated processes.",
  },
  {
    title: "Data Migration — Dhaksha Unmanned Systems",
    challenge: "Complex data migration and process automation for emerging drone technology company.",
    solution: "End-to-end data migration, cleansing, and automation framework.",
    outcome: "40% reduced manual effort, clean data foundation for growth.",
  },
];

export default function SuccessStories() {
  return (
    <section className="section-spacing border-t border-border" id="stories">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Success Stories</h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl">
            Outcome-led transformation, measured in real business impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card border border-border rounded p-6 hover:border-electric-blue/30 transition-colors duration-200"
            >
              <h3 className="font-heading text-sm font-bold text-foreground mb-3 leading-snug">{s.title}</h3>
              <div className="space-y-2 text-xs font-body">
                <div>
                  <span className="text-muted-foreground font-semibold">Challenge: </span>
                  <span className="text-muted-foreground">{s.challenge}</span>
                </div>
                <div>
                  <span className="text-muted-foreground font-semibold">Solution: </span>
                  <span className="text-muted-foreground">{s.solution}</span>
                </div>
                <div>
                  <span className="text-cyan-glow font-semibold">Outcome: </span>
                  <span className="text-foreground font-medium">{s.outcome}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
