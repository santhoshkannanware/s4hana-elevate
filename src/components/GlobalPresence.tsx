import { motion } from "framer-motion";

const locations = [
  { city: "Chennai", country: "India", role: "Innovation Centre & Global Delivery Hub", primary: true },
  { city: "Dubai", country: "UAE", role: "Middle East & Africa Operations", primary: false },
  { city: "United States", country: "USA", role: "Americas Office", primary: false },
  { city: "Cloud Office", country: "Global", role: "Distributed Talent & Remote Delivery", primary: false },
];

export default function GlobalPresence() {
  return (
    <section className="section-spacing" id="presence" style={{ background: "linear-gradient(180deg, hsl(220 26% 10%), hsl(var(--background)))" }}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              Global{" "}
              <span className="text-gradient-blue">presence</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-lg">
              Local expertise, global capability. Transformation delivered where you need it.
            </p>
          </motion.div>

          {/* Clean stacked locations — no cards */}
          <div className="space-y-0">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex items-baseline justify-between py-6 border-b border-border/30 cursor-default"
              >
                <div className="flex items-baseline gap-4">
                  {loc.primary && (
                    <span className="text-electric-blue text-[10px] font-body font-bold uppercase tracking-widest">HQ</span>
                  )}
                  <span className="font-heading text-xl md:text-2xl font-bold text-foreground group-hover:text-electric-blue transition-colors duration-300">
                    {loc.city}
                  </span>
                  <span className="font-body text-sm text-electric-blue/50">{loc.country}</span>
                </div>
                <span className="font-body text-xs text-muted-foreground hidden md:block">{loc.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
