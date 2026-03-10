import { motion } from "framer-motion";
import { Factory, Flame, ShoppingBag, Wheat } from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "Manufacturing & Industrial",
    gradient: "from-blue-900/60 to-slate-900/90",
    challenges: [
      "Complex multi-plant cost allocation",
      "Real-time production cost visibility",
      "Intercompany settlement at scale",
    ],
  },
  {
    icon: Flame,
    name: "Energy & Natural Resources",
    gradient: "from-amber-900/50 to-slate-900/90",
    challenges: [
      "Commodity price volatility hedging",
      "Multi-jurisdiction compliance",
      "Capital asset lifecycle management",
    ],
  },
  {
    icon: ShoppingBag,
    name: "Food, Beverage & Consumer",
    gradient: "from-emerald-900/50 to-slate-900/90",
    challenges: [
      "POS and treasury reconciliation",
      "Margin optimization across channels",
      "Revenue recognition complexity",
    ],
  },
  {
    icon: Wheat,
    name: "Agro & Automotive",
    gradient: "from-cyan-900/50 to-slate-900/90",
    challenges: [
      "Seasonal demand financial planning",
      "Supply chain cost optimization",
      "Multi-currency consolidation",
    ],
  },
];

export default function IndustryFocus() {
  return (
    <section className="section-spacing" id="industries">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            Industry{" "}
            <span className="text-gradient-blue">focus</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl">
            SAP Finance transformation tailored to your industry's most critical challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-default"
              style={{ minHeight: "380px" }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${ind.gradient}`} />
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <ind.icon className="w-8 h-8 text-electric-blue mb-6 group-hover:text-cyan-glow transition-colors duration-300" />
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{ind.name}</h3>
                </div>

                {/* Challenges — revealed on hover */}
                <div className="mt-auto">
                  <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="text-electric-blue text-[10px] font-body font-bold uppercase tracking-widest mb-3">
                      Challenges we solve
                    </div>
                    <div className="space-y-2">
                      {ind.challenges.map((c) => (
                        <div key={c} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-electric-blue mt-1.5 flex-shrink-0" />
                          <span className="font-body text-sm text-muted-foreground">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
