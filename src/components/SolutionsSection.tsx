import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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
  const imageRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Parallax for the sticky image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

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
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
    );

    stepEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="expertise"
      className="relative bg-background"
    >
      {/* Top accent line */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(232,160,0,.3), transparent)" }} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-24 md:pt-32 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="eyebrow">Our Approach</div>
          <h2 className="sec-h">
            How Kannanware Delivers<br />
            <em>Transformation</em>
          </h2>
          <p className="sec-p">
            We combine advisory insight, technical execution, and data intelligence to transform enterprise finance operations.
          </p>
        </motion.div>
      </div>

      {/* Scroll storytelling */}
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-16">
          {/* Left — scrolling text steps */}
          <div className="relative">
            {/* Vertical progress line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden lg:block">
              <motion.div
                className="w-px bg-gold origin-top"
                style={{
                  height: `${((activeStep + 1) / steps.length) * 100}%`,
                  transition: "height 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
            </div>

            {steps.map((step, i) => (
              <div
                key={step.num}
                data-step={i}
                className="min-h-[80vh] flex items-center py-16 lg:py-24 lg:pl-10"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Step number */}
                  <div
                    className="text-[4rem] md:text-[5rem] font-bold leading-none mb-4 transition-colors duration-700"
                    style={{
                      color: activeStep === i ? "hsl(40 100% 45%)" : "rgba(255,255,255,.06)",
                    }}
                  >
                    {step.num}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl md:text-3xl font-bold tracking-tight mb-4 transition-colors duration-700"
                    style={{
                      color: activeStep === i ? "hsl(0 0% 95%)" : "rgba(255,255,255,.15)",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-base md:text-lg font-light leading-[1.8] max-w-md transition-all duration-700"
                    style={{
                      color: activeStep === i ? "rgba(255,255,255,.6)" : "rgba(255,255,255,.08)",
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

                {/* Mobile image */}
                <div className="lg:hidden mt-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="rounded-xl overflow-hidden"
                  >
                    <img src={step.image} alt={step.title} className="w-full h-64 object-cover" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — sticky image with parallax */}
          <div className="hidden lg:flex items-center sticky top-0 h-screen" ref={imageRef}>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              {/* Gold glow behind image */}
              <motion.div
                className="absolute -inset-6 rounded-3xl blur-[60px] transition-opacity duration-1000"
                style={{
                  background: "hsl(40 100% 45%)",
                  opacity: 0.12,
                }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.img
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    className="w-full h-full object-cover"
                    style={{ y: imageY, scale: imageScale }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Overlay gradient */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: "linear-gradient(180deg, transparent 30%, rgba(12,12,12,.7) 100%), linear-gradient(0deg, transparent 80%, rgba(12,12,12,.4) 100%)",
                }}
              />

              {/* Step label on image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-8 left-8 right-8"
                >
                  <div className="text-[.6rem] font-bold tracking-[.2em] uppercase text-gold mb-2">
                    Phase {steps[activeStep].num}
                  </div>
                  <div className="text-foreground text-xl font-bold">
                    {steps[activeStep].title}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Step indicator dots */}
              <div className="absolute top-6 right-6 flex flex-col gap-2">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full transition-all duration-500"
                    style={{
                      background: activeStep === i ? "hsl(40 100% 45%)" : "rgba(255,255,255,.25)",
                      transform: activeStep === i ? "scale(1.4)" : "scale(1)",
                      boxShadow: activeStep === i ? "0 0 10px rgba(232,160,0,.5)" : "none",
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
