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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            Global{" "}
            <span className="text-gradient-blue">presence</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl">
            Local expertise, global capability. Transformation delivered where you need it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-0">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border-l border-border/50 first:border-l-0 px-6 py-8 group cursor-default hover:bg-electric-blue/5 transition-colors duration-300"
            >
              {loc.primary && (
                <div className="text-electric-blue text-[10px] font-body font-bold uppercase tracking-widest mb-3">HQ</div>
              )}
              <div className="font-heading text-2xl font-bold text-foreground mb-1 group-hover:text-electric-blue transition-colors duration-300">{loc.city}</div>
              <div className="font-body text-sm text-electric-blue/60 mb-3">{loc.country}</div>
              <div className="font-body text-xs text-muted-foreground leading-relaxed">{loc.role}</div>
            </motion.div>
          ))}
        </div>

        {/* Connection line */}
        <div className="flex items-center justify-center mt-10 gap-1">
          {locations.map((_, i) => (
            <div key={i} className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-electric-blue/40" />
              {i < locations.length - 1 && <div className="w-16 md:w-24 h-[1px] bg-electric-blue/15" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
