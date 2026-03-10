import { motion } from "framer-motion";

const locations = [
  { city: "Chennai", country: "India", role: "Innovation Centre & Global Delivery Hub", primary: true },
  { city: "Dubai", country: "UAE", role: "Middle East & Africa Operations", primary: false },
  { city: "United States", country: "USA", role: "Americas Office", primary: false },
  { city: "Cloud Office", country: "Global", role: "Distributed Talent & Remote Delivery", primary: false },
];

export default function GlobalPresence() {
  return (
    <section className="section-spacing" id="presence">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Global Presence</h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl">
            Local expertise, global capability. Transformation delivered where you need it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`border rounded p-6 transition-colors duration-200 ${
                loc.primary
                  ? "bg-card border-electric-blue/30"
                  : "bg-card border-border hover:border-electric-blue/20"
              }`}
            >
              {loc.primary && (
                <div className="text-electric-blue text-[10px] font-body font-bold uppercase tracking-widest mb-2">HQ</div>
              )}
              <div className="font-heading text-lg font-bold text-foreground mb-0.5">{loc.city}</div>
              <div className="font-body text-sm text-electric-blue mb-2">{loc.country}</div>
              <div className="font-body text-xs text-muted-foreground">{loc.role}</div>
            </motion.div>
          ))}
        </div>

        {/* Connection visualization */}
        <div className="flex items-center justify-center mt-10 gap-2">
          {locations.map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-electric-blue/60" />
              {i < locations.length - 1 && <div className="w-12 md:w-20 h-[1px] bg-electric-blue/20" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
