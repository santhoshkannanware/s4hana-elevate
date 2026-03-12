import type { Region } from "@/contexts/RegionContext";

export interface RegionHeroContent {
  badge: string;
  headlinePre: string;
  headlinePost: string;
  headlineAccent: string;
  description: string;
  trustBadges: string[];
}

export interface RegionMetric {
  target: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface RegionContact {
  phone: string;
  email: string;
  address: string;
  currency: string;
}

export interface RegionCTA {
  heading: string;
  headingAccent: string;
  description: string;
}

export interface RegionSectionHeader {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  description: string;
}

export interface RegionSolutionStep {
  title: string;
  subtitle: string;
  desc: string;
  detail: string;
  deliverables: string[];
}

export interface RegionIndustry {
  title: string;
  desc: string;
  challenges: string[];
  stat: string;
}

export interface RegionAdvisoryOffering {
  title: string;
  desc: string;
  items: string[];
}

export interface RegionCultureContent {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  subtitle: string;
  body: string;
}

export interface RegionFooterContent {
  tagline: string;
}

/* ═══════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════ */
const heroContent: Record<Region, RegionHeroContent> = {
  us: {
    badge: "SAP Certified AI-First Implementation Partner",
    headlinePre: "The AI-First",
    headlinePost: "Consulting Partner",
    headlineAccent: "Built for Enterprises.",
    description: "Kannanware deploys SAP across Finance, Supply Chain, HR, CX & beyond — with AI built into every stage of delivery.",
    trustBadges: ["AI-Accelerated Delivery", "SAP Certified Partner", "US & Global Delivery"],
  },
  in: {
    badge: "SAP Certified AI-First Implementation Partner — India",
    headlinePre: "India's AI-First",
    headlinePost: "SAP Partner",
    headlineAccent: "Powering Digital India.",
    description: "Kannanware accelerates SAP transformation for Indian enterprises across Manufacturing, Energy, BFSI & Services — with AI-native delivery from our Chennai centre.",
    trustBadges: ["Make in India", "SAP Certified Partner", "Pan-India Delivery Centre"],
  },
  emea: {
    badge: "SAP Certified AI-First Implementation Partner — Middle East",
    headlinePre: "The Middle East's",
    headlinePost: "SAP Consulting Partner",
    headlineAccent: "Driving Digital Transformation.",
    description: "Kannanware delivers SAP solutions across the UAE, GCC & EMEA — covering Finance, Supply Chain, HR & Analytics with deep regulatory and localisation expertise from our Dubai hub.",
    trustBadges: ["UAE & GCC Coverage", "SAP Certified Partner", "Dubai-Based Delivery"],
  },
};

/* ═══════════════════════════════════════════════════════
   METRICS (WhyKannanware)
   ═══════════════════════════════════════════════════════ */
const metricsContent: Record<Region, RegionMetric[]> = {
  us: [
    { target: 28, suffix: "+", label: "Delighted Customers Across Regions", sublabel: "Local Presence, Global Expertise" },
    { target: 50, suffix: "K", label: "Project Hours Experience", sublabel: "Maximized ROI" },
    { target: 500, suffix: "", label: "Years Combined Domain Knowledge", sublabel: "Transformation Specialists" },
    { target: 75, suffix: "%", label: "SAP-Certified Consultants", sublabel: "Finance, Treasury & Analytics" },
    { target: 45, suffix: "+", label: "Multi-Regional Industry Experts", sublabel: "Innovation at Core" },
  ],
  in: [
    { target: 15, suffix: "+", label: "Enterprise Clients in India", sublabel: "Pan-India Coverage" },
    { target: 35, suffix: "K", label: "Project Hours in India", sublabel: "Cost-Effective Delivery" },
    { target: 300, suffix: "+", label: "Years Combined India Expertise", sublabel: "Domain Specialists" },
    { target: 80, suffix: "%", label: "SAP-Certified Indian Consultants", sublabel: "Local Talent, Global Standards" },
    { target: 30, suffix: "+", label: "Industry Verticals Served", sublabel: "Manufacturing to BFSI" },
  ],
  emea: [
    { target: 12, suffix: "+", label: "Enterprise Clients Across EMEA", sublabel: "UAE, GCC & Beyond" },
    { target: 25, suffix: "K", label: "EMEA Project Hours", sublabel: "Regulatory-Compliant Delivery" },
    { target: 200, suffix: "+", label: "Years Combined EMEA Expertise", sublabel: "Cross-Border Specialists" },
    { target: 70, suffix: "%", label: "SAP-Certified EMEA Consultants", sublabel: "Multi-Lingual Teams" },
    { target: 20, suffix: "+", label: "Countries Covered in EMEA", sublabel: "Localisation at Scale" },
  ],
};

/* ═══════════════════════════════════════════════════════
   CONTACT (Footer)
   ═══════════════════════════════════════════════════════ */
const contactContent: Record<Region, RegionContact> = {
  us: {
    phone: "+1 (555) 234-5678",
    email: "us@kannanware.com",
    address: "Apartment 826, 401, S Coit Road, McKinney, TX 75072, USA | 1007 N Orange St #1382, 4th Floor, Wilmington, DE 19801, USA",
    currency: "USD",
  },
  in: {
    phone: "+91 44 4567 8900",
    email: "india@kannanware.com",
    address: "KANNANWARE INNOVATIONS LLP, Door No.3, Plot.52, 1st Floor, EB Colony, 4th 2nd Cross Street, Adambakkam, Chennai, Tamil Nadu 600088, India",
    currency: "INR",
  },
  emea: {
    phone: "+971 4 123 4567",
    email: "emea@kannanware.com",
    address: "Kannanware Innovations Middle East LLC-FZ, Business Center1, M Floor, The Meydan Hotel, Nad Al Sheba, Dubai, UAE",
    currency: "AED",
  },
};

/* ═══════════════════════════════════════════════════════
   CTA (FinalCTA)
   ═══════════════════════════════════════════════════════ */
const ctaContent: Record<Region, RegionCTA> = {
  us: {
    heading: "Ready to transform",
    headingAccent: "with SAP?",
    description: "Whether starting a new SAP journey, optimising an existing landscape, or seeking managed support — Kannanware is your AI-first SAP partner across the Americas.",
  },
  in: {
    heading: "Ready to accelerate",
    headingAccent: "your SAP journey?",
    description: "From greenfield implementations to RISE with SAP migrations — Kannanware India brings AI-first delivery from our Chennai centre with cost-effective, high-quality execution.",
  },
  emea: {
    heading: "Ready to modernise",
    headingAccent: "across the Middle East?",
    description: "Kannanware brings deep SAP expertise with regulatory-compliant, multi-lingual delivery across the UAE, GCC, and wider EMEA region from our Dubai hub.",
  },
};

/* ═══════════════════════════════════════════════════════
   SOLUTIONS SECTION (Our Approach — 3 steps)
   ═══════════════════════════════════════════════════════ */
const solutionsHeader: Record<Region, RegionSectionHeader> = {
  us: {
    eyebrow: "Our Approach",
    heading: "How Kannanware Delivers",
    headingAccent: "Transformation",
    description: "We combine advisory insight, technical execution, and data intelligence to transform enterprise finance operations across the Americas.",
  },
  in: {
    eyebrow: "Our Approach",
    heading: "How Kannanware India Delivers",
    headingAccent: "SAP Excellence",
    description: "Our India delivery centre combines deep functional expertise with cost-effective execution to transform enterprise operations for Indian businesses.",
  },
  emea: {
    eyebrow: "Our Approach",
    heading: "How Kannanware EMEA Delivers",
    headingAccent: "Digital Transformation",
    description: "From our Dubai hub, we combine advisory insight with regulatory-aware execution to deliver SAP transformation across the UAE, GCC & wider EMEA region.",
  },
};

const solutionsSteps: Record<Region, RegionSolutionStep[]> = {
  us: [
    {
      title: "Advisory",
      subtitle: "Strategy & Blueprint",
      desc: "We assess your SAP landscape, define transformation strategies, and build the blueprint for future-ready enterprise operations.",
      detail: "Our US advisory practice combines deep SAP expertise with North American industry knowledge to craft transformation strategies that deliver measurable business value. We work alongside your leadership to define priorities, assess risks, and design a roadmap aligned with US regulatory requirements and market dynamics.",
      deliverables: ["Current-state assessment", "Transformation roadmap", "Business case & ROI", "Change management plan"],
    },
    {
      title: "Execution",
      subtitle: "Implement & Deliver",
      desc: "Our specialists deliver SAP implementation, rollout, and S/4HANA conversions with structured project governance across the Americas.",
      detail: "We bring SAP-certified consultants, proven accelerators, and rigorous governance to every US engagement. From greenfield implementations to brownfield conversions, our execution teams deliver on time and on budget — with full SOX compliance and transparency at every milestone.",
      deliverables: ["SAP S/4HANA implementation", "System integration & migration", "SOX-compliant governance", "Quality assurance & testing"],
    },
    {
      title: "Experts as a Service",
      subtitle: "On-Demand Talent",
      desc: "Access specialized SAP experts on demand through flexible engagement models tailored to US enterprise needs.",
      detail: "Scale your SAP capability instantly with our curated network of certified specialists across the Americas. Whether you need a solution architect for a quarter or a full team for a year, our flexible models let you access the right expertise — combining US-based and global delivery for optimal cost and quality.",
      deliverables: ["Certified SAP specialists", "US & nearshore delivery", "Knowledge transfer built-in", "Seamless team integration"],
    },
  ],
  in: [
    {
      title: "Advisory",
      subtitle: "Strategy & Blueprint",
      desc: "We assess your SAP landscape and build transformation strategies aligned with India's regulatory and business environment.",
      detail: "Our India advisory team brings deep knowledge of GST, Indian GAAP, and RBI compliance requirements. We work with your leadership to craft SAP strategies that leverage India's digital infrastructure — from UPI integrations to e-invoicing compliance — ensuring maximum ROI for your transformation investment.",
      deliverables: ["India regulatory assessment", "GST & compliance roadmap", "Digital India integration plan", "Business case & ROI"],
    },
    {
      title: "Execution",
      subtitle: "Implement & Deliver",
      desc: "Our Chennai-based specialists deliver SAP implementations with India-specific localisation and cost-effective project governance.",
      detail: "Our India delivery centre brings 80% SAP-certified consultants who understand Indian manufacturing, BFSI, and services sectors deeply. We deliver implementations with India-specific localisations including GST, TDS, e-Way Bills, and MCA reporting — on time and within budget.",
      deliverables: ["India-localised S/4HANA", "GST & e-invoicing setup", "India payroll & statutory", "Data migration & testing"],
    },
    {
      title: "Experts as a Service",
      subtitle: "On-Demand Talent",
      desc: "Access India's best SAP talent on demand with flexible engagement models from our Chennai delivery centre.",
      detail: "Leverage India's deep SAP talent pool through Kannanware's curated network of certified specialists. Our Chennai centre provides cost-effective access to functional and technical experts across all SAP modules — with built-in knowledge transfer and seamless integration with your teams.",
      deliverables: ["Chennai-based SAP experts", "Cost-effective engagement", "Knowledge transfer built-in", "Flexible team scaling"],
    },
  ],
  emea: [
    {
      title: "Advisory",
      subtitle: "Strategy & Blueprint",
      desc: "We assess your SAP landscape and build transformation strategies aligned with UAE, GCC, and EMEA regulatory requirements.",
      detail: "Our Dubai-based advisory team brings deep knowledge of VAT, IFRS, and regional compliance across the GCC and wider EMEA. We craft SAP strategies that account for multi-currency operations, free zone regulations, and cross-border trade requirements — ensuring your transformation delivers measurable value.",
      deliverables: ["GCC regulatory assessment", "VAT & IFRS compliance plan", "Multi-currency strategy", "Business case & ROI"],
    },
    {
      title: "Execution",
      subtitle: "Implement & Deliver",
      desc: "Our specialists deliver SAP implementations with EMEA-specific localisation, multi-language support, and regulatory compliance.",
      detail: "We bring certified consultants with deep EMEA experience to every engagement. Our Dubai hub coordinates delivery across the UAE, Saudi Arabia, and wider region — with Arabic language support, VAT compliance, and IFRS alignment built into every implementation.",
      deliverables: ["EMEA-localised S/4HANA", "VAT & Arabic localisation", "Multi-entity configuration", "Cross-border integration"],
    },
    {
      title: "Experts as a Service",
      subtitle: "On-Demand Talent",
      desc: "Access EMEA-experienced SAP experts on demand through flexible models from our Dubai delivery hub.",
      detail: "Scale your SAP capability with our network of specialists experienced across the GCC, UK, and Europe. Our Dubai hub provides access to multi-lingual consultants who understand regional regulations, cultural nuances, and cross-border complexities — without long-term overhead.",
      deliverables: ["Multi-lingual SAP experts", "GCC & Europe coverage", "Knowledge transfer built-in", "Flexible engagement models"],
    },
  ],
};

/* ═══════════════════════════════════════════════════════
   CULTURE / AI SECTION (Joule)
   ═══════════════════════════════════════════════════════ */
const cultureContent: Record<Region, RegionCultureContent> = {
  us: {
    eyebrow: "AI-Powered SAP",
    heading: "AI-Powered SAP",
    headingAccent: "with Joule",
    subtitle: "Unlock intelligent finance operations with SAP's AI copilot.",
    body: "SAP Joule introduces a new era of enterprise intelligence by embedding AI directly into SAP applications. Kannanware helps US enterprises integrate Joule into their SAP landscape to transform finance operations, automate SOX-compliant processes, and generate real-time insights that drive faster decisions.",
  },
  in: {
    eyebrow: "AI-Powered SAP",
    heading: "AI-Powered SAP",
    headingAccent: "with Joule",
    subtitle: "Bringing AI-driven intelligence to Indian enterprises.",
    body: "SAP Joule is transforming how Indian businesses interact with their SAP systems. Kannanware India helps organisations embed Joule across finance, procurement, and HR — automating GST reconciliation, predicting cash flows in INR, and generating real-time insights tailored to India's regulatory landscape.",
  },
  emea: {
    eyebrow: "AI-Powered SAP",
    heading: "AI-Powered SAP",
    headingAccent: "with Joule",
    subtitle: "Intelligent automation for Middle East & EMEA enterprises.",
    body: "SAP Joule brings AI-powered intelligence to enterprises across the UAE, GCC, and EMEA. Kannanware helps organisations embed Joule into their SAP landscape — automating VAT compliance, multi-currency forecasting, and generating real-time insights in Arabic and English for faster, smarter decisions.",
  },
};

/* ═══════════════════════════════════════════════════════
   DELIVERY MODEL (SAP Activate — 4 phases)
   ═══════════════════════════════════════════════════════ */
const deliveryHeader: Record<Region, RegionSectionHeader> = {
  us: {
    eyebrow: "SAP Activate Methodology",
    heading: "How we deliver",
    headingAccent: "every time.",
    description: "Our proven four-phase methodology combines SAP Activate best practices with AI-powered accelerators to deliver predictable outcomes across the Americas.",
  },
  in: {
    eyebrow: "SAP Activate Methodology",
    heading: "Proven delivery",
    headingAccent: "from India.",
    description: "Our Chennai delivery centre follows SAP Activate methodology with India-specific accelerators — delivering cost-effective, high-quality outcomes for Indian enterprises.",
  },
  emea: {
    eyebrow: "SAP Activate Methodology",
    heading: "Structured delivery",
    headingAccent: "across EMEA.",
    description: "Our Dubai hub coordinates SAP Activate methodology with EMEA-specific accelerators — ensuring regulatory compliance and multi-lingual support at every phase.",
  },
};

/* ═══════════════════════════════════════════════════════
   ADVISORY / GROW WITH SAP
   ═══════════════════════════════════════════════════════ */
const advisoryHeader: Record<Region, RegionSectionHeader> = {
  us: {
    eyebrow: "GROW with SAP",
    heading: "Scale with confidence.",
    headingAccent: "Grow with SAP.",
    description: "Kannanware's GROW with SAP offering enables fast-growing US mid-market businesses to adopt SAP S/4HANA Cloud, Public Edition with speed, precision, and confidence. We deliver industry best practices, preconfigured processes, and agile deployment to help you scale, compete, and innovate — without complexity.",
  },
  in: {
    eyebrow: "GROW with SAP",
    heading: "Accelerate growth.",
    headingAccent: "Grow with SAP India.",
    description: "Kannanware India helps fast-growing mid-market companies adopt SAP S/4HANA Cloud with India-specific localisations — GST, e-invoicing, and statutory compliance built in from day one. Scale your business with preconfigured Indian industry templates and cost-effective deployment.",
  },
  emea: {
    eyebrow: "GROW with SAP",
    heading: "Expand across the region.",
    headingAccent: "Grow with SAP EMEA.",
    description: "Kannanware EMEA enables fast-growing businesses across the UAE, GCC, and wider region to adopt SAP S/4HANA Cloud with VAT compliance, multi-currency support, and Arabic localisation built in. Scale confidently from our Dubai hub with preconfigured regional templates.",
  },
};

/* ═══════════════════════════════════════════════════════
   OFFICE OF THE CFO
   ═══════════════════════════════════════════════════════ */
const cfoHeader: Record<Region, RegionSectionHeader> = {
  us: {
    eyebrow: "Office of the CFO",
    heading: "How We Help the",
    headingAccent: "Office of the CFO",
    description: "Comprehensive SAP solutions that transform US finance operations, accelerate close cycles, ensure SOX compliance, and deliver real-time intelligence to the modern CFO.",
  },
  in: {
    eyebrow: "Office of the CFO",
    heading: "Empowering India's",
    headingAccent: "Finance Leaders",
    description: "SAP solutions tailored for Indian CFOs — automating GST compliance, streamlining Ind AS reporting, accelerating period-end closes, and delivering real-time analytics in INR across multi-entity Indian operations.",
  },
  emea: {
    eyebrow: "Office of the CFO",
    heading: "Transforming Finance",
    headingAccent: "Across EMEA",
    description: "SAP solutions built for EMEA CFOs — automating VAT compliance, managing multi-currency consolidation, ensuring IFRS alignment, and delivering real-time intelligence across the UAE, GCC, and beyond.",
  },
};

/* ═══════════════════════════════════════════════════════
   INDUSTRY FOCUS
   ═══════════════════════════════════════════════════════ */
const industryHeader: Record<Region, RegionSectionHeader> = {
  us: {
    eyebrow: "Industries",
    heading: "Deep experience",
    headingAccent: "across every sector.",
    description: "We bring domain-specific SAP expertise to the industries driving the American economy — combining deep functional knowledge with proven delivery frameworks.",
  },
  in: {
    eyebrow: "Industries",
    heading: "Serving India's",
    headingAccent: "key industries.",
    description: "Kannanware India brings deep SAP expertise to the sectors powering India's growth — from manufacturing and automotive to BFSI and consumer goods.",
  },
  emea: {
    eyebrow: "Industries",
    heading: "Expertise across",
    headingAccent: "EMEA sectors.",
    description: "Kannanware EMEA brings deep SAP expertise to industries driving the Middle East and regional economy — from oil & gas and construction to retail and public services.",
  },
};

const industryContent: Record<Region, RegionIndustry[]> = {
  us: [
    {
      title: "Energy & Natural Resources",
      desc: "Powering the future with intelligent SAP solutions for upstream, midstream, and downstream operations across North America.",
      challenges: ["JVA & production accounting", "Asset lifecycle management", "Commodity hedging & risk", "EPA & sustainability reporting"],
      stat: "40+ energy clients served",
    },
    {
      title: "Discrete Manufacturing",
      desc: "Driving operational excellence from shop floor to top floor with integrated SAP manufacturing solutions for US manufacturers.",
      challenges: ["Production planning & scheduling", "Cost controlling & variance analysis", "Integrated supply chain & QM", "Shop floor integration"],
      stat: "30% avg. efficiency uplift",
    },
    {
      title: "Financial Services",
      desc: "Transforming US financial institutions with real-time analytics, SOX compliance automation, and risk management.",
      challenges: ["SOX & Dodd-Frank compliance", "Regulatory reporting automation", "Real-time risk analytics", "Treasury & cash management"],
      stat: "100% audit compliance",
    },
    {
      title: "Healthcare & Life Sciences",
      desc: "Modernising US healthcare operations with HIPAA-compliant, patient-centric SAP solutions.",
      challenges: ["HIPAA data compliance", "Revenue cycle management", "Clinical supply chain", "FDA regulatory reporting"],
      stat: "15+ healthcare clients",
    },
    {
      title: "Consumer & Retail",
      desc: "Enabling omnichannel excellence and demand-driven supply chains for US retail enterprises.",
      challenges: ["Trade promotion management", "D2C & omnichannel commerce", "Revenue recognition (ASC 606)", "Demand-driven inventory"],
      stat: "2x faster order fulfilment",
    },
    {
      title: "Technology & Services",
      desc: "Helping US tech companies scale operations with agile SAP solutions for subscription and services businesses.",
      challenges: ["Subscription billing (ASC 606)", "Project accounting & PSA", "Multi-entity consolidation", "Revenue forecasting"],
      stat: "50+ tech implementations",
    },
  ],
  in: [
    {
      title: "Discrete Manufacturing",
      desc: "Driving Make in India excellence with integrated SAP solutions for Indian manufacturers across automotive, engineering, and industrial sectors.",
      challenges: ["Production planning & BOM", "GST & e-invoicing compliance", "Quality management & ISO", "Shop floor integration"],
      stat: "20+ Indian manufacturers",
    },
    {
      title: "Automotive & Auto Components",
      desc: "Enabling Indian automotive OEMs and tier suppliers with SAP solutions for end-to-end supply chain and production excellence.",
      challenges: ["JIT & Kanban scheduling", "Vendor-managed inventory", "PLM integration", "IATF 16949 compliance"],
      stat: "35% efficiency gains",
    },
    {
      title: "BFSI (Banking & Insurance)",
      desc: "Transforming Indian banks, NBFCs, and insurance companies with SAP solutions for regulatory compliance and digital transformation.",
      challenges: ["RBI & IRDAI compliance", "Ind AS & IFRS reporting", "Treasury & ALM", "NPA management & analytics"],
      stat: "100% regulatory compliance",
    },
    {
      title: "Energy & Utilities",
      desc: "Powering India's energy sector with SAP solutions for power generation, distribution, and renewable energy companies.",
      challenges: ["CERC/SERC compliance", "Billing & metering integration", "Asset lifecycle management", "Renewable energy tracking"],
      stat: "10+ energy clients in India",
    },
    {
      title: "Consumer & FMCG",
      desc: "Enabling Indian FMCG and consumer goods companies with SAP solutions for distribution, demand planning, and GST compliance.",
      challenges: ["GST & e-Way bill automation", "Distributor management", "Batch & shelf-life tracking", "Rural distribution planning"],
      stat: "Pan-India coverage",
    },
    {
      title: "Agro & Food Processing",
      desc: "Delivering SAP solutions for India's agribusiness and food processing sector with traceability and FSSAI compliance.",
      challenges: ["FSSAI regulatory compliance", "Harvest-to-shelf traceability", "COGS optimisation", "Cold chain management"],
      stat: "99.9% traceability accuracy",
    },
  ],
  emea: [
    {
      title: "Oil, Gas & Energy",
      desc: "Powering the Middle East's energy sector with SAP solutions for upstream, midstream, and downstream operations across the GCC.",
      challenges: ["JVA & production sharing", "ADNOC/Aramco integration", "Commodity trading & risk", "ESG & sustainability reporting"],
      stat: "15+ GCC energy clients",
    },
    {
      title: "Construction & Real Estate",
      desc: "Enabling mega-project delivery across the UAE, Saudi Arabia, and Qatar with SAP solutions for construction and property development.",
      challenges: ["Project cost controlling", "Subcontractor management", "Retainage & billing", "Multi-currency procurement"],
      stat: "AED 50B+ projects managed",
    },
    {
      title: "Retail & Distribution",
      desc: "Transforming Middle East retail and FMCG distribution with SAP solutions for omnichannel commerce and supply chain excellence.",
      challenges: ["VAT compliance (GCC)", "Multi-warehouse logistics", "Trade promotion management", "Omnichannel integration"],
      stat: "30% supply chain savings",
    },
    {
      title: "Financial Services",
      desc: "Enabling banks and financial institutions across the EMEA region with SAP solutions for IFRS compliance and digital transformation.",
      challenges: ["IFRS 9, 16 & 17 compliance", "Central bank regulatory reporting", "Islamic finance modules", "Multi-currency treasury"],
      stat: "100% audit compliance",
    },
    {
      title: "Government & Public Sector",
      desc: "Modernising government operations across the GCC with transparent, citizen-centric SAP solutions aligned to national visions.",
      challenges: ["Budget execution & monitoring", "Vision 2030 alignment", "Grants & fund management", "Citizen service portals"],
      stat: "10+ government agencies",
    },
    {
      title: "Logistics & Transportation",
      desc: "Optimising logistics operations across the Middle East's trade corridors with SAP solutions for freight, warehousing, and customs.",
      challenges: ["Customs & free zone mgmt", "Fleet & route optimisation", "Cross-border documentation", "Jebel Ali & port integration"],
      stat: "40% logistics efficiency",
    },
  ],
};

/* ═══════════════════════════════════════════════════════
   CLIENT LOGOS
   ═══════════════════════════════════════════════════════ */
const clientLogosTagline: Record<Region, string> = {
  us: "Trusted by Leading American & Global Enterprises",
  in: "Trusted by India's Leading Enterprises",
  emea: "Trusted Across the Middle East & EMEA",
};

/* ═══════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════ */
const footerContent: Record<Region, RegionFooterContent> = {
  us: { tagline: "AI-First SAP Consulting & Implementation Partner across the Americas. Advisory, Enterprise Performance, and Managed Solutions across the full SAP suite." },
  in: { tagline: "India's AI-First SAP Consulting & Implementation Partner. Advisory, Enterprise Performance, and Managed Solutions delivered from our Chennai delivery centre." },
  emea: { tagline: "EMEA's AI-First SAP Consulting & Implementation Partner. Advisory, Enterprise Performance, and Managed Solutions delivered from our Dubai hub across the GCC and wider region." },
};

/* ═══════════════════════════════════════════════════════
   JOULE DEMO SCENARIOS (CultureSection)
   ═══════════════════════════════════════════════════════ */
export interface RegionDemoScenario {
  query: string;
  thinking: string[];
  answer: string;
  metrics: { label: string; value: string; color: string }[];
  chartData: number[];
}

export interface RegionCapability {
  icon: string;
  title: string;
  desc: string;
}

const capabilitiesContent: Record<Region, RegionCapability[]> = {
  us: [
    { icon: "📊", title: "AI Financial Insights", desc: "Surface anomalies, variances, and trends across your US financial data with natural language queries — SOX-ready." },
    { icon: "📈", title: "Predictive Forecasting", desc: "Leverage ML models in SAP to forecast USD cash flow, revenue, and demand across American operations." },
    { icon: "⚙️", title: "Intelligent Process Automation", desc: "Automate SOX-compliant reconciliation, journal entries, and US regulatory workflows with AI orchestration." },
    { icon: "💬", title: "Conversational Analytics", desc: "Ask questions in plain English and get instant, actionable answers from your SAP data across US entities." },
  ],
  in: [
    { icon: "📊", title: "AI Financial Insights", desc: "Surface GST mismatches, TDS variances, and P&L trends across your Indian entities with natural language queries." },
    { icon: "📈", title: "Predictive Forecasting", desc: "Forecast INR cash positions, seasonal demand, and working capital needs for Indian operations using embedded ML." },
    { icon: "⚙️", title: "Intelligent Process Automation", desc: "Automate GST reconciliation, e-invoicing, TDS journal entries, and MCA compliance workflows with AI." },
    { icon: "💬", title: "Conversational Analytics", desc: "Ask questions in English or Hindi and get instant insights from your SAP data across all Indian entities." },
  ],
  emea: [
    { icon: "📊", title: "AI Financial Insights", desc: "Surface VAT discrepancies, multi-currency variances, and IFRS trends across GCC and EMEA entities instantly." },
    { icon: "📈", title: "Predictive Forecasting", desc: "Forecast AED/SAR cash positions, oil price impacts, and demand across Middle East and EMEA operations." },
    { icon: "⚙️", title: "Intelligent Process Automation", desc: "Automate VAT reconciliation, multi-currency journal entries, and GCC regulatory workflows with AI orchestration." },
    { icon: "💬", title: "Conversational Analytics", desc: "Ask questions in English or Arabic and get instant, actionable answers from your SAP data across EMEA." },
  ],
};

const demoScenariosContent: Record<Region, RegionDemoScenario[]> = {
  us: [
    {
      query: "What is the biggest variance in Q3 revenue across US regions?",
      thinking: ["Scanning US revenue ledger…", "Comparing Q3 actuals vs. forecast…", "Identifying top variance drivers…"],
      answer: "Revenue decline of $2.4M detected in Southeast region due to delayed receivables — 68% linked to 3 key accounts in Texas and Florida.",
      metrics: [
        { label: "Variance", value: "-$2.4M", color: "#ff4d6a" },
        { label: "Region", value: "Southeast", color: "#E8A000" },
        { label: "Accounts", value: "3 flagged", color: "#ffb800" },
        { label: "Confidence", value: "94%", color: "#E8A000" },
      ],
      chartData: [42, 58, 65, 47, 38, 29, 35],
    },
    {
      query: "Forecast next quarter USD cash position",
      thinking: ["Analyzing US cash flow patterns…", "Running ML prediction model…", "Factoring seasonal US demand…"],
      answer: "Projected Q4 cash position: $14.2M. Operating cash flow expected to increase 12% driven by improved AR collections across US entities.",
      metrics: [
        { label: "Projected", value: "$14.2M", color: "#E8A000" },
        { label: "Growth", value: "+12%", color: "#00ff88" },
        { label: "Model", value: "ARIMA", color: "#E8A000" },
        { label: "Accuracy", value: "91%", color: "#E8A000" },
      ],
      chartData: [10, 11, 10.5, 12, 13, 13.5, 14.2],
    },
    {
      query: "Auto-reconcile intercompany transactions for March — US entities",
      thinking: ["Loading US IC transaction ledger…", "Matching entries across 8 US entities…", "Flagging SOX exceptions…"],
      answer: "Reconciled 1,247 of 1,260 US transactions (98.9%). 13 items flagged for SOX review totaling $89K — auto-journal entries posted for matched items.",
      metrics: [
        { label: "Matched", value: "98.9%", color: "#00ff88" },
        { label: "Transactions", value: "1,247", color: "#E8A000" },
        { label: "SOX Flagged", value: "13", color: "#ffb800" },
        { label: "Time Saved", value: "4.2 hrs", color: "#E8A000" },
      ],
      chartData: [85, 88, 91, 94, 96, 98, 99],
    },
    {
      query: "Which US cost centers exceeded budget this quarter?",
      thinking: ["Querying US cost center actuals…", "Comparing against approved budgets…", "Ranking by USD overspend…"],
      answer: "3 US cost centers exceeded budget: Marketing Dallas (+$340K, 18% over), R&D Austin (+$210K, 9% over), Facilities NY (+$95K, 12% over). Root cause: unplanned contractor spend.",
      metrics: [
        { label: "Over Budget", value: "3 centers", color: "#ff4d6a" },
        { label: "Total Excess", value: "$645K", color: "#ffb800" },
        { label: "Top Driver", value: "Dallas", color: "#E8A000" },
        { label: "Cause", value: "Contractors", color: "#E8A000" },
      ],
      chartData: [280, 340, 180, 210, 75, 95, 50],
    },
  ],
  in: [
    {
      query: "Show GST input credit mismatches for March across Indian entities",
      thinking: ["Scanning GSTR-2A vs purchase register…", "Matching invoices across 5 Indian entities…", "Flagging ITC discrepancies…"],
      answer: "GST ITC mismatch of ₹18.6L detected across 3 entities — 72% linked to vendor delays in GSTR-1 filing. Auto-reconciled ₹14.2L, ₹4.4L flagged for review.",
      metrics: [
        { label: "Mismatch", value: "₹18.6L", color: "#ff4d6a" },
        { label: "Auto-Fixed", value: "₹14.2L", color: "#00ff88" },
        { label: "Vendors", value: "28 flagged", color: "#ffb800" },
        { label: "Confidence", value: "96%", color: "#E8A000" },
      ],
      chartData: [45, 52, 38, 61, 44, 35, 28],
    },
    {
      query: "Forecast next quarter INR cash position for Chennai operations",
      thinking: ["Analyzing INR cash flow patterns…", "Running ML model on Indian market data…", "Factoring festival season demand…"],
      answer: "Projected Q4 cash position: ₹11.8Cr. Operating cash flow expected to increase 15% driven by Diwali season collections and improved MSME receivables.",
      metrics: [
        { label: "Projected", value: "₹11.8Cr", color: "#E8A000" },
        { label: "Growth", value: "+15%", color: "#00ff88" },
        { label: "Model", value: "ARIMA", color: "#E8A000" },
        { label: "Accuracy", value: "93%", color: "#E8A000" },
      ],
      chartData: [8, 8.5, 9, 9.8, 10.5, 11, 11.8],
    },
    {
      query: "Auto-reconcile TDS entries for Q3 across all Indian entities",
      thinking: ["Loading TDS challan data from TRACES…", "Matching Form 26AS entries…", "Flagging TDS credit mismatches…"],
      answer: "Reconciled 892 of 910 TDS entries (98%). 18 items flagged — ₹3.2L in TDS credits pending Form 16A from vendors. Auto-posted matched entries to GL.",
      metrics: [
        { label: "Matched", value: "98%", color: "#00ff88" },
        { label: "Entries", value: "892", color: "#E8A000" },
        { label: "Pending", value: "₹3.2L", color: "#ffb800" },
        { label: "Time Saved", value: "6.5 hrs", color: "#E8A000" },
      ],
      chartData: [82, 86, 89, 93, 95, 97, 98],
    },
    {
      query: "Which Indian plants exceeded production cost budget this quarter?",
      thinking: ["Querying plant-wise cost center actuals…", "Comparing against approved budgets…", "Ranking by INR overspend…"],
      answer: "2 plants exceeded budget: Pune Plant (+₹24L, 14% over due to raw material price hike), Hosur Plant (+₹18L, 11% over due to overtime labour). Recommended: renegotiate steel supplier contracts.",
      metrics: [
        { label: "Over Budget", value: "2 plants", color: "#ff4d6a" },
        { label: "Total Excess", value: "₹42L", color: "#ffb800" },
        { label: "Top Driver", value: "Pune", color: "#E8A000" },
        { label: "Cause", value: "Raw Material", color: "#E8A000" },
      ],
      chartData: [180, 240, 150, 200, 120, 95, 80],
    },
  ],
  emea: [
    {
      query: "Show VAT reconciliation status across GCC entities for Q3",
      thinking: ["Scanning VAT returns across UAE, KSA, Oman…", "Matching input/output tax across 6 entities…", "Flagging FTA discrepancies…"],
      answer: "VAT mismatch of AED 890K detected across 2 entities — 80% linked to free zone transactions. Auto-reconciled AED 720K, AED 170K flagged for FTA review.",
      metrics: [
        { label: "Mismatch", value: "AED 890K", color: "#ff4d6a" },
        { label: "Auto-Fixed", value: "AED 720K", color: "#00ff88" },
        { label: "Entities", value: "2 flagged", color: "#ffb800" },
        { label: "Confidence", value: "95%", color: "#E8A000" },
      ],
      chartData: [50, 62, 55, 48, 42, 35, 30],
    },
    {
      query: "Forecast next quarter AED cash position for Dubai operations",
      thinking: ["Analyzing AED/USD cash flow patterns…", "Running ML model on GCC market data…", "Factoring oil price trends…"],
      answer: "Projected Q4 cash position: AED 52M. Operating cash flow expected to increase 18% driven by new construction project milestones and improved LC collections.",
      metrics: [
        { label: "Projected", value: "AED 52M", color: "#E8A000" },
        { label: "Growth", value: "+18%", color: "#00ff88" },
        { label: "Model", value: "ARIMA", color: "#E8A000" },
        { label: "Accuracy", value: "92%", color: "#E8A000" },
      ],
      chartData: [35, 38, 40, 43, 46, 49, 52],
    },
    {
      query: "Auto-reconcile intercompany transactions across EMEA entities — March",
      thinking: ["Loading IC ledger across UAE, KSA, UK entities…", "Matching multi-currency entries (AED/SAR/GBP)…", "Flagging transfer pricing exceptions…"],
      answer: "Reconciled 680 of 695 EMEA transactions (97.8%). 15 items flagged for transfer pricing review totaling AED 340K — auto-journal entries posted in local currencies.",
      metrics: [
        { label: "Matched", value: "97.8%", color: "#00ff88" },
        { label: "Transactions", value: "680", color: "#E8A000" },
        { label: "TP Flagged", value: "15", color: "#ffb800" },
        { label: "Time Saved", value: "5.8 hrs", color: "#E8A000" },
      ],
      chartData: [80, 84, 88, 92, 95, 97, 98],
    },
    {
      query: "Which EMEA cost centers exceeded budget this quarter?",
      thinking: ["Querying cost center actuals across GCC…", "Comparing against approved AED budgets…", "Ranking by overspend amount…"],
      answer: "3 EMEA cost centers exceeded budget: Abu Dhabi Projects (+AED 1.2M, 16% over), Dubai Logistics (+AED 680K, 12% over), Riyadh Office (+SAR 450K, 9% over). Root cause: accelerated Expo-related project timelines.",
      metrics: [
        { label: "Over Budget", value: "3 centers", color: "#ff4d6a" },
        { label: "Total Excess", value: "AED 2.3M", color: "#ffb800" },
        { label: "Top Driver", value: "Abu Dhabi", color: "#E8A000" },
        { label: "Cause", value: "Projects", color: "#E8A000" },
      ],
      chartData: [320, 380, 220, 280, 150, 120, 90],
    },
  ],
};

/* ═══════════════════════════════════════════════════════
   ADVISORY / GROW OFFERINGS
   ═══════════════════════════════════════════════════════ */
export interface RegionOffering {
  num: string;
  title: string;
  desc: string;
  items: string[];
  icon: string;
}

const advisoryOfferings: Record<Region, RegionOffering[]> = {
  us: [
    { num: "01", title: "Advisory & Readiness Assessment", desc: "US-focused cloud ERP readiness evaluation including SOX compliance and federal regulatory alignment.", items: ["SOX compliance validation", "US tax & regulatory review", "Cloud vs on-prem comparison", "Readiness checklist & transition roadmap"], icon: "◈" },
    { num: "02", title: "Preconfigured Industry Templates", desc: "Rapid time-to-value through US industry-specific best-practice configurations.", items: ["Healthcare & Life Sciences", "Energy & Utilities", "Technology & SaaS", "Financial Services"], icon: "⬡" },
    { num: "03", title: "End-to-End Implementation", desc: "Full lifecycle delivery with SOX-compliant governance and US-based project management.", items: ["Fit-to-standard workshops", "US data residency & migration", "SOX audit trail setup", "Go-live cutover management"], icon: "◎" },
    { num: "04", title: "Training & Change Management", desc: "Faster user adoption across US teams with structured enablement and change programs.", items: ["Role-based training (US time zones)", "Digital adoption platforms", "Change impact analysis", "Super-user programmes"], icon: "◇" },
    { num: "05", title: "Post-Go-Live Support & Optimization", desc: "Sustained value realisation with US-based AMS support and continuous improvement.", items: ["US business hours AMS support", "SOX compliance monitoring", "Performance tuning", "Quarterly business reviews"], icon: "◆" },
  ],
  in: [
    { num: "01", title: "Advisory & Readiness Assessment", desc: "India-focused cloud ERP readiness evaluation including GST, e-invoicing, and statutory compliance.", items: ["GST & statutory compliance review", "India regulatory landscape mapping", "Cloud vs on-prem for Indian ops", "Readiness checklist & Make in India alignment"], icon: "◈" },
    { num: "02", title: "Preconfigured Industry Templates", desc: "Rapid time-to-value through India-specific industry configurations with GST built in.", items: ["Discrete Manufacturing", "Automotive & Auto Components", "FMCG & Consumer Goods", "Agro & Food Processing"], icon: "⬡" },
    { num: "03", title: "End-to-End Implementation", desc: "Full lifecycle delivery from our Chennai centre with India localisation and cost-effective governance.", items: ["GST & e-invoicing configuration", "India payroll & TDS setup", "Pan-India data migration", "Go-live with statutory readiness"], icon: "◎" },
    { num: "04", title: "Training & Change Management", desc: "Faster adoption for Indian teams with multilingual enablement and India-specific change programs.", items: ["Hindi & regional language training", "Digital adoption platforms", "India workforce change analysis", "Factory floor super-user programmes"], icon: "◇" },
    { num: "05", title: "Post-Go-Live Support & Optimization", desc: "Sustained value realisation with Chennai-based AMS support and continuous India-specific improvement.", items: ["IST business hours AMS support", "GST compliance monitoring", "India statutory update patches", "Quarterly optimisation reviews"], icon: "◆" },
  ],
  emea: [
    { num: "01", title: "Advisory & Readiness Assessment", desc: "EMEA-focused cloud ERP readiness including VAT compliance, IFRS alignment, and free zone regulations.", items: ["VAT & IFRS compliance review", "GCC regulatory landscape mapping", "Free zone entity structure", "Readiness checklist & Vision 2030 alignment"], icon: "◈" },
    { num: "02", title: "Preconfigured Industry Templates", desc: "Rapid time-to-value through GCC & EMEA industry-specific configurations.", items: ["Oil, Gas & Energy", "Construction & Real Estate", "Retail & Distribution", "Government & Public Sector"], icon: "⬡" },
    { num: "03", title: "End-to-End Implementation", desc: "Full lifecycle delivery from our Dubai hub with Arabic localisation and multi-currency support.", items: ["VAT & Arabic localisation", "Multi-currency entity configuration", "Cross-border data migration", "Go-live with FTA compliance"], icon: "◎" },
    { num: "04", title: "Training & Change Management", desc: "Faster adoption across EMEA with Arabic/English enablement and region-specific change programs.", items: ["Arabic & English training materials", "Digital adoption platforms", "GCC workforce change analysis", "Regional super-user programmes"], icon: "◇" },
    { num: "05", title: "Post-Go-Live Support & Optimization", desc: "Sustained value realisation with Dubai-based AMS support and continuous EMEA-specific improvement.", items: ["GST+4 timezone AMS support", "VAT compliance monitoring", "EMEA regulatory update patches", "Quarterly optimisation reviews"], icon: "◆" },
  ],
};

/* ═══════════════════════════════════════════════════════
   DELIVERY MODEL PHASES (SAP Activate — 4 phases)
   ═══════════════════════════════════════════════════════ */
export interface RegionDeliveryPhase {
  title: string;
  subtitle: string;
  desc: string;
  detail: string;
  deliverables: string[];
}

const deliveryPhases: Record<Region, RegionDeliveryPhase[]> = {
  us: [
    { title: "Explore", subtitle: "Design & Blueprint", desc: "Map US processes, identify opportunities, and design an SAP roadmap aligned to American regulatory and business priorities.", detail: "We immerse ourselves in your US business — interviewing stakeholders, auditing current systems, and mapping every process following SAP Activate's Explore phase. The result is a SOX-compliant blueprint that aligns technology to your American market strategy.", deliverables: ["US regulatory process maps", "SOX-aligned solution architecture", "Risk-prioritised roadmap", "US business case & ROI model"] },
    { title: "Realise", subtitle: "Configure & Develop", desc: "Configure SAP to US best-practice standards with SOX compliance built into every milestone sign-off.", detail: "Our US-certified architects translate your blueprint into a precise SAP configuration — validated at every milestone with your team. We leverage SAP Activate's Realise phase with US-specific accelerators including ASC 606, SOX controls, and US GAAP reporting.", deliverables: ["US GAAP design documents", "SOX-compliant SAP environment", "US integration specifications", "Data migration with data residency"] },
    { title: "Deploy", subtitle: "Test & Go Live", desc: "AI-accelerated testing with US regulatory validation ensures zero surprises on cutover day.", detail: "We leverage AI-driven test automation to compress US testing cycles by 40%. Every SOX control point, ASC 606 scenario, and US regulatory requirement is validated before cutover — across all US entities.", deliverables: ["SOX control test suites", "US regulatory validation", "Hypercare team (US hours)", "Go-live certification"] },
    { title: "Stabilize", subtitle: "& Support", desc: "Post go-live hypercare with US-based AMS support and continuous SOX-compliant optimisation.", detail: "Our US managed services team monitors, optimises, and evolves your SAP landscape — ensuring SOX compliance, US regulatory updates, and maximum value continuously with proactive SLA management across American time zones.", deliverables: ["US business hours AMS", "SOX compliance monitoring", "US regulatory release management", "Continuous improvement backlog"] },
  ],
  in: [
    { title: "Explore", subtitle: "Design & Blueprint", desc: "Map Indian business processes, identify GST/statutory opportunities, and design an SAP roadmap for Indian enterprises.", detail: "We immerse ourselves in your Indian operations — interviewing stakeholders, auditing current systems, and mapping every process with India-specific regulatory requirements. The result is a GST-ready, Ind AS-compliant blueprint aligned to your Indian market strategy.", deliverables: ["India regulatory process maps", "GST & statutory architecture", "India risk-prioritised roadmap", "INR business case & ROI model"] },
    { title: "Realise", subtitle: "Configure & Develop", desc: "Configure SAP with India localisations — GST, TDS, e-invoicing, and statutory compliance at every milestone.", detail: "Our Chennai-based architects translate your blueprint into a precise SAP configuration with India-specific localisations. We configure GST, e-invoicing, TDS, EPF/ESI, and MCA reporting — validated at every milestone with your Indian teams.", deliverables: ["India localisation documents", "GST & e-invoicing configuration", "India payroll & statutory setup", "Pan-India data migration strategy"] },
    { title: "Deploy", subtitle: "Test & Go Live", desc: "AI-accelerated testing with India statutory validation ensures GST compliance from day one.", detail: "We leverage AI-driven test automation to compress testing cycles by 40%. Every GST scenario, e-invoicing workflow, TDS calculation, and India statutory requirement is validated before cutover across all Indian entities.", deliverables: ["India statutory test suites", "GST & e-Way bill validation", "Hypercare team (IST hours)", "India go-live certification"] },
    { title: "Stabilize", subtitle: "& Support", desc: "Post go-live hypercare with Chennai-based AMS and continuous India statutory compliance.", detail: "Our Chennai managed services team monitors, optimises, and evolves your SAP landscape — ensuring GST compliance, India statutory updates, and maximum value continuously with cost-effective SLA management from our India delivery centre.", deliverables: ["IST business hours AMS", "GST compliance monitoring", "India statutory update patches", "Continuous improvement backlog"] },
  ],
  emea: [
    { title: "Explore", subtitle: "Design & Blueprint", desc: "Map EMEA processes, identify VAT/IFRS opportunities, and design an SAP roadmap for GCC and regional enterprises.", detail: "We immerse ourselves in your EMEA operations — interviewing stakeholders, auditing current systems, and mapping every process with GCC regulatory requirements. The result is a VAT-compliant, IFRS-aligned blueprint designed for multi-currency, multi-entity operations across the region.", deliverables: ["GCC regulatory process maps", "VAT & IFRS architecture", "EMEA risk-prioritised roadmap", "AED/multi-currency ROI model"] },
    { title: "Realise", subtitle: "Configure & Develop", desc: "Configure SAP with EMEA localisations — VAT, Arabic language, multi-currency, and free zone compliance.", detail: "Our Dubai-based architects translate your blueprint into a precise SAP configuration with EMEA-specific localisations. We configure VAT, Arabic UI, multi-currency (AED/SAR/GBP), free zone accounting, and IFRS reporting — validated at every milestone.", deliverables: ["EMEA localisation documents", "VAT & Arabic configuration", "Multi-currency entity setup", "Cross-border data migration"] },
    { title: "Deploy", subtitle: "Test & Go Live", desc: "AI-accelerated testing with EMEA regulatory validation ensures VAT compliance across all GCC entities.", detail: "We leverage AI-driven test automation to compress EMEA testing cycles by 40%. Every VAT scenario, multi-currency workflow, IFRS consolidation, and FTA requirement is validated before cutover across all EMEA entities.", deliverables: ["EMEA regulatory test suites", "VAT & FTA validation", "Hypercare team (GST+4 hours)", "EMEA go-live certification"] },
    { title: "Stabilize", subtitle: "& Support", desc: "Post go-live hypercare with Dubai-based AMS and continuous EMEA regulatory compliance.", detail: "Our Dubai managed services team monitors, optimises, and evolves your SAP landscape — ensuring VAT compliance, IFRS updates, and maximum value continuously with proactive SLA management across EMEA time zones.", deliverables: ["Dubai-based AMS coverage", "VAT compliance monitoring", "EMEA regulatory updates", "Continuous improvement backlog"] },
  ],
};

/* ═══════════════════════════════════════════════════════
   CFO WHEEL SEGMENTS & SOLUTIONS
   ═══════════════════════════════════════════════════════ */
export interface RegionWheelSegment {
  label: string;
  shortLabel: string;
  desc: string;
  icon: string;
}

export interface RegionCFOSolution {
  title: string;
  value: string;
  kpis: string[];
  accent: string;
}

const cfoWheelSegments: Record<Region, RegionWheelSegment[]> = {
  us: [
    { label: "SAP Treasury &\nRisk Management", shortLabel: "Treasury & Risk", desc: "Comprehensive US treasury operations including USD cash management, liquidity forecasting, and SOX-compliant financial risk mitigation.", icon: "🏦" },
    { label: "SAP Analytics\nCloud", shortLabel: "Analytics Cloud", desc: "Real-time insight into US P&L, balance sheets, and forecasting with embedded AI-driven predictive analytics for American markets.", icon: "📊" },
    { label: "SAP Group\nReporting", shortLabel: "Group Reporting", desc: "US GAAP consolidation with SOX audit trails and SEC disclosure support for multi-entity American operations.", icon: "📋" },
    { label: "SAP Advanced\nFinancial Closing", shortLabel: "Financial Closing", desc: "Automated period-end closing orchestration that reduces cycle time and ensures SOX compliance across US entities.", icon: "⏱️" },
    { label: "SAP Document\nReporting Compliance", shortLabel: "Doc Compliance", desc: "SEC and SOX document management ensuring compliance across US jurisdictions with automated audit workflows.", icon: "📄" },
    { label: "SAP Billing &\nRevenue Innovation", shortLabel: "Billing & Revenue", desc: "Flexible billing models and revenue recognition aligned with ASC 606 standards for US enterprises.", icon: "💰" },
  ],
  in: [
    { label: "SAP Treasury &\nRisk Management", shortLabel: "Treasury & Risk", desc: "Indian treasury operations including INR cash management, RBI compliance, and hedging for import/export businesses.", icon: "🏦" },
    { label: "SAP Analytics\nCloud", shortLabel: "Analytics Cloud", desc: "Real-time insight into Indian P&L, GST analytics, and forecasting with AI-driven predictive analytics in INR.", icon: "📊" },
    { label: "SAP Group\nReporting", shortLabel: "Group Reporting", desc: "Ind AS consolidation with MCA audit trails and statutory disclosure support for multi-entity Indian operations.", icon: "📋" },
    { label: "SAP Advanced\nFinancial Closing", shortLabel: "Financial Closing", desc: "Automated period-end closing with GST reconciliation, TDS entries, and India statutory compliance built in.", icon: "⏱️" },
    { label: "SAP Document\nReporting Compliance", shortLabel: "Doc Compliance", desc: "MCA, SEBI, and RBI document management ensuring Indian statutory compliance with automated e-filing workflows.", icon: "📄" },
    { label: "SAP Billing &\nRevenue Innovation", shortLabel: "Billing & Revenue", desc: "GST-compliant billing, e-invoicing integration, and Ind AS 115 revenue recognition for Indian enterprises.", icon: "💰" },
  ],
  emea: [
    { label: "SAP Treasury &\nRisk Management", shortLabel: "Treasury & Risk", desc: "Multi-currency treasury operations including AED/SAR cash management, LC processing, and commodity risk for GCC businesses.", icon: "🏦" },
    { label: "SAP Analytics\nCloud", shortLabel: "Analytics Cloud", desc: "Real-time insight into EMEA P&L, VAT analytics, and forecasting with AI-driven predictive analytics across GCC currencies.", icon: "📊" },
    { label: "SAP Group\nReporting", shortLabel: "Group Reporting", desc: "IFRS consolidation with multi-currency audit trails and regulatory disclosure for GCC and EMEA multi-entity operations.", icon: "📋" },
    { label: "SAP Advanced\nFinancial Closing", shortLabel: "Financial Closing", desc: "Automated period-end closing with VAT reconciliation, multi-currency entries, and FTA compliance across EMEA.", icon: "⏱️" },
    { label: "SAP Document\nReporting Compliance", shortLabel: "Doc Compliance", desc: "FTA, ADGM, and DIFC document management ensuring GCC regulatory compliance with automated Arabic/English workflows.", icon: "📄" },
    { label: "SAP Billing &\nRevenue Innovation", shortLabel: "Billing & Revenue", desc: "VAT-compliant billing, multi-currency invoicing, and IFRS 15 revenue recognition for GCC and EMEA enterprises.", icon: "💰" },
  ],
};

const cfoSolutions: Record<Region, RegionCFOSolution[]> = {
  us: [
    { title: "SAP FI/CO", value: "End-to-end US financial integrity, SOX-compliant multi-entity consolidation", kpis: ["Time to close", "SOX compliance rate", "US GAAP reconciliation"], accent: "hsl(var(--gold))" },
    { title: "SAP Analytics Cloud (SAC)", value: "Real-time insight into US P&L, balance sheets, and USD forecasting", kpis: ["Decision speed", "US forecast accuracy"], accent: "hsl(var(--gold-light))" },
    { title: "Group Reporting", value: "US GAAP consolidation with SEC audit trails and disclosure support", kpis: ["SEC audit readiness", "Close cycle time"], accent: "hsl(var(--gold))" },
    { title: "Intercompany Reconciliation", value: "Automated IC reconciliation across US entities with SOX controls", kpis: ["Manual effort reduction", "SOX exception rates"], accent: "hsl(var(--gold-light))" },
    { title: "Fiori for Finance", value: "Role-based experience for US CFO teams with mobile-first dashboards", kpis: ["UX efficiency", "US adoption rates"], accent: "hsl(var(--gold))" },
  ],
  in: [
    { title: "SAP FI/CO", value: "End-to-end Indian financial integrity with GST, TDS, and Ind AS compliance", kpis: ["GST reconciliation time", "Ind AS compliance", "MCA filing accuracy"], accent: "hsl(var(--gold))" },
    { title: "SAP Analytics Cloud (SAC)", value: "Real-time insight into Indian P&L, GST analytics, and INR forecasting", kpis: ["Decision speed", "India forecast accuracy"], accent: "hsl(var(--gold-light))" },
    { title: "Group Reporting", value: "Ind AS consolidation with MCA audit trails and statutory disclosure", kpis: ["MCA audit readiness", "India close cycle time"], accent: "hsl(var(--gold))" },
    { title: "Intercompany Reconciliation", value: "Automated IC reconciliation across Indian entities with GST matching", kpis: ["GST ITC matching rate", "TDS reconciliation time"], accent: "hsl(var(--gold-light))" },
    { title: "Fiori for Finance", value: "Role-based experience for Indian CFO teams with GST dashboards", kpis: ["UX efficiency", "India adoption rates"], accent: "hsl(var(--gold))" },
  ],
  emea: [
    { title: "SAP FI/CO", value: "Multi-currency financial integrity with VAT compliance and IFRS consolidation across EMEA", kpis: ["VAT reconciliation time", "IFRS compliance", "Multi-currency accuracy"], accent: "hsl(var(--gold))" },
    { title: "SAP Analytics Cloud (SAC)", value: "Real-time insight into EMEA P&L, VAT analytics, and multi-currency forecasting", kpis: ["Decision speed", "GCC forecast accuracy"], accent: "hsl(var(--gold-light))" },
    { title: "Group Reporting", value: "IFRS consolidation with FTA audit trails across GCC and EMEA entities", kpis: ["FTA audit readiness", "EMEA close cycle time"], accent: "hsl(var(--gold))" },
    { title: "Intercompany Reconciliation", value: "Automated IC reconciliation across EMEA entities with transfer pricing controls", kpis: ["Transfer pricing compliance", "Multi-currency matching"], accent: "hsl(var(--gold-light))" },
    { title: "Fiori for Finance", value: "Role-based experience for EMEA CFO teams with Arabic/English dashboards", kpis: ["UX efficiency", "EMEA adoption rates"], accent: "hsl(var(--gold))" },
  ],
};

/* ═══════════════════════════════════════════════════════
   EXPORT FUNCTIONS
   ═══════════════════════════════════════════════════════ */
export function getHeroContent(region: Region) { return heroContent[region]; }
export function getMetrics(region: Region) { return metricsContent[region]; }
export function getContact(region: Region) { return contactContent[region]; }
export function getCTAContent(region: Region) { return ctaContent[region]; }
export function getSolutionsHeader(region: Region) { return solutionsHeader[region]; }
export function getSolutionsSteps(region: Region) { return solutionsSteps[region]; }
export function getCultureContent(region: Region) { return cultureContent[region]; }
export function getDeliveryHeader(region: Region) { return deliveryHeader[region]; }
export function getAdvisoryHeader(region: Region) { return advisoryHeader[region]; }
export function getCFOHeader(region: Region) { return cfoHeader[region]; }
export function getIndustryHeader(region: Region) { return industryHeader[region]; }
export function getIndustryContent(region: Region) { return industryContent[region]; }
export function getClientLogosTagline(region: Region) { return clientLogosTagline[region]; }
export function getFooterContent(region: Region) { return footerContent[region]; }
export function getCapabilities(region: Region) { return capabilitiesContent[region]; }
export function getDemoScenarios(region: Region) { return demoScenariosContent[region]; }
export function getAdvisoryOfferings(region: Region) { return advisoryOfferings[region]; }
export function getDeliveryPhases(region: Region) { return deliveryPhases[region]; }
export function getCFOWheelSegments(region: Region) { return cfoWheelSegments[region]; }
export function getCFOSolutions(region: Region) { return cfoSolutions[region]; }
