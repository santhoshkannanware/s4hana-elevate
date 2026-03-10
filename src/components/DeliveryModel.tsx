import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const phases = [
  {
    n: "01",
    title: "Discover & Blueprint",
    desc: "Map processes, identify opportunities, and design an SAP roadmap aligned to strategic priorities.",
    detail: "We immerse ourselves in your business — interviewing stakeholders, auditing current systems, and mapping every process. The result is a crystal-clear blueprint.",
    icon: "🔍",
    accent: "from-amber-500 to-orange-500",
  },
  {
    n: "02",
    title: "Design & Configure",
    desc: "Configure SAP to best-practice standards with detailed solution design and milestone sign-offs.",
    detail: "Our certified architects translate your blueprint into a precise SAP configuration — validated at every milestone with your team.",
    icon: "⚙️",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    n: "03",
    title: "Test & Deploy",
    desc: "AI-accelerated test automation ensures quality before every go-live. Zero surprises on cutover day.",
    detail: "We leverage AI-driven test automation to compress cycles by 40%. Every scenario is validated before cutover — so go-live is a non-event.",
    icon: "🚀",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    n: "04",
    title: "Optimise & Support",
    desc: "Post go-live hypercare, AMS, and continuous optimisation delivering sustained SAP value.",
    detail: "Our managed services team monitors, optimises, and evolves your SAP landscape — ensuring you extract maximum value continuously.",
    icon: "📈",
    accent: "from-violet-500 to-purple-500",
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
    }, 4000);
    return () => clearInterval(interval);
  }, [autoPlay, isInView]);

  const handleClick = (i: number) => {
    setActivePhase(i);
    setAutoPlay(false);
    // Resume after 12s
    setTimeout(() => setAutoPlay(true), 12000);
  };

  return (
    <div ref={containerRef} className="grid lg:grid-cols-[1fr_1.2fr] gap-0 min-h-[520px]">
      {/* Left — phase selector */}
      <div className="flex flex-col justify-center py-10 lg:py-16 lg:pr-12">
        {phases.map((p, i) => (
          <motion.button
            key={p.n}
            onClick={() => handleClick(i)}
            className={`group relative flex items-start gap-5 text-left py-5 px-4 rounded-xl transition-all duration-300 cursor-none ${
              activePhase === i ? "bg-white shadow-[0_4px_24px_rgba(0,0,0,.06)]" : "hover:bg-white/50"
            }`}
          >
            {/* Number */}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-all duration-300 ${
              activePhase === i
                ? "bg-gradient-to-br " + p.accent + " text-white shadow-lg"
                : "bg-border/50 text-muted-foreground"
            }`}>
              {p.n}
            </div>

            <div className="flex-1">
              <h4 className={`text-[.95rem] font-bold tracking-tight mb-1 transition-colors duration-300 ${
                activePhase === i ? "text-foreground" : "text-foreground/60"
              }`}>{p.title}</h4>
              <p className={`text-[.78rem] font-light leading-relaxed transition-all duration-300 ${
                activePhase === i ? "text-muted-foreground max-h-20 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}>{p.desc}</p>
            </div>

            {/* Progress bar for active */}
            {activePhase === i && autoPlay && (
              <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-border/30 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${p.accent}`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                  key={`progress-${activePhase}`}
                />
              </div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Right — detail card */}
      <div className="flex items-center justify-center p-6 lg:p-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[480px] aspect-[4/3] rounded-2xl overflow-hidden"
            style={{ background: "#0c0c0c" }}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${phases[activePhase].accent} opacity-[0.12]`} />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-10">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-5xl mb-6"
                >
                  {phases[activePhase].icon}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <span className="text-[.6rem] font-bold tracking-[.2em] uppercase text-white/30 mb-3 block">
                    Phase {phases[activePhase].n}
                  </span>
                  <h3 className="text-white text-2xl font-bold tracking-tight mb-4">
                    {phases[activePhase].title}
                  </h3>
                  <p className="text-white/60 text-[.88rem] font-light leading-[1.8]">
                    {phases[activePhase].detail}
                  </p>
                </motion.div>
              </div>

              {/* Phase indicator dots */}
              <div className="flex gap-2">
                {phases.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === activePhase ? "w-8 bg-white" : "w-2 bg-white/20"
                    }`}
                  />
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
    <section className="py-24 md:py-32" id="approach" style={{ background: "hsl(var(--bg2))" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="eyebrow">Methodology</div>
          <h2 className="sec-h">How we deliver<br /><em>every time.</em></h2>
        </motion.div>

        <PhaseTimeline />
      </div>
    </section>
  );
}
