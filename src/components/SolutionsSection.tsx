import { motion } from "framer-motion";

const groups = [
  {
    title: "Advisory",
    items: [
      { name: "Assessments & Recommendation", desc: "Strategic evaluation of your SAP landscape" },
      { name: "Design Authority", desc: "Architecture governance and blueprint validation" },
      { name: "BPSR & SPAR", desc: "Business process and solution architecture review" },
      { name: "Design Validation", desc: "Optimization and quality assurance of solution design" },
    ],
  },
  {
    title: "Execution",
    items: [
      { name: "Implementation & Rollout", desc: "End-to-end SAP Finance deployment" },
      { name: "Greenfield / Brownfield / Bluefield", desc: "Flexible migration and conversion paths" },
      { name: "S/4HANA Conversion", desc: "Technical and functional system transformation" },
      { name: "Quality Assurance", desc: "Test automation and optimization" },
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      { name: "Data Migration & Assurance", desc: "Clean, validated data transitions" },
      { name: "Analytics & Visualization", desc: "Actionable intelligence from complex data" },
      { name: "Data Security", desc: "Protection and compliance frameworks" },
      { name: "Data Quality", desc: "Continuous data integrity management" },
    ],
  },
  {
    title: "Experts as a Service",
    items: [
      { name: "Subscription Model", desc: "On-demand expert advice and solutions" },
      { name: "Expert PODs", desc: "Dedicated specialist teams" },
      { name: "EaaS Staffing", desc: "Flexible resourcing for SAP workloads" },
      { name: "SWAT Teams", desc: "Rapid response for critical issues" },
    ],
  },
];

export default function SolutionsSection() {
  return (
    <section className="section-spacing" id="solutions">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Solutions & Services</h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl">
            From strategic advisory to hands-on execution, we deliver across the full SAP Finance transformation lifecycle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-electric-blue">•</span>
                {group.title}
              </h3>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-card border border-border rounded p-4 hover:border-electric-blue/30 transition-colors duration-200"
                  >
                    <div className="font-body font-semibold text-sm text-foreground mb-0.5">{item.name}</div>
                    <div className="font-body text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
