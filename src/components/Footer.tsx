export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-heading text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kannanware Innovations LLP. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-xs font-body text-muted-foreground">
          <span>Chennai · Dubai · USA</span>
          <span>ISO 27001:2022</span>
          <span>SAP Partner</span>
        </div>
      </div>
    </footer>
  );
}
