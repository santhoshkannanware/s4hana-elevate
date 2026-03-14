import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Settings, Code, TestTube, Rocket, ShieldCheck, Users, GitBranch, Monitor, Layers, CheckCircle, Clock, Target, ChevronRight, Building2, Zap, Factory, Film, Cog, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [.22, 1, .36, 1] as [number, number, number, number] } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const HERO_IMG = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80";
const OVERVIEW_IMG = "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80";
const ROADMAP_IMG = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80";
const INDUSTRY_IMG = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80";
const CTA_IMG = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80";

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden" style={{ background: "#0B0B0B" }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#F4B400 1px, transparent 1px), linear-gradient(90deg, #F4B400 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center py-24">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-5" style={{ color: "#F4B400" }}>Transformation Services — Execution</motion.span>
          <motion.h1 variants={fadeUp} className="text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.08] tracking-tight text-white mb-6">
            SAP Implementation & Execution <span style={{ color: "#F4B400" }}>Excellence</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[1.05rem] leading-relaxed mb-8" style={{ color: "#C9C9C9" }}>
            Kannanware delivers end-to-end SAP implementation services — from system design and configuration to testing, migration, and go-live — ensuring on-time, on-budget enterprise transformations.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a href="#cta" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-black transition-all hover:scale-105" style={{ background: "#F4B400" }}>Start a Project <ArrowRight size={16} /></a>
            <a href="#capabilities" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white border transition-all hover:bg-white/5" style={{ borderColor: "rgba(244,180,0,.35)" }}>Our Methodology</a>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: .3 }} className="relative hidden lg:block">
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(244,180,0,.12)" }}>
            <motion.img src={HERO_IMG} alt="Technology team collaborating on implementation" className="w-full h-[480px] object-cover" animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
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
          <img src={OVERVIEW_IMG} alt="Team working on system implementation" className="w-full h-[400px] object-cover" />
        </motion.div>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}>
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Execution That Delivers</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight mb-6">From Blueprint to Business Value</motion.h2>
          <motion.p variants={fadeUp} className="text-[1rem] leading-relaxed mb-4" style={{ color: "#C9C9C9" }}>
            Great strategy means nothing without flawless execution. Kannanware's delivery teams bring deep SAP functional and technical expertise to every implementation — managing complexity, mitigating risk, and driving adoption from day one.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[.92rem] leading-relaxed" style={{ color: "#999" }}>
            Our proven methodology ensures that every workstream — from finance to supply chain — is configured, tested, and deployed with precision, quality gates, and stakeholder alignment at every stage.
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
    { icon: Settings, title: "System Design & Configuration", desc: "Configure SAP S/4HANA modules to match your target operating model — finance, procurement, manufacturing, and beyond." },
    { icon: GitBranch, title: "Data Migration & Integration", desc: "Plan and execute data migration strategies with cleansing, mapping, and validation across legacy systems." },
    { icon: TestTube, title: "Testing & Quality Assurance", desc: "End-to-end testing including unit, integration, UAT, and regression testing with automated test frameworks." },
    { icon: Rocket, title: "Go-Live & Hypercare", desc: "Manage cutover planning, go-live execution, and post-launch hypercare to ensure a smooth transition." },
    { icon: RefreshCw, title: "Change Management & Training", desc: "Drive user adoption through structured change management, role-based training, and communication strategies." },
  ];

  return (
    <section id="capabilities" ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#0B0B0B" }}>
      <div className="max-w-[1100px] mx-auto">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>What We Deliver</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Execution Capabilities</motion.h2>
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
              <motion.div
                className="absolute right-6 top-1/2 -translate-y-1/2"
                animate={{ x: hovered === i ? 0 : -8, opacity: hovered === i ? 1 : 0 }}
                transition={{ duration: .25 }}
              >
                <ChevronRight size={18} style={{ color: "#F4B400" }} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Delivery Model (animated pipeline) ─── */
function DeliveryPipeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const steps = [
    { icon: Layers, label: "Prepare", desc: "Establish project governance, onboard the team, set up environments, and finalize scope, timelines, and delivery approach." },
    { icon: Cog, label: "Explore & Configure", desc: "Conduct fit-gap workshops, configure SAP modules, design integrations, and build custom extensions on BTP." },
    { icon: TestTube, label: "Test", desc: "Execute comprehensive testing cycles — SIT, UAT, performance, and regression — to validate all business scenarios." },
    { icon: Code, label: "Migrate & Deploy", desc: "Run data migration, perform cutover rehearsals, and deploy the solution to production with zero-downtime strategies." },
    { icon: Monitor, label: "Go-Live & Stabilize", desc: "Launch the system, provide 24/7 hypercare support, resolve issues in real-time, and transition to steady-state operations." },
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
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Delivery Methodology</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight">Implementation Lifecycle</motion.h2>
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
                  <span className="text-sm font-semibold" style={{ color: active ? "#F4B400" : done ? "rgba(255,255,255,.7)" : "rgba(255,255,255,.4)" }}>{s.label}</span>
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
              <span className="text-xs font-bold tracking-[.2em] uppercase" style={{ color: "#F4B400" }}>Phase {activeIdx + 1}</span>
              <span className="text-white font-semibold text-lg">— {steps[activeIdx].label}</span>
            </div>
            <p className="text-[.95rem] leading-relaxed max-w-2xl" style={{ color: "#bbb" }}>{steps[activeIdx].desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─── Delivery Roadmap ─── */
function RoadmapSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const phases = [
    { label: "Project Mobilization", desc: "Team onboarding, environment provisioning, and governance framework setup." },
    { label: "Solution Design", desc: "Detailed design of SAP configuration, integrations, data model, and extensions." },
    { label: "Build & Configure", desc: "System configuration, RICEFW development, and integration build sprints." },
    { label: "Testing & Validation", desc: "Multi-cycle testing with defect resolution, performance tuning, and user sign-off." },
    { label: "Go-Live & Hypercare", desc: "Cutover execution, production launch, real-time monitoring, and post-go-live stabilization." },
  ];

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#0B0B0B" }}>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}>
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Delivery Timeline</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-tight mb-10">Execution Roadmap</motion.h2>
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
          <img src={ROADMAP_IMG} alt="Project delivery planning session" className="w-full h-[480px] object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Industry Execution ─── */
function IndustryExecution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const industries = [
    { icon: Building2, label: "Financial Services", desc: "SAP implementations for banking, insurance, and capital markets with regulatory compliance built in." },
    { icon: Zap, label: "Energy & Utilities", desc: "Complex deployments for energy companies with asset management, commodity trading, and IFRS compliance." },
    { icon: Factory, label: "Manufacturing", desc: "End-to-end SAP rollouts for discrete and process manufacturing across production, logistics, and finance." },
    { icon: Film, label: "Media & Technology", desc: "Agile SAP implementations for media companies managing content, subscriptions, and revenue models." },
  ];

  return (
    <section ref={ref} className="py-28 px-6 md:px-10" style={{ background: "#111111" }}>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: .8 }} className="hidden lg:block rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(244,180,0,.12)" }}>
          <img src={INDUSTRY_IMG} alt="Enterprise delivery team" className="w-full h-[420px] object-cover" />
        </motion.div>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}>
          <motion.span variants={fadeUp} className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Cross-Industry Delivery</motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-white tracking-tight mb-8">Industry Execution</motion.h2>
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
        <img src={CTA_IMG} alt="Business strategy discussion" className="w-full h-full object-cover opacity-[0.12]" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0B0B0B 10%, transparent 50%, #0B0B0B 100%)" }} />
      </div>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .8 }} className="relative z-10 max-w-[720px] mx-auto text-center">
        <span className="inline-block text-[.7rem] font-bold tracking-[.25em] uppercase mb-4" style={{ color: "#F4B400" }}>Get Started</span>
        <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold text-white tracking-tight mb-6">Launch Your SAP Transformation</h2>
        <p className="text-[1rem] leading-relaxed mb-10" style={{ color: "#bbb" }}>
          Partner with Kannanware to deliver your SAP implementation with precision, speed, and enterprise-grade quality.
        </p>
        <motion.a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm text-black" style={{ background: "#F4B400" }} whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(244,180,0,.35)" }} transition={{ duration: .25 }}>
          Start a Project <ArrowRight size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}

export default function ExecutionPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="bg-background text-foreground font-['Ubuntu',sans-serif]" style={{ cursor: "none" }}>
      
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <CapabilitiesSection />
        <DeliveryPipeline />
        <RoadmapSection />
        <IndustryExecution />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
