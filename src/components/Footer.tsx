import { useRegion } from "@/contexts/RegionContext";
import { getContact } from "@/data/regionContent";

const LOGO_SVG = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTQwIDcwIj48ZGVmcz48c3R5bGU+LmNscy0xLC5jbHMtMntmaWxsOm5vbmU7fS5jbHMtMXtjbGlwLXJ1bGU6ZXZlbm9kZDt9LmNscy0ze2ZpbGw6I2ZmZjt9LmNscy00e2ZpbGw6I2RiODYwNDt9LmNscy00LC5jbHMtOXtmaWxsLXJ1bGU6ZXZlbm9kZDt9LmNscy01e2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aCk7fS5jbHMtNntjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgtMik7fS5jbHMtN3tjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgtMyk7fS5jbHMtOHtvcGFjaXR5OjAuNTt9LmNscy05e2ZpbGw6I2ZmYWMwMDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmZpbmFsX2thbm5hbndhcmVfbG9nby0wMDI8L3RpdGxlPjwvc3ZnPg==";

const cols = [
  { title: "SAP Product Expertise", links: ["S4/HANA Cloud", "SAP BTP", "SAP Data Sphere", "SAP Analytics Cloud", "SAP BW4 HANA", "Group Reporting"] },
  { title: "Capabilities", links: ["Record to Report", "Source to Pay", "Treasury", "Projects", "Order to Cash", "Operate & Maintain"] },
  { title: "Company", links: ["About Kannanware", "Industries", "Transformation Services", "Insights", "Contact Us", "Careers"] },
];

export default function Footer() {
  const { region } = useRegion();
  const contact = getContact(region);

  return (
    <footer style={{ background: "#0c0c0c" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11 px-5 md:px-10 py-16 max-w-[1240px] mx-auto border-b border-white/[0.06]">
        <div>
          <img src={LOGO_SVG} alt="Kannanware" className="h-10 w-auto block mb-4 opacity-90" />
          <p className="text-[.9rem] text-white/35 font-light leading-[1.7] mb-4">AI-First SAP Consulting & Implementation Partner. Advisory, Enterprise Performance, and Managed Solutions across the full SAP suite.</p>
          <div className="space-y-1.5 mt-4 pt-4 border-t border-white/[0.06]">
            {contact.address.split(" | ").map((addr, i) => (
              <div key={i} className="text-[.82rem] text-white/30 font-light">{addr}</div>
            ))}
            <div className="text-[.82rem] text-white/30 font-light mt-2">{contact.phone}</div>
            <a href={`mailto:${contact.email}`} className="text-[.82rem] text-gold/60 hover:text-gold transition-colors no-underline font-light block">{contact.email}</a>
          </div>
        </div>
        {cols.map((col) => (
          <div key={col.title}>
            <h5 className="text-[.75rem] font-bold tracking-[.2em] uppercase text-white/[0.22] mb-4">{col.title}</h5>
            <ul className="list-none space-y-1">
              {col.links.map((link) => (
                <li key={link}><a href="#" className="text-[.9rem] text-white/45 no-underline font-light transition-all duration-300 hover:text-gold hover:translate-x-1 inline-block cursor-none">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-5 md:px-10 py-4 max-w-[1240px] mx-auto">
        <div className="text-[.82rem] text-white/[0.22]">© 2025 Kannanware. All rights reserved.</div>
        <div className="text-[.82rem] text-white/[0.22]">AI-First SAP Certified Consulting & Implementation Partner</div>
      </div>
    </footer>
  );
}
