import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Globe, X, Menu } from "lucide-react";
import { useRegion, REGIONS, type Region } from "@/contexts/RegionContext";

const LOGO_SVG = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTQwIDcwIj48ZGVmcz48c3R5bGU+LmNscy0xLC5jbHMtMntmaWxsOm5vbmU7fS5jbHMtMXtjbGlwLXJ1bGU6ZXZlbm9kZDt9LmNscy0ze2ZpbGw6I2ZmZjt9LmNscy00e2ZpbGw6I2RiODYwNDt9LmNscy00LC5jbHMtOXtmaWxsLXJ1bGU6ZXZlbm9kZDt9LmNscy01e2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aCk7fS5jbHMtNntjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgtMik7fS5jbHMtN3tjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgtMyk7fS5jbHMtOHtvcGFjaXR5OjAuNTt9LmNscy05e2ZpbGw6I2ZmYWMwMDt9PC9zdHlsZT48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjU4LjUzIDMwLjYgNjIuODcgMjQuNjUgNzUuNzQgNDQuMzIgNjcuNDQgNDQuMzIgNTguNTMgMzAuNiIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtMiI+PHJlY3QgY2xhc3M9ImNscy0yIiB4PSI0NS44NyIgeT0iLTAuOTkiIHdpZHRoPSI0My43NyIgaGVpZ2h0PSI0Ny45MiIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtMyI+PHJlY3QgY2xhc3M9ImNscy0yIiB4PSI1OC40OCIgeT0iMjQuNTIiIHdpZHRoPSIxNy41MSIgaGVpZ2h0PSIxOS44NCIvPjwvY2xpcFBhdGg+PC9kZWZzPjx0aXRsZT5maW5hbF9rYW5uYW53YXJlX2xvZ28tMDAyPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xMjguMjQsNTYuMzlWNTQuODFoNnYxLjU4Wk0xMjUsNjEuMDhWNTAuM2g5LjYzdjEuODhoLTcuNzZ2N2g3Ljc3djEuODhabS0zLjY1LDAtMi43My0zaC00VjU2LjQyaDQuNWEyLDIsMCwwLDAsMS41NC0uNTUsMi4yNiwyLjI2LDAsMCwwLC41Mi0xLjYxLDIuMDYsMi4wNiwwLDAsMC0uNTQtMS41NywyLjEzLDIuMTMsMCwwLDAtMS41Mi0uNTFoLTUuODh2OC45aC0xLjg3VjUwLjNoNy43NWE0Ljc2LDQuNzYsMCwwLDEsMS42NS4yNywzLjMsMy4zLDAsMCwxLDEuMjMuNzksMy40NywzLjQ3LDAsMCwxLC43NywxLjI0LDQuNiw0LjYsMCwwLDEsLjI3LDEuNjMsNC4xMSw0LjExLDAsMCwxLS41OSwyLjI2LDMuMjMsMy4yMywwLDAsMS0xLjY0LDEuMzFMMTI0LDYxLjA4Wm0tMTMuNDQsMC0xLjYyLTIuNzFoLTUuMWwuODktMS41M2gzLjMxbC0yLjQxLTQtNC44OSw4LjI4SDk1LjkybDYuMjEtMTAuMzJhMS40MiwxLjQyLDAsMCwxLC4zOC0uNDUuODkuODksMCwwLDEsLjU0LS4xNi44My44MywwLDAsMSwuNTIuMTYsMS40MiwxLjQyLDAsMCwxLC4zOC40NWw2LjIyLDEwLjMyWm0tMTguMjQtMy42TDg4LDYwLjY0YTEuMTksMS4xOSwwLDAsMS0uNDIuNDQsMS4wNiwxLjA2LDAsMCwxLS41NS4xNSwxLjA3LDEuMDcsMCwwLDEtMS0uNTlMODAuNDYsNTAuM2gyLjI2bDQuMzYsOC4yOSwxLjYzLTIuOTQtMi44LTUuMzVoMi4yN2w0LjE3LDguMjksNC4zOS04LjI5aDIuMTFMOTMuMjcsNjAuNjRhMS4xOSwxLjE5LDAsMCwxLS40Mi40NCwxLjEyLDEuMTIsMCwwLDEtLjU2LjE1LDEuMDYsMS4wNiwwLDAsMC0uNTUtLjE1LDEuMDksMS4wOSwwLDAsMC0uNDEtLjQ0Wk03MCw1My4xOXY3Ljg5aC0xLjhWNTEuMjlhMS4yMiwxLjIyLDAsMCwxLC4yNi0uODIuODguODgsMCwwLDEsLjcxLS4zMS45My45MywwLDAsMSwuNC4wOSwxLjQ0LDEuNDQsMCwwLDEsLjQuM2w3LjYxLDcuNTVWNTAuMjFoMS44djkuODhhMS4yNSwxLjI1LDAsMCwxLS4yNi44My44Ni44NiwwLDAsMS0uNjguMjksMS4yMSwxLjIxLDAsMCwxLS44Ni0uNFptLTUuMTgsNy44OS0xLjYyLTIuNzFoLTUuMUw1OSw1Ni44NGgzLjMxbC0yLjQtNEw1NSw2MS4wOEg1Mi44NEw1OSw1MC43NmExLjQ0LDEuNDQsMCwwLDEsLjM5LS40NS44NC44NCwwLDAsMSwuNTMtLjE2Ljg2Ljg2LDAsMCwxLC41My4xNiwxLjU2LDEuNTYsMCwwLDEsLjM4LjQ1bDYuMjEsMTAuMzJaTTQyLjM2LDUzLjE5djcuODlINDAuNTdWNTEuMjlhMS4yMiwxLjIyLDAsMCwxLC4yNi0uODIuODYuODYsMCwwLDEsLjctLjMxLjkuOSwwLDAsMSwuNC4wOSwxLjMxLDEuMzEsMCwwLDEsLjQuM0w1MCw1OC4xVjUwLjIxaDEuNzl2OS44OGExLjI1LDEuMjUsMCwwLDEtLjI2LjgzLjg0Ljg0LDAsMCwxLS42Ny4yOSwxLjE3LDEuMTcsMCwwLDEtLjg2LS40Wm0tMTIuOTUsMHY3Ljg5SDI3LjYyVjUxLjI5YTEuMTcsMS4xNywwLDAsMSwuMjYtLjgyLjg0Ljg0LDAsMCwxLC43LS4zMS45My45MywwLDAsMSwuNC4wOSwxLjQ0LDEuNDQsMCwwLDEsLjQuM0wzNyw1OC4xVjUwLjIxaDEuOHY5Ljg4YTEuMjUsMS4yNSwwLDAsMS0uMjYuODMuODQuODQsMCwwLDEtLjY4LjI5LDEuMjEsMS4yMSwwLDAsMC0uODYtLjRabS01LjE4LDcuODktMS42MS0yLjcxSDE3LjUxbC44OS0xLjUzaDMuMzFsLTIuNC00LTQuOSw4LjI4SDEyLjI2bDYuMi0xMC4zMmExLjQ0LDEuNDQsMCwwLDEsLjM5LS40NS44Ni44NiwwLDAsMSwuNTMtLjE2Ljg0Ljg0LDAsMCwxLC41My4xNiwxLjU2LDEuNTYsMCwwLDEsLjM4LjQ1TDI2LjUsNjEuMDhaTTAsNjEuMDhWNTAuM0gxLjg5VjYxLjA0Wm04Ljg5LDAtNi00Ljc1QTEsMSwwLDAsMSwyLjUzLDU2YTEuMzUsMS4zNSwwLDAsMS0uMDYtLjQxLDEuMDYsMS4wNiwwLDAsMSwuMDktLjQ1LDEuMTYsMS4xNiwwLDAsMSwuMzgtLjQxTDguNjYsNTAuM2gyLjg5TDQuNDksNTUuNTZsNy4yOCw1LjUyWiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNCIgcG9pbnRzPSI1OC41MyAzMC42IDYyLjg3IDI0LjY1IDc1Ljc0IDQ0LjMyIDY3LjQ0IDQ0LjMyIDU4LjUzIDMwLjYiLz48ZyBjbGFzcz0iY2xzLTUiPjxnIGNsYXNzPSJjbHMtNiI+PGcgY2xhc3M9ImNscy03Ij48L2c+PC9nPjwvZz48cG9seWdvbiBjbGFzcz0iY2xzLTkiIHBvaW50cz0iNTQuMTQgMTguNzYgNDcuMjkgMjIuNzUgNDcuMjkgNDQuMzEgODcuMzcgMC4wNiA1NC4xOSAyNy44NyA1NC4xNCAxOC43NiIvPjwvc3ZnPg==";

/* ─── Mega-menu data structure ─── */
interface SubItem {
  label: string;
  href: string;
}

interface Category {
  label: string;
  href?: string;
  children?: SubItem[];
}

interface MegaTab {
  label: string;
  categories: Category[];
  glow?: boolean;
}

const megaTabs: MegaTab[] = [
  {
    label: "Products",
    categories: [
      {
        label: "Cloud ERP",
        children: [
          { label: "S/4HANA (Public & Private Cloud)", href: "/products/cloud-erp/s4hana" },
          { label: "SAP® ECC", href: "/products/cloud-erp/ecc" },
          { label: "Group Reporting", href: "/products/cloud-erp/group-reporting" },
          { label: "BRIM", href: "/products/cloud-erp/brim" },
        ],
      },
      {
        label: "Data & Analytics",
        children: [
          { label: "SAP Data Sphere", href: "/products/data-analytics/data-sphere" },
          { label: "SAP Analytics Cloud", href: "/products/data-analytics/analytics-cloud" },
          { label: "SAP BW/4HANA", href: "/products/data-analytics/bw4-hana" },
          { label: "SAP Business Objects", href: "/products/data-analytics/business-objects" },
        ],
      },
      {
        label: "Technology Platform",
        children: [
          { label: "SAP® BTP", href: "/products/technology-platform/btp" },
          { label: "Multi Banking Connectivity", href: "/products/technology-platform/multi-banking" },
        ],
      },
      {
        label: "Artificial Intelligence",
        children: [
          { label: "Agentic AI with Joule", href: "/products/artificial-intelligence/agentic-ai" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    categories: [
      { label: "Energy & Natural Resources", href: "/industries/energy" },
      { label: "Discrete Manufacturing", href: "/industries/discrete-manufacturing" },
      { label: "Services Management", href: "/industries/services-management" },
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Public Services", href: "/industries/public-services" },
      { label: "Consumer", href: "/industries/consumer" },
      { label: "Food & Beverage", href: "/industries/food-beverage" },
    ],
  },
  {
    label: "Transform & Manage",
    categories: [
      {
        label: "Functions",
        children: [
          { label: "Record to Report", href: "/transform-manage/functions/record-to-report" },
          { label: "Source to Pay", href: "/transform-manage/functions/source-to-pay" },
          { label: "Treasury", href: "/transform-manage/functions/treasury" },
          { label: "Projects", href: "/transform-manage/functions/projects" },
          { label: "Operate and Maintain", href: "/transform-manage/functions/operate-and-maintain" },
          { label: "Order to Cash", href: "/transform-manage/functions/order-to-cash" },
        ],
      },
      {
        label: "Services",
        children: [
          { label: "Advisory", href: "/transform-manage/services/advisory" },
          { label: "Execution", href: "/transform-manage/services/execution" },
          { label: "Experts as a Service (EaaS)", href: "/transform-manage/services/eaas" },
        ],
      },
    ],
  },
  {
    label: "Insights",
    categories: [
      { label: "Blogs", href: "/insights/blogs" },
      { label: "Case Studies", href: "/insights/case-studies" },
      { label: "Knowledge Base", href: "/insights/knowledge-base" },
    ],
  },
  {
    label: "KIN AI",
    glow: true,
    categories: [
      { label: "CV Optimiser", href: "/kin-ai/cv-optimiser" },
      { label: "AI Resume Builder", href: "/kin-ai/ai-resume-builder" },
      { label: "SAP Talent Matcher", href: "/kin-ai/talent-matcher" },
    ],
  },
];

/* ─── Region Selector ─── */
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

/* ─── Mega Menu Panel ─── */
function MegaMenuPanel({ tab, onClose }: { tab: MegaTab; onClose: () => void }) {
  const { regionPath } = useRegion();
  const [expandedCat, setExpandedCat] = useState<string | null>(null);
  const hasSubItems = tab.categories.some((c) => c.children);

  return (
    <div
      className="absolute top-full left-0 right-0 z-50 animate-fade-in"
      style={{ background: "#111" }}
    >
      <div className="max-w-7xl mx-auto px-8 py-8">
        {hasSubItems ? (
          /* Categories with expandable sub-items */
          <div className="grid grid-cols-[280px_1fr] gap-0 min-h-[280px]">
            {/* Left: category list */}
            <div className="border-r border-white/10 pr-6">
              {tab.categories.map((cat) => {
                const isExpanded = expandedCat === cat.label;
                const hasSubs = !!cat.children;
                return (
                  <button
                    key={cat.label}
                    onClick={() => {
                      if (hasSubs) {
                        setExpandedCat(isExpanded ? null : cat.label);
                      } else if (cat.href) {
                        window.location.href = regionPath(cat.href);
                        onClose();
                      }
                    }}
                    className={`w-full flex items-center justify-between py-3.5 px-4 text-[.95rem] font-medium transition-all duration-200 cursor-none bg-transparent border-none rounded-md text-left group ${
                      isExpanded
                        ? "text-gold bg-white/5"
                        : "text-white/70 hover:text-white hover:bg-white/[0.03]"
                    }`}
                  >
                    <span>{cat.label}</span>
                    {hasSubs && (
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-200 text-white/30 group-hover:text-white/60 ${
                          isExpanded ? "rotate-90 text-gold" : ""
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right: sub-items */}
            <div className="pl-8 py-2">
              {expandedCat ? (
                <div className="animate-fade-in">
                  <p className="text-[.7rem] uppercase tracking-[.2em] text-gold/60 mb-4 font-semibold">
                    {expandedCat}
                  </p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    {tab.categories
                      .find((c) => c.label === expandedCat)
                      ?.children?.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href.startsWith("#") ? sub.href : regionPath(sub.href)}
                          onClick={onClose}
                          className="block py-2.5 px-3 text-[.9rem] text-white/55 hover:text-gold hover:bg-white/[0.04] rounded-md transition-colors no-underline cursor-none"
                        >
                          {sub.label}
                        </a>
                      ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-white/20 text-sm">
                  Select a category to explore
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Simple list (Industries, Insights, KIN AI) */
          <div className={`grid gap-1 ${tab.categories.length > 4 ? "grid-cols-2 max-w-xl" : "max-w-sm"}`}>
            {tab.categories.map((cat) => (
              <a
                key={cat.label}
                href={cat.href?.startsWith("#") ? cat.href : regionPath(cat.href || "/")}
                onClick={onClose}
                className={`block py-3 px-4 text-[.95rem] font-medium rounded-md transition-colors no-underline cursor-none ${
                  tab.glow
                    ? "text-gold/70 hover:text-gold hover:bg-gold/10"
                    : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {cat.label}
              </a>
            ))}
          </div>
        )}
      </div>
      {/* Bottom border accent */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </div>
  );
}

/* ─── Main Navbar ─── */
export default function Navbar() {
  const { regionPath } = useRegion();
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mega menu on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveTab(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleTabEnter = (label: string) => {
    clearTimeout(timeout.current);
    setActiveTab(label);
  };

  const handleTabLeave = () => {
    timeout.current = setTimeout(() => setActiveTab(null), 200);
  };

  const handlePanelEnter = () => {
    clearTimeout(timeout.current);
  };

  const currentTab = megaTabs.find((t) => t.label === activeTab);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-400"
      style={{
        background: "#0c0c0c",
        boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,.07)" : "none",
      }}
    >
      {/* Top bar */}
      <div className="h-16 flex items-center justify-between px-5 md:px-10">
        <Link to={regionPath("/")} className="flex items-center gap-3 no-underline cursor-none">
          <img src={LOGO_SVG} alt="Kannanware" className="h-9 w-auto block" />
          <span className="text-[.7rem] font-bold tracking-[.12em] uppercase text-gold border border-gold/35 px-2 py-0.5 ml-1">
            AI-First SAP
          </span>
        </Link>

        {/* Desktop tabs */}
        <ul className="hidden lg:flex gap-1 list-none items-center">
          {megaTabs.map((tab) => {
            const isActive = activeTab === tab.label;
            return (
              <li
                key={tab.label}
                onMouseEnter={() => handleTabEnter(tab.label)}
                onMouseLeave={handleTabLeave}
              >
                <button
                  className={`px-4 py-2 text-[.88rem] font-medium transition-all duration-200 cursor-none bg-transparent border-none rounded-md relative ${
                    tab.glow
                      ? "text-gold drop-shadow-[0_0_8px_rgba(232,160,0,.4)]"
                      : isActive
                        ? "text-white"
                        : "text-white/55 hover:text-white/80"
                  }`}
                >
                  {tab.glow && <span className="mr-1">✦</span>}
                  {tab.label}
                  {/* Active indicator line */}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gold rounded-full" />
                  )}
                </button>
              </li>
            );
          })}
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
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
          {mobileOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Desktop mega menu panel */}
      {currentTab && (
        <div onMouseEnter={handlePanelEnter} onMouseLeave={handleTabLeave}>
          <MegaMenuPanel tab={currentTab} onClose={() => setActiveTab(null)} />
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0c0c0c] border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <div className="px-5 py-6 flex flex-col gap-1">
            {/* Mobile region selector */}
            <div className="flex gap-2 mb-4 pb-4 border-b border-white/10">
              {REGIONS.map((r) => (
                <MobileRegionButton key={r.code} r={r} />
              ))}
            </div>
            {megaTabs.map((tab) => (
              <MobileTabAccordion key={tab.label} tab={tab} onClose={() => setMobileOpen(false)} />
            ))}
            <button
              onClick={() => { document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" }); setMobileOpen(false); }}
              className="mt-4 px-5 py-2.5 bg-gold text-black text-xs font-semibold tracking-wider"
            >
              BOOK A MEETING →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ─── Mobile helpers ─── */
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

function MobileTabAccordion({ tab, onClose }: { tab: MegaTab; onClose: () => void }) {
  const { regionPath } = useRegion();
  const [open, setOpen] = useState(false);
  const [expandedCat, setExpandedCat] = useState<string | null>(null);
  const hasSubItems = tab.categories.some((c) => c.children);

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between w-full py-3 text-sm font-medium transition-colors bg-transparent border-none ${
          tab.glow ? "text-gold" : "text-white/65 hover:text-gold"
        }`}
      >
        <span>{tab.glow && "✦ "}{tab.label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pl-2 pb-3 flex flex-col gap-0.5">
          {tab.categories.map((cat) => {
            if (cat.children) {
              const isExp = expandedCat === cat.label;
              return (
                <div key={cat.label}>
                  <button
                    onClick={() => setExpandedCat(isExp ? null : cat.label)}
                    className="flex items-center justify-between w-full py-2 pl-2 text-[.8rem] font-medium text-white/50 hover:text-white/80 transition-colors bg-transparent border-none"
                  >
                    {cat.label}
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExp ? "rotate-90" : ""}`} />
                  </button>
                  {isExp && (
                    <div className="pl-4 flex flex-col gap-0.5">
                      {cat.children.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href.startsWith("#") ? sub.href : regionPath(sub.href)}
                          onClick={onClose}
                          className="block py-1.5 text-xs text-white/40 hover:text-gold transition-colors no-underline"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <a
                key={cat.label}
                href={cat.href?.startsWith("#") ? cat.href : regionPath(cat.href || "/")}
                onClick={onClose}
                className={`block py-2 pl-2 text-[.8rem] transition-colors no-underline ${
                  tab.glow ? "text-gold/60 hover:text-gold" : "text-white/45 hover:text-gold"
                }`}
              >
                {cat.label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
