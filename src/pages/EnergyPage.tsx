import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingDown, Building2, ShieldCheck, Gauge, Flame, Wrench, Network, DollarSign, BarChart3, Clock, Eye, Brain, Target, Zap, FileCheck, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import heroImg from "@/assets/industry-energy-hero.jpg";
import consultingImg from "@/assets/energy-consulting.jpg";
import transformImg from "@/assets/energy-transformation.jpg";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [.22, 1, .36, 1] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

function CountUp({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const dur = 2000;
    const step = (ts: number) => { if (!start) start = ts; const p = Math.min((ts - start) / dur, 1); setVal(Math.floor(p * end)); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, [inView, end]);
  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

/* ─── Section 1: Hero ─── */
function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden" style={{ background: "#0B0B0B" }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#F4B400 1px, transparent 1px), linear-gradient(90deg, #F4B400 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center py-24">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-5" style={{ color: "#F4B400" }}>Industry — Energy & Natural Resources</motion.span>
          <motion.h1 variants={fadeUp} className="text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.08] tracking-tight text-white mb-6">
            Energy & Natural Resources Transformation with <span style={{ color: "#F4B400" }}>SAP</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[1.05rem] leading-relaxed mb-4" style={{ color: "#C9C9C9" }}>
            Helping energy companies modernize finance operations, manage complex assets, and gain real-time intelligence through SAP-powered digital transformation.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[.92rem] leading-relaxed mb-8" style={{ color: "#999" }}>
            Energy and natural resource companies operate in dynamic markets with complex infrastructure, regulatory pressure, and volatile pricing. Kannanware enables energy enterprises to modernize financial operations, optimize asset performance, and drive data-driven decision making using SAP technologies.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a href="#cta" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-black transition-all hover:scale-105" style={{ background: "#F4B400" }}>Talk to an Expert <ArrowRight size={16} /></a>
            <a href="#solutions" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white border transition-all hover:bg-white/5" style={{ borderColor: "rgba(244,180,0,.35)" }}>Explore SAP Solutions</a>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: .3 }} className="relative hidden lg:block">
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(244,180,0,.12)" }}>
            <motion.img src={heroImg} alt="Energy infrastructure at sunset" className="w-full h-[480px] object-cover" animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
            <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(11,11,11,.4) 0%, transparent 60%)" }} />
          </div>
          <div className="absolute -inset-10 rounded-full blur-[100px] -z-10" style={{ background: "radial-gradient(circle, rgba(244,180,0,.08) 0%, transparent 70%)" }} />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Section 2: Challenges ─── */
function ChallengesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const challenges = [
    { icon: TrendingDown, title: "Market Volatility", desc: "Energy companies must manage fluctuating prices and unpredictable market conditions." },
    { icon: Building2, title: "Complex Infrastructure", desc: "Managing large-scale physical assets across multiple regions requires advanced operational visibility." },
    { icon: ShieldCheck, title: "Regulatory Compliance", desc: "Energy organizations must comply with strict environmental and financial regulations." },
    { icon: Gauge, title: "Operational Efficiency", desc: "Energy companies must balance production efficiency with cost management." },
  ];

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1100px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Industry Challenges</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Key Challenges in the Energy Sector</motion.h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .12, duration: .6 }}
              className="group rounded-xl p-7 border transition-all hover:border-[rgba(244,180,0,.3)]"
              style={{ background: "rgba(255,255,255,.02)", borderColor: "rgba(255,255,255,.06)" }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-shadow group-hover:shadow-[0_0_24px_rgba(244,180,0,.25)]" style={{ background: "rgba(244,180,0,.1)" }}>
                <c.icon size={22} style={{ color: "#F4B400" }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F4B400] transition-colors">{c.title}</h3>
              <p className="text-[.9rem] leading-relaxed" style={{ color: "#C9C9C9" }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: Interactive Value Chain ─── */
function ValueChain() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  const steps = [
    { icon: Flame, title: "Exploration & Production", desc: "Energy generation and resource extraction across upstream operations." },
    { icon: Wrench, title: "Asset Management", desc: "Monitoring infrastructure performance, maintenance scheduling, and lifecycle tracking." },
    { icon: Network, title: "Energy Distribution", desc: "Managing energy networks, logistics, and supply chain coordination." },
    { icon: DollarSign, title: "Finance & Revenue", desc: "Handling billing, financial planning, trading, and revenue management." },
    { icon: BarChart3, title: "Analytics & Forecasting", desc: "Predicting demand, costs, and market changes with advanced analytics." },
  ];

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#0B0B0B" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>End-to-End Process</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">The Energy Value Chain</motion.h2>
        </motion.div>

        {/* Horizontal chain */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
          {/* Connecting line */}
          <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 1.2, delay: .3 }} className="hidden md:block absolute top-[40px] left-[60px] right-[60px] h-[2px] origin-left" style={{ background: "linear-gradient(90deg, rgba(244,180,0,.15), rgba(244,180,0,.4), rgba(244,180,0,.15))" }} />

          {steps.map((s, i) => {
            const isHovered = hovered === i;
            return (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: .4 + i * .12 }}
                className="relative flex-1 flex flex-col items-center text-center cursor-pointer z-10"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <motion.div animate={{ scale: isHovered ? 1.15 : 1, boxShadow: isHovered ? "0 0 40px rgba(244,180,0,.35)" : "0 0 0px transparent" }} transition={{ duration: .3 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all"
                  style={{ background: isHovered ? "rgba(244,180,0,.2)" : "rgba(244,180,0,.06)", border: `2px solid ${isHovered ? "#F4B400" : "rgba(244,180,0,.2)"}` }}
                >
                  <s.icon size={24} style={{ color: isHovered ? "#F4B400" : "rgba(255,255,255,.5)" }} />
                </motion.div>
                <h3 className="text-sm font-bold text-white mb-1 transition-colors" style={{ color: isHovered ? "#F4B400" : "white" }}>{s.title}</h3>
                <AnimatePresence>
                  {isHovered && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-[.78rem] leading-relaxed max-w-[180px]" style={{ color: "#999" }}>
                      {s.desc}
                    </motion.p>
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

/* ─── Section 4: How Kannanware Helps ─── */
function CapabilitiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const capabilities = [
    { icon: DollarSign, title: "Finance Transformation", desc: "Modernize finance operations with SAP S/4HANA for real-time financial visibility and automated close processes." },
    { icon: Eye, title: "Asset Lifecycle Visibility", desc: "Track infrastructure investments and operational costs across the entire asset lifecycle with integrated reporting." },
    { icon: BarChart3, title: "Real-Time Operational Insights", desc: "Use analytics to monitor production performance, identify inefficiencies, and optimize energy output." },
    { icon: ShieldCheck, title: "Compliance & Risk Management", desc: "Automate regulatory and financial reporting to meet environmental and industry compliance requirements." },
  ];

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Our Expertise</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Driving Digital Transformation for Energy Enterprises</motion.h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — image */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: .7 }} className="relative rounded-2xl overflow-hidden">
            <img src={consultingImg} alt="Energy consulting control room" className="w-full h-[420px] object-cover rounded-2xl" />
            <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(to top, rgba(11,11,11,.6) 0%, transparent 50%)" }} />
          </motion.div>
          {/* Right — capabilities */}
          <div className="space-y-6">
            {capabilities.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .1, duration: .5 }}
                className="group flex gap-5 items-start p-5 rounded-xl border transition-all hover:border-[rgba(244,180,0,.3)]"
                style={{ background: "rgba(255,255,255,.02)", borderColor: "rgba(255,255,255,.06)" }}
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-shadow group-hover:shadow-[0_0_20px_rgba(244,180,0,.25)]" style={{ background: "rgba(244,180,0,.1)" }}>
                  <c.icon size={20} style={{ color: "#F4B400" }} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#F4B400] transition-colors">{c.title}</h3>
                  <p className="text-[.85rem] leading-relaxed" style={{ color: "#C9C9C9" }}>{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5: SAP Architecture ─── */
function TechArchitecture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const animRef = useRef<number>(0);
  const pausedRef = useRef(false);

  const nodes = [
    { label: "SAP Asset Mgmt", desc: "Enterprise asset management for tracking infrastructure performance, maintenance, and lifecycle costs across energy operations.", color: "#F4B400" },
    { label: "SAP BTP", desc: "Integration and innovation platform connecting cloud and on-premise systems with custom extensions and process automation.", color: "#FFD54F" },
    { label: "SAP Datasphere", desc: "Unified enterprise data layer that harmonizes operational and financial data for trusted real-time business insights.", color: "#FFA726" },
    { label: "SAP Analytics Cloud", desc: "Advanced financial analytics, forecasting, and planning capabilities for energy demand prediction and cost optimization.", color: "#FFB74D" },
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

  const r = 160;

  return (
    <section ref={ref} id="solutions" className="py-28 px-6 md:px-10" style={{ background: "#0B0B0B" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-10">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Technology</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">SAP Technology for Energy Innovation</motion.h2>
          <motion.p variants={fadeUp} className="text-sm mt-3" style={{ color: "#999" }}>Hover to pause • Click a node to explore</motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
          <div className="relative flex justify-center" onMouseEnter={() => { pausedRef.current = true; }} onMouseLeave={() => { pausedRef.current = false; }}>
            <div className="relative" style={{ width: r * 2 + 120, height: r * 2 + 120 }}>
              {[1, .7, .4].map((opacity, i) => (
                <div key={i} className="absolute rounded-full border" style={{ inset: `${30 + i * 20}px`, borderColor: `rgba(244,180,0,${opacity * .08})` }} />
              ))}
              <motion.div initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full flex items-center justify-center z-10" style={{ background: "radial-gradient(circle, rgba(244,180,0,.35) 0%, rgba(244,180,0,.08) 70%)", border: "2px solid rgba(244,180,0,.5)", boxShadow: "0 0 60px rgba(244,180,0,.2)" }}>
                <span className="text-sm font-bold text-white text-center leading-tight">SAP<br/>S/4HANA</span>
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
                    <span>Connected to SAP S/4HANA</span>
                    <div className="flex-1 h-px" style={{ background: "rgba(244,180,0,.2)" }} />
                  </div>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center w-full">
                  <p className="text-lg text-white/40">Click any orbiting node to explore its role in energy transformation</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 6: Business Impact ─── */
function BusinessImpact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const blocks = [
    { icon: Clock, title: "Faster Financial Reporting", desc: "Accelerate financial close cycles across energy operations with automated reconciliation and parallel processing.", metric: "60%", metricLabel: "Faster Close" },
    { icon: Eye, title: "Improved Asset Visibility", desc: "Gain real-time insights into infrastructure performance, maintenance schedules, and lifecycle costs.", metric: "95%", metricLabel: "Asset Visibility" },
    { icon: Brain, title: "Better Decision Intelligence", desc: "Enable predictive analytics and forecasting for demand planning, cost optimization, and market analysis.", metric: "3x", metricLabel: "Forecast Accuracy" },
    { icon: Target, title: "Operational Efficiency", desc: "Optimize production and operational costs through streamlined processes and intelligent automation.", metric: "40%", metricLabel: "Cost Reduction" },
  ];

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-20">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Results</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Business Outcomes for Energy Companies</motion.h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {blocks.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1, duration: .6 }}
              className="group rounded-xl p-8 border transition-all hover:border-[rgba(244,180,0,.3)]"
              style={{ background: "rgba(255,255,255,.02)", borderColor: "rgba(255,255,255,.06)" }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-shadow group-hover:shadow-[0_0_24px_rgba(244,180,0,.25)]" style={{ background: "rgba(244,180,0,.1)" }}>
                  <b.icon size={22} style={{ color: "#F4B400" }} />
                </div>
                <div className="text-right">
                  <span className="text-[2rem] font-bold leading-none" style={{ color: "#F4B400" }}>
                    <CountUp end={parseInt(b.metric)} suffix={b.metric.replace(/\d+/, "")} />
                  </span>
                  <span className="block text-[.6rem] uppercase tracking-[.15em] mt-1" style={{ color: "rgba(255,255,255,.3)" }}>{b.metricLabel}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F4B400] transition-colors">{b.title}</h3>
              <p className="text-[.88rem] leading-relaxed" style={{ color: "#C9C9C9" }}>{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 7: Transformation Story ─── */
function TransformationStory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const panels = [
    { label: "Challenge", color: "rgba(244,180,0,.08)", border: "rgba(244,180,0,.15)", text: "An energy organization struggled with fragmented reporting across multiple systems, leading to delayed financial close cycles and limited visibility into operational performance." },
    { label: "Solution", color: "rgba(244,180,0,.12)", border: "rgba(244,180,0,.25)", text: "Kannanware implemented SAP S/4HANA Finance with integrated analytics platforms, consolidating data from upstream and downstream operations into a single source of truth." },
    { label: "Outcome", color: "rgba(244,180,0,.06)", border: "rgba(244,180,0,.2)", text: "The organization achieved 60% faster reporting cycles, improved forecasting accuracy by 3x, and gained real-time operational visibility across all business units." },
  ];

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#0B0B0B" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Case Study</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Energy Finance Transformation Example</motion.h2>
        </motion.div>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: .7 }} className="rounded-2xl overflow-hidden">
            <img src={transformImg} alt="Energy finance transformation" className="w-full h-[380px] object-cover rounded-2xl" />
          </motion.div>
          <div className="space-y-5">
            {panels.map((p, i) => (
              <motion.div key={p.label} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .15, duration: .6 }}
                className="rounded-xl p-6 border"
                style={{ background: p.color, borderColor: p.border }}
              >
                <span className="inline-block text-[.65rem] font-bold tracking-[.2em] uppercase mb-3" style={{ color: "#F4B400" }}>{p.label}</span>
                <p className="text-[.9rem] leading-relaxed" style={{ color: "#C9C9C9" }}>{p.text}</p>
              </motion.div>
            ))}
          </div>
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
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,4.5vw,3rem)] font-bold text-white tracking-tight mb-6">Transform Your Energy Operations with SAP</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .2 }} className="text-[1.05rem] leading-relaxed mb-10" style={{ color: "#C9C9C9" }}>Partner with Kannanware to modernize energy finance and operations through intelligent SAP-powered solutions.</motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .3 }} className="flex flex-wrap justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm text-black transition-all hover:scale-105" style={{ background: "#F4B400", boxShadow: "0 0 40px rgba(244,180,0,.3)" }}>Schedule a Consultation <ArrowRight size={16} /></a>
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm text-white border transition-all hover:bg-white/5" style={{ borderColor: "rgba(244,180,0,.3)" }}>Contact Our Experts</a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function EnergyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0B0B0B", fontFamily: "'Ubuntu', sans-serif" }}>
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <ChallengesSection />
      <ValueChain />
      <CapabilitiesSection />
      <TechArchitecture />
      <BusinessImpact />
      <TransformationStory />
      <CTASection />
      <Footer />
    </div>
  );
}
