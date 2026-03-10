import { useEffect, useRef } from "react";

const CURSOR_K_SRC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFWUlEQVR4nMVWaWxUVRg9d5mt02mnhVK6hBahUMAFAkgqBQEVCJCo4BSIihKJJIhp1CBCgTdTICwubApCUKJIgjMVbbVsAgMoICkKEQ2gyBKgEAhtaTudzsx77/PHaisVSMo0Ld+v+/Leu+fc85177gXav9gDwDRKUcAfGLjX5RIAkNu3e5KrYQygfRh5vS6R5/Np+ZP6Tu6a6hgCtJMaigJOXmO1i197ZN3qWcPeYYy1D7jXBcGY4bfixdne1fk9dwPgXhcE2tqIfgWyYZhYtib70MGPsosBgIhYm4Mfex0mAHA97Mi58EXXsyfWdjsAAOR1CWpjcEZ+Y+XLpyY+fXFTuv77yi7nASQRKbxN+64AXDRM/8m0jLdrv08KX/gy+Ux2DFI4b2PHG2YDAMQVz0tdRbsT6NLm5MvTRqelN75vM3DyNk6eGPdtQecjtDeOzn2WGJ78ROcxAKD8Z8aoivmVJ+W95Gt0+rgBnQee+jTtKO2z0tUtzvD88V0m3P4+qrpN1rsSO7becPqKGZlD/1zbqYZ+FFS5NUErmt16cEbUtGLL9oVZby57Na1RTk4AEw2ifzglec61rzqGaIcI13/jpOVT0j4AgGPr+5uiBW+qDTN7jPh1VfIJ2pVEH05NcAPApldg5QY12y53+pLgNidRCSJaSTxtfivl49vAo9rrjAjs+SEdU0oKUnfWeDsQlQqiUhl5f5pjlqKAGy3JsO6Yl7KHdsQTFSNIpQ46uMwAJ4ouYjkAeF3gjIEynNTrmf7hUbHWmxrqtBA0k7RIYfF4oI/v2+nRMxsjO0fnVj6Fulv1sMZYtx+L2z109tWZ5IcEgw6A7pdAM7PYuBYJBEiz2sF0zjgXQHWNXrFiVmbPkd0CB3qkVzjVmvqwtJsth4/HHh2rVE0hgnAz6J4owJsUaHoglXEwAQ4QQWqRCDKdctoLfaqP9M6ocIar6jVpk/L8OcF2/VLH+yO7wucDPIAeDfgdBFRI6AyAcWowRDS8ODLQL915KyFcrenmGM4uXLTw/WURdeIg88CXp5QvzcuD1pptd0fIMGrwEcGIuUhI10Kabo4R/GaFnfuPqtQn1Sw7mGrUnG6h/MmDk3JHFEJ1RRm5d6Yca2glcUQkoGqMCTvj5ZXOqnU/iEN9uphYB2eIbtUznukIief6yg1EsLhcxt+tJ2CIDxIEpjKSZmhVdYnhn05Zx88vMo0O6LHXbVIS44SaUFDN6V7ba8mEzoV5edAU5f5VuIMANZpZZZAWXQ2QU67dZlk4ackVP2M3an/+W7xRrcVyyXUiXQim1mkjH4vMmDU2LauwEOr9Hr3NTShVQwECCZOmaog3bdljWVawtXwR+SH3LYBc4LtS9Nsl8bXdahVcJ70uLFhaXCB2UJb6ORH4MGPOFreiGQGrKsF0AAwqbHFy7x+OpdPXXnuPCIINh7of0InANu6ggpPXLAFLDGOMGKutC2sDuoRyV77UMX+4B6rX23IVmn1YLwGVqzrsNkvpEcfWUXMvzyE/JDNSDh4PdLcbwn/2xj/+U2JOWLdzk1C1MOPcrAbVxzNp0eSclGyXC3pLW9HsI3OwXusUG8v3lDkOjSu8MoP8kGx484j1eKCRF2Jx8Y01h8+b98fYzNJMajgY0bWsxFrLuH6RdYyB3NEokJAUYy856Tg+ce71MZyj0m2A/z/lKM8HkAJeVCann77hCDli4yzSarYESYjhvfkwz8QMN/NAb8mNSAJAng8aAJyuSjry7vzAYABBRQe/V8T6fNDcCvh3ZeV/PdQp89mLPRxZ4bqgHoEJ8TbOrHbnJeAi7kK+ZdXS+ztR6+/5/wLyBTeNnMThegAAAABJRU5ErkJggg==";

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
      style={{ width: 32, height: 32, top: 0, left: 0, willChange: "transform" }}
    >
      <img
        src={CURSOR_K_SRC}
        alt=""
        draggable={false}
        className="w-8 h-8 block transition-transform duration-200"
        style={{
          filter: "drop-shadow(0 2px 6px rgba(0,0,0,.5))",
        }}
      />
      <style>{`
        body.cursor-hover img { transform: scale(1.35); filter: drop-shadow(0 4px 12px rgba(230,165,20,.6)) !important; }
        @media (max-width: 768px) { body { cursor: auto !important; } }
      `}</style>
    </div>
  );
}