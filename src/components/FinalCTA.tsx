import { motion } from "framer-motion";
import teamCollab from "@/assets/team-collab.jpg";

export default function FinalCTA() {
  return (
    <div className="py-32 px-5 md:px-10 relative overflow-hidden text-center bg-background" id="cta">
      {/* Background image */}
      <img src={teamCollab} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-bold text-gold/[0.04] whitespace-nowrap pointer-events-none leading-none select-none tracking-tight">SAP</div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10 max-w-[820px] mx-auto">
        <div className="eyebrow justify-center">Let's Talk</div>
        <h2 className="font-bold leading-none tracking-tight text-foreground mb-4" style={{ fontSize: "clamp(2.6rem, 6.5vw, 6.5rem)" }}>
          Ready to transform<br /><em className="italic text-gold">with SAP?</em>
        </h2>
        <p className="text-base text-muted-foreground max-w-[480px] mx-auto mb-10 leading-[1.7] font-light">
          Whether starting a new SAP journey, optimising an existing landscape, or seeking managed support — Kannanware is your AI-first SAP partner.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <button className="px-10 py-4 bg-gold text-black text-[.88rem] font-semibold rounded-full cursor-none shadow-[0_4px_20px_rgba(232,160,0,.3)] hover:translate-y-[-3px] hover:shadow-[0_14px_40px_rgba(232,160,0,.45)] transition-all duration-250">Book a Meeting →</button>
          <button className="px-10 py-4 bg-transparent text-foreground text-[.88rem] font-normal border-[1.5px] border-border rounded-full cursor-none hover:border-gold hover:text-gold hover:translate-y-[-3px] transition-all duration-250">Download Capability Deck</button>
        </div>
      </motion.div>
    </div>
  );
}
