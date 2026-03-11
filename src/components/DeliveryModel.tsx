import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Search, Settings, Rocket, HeartHandshake, ChevronRight, CheckCircle2 } from "lucide-react";
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
    color: "#E8A000",
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
    color: "#D4940A",
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
    color: "#C0880F",
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
    color: "#AB7C14",
  },
];

export default function DeliveryModel() {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const DURATION = 6000;

  const advance = useCallback(() => {
    setActive((p) => (p + 1) % phases.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (hovering || !isInView) {
      clearInterval(intervalRef.current);
      return;
    }
    setProgress(0);
    const tick = 30;
    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          advance();
          return 0;
        }
        return p + (tick / DURATION) * 100;
      });
    }, tick);
    return () => clearInterval(intervalRef.current);
  }, [hovering, isInView, active, advance]);

  const handleClick = (i: number) => {
    setActive(i);
    setProgress(0);
  };

  const phase = phases[active];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-card" id="approach">
      {/* Top line */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(232,160,0,.25), transparent)" }} />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none opacity-[0.04]" style={{ background: "radial-gradient(ellipse, hsl(var(--gold)), transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="eyebrow justify-center">SAP Activate Methodology</div>
          <h2 className="sec-h">
            How we deliver<br /><em>every time.</em>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Our proven four-phase methodology combines SAP Activate best practices with AI-powered accelerators to deliver predictable outcomes.
          </p>
        </motion.div>

        {/* ── Horizontal Pipeline Track ── */}
        <div
          className="relative mb-16 md:mb-20"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[42px] left-[12%] right-[12%] h-[2px] bg-border/40" />
          <motion.div
            className="hidden md:block absolute top-[42px] left-[12%] h-[2px] origin-left"
            style={{ background: "hsl(var(--gold))", right: "12%" }}
            animate={{ scaleX: (active + 1) / phases.length }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {phases.map((p, i) => {
              const isActive = active === i;
              const isPast = i < active;
              const IconComp = p.Icon;

              return (
                <motion.button
                  key={p.n}
                  onClick={() => handleClick(i)}
                  className="group relative flex flex-col items-center text-center cursor-none focus:outline-none"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  {/* Node circle */}
                  <motion.div
                    className="relative w-[84px] h-[84px] rounded-full flex items-center justify-center mb-5 border-2 transition-colors duration-500"
                    style={{
                      borderColor: isActive ? p.color : isPast ? "rgba(232,160,0,.35)" : "hsl(var(--border))",
                      background: isActive ? `${p.color}15` : "hsl(var(--card))",
                    }}
                    animate={{
                      scale: isActive ? 1 : 0.85,
                      boxShadow: isActive ? `0 0 40px ${p.color}30, 0 0 80px ${p.color}10` : "0 0 0px transparent",
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Rotating ring on active */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-[-4px] rounded-full border-2 border-transparent"
                        style={{ borderTopColor: p.color, borderRightColor: `${p.color}40` }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                    )}

                    {/* Progress ring */}
                    {isActive && (
                      <svg className="absolute inset-[-6px] w-[calc(100%+12px)] h-[calc(100%+12px)] -rotate-90">
                        <circle
                          cx="50%" cy="50%"
                          r="46"
                          fill="none"
                          stroke={p.color}
                          strokeWidth="2"
                          strokeDasharray={289}
                          strokeDashoffset={289 - (289 * progress) / 100}
                          strokeLinecap="round"
                          className="transition-none"
                          opacity={0.5}
                        />
                      </svg>
                    )}

                    {isPast ? (
                      <CheckCircle2 className="w-7 h-7 text-gold" />
                    ) : (
                      <IconComp
                        className="w-7 h-7 transition-colors duration-300"
                        style={{ color: isActive ? p.color : "hsl(var(--muted-foreground))" }}
                      />
                    )}
                  </motion.div>

                  {/* Phase number */}
                  <span
                    className="text-[.6rem] font-bold tracking-[.2em] uppercase mb-1 transition-colors duration-300"
                    style={{ color: isActive ? p.color : "hsl(var(--muted-foreground))" }}
                  >
                    Phase {p.n}
                  </span>

                  {/* Title */}
                  <h4
                    className="text-sm font-bold tracking-tight transition-colors duration-300 mb-0.5"
                    style={{ color: isActive ? "hsl(var(--foreground))" : "hsla(var(--foreground)/.45)" }}
                  >
                    {p.title}
                  </h4>
                  <span
                    className="text-xs font-light transition-colors duration-300"
                    style={{ color: isActive ? "hsl(var(--muted-foreground))" : "hsla(var(--foreground)/.25)" }}
                  >
                    {p.subtitle}
                  </span>

                  {/* Active indicator dot */}
                  <motion.div
                    className="mt-3 w-1.5 h-1.5 rounded-full"
                    style={{ background: p.color }}
                    animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ── Detail Panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border"
            style={{ background: "hsl(var(--card))" }}
          >
            {/* Left — Image */}
            <div className="relative h-[280px] lg:h-auto overflow-hidden">
              <motion.img
                src={phase.image}
                alt={phase.title}
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{
                background: `linear-gradient(135deg, ${phase.color}20 0%, transparent 40%), linear-gradient(to right, hsl(var(--card)) 0%, transparent 30%)`,
              }} />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-card" />

              {/* Floating phase badge */}
              <motion.div
                className="absolute top-6 left-6 flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-md border"
                style={{
                  background: `${phase.color}15`,
                  borderColor: `${phase.color}30`,
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <phase.Icon className="w-4 h-4" style={{ color: phase.color }} />
                <span className="text-xs font-bold tracking-wide uppercase" style={{ color: phase.color }}>
                  Phase {phase.n}
                </span>
              </motion.div>
            </div>

            {/* Right — Content */}
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-2">
                  {phase.title}: <span className="text-gold">{phase.subtitle}</span>
                </h3>
                <p className="text-muted-foreground text-[.88rem] font-light leading-[1.85] mb-8">
                  {phase.detail}
                </p>
              </motion.div>

              {/* Deliverables */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                <p className="text-[.65rem] font-bold tracking-[.2em] uppercase text-gold/60 mb-4">
                  Key Deliverables
                </p>
                <div className="space-y-3">
                  {phase.deliverables.map((d, i) => (
                    <motion.div
                      key={d}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                      className="flex items-center gap-3 group/item"
                    >
                      <div
                        className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-all duration-300 group-hover/item:scale-110"
                        style={{ background: `${phase.color}15`, border: `1px solid ${phase.color}25` }}
                      >
                        <ChevronRight className="w-3 h-3" style={{ color: phase.color }} />
                      </div>
                      <span className="text-[.85rem] text-foreground/70 font-light group-hover/item:text-foreground transition-colors duration-300">
                        {d}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Navigation arrows */}
              <div className="flex items-center gap-3 mt-10">
                <button
                  onClick={() => handleClick((active - 1 + phases.length) % phases.length)}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-all duration-300 cursor-none"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                </button>
                <button
                  onClick={() => handleClick((active + 1) % phases.length)}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-all duration-300 cursor-none"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Phase counter */}
                <span className="ml-auto text-xs text-muted-foreground font-light tracking-wider">
                  <span className="text-gold font-bold text-sm">{String(active + 1).padStart(2, "0")}</span>
                  <span className="mx-1.5 text-border">/</span>
                  {String(phases.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
