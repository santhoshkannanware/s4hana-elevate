import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, UserCheck, Clock, Briefcase, ShieldCheck, Target, ChevronRight, Building2, Zap, Factory, Film, Search, Handshake, BarChart3, Layers, Globe, Puzzle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [.22, 1, .36, 1] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const HERO_IMG = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80";
const OVERVIEW_IMG = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80";
const ROADMAP_IMG = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80";
const INDUSTRY_IMG = "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80";
const CTA_IMG = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80";

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden" style={{ background: "#0B0B0B" }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#F4B400 1px, transparent 1px), linear-gradient(90deg, #F4B400 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center py-24">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-5" style={{ color: "#F4B400" }}>Transformation Services — Experts as a Service</motion.span>
          <motion.h1 variants={fadeUp} className="text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.08] tracking-tight text-white mb-6">
            On-Demand SAP Expertise, <span style={{ color: "#F4B400" }}>When You Need It</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[1.05rem] leading-relaxed mb-8" style={{ color: "#C9C9C9" }}>
            Access Kannanware's bench of certified SAP professionals — functional consultants, architects, developers, and analysts — on a flexible engagement model tailored to your project needs.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a href="#cta" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-black transition-all hover:scale-105" style={{ background: "#F4B400" }}>Request Experts <ArrowRight size={16} /></a>
            <a href="#capabilities" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white border transition-all hover:bg-white/5" style={{ borderColor: "rgba(244,180,0,.35)" }}>How It Works</a>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: .3 }} className="relative hidden lg:block">
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(244,180,0,.12)" }}>
            <motion.img src={HERO_IMG} alt="Expert consultants in a planning session" className="w-full h-[480px] object-cover" animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
            <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(11,11,11,.4) 0%, transparent 60%)" }} />
          </div>
          <div className="absolute -inset-10 rounded-full blur-[100px] -z-10" style={{ background: "radial-gradient(circle, rgba(244,180,0,.08) 0%, transparent 70%)" }} />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Overview ─── */
function OverviewSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: .8 }} className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(244,180,0,.12)" }}>
          <img src={OVERVIEW_IMG} alt="SAP experts collaborating" className="w-full h-[400px] object-cover" />
        </motion.div>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}>
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Flexible Expertise</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight mb-6">The Right Expert, Right When You Need Them</motion.h2>
          <motion.p variants={fadeUp} className="text-[1rem] leading-relaxed mb-4" style={{ color: "#C9C9C9" }}>
            Whether you need to augment an existing team, fill a critical skills gap, or bring in specialist knowledge for a specific phase, Kannanware's EaaS model delivers vetted SAP professionals who integrate seamlessly into your programs.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[.92rem] leading-relaxed" style={{ color: "#999" }}>
            Our experts bring real-world project experience across S/4HANA, BTP, Group Reporting, Analytics Cloud, and more — so you get productive expertise from day one, not a learning curve.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Capabilities ─── */
function CapabilitiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<number | null>(null);
  const capabilities = [
    { icon: Users, title: "Team Augmentation", desc: "Scale your SAP delivery team with experienced functional and technical consultants embedded directly into your project." },
    { icon: UserCheck, title: "Specialist Roles", desc: "Access niche expertise — solution architects, ABAP developers, Fiori specialists, data migration leads, and test managers." },
    { icon: Clock, title: "Flexible Engagement Models", desc: "Choose from time & materials, fixed-term contracts, or outcome-based engagements tailored to your budget and timeline." },
    { icon: Puzzle, title: "Managed Delivery Teams", desc: "Engage complete, self-managed squads with built-in project management, QA, and delivery governance." },
    { icon: Globe, title: "Global Delivery Capability", desc: "Leverage onshore, nearshore, and offshore experts to optimize cost and coverage across time zones." },
  ];

  return (
    <section id="capabilities" ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#0B0B0B" }}>
      <div className="max-w-[1100px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>What We Offer</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">EaaS Capabilities</motion.h2>
        </motion.div>
        <div className="space-y-4">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: .6, delay: i * .12 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative rounded-xl border p-6 md:p-8 flex items-start gap-6 transition-all duration-300 cursor-default"
              style={{
                borderColor: hovered === i ? "rgba(244,180,0,.4)" : "rgba(244,180,0,.08)",
                background: hovered === i ? "rgba(244,180,0,.04)" : "rgba(255,255,255,.015)",
              }}
            >
              <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300" style={{ background: hovered === i ? "rgba(244,180,0,.15)" : "rgba(244,180,0,.06)" }}>
                <c.icon size={22} style={{ color: "#F4B400" }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#aaa" }}>{c.desc}</p>
              </div>
              <motion.div className="absolute right-6 top-1/2 -translate-y-1/2" animate={{ x: hovered === i ? 0 : -8, opacity: hovered === i ? 1 : 0 }} transition={{ duration: .25 }}>
                <ChevronRight size={18} style={{ color: "#F4B400" }} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Engagement Process (animated pipeline) ─── */
function EngagementProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const steps = [
    { icon: Search, label: "Requirement Scoping", desc: "We work with your team to understand skill requirements, project context, timeline, and engagement preferences." },
    { icon: UserCheck, label: "Expert Matching", desc: "We shortlist pre-vetted SAP professionals from our talent network based on module expertise, industry experience, and cultural fit." },
    { icon: Handshake, label: "Onboarding", desc: "Selected experts are onboarded with project context, access setup, and integration into your team's workflows and ceremonies." },
    { icon: BarChart3, label: "Delivery & Oversight", desc: "Kannanware provides ongoing performance management, quality oversight, and regular check-ins to ensure delivery standards." },
    { icon: Target, label: "Review & Optimize", desc: "Periodic reviews assess outcomes, adjust team composition, and ensure alignment with evolving project needs." },
  ];

  useEffect(() => {
    if (!inView || paused) return;
    const t = setInterval(() => setActiveIdx(p => (p + 1) % steps.length), 4000);
    return () => clearInterval(t);
  }, [inView, paused, steps.length]);

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>How It Works</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">EaaS Engagement Process</motion.h2>
        </motion.div>

        <div className="hidden md:block relative mb-12">
          <div className="absolute top-8 left-[10%] right-[10%] h-[2px]" style={{ background: "rgba(244,180,0,.1)" }}>
            <motion.div className="h-full" style={{ background: "#F4B400", transformOrigin: "left" }} animate={{ scaleX: (activeIdx + 1) / steps.length }} transition={{ duration: .6, ease: "easeInOut" }} />
          </div>
          <div className="flex justify-between relative z-10">
            {steps.map((s, i) => {
              const active = i === activeIdx;
              const done = i < activeIdx;
              return (
                <motion.div key={s.label} className="flex flex-col items-center cursor-pointer" style={{ width: `${100 / steps.length}%` }} onMouseEnter={() => { setPaused(true); setActiveIdx(i); }} onMouseLeave={() => setPaused(false)} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * .1 }}>
                  <motion.div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 border-2" style={{ borderColor: active ? "#F4B400" : done ? "rgba(244,180,0,.4)" : "rgba(244,180,0,.1)", background: active ? "rgba(244,180,0,.15)" : "rgba(244,180,0,.03)", boxShadow: active ? "0 0 30px rgba(244,180,0,.2)" : "none" }} animate={active ? { scale: [1, 1.08, 1] } : { scale: 1 }} transition={{ duration: 2, repeat: active ? Infinity : 0, ease: "easeInOut" }}>
                    <s.icon size={22} style={{ color: active ? "#F4B400" : done ? "rgba(244,180,0,.6)" : "rgba(244,180,0,.3)" }} />
                  </motion.div>
                  <span className="text-sm font-semibold text-center" style={{ color: active ? "#F4B400" : done ? "rgba(255,255,255,.7)" : "rgba(255,255,255,.4)" }}>{s.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="md:hidden space-y-3 mb-10">
          {steps.map((s, i) => (
            <motion.div key={s.label} className="flex items-center gap-4 p-4 rounded-xl border cursor-pointer" style={{ borderColor: i === activeIdx ? "rgba(244,180,0,.4)" : "rgba(244,180,0,.08)", background: i === activeIdx ? "rgba(244,180,0,.05)" : "transparent" }} onClick={() => { setActiveIdx(i); setPaused(true); }} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * .08 }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: i === activeIdx ? "rgba(244,180,0,.15)" : "rgba(244,180,0,.05)" }}>
                <s.icon size={18} style={{ color: "#F4B400" }} />
              </div>
              <span className="text-sm font-semibold" style={{ color: i === activeIdx ? "#F4B400" : "#aaa" }}>{s.label}</span>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeIdx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: .4 }} className="rounded-xl border p-8 md:p-10" style={{ borderColor: "rgba(244,180,0,.12)", background: "rgba(244,180,0,.03)" }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[.2em] uppercase" style={{ color: "#F4B400" }}>Step {activeIdx + 1}</span>
              <span className="text-white font-semibold text-lg">— {steps[activeIdx].label}</span>
            </div>
            <p className="text-[.95rem] leading-relaxed max-w-2xl" style={{ color: "#bbb" }}>{steps[activeIdx].desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─── Expertise Roadmap ─── */
function RoadmapSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const phases = [
    { label: "Skills Assessment", desc: "Map required competencies against your SAP landscape and project demands." },
    { label: "Talent Sourcing", desc: "Tap into Kannanware's vetted network of SAP-certified consultants and specialists." },
    { label: "Team Integration", desc: "Embed experts into your project teams with full context, tooling, and governance." },
    { label: "Performance Tracking", desc: "Monitor delivery quality through KPIs, feedback loops, and regular reviews." },
    { label: "Knowledge Transfer", desc: "Ensure continuity through documentation, shadowing, and structured handovers." },
  ];

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#0B0B0B" }}>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}>
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Talent Journey</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight mb-10">Expertise Delivery Roadmap</motion.h2>
          <div className="space-y-0">
            {phases.map((p, i) => (
              <motion.div key={p.label} variants={fadeUp} className="relative pl-10 pb-8 last:pb-0">
                {i < phases.length - 1 && <div className="absolute left-[11px] top-6 bottom-0 w-[2px]" style={{ background: "rgba(244,180,0,.15)" }} />}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: "#F4B400", background: "#0B0B0B" }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#F4B400" }} />
                </div>
                <h4 className="text-white font-semibold mb-1">{p.label}</h4>
                <p className="text-sm" style={{ color: "#999" }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: .8 }} className="hidden lg:block rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(244,180,0,.12)" }}>
          <img src={ROADMAP_IMG} alt="Expert team planning" className="w-full h-[480px] object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Industry Focus ─── */
function IndustryFocus() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const industries = [
    { icon: Building2, label: "Financial Services", desc: "SAP finance and risk experts for banking, insurance, and investment management programs." },
    { icon: Zap, label: "Energy & Utilities", desc: "Specialists in SAP IS-U, asset management, and commodity trading for energy enterprises." },
    { icon: Factory, label: "Manufacturing", desc: "Production planning, logistics, and quality management experts for manufacturing SAP rollouts." },
    { icon: Film, label: "Media & Services", desc: "Revenue management, subscription billing, and BTP specialists for media and services companies." },
  ];

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: .8 }} className="hidden lg:block rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(244,180,0,.12)" }}>
          <img src={INDUSTRY_IMG} alt="Enterprise consulting team" className="w-full h-[420px] object-cover" />
        </motion.div>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}>
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Industry Expertise</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-white tracking-tight mb-8">Experts Across Industries</motion.h2>
          <div className="space-y-5">
            {industries.map((ind) => (
              <motion.div key={ind.label} variants={fadeUp} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(244,180,0,.08)" }}>
                  <ind.icon size={18} style={{ color: "#F4B400" }} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">{ind.label}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: "#999" }}>{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="cta" ref={ref} className="relative py-32 px-6 md:px-10 overflow-hidden" style={{ background: "#0B0B0B" }}>
      <div className="absolute inset-0">
        <img src={CTA_IMG} alt="Strategy discussion" className="w-full h-full object-cover opacity-[0.12]" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0B0B0B 10%, transparent 50%, #0B0B0B 100%)" }} />
      </div>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .8 }} className="relative z-10 max-w-[720px] mx-auto text-center">
        <span className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Get Started</span>
        <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold text-white tracking-tight mb-6">Access SAP Expertise On Demand</h2>
        <p className="text-[1rem] leading-relaxed mb-10" style={{ color: "#bbb" }}>
          Scale your SAP delivery with Kannanware's certified experts — flexible, vetted, and ready to deliver from day one.
        </p>
        <motion.a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm text-black" style={{ background: "#F4B400" }} whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(244,180,0,.35)" }} transition={{ duration: .25 }}>
          Request Experts <ArrowRight size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}

export default function EaaSPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="bg-background text-foreground font-['Ubuntu',sans-serif]" style={{ cursor: "none" }}>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <CapabilitiesSection />
        <EngagementProcess />
        <RoadmapSection />
        <IndustryFocus />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
