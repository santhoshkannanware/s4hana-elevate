import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Settings, Rocket, HeartHandshake, ChevronRight } from "lucide-react";
import methodDiscover from "@/assets/method-discover.jpg";
import methodConfigure from "@/assets/method-configure.jpg";
import methodDeploy from "@/assets/method-deploy.jpg";
import methodOptimise from "@/assets/method-optimise.jpg";

const phases = [
  {
    n: "01",
    title: "Explore",
    subtitle: "Design & Blueprint",
    desc: "Map processes, identify opportunities, and design an SAP roadmap aligned to strategic priorities.",
    detail: "We immerse ourselves in your business — interviewing stakeholders, auditing current systems, and mapping every process following SAP Activate's Explore phase. The result is a crystal-clear blueprint that aligns technology to your business strategy.",
    image: methodDiscover,
    deliverables: ["Process maps & gap analysis", "Solution architecture", "Risk-prioritised roadmap", "Business case & ROI model"],
    Icon: Search,
  },
  {
    n: "02",
    title: "Realise",
    subtitle: "Configure & Develop",
    desc: "Configure SAP to best-practice standards with detailed solution design and milestone sign-offs.",
    detail: "Our certified architects translate your blueprint into a precise SAP configuration — validated at every milestone with your team. We leverage SAP Activate's Realise phase and accelerators to compress timelines while ensuring quality.",
    image: methodConfigure,
    deliverables: ["Detailed design documents", "Configured SAP environment", "Integration specifications", "Data migration strategy"],
    Icon: Settings,
  },
  {
    n: "03",
    title: "Deploy",
    subtitle: "Test & Go Live",
    desc: "AI-accelerated test automation ensures quality before every go-live. Zero surprises on cutover day.",
    detail: "We leverage AI-driven test automation to compress cycles by 40%. Every scenario is validated before cutover — including end-to-end integration, performance, and user acceptance testing.",
    image: methodDeploy,
    deliverables: ["Automated test suites", "Cutover runbooks", "Hypercare team on standby", "Go-live certification"],
    Icon: Rocket,
  },
  {
    n: "04",
    title: "Stabilize",
    subtitle: "& Support",
    desc: "Post go-live hypercare, AMS, and continuous optimisation delivering sustained SAP value.",
    detail: "Our managed services team monitors, optimises, and evolves your SAP landscape — ensuring you extract maximum value continuously with proactive SLA management aligned with SAP Activate's Run phase.",
    image: methodOptimise,
    deliverables: ["24/7 AMS coverage", "Quarterly optimisation reviews", "Release management", "Continuous improvement backlog"],
    Icon: HeartHandshake,
  },
];

export default function DeliveryModel() {
  const [active, setActive] = useState(0);
  const phase = phases[active];

  return (
    <section className="relative overflow-hidden bg-card" id="approach">
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(232,160,0,.25), transparent)" }} />

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 md:mb-20"
        >
          <div className="eyebrow justify-center">SAP Activate Methodology</div>
          <h2 className="sec-h">
            How we deliver<br /><em>every time.</em>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Our proven four-phase methodology combines SAP Activate best practices with AI-powered accelerators to deliver predictable outcomes.
          </p>
        </motion.div>

        {/* ── Tab Cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-14">
          {phases.map((p, i) => {
            const isActive = active === i;
            const IconComp = p.Icon;

            return (
              <motion.button
                key={p.n}
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
                {/* Active top accent */}
                {isActive && (
                  <motion.div
                    layoutId="tab-accent"
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
                    Phase {p.n}
                  </span>
                </div>

                <h4
                  className={`text-sm md:text-[.95rem] font-bold tracking-tight transition-colors duration-300 ${
                    isActive ? "text-foreground" : "text-foreground/50"
                  }`}
                >
                  {p.title}: {p.subtitle}
                </h4>
                <p
                  className={`text-xs font-light leading-relaxed mt-1.5 transition-colors duration-300 line-clamp-2 ${
                    isActive ? "text-muted-foreground" : "text-muted-foreground/50"
                  }`}
                >
                  {p.desc}
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
                src={phase.image}
                alt={phase.title}
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
                {phase.title}: <span className="text-gold">{phase.subtitle}</span>
              </h3>
              <p className="text-muted-foreground text-[.88rem] font-light leading-[1.85] mb-8">
                {phase.detail}
              </p>

              <p className="text-[.65rem] font-bold tracking-[.2em] uppercase text-gold/60 mb-4">
                Key Deliverables
              </p>
              <div className="space-y-3">
                {phase.deliverables.map((d, i) => (
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
                    <span className="text-[.85rem] text-foreground/70 font-light group-hover/item:text-foreground transition-colors duration-300">
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
