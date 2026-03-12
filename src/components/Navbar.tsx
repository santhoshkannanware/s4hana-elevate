import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Globe } from "lucide-react";
import { useRegion, REGIONS, type Region } from "@/contexts/RegionContext";

const LOGO_SVG = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTQwIDcwIj48ZGVmcz48c3R5bGU+LmNscy0xLC5jbHMtMntmaWxsOm5vbmU7fS5jbHMtMXtjbGlwLXJ1bGU6ZXZlbm9kZDt9LmNscy0ze2ZpbGw6I2ZmZjt9LmNscy00e2ZpbGw6I2RiODYwNDt9LmNscy00LC5jbHMtOXtmaWxsLXJ1bGU6ZXZlbm9kZDt9LmNscy01e2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aCk7fS5jbHMtNntjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgtMik7fS5jbHMtN3tjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgtMyk7fS5jbHMtOHtvcGFjaXR5OjAuNTt9LmNscy05e2ZpbGw6I2ZmYWMwMDt9PC9zdHlsZT48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjU4LjUzIDMwLjYgNjIuODcgMjQuNjUgNzUuNzQgNDQuMzIgNjcuNDQgNDQuMzIgNTguNTMgMzAuNiIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtMiI+PHJlY3QgY2xhc3M9ImNscy0yIiB4PSI0NS44NyIgeT0iLTAuOTkiIHdpZHRoPSI0My43NyIgaGVpZ2h0PSI0Ny45MiIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtMyI+PHJlY3QgY2xhc3M9ImNscy0yIiB4PSI1OC40OCIgeT0iMjQuNTIiIHdpZHRoPSIxNy41MSIgaGVpZ2h0PSIxOS44NCIvPjwvY2xpcFBhdGg+PC9kZWZzPjx0aXRsZT5maW5hbF9rYW5uYW53YXJlX2xvZ28tMDAyPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xMjguMjQsNTYuMzlWNTQuODFoNnYxLjU4Wk0xMjUsNjEuMDhWNTAuM2g5LjYzdjEuODhoLTcuNzZ2N2g3Ljc3djEuODhabS0zLjY1LDAtMi43My0zaC00VjU2LjQyaDQuNWEyLDIsMCwwLDAsMS41NC0uNTUsMi4yNiwyLjI2LDAsMCwwLC41Mi0xLjYxLDIuMDYsMi4wNiwwLDAsMC0uNTQtMS41NywyLjEzLDIuMTMsMCwwLDAtMS41Mi0uNTFoLTUuODh2OC45aC0xLjg3VjUwLjNoNy43NWE0Ljc2LDQuNzYsMCwwLDEsMS42NS4yNywzLjMsMy4zLDAsMCwxLDEuMjMuNzksMy40NywzLjQ3LDAsMCwxLC43NywxLjI0LDQuNiw0LjYsMCwwLDEsLjI3LDEuNjMsNC4xMSw0LjExLDAsMCwxLS41OSwyLjI2LDMuMjMsMy4yMywwLDAsMS0xLjY0LDEuMzFMMTI0LDYxLjA4Wm0tMTMuNDQsMC0xLjYyLTIuNzFoLTUuMWwuODktMS41M2gzLjMxbC0yLjQxLTQtNC44OSw4LjI4SDk1LjkybDYuMjEtMTAuMzJhMS40MiwxLjQyLDAsMCwxLC4zOC0uNDUuODkuODksMCwwLDEsLjU0LS4xNi44My44MywwLDAsMSwuNTIuMTYsMS40MiwxLjQyLDAsMCwxLC4zOC40NWw2LjIyLDEwLjMyWm0tMTguMjQtMy42TDg4LDYwLjY0YTEuMTksMS4xOSwwLDAsMS0uNDIuNDQsMS4wNiwxLjA2LDAsMCwxLS41NS4xNSwxLjA3LDEuMDcsMCwwLDEtMS0uNTlMODAuNDYsNTAuM2gyLjI2bDQuMzYsOC4yOSwxLjYzLTIuOTQtMi44LTUuMzVoMi4yN2w0LjE3LDguMjksNC4zOS04LjI5aDIuMTFMOTMuMjcsNjAuNjRhMS4xOSwxLjE5LDAsMCwxLS40Mi40NCwxLjEyLDEuMTIsMCwwLDEtLjU2LjE1LDEuMDYsMS4wNiwwLDAsMC0uNTUtLjE1LDEuMDksMS4wOSwwLDAsMC0uNDEtLjQ0Wk03MCw1My4xOXY3Ljg5aC0xLjhWNTEuMjlhMS4yMiwxLjIyLDAsMCwxLC4yNi0uODIuODguODgsMCwwLDEsLjcxLS4zMS45My45MywwLDAsMSwuNC4wOSwxLjQ0LDEuNDQsMCwwLDEsLjQuM2w3LjYxLDcuNTVWNTAuMjFoMS44djkuODhhMS4yNSwxLjI1LDAsMCwxLS4yNi44My44Ni44NiwwLDAsMS0uNjguMjksMS4yMSwxLjIxLDAsMCwxLS44Ni0uNFptLTUuMTgsNy44OS0xLjYyLTIuNzFoLTUuMUw1OSw1Ni44NGgzLjMxbC0yLjQtNEw1NSw2MS4wOEg1Mi44NEw1OSw1MC43NmExLjQ0LDEuNDQsMCwwLDEsLjM5LS40NS44NC44NCwwLDAsMSwuNTMtLjE2Ljg2Ljg2LDAsMCwxLC41My4xNiwxLjU2LDEuNTYsMCwwLDEsLjM4LjQ1bDYuMjEsMTAuMzJaTTQyLjM2LDUzLjE5djcuODlINDAuNTdWNTEuMjlhMS4yMiwxLjIyLDAsMCwxLC4yNi0uODIuODYuODYsMCwwLDEsLjctLjMxLjkuOSwwLDAsMSwuNC4wOSwxLjMxLDEuMzEsMCwwLDEsLjQuM0w1MCw1OC4xVjUwLjIxaDEuNzl2OS44OGExLjI1LDEuMjUsMCwwLDEtLjI2LjgzLjg0Ljg0LDAsMCwxLS42Ny4yOSwxLjE3LDEuMTcsMCwwLDEtLjg2LS40Wm0tMTIuOTUsMHY3Ljg5SDI3LjYyVjUxLjI5YTEuMTcsMS4xNywwLDAsMSwuMjYtLjgyLjg0Ljg0LDAsMCwxLC43LS4zMS45My45MywwLDAsMSwuNC4wOSwxLjQ0LDEuNDQsMCwwLDEsLjQuM0wzNyw1OC4xVjUwLjIxaDEuOHY5Ljg4YTEuMjUsMS4yNSwwLDAsMS0uMjYuODMuODQuODQsMCwwLDEtLjY4LjI5LDEuMjEsMS4yMSwwLDAsMC0uODYtLjRabS01LjE4LDcuODktMS42MS0yLjcxSDE3LjUxbC44OS0xLjUzaDMuMzFsLTIuNC00LTQuOSw4LjI4SDEyLjI2bDYuMi0xMC4zMmExLjQ0LDEuNDQsMCwwLDEsLjM5LS40NS44Ni44NiwwLDAsMSwuNTMtLjE2Ljg0Ljg0LDAsMCwxLC41My4xNiwxLjU2LDEuNTYsMCwwLDEsLjM4LjQ1TDI2LjUsNjEuMDhaTTAsNjEuMDhWNTAuM0gxLjg5VjYxLjA0Wm04Ljg5LDAtNi00Ljc1QTEsMSwwLDAsMSwyLjUzLDU2YTEuMzUsMS4zNSwwLDAsMS0uMDYtLjQxLDEuMDYsMS4wNiwwLDAsMSwuMDktLjQ1LDEuMTYsMS4xNiwwLDAsMSwuMzgtLjQxTDguNjYsNTAuM2gyLjg5TDQuNDksNTUuNTZsNy4yOCw1LjUyWiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNCIgcG9pbnRzPSI1OC41MyAzMC42IDYyLjg3IDI0LjY1IDc1Ljc0IDQ0LjMyIDY3LjQ0IDQ0LjMyIDU4LjUzIDMwLjYiLz48ZyBjbGFzcz0iY2xzLTUiPjxnIGNsYXNzPSJjbHMtNiI+PGcgY2xhc3M9ImNscy03Ij48L2c+PC9nPjwvZz48cG9seWdvbiBjbGFzcz0iY2xzLTkiIHBvaW50cz0iNTQuMTQgMTguNzYgNDcuMjkgMjIuNzUgNDcuMjkgNDQuMzEgODcuMzcgMC4wNiA1NC4xOSAyNy44NyA1NC4xNCAxOC43NiIvPjwvc3ZnPg==";

interface DropdownItem {
  label: string;
  href?: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: DropdownItem[];
  glow?: boolean;
}

const navItems: NavItem[] = [
  {
    label: "SAP Product Expertise",
    children: [
      { label: "S4/HANA (Public & Private Cloud)", href: "/product-expertise/s4hana" },
      { label: "SAP® - BTP", href: "/product-expertise/btp" },
      { label: "SAP Data Sphere", href: "/product-expertise/data-sphere" },
      { label: "SAP® ECC", href: "/product-expertise/ecc" },
      { label: "SAP Analytics Cloud (Planning & Reporting)", href: "/product-expertise/analytics-cloud" },
      { label: "SAP BW4 HANA", href: "/product-expertise/bw4-hana" },
      { label: "Group Reporting", href: "/product-expertise/group-reporting" },
      { label: "Billing and Revenue Innovation Management", href: "/product-expertise/brim" },
      { label: "SAP Business Objects", href: "/product-expertise/business-objects" },
      { label: "Multi Banking Connectivity", href: "/product-expertise/multi-banking" },
      { label: "Agentic AI with Joule*", href: "/product-expertise/agentic-ai" },
    ],
  },
  {
    label: "Functions",
    children: [
      { label: "Record to Report", href: "/capability/record-to-report" },
      { label: "Source to Pay", href: "/capability/source-to-pay" },
      { label: "Treasury", href: "/capability/treasury" },
      { label: "Projects", href: "/capability/projects" },
      { label: "Operate and Maintain", href: "/capability/operate-and-maintain" },
      { label: "Order to Cash", href: "/capability/order-to-cash" },
    ],
  },
  {
    label: "Industries",
    children: [
      { label: "Energy & Natural Resources", href: "/industry/energy" },
      { label: "Discrete Manufacturing", href: "#industries" },
      { label: "Services Management", href: "#industries" },
      { label: "Financial Services", href: "#industries" },
      { label: "Public Services", href: "#industries" },
      { label: "Consumer", href: "#industries" },
      { label: "Food & Beverage", href: "#industries" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Advisory", href: "/services/advisory" },
      { label: "Execution", href: "/services/execution" },
      { label: "Experts as a Service (EaaS)", href: "/services/eaas" },
    ],
  },
  {
    label: "Insights",
    children: [
      { label: "Blogs", href: "#insights" },
      { label: "Case Studies", href: "#insights" },
      { label: "Knowledge Base", href: "#insights" },
    ],
  },
  {
    label: "KIN AI Expertise",
    glow: true,
    children: [
      { label: "CV Optimiser", href: "/products/cv-optimiser" },
      { label: "AI Resume Builder", href: "/products/ai-resume-builder" },
      { label: "SAP Talent Matcher", href: "/products/talent-matcher" },
    ],
  },
];

function RegionSelector() {
  const { region, setRegion } = useRegion();
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const current = REGIONS.find((r) => r.code === region) || REGIONS[0];

  const enter = () => { clearTimeout(timeout.current); setOpen(true); };
  const leave = () => { timeout.current = setTimeout(() => setOpen(false), 150); };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button className="flex items-center gap-1.5 text-[.82rem] font-medium text-white/60 hover:text-gold transition-colors cursor-none bg-transparent border border-white/10 rounded px-2.5 py-1.5 hover:border-gold/40">
        <Globe className="w-3.5 h-3.5" />
        <span>{current.flag}</span>
        <span className="uppercase tracking-wider">{current.code}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-2 min-w-[180px] rounded-md py-1 shadow-xl z-50 bg-[#181818] border border-white/10">
          {REGIONS.map((r) => (
            <button
              key={r.code}
              onClick={() => { setRegion(r.code); setOpen(false); }}
              className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-[.85rem] transition-colors cursor-none bg-transparent border-none text-left ${
                r.code === region ? "text-gold bg-gold/10" : "text-white/55 hover:text-gold hover:bg-white/5"
              }`}
            >
              <span className="text-base">{r.flag}</span>
              <span>{r.label}</span>
              {r.code === region && <span className="ml-auto text-gold text-xs">●</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function NavDropdown({ item }: { item: NavItem }) {
  const { regionPath } = useRegion();
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const enter = () => { clearTimeout(timeout.current); setOpen(true); };
  const leave = () => { timeout.current = setTimeout(() => setOpen(false), 150); };

  const isGlow = item.glow;

  return (
    <li className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button className={`flex items-center gap-1 text-[.88rem] font-normal no-underline transition-all duration-200 cursor-none bg-transparent border-none ${
        isGlow
          ? "text-gold font-semibold drop-shadow-[0_0_8px_rgba(232,160,0,.5)]"
          : "text-white/60 hover:text-gold"
      }`}>
        {isGlow && <span className="mr-0.5">✦</span>}
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          className={`absolute top-full right-0 mt-2 min-w-[220px] rounded-md py-2 shadow-xl animate-fade-in z-50 ${
            isGlow
              ? "bg-[#1a1400] border border-gold/30"
              : "bg-[#181818] border border-white/10"
          }`}
          style={isGlow ? { boxShadow: "0 8px 32px rgba(232,160,0,.2), 0 0 1px rgba(232,160,0,.4)" } : undefined}
        >
          {item.children?.map((child) => {
            const href = child.href?.startsWith("#") ? child.href : regionPath(child.href || "/");
            return (
              <a
                key={child.label}
                href={href}
                className={`block px-4 py-2 text-[.88rem] transition-colors duration-150 no-underline cursor-none ${
                  isGlow
                    ? "text-gold/70 hover:text-gold hover:bg-gold/10"
                    : "text-white/55 hover:text-gold hover:bg-white/5"
                }`}
              >
                {child.label}
              </a>
            );
          })}
        </div>
      )}
    </li>
  );
}

export default function Navbar() {
  const { region, regionPath } = useRegion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] h-16 flex items-center justify-between px-5 md:px-10 transition-all duration-400"
      style={{
        background: "#0c0c0c",
        boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,.07)" : "none",
      }}
    >
      <a href={regionPath("/")} className="flex items-center gap-3 no-underline cursor-none">
        <img src={LOGO_SVG} alt="Kannanware" className="h-9 w-auto block" />
        <span className="text-[.7rem] font-bold tracking-[.12em] uppercase text-gold border border-gold/35 px-2 py-0.5 ml-1">
          AI-First SAP
        </span>
      </a>

      <ul className="hidden lg:flex gap-7 list-none items-center">
        {navItems.map((item) =>
          item.children ? (
            <NavDropdown key={item.label} item={item} />
          ) : (
            <li key={item.label}>
              <a
                href={item.href?.startsWith("#") ? item.href : regionPath(item.href || "/")}
                className="text-[.88rem] font-normal text-white/60 no-underline transition-colors duration-200 hover:text-gold cursor-none"
              >
                {item.label}
              </a>
            </li>
          )
        )}
      </ul>

      <div className="hidden md:flex items-center gap-3">
        <RegionSelector />
        <button
          onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
          className="px-5 py-2.5 bg-gold text-black text-[.85rem] font-medium tracking-[.06em] border-none cursor-none transition-all duration-250 hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(232,160,0,.5)]"
        >
          BOOK A MEETING →
        </button>
      </div>

      {/* Mobile toggle */}
      <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
        <span className={`block w-6 h-[2px] bg-white transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
        <span className={`block w-6 h-[2px] bg-white transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-[2px] bg-white transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
      </button>

      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#0c0c0c] border-t border-white/10 lg:hidden">
          <div className="px-5 py-6 flex flex-col gap-1">
            {/* Mobile region selector */}
            <div className="flex gap-2 mb-4 pb-4 border-b border-white/10">
              {REGIONS.map((r) => (
                <MobileRegionButton key={r.code} r={r} />
              ))}
            </div>
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <MobileAccordion item={item} onClose={() => setMobileOpen(false)} />
                ) : (
                  <a href={item.href?.startsWith("#") ? item.href : regionPath(item.href || "/")} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-white/60 hover:text-gold transition-colors">
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <button className="mt-4 px-5 py-2.5 bg-gold text-black text-xs font-semibold tracking-wider">
              BOOK A MEETING →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function MobileRegionButton({ r }: { r: typeof REGIONS[number] }) {
  const { region, setRegion } = useRegion();
  return (
    <button
      onClick={() => setRegion(r.code)}
      className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded text-xs font-medium transition-colors cursor-none bg-transparent border ${
        region === r.code
          ? "border-gold/50 text-gold bg-gold/10"
          : "border-white/10 text-white/40 hover:text-gold"
      }`}
    >
      <span>{r.flag}</span>
      <span className="uppercase tracking-wider">{r.code}</span>
    </button>
  );
}

function MobileAccordion({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const { regionPath } = useRegion();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-2 text-sm text-white/60 hover:text-gold transition-colors bg-transparent border-none">
        {item.label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pl-4 pb-2 flex flex-col gap-1">
          {item.children?.map((child) => {
            const href = child.href?.startsWith("#") ? child.href : regionPath(child.href || "/");
            return (
              <a key={child.label} href={href} onClick={onClose} className="block py-1.5 text-xs text-white/45 hover:text-gold transition-colors">
                {child.label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
