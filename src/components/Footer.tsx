const LOGO_SVG = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTQwIDcwIj48ZGVmcz48c3R5bGU+LmNscy0xLC5jbHMtMntmaWxsOm5vbmU7fS5jbHMtMXtjbGlwLXJ1bGU6ZXZlbm9kZDt9LmNscy0ze2ZpbGw6I2ZmZjt9LmNscy00e2ZpbGw6I2RiODYwNDt9LmNscy00LC5jbHMtOXtmaWxsLXJ1bGU6ZXZlbm9kZDt9LmNscy01e2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aCk7fS5jbHMtNntjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgtMik7fS5jbHMtN3tjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgtMyk7fS5jbHMtOHtvcGFjaXR5OjAuNTt9LmNscy05e2ZpbGw6I2ZmYWMwMDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmZpbmFsX2thbm5hbndhcmVfbG9nby0wMDI8L3RpdGxlPjwvc3ZnPg==";

const cols = [
  { title: "Practice Areas", links: ["Finance & Controlling", "Human Resources", "Supply Chain", "Customer Experience", "Spend Management", "Analytics & BTP"] },
  { title: "Services", links: ["Advisory Services", "SAP Implementation", "Enhancement & Maintenance", "Staff Augmentation", "Data Migration", "Managed AMS"] },
  { title: "Company", links: ["About Kannanware", "GROW with SAP", "Industries", "Insights", "Contact Us", "Careers"] },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0c0c0c" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11 px-5 md:px-10 py-16 max-w-[1240px] mx-auto border-b border-white/[0.06]">
        <div>
          <img src={LOGO_SVG} alt="Kannanware" className="h-10 w-auto block mb-4 opacity-90" />
          <p className="text-[.78rem] text-white/35 font-light leading-[1.7]">AI-First SAP Consulting & Implementation Partner. Advisory, Enterprise Performance, and Managed Solutions across the full SAP suite.</p>
        </div>
        {cols.map((col) => (
          <div key={col.title}>
            <h5 className="text-[.62rem] font-bold tracking-[.2em] uppercase text-white/[0.22] mb-4">{col.title}</h5>
            <ul className="list-none space-y-1">
              {col.links.map((link) => (
                <li key={link}><a href="#" className="text-[.78rem] text-white/45 no-underline font-light transition-all duration-300 hover:text-gold hover:translate-x-1 inline-block cursor-none">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-5 md:px-10 py-4 max-w-[1240px] mx-auto">
        <div className="text-[.7rem] text-white/[0.22]">© 2025 Kannanware. All rights reserved.</div>
        <div className="text-[.7rem] text-white/[0.22]">AI-First SAP Certified Consulting & Implementation Partner</div>
      </div>
    </footer>
  );
}