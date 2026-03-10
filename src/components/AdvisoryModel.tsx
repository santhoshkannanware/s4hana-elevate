import { motion } from "framer-motion";

const phases = [
  { num: "01", title: "Advisory", desc: "Business case, roadmap, and programme design that fits your timeline and budget.", icon: "◈" },
  { num: "02", title: "Implementation", desc: "SAP-Activate methodology with AI accelerators to compress delivery timelines.", icon: "⬡" },
  { num: "03", title: "Post Go-Live", desc: "Managed application support ensuring sustained value as your business scales.", icon: "◎" },
];

const capabilities = [
  "Certified GROW with SAP delivery",
  "Best-practice Finance, HR & Supply Chain",
  "AI-accelerated timelines",
  "Data migration & quality management",
  "Corporate enablement & change management",
  "Ongoing managed AMS & support",
];

export default function AdvisoryModel() {
  return (
    <section className="py-24 md:py-32 bg-bg2 relative overflow-hidden" id="grow">
      {/* Subtle accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(var(--gold)), transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-2xl">
          <div className="eyebrow">GROW with SAP</div>
          <h2 className="sec-h">The right path to<br /><em>SAP Public Cloud.</em></h2>
          <p className="sec-p">We guide enterprises through GROW with SAP — adopting S/4HANA Public Cloud with enterprise rigour and AI-first agility.</p>
        </motion.div>

        {/* Phases — horizontal timeline */}
        <div className="relative mb-20">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-px bg-border" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-0">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center px-6"
              >
                {/* Number circle */}
                <div className="w-[72px] h-[72px] rounded-full border-2 border-gold bg-white flex items-center justify-center mb-5 relative z-10 shadow-[0_4px_20px_rgba(232,160,0,.12)]">
                  <span className="text-gold text-xl font-bold">{phase.num}</span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{phase.title}</h4>
                <p className="text-[.84rem] text-muted-foreground font-light leading-relaxed max-w-[280px]">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Capabilities — clean inline list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-border pt-10"
        >
          <p className="text-[.68rem] font-bold tracking-[.14em] uppercase text-gold mb-6">What's included</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-3">
            {capabilities.map((cap) => (
              <div key={cap} className="flex items-center gap-2.5 text-[.86rem] text-foreground/80 font-light">
                <span className="text-gold text-xs">✓</span>
                {cap}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a href="#cta" className="inline-block px-8 py-3.5 bg-gold text-black text-[.82rem] font-semibold tracking-[.04em] rounded-full cursor-none transition-all duration-250 hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(232,160,0,.35)]">
            Start Your GROW Journey →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
