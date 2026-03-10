import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Office of the CFO", href: "#cfo" },
  { label: "Expertise", href: "#expertise" },
  { label: "Success Stories", href: "#stories" },
  { label: "Global Presence", href: "#presence" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold tracking-tight text-foreground">
            Kannanware
          </span>
          <span className="text-electric-blue text-xs font-body font-medium tracking-widest uppercase">
            Innovations
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-electric-blue after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-body font-semibold bg-primary text-primary-foreground px-5 py-2 rounded-sm hover:bg-primary/90 transition-colors duration-200"
          >
            Book a Consultation
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-foreground transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-foreground transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-foreground transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-body font-semibold bg-primary text-primary-foreground px-5 py-2.5 rounded-sm text-center mt-2"
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
