import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import methodDiscover from "@/assets/method-discover.jpg";
import methodConfigure from "@/assets/method-configure.jpg";
import methodDeploy from "@/assets/method-deploy.jpg";
import methodOptimise from "@/assets/method-optimise.jpg";

const phases = [
  {
    n: "01",
    title: "Explore: Design & Blueprint",
    desc: "Map processes, identify opportunities, and design an SAP roadmap aligned to strategic priorities using SAP Activate methodology.",
    detail: "We immerse ourselves in your business — interviewing stakeholders, auditing current systems, and mapping every process following SAP Activate's Explore phase. The result is a crystal-clear blueprint that aligns technology to your business strategy.",
    image: methodDiscover,
    deliverables: ["Process maps & gap analysis", "Solution architecture", "Risk-prioritised roadmap", "Business case & ROI model"],
    icon: "🔍",
  },
  {
    n: "02",
    title: "Realise: Configure & Develop",
    desc: "Configure SAP to best-practice standards with detailed solution design and milestone sign-offs using SAP Activate.",
    detail: "Our certified architects translate your blueprint into a precise SAP configuration — validated at every milestone with your team. We leverage SAP Activate's Realise phase methodology and accelerators to compress timelines while ensuring quality.",
    image: methodConfigure,
    deliverables: ["Detailed design documents", "Configured SAP environment", "Integration specifications", "Data migration strategy"],
    icon: "⚙️",
  },
  {
    n: "03",
    title: "Test & Deploy",
    desc: "AI-accelerated test automation ensures quality before every go-live. Zero surprises on cutover day.",
    detail: "We leverage AI-driven test automation to compress cycles by 40%. Every scenario is validated before cutover — including end-to-end integration, performance, and user acceptance testing.",
    image: methodDeploy,
    deliverables: ["Automated test suites", "Cutover runbooks", "Hypercare team on standby", "Go-live certification"],
    icon: "🚀",
  },
  {
    n: "04",
    title: "Optimise & Support",
    desc: "Post go-live hypercare, AMS, and continuous optimisation delivering sustained SAP value.",
    detail: "Our managed services team monitors, optimises, and evolves your SAP landscape — ensuring you extract maximum value continuously with proactive SLA management.",
    image: methodOptimise,
    deliverables: ["24/7 AMS coverage", "Quarterly optimisation reviews", "Release management", "Continuous improvement backlog"],
    icon: "📈",
  },
];

function PhaseTimeline() {
  const [activePhase, setActivePhase] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });

  useEffect(() => {
    if (!autoPlay || !isInView) return;
    const interval = setInterval(() => {
      setActivePhase((p) => (p + 1) % phases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, isInView]);

  const handleClick = (i: number) => {
    setActivePhase(i);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 15000);
  };

  return (
    <div ref={containerRef} className="grid lg:grid-cols-[1fr_1.3fr] gap-0 min-h-[560px]">
      {/* Left — phase selector */}
      <div className="flex flex-col justify-center py-10 lg:py-16 lg:pr-12">
        {phases.map((p, i) => (
          <motion.button
            key={p.n}
            onClick={() => handleClick(i)}
            className={`group relative flex items-start gap-5 text-left py-5 px-4 rounded-xl transition-all duration-300 cursor-none ${
              activePhase === i ? "bg-secondary border border-border shadow-[0_4px_24px_rgba(232,160,0,.06)]" : "hover:bg-secondary/50"
            }`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-all duration-300 ${
              activePhase === i
                ? "bg-gold text-black shadow-[0_0_20px_rgba(232,160,0,.3)]"
                : "bg-secondary text-muted-foreground border border-border"
            }`}>
              {p.n}
            </div>

            <div className="flex-1">
              <h4 className={`text-[.95rem] font-bold tracking-tight mb-1 transition-colors duration-300 ${
                activePhase === i ? "text-foreground" : "text-foreground/50"
              }`}>{p.title}</h4>
              <p className={`text-[.78rem] font-light leading-relaxed transition-all duration-300 ${
                activePhase === i ? "text-muted-foreground max-h-20 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}>{p.desc}</p>
            </div>

            {activePhase === i && autoPlay && (
              <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gold"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  key={`progress-${activePhase}`}
                />
              </div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Right — detail card with image */}
      <div className="flex items-center justify-center p-6 lg:p-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[520px] rounded-2xl overflow-hidden border border-border"
          >
            {/* Hero image */}
            <div className="relative h-[200px] overflow-hidden">
              <motion.img
                src={phases[activePhase].image}
                alt={phases[activePhase].title}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
              <div className="absolute top-4 left-4">
                <span className="text-4xl">{phases[activePhase].icon}</span>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 bg-background">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                <span className="text-[.6rem] font-bold tracking-[.2em] uppercase text-gold mb-2 block">
                  Phase {phases[activePhase].n}
                </span>
                <h3 className="text-foreground text-2xl font-bold tracking-tight mb-3">
                  {phases[activePhase].title}
                </h3>
                <p className="text-muted-foreground text-[.85rem] font-light leading-[1.8] mb-6">
                  {phases[activePhase].detail}
                </p>
              </motion.div>

              {/* Deliverables */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                <p className="text-[.6rem] font-bold tracking-[.2em] uppercase text-gold/70 mb-3">Key Deliverables</p>
                <div className="grid grid-cols-2 gap-2">
                  {phases[activePhase].deliverables.map((d, i) => (
                    <motion.div
                      key={d}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.06 }}
                      className="flex items-center gap-2 text-[.78rem] text-foreground/60 font-light"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                      {d}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Progress dots */}
              <div className="flex gap-2 mt-6">
                {phases.map((_, i) => (
                  <div key={i} className={`h-1 rounded-full transition-all duration-300 ${
                    i === activePhase ? "w-8 bg-gold" : "w-2 bg-border"
                  }`} />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function DeliveryModel() {
  return (
    <section className="py-24 md:py-32 bg-card" id="approach">
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(232,160,0,.2), transparent)" }} />
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="eyebrow">Methodology</div>
          <h2 className="sec-h">How we deliver<br /><em>every time.</em></h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mt-4 font-light leading-relaxed">
            Our proven four-phase methodology combines SAP Activate best practices with AI-powered accelerators to deliver predictable outcomes — on time, every time.
          </p>
        </motion.div>

        <PhaseTimeline />
      </div>
    </section>
  );
}
