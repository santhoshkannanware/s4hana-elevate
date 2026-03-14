import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Database, BarChart3, TrendingUp, Activity, Brain, Layers, Search, Compass, Code2, FlaskConical, Rocket, HeartHandshake, Play, Pause, Globe, Workflow, Zap, Shield, Cloud, Server, GitBranch, Network, PieChart, LineChart, Table2, Boxes, Sparkles, CircleDot, LayoutDashboard, FileSearch, Combine } from "lucide-react";
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
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-5" style={{ color: "#F4B400" }}>Data & Analytics</motion.span>
          <motion.h1 variants={fadeUp} className="text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.08] tracking-tight text-white mb-6">
            Unlock Insights with <span style={{ color: "#F4B400" }}>SAP Business Data Cloud</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[1.05rem] leading-relaxed mb-8" style={{ color: "#C9C9C9" }}>
            Unify, govern, and activate your enterprise data across SAP and non-SAP sources. SAP Business Data Cloud provides a single semantic layer that powers analytics, AI, and decision-making at scale.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a href="#cta" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-black transition-all hover:scale-105" style={{ background: "#F4B400" }}>Talk to an Expert <ArrowRight size={16} /></a>
            <a href="#capabilities" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white border transition-all hover:bg-white/5" style={{ borderColor: "rgba(244,180,0,.35)" }}>Explore Solutions</a>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: .3 }} className="relative hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden border p-6" style={{ background: "rgba(255,255,255,.03)", borderColor: "rgba(244,180,0,.12)" }}>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[{ label: "Data Sources", val: "120+", icon: Database, delta: "Unified in real-time" }, { label: "Query Speed", val: "10x", icon: Zap, delta: "Faster with federation" }, { label: "Data Quality", val: "99.2%", icon: Shield, delta: "Governed & compliant" }].map((k, i) => (
                <motion.div key={k.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 + i * .15 }} className="rounded-xl p-4 border" style={{ background: "rgba(244,180,0,.04)", borderColor: "rgba(244,180,0,.08)" }}>
                  <div className="flex items-center gap-2 mb-2"><k.icon size={14} style={{ color: "#F4B400" }} /><span className="text-[.65rem] uppercase tracking-wider text-white/40">{k.label}</span></div>
                  <div className="text-xl font-bold text-white">{k.val}</div>
                  <span className="text-[.7rem] text-green-400">{k.delta}</span>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="rounded-xl p-5 border mb-3" style={{ background: "rgba(255,255,255,.02)", borderColor: "rgba(244,180,0,.06)" }}>
              <div className="flex justify-between items-center mb-4"><span className="text-xs text-white/50">Data Pipeline Health — Last 24 Hours</span><span className="text-[.65rem] px-2 py-0.5 rounded" style={{ background: "rgba(244,180,0,.15)", color: "#F4B400" }}>Live</span></div>
              <div className="flex items-end gap-1.5 h-28">
                {[82, 88, 91, 85, 93, 90, 95, 92, 97, 94, 98, 99].map((h, i) => (
                  <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 1.3 + i * .06, duration: .5 }} className="flex-1 rounded-t" style={{ background: `linear-gradient(to top, rgba(244,180,0,${.3 + (h / 200)}), rgba(244,180,0,${.1 + (h / 400)}))` }} />
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }} className="flex items-start gap-3 rounded-lg p-3 border" style={{ background: "rgba(244,180,0,.05)", borderColor: "rgba(244,180,0,.12)" }}>
              <Brain size={16} style={{ color: "#F4B400", marginTop: 2 }} />
              <p className="text-[.75rem] leading-relaxed text-white/70"><span className="font-semibold text-white">BDC Insight:</span> Semantic layer auto-mapped 847 data objects across SAP S/4HANA, Datasphere, and 3rd-party sources. Data trust score: 99.2%.</p>
            </motion.div>
          </div>
          <div className="absolute -inset-10 rounded-full blur-[100px] -z-10" style={{ background: "radial-gradient(circle, rgba(244,180,0,.08) 0%, transparent 70%)" }} />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Capabilities Tabs ─── */
function Capabilities() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const tabs = [
    {
      label: "SAP Datasphere",
      features: [
        { icon: Layers, title: "Unified Data Fabric", desc: "A single platform to integrate, harmonize, and model data across SAP, non-SAP, cloud, and on-premise sources. Business-ready data without complex ETL pipelines." },
        { icon: Network, title: "Data Federation", desc: "Query data in place without moving it. Federate across SAP HANA, Google BigQuery, Microsoft Azure, AWS, and Snowflake — delivering real-time insights with zero data duplication." },
        { icon: Table2, title: "Semantic Business Layer", desc: "Define business semantics once, use everywhere. Create reusable business entities, relationships, and KPI definitions that all analytics tools can consume consistently." },
        { icon: Shield, title: "Built-in Governance", desc: "End-to-end data lineage, impact analysis, and access controls. Ensure compliance with GDPR, SOX, and industry regulations across your entire data landscape." },
      ]
    },
    {
      label: "SAP Analytics Cloud",
      features: [
        { icon: LayoutDashboard, title: "Unified Planning & BI", desc: "Combine business intelligence, predictive analytics, and enterprise planning in one cloud solution. Create interactive dashboards and stories from live data connections." },
        { icon: Sparkles, title: "Augmented Analytics", desc: "AI-powered smart insights, smart discovery, and natural language queries. Let machine learning surface patterns, anomalies, and recommendations automatically." },
        { icon: PieChart, title: "Enterprise Planning", desc: "Collaborative financial and operational planning with driver-based models, what-if scenarios, and predictive forecasting — all connected to your live SAP data." },
        { icon: LineChart, title: "Real-time Dashboards", desc: "Live connections to SAP Datasphere, S/4HANA, and BW/4HANA. Self-service visualization with role-based access and mobile-optimized experiences." },
      ]
    },
    {
      label: "Data Intelligence",
      features: [
        { icon: Workflow, title: "Data Pipelines", desc: "Orchestrate complex data flows with a visual pipeline designer. Automated scheduling, monitoring, and error handling across your entire data landscape." },
        { icon: FileSearch, title: "Data Catalog", desc: "Discover, understand, and trust your data with an enterprise data catalog. Automated metadata extraction, business glossary, and data quality scoring." },
        { icon: Combine, title: "Data Integration", desc: "Pre-built connectors to 200+ data sources. Real-time replication, batch loading, and change data capture from SAP and non-SAP systems." },
        { icon: Brain, title: "ML & AI Foundation", desc: "Embedded machine learning with pre-built models for demand forecasting, anomaly detection, and customer segmentation. Train and deploy models directly on your governed data." },
      ]
    }
  ];

  const features = tabs[activeTab].features;

  return (
    <section ref={ref} id="capabilities" className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1100px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-14">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Platform Capabilities</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">The SAP Business Data Cloud Stack</motion.h2>
        </motion.div>
        <div className="flex justify-center mb-14">
          <div className="relative flex rounded-full p-1 gap-1" style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(244,180,0,.12)" }}>
            {tabs.map((t, i) => (
              <button key={t.label} onClick={() => setActiveTab(i)} className={`relative z-10 px-6 py-3 rounded-full text-sm font-semibold transition-colors ${activeTab === i ? "text-black" : "text-white/60 hover:text-white"}`}>
                {activeTab === i && <motion.div layoutId="bdc-tab" className="absolute inset-0 rounded-full" style={{ background: "#F4B400" }} />}
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
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Live Data Intelligence Dashboard</motion.h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7 }} className="rounded-2xl border overflow-hidden" style={{ background: "rgba(255,255,255,.02)", borderColor: "rgba(244,180,0,.1)" }}>
          <div className="flex items-center justify-between px-6 py-3 border-b" style={{ borderColor: "rgba(255,255,255,.06)" }}>
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-red-500/60" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" /><div className="w-2.5 h-2.5 rounded-full bg-green-500/60" /></div>
            <span className="text-[.65rem] text-white/30 tracking-wider uppercase">SAP Business Data Cloud Console</span>
            <div />
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[{ l: "Data Sources", v: done ? 124 : 47, u: "" }, { l: "Data Quality", v: done ? 99 : 72, u: "%" }, { l: "Query Latency", v: done ? 120 : 850, u: "ms" }, { l: "Active Models", v: done ? 38 : 12, u: "" }].map((k) => (
                <div key={k.l} className="rounded-xl p-4 border" style={{ background: "rgba(244,180,0,.03)", borderColor: "rgba(244,180,0,.06)" }}>
                  <span className="text-[.65rem] text-white/40 uppercase tracking-wider block mb-1">{k.l}</span>
                  <span className="text-2xl font-bold text-white"><CountUp end={k.v} />{k.u}</span>
                </div>
              ))}
            </div>
            <div className="rounded-xl p-5 border mb-5" style={{ background: "rgba(255,255,255,.015)", borderColor: "rgba(255,255,255,.05)" }}>
              <div className="flex items-end gap-2 h-36">
                {[45, 52, 60, 68, 72, 78, 83, 88, 91, 94, 97, done ? 99 : 65].map((h, i) => (
                  <motion.div key={i} className="flex-1 rounded-t transition-all duration-700" animate={{ height: `${h}%` }} style={{ background: `linear-gradient(to top, rgba(244,180,0,${running ? .6 : .35}), rgba(244,180,0,.05))`, boxShadow: running ? "0 0 12px rgba(244,180,0,.2)" : "none" }} />
                ))}
              </div>
            </div>
            <AnimatePresence>
              {done && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0 }} className="rounded-xl p-4 border mb-5 flex items-start gap-3" style={{ background: "rgba(244,180,0,.06)", borderColor: "rgba(244,180,0,.15)" }}>
                  <Brain size={18} style={{ color: "#F4B400", marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Data Cloud Recommendation</p>
                    <p className="text-[.8rem] leading-relaxed" style={{ color: "#C9C9C9" }}>"Semantic layer unified 847 objects across S/4HANA, BigQuery, and Snowflake. 3 data quality anomalies auto-corrected. Predictive models retrained with 99.2% accuracy."</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex justify-center">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }} onClick={runAnalysis} disabled={running} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm text-black disabled:opacity-70" style={{ background: "#F4B400", boxShadow: "0 0 30px rgba(244,180,0,.25)" }}>
                {running ? <><Activity size={16} className="animate-spin" /> Optimizing Data Landscape…</> : <><Database size={16} /> Run Data Intelligence Analysis</>}
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
    { icon: Database, title: "Data Architecture & Strategy", desc: "Design your enterprise data architecture with SAP Business Data Cloud at the center. Define data domains, ownership models, and integration patterns that scale with your business.", num: "01" },
    { icon: Layers, title: "Datasphere Implementation", desc: "End-to-end SAP Datasphere deployment including space design, data modeling, semantic layer configuration, and data marketplace setup. From proof-of-concept to enterprise rollout.", num: "02" },
    { icon: Network, title: "Data Integration & Federation", desc: "Connect your entire data landscape — SAP S/4HANA, BW/4HANA, SuccessFactors, Ariba, plus non-SAP sources like Snowflake, BigQuery, and Azure. Real-time and batch integration patterns.", num: "03" },
    { icon: BarChart3, title: "Analytics & Planning", desc: "Implement SAP Analytics Cloud with live connections to Datasphere. Self-service BI, augmented analytics, predictive planning, and enterprise-wide reporting — all governed and consistent.", num: "04" },
    { icon: Brain, title: "AI & Machine Learning", desc: "Leverage governed data for AI use cases. Predictive forecasting, anomaly detection, intelligent automation — with models trained on your trusted, unified data foundation.", num: "05" },
    { icon: Shield, title: "Data Governance & Quality", desc: "Establish data governance frameworks with automated quality monitoring, lineage tracking, and compliance management. Ensure your data is trusted, auditable, and regulation-ready.", num: "06" },
  ];

  return (
    <section ref={ref} id="expertise" className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-20">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Implementation Excellence</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Our Data Cloud Expertise</motion.h2>
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
function ImplementationTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const STEP_DURATION = 5000;
  const steps = [
    { title: "Data Landscape Assessment", icon: Search, desc: "Map your current data landscape — sources, flows, quality, and governance gaps. Define your target data architecture with SAP Business Data Cloud.", img: teamDiscovery },
    { title: "Architecture Design", icon: Compass, desc: "Design Datasphere spaces, semantic models, and integration patterns. Plan Analytics Cloud dashboards, planning models, and user access strategy.", img: teamDesign },
    { title: "Foundation Build", icon: Code2, desc: "Deploy Datasphere, configure data connections, build semantic models, and establish the governance framework. Set up SAP Analytics Cloud with initial dashboards.", img: teamImplement },
    { title: "Integration & Testing", icon: FlaskConical, desc: "Integrate all data sources, validate data quality, test analytics outputs, and performance-tune queries. User acceptance testing with business stakeholders.", img: teamTesting },
    { title: "Go-Live & Enablement", icon: Rocket, desc: "Phased rollout with user training and adoption support. Monitor data pipeline health, query performance, and user engagement in real-time.", img: teamGolive },
    { title: "Optimize & Scale", icon: HeartHandshake, desc: "Continuous optimization of data models, expansion to new data domains, and adoption of advanced features like predictive analytics and AI-powered insights.", img: teamHypercare },
  ];

  useEffect(() => {
    if (!inView || paused) return;
    const timer = setInterval(() => setActiveIdx(prev => (prev + 1) % steps.length), STEP_DURATION);
    return () => clearInterval(timer);
  }, [inView, paused, steps.length]);

  return (
    <section ref={ref} id="timeline" className="py-28 px-6 md:px-10 overflow-hidden" style={{ background: "#0B0B0B" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Methodology</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight mb-3">Implementation Journey</motion.h2>
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
    { label: "SAP Datasphere", desc: "The data management layer — harmonize, model, and govern enterprise data from SAP and non-SAP sources with a business semantic layer and open data ecosystem.", color: "#F4B400" },
    { label: "SAP Analytics Cloud", desc: "Unified analytics, planning, and predictive capabilities. Interactive dashboards, enterprise planning, and augmented analytics powered by live data connections.", color: "#FFD54F" },
    { label: "SAP HANA Cloud", desc: "High-performance in-memory database as the computational engine. Multi-model processing, spatial analytics, and graph analysis at enterprise scale.", color: "#FFA726" },
    { label: "Data Integration", desc: "Pre-built connectors, real-time replication, and change data capture across 200+ data sources. Seamless data flows between SAP and third-party systems.", color: "#FFB74D" },
    { label: "AI & ML Platform", desc: "Embedded machine learning capabilities for predictive analytics, automated insights, and intelligent process automation — all trained on governed, trusted data.", color: "#FFCA28" },
    { label: "Data Governance", desc: "Enterprise data catalog, quality monitoring, lineage tracking, and compliance management. Ensure data trust, auditability, and regulatory compliance.", color: "#FFE082" },
  ];

  useEffect(() => {
    if (!inView) return;
    const animate = () => { if (!pausedRef.current) setRotation(prev => prev + 0.15); animRef.current = requestAnimationFrame(animate); };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [inView]);

  const r = 180;

  return (
    <section ref={ref} id="ecosystem" className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-10">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Architecture</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Business Data Cloud Ecosystem</motion.h2>
          <motion.p variants={fadeUp} className="text-sm mt-3" style={{ color: "#999" }}>Hover to pause • Click a node to explore</motion.p>
        </motion.div>
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
          <div className="relative flex justify-center" onMouseEnter={() => { pausedRef.current = true; }} onMouseLeave={() => { pausedRef.current = false; }}>
            <div className="relative" style={{ width: r * 2 + 120, height: r * 2 + 120 }}>
              {[1, .7, .4].map((opacity, i) => (<div key={i} className="absolute rounded-full border" style={{ inset: `${30 + i * 20}px`, borderColor: `rgba(244,180,0,${opacity * .08})` }} />))}
              <motion.div initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full flex items-center justify-center z-10" style={{ background: "radial-gradient(circle, rgba(244,180,0,.35), rgba(244,180,0,.08))", border: "2px solid rgba(244,180,0,.5)", boxShadow: "0 0 60px rgba(244,180,0,.2)" }}>
                <span className="text-[.65rem] font-bold text-white text-center leading-tight">Business<br/>Data Cloud</span>
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
                  <p className="text-lg text-white/40">Click any node to explore the data cloud ecosystem</p>
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
    { title: "Unified Data Foundation", desc: "Break down data silos across your enterprise. SAP Business Data Cloud creates a single source of truth that connects SAP and non-SAP data with consistent business semantics.", metric: "120+", metricLabel: "Sources Unified" },
    { title: "Accelerated Insights", desc: "From data to insight in minutes, not days. Live data connections, self-service analytics, and AI-powered discovery eliminate the traditional reporting bottleneck.", metric: "10x", metricLabel: "Faster Analytics" },
    { title: "Trusted & Governed Data", desc: "Built-in governance ensures every data point is traceable, auditable, and compliant. Automated quality monitoring catches issues before they reach decision-makers.", metric: "99%", metricLabel: "Data Trust Score" },
    { title: "AI-Ready Foundation", desc: "Your data, ready for AI. Governed, semantically rich, and continuously updated — the perfect foundation for predictive analytics, machine learning, and generative AI use cases.", metric: "3x", metricLabel: "Faster AI Deployment" },
  ];

  return (
    <section ref={ref} id="impact" className="py-28 px-6 md:px-10" style={{ background: "#0B0B0B" }}>
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

/* ─── FAQ ─── */
const bdcFaqs = [
  { q: "What is SAP Business Data Cloud?", a: "SAP Business Data Cloud is SAP's unified data solution combining SAP Datasphere, SAP Analytics Cloud, and SAP HANA Cloud. It provides a complete platform for data integration, management, analytics, and AI — enabling organizations to turn data into actionable insights." },
  { q: "How does SAP Datasphere differ from SAP BW/4HANA?", a: "While BW/4HANA focuses on traditional data warehousing, Datasphere is a modern data fabric that supports data federation, virtualization, and a business semantic layer. It can integrate with BW/4HANA as a data source while extending capabilities to non-SAP data and cloud-native analytics." },
  { q: "Can we connect non-SAP data sources?", a: "Yes. SAP Business Data Cloud supports 200+ pre-built connectors including Snowflake, Google BigQuery, Microsoft Azure, AWS, Salesforce, and many more. Data can be replicated or federated in place without movement." },
  { q: "What analytics capabilities are included?", a: "SAP Analytics Cloud provides business intelligence (interactive dashboards, stories), enterprise planning (financial, workforce, supply chain), predictive analytics (forecasting, what-if scenarios), and augmented analytics (AI-powered smart insights and natural language queries)." },
  { q: "How does data governance work?", a: "Built-in governance includes an enterprise data catalog, automated data lineage, impact analysis, quality monitoring, and role-based access controls. All data changes are tracked and auditable, supporting compliance with GDPR, SOX, and industry-specific regulations." },
  { q: "What is the typical implementation timeline?", a: "A focused proof-of-concept can be delivered in 4-6 weeks. Enterprise-wide implementations typically run 3-6 months depending on the number of data sources, complexity of analytics requirements, and organizational readiness." },
  { q: "How does SAP Business Data Cloud support AI?", a: "It provides the governed, semantically rich data foundation that AI needs. Embedded ML capabilities include predictive forecasting, anomaly detection, and smart insights. The platform also integrates with SAP AI Core for advanced AI/ML model training and deployment." },
];

function BdcFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-24 md:py-28" style={{ background: "#0B0B0B" }}>
      <div className="mx-auto w-full px-5 md:px-10 max-w-[900px]" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
          <p className="eyebrow justify-center">FAQ</p>
          <h2 className="sec-h">Frequently Asked <em>Questions</em></h2>
          <p className="sec-p mx-auto text-center">Everything you need to know about SAP Business Data Cloud and our implementation approach.</p>
        </motion.div>
        <div className="space-y-3">
          {bdcFaqs.map((faq, i) => {
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

/* ─── CTA ─── */
function CTASection() {
  return (
    <section id="cta" className="relative py-28 px-6 md:px-10 overflow-hidden" style={{ background: "#0B0B0B" }}>
      <div className="absolute inset-0 flex items-center justify-center"><div className="w-[600px] h-[600px] rounded-full blur-[160px]" style={{ background: "radial-gradient(circle, rgba(244,180,0,.08), transparent 70%)" }} /></div>
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-5" style={{ color: "#F4B400" }}>Get Started</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,4.5vw,3rem)] font-bold text-white tracking-tight mb-6">Turn Your Data Into Your Greatest Asset</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .2 }} className="text-[1.05rem] leading-relaxed mb-10" style={{ color: "#C9C9C9" }}>Partner with Kannanware to deploy SAP Business Data Cloud — unifying your data, accelerating insights, and building the foundation for AI-powered decision-making.</motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .3 }} className="flex flex-wrap justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm text-black hover:scale-105 transition-all" style={{ background: "#F4B400", boxShadow: "0 0 40px rgba(244,180,0,.3)" }}>Schedule a Consultation <ArrowRight size={16} /></a>
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm text-white border hover:bg-white/5 transition-all" style={{ borderColor: "rgba(244,180,0,.3)" }}>Contact Our Experts</a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Sub Nav ─── */
const subNavItems = [
  { id: "hero", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
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
              <motion.div layoutId="bdc-subnav" className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full" style={{ background: "#F4B400" }} transition={{ type: "spring", stiffness: 400, damping: 30 }} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Page ─── */
export default function SapBusinessDataCloudPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0B0B0B", fontFamily: "'Ubuntu', sans-serif" }}>
      <Navbar />
      <StickySubNav />
      <div id="hero"><HeroSection /></div>
      <div id="capabilities"><Capabilities /></div>
      <div id="demo"><LiveDemo /></div>
      <div id="expertise"><ExpertiseSection /></div>
      <div id="timeline"><ImplementationTimeline /></div>
      <div id="ecosystem"><EcosystemViz /></div>
      <div id="impact"><BusinessImpact /></div>
      <div id="faq"><BdcFAQ /></div>
      <div id="cta"><CTASection /></div>
      <Footer />
    </div>
  );
}
