import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ExternalLink, Award, Globe, Users, Building2, Handshake, Target, Shield, Zap, ChevronRight } from "lucide-react";
import sapPartnerHero from "@/assets/sap-partner-hero.png";
import sapLogo from "@/assets/sap-logo.png";
import enoah from "@/assets/partners/enoah.png";
import ladera from "@/assets/partners/ladera-technology.png";
import mhh from "@/assets/partners/mhh.png";
import highNoon from "@/assets/partners/high-noon-corp.png";
import gmmco from "@/assets/partners/gmmco.png";
import nttData from "@/assets/partners/ntt-data.png";
import sriGowrish from "@/assets/partners/sri-gowrish.png";
import alghanim from "@/assets/partners/alghanim.png";
import dhaksha from "@/assets/partners/dhaksha.png";
import parrys from "@/assets/partners/parrys.png";
import kwik from "@/assets/partners/kwik.png";
import winomechanic from "@/assets/partners/winomechanic.png";
import jkFenner from "@/assets/partners/jk-fenner.png";

/* ─── Reveal wrapper ─── */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

/* ─── Sub-nav sections ─── */
const SUB_SECTIONS = ["Overview", "SAP Partnership", "Our Partners", "Global Reach", "Why Us"] as const;

function StickySubNav({ active }: { active: string }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="sticky top-[72px] z-40 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto flex justify-center gap-1 px-4 overflow-x-auto scrollbar-hide">
        {SUB_SECTIONS.map((s) => {
          const id = s.toLowerCase().replace(/\s+/g, "-");
          const isActive = active === id;
          return (
            <button key={s} onClick={() => scrollTo(id)} className={`relative px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
              {s}
              {isActive && <motion.div layoutId="sub-biz" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Partners data ─── */
const partners = [
  { src: enoah, name: "eNoah", desc: "Technology services partner enabling digital transformation" },
  { src: ladera, name: "Ladera Technology", desc: "IT consulting and enterprise application services" },
  { src: mhh, name: "MHH", desc: "Trusted industrial solutions partner" },
  { src: highNoon, name: "High Noon Corp", desc: "Enterprise solutions and strategic consulting" },
  { src: gmmco, name: "GMMCO", desc: "Heavy equipment and infrastructure solutions" },
  { src: nttData, name: "NTT Data", desc: "Global IT services and digital transformation" },
  { src: sriGowrish, name: "Sri Gowrish CNC", desc: "Precision manufacturing and CNC solutions" },
  { src: alghanim, name: "Alghanim Industries", desc: "Multi-industry conglomerate across the Middle East" },
  { src: dhaksha, name: "Dhaksha Drones", desc: "Autonomous aerial systems and drone technology" },
  { src: parrys, name: "Parrys", desc: "Diversified industrial group with deep heritage" },
  { src: kwik, name: "KwiK", desc: "Retail and consumer services solutions" },
  { src: winomechanic, name: "Winomechanic", desc: "Industrial automation and mechanical engineering" },
  { src: jkFenner, name: "JK Fenner", desc: "Power transmission and automotive components" },
];

/* ─── Metrics ─── */
const metrics = [
  { value: "15+", label: "Years of SAP Excellence" },
  { value: "200+", label: "SAP Projects Delivered" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "13", label: "Strategic Partners" },
];

const strengths = [
  { icon: Award, title: "SAP Gold Partner", desc: "Recognized by SAP for consistent delivery excellence and deep domain expertise across industries." },
  { icon: Shield, title: "Certified Consultants", desc: "Our team holds 150+ active SAP certifications across S/4HANA, BTP, Analytics, and SuccessFactors." },
  { icon: Globe, title: "Global Delivery", desc: "Offices in India, Middle East, and US with near-shore and offshore delivery capabilities." },
  { icon: Zap, title: "Innovation-Led", desc: "Leveraging SAP BTP, AI, and Joule to deliver future-ready solutions that create lasting competitive advantage." },
];

export default function OurBusinessPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  /* scroll spy */
  const handleScroll = () => {
    const ids = SUB_SECTIONS.map((s) => s.toLowerCase().replace(/\s+/g, "-"));
    for (const id of [...ids].reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 160) {
        setActiveSection(id);
        break;
      }
    }
  };

  return (
    <div className="bg-background text-foreground font-ubuntu" onScroll={handleScroll}>
      <Navbar />

      {/* ─── Hero ─── */}
      <section ref={heroRef} id="overview" className="relative min-h-[70vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <img src={sapPartnerHero} alt="Transformation with Kannanware" className="w-full h-full object-cover" />
        </motion.div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-32">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[.2em] text-primary mb-4">
              <span className="w-8 h-px bg-primary" /> About Our Business
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em] max-w-2xl">
              Transforming Enterprises<br />
              <span className="text-primary">with SAP</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              As a certified SAP Partner, we deliver end-to-end digital transformation — from strategy to execution — empowering businesses to thrive in the intelligent enterprise era.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="https://partnerfinder.sap.com/profile/0002787368" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold rounded-sm hover:brightness-110 transition">
                View SAP Partner Profile <ExternalLink className="w-4 h-4" />
              </a>
              <button onClick={() => document.getElementById("our-partners")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold rounded-sm hover:bg-secondary transition">
                Our Partners <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <StickySubNav active={activeSection} />

      {/* ─── Metrics Band ─── */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.1} className="text-center">
              <span className="block text-[clamp(2rem,4vw,3.5rem)] font-bold text-primary leading-none">{m.value}</span>
              <span className="text-sm text-muted-foreground tracking-widest uppercase mt-2 block">{m.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── SAP Partnership Highlight ─── */}
      <section id="sap-partnership" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[.2em] text-primary mb-4">
              <span className="w-8 h-px bg-primary" /> SAP Partnership
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em]">
              Certified SAP Partner
            </h2>
          </Reveal>

          <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
            <Reveal delay={0.1}>
              <div className="relative">
                <a href="https://partnerfinder.sap.com/profile/0002787368" target="_blank" rel="noopener noreferrer" className="group block relative overflow-hidden rounded-sm border-2 border-primary/30 hover:border-primary transition-colors">
                  <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" /> SAP Certified Partner
                  </div>
                  <img src={sapPartnerHero} alt="Kannanware SAP Partner" className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                    <div className="flex items-center gap-3">
                      <img src={sapLogo} alt="SAP" className="h-8 w-auto" />
                      <div>
                        <p className="text-sm font-semibold">Kannanware® on SAP Partner Finder</p>
                        <p className="text-xs text-muted-foreground">partnerfinder.sap.com</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-primary ml-auto opacity-0 group-hover:opacity-100 transition" />
                    </div>
                  </div>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Kannanware is a recognized SAP Partner, listed on the official SAP Partner Finder. Our partnership reflects years of proven delivery, deep technical expertise, and a commitment to helping enterprises unlock the full potential of SAP solutions.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {strengths.map((s, i) => (
                    <motion.div key={s.title} className="bg-card border border-border rounded-sm p-5 hover:border-primary/40 transition-colors" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                      <s.icon className="w-5 h-5 text-primary mb-3" />
                      <h4 className="font-semibold text-sm mb-1">{s.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                    </motion.div>
                  ))}
                </div>
                <a href="https://partnerfinder.sap.com/profile/0002787368" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline">
                  Verify on SAP Partner Finder <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Our Partners ─── */}
      <section id="our-partners" className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[.2em] text-primary mb-4">
              <span className="w-8 h-px bg-primary" /> Our Partners
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em]">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
              We collaborate with visionary organizations across industries — from global IT giants to innovative startups — delivering transformative SAP solutions together.
            </p>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <motion.div className="group bg-background border border-border rounded-sm p-8 flex flex-col items-center text-center hover:border-primary/40 transition-all duration-300" whileHover={{ y: -4 }}>
                  <div className="w-full h-20 flex items-center justify-center mb-5">
                    <img src={p.src} alt={p.name} className="max-h-16 max-w-[160px] w-auto object-contain" />
                  </div>
                  <h4 className="font-semibold text-sm">{p.name}</h4>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Global Reach ─── */}
      <section id="global-reach" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[.2em] text-primary mb-4">
              <span className="w-8 h-px bg-primary" /> Global Reach
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em]">
              Delivering Across Continents
            </h2>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { icon: Building2, region: "India", locations: "Chennai · Bangalore · Mumbai", desc: "Our headquarters and primary delivery center, housing our largest team of SAP consultants and developers." },
              { icon: Globe, region: "Middle East", locations: "Dubai · Riyadh · Kuwait", desc: "Growing presence across GCC countries, serving energy, retail, and manufacturing enterprises." },
              { icon: Users, region: "United States", locations: "New Jersey · Texas", desc: "Nearshore delivery hub serving North American clients with local engagement and offshore execution." },
            ].map((r, i) => (
              <Reveal key={r.region} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-sm p-8 h-full hover:border-primary/30 transition-colors">
                  <r.icon className="w-6 h-6 text-primary mb-4" />
                  <h3 className="text-xl font-bold">{r.region}</h3>
                  <p className="text-xs text-primary font-medium tracking-wider uppercase mt-1">{r.locations}</p>
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Us ─── */}
      <section id="why-us" className="py-24 bg-card border-t border-border">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[.2em] text-primary mb-4 justify-center">
              <span className="w-8 h-px bg-primary" /> Why Kannanware
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em]">
              Your Transformation Partner
            </h2>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              We don't just implement SAP — we engineer outcomes. Our methodology combines deep technical expertise with industry knowledge, ensuring every project delivers measurable business value.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="https://partnerfinder.sap.com/profile/0002787368" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold rounded-sm hover:brightness-110 transition">
                SAP Partner Profile <ExternalLink className="w-4 h-4" />
              </a>
              <button onClick={() => window.location.href = "mailto:info@kannanware.com"} className="inline-flex items-center gap-2 border border-border px-8 py-4 text-sm font-semibold rounded-sm hover:bg-secondary transition">
                Contact Us <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />

      {/* Scroll spy listener */}
      <ScrollSpy onUpdate={setActiveSection} />
    </div>
  );
}

/* ─── Scroll Spy ─── */
function ScrollSpy({ onUpdate }: { onUpdate: (id: string) => void }) {
  const ids = SUB_SECTIONS.map((s) => s.toLowerCase().replace(/\s+/g, "-"));

  useEffect(() => {
    const handler = () => {
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) {
          onUpdate(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [ids, onUpdate]);

  return null;
}
