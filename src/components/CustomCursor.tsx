import { useEffect, useRef } from "react";
import cursorK from "@/assets/k-cursor-clean.png";

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ mx: 0, my: 0, cx: 0, cy: 0 });

  useEffect(() => {
    // Skip on touch devices
    if (typeof matchMedia !== "undefined" && matchMedia("(pointer: coarse)").matches) return;

    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], input, textarea, select, [data-hover]")) {
        document.body.classList.add("cursor-hover");
      }
    };
    const onOut = () => document.body.classList.remove("cursor-hover");

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    let raf: number;
    const loop = () => {
      const p = pos.current;
      p.cx += (p.mx - p.cx) * 0.45;
      p.cy += (p.my - p.cy) * 0.45;
      el.style.transform = `translate3d(${p.cx}px, ${p.cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed pointer-events-none z-[99999] hidden md:block"
      style={{ width: 32, height: 32, top: -4, left: -4, willChange: "transform" }}
    >
      <img
        src={cursorK}
        alt=""
        draggable={false}
        className="cursor-k-img w-8 h-8 block transition-transform duration-150"
        style={{
          filter: "drop-shadow(0 2px 6px rgba(0,0,0,.4))",
        }}
      />
      <style>{`
        @media (min-width: 769px) { body { cursor: none !important; } }
        body.cursor-hover .cursor-k-img { transform: scale(1.35); filter: drop-shadow(0 4px 12px rgba(230,165,20,.6)) !important; }
        @media (max-width: 768px) { body { cursor: auto !important; } }
      `}</style>
    </div>
  );
}
