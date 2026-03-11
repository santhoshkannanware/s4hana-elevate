import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import stepAdvisory from "@/assets/step-advisory.jpg";
import stepExecution from "@/assets/step-execution.jpg";
import stepAnalytics from "@/assets/step-analytics.jpg";
import stepExperts from "@/assets/step-experts.jpg";

const steps = [
  {
    num: "01",
    title: "Advisory",
    text: "We assess your SAP landscape, define transformation strategies, and build the blueprint for future-ready finance operations.",
    image: stepAdvisory,
  },
  {
    num: "02",
    title: "Execution",
    text: "Our specialists deliver SAP implementation, rollout, and S/4HANA conversions with structured project governance.",
    image: stepExecution,
  },
  {
    num: "03",
    title: "Data & Analytics",
    text: "We turn enterprise data into decision-ready intelligence through analytics, visualization, and data governance.",
    image: stepAnalytics,
  },
  {
    num: "04",
    title: "Experts as a Service",
    text: "Access specialized SAP experts on demand through flexible subscription-based engagement models.",
    image: stepExperts,
  },
];

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const stepEls = sectionRef.current?.querySelectorAll<HTMLElement>("[data-step]");
    if (!stepEls) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.step);
            setActiveStep(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    stepEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="expertise"
      className="relative"
      style={{ background: "#0c0c0c" }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-24 md:pt-32 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2.5 text-[.65rem] font-bold tracking-[.2em] uppercase mb-4" style={{ color: "hsl(40 100% 45%)" }}>
            <span className="w-5 h-0.5" style={{ background: "hsl(40 100% 45%)" }} />
            Our Approach
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4" style={{ color: "#fff" }}>
            How Kannanware Delivers<br />
            <span style={{ color: "hsl(40 100% 45%)" }}>Transformation</span>
          </h2>
          <p className="text-[.95rem] font-light leading-[1.8] max-w-xl" style={{ color: "rgba(255,255,255,.5)" }}>
            We combine advisory insight, technical execution, and data intelligence to transform enterprise finance operations.
          </p>
        </motion.div>
      </div>

      {/* Scroll storytelling */}
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-16">
          {/* Left — scrolling text steps */}
          <div className="relative">
            {steps.map((step, i) => (
              <div
                key={step.num}
                data-step={i}
                className="min-h-[70vh] flex items-center py-16 lg:py-24"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Step number */}
                  <div
                    className="text-[4rem] md:text-[5rem] font-bold leading-none mb-4 transition-colors duration-500"
                    style={{
                      color: activeStep === i ? "hsl(40 100% 45%)" : "rgba(255,255,255,.08)",
                    }}
                  >
                    {step.num}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl md:text-3xl font-bold tracking-tight mb-4 transition-colors duration-500"
                    style={{
                      color: activeStep === i ? "#fff" : "rgba(255,255,255,.2)",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-base md:text-lg font-light leading-[1.8] max-w-md transition-colors duration-500"
                    style={{
                      color: activeStep === i ? "rgba(255,255,255,.65)" : "rgba(255,255,255,.12)",
                    }}
                  >
                    {step.text}
                  </p>

                  {/* Gold accent line */}
                  <div
                    className="mt-6 h-0.5 transition-all duration-700"
                    style={{
                      width: activeStep === i ? "60px" : "0px",
                      background: "hsl(40 100% 45%)",
                    }}
                  />
                </motion.div>

                {/* Mobile image — only visible on small screens */}
                <div className="lg:hidden mt-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="rounded-xl overflow-hidden"
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — sticky image */}
          <div className="hidden lg:flex items-center sticky top-0 h-screen">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              {/* Gold glow behind image */}
              <div
                className="absolute -inset-4 rounded-3xl blur-3xl opacity-20 transition-opacity duration-700"
                style={{ background: "hsl(40 100% 45%)" }}
              />

              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </AnimatePresence>

              {/* Overlay gradient */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: "linear-gradient(180deg, transparent 50%, rgba(12,12,12,.6) 100%)",
                }}
              />

              {/* Step indicator dots */}
              <div className="absolute bottom-6 left-6 flex gap-2">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full transition-all duration-500"
                    style={{
                      background: activeStep === i ? "hsl(40 100% 45%)" : "rgba(255,255,255,.3)",
                      transform: activeStep === i ? "scale(1.3)" : "scale(1)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-16" />
    </section>
  );
}
