import { motion } from "framer-motion";

const modules = [
  { name: "SAP FI/CO", angle: -90 },
  { name: "Treasury & Risk", angle: -38.6 },
  { name: "Group Reporting", angle: 12.9 },
  { name: "Analytics Cloud", angle: 64.3 },
  { name: "Adv. Financial Closing", angle: 115.7 },
  { name: "Intercompany Recon.", angle: 167.1 },
  { name: "Billing & Revenue", angle: 218.6 },
];

const outcomes = [
  "Faster Close",
  "Improved Compliance",
  "Better Reconciliation",
  "Forecast Accuracy",
  "Decision Speed",
  "Audit Readiness",
];

export default function CFOSection() {
  const radius = 38;

  return (
    <section className="section-spacing relative overflow-hidden" id="cfo">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            Office of the{" "}
            <span className="text-gradient-blue">CFO</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A strategic platform approach to modernizing every dimension of the CFO's mandate.
          </p>
        </motion.div>

        {/* Orbital diagram — desktop */}
        <div className="hidden lg:block relative mx-auto" style={{ width: "700px", height: "700px" }}>
          {/* Orbital rings */}
          <div className="absolute inset-[15%] rounded-full border border-electric-blue/10" />
          <div className="absolute inset-[25%] rounded-full border border-electric-blue/5" />

          {/* Center hub */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full flex items-center justify-center text-center z-10"
            style={{
              background: "radial-gradient(circle, hsl(var(--electric-blue) / 0.15), transparent)",
              border: "1px solid hsl(var(--electric-blue) / 0.3)",
            }}
          >
            <div>
              <div className="font-heading text-sm font-bold text-electric-blue tracking-wider uppercase">Office of</div>
              <div className="font-heading text-2xl font-black text-foreground">the CFO</div>
            </div>
          </motion.div>

          {/* Modules positioned around the center */}
          {modules.map((mod, i) => {
            const angleRad = (mod.angle * Math.PI) / 180;
            const x = 50 + radius * Math.cos(angleRad);
            const y = 50 + radius * Math.sin(angleRad);

            return (
              <motion.div
                key={mod.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {/* Connection line (SVG would be ideal, but CSS line works) */}
                <div
                  className="absolute top-1/2 left-1/2 origin-left h-[1px] -z-10"
                  style={{
                    width: `${radius * 2.5}%`,
                    background: "hsl(var(--electric-blue) / 0.15)",
                    transform: `rotate(${mod.angle + 180}deg)`,
                    animation: "orbital-pulse 3s ease-in-out infinite",
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
                <div className="glass-panel glass-panel-hover rounded-xl px-5 py-4 text-center transition-all duration-300 hover:scale-110 cursor-default min-w-[140px]">
                  <span className="font-body text-sm font-semibold text-foreground whitespace-nowrap">{mod.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile fallback */}
        <div className="lg:hidden">
          <div className="glass-panel rounded-xl p-6 text-center mb-8">
            <div className="font-heading text-sm font-bold text-electric-blue tracking-wider uppercase">Office of</div>
            <div className="font-heading text-2xl font-black text-foreground">the CFO</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-panel rounded-lg px-4 py-3 text-center"
              >
                <span className="font-body text-sm font-medium text-foreground">{mod.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Business outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 flex flex-wrap justify-center gap-4"
        >
          {outcomes.map((outcome) => (
            <span
              key={outcome}
              className="font-body text-sm text-muted-foreground px-5 py-2.5 rounded-full transition-colors duration-300 hover:text-foreground"
              style={{ border: "1px solid hsl(var(--electric-blue) / 0.15)" }}
            >
              {outcome}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
