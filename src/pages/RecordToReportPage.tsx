import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight, BookOpen, FileCheck, RefreshCw, Lock, BarChart3,
  Layers, TrendingUp, Shield, Database, Brain, Target, Zap,
  ChevronRight, Play, Pause, CheckCircle2, Activity
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import teamDiscovery from "@/assets/team-discovery.jpg";
import teamDesign from "@/assets/team-design.jpg";
import teamImplement from "@/assets/team-implement.jpg";
import teamTesting from "@/assets/team-testing.jpg";
import teamGolive from "@/assets/team-golive.jpg";
import teamHypercare from "@/assets/team-hypercare.jpg";

/* ─── Animation Helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

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
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end]);
  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

/* ═══════════════════════════════════════════
   SECTION 1 — HERO
   ═══════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-background">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      {/* Floating glowing orbs */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[120px]" style={{ background: "hsl(var(--primary))" }} />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full opacity-[0.04] blur-[100px]" style={{ background: "hsl(var(--primary))" }} />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center py-24">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-5 text-primary">
            Financial Process Excellence
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.08] tracking-tight text-foreground mb-6">
            Modernizing <span className="text-primary">Record-to-Report</span> for Intelligent Finance
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[1.05rem] leading-relaxed mb-8 text-muted-foreground">
            Record to Report is the end-to-end financial process that transforms raw transactional data into executive-grade
            reporting and decision insights. From journal entries through consolidation to board-ready financials — Kannanware
            optimizes every step with SAP-powered intelligence.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a href="#cta" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm bg-primary text-primary-foreground transition-all hover:scale-105">
              Transform Finance Operations <ArrowRight size={16} />
            </a>
            <a href="#process" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm border border-border text-foreground hover:border-primary/60 transition-all">
              Explore the Process
            </a>
          </motion.div>
        </motion.div>

        {/* Right — Animated R2R Cycle */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="hidden lg:block">
          <R2RCycleVisual />
        </motion.div>
      </div>
    </section>
  );
}

/* Animated cycle visual for hero */
function R2RCycleVisual() {
  const nodes = [
    { label: "Journal Entries", icon: BookOpen, angle: 0 },
    { label: "GL Management", icon: Database, angle: 60 },
    { label: "Reconciliation", icon: RefreshCw, angle: 120 },
    { label: "Financial Close", icon: Lock, angle: 180 },
    { label: "Consolidation", icon: Layers, angle: 240 },
    { label: "Reporting", icon: BarChart3, angle: 300 },
  ];
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveIdx(p => (p + 1) % nodes.length), 2000);
    return () => clearInterval(t);
  }, []);

  const radius = 150;

  return (
    <div className="relative w-[400px] h-[400px] mx-auto">
      {/* Center hub */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-28 h-28 rounded-full border-2 border-primary/30 flex items-center justify-center" style={{ background: "hsl(var(--card))" }}>
          <div className="text-center">
            <span className="text-primary text-xs font-bold tracking-widest uppercase block">R2R</span>
            <span className="text-foreground text-[0.65rem] text-muted-foreground">Cycle</span>
          </div>
        </div>
      </div>

      {/* Orbit ring */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        <circle cx="200" cy="200" r={radius} fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 6" />
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => {
        const rad = (node.angle - 90) * (Math.PI / 180);
        const x = 200 + radius * Math.cos(rad) - 36;
        const y = 200 + radius * Math.sin(rad) - 36;
        const isActive = i === activeIdx;
        const Icon = node.icon;

        return (
          <motion.div
            key={node.label}
            className="absolute w-[72px] h-[72px] rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
            style={{
              left: x,
              top: y,
              background: isActive ? "hsl(var(--primary))" : "hsl(var(--card))",
              border: `1px solid ${isActive ? "hsl(var(--primary))" : "hsl(var(--border))"}`,
              boxShadow: isActive ? "0 0 30px hsl(var(--primary) / 0.3)" : "none",
            }}
            animate={{ scale: isActive ? 1.15 : 1 }}
            onMouseEnter={() => setActiveIdx(i)}
          >
            <Icon size={18} className={isActive ? "text-primary-foreground" : "text-primary"} />
            <span className={`text-[0.5rem] mt-1 font-medium text-center leading-tight px-1 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`}>{node.label}</span>
          </motion.div>
        );
      })}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
        {nodes.map((node, i) => {
          const rad = (node.angle - 90) * (Math.PI / 180);
          const x = 200 + radius * Math.cos(rad);
          const y = 200 + radius * Math.sin(rad);
          return (
            <line key={i} x1="200" y1="200" x2={x} y2={y}
              stroke={i === activeIdx ? "hsl(var(--primary))" : "hsl(var(--border))"}
              strokeWidth={i === activeIdx ? 1.5 : 0.5}
              opacity={i === activeIdx ? 0.6 : 0.2}
            />
          );
        })}
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — WHAT IS RECORD TO REPORT
   ═══════════════════════════════════════════ */
function WhatIsR2R() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    { icon: BookOpen, title: "Journal Entries", desc: "Capture and post financial transactions across all business units with automated validation and approval workflows." },
    { icon: Database, title: "General Ledger", desc: "Maintain the central repository of all financial records with real-time balance updates and multi-dimensional accounting." },
    { icon: RefreshCw, title: "Reconciliation", desc: "Match and verify account balances across sub-ledgers, banks, and intercompany transactions to ensure data integrity." },
    { icon: Lock, title: "Financial Close", desc: "Execute period-end closing activities including accruals, reclassifications, currency revaluation, and close task management." },
    { icon: Layers, title: "Consolidation", desc: "Aggregate financial data across entities, eliminate intercompany transactions, and produce group-level financials." },
    { icon: BarChart3, title: "Executive Reporting", desc: "Generate board-ready financial statements, management reports, and regulatory filings with drill-down analytics." },
  ];

  return (
    <section id="process" ref={ref} className="py-28 bg-secondary/40">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4 text-primary">Understanding the Process</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-foreground tracking-tight">
            What is <span className="text-primary">Record to Report</span>?
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            R2R encompasses the full lifecycle of financial data — from initial transaction capture through to consolidated
            reporting. It is the backbone of financial transparency and regulatory compliance.
          </motion.p>
        </motion.div>

        {/* Visual flow */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-[60px] left-[8%] right-[8%] h-[2px]" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), hsl(var(--primary) / 0.5), hsl(var(--primary) / 0.3), transparent)" }} />

          <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.title} variants={fadeUp} className="group text-center">
                  <div className="relative mx-auto w-[72px] h-[72px] rounded-2xl border border-border bg-card flex items-center justify-center mb-4 group-hover:border-primary/60 transition-all duration-300 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]">
                    <Icon size={28} className="text-primary" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-[0.6rem] font-bold flex items-center justify-center">{i + 1}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 3 — INTERACTIVE PROCESS FLOW
   ═══════════════════════════════════════════ */
const timelinePhases = [
  {
    step: "01", title: "Transaction Recording", icon: BookOpen,
    desc: "Automated capture of financial transactions from all source systems including AP, AR, payroll, and asset accounting. Rules-based validation ensures accuracy at the point of entry.",
    detail: ["Multi-source data ingestion", "Real-time validation rules", "Automated posting logic", "Exception handling workflows"],
    image: teamDiscovery,
  },
  {
    step: "02", title: "General Ledger Management", icon: Database,
    desc: "Centralized ledger management with real-time balance updates, parallel accounting (GAAP/IFRS), and universal journal architecture for simplified reporting.",
    detail: ["Universal Journal (ACDOCA)", "Parallel valuations", "Real-time balance sheets", "Multi-currency support"],
    image: teamDesign,
  },
  {
    step: "03", title: "Reconciliation", icon: RefreshCw,
    desc: "Automated matching of balances across sub-ledgers, bank statements, and intercompany accounts with intelligent exception management.",
    detail: ["Auto-matching algorithms", "Bank reconciliation", "Intercompany netting", "Variance analysis"],
    image: teamImplement,
  },
  {
    step: "04", title: "Financial Close", icon: Lock,
    desc: "Streamlined period-end close with automated task orchestration, real-time close monitoring dashboards, and compliance checkpoints.",
    detail: ["Close task management", "Automated accruals", "Currency revaluation", "Close cockpit monitoring"],
    image: teamTesting,
  },
  {
    step: "05", title: "Financial Consolidation", icon: Layers,
    desc: "Group-level consolidation with automated intercompany elimination, minority interest calculations, and multi-GAAP compliance.",
    detail: ["Legal consolidation", "IC elimination", "Equity method adjustments", "Multi-standard support"],
    image: teamGolive,
  },
  {
    step: "06", title: "Executive Reporting", icon: BarChart3,
    desc: "AI-enhanced analytics and reporting with real-time dashboards, predictive insights, and automated regulatory filing generation.",
    detail: ["Real-time dashboards", "Predictive analytics", "Regulatory filings", "Board-ready reports"],
    image: teamHypercare,
  },
];

function InteractiveTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activePhase, setActivePhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setActivePhase(p => (p + 1) % timelinePhases.length);
    }, 4000);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      startAutoPlay();
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPlaying]);

  const togglePlay = () => {
    if (isPlaying && intervalRef.current) clearInterval(intervalRef.current);
    setIsPlaying(!isPlaying);
  };

  const phase = timelinePhases[activePhase];
  const Icon = phase.icon;

  return (
    <section ref={ref} className="py-28 bg-background">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="mb-14">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4 text-primary">Interactive Journey</motion.span>
          <motion.div variants={fadeUp} className="flex items-center justify-between">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-foreground tracking-tight">
              The R2R <span className="text-primary">Transformation Cycle</span>
            </h2>
            <button onClick={togglePlay} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:border-primary/60 hover:text-primary transition-all">
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              {isPlaying ? "Pause" : "Play"}
            </button>
          </motion.div>
        </motion.div>

        {/* Timeline nav */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
          {timelinePhases.map((p, i) => (
            <button
              key={p.step}
              onClick={() => { setActivePhase(i); if (intervalRef.current) clearInterval(intervalRef.current); if (isPlaying) startAutoPlay(); }}
              className={`flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 ${
                i === activePhase
                  ? "border-primary/60 bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/30"
              }`}
            >
              <span className="text-xs font-bold">{p.step}</span>
              <span className="text-sm font-medium">{p.title}</span>
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="flex gap-1 mb-10">
          {timelinePhases.map((_, i) => (
            <div key={i} className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "hsl(var(--border))" }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: "hsl(var(--primary))" }}
                initial={{ width: "0%" }}
                animate={{ width: i < activePhase ? "100%" : i === activePhase ? "100%" : "0%" }}
                transition={{ duration: i === activePhase && isPlaying ? 4 : 0.3, ease: "linear" }}
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left — Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
              <img src={phase.image} alt={phase.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(var(--background) / 0.7), transparent)" }} />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <Icon size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <span className="text-primary text-xs font-bold tracking-widest">PHASE {phase.step}</span>
                  <h3 className="text-foreground font-bold text-lg">{phase.title}</h3>
                </div>
              </div>
            </div>

            {/* Right — Details */}
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">{phase.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {phase.detail.map((d, i) => (
                  <motion.div
                    key={d}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card/50"
                  >
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{d}</span>
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

/* ═══════════════════════════════════════════
   SECTION 4 — KANNANWARE CAPABILITIES
   ═══════════════════════════════════════════ */
function CapabilitiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const capabilities = [
    { icon: Lock, title: "Financial Close Optimization", desc: "Reduce close cycles from weeks to days with automated task orchestration, real-time monitoring dashboards, and intelligent bottleneck detection." },
    { icon: RefreshCw, title: "Automated Reconciliation", desc: "AI-powered matching engines that reconcile millions of transactions across sub-ledgers, banks, and intercompany with 99%+ auto-match rates." },
    { icon: Layers, title: "Consolidation & Group Reporting", desc: "End-to-end statutory and management consolidation with automated IC elimination, currency translation, and multi-GAAP compliance." },
    { icon: Shield, title: "Compliance & Audit Readiness", desc: "Continuous controls monitoring, SOX compliance automation, and audit-ready documentation with complete process traceability." },
    { icon: Brain, title: "Real-Time Financial Analytics", desc: "Live dashboards powered by SAP Analytics Cloud with embedded AI for predictive insights, variance analysis, and scenario planning." },
    { icon: Target, title: "Process Mining & Optimization", desc: "Data-driven process analysis to identify bottlenecks, automate manual steps, and continuously improve R2R cycle efficiency." },
  ];

  return (
    <section ref={ref} className="py-28 bg-secondary/40">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4 text-primary">Our Expertise</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-foreground tracking-tight">
            Kannanware <span className="text-primary">R2R Capabilities</span>
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="space-y-4">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                variants={fadeUp}
                className="group grid md:grid-cols-[80px_280px_1fr] gap-6 items-center p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300"
              >
                <div className="hidden md:flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary/20 group-hover:text-primary/50 transition-colors">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{cap.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{cap.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 5 — SAP TECHNOLOGY ENABLEMENT
   ═══════════════════════════════════════════ */
function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const layers = [
    {
      label: "Foundation",
      color: "hsl(var(--primary))",
      nodes: [
        { name: "SAP S/4HANA", desc: "Core ERP with Universal Journal, real-time financial processing, and embedded analytics for the R2R backbone." },
      ],
    },
    {
      label: "Process Layer",
      color: "hsl(var(--primary) / 0.7)",
      nodes: [
        { name: "Financial Close", desc: "Automated close task management with real-time status tracking and bottleneck alerts." },
        { name: "Group Reporting", desc: "Native consolidation engine in S/4HANA for statutory and management group reporting." },
        { name: "Central Finance", desc: "Harmonized financial data from multiple ERP systems into a single source of truth." },
      ],
    },
    {
      label: "Intelligence Layer",
      color: "hsl(var(--primary) / 0.5)",
      nodes: [
        { name: "SAP Analytics Cloud", desc: "Planning, reporting, and predictive analytics with AI-driven insights for finance." },
        { name: "SAP BTP", desc: "Extension platform for custom automation, AI/ML models, and process orchestration." },
        { name: "SAP Datasphere", desc: "Unified data fabric connecting financial data across SAP and non-SAP sources." },
      ],
    },
  ];

  let nodeCounter = 0;

  return (
    <section ref={ref} className="py-28 bg-background">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4 text-primary">Technology Foundation</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-foreground tracking-tight">
            SAP-Powered <span className="text-primary">R2R Architecture</span>
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="space-y-6">
          {layers.map((layer, li) => (
            <motion.div key={layer.label} variants={fadeUp}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 rounded-full" style={{ background: layer.color }} />
                <span className="text-xs font-bold tracking-[.2em] uppercase text-muted-foreground">{layer.label}</span>
                <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${layer.color}, transparent)` }} />
              </div>
              <div className={`grid gap-4 ${layer.nodes.length === 1 ? "grid-cols-1" : "md:grid-cols-3"}`}>
                {layer.nodes.map((node) => {
                  const idx = nodeCounter++;
                  const isHovered = hoveredNode === idx;
                  return (
                    <motion.div
                      key={node.name}
                      onMouseEnter={() => setHoveredNode(idx)}
                      onMouseLeave={() => setHoveredNode(null)}
                      className="relative p-6 rounded-2xl border border-border bg-card cursor-pointer transition-all duration-300"
                      style={{
                        borderColor: isHovered ? layer.color : undefined,
                        boxShadow: isHovered ? `0 0 40px ${layer.color}20` : "none",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 rounded-full" style={{ background: layer.color }} />
                        <h4 className="text-foreground font-bold">{node.name}</h4>
                      </div>
                      <AnimatePresence>
                        {isHovered && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-sm text-muted-foreground leading-relaxed overflow-hidden"
                          >
                            {node.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 6 — BUSINESS IMPACT
   ═══════════════════════════════════════════ */
function BusinessImpact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const metrics = [
    { value: 60, suffix: "%", label: "Faster Financial Close", desc: "Reduce close cycle from weeks to days" },
    { value: 95, suffix: "%", label: "Auto-Reconciliation Rate", desc: "Intelligent matching across all accounts" },
    { value: 40, suffix: "%", label: "Reduction in Manual Effort", desc: "Automation of repetitive R2R tasks" },
    { value: 100, suffix: "%", label: "Audit Trail Compliance", desc: "Complete traceability and transparency" },
    { value: 3, suffix: "x", label: "Faster Reporting Cycles", desc: "Real-time executive dashboards" },
    { value: 50, suffix: "%", label: "Lower Compliance Risk", desc: "Continuous controls monitoring" },
  ];

  return (
    <section ref={ref} className="py-28 bg-secondary/40">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4 text-primary">Measurable Outcomes</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-foreground tracking-tight">
            Business <span className="text-primary">Impact</span>
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m) => (
            <motion.div key={m.label} variants={fadeUp} className="p-8 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300 group">
              <div className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-primary mb-2">
                <CountUp end={m.value} suffix={m.suffix} />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">{m.label}</h4>
              <p className="text-sm text-muted-foreground">{m.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 7 — CTA
   ═══════════════════════════════════════════ */
function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" ref={ref} className="py-28 bg-background relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[150px]" style={{ background: "hsl(var(--primary))" }} />

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={stagger}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4 text-primary">Ready to Transform?</motion.span>
        <motion.h2 variants={fadeUp} className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-foreground tracking-tight mb-6">
          Transform Your Finance Operations with <span className="text-primary">Kannanware</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-10">
          From accelerating financial close to enabling real-time executive reporting — our SAP-certified
          consultants deliver measurable outcomes across the entire Record-to-Report lifecycle.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold bg-primary text-primary-foreground hover:scale-105 transition-transform">
            Schedule a Consultation <ArrowRight size={16} />
          </a>
          <a href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold border border-border text-foreground hover:border-primary/60 transition-all">
            Back to Home <ChevronRight size={16} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════ */
export default function RecordToReportPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsR2R />
        <InteractiveTimeline />
        <CapabilitiesSection />
        <TechStack />
        <BusinessImpact />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
