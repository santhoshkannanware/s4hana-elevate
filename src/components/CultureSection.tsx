import { motion } from "framer-motion";
import { Lightbulb, GraduationCap, Brain, Heart, Users, Award } from "lucide-react";

const themes = [
  { icon: Lightbulb, title: "Innovation Centre", desc: "R&D and emerging technology exploration" },
  { icon: GraduationCap, title: "Continuous Mentoring", desc: "Structured growth for every team member" },
  { icon: Brain, title: "AI, ML & Cloud Focus", desc: "Investing in next-generation skills" },
  { icon: Heart, title: "Inclusive Culture", desc: "Diverse perspectives driving better outcomes" },
  { icon: Users, title: "Low Attrition", desc: "A team that stays and grows together" },
  { icon: Award, title: "Performance Recognition", desc: "Merit-driven culture of excellence" },
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
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              A young, modern team building the future of SAP Finance consulting. We invest in people because that's how transformation happens.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {themes.map((theme, i) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group cursor-default"
              >
                <theme.icon className="w-5 h-5 text-electric-blue mb-3 group-hover:text-cyan-glow transition-colors duration-300" />
                <div className="font-heading text-sm font-bold text-foreground mb-1">{theme.title}</div>
                <div className="font-body text-xs text-muted-foreground leading-relaxed">{theme.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
