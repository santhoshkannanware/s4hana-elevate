import { motion } from "framer-motion";

const points = [
  { n: "01", title: "Faster Implementation Timelines", desc: "AI-assisted configuration, automated test generation, and intelligent data validation compress SAP timelines without shortcuts." },
  { n: "02", title: "Higher Quality Deliverables", desc: "AI-driven test automation and code review catch issues earlier — reducing defect rates and rework across every phase." },
  { n: "03", title: "Smarter SAP Post Go-Live", desc: "We embed AI capabilities natively into your SAP workflows using BTP AI Services after go-live." },
  { n: "04", title: "AI-Augmented Consultants", desc: "Our teams use AI for documentation and design — freeing them to focus on complexity that demands real SAP expertise." },
];

export default function CultureSection() {
  return (
    <div className="relative overflow-hidden" id="ai" style={{ background: "#0c0c0c" }}>
      <div className="absolute top-[-200px] right-[-150px] w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(232,160,0,.22) 0%, transparent 65%)", animation: "glowPulse 5s ease-in-out infinite" }} />
      <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(232,160,0,.1) 0%, transparent 65%)", animation: "glowPulse 7s 1.5s ease-in-out infinite" }} />

      <div className="section-container grid md:grid-cols-2 gap-20 py-24 md:py-28 relative z-10">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="eyebrow" style={{ color: "#E8A000" }}>The AI Advantage</div>
          <h2 className="text-white font-bold leading-[1.1] tracking-tight mb-4" style={{ fontSize: "clamp(1.9rem, 3.6vw, 3.2rem)" }}>
            We use AI to deliver<br /><em className="italic text-gold">better SAP outcomes.</em>
          </h2>
          <p className="text-[.94rem] text-white/50 font-light leading-[1.8] mb-6">We are SAP consultants — not an AI product. We use AI to make our implementations faster, quality higher, and outcomes measurably better.</p>
          <div className="pl-5 border-l-[3px] border-white/[0.12] bg-white/[0.03] p-4">
            <strong className="text-white font-semibold block mb-1 text-[.82rem]">Our people are the product. AI is the accelerator.</strong>
            <span className="text-white/40 text-[.82rem] leading-[1.7]">The expertise, methodology, and accountability for every engagement are entirely ours — always.</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col">
          {points.map((p) => (
            <div key={p.n} className="flex gap-5 py-6 border-b border-white/[0.06] last:border-0 cursor-none transition-all duration-300 hover:pl-3">
              <div className="text-[.82rem] text-white/[0.16] shrink-0 pt-0.5 font-light">{p.n}</div>
              <div>
                <h4 className="text-[.9rem] font-semibold text-white mb-1.5">{p.title}</h4>
                <p className="text-[.8rem] text-white/[0.42] leading-[1.65] font-light">{p.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}