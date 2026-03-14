import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Globe, X, Menu } from "lucide-react";
import { useRegion, REGIONS } from "@/contexts/RegionContext";

const LOGO_SVG = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTQwIDcwIj48ZGVmcz48c3R5bGU+LmNscy0xLC5jbHMtMntmaWxsOm5vbmU7fS5jbHMtMXtjbGlwLXJ1bGU6ZXZlbm9kZDt9LmNscy0ze2ZpbGw6I2ZmZjt9LmNscy00e2ZpbGw6I2RiODYwNDt9LmNscy00LC5jbHMtOXtmaWxsLXJ1bGU6ZXZlbm9kZDt9LmNscy01e2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aCk7fS5jbHMtNntjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgtMik7fS5jbHMtN3tjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgtMyk7fS5jbHMtOHtvcGFjaXR5OjAuNTt9LmNscy05e2ZpbGw6I2ZmYWMwMDt9PC9zdHlsZT48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjU4LjUzIDMwLjYgNjIuODcgMjQuNjUgNzUuNzQgNDQuMzIgNjcuNDQgNDQuMzIgNTguNTMgMzAuNiIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtMiI+PHJlY3QgY2xhc3M9ImNscy0yIiB4PSI0NS44NyIgeT0iLTAuOTkiIHdpZHRoPSI0My43NyIgaGVpZ2h0PSI0Ny45MiIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtMyI+PHJlY3QgY2xhc3M9ImNscy0yIiB4PSI1OC40OCIgeT0iMjQuNTIiIHdpZHRoPSIxNy41MSIgaGVpZ2h0PSIxOS44NCIvPjwvY2xpcFBhdGg+PC9kZWZzPjx0aXRsZT5maW5hbF9rYW5uYW53YXJlX2xvZ28tMDAyPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xMjguMjQsNTYuMzlWNTQuODFoNnYxLjU4Wk0xMjUsNjEuMDhWNTAuM2g5LjYzdjEuODhoLTcuNzZ2N2g3Ljc3djEuODhabS0zLjY1LDAtMi43My0zaC00VjU2LjQyaDQuNWEyLDIsMCwwLDAsMS41NC0uNTUsMi4yNiwyLjI2LDAsMCwwLC41Mi0xLjYxLDIuMDYsMi4wNiwwLDAsMC0uNTQtMS41NywyLjEzLDIuMTMsMCwwLDAtMS41Mi0uNTFoLTUuODh2OC45aC0xLjg3VjUwLjNoNy43NWE0Ljc2LDQuNzYsMCwwLDEsMS42NS4yNywzLjMsMy4zLDAsMCwxLDEuMjMuNzksMy40NywzLjQ3LDAsMCwxLC43NywxLjI0LDQuNiw0LjYsMCwwLDEsLjI3LDEuNjMsNC4xMSw0LjExLDAsMCwxLS41OSwyLjI2LDMuMjMsMy4yMywwLDAsMS0xLjY0LDEuMzFMMTI0LDYxLjA4Wm0tMTMuNDQsMC0xLjYyLTIuNzFoLTUuMWwuODktMS41M2gzLjMxbC0yLjQxLTQtNC44OSw4LjI4SDk1LjkybDYuMjEtMTAuMzJhMS40MiwxLjQyLDAsMCwxLC4zOC0uNDUuODkuODksMCwwLDEsLjU0LS4xNi44My44MywwLDAsMSwuNTIuMTYsMS40MiwxLjQyLDAsMCwxLC4zOC40NWw2LjIyLDEwLjMyWm0tMTguMjQtMy42TDg4LDYwLjY0YTEuMTksMS4xOSwwLDAsMS0uNDIuNDQsMS4wNiwxLjA2LDAsMCwxLS41NS4xNSwxLjA3LDEuMDcsMCwwLDEtMS0uNTlMODAuNDYsNTAuM2gyLjI2bDQuMzYsOC4yOSwxLjYzLTIuOTQtMi44LTUuMzVoMi4yN2w0LjE3LDguMjksNC4zOS04LjI5aDIuMTFMOTMuMjcsNjAuNjRhMS4xOSwxLjE5LDAsMCwxLS40Mi40NCwxLjEyLDEuMTIsMCwwLDEtLjU2LjE1LDEuMDYsMS4wNiwwLDAsMC0uNTUtLjE1LDEuMDksMS4wOSwwLDAsMC0uNDEtLjQ0Wk03MCw1My4xOXY3Ljg5aC0xLjhWNTEuMjlhMS4yMiwxLjIyLDAsMCwxLC4yNi0uODIuODguODgsMCwwLDEsLjcxLS4zMS45My45MywwLDAsMSwuNC4wOSwxLjQ0LDEuNDQsMCwwLDEsLjQuM2w3LjYxLDcuNTVWNTAuMjFoMS44djkuODhhMS4yNSwxLjI1LDAsMCwxLS4yNi44My44Ni44NiwwLDAsMS0uNjguMjksMS4yMSwxLjIxLDAsMCwxLS44Ni0uNFptLTUuMTgsNy44OS0xLjYyLTIuNzFoLTUuMUw1OSw1Ni44NGgzLjMxbC0yLjQtNEw1NSw2MS4wOEg1Mi44NEw1OSw1MC43NmExLjQ0LDEuNDQsMCwwLDEsLjM5LS40NS44NC44NCwwLDAsMSwuNTMtLjE2Ljg2Ljg2LDAsMCwxLC41My4xNiwxLjU2LDEuNTYsMCwwLDEsLjM4LjQ1bDYuMjEsMTAuMzJaTTQyLjM2LDUzLjE5djcuODlINDAuNTdWNTEuMjlhMS4yMiwxLjIyLDAsMCwxLC4yNi0uODIuODYuODYsMCwwLDEsLjctLjMxLjkuOSwwLDAsMSwuNC4wOSwxLjMxLDEuMzEsMCwwLDEsLjQuM0w1MCw1OC4xVjUwLjIxaDEuNzl2OS44OGExLjI1LDEuMjUsMCwwLDEtLjI2LjgzLjg0Ljg0LDAsMCwxLS42Ny4yOSwxLjE3LDEuMTcsMCwwLDEtLjg2LS40Wm0tMTIuOTUsMHY3Ljg5SDI3LjYyVjUxLjI5YTEuMTcsMS4xNywwLDAsMSwuMjYtLjgyLjg0Ljg0LDAsMCwxLC43LS4zMS45My45MywwLDAsMSwuNC4wOSwxLjQ0LDEuNDQsMCwwLDEsLjQuM0wzNyw1OC4xVjUwLjIxaDEuOHY5Ljg4YTEuMjUsMS4yNSwwLDAsMS0uMjYuODMuODQuODQsMCwwLDEtLjY4LjI5LDEuMjEsMS4yMSwwLDAsMC0uODYtLjRabS01LjE4LDcuODktMS42MS0yLjcxSDE3LjUxbC44OS0xLjUzaDMuMzFsLTIuNC00LTQuOSw4LjI4SDEyLjI2bDYuMi0xMC4zMmExLjQ0LDEuNDQsMCwwLDEsLjM5LS40NS44Ni44NiwwLDAsMSwuNTMtLjE2Ljg0Ljg0LDAsMCwxLC41My4xNiwxLjU2LDEuNTYsMCwwLDEsLjM4LjQ1TDI2LjUsNjEuMDhaTTAsNjEuMDhWNTAuM0gxLjg5VjYxLjA0Wm04Ljg5LDAtNi00Ljc1QTEsMSwwLDAsMSwyLjUzLDU2YTEuMzUsMS4zNSwwLDAsMS0uMDYtLjQxLDEuMDYsMS4wNiwwLDAsMSwuMDktLjQ1LDEuMTYsMS4xNiwwLDAsMSwuMzgtLjQxTDguNjYsNTAuM2gyLjg5TDQuNDksNTUuNTZsNy4yOCw1LjUyWiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNCIgcG9pbnRzPSI1OC41MyAzMC42IDYyLjg3IDI0LjY1IDc1Ljc0IDQ0LjMyIDY3LjQ0IDQ0LjMyIDU4LjUzIDMwLjYiLz48ZyBjbGFzcz0iY2xzLTUiPjxnIGNsYXNzPSJjbHMtNiI+PGcgY2xhc3M9ImNscy03Ij48L2c+PC9nPjwvZz48cG9seWdvbiBjbGFzcz0iY2xzLTkiIHBvaW50cz0iNTQuMTQgMTguNzYgNDcuMjkgMjIuNzUgNDcuMjkgNDQuMzEgODcuMzcgMC4wNiA1NC4xOSAyNy44NyA1NC4xNCAxOC43NiIvPjwvc3ZnPg==";

/* Dark version of the logo for white background */
const LOGO_SVG_DARK = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTQwIDcwIj48ZGVmcz48c3R5bGU+LmNscy0xLC5jbHMtMntmaWxsOm5vbmU7fS5jbHMtMXtjbGlwLXJ1bGU6ZXZlbm9kZDt9LmNscy0ze2ZpbGw6IzBjMGMwYzt9LmNscy00e2ZpbGw6I2RiODYwNDt9LmNscy00LC5jbHMtOXtmaWxsLXJ1bGU6ZXZlbm9kZDt9LmNscy01e2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aCk7fS5jbHMtNntjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgtMik7fS5jbHMtN3tjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgtMyk7fS5jbHMtOHtvcGFjaXR5OjAuNTt9LmNscy05e2ZpbGw6I2ZmYWMwMDt9PC9zdHlsZT48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjU4LjUzIDMwLjYgNjIuODcgMjQuNjUgNzUuNzQgNDQuMzIgNjcuNDQgNDQuMzIgNTguNTMgMzAuNiIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtMiI+PHJlY3QgY2xhc3M9ImNscy0yIiB4PSI0NS44NyIgeT0iLTAuOTkiIHdpZHRoPSI0My43NyIgaGVpZ2h0PSI0Ny45MiIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtMyI+PHJlY3QgY2xhc3M9ImNscy0yIiB4PSI1OC40OCIgeT0iMjQuNTIiIHdpZHRoPSIxNy41MSIgaGVpZ2h0PSIxOS44NCIvPjwvY2xpcFBhdGg+PC9kZWZzPjx0aXRsZT5maW5hbF9rYW5uYW53YXJlX2xvZ28tMDAyPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xMjguMjQsNTYuMzlWNTQuODFoNnYxLjU4Wk0xMjUsNjEuMDhWNTAuM2g5LjYzdjEuODhoLTcuNzZ2N2g3Ljc3djEuODhabS0zLjY1LDAtMi43My0zaC00VjU2LjQyaDQuNWEyLDIsMCwwLDAsMS41NC0uNTUsMi4yNiwyLjI2LDAsMCwwLC41Mi0xLjYxLDIuMDYsMi4wNiwwLDAsMC0uNTQtMS41NywyLjEzLDIuMTMsMCwwLDAtMS41Mi0uNTFoLTUuODh2OC45aC0xLjg3VjUwLjNoNy43NWE0Ljc2LDQuNzYsMCwwLDEsMS42NS4yNywzLjMsMy4zLDAsMCwxLDEuMjMuNzksMy40NywzLjQ3LDAsMCwxLC43NywxLjI0LDQuNiw0LjYsMCwwLDEsLjI3LDEuNjMsNC4xMSw0LjExLDAsMCwxLS41OSwyLjI2LDMuMjMsMy4yMywwLDAsMS0xLjY0LDEuMzFMMTI0LDYxLjA4Wm0tMTMuNDQsMC0xLjYyLTIuNzFoLTUuMWwuODktMS41M2gzLjMxbC0yLjQxLTQtNC44OSw4LjI4SDk1LjkybDYuMjEtMTAuMzJhMS40MiwxLjQyLDAsMCwxLC4zOC0uNDUuODkuODksMCwwLDEsLjU0LS4xNi44My44MywwLDAsMSwuNTIuMTYsMS40MiwxLjQyLDAsMCwxLC4zOC40NWw2LjIyLDEwLjMyWm0tMTguMjQtMy42TDg4LDYwLjY0YTEuMTksMS4xOSwwLDAsMS0uNDIuNDQsMS4wNiwxLjA2LDAsMCwxLS41NS4xNSwxLjA3LDEuMDcsMCwwLDEtMS0uNTlMODAuNDYsNTAuM2gyLjI2bDQuMzYsOC4yOSwxLjYzLTIuOTQtMi44LTUuMzVoMi4yN2w0LjE3LDguMjksNC4zOS04LjI5aDIuMTFMOTMuMjcsNjAuNjRhMS4xOSwxLjE5LDAsMCwxLS40Mi40NCwxLjEyLDEuMTIsMCwwLDEtLjU2LjE1LDEuMDYsMS4wNiwwLDAsMC0uNTUtLjE1LDEuMDksMS4wOSwwLDAsMC0uNDEtLjQ0Wk03MCw1My4xOXY3Ljg5aC0xLjhWNTEuMjlhMS4yMiwxLjIyLDAsMCwxLC4yNi0uODIuODguODgsMCwwLDEsLjcxLS4zMS45My45MywwLDAsMSwuNC4wOSwxLjQ0LDEuNDQsMCwwLDEsLjQuM2w3LjYxLDcuNTVWNTAuMjFoMS44djkuODhhMS4yNSwxLjI1LDAsMCwxLS4yNi44My44Ni44NiwwLDAsMS0uNjguMjksMS4yMSwxLjIxLDAsMCwxLS44Ni0uNFptLTUuMTgsNy44OS0xLjYyLTIuNzFoLTUuMUw1OSw1Ni44NGgzLjMxbC0yLjQtNEw1NSw2MS4wOEg1Mi44NEw1OSw1MC43NmExLjQ0LDEuNDQsMCwwLDEsLjM5LS40NS44NC44NCwwLDAsMSwuNTMtLjE2Ljg2Ljg2LDAsMCwxLC41My4xNiwxLjU2LDEuNTYsMCwwLDEsLjM4LjQ1bDYuMjEsMTAuMzJaTTQyLjM2LDUzLjE5djcuODlINDAuNTdWNTEuMjlhMS4yMiwxLjIyLDAsMCwxLC4yNi0uODIuODYuODYsMCwwLDEsLjctLjMxLjkuOSwwLDAsMSwuNC4wOSwxLjMxLDEuMzEsMCwwLDEsLjQuM0w1MCw1OC4xVjUwLjIxaDEuNzl2OS44OGExLjI1LDEuMjUsMCwwLDEtLjI2LjgzLjg0Ljg0LDAsMCwxLS42Ny4yOSwxLjE3LDEuMTcsMCwwLDEtLjg2LS40Wm0tMTIuOTUsMHY3Ljg5SDI3LjYyVjUxLjI5YTEuMTcsMS4xNywwLDAsMSwuMjYtLjgyLjg0Ljg0LDAsMCwxLC43LS4zMS45My45MywwLDAsMSwuNC4wOSwxLjQ0LDEuNDQsMCwwLDEsLjQuM0wzNyw1OC4xVjUwLjIxaDEuOHY5Ljg4YTEuMjUsMS4yNSwwLDAsMS0uMjYuODMuODQuODQsMCwwLDEtLjY4LjI5LDEuMjEsMS4yMSwwLDAsMC0uODYtLjRabS01LjE4LDcuODktMS42MS0yLjcxSDE3LjUxbC44OS0xLjUzaDMuMzFsLTIuNC00LTQuOSw4LjI4SDEyLjI2bDYuMi0xMC4zMmExLjQ0LDEuNDQsMCwwLDEsLjM5LS40NS44Ni44NiwwLDAsMSwuNTMtLjE2Ljg0Ljg0LDAsMCwxLC41My4xNiwxLjU2LDEuNTYsMCwwLDEsLjM4LjQ1TDI2LjUsNjEuMDhaTTAsNjEuMDhWNTAuM0gxLjg5VjYxLjA0Wm04Ljg5LDAtNi00Ljc1QTEsMSwwLDAsMSwyLjUzLDU2YTEuMzUsMS4zNSwwLDAsMS0uMDYtLjQxLDEuMDYsMS4wNiwwLDAsMSwuMDktLjQ1LDEuMTYsMS4xNiwwLDAsMSwuMzgtLjQxTDguNjYsNTAuM2gyLjg5TDQuNDksNTUuNTZsNy4yOCw1LjUyWiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNCIgcG9pbnRzPSI1OC41MyAzMC42IDYyLjg3IDI0LjY1IDc1Ljc0IDQ0LjMyIDY3LjQ0IDQ0LjMyIDU4LjUzIDMwLjYiLz48ZyBjbGFzcz0iY2xzLTUiPjxnIGNsYXNzPSJjbHMtNiI+PGcgY2xhc3M9ImNscy03Ij48L2c+PC9nPjwvZz48cG9seWdvbiBjbGFzcz0iY2xzLTkiIHBvaW50cz0iNTQuMTQgMTguNzYgNDcuMjkgMjIuNzUgNDcuMjkgNDQuMzEgODcuMzcgMC4wNiA1NC4xOSAyNy44NyA1NC4xNCAxOC43NiIvPjwvc3ZnPg==";

/* ─── Types ─── */
interface SubItem {
  label: string;
  href: string;
}

interface CapabilityGroup {
  heading: string;
  items: SubItem[];
}

interface MegaTabSingle {
  label: string;
  type: "single";
  items: SubItem[];
}

interface MegaTabMultiCol {
  label: string;
  type: "multi";
  columns: CapabilityGroup[];
}

type MegaTab = MegaTabSingle | MegaTabMultiCol;

/* ─── Navigation Data ─── */
const megaTabs: MegaTab[] = [
  {
    label: "Products",
    type: "single",
    items: [
      { label: "Artificial Intelligence", href: "/products/artificial-intelligence/sap-business-ai" },
      { label: "Data & Analytics", href: "/products/data-analytics/sap-business-data-cloud" },
      { label: "Cloud ERP Applications", href: "/products/cloud-erp/s4hana" },
      { label: "Technology Platform", href: "/products/technology-platform/btp" },
      { label: "Transformation Management", href: "/products/transformation-management/walkme-signavio" },
    ],
  },
  {
    label: "Industries",
    type: "single",
    items: [
      { label: "Automotive", href: "/industries/automotive" },
      { label: "Consumer Products", href: "/industries/consumer" },
      { label: "Industrial Manufacturing", href: "/industries/industrial-manufacturing" },
      { label: "Mill Products", href: "/industries/mill-products" },
      { label: "Professional Services", href: "/industries/professional-services" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Energy", href: "/industries/energy" },
    ],
  },
  {
    label: "Capabilities",
    type: "multi",
    columns: [
      {
        heading: "Cloud ERP",
        items: [
          { label: "SAP Cloud ERP", href: "/capabilities/cloud-erp/sap-cloud-erp" },
          { label: "SAP Cloud ERP Private", href: "/capabilities/cloud-erp/sap-cloud-erp-private" },
        ],
      },
      {
        heading: "Spend Management",
        items: [
          { label: "SAP Ariba", href: "/capabilities/spend-management/ariba" },
          { label: "SAP Concur", href: "/capabilities/spend-management/concur" },
          { label: "SAP Fieldglass", href: "/capabilities/spend-management/fieldglass" },
        ],
      },
      {
        heading: "Financial Management",
        items: [
          { label: "SAP Cloud Finance", href: "/capabilities/financial-management/cloud-finance" },
          { label: "Profitability & Performance Mgmt", href: "/capabilities/financial-management/profitability" },
          { label: "Invoice Management by OpenText", href: "/capabilities/financial-management/invoice-management" },
          { label: "Enterprise Threat Detection", href: "/capabilities/financial-management/threat-detection" },
        ],
      },
      {
        heading: "Supply Chain Management",
        items: [
          { label: "SAP Digital Manufacturing", href: "/capabilities/supply-chain/digital-manufacturing" },
          { label: "SAP Enterprise Product Dev", href: "/capabilities/supply-chain/product-development" },
          { label: "SAP Extended Warehouse Mgmt", href: "/capabilities/supply-chain/warehouse-management" },
        ],
      },
      {
        heading: "Human Capital Management",
        items: [
          { label: "SAP SuccessFactors HXM Suite", href: "/capabilities/hcm/successfactors" },
          { label: "SAP Enable Now", href: "/capabilities/hcm/enable-now" },
        ],
      },
    ],
  },
  {
    label: "Services",
    type: "single",
    items: [
      { label: "Advisory", href: "/transform-manage/services/advisory" },
      { label: "Execution", href: "/transform-manage/services/execution" },
      { label: "Expert as a Service", href: "/transform-manage/services/eaas" },
    ],
  },
  {
    label: "About Us",
    type: "single",
    items: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Our Team", href: "/about/our-team" },
      { label: "Our Business", href: "/about/our-business" },
      { label: "Partners", href: "/about/partners" },
      { label: "Offices", href: "/about/offices" },
    ],
  },
  {
    label: "Insights",
    type: "single",
    items: [
      { label: "Blogs", href: "/insights/blogs" },
      { label: "Case Studies", href: "/insights/case-studies" },
      { label: "Knowledge Base", href: "/insights/knowledge-base" },
    ],
  },
];

/* ─── Region Selector (dark-bg version) ─── */
function RegionSelector() {
  const { region, setRegion } = useRegion();
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const current = REGIONS.find((r) => r.code === region) || REGIONS[0];

  const enter = () => { clearTimeout(timeout.current); setOpen(true); };
  const leave = () => { timeout.current = setTimeout(() => setOpen(false), 150); };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button className="flex items-center gap-1.5 text-[.8rem] font-medium text-[#aaa] hover:text-white transition-colors cursor-none bg-transparent border border-[#333] rounded px-2.5 py-1.5 hover:border-[#555]">
        <Globe className="w-3.5 h-3.5" />
        <span>{current.flag}</span>
        <span className="uppercase tracking-wider">{current.code}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-2 min-w-[180px] rounded-md py-1 shadow-xl z-50 bg-[#141414] border border-[#262626]">
          {REGIONS.map((r) => (
            <button
              key={r.code}
              onClick={() => { setRegion(r.code); setOpen(false); }}
              className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-[.85rem] transition-colors cursor-none bg-transparent border-none text-left ${
                r.code === region ? "text-white bg-[#1f1f1f] font-semibold" : "text-[#aaa] hover:text-white hover:bg-[#1a1a1a]"
              }`}
            >
              <span className="text-base">{r.flag}</span>
              <span>{r.label}</span>
              {r.code === region && <span className="ml-auto text-[#E8A000] text-xs">●</span>}
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

  return (
    <div className="absolute top-full left-0 right-0 z-50 bg-[#0c0c0c] border-t border-[#262626] shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
      style={{ animation: "megaFadeIn 0.2s ease-out" }}
    >
      <div className="max-w-[1280px] mx-auto px-10 py-8">
        {tab.type === "multi" ? (
          /* Multi-column layout for Capabilities */
          <div className="grid grid-cols-3 gap-x-12 gap-y-8">
            {tab.columns.map((group) => (
              <div key={group.heading}>
                <h4 className="text-[.7rem] uppercase tracking-[.18em] font-bold text-white mb-3 pb-2 border-b border-[#262626]">
                  {group.heading}
                </h4>
                <ul className="list-none p-0 m-0 flex flex-col gap-0.5">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={regionPath(item.href)}
                        onClick={onClose}
                        className="block py-1.5 text-[.85rem] text-[#aaa] hover:text-white hover:translate-x-0.5 transition-all duration-200 no-underline cursor-none"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          /* Single column layout */
          <div className={`grid gap-0.5 ${tab.items.length > 5 ? "grid-cols-2 max-w-2xl" : "max-w-sm"}`}>
            {tab.items.map((item) => (
              <Link
                key={item.label}
                to={regionPath(item.href)}
                onClick={onClose}
                className="block py-2.5 px-3 text-[.9rem] text-[#aaa] hover:text-white hover:bg-[#141414] rounded transition-all duration-200 no-underline cursor-none font-normal"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
      {/* Bottom accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#E8A000]/40 to-transparent" />
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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <>
      <style>{`
        @keyframes megaFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
        style={{
          background: "#0c0c0c",
          boxShadow: scrolled
            ? "0 4px 20px rgba(0,0,0,0.5)"
            : "0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        {/* Top bar */}
        <div className="max-w-[1400px] mx-auto h-[72px] flex items-center px-6 lg:px-10">
          {/* Logo */}
          <Link to={regionPath("/")} className="flex items-center gap-3 no-underline cursor-none mr-10 shrink-0">
            <img src={LOGO_SVG} alt="Kannanware" className="h-10 w-auto block" />
          </Link>

          {/* Desktop nav — left aligned */}
          <ul className="hidden lg:flex gap-0 list-none items-center flex-1">
            {megaTabs.map((tab) => {
              const isActive = activeTab === tab.label;
              return (
                <li
                  key={tab.label}
                  onMouseEnter={() => handleTabEnter(tab.label)}
                  onMouseLeave={handleTabLeave}
                >
                  <button
                    className={`px-4 py-6 text-[.85rem] font-medium transition-colors duration-200 cursor-none bg-transparent border-none relative tracking-[.01em] ${
                      isActive
                        ? "text-white"
                        : "text-[#aaa] hover:text-white"
                    }`}
                  >
                    {tab.label}
                    {/* Active underline */}
                    <span
                      className={`absolute bottom-4 left-4 right-4 h-[2px] bg-[#E8A000] transition-transform duration-200 origin-left ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-4 ml-auto shrink-0">
            <RegionSelector />
            <button
              onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
              className="px-5 py-2.5 bg-white text-[#0c0c0c] text-[.8rem] font-semibold tracking-[.04em] border-none cursor-none transition-all duration-200 hover:bg-[#e5e5e5] rounded"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 ml-auto" aria-label="Toggle menu">
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
          <div className="lg:hidden bg-[#0c0c0c] border-t border-[#262626] max-h-[80vh] overflow-y-auto">
            <div className="px-5 py-6 flex flex-col gap-1">
              {/* Mobile region selector */}
              <div className="flex gap-2 mb-4 pb-4 border-b border-[#262626]">
                {REGIONS.map((r) => (
                  <MobileRegionButton key={r.code} r={r} />
                ))}
              </div>
              {megaTabs.map((tab) => (
                <MobileTabAccordion key={tab.label} tab={tab} onClose={() => setMobileOpen(false)} />
              ))}
              <button
                onClick={() => { document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" }); setMobileOpen(false); }}
                className="mt-4 px-5 py-2.5 bg-white text-[#0c0c0c] text-xs font-semibold tracking-wider rounded"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
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
          ? "border-[#E8A000] text-white bg-[#1f1f1f] font-semibold"
          : "border-[#333] text-[#aaa] hover:text-white hover:border-[#555]"
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

  const allItems: SubItem[] = tab.type === "multi"
    ? tab.columns.flatMap((col) => col.items)
    : tab.items;

  return (
    <div className="border-b border-[#262626]">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-3.5 text-sm font-semibold text-white transition-colors bg-transparent border-none"
      >
        <span>{tab.label}</span>
        <ChevronDown className={`w-4 h-4 text-[#666] transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pl-3 pb-3 flex flex-col gap-0.5">
          {tab.type === "multi" ? (
            tab.columns.map((group) => (
              <div key={group.heading} className="mb-3">
                <p className="text-[.65rem] uppercase tracking-[.15em] font-bold text-[#666] mb-1 px-2">
                  {group.heading}
                </p>
                {group.items.map((item) => (
                  <Link
                    key={item.label}
                    to={regionPath(item.href)}
                    onClick={onClose}
                    className="block py-1.5 px-2 text-[.8rem] text-[#aaa] hover:text-white transition-colors no-underline"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))
          ) : (
            allItems.map((item) => (
              <Link
                key={item.label}
                to={regionPath(item.href)}
                onClick={onClose}
                className="block py-2 px-2 text-[.8rem] text-[#aaa] hover:text-white transition-colors no-underline"
              >
                {item.label}
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
