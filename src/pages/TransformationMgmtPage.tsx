import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Layers, Map, BarChart3, TrendingUp, Activity, Brain, ChevronRight, Target, Search, Compass, Code2, FlaskConical, Rocket, HeartHandshake, Play, Pause, Workflow, Globe, Users, Eye, MessageSquare, Gauge, Settings, Zap, MousePointerClick, Route, GitBranch, BookOpen, Lightbulb, CheckCircle, LineChart, SlidersHorizontal, Footprints } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    const step = (ts: number) => { if (!start) start = ts; const p = Math.min((ts - start) / dur, 1); setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target)); if (p < 1) requestAnimationFrame(step); };
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
    const step = (ts: number) => { if (!start) start = ts; const p = Math.min((ts - start) / 2000, 1); setVal(Math.floor(p * end)); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, [inView, end]);
  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden" style={{ background: "#0B0B0B" }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #F4B400 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[180px] opacity-[0.05]" style={{ background: "radial-gradient(circle, #F4B400, transparent)" }} />
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center py-24">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-5" style={{ color: "#F4B400" }}>Transformation Management</motion.span>
          <motion.h1 variants={fadeUp} className="text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.08] tracking-tight text-white mb-6">
            Drive Adoption with <span style={{ color: "#F4B400" }}>WalkMe</span> & <span style={{ color: "#F4B400" }}>SAP Signavio</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[1.05rem] leading-relaxed mb-8" style={{ color: "#C9C9C9" }}>
            Technology transforms only when people adopt it. Kannanware combines WalkMe's digital adoption platform with SAP Signavio's process intelligence to ensure your SAP investments deliver real, measurable outcomes.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a href="#cta" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-black transition-all hover:scale-105" style={{ background: "#F4B400" }}>Talk to an Expert <ArrowRight size={16} /></a>
            <a href="#demo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white border transition-all hover:bg-white/5" style={{ borderColor: "rgba(244,180,0,.35)" }}>Explore Solutions</a>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: .3 }} className="relative hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden border p-6" style={{ background: "rgba(255,255,255,.03)", borderColor: "rgba(244,180,0,.12)" }}>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[{ label: "Adoption Rate", val: "94%", icon: Users, delta: "+22% vs baseline" }, { label: "Process Efficiency", val: "3.2x", icon: Zap, delta: "Faster execution" }, { label: "Support Tickets", val: "-67%", icon: TrendingUp, delta: "Reduced by WalkMe" }].map((k, i) => (
                <motion.div key={k.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 + i * .15 }} className="rounded-xl p-4 border" style={{ background: "rgba(244,180,0,.04)", borderColor: "rgba(244,180,0,.08)" }}>
                  <div className="flex items-center gap-2 mb-2"><k.icon size={14} style={{ color: "#F4B400" }} /><span className="text-[.65rem] uppercase tracking-wider text-white/40">{k.label}</span></div>
                  <div className="text-xl font-bold text-white">{k.val}</div>
                  <span className="text-[.7rem] text-green-400">{k.delta}</span>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="rounded-xl p-5 border mb-3" style={{ background: "rgba(255,255,255,.02)", borderColor: "rgba(244,180,0,.06)" }}>
              <div className="flex justify-between items-center mb-4"><span className="text-xs text-white/50">User Adoption Trend — Last 12 Months</span><span className="text-[.65rem] px-2 py-0.5 rounded" style={{ background: "rgba(244,180,0,.15)", color: "#F4B400" }}>Live</span></div>
              <div className="flex items-end gap-1.5 h-28">
                {[25, 32, 40, 48, 55, 62, 68, 74, 80, 86, 91, 94].map((h, i) => (
                  <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 1.3 + i * .06, duration: .5 }} className="flex-1 rounded-t" style={{ background: `linear-gradient(to top, rgba(244,180,0,${.3 + (h / 200)}), rgba(244,180,0,${.1 + (h / 400)}))` }} />
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }} className="flex items-start gap-3 rounded-lg p-3 border" style={{ background: "rgba(244,180,0,.05)", borderColor: "rgba(244,180,0,.12)" }}>
              <Brain size={16} style={{ color: "#F4B400", marginTop: 2 }} />
              <p className="text-[.75rem] leading-relaxed text-white/70"><span className="font-semibold text-white">Signavio Insight:</span> Process mining identified 3 bottlenecks in Order-to-Cash. WalkMe guided flows reduced processing time by 41%.</p>
            </motion.div>
          </div>
          <div className="absolute -inset-10 rounded-full blur-[100px] -z-10" style={{ background: "radial-gradient(circle, rgba(244,180,0,.08) 0%, transparent 70%)" }} />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Platform Toggle (WalkMe vs Signavio) ─── */
function PlatformToggle() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const tabs = [
    {
      label: "WalkMe",
      features: [
        { icon: MousePointerClick, title: "Digital Adoption Platform", desc: "Overlay contextual guidance, tooltips, and walk-throughs directly on top of SAP applications — no code changes required. Users learn by doing, not by reading manuals." },
        { icon: Footprints, title: "Smart Walk-Throughs", desc: "Step-by-step interactive guides that adapt to user context, role, and proficiency level. Automate repetitive tasks and reduce clicks by up to 60%." },
        { icon: LineChart, title: "Adoption Analytics", desc: "Track user behavior, feature adoption rates, and friction points in real-time. Identify where users struggle and deploy targeted guidance automatically." },
        { icon: SlidersHorizontal, title: "Onboarding Automation", desc: "Reduce SAP onboarding time from weeks to days. Role-based learning paths, certification tracking, and automated proficiency assessments." },
      ]
    },
    {
      label: "SAP Signavio",
      features: [
        { icon: Map, title: "Process Discovery", desc: "Automatically mine and visualize your actual business processes from SAP transaction logs. See how your organization really works — not how you think it works." },
        { icon: Route, title: "Process Modeling", desc: "Design target-state processes with collaborative BPMN modeling. Compare as-is vs to-be, simulate changes, and validate process designs before implementation." },
        { icon: Eye, title: "Process Intelligence", desc: "Continuous process monitoring with conformance checking. Detect deviations, bottlenecks, and compliance violations across your entire SAP landscape." },
        { icon: Lightbulb, title: "Process Transformation", desc: "AI-powered recommendations for process optimization. Prioritize improvements based on business impact, effort, and risk — with quantified ROI projections." },
      ]
    },
    {
      label: "Combined Power",
      features: [
        { icon: Layers, title: "Process-Driven Adoption", desc: "Use Signavio's process insights to design targeted WalkMe guidance. Focus adoption efforts on the processes with the highest business impact and user friction." },
        { icon: BarChart3, title: "End-to-End Visibility", desc: "Signavio reveals process inefficiencies while WalkMe shows user behavior patterns. Together, they provide a 360° view of your transformation progress." },
        { icon: Zap, title: "Accelerated Transformation", desc: "Reduce change resistance by combining process excellence with guided user experiences. Achieve target adoption rates 3x faster than traditional change management." },
        { icon: CheckCircle, title: "Continuous Improvement", desc: "Close the loop: Signavio identifies optimization opportunities, WalkMe deploys the changes, and both platforms measure the results — creating a perpetual improvement engine." },
      ]
    }
  ];

  const features = tabs[activeTab].features;

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1100px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-14">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Platform Capabilities</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Two Platforms, One Transformation</motion.h2>
        </motion.div>
        <div className="flex justify-center mb-14">
          <div className="relative flex rounded-full p-1 gap-1" style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(244,180,0,.12)" }}>
            {tabs.map((t, i) => (
              <button key={t.label} onClick={() => setActiveTab(i)} className={`relative z-10 px-6 py-3 rounded-full text-sm font-semibold transition-colors ${activeTab === i ? "text-black" : "text-white/60 hover:text-white"}`}>
                {activeTab === i && <motion.div layoutId="tm-tab" className="absolute inset-0 rounded-full" style={{ background: "#F4B400" }} />}
                <span className="relative z-10">{t.label}</span>
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: .4 }} className="grid md:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .1 }} className="group rounded-xl p-6 border transition-all hover:border-[rgba(244,180,0,.3)]" style={{ background: "rgba(255,255,255,.02)", borderColor: "rgba(255,255,255,.06)" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(244,180,0,.1)" }}>
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

/* ─── Live Demo ─── */
function LiveDemo() {
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const runAnalysis = () => { setRunning(true); setDone(false); setTimeout(() => { setRunning(false); setDone(true); }, 2500); };

  return (
    <section ref={ref} id="demo" className="py-28 px-6 md:px-10" style={{ background: "#0B0B0B" }}>
      <div className="max-w-[1100px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-14">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Interactive Experience</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Live Adoption & Process Dashboard</motion.h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7 }} className="rounded-2xl border overflow-hidden" style={{ background: "rgba(255,255,255,.02)", borderColor: "rgba(244,180,0,.1)" }}>
          <div className="flex items-center justify-between px-6 py-3 border-b" style={{ borderColor: "rgba(255,255,255,.06)" }}>
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-red-500/60" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" /><div className="w-2.5 h-2.5 rounded-full bg-green-500/60" /></div>
            <span className="text-[.65rem] text-white/30 tracking-wider uppercase">Transformation Management Console</span>
            <div />
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[{ l: "Adoption Rate", v: done ? 94 : 58, u: "%" }, { l: "Process Variants", v: done ? 12 : 47, u: "" }, { l: "Avg Task Time", v: done ? 2 : 8, u: "min" }, { l: "Support Tickets", v: done ? 34 : 156, u: "/wk" }].map((k) => (
                <div key={k.l} className="rounded-xl p-4 border" style={{ background: "rgba(244,180,0,.03)", borderColor: "rgba(244,180,0,.06)" }}>
                  <span className="text-[.65rem] text-white/40 uppercase tracking-wider block mb-1">{k.l}</span>
                  <span className="text-2xl font-bold text-white"><CountUp end={k.v} />{k.u}</span>
                </div>
              ))}
            </div>
            <div className="rounded-xl p-5 border mb-5" style={{ background: "rgba(255,255,255,.015)", borderColor: "rgba(255,255,255,.05)" }}>
              <div className="flex items-end gap-2 h-36">
                {[20, 28, 35, 42, 50, 58, 64, 72, 78, 84, 90, done ? 94 : 55].map((h, i) => (
                  <motion.div key={i} className="flex-1 rounded-t transition-all duration-700" animate={{ height: `${h}%` }} style={{ background: `linear-gradient(to top, rgba(244,180,0,${running ? .6 : .35}), rgba(244,180,0,.05))`, boxShadow: running ? "0 0 12px rgba(244,180,0,.2)" : "none" }} />
                ))}
              </div>
            </div>
            <AnimatePresence>
              {done && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0 }} className="rounded-xl p-4 border mb-5 flex items-start gap-3" style={{ background: "rgba(244,180,0,.06)", borderColor: "rgba(244,180,0,.15)" }}>
                  <Brain size={18} style={{ color: "#F4B400", marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Signavio + WalkMe Recommendation</p>
                    <p className="text-[.8rem] leading-relaxed" style={{ color: "#C9C9C9" }}>"Process mining detected 47→12 variant reduction after WalkMe deployment. 3 remaining deviations in Purchase Requisition flow. Deploying targeted Smart Walk-Throughs to standardize."</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex justify-center">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }} onClick={runAnalysis} disabled={running} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm text-black disabled:opacity-70" style={{ background: "#F4B400", boxShadow: "0 0 30px rgba(244,180,0,.25)" }}>
                {running ? <><Activity size={16} className="animate-spin" /> Analyzing Transformation…</> : <><Workflow size={16} /> Run Transformation Analysis</>}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Expertise ─── */
function ExpertiseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const capabilities = [
    { icon: Map, title: "Process Mining & Discovery", desc: "Deploy SAP Signavio Process Intelligence to automatically discover, map, and analyze your real SAP processes. Identify bottlenecks, rework loops, and compliance deviations from actual transaction data — not assumptions.", num: "01" },
    { icon: MousePointerClick, title: "Digital Adoption Strategy", desc: "Design and implement WalkMe overlays across your SAP landscape. Role-based guidance, smart walk-throughs, and automated task completion that accelerates user proficiency from day one.", num: "02" },
    { icon: Route, title: "Process Optimization", desc: "Use Signavio's process simulation to model target-state processes before implementation. Quantify the impact of proposed changes and prioritize optimizations with data-driven business cases.", num: "03" },
    { icon: BarChart3, title: "Adoption Analytics & ROI", desc: "Measure transformation success with WalkMe's adoption analytics. Track feature usage, task completion rates, and user satisfaction across your entire SAP portfolio — with executive-ready dashboards.", num: "04" },
    { icon: BookOpen, title: "Change Management Enablement", desc: "Combine digital adoption with organizational change management. Stakeholder analysis, communication planning, training design, and resistance management — all informed by real usage data.", num: "05" },
    { icon: GitBranch, title: "Continuous Process Governance", desc: "Establish ongoing process governance with Signavio's conformance checking. Monitor process health, detect drift from standards, and trigger WalkMe interventions automatically when deviations occur.", num: "06" },
  ];

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-20">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Implementation Excellence</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Our Transformation Expertise</motion.h2>
        </motion.div>
        <div className="space-y-0">
          {capabilities.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06, duration: .6 }}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] items-start gap-6 md:gap-10 py-10 border-b" style={{ borderColor: "rgba(255,255,255,.06)" }}>
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <span className="text-[2rem] font-bold leading-none tracking-tight transition-colors group-hover:text-[#F4B400]" style={{ color: "rgba(255,255,255,.12)" }}>{c.num}</span>
                <div className="w-11 h-11 rounded-lg flex items-center justify-center transition-shadow group-hover:shadow-[0_0_24px_rgba(244,180,0,.25)]" style={{ background: "rgba(244,180,0,.1)" }}><c.icon size={20} style={{ color: "#F4B400" }} /></div>
              </div>
              <h3 className="text-[clamp(1.2rem,2.5vw,1.6rem)] font-bold text-white leading-tight group-hover:text-[#F4B400] transition-colors">{c.title}</h3>
              <p className="text-[.92rem] leading-[1.8]" style={{ color: "#C9C9C9" }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Timeline ─── */
function TransformationTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const STEP_DURATION = 5000;
  const steps = [
    { title: "Process Discovery", icon: Search, desc: "Deploy Signavio Process Intelligence on your SAP systems. Automatically mine event logs, discover actual process flows, and identify high-impact improvement areas.", img: teamDiscovery },
    { title: "Adoption Assessment", icon: Compass, desc: "Assess current user proficiency, identify adoption gaps, and design role-based WalkMe guidance strategies. Map critical user journeys across SAP modules.", img: teamDesign },
    { title: "Solution Design", icon: Code2, desc: "Design Signavio target-state processes and WalkMe guidance flows in parallel. Align process optimization with user experience to maximize transformation impact.", img: teamImplement },
    { title: "Build & Configure", icon: FlaskConical, desc: "Build WalkMe Smart Walk-Throughs, configure Signavio dashboards, and deploy analytics. Iterative testing with user groups to refine guidance and process models.", img: teamTesting },
    { title: "Go-Live & Rollout", icon: Rocket, desc: "Phased rollout with real-time adoption monitoring. WalkMe provides in-app support while Signavio tracks process conformance — ensuring smooth transition.", img: teamGolive },
    { title: "Continuous Optimization", icon: HeartHandshake, desc: "Ongoing monitoring of adoption metrics and process KPIs. Regular optimization cycles: Signavio identifies improvements, WalkMe deploys changes, both measure results.", img: teamHypercare },
  ];

  useEffect(() => {
    if (!inView || paused) return;
    const timer = setInterval(() => setActiveIdx(prev => (prev + 1) % steps.length), STEP_DURATION);
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
          <div className="space-y-1">
            {steps.map((s, i) => {
              const isActive = activeIdx === i;
              return (
                <motion.button key={s.title} onClick={() => { setActiveIdx(i); setPaused(true); }} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: .2 + i * .08 }}
                  className="w-full text-left flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-300"
                  style={{ background: isActive ? "rgba(244,180,0,.08)" : "transparent", borderLeft: isActive ? "3px solid #F4B400" : "3px solid transparent" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: isActive ? "rgba(244,180,0,.15)" : "rgba(255,255,255,.04)", boxShadow: isActive ? "0 0 20px rgba(244,180,0,.2)" : "none" }}>
                    <s.icon size={18} style={{ color: isActive ? "#F4B400" : "rgba(255,255,255,.3)" }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold" style={{ color: isActive ? "#F4B400" : "rgba(255,255,255,.7)" }}>{s.title}</p>
                    {isActive && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="overflow-hidden">
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
            <div className="flex justify-center pt-4">
              <button onClick={() => setPaused(!paused)} className="flex items-center gap-2 text-[.75rem] font-medium hover:text-white" style={{ color: "rgba(255,255,255,.4)" }}>
                {paused ? <Play size={14} /> : <Pause size={14} />}{paused ? "Resume Auto-Play" : "Playing"}
              </button>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <AnimatePresence mode="wait">
              <motion.img key={activeIdx} src={steps[activeIdx].img} alt={steps[activeIdx].title} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .97 }} transition={{ duration: .6 }} className="absolute inset-0 w-full h-full object-cover" />
            </AnimatePresence>
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,11,11,.85) 0%, rgba(11,11,11,.2) 50%, transparent)" }} />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[.65rem] font-bold tracking-[.2em] uppercase" style={{ color: "#F4B400" }}>Phase {activeIdx + 1} of {steps.length}</span>
              <h3 className="text-2xl font-bold text-white mt-1">{steps[activeIdx].title}</h3>
            </div>
            <div className="absolute top-5 right-5 flex gap-1.5">
              {steps.map((_, i) => (
                <button key={i} onClick={() => { setActiveIdx(i); setPaused(true); }} className="w-2 h-2 rounded-full" style={{ background: i === activeIdx ? "#F4B400" : "rgba(255,255,255,.25)", boxShadow: i === activeIdx ? "0 0 8px rgba(244,180,0,.5)" : "none" }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Ecosystem ─── */
function EcosystemViz() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const animRef = useRef<number>(0);
  const pausedRef = useRef(false);

  const nodes = [
    { label: "WalkMe DAP", desc: "Digital Adoption Platform that overlays contextual guidance on any enterprise application. In-app walk-throughs, tooltips, task automation, and analytics — no code changes to underlying SAP systems.", color: "#F4B400" },
    { label: "Signavio Process Intelligence", desc: "Process mining engine that discovers actual process flows from SAP event logs. Automated conformance checking, bottleneck detection, and root cause analysis.", color: "#FFD54F" },
    { label: "Signavio Process Manager", desc: "Collaborative process modeling with BPMN 2.0. Design target-state processes, manage process documentation, and maintain a living process repository.", color: "#FFA726" },
    { label: "WalkMe Analytics", desc: "Deep adoption analytics tracking user behavior, feature usage, and task completion across SAP. Funnel analysis, session replay, and engagement scoring.", color: "#FFB74D" },
    { label: "Signavio Collaboration Hub", desc: "Process governance portal for stakeholders. Process approval workflows, change management tracking, and process compliance dashboards.", color: "#FFCA28" },
    { label: "WalkMe ActionBot", desc: "Conversational AI assistant that helps users complete SAP tasks through natural language. Integrates with WalkMe guidance for seamless task completion.", color: "#FFE082" },
  ];

  useEffect(() => {
    if (!inView) return;
    const animate = () => { if (!pausedRef.current) setRotation(prev => prev + 0.15); animRef.current = requestAnimationFrame(animate); };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [inView]);

  const r = 180;

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-10">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Architecture</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Transformation Ecosystem</motion.h2>
          <motion.p variants={fadeUp} className="text-sm mt-3" style={{ color: "#999" }}>Hover to pause • Click a node to explore</motion.p>
        </motion.div>
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
          <div className="relative flex justify-center" onMouseEnter={() => { pausedRef.current = true; }} onMouseLeave={() => { pausedRef.current = false; }}>
            <div className="relative" style={{ width: r * 2 + 120, height: r * 2 + 120 }}>
              {[1, .7, .4].map((opacity, i) => (<div key={i} className="absolute rounded-full border" style={{ inset: `${30 + i * 20}px`, borderColor: `rgba(244,180,0,${opacity * .08})` }} />))}
              <motion.div initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full flex items-center justify-center z-10" style={{ background: "radial-gradient(circle, rgba(244,180,0,.35), rgba(244,180,0,.08))", border: "2px solid rgba(244,180,0,.5)", boxShadow: "0 0 60px rgba(244,180,0,.2)" }}>
                <span className="text-[.65rem] font-bold text-white text-center leading-tight">Transform<br/>Mgmt</span>
              </motion.div>
              {nodes.map((n, i) => {
                const angle = rotation + (i * 360 / nodes.length);
                const rad = (angle - 90) * Math.PI / 180;
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;
                const isSel = selected === i;
                return (
                  <motion.div key={n.label} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: .5 + i * .1 }}
                    className="absolute z-20 cursor-pointer" style={{ left: `calc(50% + ${x}px - 38px)`, top: `calc(50% + ${y}px - 38px)`, transition: "left 0.05s linear, top 0.05s linear" }}
                    onClick={() => setSelected(isSel ? null : i)}>
                    <svg className="absolute pointer-events-none" style={{ left: 38, top: 38, width: 1, height: 1, overflow: "visible" }}>
                      <line x1="0" y1="0" x2={-x} y2={-y} stroke={isSel ? "rgba(244,180,0,.4)" : "rgba(244,180,0,.1)"} strokeWidth="1" />
                    </svg>
                    <div className="w-[76px] h-[76px] rounded-full flex items-center justify-center transition-all duration-300" style={{ background: isSel ? "rgba(244,180,0,.2)" : "rgba(244,180,0,.06)", border: `2px solid ${isSel ? n.color : "rgba(244,180,0,.2)"}`, boxShadow: isSel ? `0 0 30px ${n.color}40` : "none" }}>
                      <span className="text-[.55rem] font-bold text-white text-center leading-tight px-1">{n.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              {selected !== null ? (
                <motion.div key={selected} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="rounded-2xl p-8 border w-full" style={{ background: "rgba(255,255,255,.02)", borderColor: `${nodes[selected].color}30` }}>
                  <div className="w-3 h-3 rounded-full mb-4" style={{ background: nodes[selected].color, boxShadow: `0 0 12px ${nodes[selected].color}60` }} />
                  <h3 className="text-xl font-bold text-white mb-3">{nodes[selected].label}</h3>
                  <p className="text-[.92rem] leading-[1.8]" style={{ color: "#C9C9C9" }}>{nodes[selected].desc}</p>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center w-full">
                  <p className="text-lg text-white/40">Click any node to explore the transformation ecosystem</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Business Impact ─── */
function BusinessImpact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const blocks = [
    { title: "Accelerated User Adoption", desc: "WalkMe's in-app guidance eliminates the learning curve. Users become proficient in days instead of weeks — with contextual help exactly when and where they need it.", metric: "94%", metricLabel: "Adoption Rate" },
    { title: "Process Standardization", desc: "Signavio reveals process variants and deviations. Combined with WalkMe's guided flows, organizations reduce process variants by up to 75% within 6 months.", metric: "75%", metricLabel: "Fewer Variants" },
    { title: "Reduced Support Costs", desc: "WalkMe's self-service guidance deflects support tickets and reduces training costs. Organizations see 50-70% reduction in SAP-related IT support requests.", metric: "67%", metricLabel: "Ticket Reduction" },
    { title: "Continuous Improvement", desc: "The Signavio + WalkMe feedback loop creates a perpetual optimization engine. Every process improvement is measured, validated, and scaled across the organization.", metric: "3x", metricLabel: "Faster ROI" },
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
              className="group grid grid-cols-1 md:grid-cols-[120px_1fr_1.2fr] items-start gap-6 md:gap-10 py-10 border-b" style={{ borderColor: "rgba(255,255,255,.06)" }}>
              <div className="text-center md:text-left">
                <span className="text-[2.5rem] font-bold leading-none" style={{ color: "#F4B400" }}><MetricCountUp value={b.metric} inView={inView} /></span>
                <span className="block text-[.65rem] uppercase tracking-[.15em] mt-1" style={{ color: "rgba(255,255,255,.3)" }}>{b.metricLabel}</span>
              </div>
              <h3 className="text-[clamp(1.2rem,2.5vw,1.6rem)] font-bold text-white leading-tight group-hover:text-[#F4B400] transition-colors">{b.title}</h3>
              <p className="text-[.92rem] leading-[1.8]" style={{ color: "#C9C9C9" }}>{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section id="cta" className="relative py-28 px-6 md:px-10 overflow-hidden" style={{ background: "#0B0B0B" }}>
      <div className="absolute inset-0 flex items-center justify-center"><div className="w-[600px] h-[600px] rounded-full blur-[160px]" style={{ background: "radial-gradient(circle, rgba(244,180,0,.08), transparent 70%)" }} /></div>
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-5" style={{ color: "#F4B400" }}>Get Started</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,4.5vw,3rem)] font-bold text-white tracking-tight mb-6">Transform How Your People Work with SAP</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .2 }} className="text-[1.05rem] leading-relaxed mb-10" style={{ color: "#C9C9C9" }}>Partner with Kannanware to deploy WalkMe and SAP Signavio — ensuring your SAP investment delivers adoption, efficiency, and continuous improvement.</motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .3 }} className="flex flex-wrap justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm text-black hover:scale-105 transition-all" style={{ background: "#F4B400", boxShadow: "0 0 40px rgba(244,180,0,.3)" }}>Schedule a Consultation <ArrowRight size={16} /></a>
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm text-white border hover:bg-white/5 transition-all" style={{ borderColor: "rgba(244,180,0,.3)" }}>Contact Our Experts</a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
const tmFaqs = [
  { q: "What is WalkMe and how does it work with SAP?", a: "WalkMe is a Digital Adoption Platform (DAP) that overlays interactive guidance on top of SAP applications. It provides step-by-step walk-throughs, tooltips, and task automation without modifying the underlying SAP system — helping users navigate complex processes effortlessly." },
  { q: "What is SAP Signavio?", a: "SAP Signavio is a process transformation suite that includes process mining, process modeling, and process intelligence. It automatically discovers how your business processes actually run by analyzing SAP transaction logs, then helps you optimize and monitor them continuously." },
  { q: "How do WalkMe and Signavio work together?", a: "Signavio identifies process inefficiencies and bottlenecks through data-driven process mining. WalkMe then deploys targeted in-app guidance to address those issues — guiding users through optimized processes. Together, they create a closed-loop transformation engine." },
  { q: "How long does a WalkMe implementation take?", a: "A focused WalkMe deployment for a single SAP module can be completed in 4-6 weeks. Enterprise-wide deployments across multiple modules and user groups typically run 2-4 months, with ongoing optimization thereafter." },
  { q: "What ROI can we expect?", a: "Organizations typically see 50-70% reduction in SAP support tickets, 40-60% faster user onboarding, and 20-30% improvement in process efficiency. The combined WalkMe + Signavio approach delivers ROI within 3-6 months of deployment." },
  { q: "Do we need both WalkMe and Signavio?", a: "While each platform delivers value independently, the combination is significantly more powerful. Signavio tells you WHERE to improve (process intelligence), and WalkMe tells you HOW to improve (user adoption). Kannanware helps you determine the right scope for your needs." },
  { q: "Can WalkMe work with non-SAP applications?", a: "Yes. WalkMe supports any web-based application — Salesforce, Workday, ServiceNow, and custom applications. Kannanware can implement WalkMe across your entire enterprise technology stack, not just SAP." },
];

function TmFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-28" style={{ background: "#0B0B0B" }}>
      <div className="mx-auto w-full px-5 md:px-10 max-w-[900px]" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
          <p className="eyebrow justify-center">FAQ</p>
          <h2 className="sec-h">Frequently Asked <em>Questions</em></h2>
          <p className="sec-p mx-auto text-center">Everything you need to know about WalkMe, SAP Signavio, and our transformation approach.</p>
        </motion.div>
        <div className="space-y-3">
          {tmFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.07 }}
                className="border rounded-sm overflow-hidden" style={{ borderColor: isOpen ? "rgba(244,180,0,.3)" : "rgba(255,255,255,.08)", background: isOpen ? "rgba(244,180,0,.04)" : "rgba(255,255,255,.02)" }}>
                <button onClick={() => setOpenIndex(isOpen ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left bg-transparent border-none cursor-none">
                  <span className="text-[.95rem] font-semibold pr-4" style={{ color: isOpen ? "#F4B400" : "rgba(255,255,255,.85)" }}>{faq.q}</span>
                  <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: isOpen ? "rgba(244,180,0,.15)" : "rgba(255,255,255,.06)" }}>
                    <span className="text-sm leading-none" style={{ color: isOpen ? "#F4B400" : "rgba(255,255,255,.4)" }}>+</span>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                      <p className="px-6 pb-5 text-[.9rem] leading-relaxed" style={{ color: "rgba(255,255,255,.55)" }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Sub Nav ─── */
const subNavItems = [
  { id: "hero", label: "Overview" },
  { id: "platforms", label: "Platforms" },
  { id: "demo", label: "Live Demo" },
  { id: "expertise", label: "Expertise" },
  { id: "timeline", label: "Methodology" },
  { id: "ecosystem", label: "Ecosystem" },
  { id: "impact", label: "Impact" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "Get Started" },
];

function StickySubNav() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const offsets = subNavItems.map(item => { const el = document.getElementById(item.id); return { id: item.id, top: el ? el.getBoundingClientRect().top : Infinity }; });
      const current = offsets.filter(o => o.top <= 160).pop();
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-[72px] left-0 right-0 z-40 backdrop-blur-xl border-b" style={{ background: "rgba(11,11,11,.92)", borderColor: "rgba(244,180,0,.08)" }}>
      <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-center gap-1 overflow-x-auto scrollbar-none h-11">
        {subNavItems.map(item => (
          <button key={item.id} onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="relative whitespace-nowrap px-4 py-2.5 text-[.75rem] font-semibold tracking-wide transition-colors shrink-0"
            style={{ color: active === item.id ? "#F4B400" : "rgba(255,255,255,.5)" }}>
            {item.label}
            {active === item.id && (
              <motion.div layoutId="tm-subnav" className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full" style={{ background: "#F4B400" }} transition={{ type: "spring", stiffness: 400, damping: 30 }} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Page ─── */
export default function TransformationMgmtPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0B0B0B", fontFamily: "'Ubuntu', sans-serif" }}>
      <Navbar />
      <StickySubNav />
      <div id="hero"><HeroSection /></div>
      <div id="platforms"><PlatformToggle /></div>
      <div id="demo"><LiveDemo /></div>
      <div id="expertise"><ExpertiseSection /></div>
      <div id="timeline"><TransformationTimeline /></div>
      <div id="ecosystem"><EcosystemViz /></div>
      <div id="impact"><BusinessImpact /></div>
      <div id="faq"><TmFAQ /></div>
      <div id="cta"><CTASection /></div>
      <Footer />
    </div>
  );
}
