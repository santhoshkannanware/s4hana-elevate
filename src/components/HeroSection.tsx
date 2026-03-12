import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import sapLogo from "@/assets/sap-logo.png";
import { useRegion } from "@/contexts/RegionContext";
import { getHeroContent } from "@/data/regionContent";

const orbitModules = [
  { label: "S/4HANA Finance", sub: "Real-time GL & Close", color: "#E8A000", icon: "M12 2v20M2 12h20M7 7l10 10M17 7l-10 10" },
  { label: "SuccessFactors", sub: "HR & Payroll", color: "#059669", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" },
  { label: "Supply Chain", sub: "EWM & IBP", color: "#6366f1", icon: "M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4M8 2v16M16 6v16" },
  { label: "SAP BTP", sub: "AI & Integration", color: "#E8A000", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
  { label: "Analytics Cloud", sub: "BI & Planning", color: "#ef4444", icon: "M18 20V10M12 20V4M6 20v-6" },
  { label: "SAP Ariba", sub: "Source-to-Pay", color: "#0ea5e9", icon: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" },
  { label: "SAP CX Suite", sub: "Sales & Service", color: "#a855f7", icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" },
  { label: "GROW with SAP", sub: "Public Cloud", color: "#10b981", icon: "M12 19V5M5 12l7-7 7 7" },
];

export default function HeroSection() {
  const { region } = useRegion();
  const content = getHeroContent(region);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const orbitScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const orbitOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col pt-16 bg-background relative overflow-hidden" id="hero">
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.08]" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(232,160,0,.12) 0%, transparent 65%), radial-gradient(ellipse 40% 30% at 15% 60%, rgba(232,160,0,.06) 0%, transparent 55%)" }} />
      </motion.div>

      <motion.div className="absolute inset-0 pointer-events-none opacity-30" style={{
        y: dotY,
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,.08) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
        maskImage: "radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 80%)"
      }} />

      {/* Orbital system */}
      <motion.div className="absolute inset-0 pointer-events-none z-0 hidden xl:flex items-center justify-center" aria-hidden="true" style={{ scale: orbitScale, opacity: orbitOpacity }}>
        <div className="absolute rounded-full" style={{ width: "min(82vw, 1000px)", height: "min(82vw, 1000px)", border: "1px dashed rgba(232,160,0,.15)" }} />
        <div className="absolute rounded-full" style={{ width: "min(66vw, 800px)", height: "min(66vw, 800px)", border: "1px solid rgba(232,160,0,.08)" }} />
        <div className="absolute rounded-full" style={{ width: "min(50vw, 600px)", height: "min(50vw, 600px)", border: "1px dotted rgba(232,160,0,.1)" }} />
        <div className="absolute rounded-full" style={{ width: 120, height: 120, background: "radial-gradient(circle, rgba(232,160,0,.2) 0%, transparent 70%)", animation: "glowPulse 3s ease-in-out infinite" }} />
        <div className="absolute" style={{ width: "min(82vw, 1000px)", height: "min(82vw, 1000px)", animation: "orbit-spin 60s linear infinite" }}>
          {orbitModules.map((card, i) => {
            const angle = (i / orbitModules.length) * 360;
            return (
              <div key={card.label} className="absolute" style={{ top: "50%", left: "50%", transform: `rotate(${angle}deg) translateX(min(41vw, 500px)) rotate(-${angle}deg)` }}>
                <div className="group -translate-x-1/2 -translate-y-1/2 relative" style={{ animation: `counter-orbit 60s linear infinite` }}>
                  <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: card.color, transform: "scale(1.3)" }} />
                  <div className="relative backdrop-blur-md rounded-2xl px-4 py-3.5 flex items-center gap-3 border transition-all duration-500 hover:scale-110" style={{ background: "rgba(12,12,12,.85)", borderColor: `${card.color}30`, boxShadow: `0 8px 32px ${card.color}15, 0 2px 8px rgba(0,0,0,.3)` }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${card.color}25, ${card.color}08)`, border: `1px solid ${card.color}30` }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke={card.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d={card.icon} /></svg>
                    </div>
                    <div>
                      <div className="text-[.82rem] font-bold text-foreground whitespace-nowrap tracking-[-0.02em]">{card.label}</div>
                      <div className="text-[.72rem] text-muted-foreground whitespace-nowrap font-light">{card.sub}</div>
                    </div>
                    <div className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full opacity-60" style={{ background: `linear-gradient(90deg, transparent, ${card.color}, transparent)` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute" style={{ width: "min(50vw, 600px)", height: "min(50vw, 600px)", animation: "orbit-spin 35s linear infinite reverse" }}>
          {[0, 90, 180, 270].map((angle) => (
            <div key={angle} className="absolute" style={{ top: "50%", left: "50%", transform: `rotate(${angle}deg) translateX(min(25vw, 300px))` }}>
              <div className="w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2" style={{ background: "#E8A000", boxShadow: "0 0 12px rgba(232,160,0,.5)", animation: "glowPulse 2s ease-in-out infinite", animationDelay: `${angle * 10}ms` }} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Centered content */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 md:px-10 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-secondary border border-border px-4 py-1.5 rounded-full mb-8 shadow-[0_2px_12px_rgba(232,160,0,.08)]">
          <span className="w-[7px] h-[7px] bg-gold rounded-full" style={{ animation: "pulseDot 2s ease-in-out infinite" }} />
          <span className="text-[.8rem] font-semibold tracking-[.1em] uppercase text-gold">{content.badge}</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold leading-[1.05] tracking-[-0.04em] text-foreground mb-5" style={{ fontSize: "clamp(2.4rem, 5.8vw, 5.8rem)" }}>
          {content.headlinePre}{" "}
          <span className="inline-flex items-baseline gap-[0.15em]">
            <img src={sapLogo} alt="SAP" className="inline-block h-[0.75em] w-auto object-contain translate-y-[0.02em]" />
          </span>
          <br />{content.headlinePost}<br />
          <span className="text-gold italic">{content.headlineAccent}</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }}
          className="text-muted-foreground font-light leading-[1.8] max-w-[560px] mx-auto mb-8" style={{ fontSize: "clamp(1rem, 1.6vw, 1.2rem)" }}>
          {content.description}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.7 }}
          className="flex items-center justify-center gap-6 md:gap-8 mb-10 flex-wrap">
          {content.trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_rgba(232,160,0,.5)]" />
              <span className="text-[.9rem] md:text-[.95rem] font-medium tracking-[.04em] text-muted-foreground">{badge}</span>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 0.7 }}
          className="flex gap-3.5 justify-center flex-wrap mb-16">
          <button onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
            className="px-9 py-4 bg-gold text-black text-[1rem] font-semibold rounded-full cursor-none shadow-[0_4px_20px_rgba(232,160,0,.3)] hover:translate-y-[-3px] hover:shadow-[0_14px_40px_rgba(232,160,0,.45)] transition-all duration-250">
            Book a Consultation →
          </button>
          <button onClick={() => document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" })}
            className="px-9 py-4 bg-transparent text-foreground text-[1rem] font-normal border-[1.5px] border-border rounded-full cursor-none flex items-center gap-2 hover:border-gold hover:text-gold hover:translate-y-[-3px] transition-all duration-250">
            <span className="w-5 h-5 rounded-full border-[1.5px] border-current flex items-center justify-center text-[.5rem]">▶</span>
            Explore SAP Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
