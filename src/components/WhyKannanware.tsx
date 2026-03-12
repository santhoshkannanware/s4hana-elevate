import { useEffect, useRef, useState } from "react";
import { useRegion } from "@/contexts/RegionContext";
import { getMetrics } from "@/data/regionContent";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const dur = 2000;
    const steps = 60;
    const inc = target / steps;
    let cur = 0;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(cur));
    }, dur / steps);
    return () => clearInterval(t);
  }, [started, target]);

  return <div ref={ref}>{count}{suffix}</div>;
}

export default function WhyKannanware() {
  const { region } = useRegion();
  const metrics = getMetrics(region);

  return (
    <div className="relative overflow-hidden" style={{ background: "#0c0c0c" }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")"
      }} />
      <div className="h-[1px] w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(232,160,0,.4), transparent)" }} />
      <div className="py-10">
        <div className="flex w-max" style={{ animation: "ticker 30s linear infinite" }}>
          {[...metrics, ...metrics].map((m, i) => (
            <div key={i} className="flex flex-col items-center px-12 shrink-0 min-w-[260px]">
              <div className="text-[3.2rem] font-bold text-white leading-none tracking-[-0.04em] mb-2">
                <CountUp target={m.target} suffix={m.suffix} />
              </div>
              <div className="text-[.92rem] text-white/65 font-light leading-[1.5] text-center">{m.label}</div>
              <div className="text-[.82rem] text-[rgba(232,160,0,.7)] font-normal leading-[1.45] mt-1 tracking-[.01em] text-center">{m.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[1px] w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(232,160,0,.4), transparent)" }} />
    </div>
  );
}
