import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    num: "01",
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
    num: "02",
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
    num: "03",
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
    num: "04",
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
    <section className="section-spacing" id="solutions">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            The transformation{" "}
            <span className="text-gradient-blue">architecture</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl">
            Four pillars that take you from strategy to sustained value — connected in a continuous transformation journey.
          </p>
        </motion.div>

        {/* Editorial pillar list — no boxes, just clean rows */}
        <div className="space-y-0">
          {pillars.map((pillar, i) => {
            const isActive = activeIndex === i;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`group border-t border-border/40 py-10 md:py-14 transition-all duration-500 cursor-default ${
                  isActive ? "bg-foreground/[0.02]" : ""
                }`}
              >
                <div className="grid md:grid-cols-[120px_1fr_1.5fr] gap-6 md:gap-12 items-start">
                  {/* Number */}
                  <div className={`font-heading text-5xl md:text-6xl font-black transition-colors duration-500 ${
                    isActive ? "text-electric-blue" : "text-foreground/10"
                  }`}>
                    {pillar.num}
                  </div>

                  {/* Title + tagline */}
                  <div>
                    <h3 className={`font-heading text-2xl md:text-3xl font-bold mb-2 transition-colors duration-300 ${
                      isActive ? "text-electric-blue" : "text-foreground"
                    }`}>
                      {pillar.title}
                    </h3>
                    <p className="font-body text-base text-muted-foreground italic">
                      {pillar.tagline}
                    </p>
                  </div>

                  {/* Services — minimal inline list */}
                  <div className={`flex flex-wrap gap-x-6 gap-y-2 items-start transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}>
                    {pillar.services.map((service) => (
                      <span key={service} className="font-body text-sm text-muted-foreground flex items-center gap-2 group-hover:text-foreground/70 transition-colors duration-300">
                        <ArrowRight className="w-3 h-3 text-electric-blue/40" />
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
          <div className="border-t border-border/40" />
        </div>
      </div>
    </section>
  );
}
