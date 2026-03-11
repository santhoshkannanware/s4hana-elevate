const items = [
  "SAP S/4HANA", "Finance & Controlling", "SAP SuccessFactors", "SAP Ariba",
  "AI-Accelerated SAP", "SAP Analytics Cloud", "SAP CX Suite", "Group Reporting",
  "SAP Treasury", "SAP BTP", "GROW with SAP", "SAP Datasphere",
];

export default function TrustStrip() {
  return (
    <div className="overflow-hidden py-3 bg-secondary border-y border-border">
      <div className="flex w-max" style={{ animation: "ticker 45s linear infinite" }}>
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-6 px-6 text-[.75rem] text-muted-foreground whitespace-nowrap">
            <span className={i % 2 === 0 ? "font-semibold text-foreground/80" : ""}>{item}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
          </div>
        ))}
      </div>
    </div>
  );
}
