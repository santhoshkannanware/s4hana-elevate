import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Rocket, Database, Users } from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "Advisory",
    tagline: "See the path clearly",
    services: [
      "Assessments & Recommendation",
      "Design Authority",
      "BPSR & SPAR Reviews",
      "Design Validation & Optimization",
    ],
  },
  {
    icon: Rocket,
    title: "Execution",
    tagline: "Deliver with precision",
    services: [
      "Implementation & Rollout",
      "Greenfield / Brownfield / Bluefield",
      "S/4HANA Conversion & Elevate",
      "Quality Assurance & Test Automation",
    ],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    tagline: "Turn data into decisions",
    services: [
      "Data Migration & Assurance",
      "Analytics & Visualization",
      "Data Security & DLP",
      "Data Quality Management",
    ],
  },
  {
    icon: Users,
    title: "Experts as a Service",
    tagline: "Expertise on demand",
    services: [
      "Subscription-Based Advisory",
      "Expert PODs & EaaS Staffing",
      "SWAT Teams for Critical Issues",
      "Onshore / Nearshore / Offshore",
    ],
  },
];

export default function SolutionsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="section-spacing relative overflow-hidden" id="solutions">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            The transformation{" "}
            <span className="text-gradient-blue">architecture</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl">
            Four pillars that take you from strategy to sustained value — each connected in a continuous transformation journey.
          </p>
        </motion.div>

        {/* 4 Pillars */}
        <div className="grid md:grid-cols-4 gap-0 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-[1px]">
            <div className="w-full h-full bg-gradient-to-r from-electric-blue/0 via-electric-blue/30 to-electric-blue/0" />
          </div>

          {pillars.map((pillar, i) => {
            const isActive = activeIndex === i;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`relative px-6 py-10 md:py-12 border-l border-border first:border-l-0 transition-all duration-500 cursor-default ${
                  isActive ? "bg-electric-blue/5" : ""
                }`}
              >
                {/* Step number */}
                <div className="relative z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
                    isActive 
                      ? "bg-electric-blue text-white shadow-lg shadow-electric-blue/30" 
                      : "glass-panel text-electric-blue"
                  }`}>
                    <pillar.icon className="w-4 h-4" />
                  </div>

                  <div className="text-electric-blue/40 font-heading text-xs font-bold tracking-widest uppercase mb-2">
                    Phase {String(i + 1).padStart(2, "0")}
                  </div>

                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-8 italic">
                    {pillar.tagline}
                  </p>

                  {/* Services list */}
                  <div className="space-y-3">
                    {pillar.services.map((service, si) => (
                      <motion.div
                        key={service}
                        initial={false}
                        animate={isActive ? { x: 8, opacity: 1 } : { x: 0, opacity: 0.7 }}
                        transition={{ duration: 0.3, delay: si * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 transition-colors duration-300 ${
                          isActive ? "bg-electric-blue" : "bg-muted-foreground/40"
                        }`} />
                        <span className="font-body text-sm text-muted-foreground">
                          {service}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom connector arrow */}
                {i < pillars.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-2 text-electric-blue/30 text-lg z-20">→</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
