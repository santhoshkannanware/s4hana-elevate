import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="section-spacing border-t border-border" id="contact">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bring clarity to your SAP finance landscape
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
            Partner with Kannanware to modernize finance operations, unlock better decisions, and accelerate transformation with SAP expertise and AI‑enabled thinking.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:partner@kannanware.com?subject=Strategy%20Call%20Request"
              className="inline-flex items-center px-7 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-md hover:bg-primary/90 transition-colors duration-200"
            >
              Schedule a Strategy Call
            </a>
            <a
              href="mailto:partner@kannanware.com?subject=RFP%20Submission"
              className="inline-flex items-center px-7 py-3 border border-foreground text-foreground font-body font-semibold text-sm rounded-md hover:border-warm-gold hover:text-warm-gold transition-colors duration-200"
            >
              Submit an RFP
            </a>
          </div>
          <a
            href="mailto:partner@kannanware.com"
            className="font-body text-sm text-muted-foreground hover:text-warm-gold transition-colors duration-200"
          >
            partner@kannanware.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
