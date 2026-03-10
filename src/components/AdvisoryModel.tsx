import { motion } from "framer-motion";

const growCards = [
  { tag: "Advisory", title: "Business Case & Roadmap", desc: "Build the case, select the right deployment option, and design a programme that fits your timeline and budget." },
  { tag: "Implementation", title: "Fast-Path Deployment", desc: "SAP-Activate methodology combined with AI accelerators to compress delivery timelines significantly." },
  { tag: "Post Go-Live", title: "AMS & Continuous Improvement", desc: "Managed application support ensuring sustained value as your business scales and evolves." },
];

const checklist = [
  "Certified GROW with SAP delivery methodology",
  "Best-practice Finance, HR & Supply Chain out of the box",
  "AI-accelerated timelines — faster time to value",
  "Data migration and quality management included",
  "Corporate enablement and change management",
  "Ongoing managed AMS and support",
];

export default function AdvisoryModel() {
  return (
    <div className="grid md:grid-cols-2" id="grow">
      {/* Left — white */}
      <div className="p-16 md:p-24 bg-white border-r border-border">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-[500px] mb-11">
          <div className="eyebrow">GROW with SAP</div>
          <h2 className="sec-h">The right path to<br /><em>SAP Public Cloud.</em></h2>
          <p className="sec-p">We guide enterprises through GROW with SAP — adopting S/4HANA Public Cloud with enterprise rigour and AI-first agility.</p>
        </motion.div>
        <div className="flex flex-col gap-4">
          {growCards.map((c, i) => (
            <motion.div key={c.tag} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-5 border-[1.5px] border-border bg-bg2 cursor-none transition-all duration-300 hover:border-gold hover:bg-white hover:translate-x-2 hover:shadow-[4px_0_0_hsl(var(--gold))]">
              <div className="text-[.62rem] font-bold tracking-[.16em] uppercase text-gold mb-1.5">{c.tag}</div>
              <h4 className="text-[.95rem] font-bold text-foreground mb-1">{c.title}</h4>
              <p className="text-[.8rem] text-muted-foreground font-light leading-[1.6]">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right — dark */}
      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="p-16 md:p-24 flex flex-col justify-center" style={{ background: "#0c0c0c" }}>
        <div className="eyebrow" style={{ color: "rgba(232,160,0,.6)" }}>Why GROW with Kannanware</div>
        <h2 className="text-white font-bold text-2xl md:text-3xl leading-[1.15] tracking-tight mb-3.5">Enterprise expertise.<br />Start-up agility.</h2>
        <p className="text-[.9rem] text-white/65 font-light leading-[1.8] mb-2.5">We bring the rigour of a global SAP firm with the responsiveness and commercial flexibility that growing businesses demand.</p>
        <ul className="list-none my-5 mb-8">
          {checklist.map((item) => (
            <li key={item} className="text-[.85rem] text-white/80 py-2.5 border-b border-white/[0.07] last:border-0 flex gap-2.5">
              <span className="text-gold font-bold shrink-0">✓</span>{item}
            </li>
          ))}
        </ul>
        <a href="#cta" className="inline-block px-7 py-3 bg-gold text-black text-[.78rem] font-semibold tracking-[.04em] cursor-none transition-all duration-250 hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(0,0,0,.15)] w-fit">Start Your GROW Journey →</a>
      </motion.div>
    </div>
  );
}