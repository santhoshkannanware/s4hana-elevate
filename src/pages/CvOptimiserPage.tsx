import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight, FileText, ScanSearch, Sparkles, Target, Zap,
  ChevronRight, Play, Pause, CheckCircle2, Brain, Shield,
  BarChart3, RefreshCw, Upload, Settings, Eye
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

/* ═══ HERO ═══ */
function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[120px]" style={{ background: "hsl(var(--primary))" }} />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full opacity-[0.04] blur-[100px]" style={{ background: "hsl(var(--primary))" }} />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center py-24">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-5 text-primary">KIN AI Product</motion.span>
          <motion.h1 variants={fadeUp} className="text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.08] tracking-tight text-foreground mb-6">
            AI-Powered <span className="text-primary">CV Optimiser</span> for SAP Professionals
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[1.05rem] leading-relaxed mb-8 text-muted-foreground">
            Transform your resume into a job-winning document. Our AI analyses job descriptions, identifies keyword gaps,
            and restructures your CV to pass ATS systems and impress hiring managers — specifically tuned for SAP roles.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a href="#cta" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm bg-primary text-primary-foreground transition-all hover:scale-105">
              Optimise Your CV <ArrowRight size={16} />
            </a>
            <a href="#process" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm border border-border text-foreground hover:border-primary/60 transition-all">
              How It Works
            </a>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="hidden lg:block">
          <CycleVisual />
        </motion.div>
      </div>
    </section>
  );
}

function CycleVisual() {
  const nodes = [
    { label: "Upload CV", icon: Upload, angle: 0 },
    { label: "AI Analysis", icon: ScanSearch, angle: 60 },
    { label: "Keyword Match", icon: Target, angle: 120 },
    { label: "ATS Scoring", icon: BarChart3, angle: 180 },
    { label: "Restructure", icon: Settings, angle: 240 },
    { label: "Final Review", icon: Eye, angle: 300 },
  ];
  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => { const t = setInterval(() => setActiveIdx(p => (p + 1) % nodes.length), 2000); return () => clearInterval(t); }, []);
  const radius = 150;

  return (
    <div className="relative w-[400px] h-[400px] mx-auto">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-28 h-28 rounded-full border-2 border-primary/30 flex items-center justify-center" style={{ background: "hsl(var(--card))" }}>
          <div className="text-center">
            <span className="text-primary text-xs font-bold tracking-widest uppercase block">CV</span>
            <span className="text-foreground text-[0.65rem] text-muted-foreground">Optimiser</span>
          </div>
        </div>
      </div>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        <circle cx="200" cy="200" r={radius} fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 6" />
      </svg>
      {nodes.map((node, i) => {
        const rad = (node.angle - 90) * (Math.PI / 180);
        const x = 200 + radius * Math.cos(rad) - 36;
        const y = 200 + radius * Math.sin(rad) - 36;
        const isActive = i === activeIdx;
        const Icon = node.icon;
        return (
          <motion.div key={node.label} className="absolute w-[72px] h-[72px] rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
            style={{ left: x, top: y, background: isActive ? "hsl(var(--primary))" : "hsl(var(--card))", border: `1px solid ${isActive ? "hsl(var(--primary))" : "hsl(var(--border))"}`, boxShadow: isActive ? "0 0 30px hsl(var(--primary) / 0.3)" : "none" }}
            animate={{ scale: isActive ? 1.15 : 1 }} onMouseEnter={() => setActiveIdx(i)}>
            <Icon size={18} className={isActive ? "text-primary-foreground" : "text-primary"} />
            <span className={`text-[0.5rem] mt-1 font-medium text-center leading-tight px-1 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`}>{node.label}</span>
          </motion.div>
        );
      })}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
        {nodes.map((node, i) => {
          const rad = (node.angle - 90) * (Math.PI / 180);
          return <line key={i} x1="200" y1="200" x2={200 + radius * Math.cos(rad)} y2={200 + radius * Math.sin(rad)} stroke={i === activeIdx ? "hsl(var(--primary))" : "hsl(var(--border))"} strokeWidth={i === activeIdx ? 1.5 : 0.5} opacity={i === activeIdx ? 0.6 : 0.2} />;
        })}
      </svg>
    </div>
  );
}

/* ═══ WHAT IS ═══ */
function WhatIsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const steps = [
    { icon: Upload, title: "Upload", desc: "Upload your existing CV in any format — PDF, DOCX, or plain text. Our parser extracts all relevant information." },
    { icon: ScanSearch, title: "AI Scan", desc: "Deep AI analysis compares your CV against the target job description, identifying gaps and opportunities." },
    { icon: Target, title: "Keyword Match", desc: "Intelligent keyword extraction ensures your CV contains the exact terms ATS systems and recruiters look for." },
    { icon: BarChart3, title: "ATS Score", desc: "Get a real-time ATS compatibility score with actionable recommendations to improve your ranking." },
    { icon: Settings, title: "Restructure", desc: "AI restructures your content, optimizes section order, and enhances descriptions for maximum impact." },
    { icon: Eye, title: "Final Review", desc: "Review the optimised CV with before/after comparison, download in multiple formats ready for submission." },
  ];

  return (
    <section id="process" ref={ref} className="py-28 bg-secondary/40">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4 text-primary">How It Works</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-foreground tracking-tight">
            The <span className="text-primary">CV Optimisation</span> Process
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            From upload to a fully optimised, ATS-friendly CV in minutes. Our AI handles the heavy lifting so you can focus on landing interviews.
          </motion.p>
        </motion.div>
        <div className="relative">
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

/* ═══ INTERACTIVE TIMELINE ═══ */
const timelinePhases = [
  { step: "01", title: "CV Upload & Parsing", icon: Upload, desc: "Drag-and-drop your CV in any format. Our intelligent parser extracts structured data including work experience, skills, certifications, and education — preserving context and relationships between sections.", detail: ["Multi-format support (PDF, DOCX, TXT)", "Intelligent section detection", "Skills taxonomy mapping", "Experience timeline extraction"], image: teamDiscovery },
  { step: "02", title: "Job Description Analysis", icon: ScanSearch, desc: "Paste the target job description and our AI deconstructs it into required skills, preferred qualifications, industry keywords, and seniority signals — building a comprehensive matching profile.", detail: ["Requirement priority ranking", "Hidden keyword detection", "Seniority level mapping", "Industry context analysis"], image: teamDesign },
  { step: "03", title: "Gap Analysis & Scoring", icon: BarChart3, desc: "Side-by-side comparison reveals exactly where your CV matches, partially matches, or misses key requirements. Get a detailed ATS compatibility score with specific improvement actions.", detail: ["ATS compatibility scoring", "Keyword density analysis", "Skills gap identification", "Section-by-section audit"], image: teamImplement },
  { step: "04", title: "AI-Powered Restructuring", icon: Settings, desc: "Our AI rewrites bullet points for impact, reorders sections for relevance, optimizes formatting for ATS parsing, and ensures your strongest qualifications lead each section.", detail: ["Action verb optimization", "Quantifiable achievement framing", "Section priority reordering", "Format standardization"], image: teamTesting },
  { step: "05", title: "SAP-Specific Enhancement", icon: Sparkles, desc: "Specialized SAP module recognition ensures correct terminology (S/4HANA, FICO, MM, SD), proper certification formatting, and industry-specific keyword placement for SAP roles.", detail: ["SAP module recognition", "Certification formatting", "Implementation methodology terms", "Partner ecosystem keywords"], image: teamGolive },
  { step: "06", title: "Final Review & Export", icon: FileText, desc: "Review the optimised CV with tracked changes, before/after comparison, and download in recruiter-preferred formats. Share directly or save to your KIN profile.", detail: ["Before/after diff view", "Multiple export formats", "Shareable link generation", "Version history tracking"], image: teamHypercare },
];

function InteractiveTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activePhase, setActivePhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startAutoPlay = useCallback(() => { intervalRef.current = setInterval(() => { setActivePhase(p => (p + 1) % timelinePhases.length); }, 4000); }, []);
  useEffect(() => { if (isPlaying) startAutoPlay(); return () => { if (intervalRef.current) clearInterval(intervalRef.current); }; }, [isPlaying]);
  const togglePlay = () => { if (isPlaying && intervalRef.current) clearInterval(intervalRef.current); setIsPlaying(!isPlaying); };
  const phase = timelinePhases[activePhase];
  const Icon = phase.icon;

  return (
    <section ref={ref} className="py-28 bg-background">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="mb-14">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4 text-primary">Interactive Journey</motion.span>
          <motion.div variants={fadeUp} className="flex items-center justify-between">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-foreground tracking-tight">The <span className="text-primary">Optimisation Pipeline</span></h2>
            <button onClick={togglePlay} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:border-primary/60 hover:text-primary transition-all">
              {isPlaying ? <Pause size={14} /> : <Play size={14} />} {isPlaying ? "Pause" : "Play"}
            </button>
          </motion.div>
        </motion.div>
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
          {timelinePhases.map((p, i) => (
            <button key={p.step} onClick={() => { setActivePhase(i); if (intervalRef.current) clearInterval(intervalRef.current); if (isPlaying) startAutoPlay(); }}
              className={`flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 ${i === activePhase ? "border-primary/60 bg-primary/10 text-primary" : "border-border bg-card text-muted-foreground hover:border-primary/30"}`}>
              <span className="text-xs font-bold">{p.step}</span><span className="text-sm font-medium">{p.title}</span>
            </button>
          ))}
        </div>
        <div className="flex gap-1 mb-10">
          {timelinePhases.map((_, i) => (
            <div key={i} className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "hsl(var(--border))" }}>
              <motion.div className="h-full rounded-full" style={{ background: "hsl(var(--primary))" }} initial={{ width: "0%" }} animate={{ width: i < activePhase ? "100%" : i === activePhase ? "100%" : "0%" }} transition={{ duration: i === activePhase && isPlaying ? 4 : 0.3, ease: "linear" }} />
            </div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={activePhase} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
              <img src={phase.image} alt={phase.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(var(--background) / 0.7), transparent)" }} />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center"><Icon size={22} className="text-primary-foreground" /></div>
                <div><span className="text-primary text-xs font-bold tracking-widest">STEP {phase.step}</span><h3 className="text-foreground font-bold text-lg">{phase.title}</h3></div>
              </div>
            </div>
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">{phase.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {phase.detail.map((d, i) => (
                  <motion.div key={d} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card/50">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" /><span className="text-sm text-foreground">{d}</span>
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

/* ═══ CAPABILITIES ═══ */
function CapabilitiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const capabilities = [
    { icon: Brain, title: "AI-Powered Content Rewriting", desc: "Natural language AI rewrites your bullet points with stronger action verbs, quantified achievements, and industry-specific terminology that resonates with hiring managers." },
    { icon: Target, title: "ATS Compatibility Engine", desc: "Proprietary scoring algorithm tests your CV against 50+ ATS systems used by major enterprises, ensuring maximum parse rates and keyword matching." },
    { icon: Sparkles, title: "SAP Module Recognition", desc: "Specialized NLP model trained on SAP terminology correctly identifies and formats module names, transaction codes, and certification designations." },
    { icon: Shield, title: "Privacy & Data Security", desc: "Enterprise-grade encryption, GDPR compliance, and automatic data deletion. Your CV data is never shared or used for model training." },
    { icon: RefreshCw, title: "Iterative Refinement", desc: "Apply multiple rounds of optimization, test against different job descriptions, and track improvements with version comparison and scoring history." },
    { icon: Zap, title: "Instant Processing", desc: "Get your optimised CV in under 60 seconds. Real-time streaming shows changes as they happen with explanations for each modification." },
  ];

  return (
    <section ref={ref} className="py-28 bg-secondary/40">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4 text-primary">Core Features</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-foreground tracking-tight">CV Optimiser <span className="text-primary">Capabilities</span></motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="space-y-4">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div key={cap.title} variants={fadeUp} className="group grid md:grid-cols-[80px_280px_1fr] gap-6 items-center p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300">
                <div className="hidden md:flex items-center justify-center"><span className="text-3xl font-bold text-primary/20 group-hover:text-primary/50 transition-colors">{String(i + 1).padStart(2, "0")}</span></div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><Icon size={22} className="text-primary" /></div>
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

/* ═══ TECH STACK ═══ */
function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const layers = [
    { label: "AI Engine", color: "hsl(var(--primary))", nodes: [{ name: "KIN AI Core", desc: "Proprietary NLP engine fine-tuned on millions of successful CVs, job descriptions, and ATS parsing patterns." }] },
    { label: "Analysis Layer", color: "hsl(var(--primary) / 0.7)", nodes: [{ name: "Keyword Extraction", desc: "Advanced NER and keyword extraction identifying hard skills, soft skills, certifications, and industry terms." }, { name: "ATS Simulation", desc: "Real-time simulation against 50+ ATS platforms with detailed parse-rate scoring." }, { name: "Gap Detection", desc: "Semantic comparison engine identifying missing qualifications and experience gaps." }] },
    { label: "Output Layer", color: "hsl(var(--primary) / 0.5)", nodes: [{ name: "Content Generator", desc: "AI-powered rewriting engine that transforms weak bullet points into impact-driven statements." }, { name: "Format Engine", desc: "Multi-format export with ATS-optimized templates and custom branding options." }, { name: "Analytics Dashboard", desc: "Track optimization history, score trends, and application success metrics." }] },
  ];
  let nodeCounter = 0;

  return (
    <section ref={ref} className="py-28 bg-background">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4 text-primary">Technology</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-foreground tracking-tight">Powered by <span className="text-primary">KIN AI</span></motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="space-y-6">
          {layers.map((layer) => (
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
                    <motion.div key={node.name} onMouseEnter={() => setHoveredNode(idx)} onMouseLeave={() => setHoveredNode(null)}
                      className="relative p-6 rounded-2xl border border-border bg-card cursor-pointer transition-all duration-300"
                      style={{ borderColor: isHovered ? layer.color : undefined, boxShadow: isHovered ? `0 0 40px ${layer.color}20` : "none" }}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 rounded-full" style={{ background: layer.color }} />
                        <h4 className="text-foreground font-bold">{node.name}</h4>
                      </div>
                      <AnimatePresence>
                        {isHovered && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-sm text-muted-foreground leading-relaxed overflow-hidden">{node.desc}</motion.p>}
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

/* ═══ BUSINESS IMPACT ═══ */
function BusinessImpact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const metrics = [
    { value: 85, suffix: "%", label: "Higher ATS Pass Rate", desc: "CVs optimised with KIN pass ATS screening" },
    { value: 3, suffix: "x", label: "More Interview Callbacks", desc: "Users report 3x more recruiter responses" },
    { value: 60, suffix: "s", label: "Average Processing Time", desc: "Full optimisation in under a minute" },
    { value: 50, suffix: "+", label: "ATS Systems Tested", desc: "Compatibility with major enterprise ATS" },
    { value: 10, suffix: "K+", label: "CVs Optimised", desc: "Trusted by SAP professionals worldwide" },
    { value: 95, suffix: "%", label: "User Satisfaction", desc: "Rated excellent by SAP consultants" },
  ];

  return (
    <section ref={ref} className="py-28 bg-secondary/40">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4 text-primary">Results</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-foreground tracking-tight">Proven <span className="text-primary">Impact</span></motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m) => (
            <motion.div key={m.label} variants={fadeUp} className="p-8 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300 group">
              <div className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-primary mb-2"><CountUp end={m.value} suffix={m.suffix} /></div>
              <h4 className="text-lg font-bold text-foreground mb-2">{m.label}</h4>
              <p className="text-sm text-muted-foreground">{m.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ CTA ═══ */
function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="cta" ref={ref} className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[150px]" style={{ background: "hsl(var(--primary))" }} />
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4 text-primary">Get Started</motion.span>
        <motion.h2 variants={fadeUp} className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-foreground tracking-tight mb-6">
          Ready to Land Your Next <span className="text-primary">SAP Role</span>?
        </motion.h2>
        <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-10">
          Upload your CV now and get an AI-optimised, ATS-friendly resume tailored for SAP positions in minutes.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold bg-primary text-primary-foreground hover:scale-105 transition-transform">Optimise My CV <ArrowRight size={16} /></a>
          <a href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold border border-border text-foreground hover:border-primary/60 transition-all">Back to Home <ChevronRight size={16} /></a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function CvOptimiserPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsSection />
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
