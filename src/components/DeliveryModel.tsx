import { motion } from "framer-motion";

const phases = [
  "Business Requirement",
  "Business Walkthrough",
  "Configuration & Development",
  "Unit Testing",
  "System Integration",
  "End User Training & UAT",
  "Go-Live",
  "Hypercare & Support",
];

const models = [
  { name: "Onshore", desc: "Local teams embedded with your business" },
  { name: "Offshore", desc: "Cost-optimized delivery from our innovation centre" },
  { name: "Hybrid", desc: "Flexible blend of onshore leadership and offshore execution" },
];

export default function DeliveryModel() {
  return (
    <section className="section-spacing">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-6">
              Delivery{" "}
              <span className="text-gradient-blue">model</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              Mature, flexible delivery that adapts to your scale and geography.
            </p>

            <div className="space-y-4">
              {models.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group flex items-start gap-4 py-3 cursor-default"
                >
                  <div className="w-2 h-2 rounded-full bg-electric-blue mt-2 group-hover:shadow-lg group-hover:shadow-electric-blue/40 transition-shadow duration-300" />
                  <div>
                    <div className="font-heading text-lg font-bold text-foreground group-hover:text-electric-blue transition-colors duration-300">{m.name}</div>
                    <div className="font-body text-sm text-muted-foreground">{m.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Phases — vertical timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-8"
          >
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-gradient-to-b from-electric-blue/40 via-electric-blue/20 to-transparent" />

            <div className="space-y-6">
              {phases.map((phase, i) => (
                <motion.div
                  key={phase}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="relative group cursor-default"
                >
                  {/* Node */}
                  <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-background border-2 border-electric-blue/30 flex items-center justify-center group-hover:border-electric-blue transition-colors duration-300">
                    <span className="text-[9px] font-heading font-bold text-electric-blue/60 group-hover:text-electric-blue transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="font-body text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 pl-2">
                    {phase}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
