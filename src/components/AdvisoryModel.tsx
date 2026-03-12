import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useRegion } from "@/contexts/RegionContext";
import { getAdvisoryHeader, getAdvisoryOfferings } from "@/data/regionContent";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function AdvisoryModel() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const { region } = useRegion();
  const header = getAdvisoryHeader(region);
  const offerings = getAdvisoryOfferings(region);

  return (
    <section className="relative overflow-hidden bg-background" id="grow">
      {/* Subtle gold radial glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-[0.05]" style={{ background: "radial-gradient(circle, hsl(var(--gold)), transparent 65%)" }} />

      {/* Top accent line */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(232,160,0,.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="eyebrow">{header.eyebrow}</div>
            <h2 className="sec-h">
              {header.heading}<br />
              <em>{header.headingAccent}</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[1rem] font-light leading-[1.85] text-muted-foreground">
              {header.description}
            </p>
          </motion.div>
        </div>

        {/* Offering Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {offerings.map((o, i) => (
            <motion.div
              key={o.num}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
              className="group relative p-7 rounded-xl cursor-none border border-border/60 transition-all duration-500"
              style={{
                background: activeCard === i ? "rgba(232,160,0,.04)" : "hsl(var(--card))",
                borderColor: activeCard === i ? "rgba(232,160,0,.25)" : undefined,
              }}
            >
              {/* Gold corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-full h-full" style={{
                  background: "linear-gradient(225deg, rgba(232,160,0,.12) 0%, transparent 60%)",
                  borderRadius: "0 0.75rem 0 0",
                }} />
              </motion.div>

              {/* Num + Icon row */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[2.5rem] font-bold leading-none transition-colors duration-500" style={{ color: activeCard === i ? "hsl(var(--gold))" : "rgba(255,255,255,.06)" }}>
                  {o.num}
                </span>
                <span className="text-xl transition-colors duration-500" style={{ color: activeCard === i ? "hsl(var(--gold))" : "rgba(255,255,255,.12)" }}>
                  {o.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[1.05rem] font-bold text-foreground mb-3 tracking-tight leading-snug">
                {o.title}
              </h3>

              {/* Description */}
              <p className="text-[.92rem] font-light leading-[1.75] text-muted-foreground mb-5">
                {o.desc}
              </p>

              {/* Checklist items */}
              <div className="space-y-2 pt-4 border-t border-border/40">
                {o.items.map((item, j) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + j * 0.05, duration: 0.4 }}
                    className="flex items-center gap-2.5"
                  >
                    <span className="text-gold text-[.82rem] shrink-0">✦</span>
                    <span className="text-[.92rem] text-foreground/60 font-light">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom gold line on hover */}
              <motion.div
                className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full"
                style={{ background: "hsl(var(--gold))" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeCard === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            custom={offerings.length}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative p-7 rounded-xl flex flex-col justify-center items-center text-center border border-gold/20"
            style={{
              background: "linear-gradient(135deg, rgba(232,160,0,.06) 0%, rgba(232,160,0,.02) 100%)",
            }}
          >
            <div className="absolute inset-0 rounded-xl pointer-events-none" style={{
              background: "radial-gradient(ellipse at center, rgba(232,160,0,.08) 0%, transparent 70%)",
            }} />

            <motion.div
              className="w-16 h-16 rounded-full border-2 border-gold/30 flex items-center justify-center mb-5 relative z-10"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <span className="text-gold text-2xl">→</span>
            </motion.div>

            <h3 className="text-lg font-bold text-foreground mb-3 relative z-10">
              Ready to Grow?
            </h3>
            <p className="text-[.92rem] font-light text-muted-foreground mb-6 max-w-[240px] relative z-10">
              Let's build your roadmap to SAP S/4HANA Cloud together.
            </p>

            <a
              href="#cta"
              className="inline-block px-7 py-3 bg-gold text-black text-[.92rem] font-semibold tracking-[.04em] rounded-full cursor-none relative z-10 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(232,160,0,.35)]"
            >
              Start Your Journey
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
