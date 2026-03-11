import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Cloud, Server, Zap, Shield, Settings, Database, BarChart3, TrendingUp, DollarSign, PieChart, Activity, Brain, ChevronRight, Target, Layers, RefreshCw, FileCheck, Gauge, HeartPulse, Search, Compass, Code2, FlaskConical, Rocket, HeartHandshake, Play, Pause } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import teamDiscovery from "@/assets/team-discovery.jpg";
import teamDesign from "@/assets/team-design.jpg";
import teamImplement from "@/assets/team-implement.jpg";
import teamTesting from "@/assets/team-testing.jpg";
import teamGolive from "@/assets/team-golive.jpg";
import teamHypercare from "@/assets/team-hypercare.jpg";

/* ─── Helpers ─── */
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [.22, 1, .36, 1] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

function MetricCountUp({ value, inView }: { value: string; inView: boolean }) {
  const numMatch = value.match(/(\d+)/);
  const [count, setCount] = useState(0);
  const hasNum = !!numMatch;
  const target = hasNum ? parseInt(numMatch![1]) : 0;
  const prefix = hasNum ? value.slice(0, value.indexOf(numMatch![1])) : "";
  const suffix = hasNum ? value.slice(value.indexOf(numMatch![1]) + numMatch![1].length) : "";

  useEffect(() => {
    if (!inView || !hasNum) return;
    let start = 0;
    const dur = 1800;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, hasNum]);

  if (!hasNum) return <span>{value}</span>;
  return <span>{prefix}{count}{suffix}</span>;
}

function CountUp({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const dur = 2000;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      setVal(Math.floor(p * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end]);
  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

/* ─── Section 1: Hero ─── */
function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden" style={{ background: "#0B0B0B" }}>
      {/* Grid bg */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#F4B400 1px, transparent 1px), linear-gradient(90deg, #F4B400 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center py-24">
        {/* Left */}
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-5" style={{ color: "#F4B400" }}>SAP S/4HANA Expertise</motion.span>
          <motion.h1 variants={fadeUp} className="text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.08] tracking-tight text-white mb-6">
            Transform Enterprise Finance with <span style={{ color: "#F4B400" }}>SAP S/4HANA</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[1.05rem] leading-relaxed mb-8" style={{ color: "#C9C9C9" }}>
            SAP S/4HANA is the next-generation intelligent ERP platform enabling real-time finance, simplified data models, and AI-driven decision intelligence. Kannanware helps enterprises successfully adopt S/4HANA through strategic advisory, implementation, and optimization.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a href="#cta" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-black transition-all hover:scale-105" style={{ background: "#F4B400" }}>Talk to an Expert <ArrowRight size={16} /></a>
            <a href="#demo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white border transition-all hover:bg-white/5" style={{ borderColor: "rgba(244,180,0,.35)" }}>View Live Demo</a>
          </motion.div>
        </motion.div>
        {/* Right — animated dashboard */}
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: .3 }} className="relative hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden border p-6" style={{ background: "rgba(255,255,255,.03)", borderColor: "rgba(244,180,0,.12)" }}>
            {/* KPI row */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[{ label: "Revenue", val: "$4.2B", icon: DollarSign, delta: "+12%" }, { label: "Cash Flow", val: "$890M", icon: TrendingUp, delta: "+8.3%" }, { label: "EBITDA", val: "24.1%", icon: PieChart, delta: "+2.1%" }].map((k, i) => (
                <motion.div key={k.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 + i * .15 }} className="rounded-xl p-4 border" style={{ background: "rgba(244,180,0,.04)", borderColor: "rgba(244,180,0,.08)" }}>
                  <div className="flex items-center gap-2 mb-2"><k.icon size={14} style={{ color: "#F4B400" }} /><span className="text-[.65rem] uppercase tracking-wider text-white/40">{k.label}</span></div>
                  <div className="text-xl font-bold text-white">{k.val}</div>
                  <span className="text-[.7rem] text-green-400">{k.delta}</span>
                </motion.div>
              ))}
            </div>
            {/* Chart placeholder */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="rounded-xl p-5 border mb-3" style={{ background: "rgba(255,255,255,.02)", borderColor: "rgba(244,180,0,.06)" }}>
              <div className="flex justify-between items-center mb-4"><span className="text-xs text-white/50">Financial Performance — Q1-Q4</span><span className="text-[.65rem] px-2 py-0.5 rounded" style={{ background: "rgba(244,180,0,.15)", color: "#F4B400" }}>Live</span></div>
              <div className="flex items-end gap-1.5 h-28">
                {[40, 55, 45, 70, 60, 85, 75, 90, 82, 95, 88, 100].map((h, i) => (
                  <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 1.3 + i * .06, duration: .5 }} className="flex-1 rounded-t" style={{ background: `linear-gradient(to top, rgba(244,180,0,${.3 + (h / 200)}), rgba(244,180,0,${.1 + (h / 400)}))` }} />
                ))}
              </div>
            </motion.div>
            {/* AI insight */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }} className="flex items-start gap-3 rounded-lg p-3 border" style={{ background: "rgba(244,180,0,.05)", borderColor: "rgba(244,180,0,.12)" }}>
              <Brain size={16} style={{ color: "#F4B400", marginTop: 2 }} />
              <p className="text-[.75rem] leading-relaxed text-white/70"><span className="font-semibold text-white">AI Insight:</span> Revenue growth trend accelerating. Forecast confidence: 94%.</p>
            </motion.div>
          </div>
          {/* Glow */}
          <div className="absolute -inset-10 rounded-full blur-[100px] -z-10" style={{ background: "radial-gradient(circle, rgba(244,180,0,.08) 0%, transparent 70%)" }} />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Section 2: Public vs Private Cloud ─── */
function CloudToggle() {
  const [isPublic, setIsPublic] = useState(true);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const publicFeatures = [
    { icon: Zap, title: "Fast Implementation", desc: "Accelerated deployment with pre-configured best practices and standardized processes." },
    { icon: RefreshCw, title: "Continuous Innovation", desc: "Automatic quarterly updates with the latest SAP innovations and features." },
    { icon: Cloud, title: "Standardized Processes", desc: "Industry-leading workflows built on SAP best practices for rapid adoption." },
    { icon: DollarSign, title: "Lower Infrastructure Costs", desc: "Eliminate on-premise hardware with cloud-native economics and predictable pricing." },
  ];
  const privateFeatures = [
    { icon: Settings, title: "Full Customization", desc: "Tailor every aspect of the platform to your unique business requirements." },
    { icon: Shield, title: "Enterprise Flexibility", desc: "Complete control over upgrade cycles, extensions, and deployment timing." },
    { icon: Database, title: "Legacy Integration", desc: "Seamlessly connect with existing on-premise systems and third-party applications." },
    { icon: Server, title: "Advanced Architecture Control", desc: "Fine-tune infrastructure, security, and performance to enterprise specifications." },
  ];
  const features = isPublic ? publicFeatures : privateFeatures;

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1100px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-14">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Deployment Options</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Public Cloud vs Private Cloud</motion.h2>
        </motion.div>
        {/* Toggle */}
        <div className="flex justify-center mb-14">
          <div className="relative flex rounded-full p-1" style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(244,180,0,.12)" }}>
            <button onClick={() => setIsPublic(true)} className={`relative z-10 px-8 py-3 rounded-full text-sm font-semibold transition-colors ${isPublic ? "text-black" : "text-white/60 hover:text-white"}`}>
              {isPublic && <motion.div layoutId="cloud-toggle" className="absolute inset-0 rounded-full" style={{ background: "#F4B400" }} />}
              <span className="relative z-10">Public Cloud</span>
            </button>
            <button onClick={() => setIsPublic(false)} className={`relative z-10 px-8 py-3 rounded-full text-sm font-semibold transition-colors ${!isPublic ? "text-black" : "text-white/60 hover:text-white"}`}>
              {!isPublic && <motion.div layoutId="cloud-toggle" className="absolute inset-0 rounded-full" style={{ background: "#F4B400" }} />}
              <span className="relative z-10">Private Cloud</span>
            </button>
          </div>
        </div>
        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div key={isPublic ? "pub" : "priv"} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: .4 }} className="grid md:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .1 }} className="group rounded-xl p-6 border transition-all hover:border-[rgba(244,180,0,.3)]" style={{ background: "rgba(255,255,255,.02)", borderColor: "rgba(255,255,255,.06)" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors" style={{ background: "rgba(244,180,0,.1)" }}>
                  <f.icon size={20} style={{ color: "#F4B400" }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#C9C9C9" }}>{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─── Section 3: Live Demo ─── */
function LiveDemo() {
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const runAnalysis = () => {
    setRunning(true);
    setDone(false);
    setTimeout(() => { setRunning(false); setDone(true); }, 2500);
  };

  return (
    <section ref={ref} id="demo" className="py-28 px-6 md:px-10" style={{ background: "#0B0B0B" }}>
      <div className="max-w-[1100px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-14">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Interactive Experience</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Live S/4HANA Finance Demo</motion.h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7 }} className="rounded-2xl border overflow-hidden" style={{ background: "rgba(255,255,255,.02)", borderColor: "rgba(244,180,0,.1)" }}>
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-3 border-b" style={{ borderColor: "rgba(255,255,255,.06)" }}>
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-red-500/60" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" /><div className="w-2.5 h-2.5 rounded-full bg-green-500/60" /></div>
            <span className="text-[.65rem] text-white/30 tracking-wider uppercase">S/4HANA Finance Console</span>
            <div />
          </div>
          <div className="p-6">
            {/* KPIs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[{ l: "Revenue YTD", v: done ? 4218 : 3890, s: "$", u: "M" }, { l: "Cash Flow", v: done ? 892 : 780, s: "$", u: "M" }, { l: "Forecast Accuracy", v: done ? 96 : 87, s: "", u: "%" }, { l: "Close Cycle", v: done ? 3 : 8, s: "", u: " Days" }].map((k) => (
                <div key={k.l} className="rounded-xl p-4 border" style={{ background: "rgba(244,180,0,.03)", borderColor: "rgba(244,180,0,.06)" }}>
                  <span className="text-[.65rem] text-white/40 uppercase tracking-wider block mb-1">{k.l}</span>
                  <span className="text-2xl font-bold text-white">{k.s}<CountUp end={k.v} />{k.u}</span>
                </div>
              ))}
            </div>
            {/* Chart */}
            <div className="rounded-xl p-5 border mb-5" style={{ background: "rgba(255,255,255,.015)", borderColor: "rgba(255,255,255,.05)" }}>
              <div className="flex items-end gap-2 h-36">
                {[35, 42, 38, 55, 48, 62, 58, 72, 65, 80, 75, done ? 95 : 70].map((h, i) => (
                  <motion.div key={i} className="flex-1 rounded-t transition-all duration-700" animate={{ height: `${h}%` }} style={{ background: `linear-gradient(to top, rgba(244,180,0,${running ? .6 : .35}), rgba(244,180,0,.05))`, boxShadow: running ? "0 0 12px rgba(244,180,0,.2)" : "none" }} />
                ))}
              </div>
            </div>
            {/* AI Insight */}
            <AnimatePresence>
              {done && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0 }} className="rounded-xl p-4 border mb-5 flex items-start gap-3" style={{ background: "rgba(244,180,0,.06)", borderColor: "rgba(244,180,0,.15)" }}>
                  <Brain size={18} style={{ color: "#F4B400", marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">AI Insight Generated</p>
                    <p className="text-[.8rem] leading-relaxed" style={{ color: "#C9C9C9" }}>"Revenue variance detected in Region A. Recommended action: review delayed receivables. Projected recovery: $12.4M within 30 days."</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {/* Button */}
            <div className="flex justify-center">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }} onClick={runAnalysis} disabled={running} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm text-black disabled:opacity-70 transition-shadow" style={{ background: "#F4B400", boxShadow: "0 0 30px rgba(244,180,0,.25)" }}>
                {running ? <><Activity size={16} className="animate-spin" /> Running Analysis…</> : <><BarChart3 size={16} /> Run Financial Analysis</>}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Section 4: Expertise — cinematic full-width rows ─── */
function ExpertiseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const capabilities = [
    { icon: Target, title: "Greenfield Implementation", desc: "Build your S/4HANA environment from the ground up with modern best practices, clean architecture, and zero legacy baggage — delivering a future-proof foundation for enterprise finance.", num: "01" },
    { icon: RefreshCw, title: "Brownfield System Conversion", desc: "Convert your existing ECC system to S/4HANA while preserving customizations, historical data, and organizational knowledge — minimizing disruption and accelerating time-to-value.", num: "02" },
    { icon: Layers, title: "Bluefield Selective Transformation", desc: "Selectively migrate processes and data, combining the best of greenfield and brownfield approaches for a tailored transformation that balances innovation with continuity.", num: "03" },
    { icon: DollarSign, title: "Finance Transformation (FI/CO)", desc: "Reimagine your financial processes with Universal Journal, real-time reporting, margin analysis, and integrated planning — unlocking the full power of S/4HANA Finance.", num: "04" },
    { icon: FileCheck, title: "Data Migration & Validation", desc: "End-to-end data migration strategy with automated validation, cleansing, reconciliation frameworks, and rigorous quality gates ensuring data integrity at every stage.", num: "05" },
    { icon: Gauge, title: "S/4HANA System Optimization", desc: "Maximize your existing S/4HANA investment through performance tuning, process optimization, feature activation, and continuous improvement roadmaps.", num: "06" },
  ];

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-20">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Implementation Excellence</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Our S/4HANA Implementation Expertise</motion.h2>
        </motion.div>
        <div className="space-y-0">
          {capabilities.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06, duration: .6 }}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] items-start gap-6 md:gap-10 py-10 border-b transition-all"
              style={{ borderColor: "rgba(255,255,255,.06)" }}
            >
              {/* Number + Icon */}
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <span className="text-[2rem] font-bold leading-none tracking-tight transition-colors group-hover:text-[#F4B400]" style={{ color: "rgba(255,255,255,.12)" }}>{c.num}</span>
                <div className="w-11 h-11 rounded-lg flex items-center justify-center transition-shadow group-hover:shadow-[0_0_24px_rgba(244,180,0,.25)]" style={{ background: "rgba(244,180,0,.1)" }}>
                  <c.icon size={20} style={{ color: "#F4B400" }} />
                </div>
              </div>
              {/* Title */}
              <h3 className="text-[clamp(1.2rem,2.5vw,1.6rem)] font-bold text-white leading-tight group-hover:text-[#F4B400] transition-colors">{c.title}</h3>
              {/* Description */}
              <p className="text-[.92rem] leading-[1.8]" style={{ color: "#C9C9C9" }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5: Timeline — cinematic auto-looping with photos ─── */
function TransformationTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const STEP_DURATION = 5000;

  const steps = [
    { title: "Discovery", icon: Search, desc: "Assess your current landscape, define transformation goals, and build the business case for S/4HANA. We map every process, interview stakeholders, and identify quick wins.", img: teamDiscovery },
    { title: "Solution Design", icon: Compass, desc: "Architect the target solution with fit-gap analysis, process mapping, and technical blueprinting. Our SAP-certified architects design for scale.", img: teamDesign },
    { title: "Implementation", icon: Code2, desc: "Configure, develop, and integrate S/4HANA modules following agile delivery methodology. Sprints, demos, and continuous stakeholder alignment.", img: teamImplement },
    { title: "Testing", icon: FlaskConical, desc: "Execute comprehensive testing — unit, integration, UAT, performance, and regression. Automated test suites ensure zero-defect go-lives.", img: teamTesting },
    { title: "Go-Live", icon: Rocket, desc: "Orchestrate cutover activities, data migration, and production deployment with zero-downtime strategies and real-time monitoring dashboards.", img: teamGolive },
    { title: "Hypercare Support", icon: HeartHandshake, desc: "Dedicated post-go-live support, stabilization, and continuous optimization. 24/7 war-room coverage for the critical first 90 days.", img: teamHypercare },
  ];

  useEffect(() => {
    if (!inView || paused) return;
    const timer = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % steps.length);
    }, STEP_DURATION);
    return () => clearInterval(timer);
  }, [inView, paused, steps.length]);

  return (
    <section ref={ref} className="py-28 px-6 md:px-10 overflow-hidden" style={{ background: "#0B0B0B" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Methodology</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight mb-3">Transformation Journey</motion.h2>
          <motion.p variants={fadeUp} className="text-sm" style={{ color: "#999" }}>Auto-playing • Click any phase to explore</motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
          {/* Left: step list */}
          <div className="space-y-1">
            {steps.map((s, i) => {
              const isActive = activeIdx === i;
              return (
                <motion.button key={s.title} onClick={() => { setActiveIdx(i); setPaused(true); }} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: .2 + i * .08 }}
                  className="w-full text-left flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-300 group"
                  style={{ background: isActive ? "rgba(244,180,0,.08)" : "transparent", borderLeft: isActive ? "3px solid #F4B400" : "3px solid transparent" }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all" style={{ background: isActive ? "rgba(244,180,0,.15)" : "rgba(255,255,255,.04)", boxShadow: isActive ? "0 0 20px rgba(244,180,0,.2)" : "none" }}>
                    <s.icon size={18} style={{ color: isActive ? "#F4B400" : "rgba(255,255,255,.3)" }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold transition-colors" style={{ color: isActive ? "#F4B400" : "rgba(255,255,255,.7)" }}>{s.title}</p>
                    {isActive && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="overflow-hidden">
                        {/* Progress bar */}
                        <div className="h-0.5 rounded-full mt-2 mb-2 overflow-hidden" style={{ background: "rgba(255,255,255,.08)" }}>
                          <motion.div key={`prog-${i}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: STEP_DURATION / 1000, ease: "linear" }} className="h-full rounded-full" style={{ background: "#F4B400" }} />
                        </div>
                        <p className="text-[.78rem] leading-relaxed" style={{ color: "#999" }}>{s.desc}</p>
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              );
            })}
            {/* Play/Pause */}
            <div className="flex justify-center pt-4">
              <button onClick={() => setPaused(!paused)} className="flex items-center gap-2 text-[.75rem] font-medium transition-colors hover:text-white" style={{ color: "rgba(255,255,255,.4)" }}>
                {paused ? <Play size={14} /> : <Pause size={14} />}
                {paused ? "Resume Auto-Play" : "Playing"}
              </button>
            </div>
          </div>

          {/* Right: photo + overlay */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <AnimatePresence mode="wait">
              <motion.img key={activeIdx} src={steps[activeIdx].img} alt={steps[activeIdx].title} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .97 }} transition={{ duration: .6 }} className="absolute inset-0 w-full h-full object-cover" />
            </AnimatePresence>
            {/* Gradient overlay */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,11,11,.85) 0%, rgba(11,11,11,.2) 50%, transparent 100%)" }} />
            {/* Phase label */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[.65rem] font-bold tracking-[.2em] uppercase" style={{ color: "#F4B400" }}>Phase {activeIdx + 1} of {steps.length}</span>
              <h3 className="text-2xl font-bold text-white mt-1">{steps[activeIdx].title}</h3>
            </div>
            {/* Step indicators */}
            <div className="absolute top-5 right-5 flex gap-1.5">
              {steps.map((_, i) => (
                <button key={i} onClick={() => { setActiveIdx(i); setPaused(true); }} className="w-2 h-2 rounded-full transition-all" style={{ background: i === activeIdx ? "#F4B400" : "rgba(255,255,255,.25)", boxShadow: i === activeIdx ? "0 0 8px rgba(244,180,0,.5)" : "none" }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 6: Architecture — Interactive Solar System ─── */
function ArchitectureViz() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const animRef = useRef<number>(0);
  const pausedRef = useRef(false);

  const nodes = [
    { label: "SAP BTP", desc: "Business Technology Platform — build extensions, automate workflows, and integrate with any system using low-code and pro-code tools.", color: "#F4B400" },
    { label: "SAP Datasphere", desc: "Unified data layer that harmonizes data across SAP and non-SAP sources for trusted, real-time business insights.", color: "#FFD54F" },
    { label: "SAP Analytics Cloud", desc: "Enterprise planning, BI reporting, and predictive analytics unified in a single cloud solution.", color: "#FFA726" },
    { label: "SAP BW/4HANA", desc: "Next-generation data warehousing optimized for S/4HANA with real-time operational reporting capabilities.", color: "#FFB74D" },
    { label: "SAP Integration Suite", desc: "Connect cloud and on-premise applications, automate processes, and manage APIs at enterprise scale.", color: "#FFCA28" },
  ];

  useEffect(() => {
    if (!inView) return;
    const animate = () => {
      if (!pausedRef.current) {
        setRotation(prev => prev + 0.15);
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [inView]);

  const r = 180; // orbit radius

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-10">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Architecture</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">S/4HANA Ecosystem</motion.h2>
          <motion.p variants={fadeUp} className="text-sm mt-3" style={{ color: "#999" }}>Hover to pause • Click a node to explore</motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
          {/* Solar system */}
          <div className="relative flex justify-center" onMouseEnter={() => { pausedRef.current = true; }} onMouseLeave={() => { pausedRef.current = false; }}>
            <div className="relative" style={{ width: r * 2 + 120, height: r * 2 + 120 }}>
              {/* Orbit rings */}
              {[1, .7, .4].map((opacity, i) => (
                <div key={i} className="absolute rounded-full border" style={{ inset: `${30 + i * 20}px`, borderColor: `rgba(244,180,0,${opacity * .08})` }} />
              ))}
              {/* Sun center */}
              <motion.div initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full flex items-center justify-center z-10" style={{ background: "radial-gradient(circle, rgba(244,180,0,.35) 0%, rgba(244,180,0,.08) 70%)", border: "2px solid rgba(244,180,0,.5)", boxShadow: "0 0 60px rgba(244,180,0,.2), 0 0 120px rgba(244,180,0,.08)" }}>
                <span className="text-sm font-bold text-white text-center leading-tight">SAP<br/>S/4HANA</span>
              </motion.div>
              {/* Orbiting nodes */}
              {nodes.map((n, i) => {
                const angle = rotation + (i * 360 / nodes.length);
                const rad = (angle - 90) * Math.PI / 180;
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;
                const isSelected = selected === i;
                return (
                  <motion.div key={n.label} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: .5 + i * .1 }}
                    className="absolute z-20 cursor-pointer"
                    style={{ left: `calc(50% + ${x}px - 38px)`, top: `calc(50% + ${y}px - 38px)`, transition: "left 0.05s linear, top 0.05s linear" }}
                    onClick={() => setSelected(isSelected ? null : i)}
                  >
                    {/* Connection line to center */}
                    <svg className="absolute pointer-events-none" style={{ left: 38, top: 38, width: 1, height: 1, overflow: "visible" }}>
                      <line x1="0" y1="0" x2={-x} y2={-y} stroke={isSelected ? "rgba(244,180,0,.4)" : "rgba(244,180,0,.1)"} strokeWidth="1" />
                    </svg>
                    <div className="w-[76px] h-[76px] rounded-full flex items-center justify-center transition-all duration-300" style={{
                      background: isSelected ? "rgba(244,180,0,.2)" : "rgba(244,180,0,.06)",
                      border: `2px solid ${isSelected ? n.color : "rgba(244,180,0,.2)"}`,
                      boxShadow: isSelected ? `0 0 30px ${n.color}40` : "none",
                    }}>
                      <span className="text-[.6rem] font-bold text-white text-center leading-tight px-1">{n.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: details panel */}
          <div className="min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              {selected !== null ? (
                <motion.div key={selected} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="rounded-2xl p-8 border w-full" style={{ background: "rgba(255,255,255,.02)", borderColor: `${nodes[selected].color}30` }}>
                  <div className="w-3 h-3 rounded-full mb-4" style={{ background: nodes[selected].color, boxShadow: `0 0 12px ${nodes[selected].color}60` }} />
                  <h3 className="text-xl font-bold text-white mb-3">{nodes[selected].label}</h3>
                  <p className="text-[.92rem] leading-[1.8]" style={{ color: "#C9C9C9" }}>{nodes[selected].desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-[.75rem] font-semibold" style={{ color: "#F4B400" }}>
                    <span>Connected to SAP S/4HANA</span>
                    <div className="flex-1 h-px" style={{ background: "rgba(244,180,0,.2)" }} />
                  </div>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center w-full">
                  <p className="text-lg text-white/40">Click any orbiting node to explore its connection to the S/4HANA core</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 7: Business Impact — large statement rows ─── */
function BusinessImpact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const blocks = [
    { title: "Real-Time Financial Insights", desc: "Instant visibility into financial performance across every dimension — entity, segment, profit center — with sub-second response times.", metric: "< 1s", metricLabel: "Query Response" },
    { title: "Accelerated Financial Close", desc: "Reduce close cycles from weeks to days with automated reconciliation, parallel processing, and intelligent exception handling.", metric: "70%", metricLabel: "Faster Close" },
    { title: "Simplified Data Architecture", desc: "Single source of truth with Universal Journal eliminating data redundancy, aggregate tables, and reconciliation complexity.", metric: "10x", metricLabel: "Less Redundancy" },
    { title: "Future-Ready ERP Platform", desc: "AI-native, cloud-enabled platform built for the next decade of innovation with embedded machine learning and predictive capabilities.", metric: "∞", metricLabel: "Scalability" },
  ];

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#0B0B0B" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-20">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Results</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Business Impact</motion.h2>
        </motion.div>
        <div className="space-y-0">
          {blocks.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08, duration: .6 }}
              className="group grid grid-cols-1 md:grid-cols-[120px_1fr_1.2fr] items-start gap-6 md:gap-10 py-10 border-b transition-all"
              style={{ borderColor: "rgba(255,255,255,.06)" }}
            >
              {/* Metric — animated count-up */}
              <div className="text-center md:text-left">
                <span className="text-[2.5rem] font-bold leading-none transition-colors" style={{ color: "#F4B400" }}>
                  <MetricCountUp value={b.metric} inView={inView} />
                </span>
                <span className="block text-[.65rem] uppercase tracking-[.15em] mt-1" style={{ color: "rgba(255,255,255,.3)" }}>{b.metricLabel}</span>
              </div>
              {/* Title */}
              <h3 className="text-[clamp(1.2rem,2.5vw,1.6rem)] font-bold text-white leading-tight group-hover:text-[#F4B400] transition-colors">{b.title}</h3>
              {/* Description */}
              <p className="text-[.92rem] leading-[1.8]" style={{ color: "#C9C9C9" }}>{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 8: CTA ─── */
function CTASection() {
  return (
    <section id="cta" className="relative py-28 px-6 md:px-10 overflow-hidden" style={{ background: "#0B0B0B" }}>
      <div className="absolute inset-0 flex items-center justify-center"><div className="w-[600px] h-[600px] rounded-full blur-[160px]" style={{ background: "radial-gradient(circle, rgba(244,180,0,.08), transparent 70%)" }} /></div>
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-5" style={{ color: "#F4B400" }}>Get Started</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,4.5vw,3rem)] font-bold text-white tracking-tight mb-6">Start Your SAP S/4HANA Transformation</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .2 }} className="text-[1.05rem] leading-relaxed mb-10" style={{ color: "#C9C9C9" }}>Partner with Kannanware to design, implement, and optimize your S/4HANA environment for the next generation of enterprise finance.</motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .3 }} className="flex flex-wrap justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm text-black transition-all hover:scale-105" style={{ background: "#F4B400", boxShadow: "0 0 40px rgba(244,180,0,.3)" }}>Schedule a Consultation <ArrowRight size={16} /></a>
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm text-white border transition-all hover:bg-white/5" style={{ borderColor: "rgba(244,180,0,.3)" }}>Contact Our Experts</a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function S4HanaPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0B0B0B", fontFamily: "'Ubuntu', sans-serif" }}>
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <CloudToggle />
      <LiveDemo />
      <ExpertiseSection />
      <TransformationTimeline />
      <ArchitectureViz />
      <BusinessImpact />
      <CTASection />
      <Footer />
    </div>
  );
}
