import { useRef } from "react";
import { motion } from "framer-motion";

const pillars = [
  { title: "Faster Close", desc: "Reduce period-end close from weeks to days with automated workflows and real-time reconciliation.", modules: ["SAP FI/CO", "Advanced Financial Closing"] },
  { title: "Improved Compliance", desc: "Embedded regulatory compliance across jurisdictions with Document Reporting Compliance.", modules: ["DRC", "Group Reporting"] },
  { title: "Better Reconciliation", desc: "Automated intercompany matching and dispute resolution at scale.", modules: ["Intercompany Reconciliation", "SAP FI"] },
  { title: "Forecast Accuracy", desc: "AI-augmented predictive analytics for cash flow, revenue, and cost planning.", modules: ["SAP Analytics Cloud", "Fiori for Finance"] },
  { title: "Decision Speed", desc: "Real-time financial dashboards that surface what matters, when it matters.", modules: ["SAP Analytics Cloud", "SAP Datasphere"] },
  { title: "Audit Readiness", desc: "Continuous controls monitoring and transparent audit trails built into every process.", modules: ["Treasury & Risk Management", "BRIM"] },
];

export default function CFOSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-spacing bg-card" id="cfo">
      <div className="section-container mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Office of the CFO</h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl mb-2">
            A strategic platform approach to modernizing every dimension of the CFO's mandate.
          </p>
          <p className="font-body text-xs text-muted-foreground">Scroll horizontally →</p>
        </motion.div>
      </div>

      <div ref={scrollRef} className="horizontal-scroll pl-6 md:pl-12 lg:pl-[max(3rem,calc((100vw-80rem)/2+3rem))] pr-6 pb-4">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-none w-72 md:w-80 bg-background border border-border rounded-md p-6 md:p-8 hover:border-warm-gold/30 transition-colors duration-200"
          >
            <div className="text-warm-gold font-heading text-sm font-bold tracking-widest uppercase mb-3">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">{p.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.modules.map((m) => (
                <span key={m} className="text-[10px] font-body font-medium text-warm-gold border border-warm-gold/20 rounded-sm px-2 py-0.5">
                  {m}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
        <div className="flex-none w-6" />
      </div>
    </section>
  );
}
