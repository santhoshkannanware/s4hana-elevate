import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Cog, Users, ChevronRight } from "lucide-react";
import stepAdvisory from "@/assets/step-advisory.jpg";
import stepExecution from "@/assets/step-execution.jpg";
import stepExperts from "@/assets/step-experts.jpg";
import { useRegion } from "@/contexts/RegionContext";
import { getSolutionsHeader, getSolutionsSteps } from "@/data/regionContent";

const Icons = [Lightbulb, Cog, Users];
const images = [stepAdvisory, stepExecution, stepExperts];

export default function SolutionsSection() {
  const [active, setActive] = useState(0);
  const { region } = useRegion();
  const header = getSolutionsHeader(region);
  const steps = getSolutionsSteps(region).map((s, i) => ({ ...s, n: String(i + 1).padStart(2, "0"), image: images[i], Icon: Icons[i] }));
  const step = steps[active];

  return (
    <section id="expertise" className="relative bg-background">
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(232,160,0,.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 md:mb-20"
        >
          <div className="eyebrow justify-center">Our Approach</div>
          <h2 className="sec-h">
            How Kannanware Delivers<br /><em>Transformation</em>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            We combine advisory insight, technical execution, and data intelligence to transform enterprise finance operations.
          </p>
        </motion.div>

        {/* ── Tab Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-14">
          {steps.map((s, i) => {
            const isActive = active === i;
            const IconComp = s.Icon;

            return (
              <motion.button
                key={s.n}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`
                  relative rounded-xl p-5 md:p-6 text-left transition-all duration-400 cursor-none border
                  ${isActive
                    ? "border-gold/40 bg-gold/[0.06]"
                    : "border-border bg-secondary/50 hover:border-border hover:bg-secondary"
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="solutions-tab-accent"
                    className="absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive ? "bg-gold/15" : "bg-border/30"
                    }`}
                  >
                    <IconComp
                      className="w-4 h-4 transition-colors duration-300"
                      style={{ color: isActive ? "hsl(var(--gold))" : "hsl(var(--muted-foreground))" }}
                    />
                  </div>
                  <span
                    className="text-[.75rem] font-bold tracking-[.2em] uppercase transition-colors duration-300"
                    style={{ color: isActive ? "hsl(var(--gold))" : "hsl(var(--muted-foreground))" }}
                  >
                    Step {s.n}
                  </span>
                </div>

                <h4
                  className={`text-[.95rem] md:text-[1.05rem] font-bold tracking-tight transition-colors duration-300 ${
                    isActive ? "text-foreground" : "text-foreground/50"
                  }`}
                >
                  {s.title}: {s.subtitle}
                </h4>
                <p
                  className={`text-[.85rem] font-light leading-relaxed mt-1.5 transition-colors duration-300 line-clamp-2 ${
                    isActive ? "text-muted-foreground" : "text-muted-foreground/50"
                  }`}
                >
                  {s.desc}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* ── Detail Panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border bg-card"
          >
            {/* Image */}
            <div className="relative h-[260px] lg:h-[420px] overflow-hidden">
              <motion.img
                src={step.image}
                alt={step.title}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-card" />
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-2">
                {step.title}: <span className="text-gold">{step.subtitle}</span>
              </h3>
              <p className="text-muted-foreground text-[.95rem] font-light leading-[1.85] mb-8">
                {step.detail}
              </p>

              <p className="text-[.78rem] font-bold tracking-[.2em] uppercase text-gold/60 mb-4">
                Key Deliverables
              </p>
              <div className="space-y-3">
                {step.deliverables.map((d, i) => (
                  <motion.div
                    key={d}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.35 }}
                    className="flex items-center gap-3 group/item"
                  >
                    <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 bg-gold/10 border border-gold/20 transition-transform duration-300 group-hover/item:scale-110">
                      <ChevronRight className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-[.95rem] text-foreground/70 font-light group-hover/item:text-foreground transition-colors duration-300">
                      {d}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
