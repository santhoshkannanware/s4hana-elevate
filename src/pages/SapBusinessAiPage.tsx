import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Brain, Sparkles, Cpu, Bot, Zap, Shield, Database, BarChart3, TrendingUp, PieChart, Activity, ChevronRight, Target, Layers, Search, Compass, Code2, FlaskConical, Rocket, HeartHandshake, Play, Pause, Workflow, Globe, Lock, Eye, MessageSquare, FileSearch, Lightbulb, Gauge, Settings, DollarSign } from "lucide-react";
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
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #F4B400 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[160px] opacity-[0.06]" style={{ background: "radial-gradient(circle, #F4B400, transparent)" }} />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full blur-[120px] opacity-[0.04]" style={{ background: "radial-gradient(circle, #FFD54F, transparent)" }} />
      
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center py-24">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-5" style={{ color: "#F4B400" }}>SAP Business AI</motion.span>
          <motion.h1 variants={fadeUp} className="text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.08] tracking-tight text-white mb-6">
            Enterprise AI That <span style={{ color: "#F4B400" }}>Transforms</span> Business
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[1.05rem] leading-relaxed mb-8" style={{ color: "#C9C9C9" }}>
            SAP Business AI embeds intelligent capabilities across your enterprise — from automated financial processes to predictive supply chains. Kannanware helps you harness AI that's relevant, reliable, and responsible.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a href="#cta" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-black transition-all hover:scale-105" style={{ background: "#F4B400" }}>Talk to an AI Expert <ArrowRight size={16} /></a>
            <a href="#demo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white border transition-all hover:bg-white/5" style={{ borderColor: "rgba(244,180,0,.35)" }}>Explore AI Demo</a>
          </motion.div>
        </motion.div>
        
        {/* Right — AI Dashboard */}
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: .3 }} className="relative hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden border p-6" style={{ background: "rgba(255,255,255,.03)", borderColor: "rgba(244,180,0,.12)" }}>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[{ label: "AI Models", val: "24", icon: Brain, delta: "Active in production" }, { label: "Predictions/Day", val: "1.2M", icon: Sparkles, delta: "+47% accuracy" }, { label: "Automations", val: "186", icon: Bot, delta: "Processes automated" }].map((k, i) => (
                <motion.div key={k.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 + i * .15 }} className="rounded-xl p-4 border" style={{ background: "rgba(244,180,0,.04)", borderColor: "rgba(244,180,0,.08)" }}>
                  <div className="flex items-center gap-2 mb-2"><k.icon size={14} style={{ color: "#F4B400" }} /><span className="text-[.65rem] uppercase tracking-wider text-white/40">{k.label}</span></div>
                  <div className="text-xl font-bold text-white">{k.val}</div>
                  <span className="text-[.7rem] text-green-400">{k.delta}</span>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="rounded-xl p-5 border mb-3" style={{ background: "rgba(255,255,255,.02)", borderColor: "rgba(244,180,0,.06)" }}>
              <div className="flex justify-between items-center mb-4"><span className="text-xs text-white/50">AI Model Performance — Last 12 Months</span><span className="text-[.65rem] px-2 py-0.5 rounded" style={{ background: "rgba(244,180,0,.15)", color: "#F4B400" }}>Live</span></div>
              <div className="flex items-end gap-1.5 h-28">
                {[40, 48, 52, 58, 62, 70, 75, 82, 85, 90, 94, 97].map((h, i) => (
                  <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 1.3 + i * .06, duration: .5 }} className="flex-1 rounded-t" style={{ background: `linear-gradient(to top, rgba(244,180,0,${.3 + (h / 200)}), rgba(244,180,0,${.1 + (h / 400)}))` }} />
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }} className="flex items-start gap-3 rounded-lg p-3 border" style={{ background: "rgba(244,180,0,.05)", borderColor: "rgba(244,180,0,.12)" }}>
              <Sparkles size={16} style={{ color: "#F4B400", marginTop: 2 }} />
              <p className="text-[.75rem] leading-relaxed text-white/70"><span className="font-semibold text-white">Joule Insight:</span> Invoice processing accuracy improved to 99.2% after AI model retraining. Recommend expanding to purchase order matching.</p>
            </motion.div>
          </div>
          <div className="absolute -inset-10 rounded-full blur-[100px] -z-10" style={{ background: "radial-gradient(circle, rgba(244,180,0,.08) 0%, transparent 70%)" }} />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Section 2: AI Capabilities Toggle ─── */
function AiCapabilities() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const tabs = [
    {
      label: "Joule AI Copilot",
      features: [
        { icon: MessageSquare, title: "Natural Language Interface", desc: "Ask Joule anything in plain English — generate reports, create purchase orders, analyze financial data, or navigate complex SAP workflows conversationally." },
        { icon: Code2, title: "AI-Assisted Development", desc: "Joule in SAP Build Code accelerates development with intelligent code generation, debugging suggestions, and automated test creation for ABAP and JavaScript." },
        { icon: Workflow, title: "Process Orchestration", desc: "Automate multi-step business workflows through conversational commands. Joule understands context and suggests optimal process flows." },
        { icon: Eye, title: "Intelligent Insights", desc: "Proactive recommendations based on real-time business data. Joule surfaces anomalies, opportunities, and risks before they impact operations." },
      ]
    },
    {
      label: "Document Intelligence",
      features: [
        { icon: FileSearch, title: "Invoice Processing", desc: "AI-powered extraction of invoice data with 99%+ accuracy. Automatic validation, matching, and posting — reducing manual processing by up to 90%." },
        { icon: Database, title: "Contract Analysis", desc: "Extract key terms, obligations, and risks from contracts using NLP. Automated compliance checking and renewal tracking at enterprise scale." },
        { icon: Shield, title: "Fraud Detection", desc: "Machine learning models trained on millions of transactions to identify anomalies, duplicate invoices, and suspicious patterns in real-time." },
        { icon: Gauge, title: "Data Quality", desc: "AI-driven data cleansing and enrichment. Automatically detect and correct errors, duplicates, and inconsistencies across master data." },
      ]
    },
    {
      label: "Predictive Analytics",
      features: [
        { icon: TrendingUp, title: "Financial Forecasting", desc: "ML-powered revenue forecasting, cash flow prediction, and budget variance analysis. Scenario modeling with confidence intervals for strategic planning." },
        { icon: BarChart3, title: "Demand Sensing", desc: "Real-time demand prediction using external signals — weather, social media, economic indicators — combined with historical sales data." },
        { icon: Activity, title: "Predictive Maintenance", desc: "IoT-integrated ML models that predict equipment failures before they happen. Optimize maintenance schedules and reduce unplanned downtime by 40%." },
        { icon: PieChart, title: "Customer Intelligence", desc: "360-degree customer analytics with churn prediction, lifetime value estimation, and next-best-action recommendations powered by AI." },
      ]
    }
  ];

  const features = tabs[activeTab].features;

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1100px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-14">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>AI Capabilities</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Embedded Intelligence Across SAP</motion.h2>
        </motion.div>
        <div className="flex justify-center mb-14">
          <div className="relative flex rounded-full p-1 gap-1" style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(244,180,0,.12)" }}>
            {tabs.map((t, i) => (
              <button key={t.label} onClick={() => setActiveTab(i)} className={`relative z-10 px-6 py-3 rounded-full text-sm font-semibold transition-colors ${activeTab === i ? "text-black" : "text-white/60 hover:text-white"}`}>
                {activeTab === i && <motion.div layoutId="ai-tab" className="absolute inset-0 rounded-full" style={{ background: "#F4B400" }} />}
                <span className="relative z-10">{t.label}</span>
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: .4 }} className="grid md:grid-cols-2 gap-5">
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

/* ─── Section 3: Live AI Demo ─── */
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
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Live AI Analytics Dashboard</motion.h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7 }} className="rounded-2xl border overflow-hidden" style={{ background: "rgba(255,255,255,.02)", borderColor: "rgba(244,180,0,.1)" }}>
          <div className="flex items-center justify-between px-6 py-3 border-b" style={{ borderColor: "rgba(255,255,255,.06)" }}>
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-red-500/60" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" /><div className="w-2.5 h-2.5 rounded-full bg-green-500/60" /></div>
            <span className="text-[.65rem] text-white/30 tracking-wider uppercase">SAP Business AI Console</span>
            <div />
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[{ l: "AI Models Active", v: done ? 24 : 12, s: "", u: "" }, { l: "Predictions/Hr", v: done ? 52000 : 18000, s: "", u: "" }, { l: "Accuracy", v: done ? 99 : 91, s: "", u: "%" }, { l: "Cost Savings", v: done ? 340 : 120, s: "$", u: "K" }].map((k) => (
                <div key={k.l} className="rounded-xl p-4 border" style={{ background: "rgba(244,180,0,.03)", borderColor: "rgba(244,180,0,.06)" }}>
                  <span className="text-[.65rem] text-white/40 uppercase tracking-wider block mb-1">{k.l}</span>
                  <span className="text-2xl font-bold text-white">{k.s}<CountUp end={k.v} />{k.u}</span>
                </div>
              ))}
            </div>
            <div className="rounded-xl p-5 border mb-5" style={{ background: "rgba(255,255,255,.015)", borderColor: "rgba(255,255,255,.05)" }}>
              <div className="flex items-end gap-2 h-36">
                {[35, 42, 48, 55, 60, 68, 72, 80, 85, 90, 94, done ? 99 : 70].map((h, i) => (
                  <motion.div key={i} className="flex-1 rounded-t transition-all duration-700" animate={{ height: `${h}%` }} style={{ background: `linear-gradient(to top, rgba(244,180,0,${running ? .6 : .35}), rgba(244,180,0,.05))`, boxShadow: running ? "0 0 12px rgba(244,180,0,.2)" : "none" }} />
                ))}
              </div>
            </div>
            <AnimatePresence>
              {done && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0 }} className="rounded-xl p-4 border mb-5 flex items-start gap-3" style={{ background: "rgba(244,180,0,.06)", borderColor: "rgba(244,180,0,.15)" }}>
                  <Sparkles size={18} style={{ color: "#F4B400", marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">AI Recommendation</p>
                    <p className="text-[.8rem] leading-relaxed" style={{ color: "#C9C9C9" }}>"Invoice processing model retrained with 15,000 new samples. Accuracy improved from 94.2% → 99.1%. Recommend deploying to production and expanding to credit memo processing."</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex justify-center">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }} onClick={runAnalysis} disabled={running} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm text-black disabled:opacity-70 transition-shadow" style={{ background: "#F4B400", boxShadow: "0 0 30px rgba(244,180,0,.25)" }}>
                {running ? <><Activity size={16} className="animate-spin" /> Running AI Analysis…</> : <><Brain size={16} /> Run AI Optimization</>}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Section 4: Expertise ─── */
function ExpertiseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const capabilities = [
    { icon: Brain, title: "Joule Copilot Implementation", desc: "Deploy SAP's generative AI copilot across your enterprise — from HR and finance to procurement and supply chain. We configure Joule for your specific business context, train custom scenarios, and ensure seamless integration with existing workflows.", num: "01" },
    { icon: FileSearch, title: "Document Intelligence", desc: "Implement AI-powered document processing for invoices, purchase orders, contracts, and receipts. Our solutions achieve 99%+ extraction accuracy with built-in validation rules and exception handling.", num: "02" },
    { icon: TrendingUp, title: "Predictive Analytics", desc: "Build and deploy machine learning models for financial forecasting, demand planning, and risk assessment. From data preparation to model monitoring — end-to-end ML lifecycle management on SAP AI Core.", num: "03" },
    { icon: Bot, title: "Process Automation with AI", desc: "Combine RPA with machine learning for intelligent process automation. From accounts payable to order management — automate complex business decisions with AI-driven rules engines.", num: "04" },
    { icon: Shield, title: "Responsible AI Governance", desc: "Implement AI ethics frameworks, bias detection, model explainability, and audit trails. Ensure your AI deployments meet regulatory requirements and organizational standards.", num: "05" },
    { icon: Cpu, title: "AI Infrastructure & MLOps", desc: "Design and manage your AI infrastructure on SAP AI Core. CI/CD pipelines for ML models, A/B testing frameworks, model versioning, and automated retraining workflows.", num: "06" },
  ];

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-20">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Implementation Excellence</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Our AI Implementation Expertise</motion.h2>
        </motion.div>
        <div className="space-y-0">
          {capabilities.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06, duration: .6 }}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] items-start gap-6 md:gap-10 py-10 border-b transition-all"
              style={{ borderColor: "rgba(255,255,255,.06)" }}
            >
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <span className="text-[2rem] font-bold leading-none tracking-tight transition-colors group-hover:text-[#F4B400]" style={{ color: "rgba(255,255,255,.12)" }}>{c.num}</span>
                <div className="w-11 h-11 rounded-lg flex items-center justify-center transition-shadow group-hover:shadow-[0_0_24px_rgba(244,180,0,.25)]" style={{ background: "rgba(244,180,0,.1)" }}>
                  <c.icon size={20} style={{ color: "#F4B400" }} />
                </div>
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

/* ─── Section 5: AI Adoption Journey ─── */
function AdoptionTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const STEP_DURATION = 5000;

  const steps = [
    { title: "AI Readiness Assessment", icon: Search, desc: "Evaluate your data maturity, identify high-impact AI use cases, and build a prioritized AI roadmap. We assess data quality, infrastructure readiness, and organizational AI literacy.", img: teamDiscovery },
    { title: "Use Case Design", icon: Compass, desc: "Design AI solutions for your highest-value use cases — invoice automation, demand forecasting, anomaly detection. Define success metrics, data requirements, and integration touchpoints.", img: teamDesign },
    { title: "Model Development", icon: Code2, desc: "Build, train, and validate AI models using SAP AI Core. Iterative development with cross-functional teams, incorporating domain expertise and business logic into model design.", img: teamImplement },
    { title: "Testing & Validation", icon: FlaskConical, desc: "Rigorous testing including bias detection, edge case analysis, performance benchmarking, and A/B testing against baseline processes. Ensure models meet accuracy and fairness standards.", img: teamTesting },
    { title: "Production Deployment", icon: Rocket, desc: "Deploy AI models to production with monitoring dashboards, automated alerting, and graceful fallback mechanisms. Seamless integration with existing SAP processes and workflows.", img: teamGolive },
    { title: "Continuous Optimization", icon: HeartHandshake, desc: "Ongoing model monitoring, retraining, and optimization. Track model drift, update training data, and expand AI capabilities across new business processes and use cases.", img: teamHypercare },
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
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight mb-3">AI Adoption Journey</motion.h2>
          <motion.p variants={fadeUp} className="text-sm" style={{ color: "#999" }}>Auto-playing • Click any phase to explore</motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
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
              <button onClick={() => setPaused(!paused)} className="flex items-center gap-2 text-[.75rem] font-medium transition-colors hover:text-white" style={{ color: "rgba(255,255,255,.4)" }}>
                {paused ? <Play size={14} /> : <Pause size={14} />}
                {paused ? "Resume Auto-Play" : "Playing"}
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <AnimatePresence mode="wait">
              <motion.img key={activeIdx} src={steps[activeIdx].img} alt={steps[activeIdx].title} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .97 }} transition={{ duration: .6 }} className="absolute inset-0 w-full h-full object-cover" />
            </AnimatePresence>
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,11,11,.85) 0%, rgba(11,11,11,.2) 50%, transparent 100%)" }} />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[.65rem] font-bold tracking-[.2em] uppercase" style={{ color: "#F4B400" }}>Phase {activeIdx + 1} of {steps.length}</span>
              <h3 className="text-2xl font-bold text-white mt-1">{steps[activeIdx].title}</h3>
            </div>
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

/* ─── Section 6: AI Ecosystem ─── */
function AiEcosystem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const animRef = useRef<number>(0);
  const pausedRef = useRef(false);

  const nodes = [
    { label: "Joule", desc: "SAP's generative AI copilot embedded across the SAP portfolio. Natural language interactions for HR, finance, procurement, and supply chain — context-aware and enterprise-grade.", color: "#F4B400" },
    { label: "AI Core", desc: "Enterprise MLOps platform for training, deploying, and managing AI models at scale. Supports custom models and foundation models from SAP, OpenAI, Google, and Meta.", color: "#FFD54F" },
    { label: "Doc Intelligence", desc: "Pre-trained document processing models for invoices, purchase orders, payment advices, and more. Continuous learning from corrections with 99%+ accuracy targets.", color: "#FFA726" },
    { label: "AI Launchpad", desc: "Centralized management console for all AI assets — models, datasets, deployments, and metrics. Full lifecycle governance with role-based access control.", color: "#FFB74D" },
    { label: "Predictive AI", desc: "Embedded predictive capabilities across SAP applications — demand forecasting, cash flow prediction, delivery scheduling, and customer churn analysis.", color: "#FFCA28" },
    { label: "Process AI", desc: "Intelligent automation combining RPA, machine learning, and business rules. Automated decision-making for approval workflows, exception handling, and resource allocation.", color: "#FFE082" },
  ];

  useEffect(() => {
    if (!inView) return;
    const animate = () => {
      if (!pausedRef.current) setRotation(prev => prev + 0.15);
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [inView]);

  const r = 180;

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-10">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Architecture</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">SAP AI Ecosystem</motion.h2>
          <motion.p variants={fadeUp} className="text-sm mt-3" style={{ color: "#999" }}>Hover to pause • Click a node to explore</motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
          <div className="relative flex justify-center" onMouseEnter={() => { pausedRef.current = true; }} onMouseLeave={() => { pausedRef.current = false; }}>
            <div className="relative" style={{ width: r * 2 + 120, height: r * 2 + 120 }}>
              {[1, .7, .4].map((opacity, i) => (
                <div key={i} className="absolute rounded-full border" style={{ inset: `${30 + i * 20}px`, borderColor: `rgba(244,180,0,${opacity * .08})` }} />
              ))}
              <motion.div initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full flex items-center justify-center z-10" style={{ background: "radial-gradient(circle, rgba(244,180,0,.35) 0%, rgba(244,180,0,.08) 70%)", border: "2px solid rgba(244,180,0,.5)", boxShadow: "0 0 60px rgba(244,180,0,.2), 0 0 120px rgba(244,180,0,.08)" }}>
                <span className="text-sm font-bold text-white text-center leading-tight">SAP<br/>Business AI</span>
              </motion.div>
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

          <div className="min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              {selected !== null ? (
                <motion.div key={selected} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="rounded-2xl p-8 border w-full" style={{ background: "rgba(255,255,255,.02)", borderColor: `${nodes[selected].color}30` }}>
                  <div className="w-3 h-3 rounded-full mb-4" style={{ background: nodes[selected].color, boxShadow: `0 0 12px ${nodes[selected].color}60` }} />
                  <h3 className="text-xl font-bold text-white mb-3">{nodes[selected].label}</h3>
                  <p className="text-[.92rem] leading-[1.8]" style={{ color: "#C9C9C9" }}>{nodes[selected].desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-[.75rem] font-semibold" style={{ color: "#F4B400" }}>
                    <span>SAP AI Service</span>
                    <div className="flex-1 h-px" style={{ background: "rgba(244,180,0,.2)" }} />
                  </div>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center w-full">
                  <p className="text-lg text-white/40">Click any orbiting node to explore SAP AI services</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 7: Business Impact ─── */
function BusinessImpact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const blocks = [
    { title: "Automated Document Processing", desc: "AI-powered invoice and document processing eliminates manual data entry. From receipt to posting in seconds — with built-in validation and exception handling.", metric: "90%", metricLabel: "Less Manual Work" },
    { title: "Predictive Financial Intelligence", desc: "ML-driven forecasting for revenue, cash flow, and budget variance. Scenario analysis with confidence intervals enables data-driven strategic decisions.", metric: "3x", metricLabel: "Forecast Accuracy" },
    { title: "Intelligent Process Automation", desc: "Combine RPA with machine learning for end-to-end intelligent automation. From purchase requisition approval to customer credit scoring — AI-augmented decisions.", metric: "80%", metricLabel: "Faster Processing" },
    { title: "Responsible AI at Scale", desc: "Enterprise AI governance with bias detection, model explainability, and audit trails. Deploy AI confidently with built-in compliance and ethical guardrails.", metric: "100%", metricLabel: "Auditable" },
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
              <div className="text-center md:text-left">
                <span className="text-[2.5rem] font-bold leading-none transition-colors" style={{ color: "#F4B400" }}>
                  <MetricCountUp value={b.metric} inView={inView} />
                </span>
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

/* ─── Section 8: CTA ─── */
function CTASection() {
  return (
    <section id="cta" className="relative py-28 px-6 md:px-10 overflow-hidden" style={{ background: "#0B0B0B" }}>
      <div className="absolute inset-0 flex items-center justify-center"><div className="w-[600px] h-[600px] rounded-full blur-[160px]" style={{ background: "radial-gradient(circle, rgba(244,180,0,.08), transparent 70%)" }} /></div>
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-5" style={{ color: "#F4B400" }}>Get Started</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,4.5vw,3rem)] font-bold text-white tracking-tight mb-6">Unlock the Power of SAP Business AI</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .2 }} className="text-[1.05rem] leading-relaxed mb-10" style={{ color: "#C9C9C9" }}>Partner with Kannanware to implement enterprise AI that delivers measurable business outcomes — from intelligent automation to predictive insights.</motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .3 }} className="flex flex-wrap justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm text-black transition-all hover:scale-105" style={{ background: "#F4B400", boxShadow: "0 0 40px rgba(244,180,0,.3)" }}>Schedule AI Consultation <ArrowRight size={16} /></a>
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm text-white border transition-all hover:bg-white/5" style={{ borderColor: "rgba(244,180,0,.3)" }}>Contact Our AI Experts</a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── FAQ Section ─── */
const aiFaqs = [
  { q: "What is SAP Business AI?", a: "SAP Business AI is SAP's portfolio of AI capabilities embedded across its enterprise applications. It includes Joule (generative AI copilot), document intelligence, predictive analytics, and machine learning tools — all designed to be relevant, reliable, and responsible." },
  { q: "How does Joule differ from ChatGPT or other AI assistants?", a: "Joule is purpose-built for enterprise SAP processes. Unlike general-purpose AI, Joule understands your SAP data, business context, and organizational processes. It can execute transactions, not just answer questions — from creating purchase orders to analyzing financial reports." },
  { q: "Do we need to build our own AI models?", a: "Not necessarily. SAP provides pre-trained models for common use cases like invoice processing, demand forecasting, and anomaly detection. Kannanware helps you evaluate whether pre-trained models suffice or if custom models would deliver better results for your specific needs." },
  { q: "How does SAP ensure AI is used responsibly?", a: "SAP follows its AI Ethics principles — relevance, reliability, and responsibility. Built-in features include bias detection, model explainability, data privacy controls, and audit trails. Kannanware implements governance frameworks to ensure your AI deployments meet regulatory and ethical standards." },
  { q: "What data do we need to get started with AI?", a: "It depends on the use case. Document intelligence works with your existing invoices and documents. Predictive analytics requires historical transactional data. Kannanware conducts a data readiness assessment to identify gaps and recommend data preparation strategies." },
  { q: "What ROI can we expect from SAP Business AI?", a: "Organizations typically see 70-90% reduction in manual document processing, 30-50% improvement in forecast accuracy, and significant time savings through process automation. Kannanware provides detailed business case analysis with projected ROI for your specific use cases." },
  { q: "How long does an AI implementation take?", a: "A focused AI use case (e.g., invoice automation) can be deployed in 4-8 weeks. Broader AI programs with multiple use cases typically run 3-6 months. Kannanware follows an iterative approach — deliver quick wins first, then expand capabilities." },
];

function AiFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-28" style={{ background: "#0B0B0B" }}>
      <div className="mx-auto w-full px-5 md:px-10 max-w-[900px]" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="eyebrow justify-center">FAQ</p>
          <h2 className="sec-h">Frequently Asked <em>Questions</em></h2>
          <p className="sec-p mx-auto text-center">Everything you need to know about SAP Business AI and our implementation approach.</p>
        </motion.div>

        <div className="space-y-3">
          {aiFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="border rounded-sm overflow-hidden"
                style={{ borderColor: isOpen ? "rgba(244,180,0,.3)" : "rgba(255,255,255,.08)", background: isOpen ? "rgba(244,180,0,.04)" : "rgba(255,255,255,.02)" }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-transparent border-none cursor-none group"
                >
                  <span className="text-[.95rem] font-semibold pr-4" style={{ color: isOpen ? "#F4B400" : "rgba(255,255,255,.85)" }}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: isOpen ? "rgba(244,180,0,.15)" : "rgba(255,255,255,.06)" }}
                  >
                    <span className="text-sm leading-none" style={{ color: isOpen ? "#F4B400" : "rgba(255,255,255,.4)" }}>+</span>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="px-6 pb-5 text-[.9rem] leading-relaxed" style={{ color: "rgba(255,255,255,.55)" }}>
                        {faq.a}
                      </p>
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

/* ─── Sub Nav Items ─── */
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
      const offsets = subNavItems.map(item => {
        const el = document.getElementById(item.id);
        return { id: item.id, top: el ? el.getBoundingClientRect().top : Infinity };
      });
      const current = offsets.filter(o => o.top <= 160).pop();
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-[72px] left-0 right-0 z-40 backdrop-blur-xl border-b"
      style={{
        background: "rgba(11,11,11,.92)",
        borderColor: "rgba(244,180,0,.08)",
      }}
    >
      <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-center gap-1 overflow-x-auto scrollbar-none h-11">
        {subNavItems.map(item => (
          <button
            key={item.id}
            onClick={() => {
              document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="relative whitespace-nowrap px-4 py-2.5 text-[.75rem] font-semibold tracking-wide transition-colors shrink-0"
            style={{
              color: active === item.id ? "#F4B400" : "rgba(255,255,255,.5)",
            }}
          >
            {item.label}
            {active === item.id && (
              <motion.div
                layoutId="ai-subnav-indicator"
                className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full"
                style={{ background: "#F4B400" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Page ─── */
export default function SapBusinessAiPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0B0B0B", fontFamily: "'Ubuntu', sans-serif" }}>
      <Navbar />
      <StickySubNav />
      <div id="hero"><HeroSection /></div>
      <div id="capabilities"><AiCapabilities /></div>
      <div id="demo"><LiveDemo /></div>
      <div id="expertise"><ExpertiseSection /></div>
      <div id="timeline"><AdoptionTimeline /></div>
      <div id="ecosystem"><AiEcosystem /></div>
      <div id="impact"><BusinessImpact /></div>
      <div id="faq"><AiFAQ /></div>
      <div id="cta"><CTASection /></div>
      <Footer />
    </div>
  );
}
