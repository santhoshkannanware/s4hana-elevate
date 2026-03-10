import { useEffect, useRef } from "react";
import cursorK from "@/assets/k-cursor-clean.png";

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useRef(0);
  const my = useRef(0);
  const cx = useRef(0);
  const cy = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], input, textarea, select, [data-hover]")) {
        document.body.classList.add("cursor-hover");
      }
    };
    const onOut = () => document.body.classList.remove("cursor-hover");

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    let raf: number;
    const loop = () => {
      cx.current += (mx.current - cx.current) * 0.14;
      cy.current += (my.current - cy.current) * 0.14;
      if (ref.current) {
        ref.current.style.transform = `translate(${cx.current}px, ${cy.current}px)`;
      }
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
        className="cursor-k-img w-8 h-8 block transition-transform duration-200"
        style={{
          filter: "drop-shadow(0 2px 6px rgba(0,0,0,.4))",
        }}
      />
      <style>{`
        body { cursor: none; }
        body.cursor-hover .cursor-k-img { transform: scale(1.35); filter: drop-shadow(0 4px 12px rgba(230,165,20,.6)) !important; }
        @media (max-width: 768px) { body { cursor: auto !important; } }
      `}</style>
    </div>
  );
}
