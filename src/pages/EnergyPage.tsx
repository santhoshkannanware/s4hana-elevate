import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingDown, Building2, ShieldCheck, Gauge, Flame, Wrench, Network, DollarSign, BarChart3, Clock, Eye, Brain, Target, Zap, FileCheck, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { useRegion } from "@/contexts/RegionContext";
import { getEnergyContent } from "@/data/regionContent";
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
  const { region } = useRegion();
  const c = getEnergyContent(region);
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden" style={{ background: "#0B0B0B" }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#F4B400 1px, transparent 1px), linear-gradient(90deg, #F4B400 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center py-24">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-5" style={{ color: "#F4B400" }}>{c.hero.eyebrow}</motion.span>
          <motion.h1 variants={fadeUp} className="text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.08] tracking-tight text-white mb-6">
            {c.hero.headline} <span style={{ color: "#F4B400" }}>{c.hero.headlineAccent}</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[1.05rem] leading-relaxed mb-4" style={{ color: "#C9C9C9" }}>{c.hero.desc1}</motion.p>
          <motion.p variants={fadeUp} className="text-[.92rem] leading-relaxed mb-8" style={{ color: "#999" }}>{c.hero.desc2}</motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a href="#cta" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-black transition-all hover:scale-105" style={{ background: "#F4B400" }}>{c.hero.cta1} <ArrowRight size={16} /></a>
            <a href="#solutions" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white border transition-all hover:bg-white/5" style={{ borderColor: "rgba(244,180,0,.35)" }}>{c.hero.cta2}</a>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: .3 }} className="relative hidden lg:block">
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(244,180,0,.12)" }}>
            <motion.img src={heroImg} alt="Energy infrastructure" className="w-full h-[480px] object-cover" animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
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
  const { region } = useRegion();
  const c = getEnergyContent(region);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const challengeIcons = [TrendingDown, Building2, ShieldCheck, Gauge];

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1100px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Industry Challenges</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Key Challenges in the Energy Sector</motion.h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {c.challenges.map((ch, i) => {
            const Icon = challengeIcons[i];
            return (
              <motion.div key={ch.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .12, duration: .6 }}
                className="group rounded-xl p-7 border transition-all hover:border-[rgba(244,180,0,.3)]" style={{ background: "rgba(255,255,255,.02)", borderColor: "rgba(255,255,255,.06)" }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-shadow group-hover:shadow-[0_0_24px_rgba(244,180,0,.25)]" style={{ background: "rgba(244,180,0,.1)" }}>
                  <Icon size={22} style={{ color: "#F4B400" }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F4B400] transition-colors">{ch.title}</h3>
                <p className="text-[.9rem] leading-relaxed" style={{ color: "#C9C9C9" }}>{ch.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: Value Chain ─── */
function ValueChain() {
  const { region } = useRegion();
  const c = getEnergyContent(region);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIdx, setActiveIdx] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const DURATION = 4000;
  const stepIcons = [Flame, Wrench, Network, DollarSign, BarChart3];
  const accents = ["#F4B400", "#FFD54F", "#FFA726", "#FFB74D", "#FFCA28"];
  const steps = c.valueChain.map((s, i) => ({ ...s, icon: stepIcons[i], accent: accents[i], num: String(i + 1).padStart(2, "0") }));

  useEffect(() => {
    if (!inView || hovered !== null) return;
    const timer = setInterval(() => setActiveIdx(prev => (prev + 1) % steps.length), DURATION);
    return () => clearInterval(timer);
  }, [inView, hovered, steps.length]);

  return (
    <section ref={ref} className="py-32 px-6 md:px-10 overflow-hidden" style={{ background: "#0B0B0B" }}>
      <div className="max-w-[1300px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-20">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>End-to-End Process</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight mb-3">The Energy Value Chain</motion.h2>
          <motion.p variants={fadeUp} className="text-sm" style={{ color: "#999" }}>Hover any stage to explore • Auto-cycles through the full lifecycle</motion.p>
        </motion.div>

        <div className="relative mb-16">
          <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 1.5, ease: "easeOut" }}
            className="hidden md:block absolute top-[44px] left-[8%] right-[8%] h-[3px] origin-left rounded-full" style={{ background: "rgba(244,180,0,.08)" }} />
          <motion.div className="hidden md:block absolute top-[44px] left-[8%] h-[3px] rounded-full origin-left"
            animate={{ width: `${(activeIdx / (steps.length - 1)) * 84}%` }} transition={{ duration: .6, ease: [.22, 1, .36, 1] }}
            style={{ background: "linear-gradient(90deg, #F4B400, #FFD54F)", boxShadow: "0 0 20px rgba(244,180,0,.3)" }} />

          <div className="relative flex flex-col md:flex-row items-start md:items-start justify-between gap-8 md:gap-0">
            {steps.map((s, i) => {
              const isActive = activeIdx === i;
              const isHover = hovered === i;
              const highlight = isActive || isHover;
              return (
                <motion.div key={s.title} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: .3 + i * .1, duration: .7, ease: [.22, 1, .36, 1] }}
                  className="relative flex-1 flex flex-col items-center text-center cursor-pointer z-10"
                  onMouseEnter={() => { setHovered(i); setActiveIdx(i); }} onMouseLeave={() => setHovered(null)}>
                  <motion.div animate={{ scale: highlight ? 1 : 0, opacity: highlight ? 1 : 0 }} transition={{ duration: .4 }}
                    className="absolute top-0 w-[88px] h-[88px] rounded-full" style={{ background: `radial-gradient(circle, ${s.accent}20, transparent 70%)`, filter: "blur(12px)" }} />
                  <motion.div animate={{ scale: highlight ? 1.12 : 1, borderColor: highlight ? s.accent : "rgba(244,180,0,.15)", background: highlight ? `${s.accent}25` : "rgba(244,180,0,.04)" }}
                    transition={{ duration: .35, ease: "easeOut" }} className="relative w-[88px] h-[88px] rounded-full flex flex-col items-center justify-center mb-5 border-2"
                    style={{ boxShadow: highlight ? `0 0 40px ${s.accent}30, inset 0 0 20px ${s.accent}10` : "none" }}>
                    <motion.div animate={{ rotate: highlight ? 360 : 0 }} transition={{ duration: .6, ease: "easeOut" }}>
                      <s.icon size={26} style={{ color: highlight ? s.accent : "rgba(255,255,255,.35)" }} />
                    </motion.div>
                    <span className="text-[.55rem] font-bold tracking-wider mt-1" style={{ color: highlight ? s.accent : "rgba(255,255,255,.2)" }}>{s.num}</span>
                  </motion.div>
                  <motion.h3 animate={{ color: highlight ? s.accent : "rgba(255,255,255,.8)" }} className="text-[.82rem] font-bold leading-tight max-w-[140px]">{s.title}</motion.h3>
                  {isActive && (
                    <motion.div className="h-[2px] w-16 rounded-full mt-3 overflow-hidden" style={{ background: "rgba(255,255,255,.06)" }}>
                      <motion.div key={`bar-${i}`} initial={{ width: "0%" }} animate={{ width: "100%" }}
                        transition={{ duration: hovered !== null ? 99999 : DURATION / 1000, ease: "linear" }} className="h-full rounded-full" style={{ background: s.accent }} />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeIdx} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: .5, ease: [.22, 1, .36, 1] }} className="rounded-2xl border overflow-hidden" style={{ background: "rgba(255,255,255,.02)", borderColor: `${steps[activeIdx].accent}20` }}>
            <div className="grid md:grid-cols-[auto_1fr] items-center">
              <div className="hidden md:block w-1.5 self-stretch" style={{ background: `linear-gradient(to bottom, ${steps[activeIdx].accent}, transparent)` }} />
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${steps[activeIdx].accent}15`, border: `1px solid ${steps[activeIdx].accent}30` }}>
                    {(() => { const Icon = steps[activeIdx].icon; return <Icon size={22} style={{ color: steps[activeIdx].accent }} />; })()}
                  </div>
                  <div>
                    <span className="text-[.6rem] font-bold tracking-[.2em] uppercase" style={{ color: steps[activeIdx].accent }}>Phase {steps[activeIdx].num}</span>
                    <h3 className="text-xl font-bold text-white leading-tight">{steps[activeIdx].title}</h3>
                  </div>
                </div>
                <p className="text-[.95rem] leading-[1.85] max-w-2xl" style={{ color: "#C9C9C9" }}>{steps[activeIdx].desc}</p>
                <div className="flex items-center gap-3 mt-6">
                  <span className="text-[.7rem] font-semibold" style={{ color: steps[activeIdx].accent }}>SAP-Powered Transformation</span>
                  <div className="flex-1 h-px" style={{ background: `${steps[activeIdx].accent}20` }} />
                  <div className="flex gap-1.5">
                    {steps.map((_, i) => (
                      <button key={i} onClick={() => { setActiveIdx(i); setHovered(i); setTimeout(() => setHovered(null), 100); }}
                        className="w-2 h-2 rounded-full transition-all"
                        style={{ background: i === activeIdx ? steps[activeIdx].accent : "rgba(255,255,255,.15)", boxShadow: i === activeIdx ? `0 0 8px ${steps[activeIdx].accent}60` : "none" }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─── Section 4: Capabilities ─── */
function CapabilitiesSection() {
  const { region } = useRegion();
  const c = getEnergyContent(region);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const capIcons = [DollarSign, Eye, BarChart3, ShieldCheck];

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Our Expertise</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Driving Digital Transformation for Energy Enterprises</motion.h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: .7 }} className="relative rounded-2xl overflow-hidden">
            <img src={consultingImg} alt="Energy consulting" className="w-full h-[420px] object-cover rounded-2xl" />
            <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(to top, rgba(11,11,11,.6) 0%, transparent 50%)" }} />
          </motion.div>
          <div className="space-y-6">
            {c.capabilities.map((cap, i) => {
              const Icon = capIcons[i];
              return (
                <motion.div key={cap.title} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .1, duration: .5 }}
                  className="group flex gap-5 items-start p-5 rounded-xl border transition-all hover:border-[rgba(244,180,0,.3)]" style={{ background: "rgba(255,255,255,.02)", borderColor: "rgba(255,255,255,.06)" }}>
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-shadow group-hover:shadow-[0_0_20px_rgba(244,180,0,.25)]" style={{ background: "rgba(244,180,0,.1)" }}>
                    <Icon size={20} style={{ color: "#F4B400" }} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#F4B400] transition-colors">{cap.title}</h3>
                    <p className="text-[.85rem] leading-relaxed" style={{ color: "#C9C9C9" }}>{cap.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5: SAP Architecture ─── */
function TechArchitecture() {
  const { region } = useRegion();
  const c = getEnergyContent(region);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const animRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const colors = ["#F4B400", "#FFD54F", "#FFA726", "#FFB74D"];
  const nodes = c.archNodes.map((n, i) => ({ ...n, color: colors[i] }));

  useEffect(() => {
    if (!inView) return;
    const animate = () => { if (!pausedRef.current) setRotation(prev => prev + 0.15); animRef.current = requestAnimationFrame(animate); };
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
                    className="absolute z-20 cursor-pointer" style={{ left: `calc(50% + ${x}px - 38px)`, top: `calc(50% + ${y}px - 38px)`, transition: "left 0.05s linear, top 0.05s linear" }}
                    onClick={() => setSelected(isSelected ? null : i)}>
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
  const { region } = useRegion();
  const c = getEnergyContent(region);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const impactIcons = [Clock, Eye, Brain, Target];

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-20">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Results</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Business Outcomes for Energy Companies</motion.h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {c.impact.map((b, i) => {
            const Icon = impactIcons[i];
            return (
              <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1, duration: .6 }}
                className="group rounded-xl p-8 border transition-all hover:border-[rgba(244,180,0,.3)]" style={{ background: "rgba(255,255,255,.02)", borderColor: "rgba(255,255,255,.06)" }}>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-shadow group-hover:shadow-[0_0_24px_rgba(244,180,0,.25)]" style={{ background: "rgba(244,180,0,.1)" }}>
                    <Icon size={22} style={{ color: "#F4B400" }} />
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 7: Transformation Story ─── */
function TransformationStory() {
  const { region } = useRegion();
  const c = getEnergyContent(region);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const panels = [
    { label: "Challenge", color: "rgba(244,180,0,.08)", border: "rgba(244,180,0,.15)", text: c.story.challenge },
    { label: "Solution", color: "rgba(244,180,0,.12)", border: "rgba(244,180,0,.25)", text: c.story.solution },
    { label: "Outcome", color: "rgba(244,180,0,.06)", border: "rgba(244,180,0,.2)", text: c.story.outcome },
  ];

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#0B0B0B" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Case Study</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Energy Finance Transformation</motion.h2>
        </motion.div>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: .7 }} className="rounded-2xl overflow-hidden">
            <img src={transformImg} alt="Energy transformation" className="w-full h-[380px] object-cover rounded-2xl" />
          </motion.div>
          <div className="space-y-5">
            {panels.map((p, i) => (
              <motion.div key={p.label} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .15, duration: .6 }}
                className="rounded-xl p-6 border" style={{ background: p.color, borderColor: p.border }}>
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
  const { region } = useRegion();
  const c = getEnergyContent(region);
  return (
    <section id="cta" className="relative py-28 px-6 md:px-10 overflow-hidden" style={{ background: "#0B0B0B" }}>
      <div className="absolute inset-0 flex items-center justify-center"><div className="w-[600px] h-[600px] rounded-full blur-[160px]" style={{ background: "radial-gradient(circle, rgba(244,180,0,.08), transparent 70%)" }} /></div>
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-5" style={{ color: "#F4B400" }}>{c.cta.eyebrow}</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(1.8rem,4.5vw,3rem)] font-bold text-white tracking-tight mb-6">{c.cta.headline}</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .2 }} className="text-[1.05rem] leading-relaxed mb-10" style={{ color: "#C9C9C9" }}>{c.cta.desc}</motion.p>
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
