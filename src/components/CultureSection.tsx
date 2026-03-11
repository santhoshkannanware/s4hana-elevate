import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import jouleDashboard from "@/assets/joule-ai-dashboard.jpg";

const capabilities = [
  {
    icon: "📊",
    title: "AI Financial Insights",
    desc: "Surface anomalies, variances, and trends across your financial data with natural language queries.",
  },
  {
    icon: "📈",
    title: "Predictive Forecasting",
    desc: "Leverage machine learning models embedded in SAP to forecast cash flow, revenue, and demand.",
  },
  {
    icon: "⚙️",
    title: "Intelligent Process Automation",
    desc: "Automate reconciliation, journal entries, and compliance workflows with AI-driven orchestration.",
  },
  {
    icon: "💬",
    title: "Conversational Analytics",
    desc: "Ask questions in plain English and get instant, actionable answers from your SAP data.",
  },
];

// Floating node for the network animation
function NetworkNodes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const nodeCount = 30;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      // Update positions
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 180, 230, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 200, 255, 0.5)";
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

export default function CultureSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  return (
    <section className="relative overflow-hidden" id="ai" style={{ background: "#070b10" }}>
      {/* Network animation background */}
      <NetworkNodes />

      {/* Cyan glow accents */}
      <div
        className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,180,230,.15) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-[-150px] left-[-150px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,220,255,.08) 0%, transparent 65%)" }}
      />

      <div className="section-container relative z-10 py-24 md:py-32">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="text-[.65rem] font-bold tracking-[.2em] uppercase mb-5 flex items-center gap-3"
              style={{ color: "#00b4e6" }}
            >
              <span className="inline-block w-8 h-px" style={{ background: "#00b4e6" }} />
              AI-Powered SAP
            </div>

            <h2
              className="font-bold leading-[1.08] tracking-tight mb-5"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.4rem)", color: "#f2f2f2" }}
            >
              AI-Powered SAP{" "}
              <span
                className="italic"
                style={{
                  background: "linear-gradient(135deg, #00b4e6, #00e5ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                with Joule
              </span>
            </h2>

            <p className="text-[1.05rem] font-light leading-[1.8] mb-6" style={{ color: "rgba(255,255,255,.55)" }}>
              Unlock intelligent finance operations with SAP's AI copilot.
            </p>

            <p className="text-[.9rem] font-light leading-[1.85] mb-8" style={{ color: "rgba(255,255,255,.4)" }}>
              SAP Joule introduces a new era of enterprise intelligence by embedding AI directly into SAP applications.
              Kannanware helps organizations integrate Joule into their SAP landscape to transform finance operations,
              automate complex processes, and generate real-time insights that drive better decisions.
            </p>

            {/* Joule conversation demo */}
            <div className="rounded-xl overflow-hidden mb-8" style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(0,180,230,.15)" }}>
              {/* Ask */}
              <motion.div
                className="p-4 flex gap-3 items-start"
                style={{ borderBottom: "1px solid rgba(0,180,230,.08)" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[.65rem] font-bold"
                  style={{ background: "rgba(0,180,230,.15)", color: "#00d4ff" }}
                >
                  Q
                </div>
                <div>
                  <div className="text-[.7rem] font-bold uppercase tracking-wider mb-1" style={{ color: "#00b4e6" }}>
                    Ask Joule
                  </div>
                  <p className="text-[.85rem]" style={{ color: "rgba(255,255,255,.7)" }}>
                    "What is the biggest variance in Q3 revenue?"
                  </p>
                </div>
              </motion.div>

              {/* Answer */}
              <motion.div
                className="p-4 flex gap-3 items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[.65rem] font-bold"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,180,230,.2), rgba(0,229,255,.2))",
                    color: "#00e5ff",
                    boxShadow: "0 0 15px rgba(0,200,255,.15)",
                  }}
                >
                  AI
                </div>
                <div>
                  <div className="text-[.7rem] font-bold uppercase tracking-wider mb-1" style={{ color: "#00e5ff" }}>
                    AI Insight
                  </div>
                  <p className="text-[.85rem]" style={{ color: "rgba(255,255,255,.7)" }}>
                    "Revenue decline detected in Region A due to delayed receivables."
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glow behind image */}
            <div
              className="absolute -inset-8 rounded-3xl blur-[80px] pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,180,230,.2) 0%, transparent 70%)" }}
            />

            <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,180,230,.12)" }}>
              <img
                src={jouleDashboard}
                alt="AI-powered SAP Joule dashboard analyzing financial data"
                className="w-full h-auto object-cover"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(180deg, rgba(7,11,16,.2) 0%, rgba(7,11,16,.6) 100%)",
                }}
              />

              {/* Badge on image */}
              <div className="absolute bottom-5 left-5 right-5">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg"
                  style={{ background: "rgba(0,0,0,.6)", backdropFilter: "blur(12px)", border: "1px solid rgba(0,180,230,.2)" }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: "#00e5ff", boxShadow: "0 0 8px rgba(0,229,255,.6)" }} />
                  <span className="text-[.72rem] font-medium" style={{ color: "rgba(255,255,255,.7)" }}>
                    Joule AI — Live Financial Intelligence
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Four capability cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-20">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group relative p-6 rounded-xl cursor-none"
              style={{
                background: "rgba(255,255,255,.02)",
                border: "1px solid rgba(0,180,230,.1)",
                transition: "border-color 0.3s, background 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,180,230,.3)";
                (e.currentTarget as HTMLElement).style.background = "rgba(0,180,230,.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,180,230,.1)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.02)";
              }}
            >
              {/* Glow dot */}
              <div
                className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full"
                style={{ background: "#00e5ff", boxShadow: "0 0 10px rgba(0,229,255,.4)" }}
              />

              <div className="text-2xl mb-4">{cap.icon}</div>
              <h4 className="text-[.88rem] font-semibold mb-2" style={{ color: "#f2f2f2" }}>
                {cap.title}
              </h4>
              <p className="text-[.78rem] font-light leading-[1.7]" style={{ color: "rgba(255,255,255,.4)" }}>
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
