import { motion } from "framer-motion";
import analyticsDashboard from "@/assets/analytics-dashboard.jpg";

const insights = [
  { tag: "Featured · SAP Transformation", title: "Why AI-Accelerated SAP Implementations Consistently Outperform Traditional Methods", desc: "How embedding AI tooling into the SAP delivery lifecycle compresses timelines, improves data quality, and produces better outcomes.", featured: true },
  { tag: "GROW with SAP", title: "The Mid-Market Executive's Guide to SAP S/4HANA Public Cloud", featured: false },
  { tag: "SAP Finance", title: "Building an Intelligent Finance Platform on SAP S/4HANA", featured: false },
  { tag: "SuccessFactors", title: "Connecting HR and Finance: The SAP Integration Opportunity", featured: false },
  { tag: "Supply Chain", title: "SAP IBP and the Future of Demand-Driven Planning", featured: false },
];

export default function SuccessStories() {
  return (
    <section className="section-spacing bg-card" id="insights">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="eyebrow">Insights</div>
            <h2 className="sec-h">Perspectives for<br /><em>enterprise leaders.</em></h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border hidden lg:block"
          >
            <img src={analyticsDashboard} alt="Analytics" className="w-full h-[240px] object-cover" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {insights.map((ins) => (
            <motion.div
              key={ins.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-7 flex flex-col cursor-none transition-colors duration-200 ${
                ins.featured ? "md:col-span-2 bg-background hover:bg-secondary" : "bg-card hover:bg-secondary"
              }`}
            >
              <div className="text-[.75rem] font-bold tracking-[.16em] uppercase mb-3 text-gold">{ins.tag}</div>
              <h3 className={`font-bold leading-[1.35] tracking-tight pb-5 mb-auto ${
                ins.featured ? "text-xl md:text-2xl text-foreground" : "text-base text-foreground"
              }`}>{ins.title}</h3>
              {ins.desc && <p className="text-[.92rem] font-light leading-[1.65] mb-3.5 text-muted-foreground">{ins.desc}</p>}
              <div className="text-[.88rem] font-semibold flex items-center gap-1.5 transition-[gap] duration-200 hover:gap-2.5 text-gold">Read {ins.featured ? "article" : ""} →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
