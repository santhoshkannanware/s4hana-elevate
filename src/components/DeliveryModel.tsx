import { motion } from "framer-motion";

const phases = [
  { n: "1", title: "Discover & Blueprint", desc: "Map processes, identify opportunities, and design an SAP roadmap aligned to strategic priorities." },
  { n: "2", title: "Design & Configure", desc: "Configure SAP to best-practice standards with detailed solution design and milestone sign-offs." },
  { n: "3", title: "Test & Deploy", desc: "AI-accelerated test automation ensures quality before every go-live. Zero surprises on cutover day." },
  { n: "4", title: "Optimise & Support", desc: "Post go-live hypercare, AMS, and continuous optimisation delivering sustained SAP value." },
];

export default function DeliveryModel() {
  return (
    <section className="section-spacing" id="approach" style={{ background: "hsl(var(--bg2))" }}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="eyebrow">Methodology</div>
          <h2 className="sec-h">How we deliver<br /><em>every time.</em></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {phases.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-9 cursor-none relative overflow-hidden transition-colors duration-250 hover:bg-bg2"
            >
              <div className="text-[.78rem] text-muted-foreground font-light mb-4 italic">Phase 0{p.n}</div>
              <h3 className="text-[1.12rem] font-bold tracking-tight text-foreground mb-2.5">{p.title}</h3>
              <p className="text-[.82rem] text-muted-foreground font-light leading-[1.7]">{p.desc}</p>
              <div className="absolute right-[-8px] bottom-[-20px] text-[8rem] text-[rgba(232,160,0,.06)] font-bold pointer-events-none leading-none">{p.n}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}