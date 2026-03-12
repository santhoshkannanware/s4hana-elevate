import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { useRegion } from "@/contexts/RegionContext";
import { getCultureContent, getCapabilities, getDemoScenarios } from "@/data/regionContent";

// Animated mini bar chart
function MiniChart({ data, color = "#E8A000" }: { data: number[]; color?: string }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-[3px] h-12">
      {data.map((v, i) => (
        <motion.div
          key={i}
          className="w-3 rounded-t-sm"
          initial={{ height: 0 }}
          animate={{ height: `${(v / max) * 100}%` }}
          transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ background: `linear-gradient(180deg, ${color}, rgba(232,160,0,.3))` }}
        />
      ))}
    </div>
  );
}

// Typing animation hook
function useTypewriter(text: string, speed: number, start: boolean) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!start) { setDisplayed(""); return; }
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, start]);
  return displayed;
}

// Network background
function NetworkNodes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const resize = () => { canvas.width = canvas.offsetWidth * 2; canvas.height = canvas.offsetHeight * 2; ctx.scale(2, 2); };
    resize();
    for (let i = 0; i < 30; i++) nodes.push({ x: Math.random() * canvas.offsetWidth, y: Math.random() * canvas.offsetHeight, vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4, r: Math.random() * 2 + 1 });
    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      nodes.forEach(n => { n.x += n.vx; n.y += n.vy; if (n.x < 0 || n.x > w) n.vx *= -1; if (n.y < 0 || n.y > h) n.vy *= -1; });
      for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) { const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y, dist = Math.sqrt(dx * dx + dy * dy); if (dist < 120) { ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.strokeStyle = `rgba(232,160,0,${.15 * (1 - dist / 120)})`; ctx.lineWidth = .5; ctx.stroke(); } }
      nodes.forEach(n => { ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fillStyle = "rgba(232,160,0,.5)"; ctx.fill(); });
      animId = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

// Joule Live Demo Component
function JouleLiveDemo({ forcedScenario, scenarios }: { forcedScenario: number | null; scenarios: ReturnType<typeof getDemoScenarios> }) {
  const demoScenarios = scenarios;
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [phase, setPhase] = useState<"idle" | "typing" | "thinking" | "answering" | "complete">("idle");
  const [thinkingStep, setThinkingStep] = useState(0);
  const [inView, setInView] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  // When a card is clicked, jump to that scenario
  useEffect(() => {
    if (forcedScenario !== null) {
      setAutoPlay(false);
      setScenarioIdx(forcedScenario);
      setPhase("idle");
      setThinkingStep(0);
      // Resume auto-play after full cycle
      const t = setTimeout(() => setAutoPlay(true), 15000);
      return () => clearTimeout(t);
    }
  }, [forcedScenario]);

  const scenario = demoScenarios[scenarioIdx];
  const typedQuery = useTypewriter(scenario.query, 35, phase === "typing");
  const typedAnswer = useTypewriter(scenario.answer, 18, phase === "answering");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (phase === "idle") {
      const t = setTimeout(() => setPhase("typing"), 600);
      return () => clearTimeout(t);
    }
  }, [inView, phase]);

  useEffect(() => {
    if (phase === "typing" && typedQuery === scenario.query) {
      const t = setTimeout(() => { setPhase("thinking"); setThinkingStep(0); }, 400);
      return () => clearTimeout(t);
    }
  }, [phase, typedQuery, scenario.query]);

  useEffect(() => {
    if (phase !== "thinking") return;
    if (thinkingStep < scenario.thinking.length) {
      const t = setTimeout(() => setThinkingStep((s) => s + 1), 800);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setPhase("answering"), 300);
      return () => clearTimeout(t);
    }
  }, [phase, thinkingStep, scenario.thinking.length]);

  useEffect(() => {
    if (phase === "answering" && typedAnswer === scenario.answer) {
      const t = setTimeout(() => setPhase("complete"), 200);
      return () => clearTimeout(t);
    }
  }, [phase, typedAnswer, scenario.answer]);

  useEffect(() => {
    if (phase !== "complete") return;
    if (!autoPlay) return;
    const t = setTimeout(() => {
      setScenarioIdx((i) => (i + 1) % demoScenarios.length);
      setPhase("idle");
      setThinkingStep(0);
    }, 4000);
    return () => clearTimeout(t);
  }, [phase, autoPlay]);

  return (
    <div ref={ref} className="relative rounded-2xl overflow-hidden" style={{ background: "#0c0a06", border: "1px solid rgba(232,160,0,.15)" }}>
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: "1px solid rgba(232,160,0,.08)", background: "rgba(232,160,0,.03)" }}>
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
        <span className="ml-3 text-[.82rem] font-mono" style={{ color: "rgba(232,160,0,.5)" }}>SAP Joule AI Copilot</span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#E8A000", boxShadow: "0 0 6px rgba(232,160,0,.6)" }} />
          <span className="text-[.72rem] font-mono" style={{ color: "rgba(232,160,0,.4)" }}>LIVE</span>
        </div>
      </div>

      {/* Demo content */}
      <div className="p-5 min-h-[380px] flex flex-col">
        {/* Query input area */}
        <div className="mb-5">
          <div className="text-[.72rem] font-mono uppercase tracking-wider mb-2" style={{ color: "rgba(232,160,0,.4)" }}>
            Query
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg" style={{ background: "rgba(232,160,0,.05)", border: "1px solid rgba(232,160,0,.1)" }}>
            <span className="text-[.85rem] font-mono shrink-0 mt-0.5" style={{ color: "#E8A000" }}>›</span>
            <div className="flex-1">
              <span className="text-[.92rem] font-mono" style={{ color: "rgba(255,255,255,.8)" }}>
                {phase === "idle" ? "" : typedQuery}
              </span>
              {(phase === "typing") && (
                <motion.span
                  className="inline-block w-[2px] h-[14px] ml-0.5 align-middle"
                  style={{ background: "#E8A000" }}
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Processing / Thinking */}
        <AnimatePresence mode="wait">
          {phase === "thinking" && (
            <motion.div
              key="thinking"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mb-5"
            >
              <div className="text-[.72rem] font-mono uppercase tracking-wider mb-3" style={{ color: "rgba(232,160,0,.4)" }}>
                Processing
              </div>
              <div className="space-y-2">
                {scenario.thinking.map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -10 }}
                    animate={i < thinkingStep ? { opacity: 1, x: 0 } : { opacity: 0.2, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2"
                  >
                    {i < thinkingStep ? (
                      <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ background: "rgba(232,160,0,.15)" }}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3.2 5.7L6.5 2.3" stroke="#E8A000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                    ) : (
                      <motion.div
                        className="w-3.5 h-3.5 rounded-full"
                        style={{ border: "1.5px solid rgba(232,160,0,.3)" }}
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      >
                        <div className="w-full h-full rounded-full" style={{ background: "conic-gradient(from 0deg, transparent, rgba(232,160,0,.4))" }} />
                      </motion.div>
                    )}
                    <span className="text-[.85rem] font-mono" style={{ color: i < thinkingStep ? "rgba(232,160,0,.7)" : "rgba(255,255,255,.2)" }}>
                      {step}
                    </span>
                  </motion.div>
                ))}
              </div>
              {/* Processing bar */}
              <div className="mt-3 h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(232,160,0,.1)" }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #E8A000, #ffb800)" }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${(thinkingStep / scenario.thinking.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* AI Response */}
        <AnimatePresence>
          {(phase === "answering" || phase === "complete") && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-1"
            >
              <div className="text-[.72rem] font-mono uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: "rgba(232,160,0,.4)" }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#E8A000", boxShadow: "0 0 8px rgba(232,160,0,.5)" }} />
                AI Insight
              </div>

              {/* Answer with glow border */}
              <div
                className="p-4 rounded-lg mb-5"
                style={{
                  background: "rgba(232,160,0,.04)",
                  border: "1px solid rgba(232,160,0,.12)",
                  boxShadow: "0 0 20px rgba(232,160,0,.06)",
                }}
              >
                <p className="text-[.92rem] font-mono leading-[1.7]" style={{ color: "rgba(255,255,255,.75)" }}>
                  {typedAnswer}
                  {phase === "answering" && (
                    <motion.span
                      className="inline-block w-[2px] h-[12px] ml-0.5 align-middle"
                      style={{ background: "#E8A000" }}
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.6 }}
                    />
                  )}
                </p>
              </div>

              {/* Metrics row */}
              {phase === "complete" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    {scenario.metrics.map((m, i) => (
                      <motion.div
                        key={m.label}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                        className="text-center p-2 rounded-lg"
                        style={{ background: "rgba(232,160,0,.04)", border: "1px solid rgba(232,160,0,.08)" }}
                      >
                        <div className="text-[.72rem] font-mono uppercase" style={{ color: "rgba(255,255,255,.3)" }}>{m.label}</div>
                        <div className="text-[.95rem] font-bold font-mono mt-0.5" style={{ color: m.color }}>{m.value}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mini chart */}
                  <div className="flex items-end justify-between p-3 rounded-lg" style={{ background: "rgba(232,160,0,.03)", border: "1px solid rgba(232,160,0,.06)" }}>
                    <div>
                      <div className="text-[.68rem] font-mono uppercase mb-1" style={{ color: "rgba(255,255,255,.25)" }}>Trend</div>
                      <MiniChart data={scenario.chartData} />
                    </div>
                    <div className="text-right">
                      <div className="text-[.68rem] font-mono uppercase" style={{ color: "rgba(255,255,255,.25)" }}>Model</div>
                      <div className="text-[.82rem] font-mono" style={{ color: "rgba(232,160,0,.6)" }}>Joule v2.4</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scenario indicator dots */}
        <div className="flex items-center justify-center gap-2 mt-5 pt-4" style={{ borderTop: "1px solid rgba(232,160,0,.06)" }}>
          {demoScenarios.map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full transition-all duration-500"
              style={{
                background: scenarioIdx === i ? "#E8A000" : "rgba(232,160,0,.2)",
                boxShadow: scenarioIdx === i ? "0 0 8px rgba(232,160,0,.5)" : "none",
                transform: scenarioIdx === i ? "scale(1.5)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CultureSection() {
  const [activeDemo, setActiveDemo] = useState<number | null>(null);
  const [clickCount, setClickCount] = useState(0);
  const { region } = useRegion();
  const culture = getCultureContent(region);
  const capabilities = getCapabilities(region);
  const scenarios = getDemoScenarios(region);

  const handleCardClick = (idx: number) => {
    setActiveDemo(idx);
    setClickCount((c) => c + 1); // force re-trigger even if same card
  };

  // Use clickCount as part of the key to force reset on re-click
  const forcedKey = activeDemo !== null ? `${activeDemo}-${clickCount}` : "auto";

  return (
    <section className="relative overflow-hidden" id="ai" style={{ background: "#0c0c0c" }}>
      <NetworkNodes />

      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(232,160,0,.12) 0%, transparent 65%)" }} />
      <div className="absolute bottom-[-150px] left-[-150px] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(232,160,0,.06) 0%, transparent 65%)" }} />

      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Text */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div className="eyebrow">
              {culture.eyebrow}
            </div>

            <h2 className="sec-h">
              {culture.heading}{" "}
              <em>{culture.headingAccent}</em>
            </h2>

            <p className="text-[1.05rem] font-light leading-[1.8] mb-6" style={{ color: "rgba(255,255,255,.55)" }}>
              {culture.subtitle}
            </p>

            <p className="sec-p">
              {culture.body}
            </p>
          </motion.div>

          {/* Right — Live Demo */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="relative">
            <div className="absolute -inset-8 rounded-3xl blur-[80px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(232,160,0,.15) 0%, transparent 70%)" }} />
            <JouleLiveDemo key={forcedKey} forcedScenario={activeDemo} scenarios={scenarios} />
          </motion.div>
        </div>

        {/* Four capability cards — clickable to trigger demos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-20">
          {capabilities.map((cap, i) => (
            <motion.button
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleCardClick(i)}
              className="group relative p-6 rounded-xl cursor-none text-left"
              style={{
                background: activeDemo === i ? "rgba(232,160,0,.08)" : "rgba(255,255,255,.02)",
                border: activeDemo === i ? "1px solid rgba(232,160,0,.4)" : "1px solid rgba(232,160,0,.1)",
                transition: "border-color 0.3s, background 0.3s",
                boxShadow: activeDemo === i ? "0 0 24px rgba(232,160,0,.12)" : "none",
              }}
              onMouseEnter={(e) => {
                if (activeDemo !== i) {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,160,0,.3)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(232,160,0,.04)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeDemo !== i) {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,160,0,.1)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.02)";
                }
              }}
            >
              <div className="absolute top-4 right-4 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full" style={{
                  background: activeDemo === i ? "#E8A000" : "rgba(232,160,0,.4)",
                  boxShadow: activeDemo === i ? "0 0 10px rgba(232,160,0,.6)" : "0 0 10px rgba(232,160,0,.4)",
                }} />
                {activeDemo === i && (
                  <span className="text-[.65rem] font-mono uppercase tracking-wider" style={{ color: "rgba(232,160,0,.6)" }}>
                    LIVE
                  </span>
                )}
              </div>
              <div className="text-2xl mb-4">{cap.icon}</div>
              <h4 className="text-[1rem] font-semibold mb-2" style={{ color: activeDemo === i ? "#ffcc00" : "#f2f2f2" }}>{cap.title}</h4>
              <p className="text-[.9rem] font-light leading-[1.7]" style={{ color: "rgba(255,255,255,.4)" }}>{cap.desc}</p>
              <div className="mt-3 text-[.75rem] font-mono uppercase tracking-wider" style={{ color: "rgba(232,160,0,.4)" }}>
                ▶ Run Demo
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
