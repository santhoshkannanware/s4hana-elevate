import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="section-spacing relative overflow-hidden" id="contact">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at center, hsl(var(--electric-blue) / 0.08), transparent 70%)" }} />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            Bring clarity to your{" "}
            <span className="text-gradient-blue">SAP finance landscape</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Partner with Kannanware to modernize finance operations, unlock better decisions, and accelerate transformation with SAP expertise and AI‑enabled thinking.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="mailto:partner@kannanware.com?subject=Strategy%20Call%20Request"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-body font-bold text-base rounded-md hover:bg-primary/90 transition-colors duration-200"
            >
              Schedule a Strategy Call
            </a>
            <a
              href="mailto:partner@kannanware.com?subject=RFP%20Submission"
              className="inline-flex items-center px-8 py-4 glass-panel glass-panel-hover text-foreground font-body font-bold text-base rounded-md transition-all duration-200"
            >
              Submit an RFP
            </a>
          </div>
          <a href="mailto:partner@kannanware.com" className="font-body text-sm text-muted-foreground hover:text-electric-blue transition-colors duration-200">
            partner@kannanware.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
