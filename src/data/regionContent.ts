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
   S4HANA PAGE — Region Content
   ═══════════════════════════════════════════════════════ */
export interface S4HanaRegionContent {
  hero: { eyebrow: string; headline: string; headlineAccent: string; desc: string; cta1: string; cta2: string };
  kpis: { label: string; val: string; delta: string }[];
  aiInsight: string;
  cloudPublic: { icon: string; title: string; desc: string }[];
  cloudPrivate: { icon: string; title: string; desc: string }[];
  demoKpis: { l: string; v1: number; v2: number; s: string; u: string }[];
  demoInsight: string;
  expertise: { title: string; desc: string }[];
  timeline: { title: string; desc: string }[];
  archNodes: { label: string; desc: string }[];
  impact: { title: string; desc: string; metric: string; metricLabel: string }[];
  cta: { eyebrow: string; headline: string; desc: string };
}

const s4hanaContent: Record<Region, S4HanaRegionContent> = {
  us: {
    hero: {
      eyebrow: "SAP S/4HANA Expertise — Americas",
      headline: "Transform Enterprise Finance with",
      headlineAccent: "SAP S/4HANA",
      desc: "SAP S/4HANA is the next-generation intelligent ERP powering real-time finance, simplified data models, and AI-driven decision intelligence. Kannanware helps US enterprises adopt S/4HANA with SOX-compliant advisory, implementation, and ongoing optimization across the Americas.",
      cta1: "Talk to a US Expert",
      cta2: "View Live Demo",
    },
    kpis: [
      { label: "Revenue", val: "$4.2B", delta: "+12%" },
      { label: "Cash Flow", val: "$890M", delta: "+8.3%" },
      { label: "EBITDA", val: "24.1%", delta: "+2.1%" },
    ],
    aiInsight: "Revenue growth trend accelerating across US entities. SOX-compliant forecast confidence: 94%. Recommended action: accelerate AR collections in Southeast region.",
    cloudPublic: [
      { icon: "Zap", title: "Rapid US Deployment", desc: "Accelerated go-live with pre-configured US best practices, ASC 606 revenue recognition, and standardized SOX-compliant workflows." },
      { icon: "RefreshCw", title: "Continuous Innovation", desc: "Automatic quarterly updates with the latest SAP innovations — zero infrastructure overhead for American operations." },
      { icon: "Cloud", title: "US Best-Practice Processes", desc: "Industry-leading workflows built on US GAAP standards, SOX controls, and American regulatory requirements." },
      { icon: "DollarSign", title: "Predictable USD Pricing", desc: "Eliminate on-premise hardware with cloud-native economics and predictable subscription pricing in US dollars." },
    ],
    cloudPrivate: [
      { icon: "Settings", title: "Full Customization", desc: "Tailor every aspect to your unique US business requirements — from custom SOX workflows to state-specific tax configurations." },
      { icon: "Shield", title: "US Data Sovereignty", desc: "Complete control over data residency with US-based hosting, FedRAMP alignment, and enterprise-grade security." },
      { icon: "Database", title: "Legacy ECC Integration", desc: "Seamlessly connect with existing US on-premise ECC systems, third-party applications, and American banking platforms." },
      { icon: "Server", title: "Enterprise Architecture Control", desc: "Fine-tune infrastructure, security, and performance to meet US enterprise specifications and compliance mandates." },
    ],
    demoKpis: [
      { l: "Revenue YTD", v1: 3890, v2: 4218, s: "$", u: "M" },
      { l: "Cash Flow", v1: 780, v2: 892, s: "$", u: "M" },
      { l: "Forecast Accuracy", v1: 87, v2: 96, s: "", u: "%" },
      { l: "Close Cycle", v1: 8, v2: 3, s: "", u: " Days" },
    ],
    demoInsight: "Revenue variance detected in Southeast region. Recommended action: review delayed receivables across Texas and Florida entities. Projected recovery: $12.4M within 30 days. SOX audit trail auto-generated.",
    expertise: [
      { title: "Greenfield Implementation", desc: "Build your S/4HANA environment from the ground up with US GAAP best practices, SOX-compliant architecture, and zero legacy baggage — a future-proof foundation for American enterprise finance." },
      { title: "Brownfield System Conversion", desc: "Convert your existing US ECC system to S/4HANA while preserving SOX-compliant customizations, historical data, and organizational knowledge — minimizing disruption to US operations." },
      { title: "Bluefield Selective Transformation", desc: "Selectively migrate US processes and data, combining greenfield innovation with brownfield continuity — tailored for complex multi-entity American corporations." },
      { title: "Finance Transformation (FI/CO)", desc: "Reimagine US financial processes with Universal Journal, real-time SOX reporting, margin analysis, and integrated planning — unlocking S/4HANA Finance for American enterprises." },
      { title: "Data Migration & Validation", desc: "End-to-end US data migration with automated validation, SOX-compliant reconciliation frameworks, and rigorous quality gates ensuring data integrity across American entities." },
      { title: "S/4HANA System Optimization", desc: "Maximize your existing US S/4HANA investment through performance tuning, SOX control activation, feature enablement, and continuous improvement roadmaps." },
    ],
    timeline: [
      { title: "Discovery", desc: "Assess your US landscape, define SOX-aligned transformation goals, and build the business case. We map every process, interview American stakeholders, and identify quick wins across US entities." },
      { title: "Solution Design", desc: "Architect the target US solution with fit-gap analysis, SOX control mapping, and US GAAP-compliant blueprinting. Our SAP-certified architects design for American scale." },
      { title: "Implementation", desc: "Configure, develop, and integrate S/4HANA modules with agile sprints — all governance SOX-compliant. Demos and stakeholder alignment across US time zones." },
      { title: "Testing", desc: "Comprehensive testing — unit, integration, UAT, SOX control testing, and performance. Automated test suites ensure zero-defect go-lives for US operations." },
      { title: "Go-Live", desc: "Orchestrate US cutover activities, data migration with US data residency, and production deployment with zero-downtime strategies and real-time monitoring." },
      { title: "Hypercare Support", desc: "Dedicated post-go-live support, SOX stabilization, and continuous optimization. 24/7 war-room coverage across American time zones for the critical first 90 days." },
    ],
    archNodes: [
      { label: "SAP BTP", desc: "Build extensions, automate SOX workflows, and integrate with US banking, tax, and compliance systems using low-code and pro-code tools on SAP BTP." },
      { label: "SAP Datasphere", desc: "Unified data layer harmonizing financial data across US SAP and non-SAP sources — enabling SOX-compliant, real-time business insights for American operations." },
      { label: "SAP Analytics Cloud", desc: "Enterprise planning, BI reporting, and predictive analytics unified for US CFOs — with embedded AI for USD forecasting and SOX dashboard compliance." },
      { label: "SAP BW/4HANA", desc: "Next-generation data warehousing optimized for S/4HANA with US GAAP operational reporting, SOX audit trails, and American regulatory analytics." },
      { label: "SAP Integration Suite", desc: "Connect US cloud and on-premise applications, automate American business processes, and manage APIs at enterprise scale across US entities." },
    ],
    impact: [
      { title: "Real-Time Financial Insights", desc: "Instant visibility into US financial performance across every entity, profit center, and segment — with sub-second response times for SOX-compliant reporting.", metric: "< 1s", metricLabel: "Query Response" },
      { title: "Accelerated Financial Close", desc: "Reduce US close cycles from weeks to days with automated SOX reconciliation, parallel processing, and intelligent exception handling across American entities.", metric: "70%", metricLabel: "Faster Close" },
      { title: "Simplified Data Architecture", desc: "Single source of truth with Universal Journal eliminating data redundancy — streamlining US GAAP and SOX reporting complexity across multi-entity operations.", metric: "10x", metricLabel: "Less Redundancy" },
      { title: "Future-Ready ERP Platform", desc: "AI-native, cloud-enabled platform built for the next decade of American enterprise innovation with embedded ML and predictive capabilities.", metric: "∞", metricLabel: "Scalability" },
    ],
    cta: {
      eyebrow: "Get Started",
      headline: "Start Your US SAP S/4HANA Transformation",
      desc: "Partner with Kannanware to design, implement, and optimize your S/4HANA environment for SOX-compliant, next-generation enterprise finance across the Americas.",
    },
  },
  in: {
    hero: {
      eyebrow: "SAP S/4HANA Expertise — India",
      headline: "Accelerate Indian Enterprise Finance with",
      headlineAccent: "SAP S/4HANA",
      desc: "SAP S/4HANA powers real-time finance, simplified data models, and AI-driven intelligence for Indian enterprises. Kannanware India delivers S/4HANA transformation with GST compliance, Ind AS alignment, and cost-effective execution from our Chennai delivery centre.",
      cta1: "Talk to an India Expert",
      cta2: "View Live Demo",
    },
    kpis: [
      { label: "Revenue", val: "₹3,200Cr", delta: "+18%" },
      { label: "Cash Flow", val: "₹680Cr", delta: "+14.5%" },
      { label: "EBITDA", val: "21.8%", delta: "+3.2%" },
    ],
    aiInsight: "Revenue growth accelerating across Indian entities. GST reconciliation fully automated. Forecast confidence: 96%. Recommended: optimize working capital in South zone.",
    cloudPublic: [
      { icon: "Zap", title: "Rapid India Deployment", desc: "Accelerated go-live with pre-configured Indian best practices — GST, e-invoicing, TDS, and Ind AS revenue recognition built in from day one." },
      { icon: "RefreshCw", title: "Continuous Innovation", desc: "Automatic quarterly SAP updates with India statutory patches — zero infrastructure overhead for Indian operations." },
      { icon: "Cloud", title: "India Best-Practice Processes", desc: "Industry workflows built on Indian GAAP, GST compliance, Make in India standards, and statutory requirements." },
      { icon: "DollarSign", title: "Cost-Effective INR Pricing", desc: "Eliminate on-premise hardware with cloud economics and predictable subscription pricing — ideal for Indian mid-market enterprises." },
    ],
    cloudPrivate: [
      { icon: "Settings", title: "Full India Customization", desc: "Tailor every aspect to your Indian business — from GST workflows to state-specific tax configurations and India payroll requirements." },
      { icon: "Shield", title: "India Data Residency", desc: "Complete control with India-hosted data, RBI data localization compliance, and enterprise-grade security for Indian financial data." },
      { icon: "Database", title: "Legacy ECC Integration", desc: "Seamlessly connect with existing Indian ECC systems, government portals (GSTN, TRACES, MCA), and Indian banking platforms." },
      { icon: "Server", title: "Enterprise Architecture Control", desc: "Fine-tune infrastructure for Indian network conditions, optimize for pan-India deployments, and meet India-specific compliance mandates." },
    ],
    demoKpis: [
      { l: "Revenue YTD", v1: 2800, v2: 3200, s: "₹", u: "Cr" },
      { l: "Cash Flow", v1: 580, v2: 680, s: "₹", u: "Cr" },
      { l: "GST Accuracy", v1: 88, v2: 99, s: "", u: "%" },
      { l: "Close Cycle", v1: 12, v2: 4, s: "", u: " Days" },
    ],
    demoInsight: "GST ITC mismatch of ₹18.6L detected across 3 entities — auto-reconciled ₹14.2L. Recommended: follow up with 28 vendors for GSTR-1 filing. Projected recovery within 15 days.",
    expertise: [
      { title: "Greenfield Implementation", desc: "Build your S/4HANA environment from scratch with India-specific localisations — GST, e-invoicing, TDS, EPF/ESI configured from day one for Indian enterprises." },
      { title: "Brownfield System Conversion", desc: "Convert your existing Indian ECC system to S/4HANA while preserving GST configurations, India payroll, historical data, and organisational knowledge." },
      { title: "Bluefield Selective Transformation", desc: "Selectively migrate Indian processes and data — ideal for multi-plant Indian manufacturers transitioning to S/4HANA without disrupting production." },
      { title: "Finance Transformation (FI/CO)", desc: "Reimagine Indian financial processes with Universal Journal, real-time GST reporting, Ind AS compliance, and integrated planning for Indian enterprises." },
      { title: "Data Migration & Validation", desc: "End-to-end Indian data migration with GST-compliant validation, statutory reconciliation frameworks, and quality gates ensuring data integrity across Indian entities." },
      { title: "S/4HANA System Optimization", desc: "Maximize your existing Indian S/4HANA investment through performance tuning, GST feature activation, India statutory updates, and continuous improvement." },
    ],
    timeline: [
      { title: "Discovery", desc: "Assess your Indian landscape, define GST-aligned transformation goals, and build the business case in INR. We map every process and interview stakeholders across Indian plants and offices." },
      { title: "Solution Design", desc: "Architect the target Indian solution with fit-gap analysis, GST configuration mapping, and Ind AS-compliant blueprinting from our Chennai centre." },
      { title: "Implementation", desc: "Configure S/4HANA with India localisations — GST, e-invoicing, TDS, India payroll — with agile sprints and continuous stakeholder alignment in IST." },
      { title: "Testing", desc: "Comprehensive testing — GST scenario validation, e-invoicing workflows, TDS calculations, and Ind AS compliance. Automated test suites for zero-defect Indian go-lives." },
      { title: "Go-Live", desc: "Orchestrate Indian cutover — GST period alignment, India data migration, and production deployment with pan-India monitoring dashboards." },
      { title: "Hypercare Support", desc: "Dedicated post-go-live support from Chennai — GST filing support, India statutory stabilization, and continuous optimization for 90 days." },
    ],
    archNodes: [
      { label: "SAP BTP", desc: "Build extensions, automate GST workflows, and integrate with Indian government portals (GSTN, TRACES, MCA) using SAP Business Technology Platform." },
      { label: "SAP Datasphere", desc: "Unified data layer harmonizing Indian financial data across SAP and non-SAP sources — enabling GST analytics and real-time Ind AS insights." },
      { label: "SAP Analytics Cloud", desc: "Enterprise planning and BI for Indian CFOs — with embedded AI for INR forecasting, GST analytics, and India statutory dashboards." },
      { label: "SAP BW/4HANA", desc: "Next-generation data warehousing for Indian enterprises with Ind AS reporting, GST audit trails, and statutory analytics." },
      { label: "SAP Integration Suite", desc: "Connect Indian cloud and on-premise applications — GSTN, banking APIs, India payroll systems — and manage APIs across Indian entities." },
    ],
    impact: [
      { title: "Real-Time Financial Insights", desc: "Instant visibility into Indian financial performance across every plant, profit center, and entity — with GST dashboards and Ind AS reporting in real time.", metric: "< 1s", metricLabel: "Query Response" },
      { title: "Accelerated Financial Close", desc: "Reduce Indian close cycles from 12 days to 4 with automated GST reconciliation, TDS processing, and intelligent exception handling.", metric: "67%", metricLabel: "Faster Close" },
      { title: "GST Compliance Automation", desc: "99%+ GST accuracy with automated GSTR filing, e-invoicing, ITC matching, and TDS reconciliation — eliminating manual statutory work.", metric: "99%", metricLabel: "GST Accuracy" },
      { title: "Cost-Effective Transformation", desc: "India delivery centre economics with global quality — Chennai-based teams deliver S/4HANA at 40% lower TCO than Western delivery models.", metric: "40%", metricLabel: "Lower TCO" },
    ],
    cta: {
      eyebrow: "Get Started",
      headline: "Start Your India SAP S/4HANA Transformation",
      desc: "Partner with Kannanware India to deliver GST-compliant, Ind AS-aligned S/4HANA transformation from our Chennai delivery centre — cost-effective, high-quality, and India-ready.",
    },
  },
  emea: {
    hero: {
      eyebrow: "SAP S/4HANA Expertise — Middle East & EMEA",
      headline: "Modernize EMEA Enterprise Finance with",
      headlineAccent: "SAP S/4HANA",
      desc: "SAP S/4HANA delivers real-time finance, simplified data models, and AI-driven intelligence for EMEA enterprises. Kannanware enables organizations across the UAE, GCC, and wider region to adopt S/4HANA with VAT compliance, multi-currency support, and Arabic localisation from our Dubai hub.",
      cta1: "Talk to a Dubai Expert",
      cta2: "View Live Demo",
    },
    kpis: [
      { label: "Revenue", val: "AED 1.6B", delta: "+22%" },
      { label: "Cash Flow", val: "AED 340M", delta: "+16.8%" },
      { label: "EBITDA", val: "28.4%", delta: "+4.1%" },
    ],
    aiInsight: "Revenue growth accelerating across GCC entities. VAT reconciliation fully automated. Multi-currency forecast confidence: 95%. Recommended: optimize LC collections for Abu Dhabi projects.",
    cloudPublic: [
      { icon: "Zap", title: "Rapid GCC Deployment", desc: "Accelerated go-live with pre-configured GCC best practices — VAT, multi-currency, Arabic UI, and IFRS revenue recognition from day one." },
      { icon: "RefreshCw", title: "Continuous Innovation", desc: "Automatic quarterly SAP updates with EMEA regulatory patches — zero infrastructure overhead for GCC operations." },
      { icon: "Cloud", title: "GCC Best-Practice Processes", desc: "Industry workflows built on IFRS standards, VAT compliance, free zone regulations, and GCC regulatory requirements." },
      { icon: "DollarSign", title: "Predictable AED Pricing", desc: "Eliminate on-premise hardware with cloud economics and predictable subscription pricing across UAE, KSA, and wider EMEA." },
    ],
    cloudPrivate: [
      { icon: "Settings", title: "Full EMEA Customization", desc: "Tailor every aspect to your GCC business — from VAT workflows to free zone configurations and Arabic language UI." },
      { icon: "Shield", title: "GCC Data Sovereignty", desc: "Complete control with UAE/KSA-hosted data, NESA compliance, and enterprise-grade security for Middle East financial data." },
      { icon: "Database", title: "Legacy ECC Integration", desc: "Seamlessly connect with existing EMEA ECC systems, government portals (FTA, ZATCA), and GCC banking platforms." },
      { icon: "Server", title: "Enterprise Architecture Control", desc: "Fine-tune infrastructure for multi-country GCC deployments, optimize for Arabic/English interfaces, and meet EMEA compliance mandates." },
    ],
    demoKpis: [
      { l: "Revenue YTD", v1: 1200, v2: 1600, s: "AED ", u: "M" },
      { l: "Cash Flow", v1: 280, v2: 340, s: "AED ", u: "M" },
      { l: "VAT Accuracy", v1: 89, v2: 99, s: "", u: "%" },
      { l: "Close Cycle", v1: 10, v2: 3, s: "", u: " Days" },
    ],
    demoInsight: "VAT mismatch of AED 890K detected across 2 GCC entities — 80% linked to free zone transactions. Auto-reconciled AED 720K. Recommended: review free zone transfer pricing within 15 days.",
    expertise: [
      { title: "Greenfield Implementation", desc: "Build your S/4HANA environment from scratch with EMEA localisations — VAT, Arabic UI, multi-currency (AED/SAR/QAR), and IFRS configured for GCC enterprises." },
      { title: "Brownfield System Conversion", desc: "Convert your existing EMEA ECC system to S/4HANA while preserving VAT configurations, multi-currency setups, historical data, and Arabic language support." },
      { title: "Bluefield Selective Transformation", desc: "Selectively migrate EMEA processes and data — ideal for multi-entity GCC organisations transitioning to S/4HANA without disrupting cross-border operations." },
      { title: "Finance Transformation (FI/CO)", desc: "Reimagine EMEA financial processes with Universal Journal, real-time VAT reporting, IFRS compliance, and multi-currency planning for GCC enterprises." },
      { title: "Data Migration & Validation", desc: "End-to-end EMEA data migration with VAT-compliant validation, multi-currency reconciliation, and quality gates ensuring data integrity across GCC entities." },
      { title: "S/4HANA System Optimization", desc: "Maximize your existing EMEA S/4HANA investment through performance tuning, VAT feature activation, IFRS updates, and continuous improvement." },
    ],
    timeline: [
      { title: "Discovery", desc: "Assess your EMEA landscape, define VAT-aligned transformation goals, and build the multi-currency business case. We map processes across UAE, KSA, and regional offices." },
      { title: "Solution Design", desc: "Architect the target EMEA solution with fit-gap analysis, VAT configuration mapping, IFRS-compliant blueprinting, and Arabic localisation design from our Dubai hub." },
      { title: "Implementation", desc: "Configure S/4HANA with EMEA localisations — VAT, Arabic UI, multi-currency, free zone accounting — with agile sprints aligned to GST+4 time zones." },
      { title: "Testing", desc: "Comprehensive testing — VAT scenario validation, multi-currency workflows, IFRS consolidation, and FTA compliance. Automated test suites for zero-defect GCC go-lives." },
      { title: "Go-Live", desc: "Orchestrate EMEA cutover — multi-currency period alignment, cross-border data migration, and production deployment with GCC-wide monitoring dashboards." },
      { title: "Hypercare Support", desc: "Dedicated post-go-live support from Dubai — VAT filing support, EMEA regulatory stabilization, and continuous optimization across GCC time zones for 90 days." },
    ],
    archNodes: [
      { label: "SAP BTP", desc: "Build extensions, automate VAT workflows, and integrate with GCC government portals (FTA, ZATCA) using SAP Business Technology Platform from Dubai." },
      { label: "SAP Datasphere", desc: "Unified data layer harmonizing EMEA financial data across SAP and non-SAP sources — enabling VAT analytics and multi-currency IFRS insights." },
      { label: "SAP Analytics Cloud", desc: "Enterprise planning and BI for EMEA CFOs — with embedded AI for multi-currency forecasting, VAT analytics, and Arabic/English dashboards." },
      { label: "SAP BW/4HANA", desc: "Next-generation data warehousing for GCC enterprises with IFRS reporting, VAT audit trails, and multi-currency regulatory analytics." },
      { label: "SAP Integration Suite", desc: "Connect EMEA cloud and on-premise applications — FTA, ZATCA, GCC banking APIs — and manage APIs across multi-country entities." },
    ],
    impact: [
      { title: "Real-Time Financial Insights", desc: "Instant visibility into EMEA financial performance across every GCC entity, profit center, and currency — with VAT dashboards and IFRS reporting.", metric: "< 1s", metricLabel: "Query Response" },
      { title: "Accelerated Financial Close", desc: "Reduce EMEA close cycles from 10 days to 3 with automated VAT reconciliation, multi-currency processing, and intelligent exception handling.", metric: "70%", metricLabel: "Faster Close" },
      { title: "Multi-Currency Precision", desc: "Real-time AED/SAR/QAR/GBP processing with automated currency revaluation, transfer pricing compliance, and cross-border consolidation.", metric: "99.9%", metricLabel: "FX Accuracy" },
      { title: "Regional Scalability", desc: "Expand seamlessly from UAE to KSA, Qatar, Oman, and beyond — with localisation, regulatory compliance, and multi-entity architecture built in.", metric: "∞", metricLabel: "Scalability" },
    ],
    cta: {
      eyebrow: "Get Started",
      headline: "Start Your EMEA SAP S/4HANA Transformation",
      desc: "Partner with Kannanware to deliver VAT-compliant, IFRS-aligned S/4HANA transformation from our Dubai hub — with Arabic localisation, multi-currency support, and GCC regulatory expertise.",
    },
  },
};

/* ═══════════════════════════════════════════════════════
   RECORD-TO-REPORT PAGE — Region Content
   ═══════════════════════════════════════════════════════ */
export interface R2RRegionContent {
  hero: { eyebrow: string; headline: string; headlineAccent: string; desc: string; cta1: string; cta2: string };
  whatIsR2R: { eyebrow: string; heading: string; headingAccent: string; desc: string; steps: { title: string; desc: string }[] };
  timeline: { step: string; title: string; desc: string; detail: string[] }[];
  capabilities: { title: string; desc: string }[];
  impact: { value: number; suffix: string; label: string; desc: string }[];
  cta: { eyebrow: string; headline: string; headlineAccent: string; desc: string };
}

const r2rContent: Record<Region, R2RRegionContent> = {
  us: {
    hero: {
      eyebrow: "Financial Process Excellence — Americas",
      headline: "Modernizing",
      headlineAccent: "Record-to-Report",
      desc: "Record to Report is the backbone of US financial transparency — from journal entries through SOX-compliant consolidation to SEC-ready financials. Kannanware optimizes every step with SAP intelligence for American enterprises.",
      cta1: "Transform US Finance Operations",
      cta2: "Explore the Process",
    },
    whatIsR2R: {
      eyebrow: "Understanding the US Process",
      heading: "What is",
      headingAccent: "Record to Report?",
      desc: "R2R encompasses the full lifecycle of US financial data — from initial transaction capture through SOX-compliant consolidation to SEC-ready reporting. It is the backbone of American financial transparency and regulatory compliance.",
      steps: [
        { title: "Journal Entries", desc: "Capture and post US financial transactions with automated SOX-compliant validation and multi-level approval workflows across American entities." },
        { title: "General Ledger", desc: "Maintain the central repository of all US financial records with real-time balance updates, US GAAP accounting, and multi-entity consolidation." },
        { title: "Reconciliation", desc: "Match and verify account balances across US sub-ledgers, American banks, and intercompany transactions with SOX-compliant data integrity checks." },
        { title: "Financial Close", desc: "Execute US period-end closing including SOX accruals, reclassifications, USD currency revaluation, and automated close task management." },
        { title: "Consolidation", desc: "Aggregate financial data across US entities, eliminate intercompany transactions, and produce SEC-compliant group-level financials." },
        { title: "Executive Reporting", desc: "Generate SEC-ready financial statements, SOX management reports, and US regulatory filings with drill-down analytics for American boards." },
      ],
    },
    timeline: [
      { step: "01", title: "Transaction Recording", desc: "Automated capture from US source systems including AP, AR, payroll, and asset accounting — with SOX-compliant validation at the point of entry.", detail: ["Multi-source US data ingestion", "SOX real-time validation rules", "Automated US GAAP posting logic", "Exception handling workflows"] },
      { step: "02", title: "General Ledger Management", desc: "Centralized US ledger with real-time balance updates, parallel accounting (US GAAP/IFRS), and Universal Journal architecture for SEC reporting.", detail: ["Universal Journal (ACDOCA)", "US GAAP parallel valuations", "Real-time USD balance sheets", "Multi-entity support"] },
      { step: "03", title: "Reconciliation", desc: "Automated matching across US sub-ledgers, American bank statements, and intercompany accounts with SOX-compliant exception management.", detail: ["AI auto-matching algorithms", "US bank reconciliation", "Intercompany SOX netting", "Variance analysis"] },
      { step: "04", title: "Financial Close", desc: "Streamlined US period-end close with automated SOX task orchestration, real-time close monitoring, and compliance checkpoints.", detail: ["SOX close task management", "Automated US accruals", "USD currency revaluation", "Close cockpit monitoring"] },
      { step: "05", title: "Financial Consolidation", desc: "US group-level consolidation with automated IC elimination, minority interest calculations, and SEC multi-GAAP compliance.", detail: ["SEC legal consolidation", "SOX IC elimination", "Equity method adjustments", "Multi-standard US support"] },
      { step: "06", title: "Executive Reporting", desc: "AI-enhanced analytics with real-time dashboards for US executives, predictive insights, and automated SEC filing generation.", detail: ["Real-time US dashboards", "Predictive analytics", "SEC regulatory filings", "Board-ready reports"] },
    ],
    capabilities: [
      { title: "Financial Close Optimization", desc: "Reduce US close cycles from weeks to days with automated SOX task orchestration, real-time monitoring, and intelligent bottleneck detection across American entities." },
      { title: "Automated Reconciliation", desc: "AI-powered matching engines reconciling millions of US transactions across sub-ledgers, American banks, and intercompany — with 99%+ SOX-compliant auto-match rates." },
      { title: "Consolidation & SEC Reporting", desc: "End-to-end statutory and management consolidation with automated IC elimination, currency translation, and US GAAP/SEC compliance." },
      { title: "SOX Compliance & Audit Readiness", desc: "Continuous SOX controls monitoring, Sarbanes-Oxley automation, and audit-ready documentation with complete process traceability for US entities." },
      { title: "Real-Time Financial Analytics", desc: "Live dashboards powered by SAP Analytics Cloud with embedded AI for USD predictive insights, variance analysis, and American scenario planning." },
      { title: "Process Mining & Optimization", desc: "Data-driven US process analysis to identify bottlenecks, automate manual steps, and continuously improve R2R efficiency across American operations." },
    ],
    impact: [
      { value: 60, suffix: "%", label: "Faster Financial Close", desc: "Reduce US close cycle from weeks to days" },
      { value: 95, suffix: "%", label: "SOX Auto-Reconciliation", desc: "Intelligent matching across all US accounts" },
      { value: 40, suffix: "%", label: "Reduction in Manual Effort", desc: "Automation of repetitive US R2R tasks" },
      { value: 100, suffix: "%", label: "SOX Audit Trail", desc: "Complete Sarbanes-Oxley traceability" },
      { value: 3, suffix: "x", label: "Faster SEC Reporting", desc: "Real-time executive dashboards" },
      { value: 50, suffix: "%", label: "Lower Compliance Risk", desc: "Continuous SOX controls monitoring" },
    ],
    cta: {
      eyebrow: "Ready to Transform?",
      headline: "Transform US Finance Operations with",
      headlineAccent: "Kannanware",
      desc: "From accelerating SOX-compliant financial close to enabling real-time SEC reporting — our SAP-certified consultants deliver measurable outcomes across the US Record-to-Report lifecycle.",
    },
  },
  in: {
    hero: {
      eyebrow: "Financial Process Excellence — India",
      headline: "Modernizing",
      headlineAccent: "Record-to-Report",
      desc: "Record to Report is the backbone of Indian financial compliance — from GST-compliant journal entries through Ind AS consolidation to MCA-ready financials. Kannanware India optimizes every step from our Chennai delivery centre.",
      cta1: "Transform India Finance Operations",
      cta2: "Explore the Process",
    },
    whatIsR2R: {
      eyebrow: "Understanding the India Process",
      heading: "What is",
      headingAccent: "Record to Report?",
      desc: "R2R encompasses the full lifecycle of Indian financial data — from GST-compliant transaction capture through Ind AS consolidation to MCA statutory reporting. It is the backbone of Indian financial transparency and regulatory compliance.",
      steps: [
        { title: "Journal Entries", desc: "Capture and post Indian financial transactions with automated GST validation, TDS deduction workflows, and multi-level approval across Indian entities." },
        { title: "General Ledger", desc: "Maintain the central repository of Indian financial records with real-time GST balance updates, Ind AS accounting, and multi-entity pan-India consolidation." },
        { title: "Reconciliation", desc: "Match and verify balances across Indian sub-ledgers, domestic banks, GSTR-2A vs purchase register, and intercompany transactions." },
        { title: "Financial Close", desc: "Execute Indian period-end closing including GST reconciliation, TDS entries, Ind AS reclassifications, and INR currency revaluation." },
        { title: "Consolidation", desc: "Aggregate financial data across Indian entities, eliminate intercompany transactions, and produce MCA-compliant group-level financials under Ind AS." },
        { title: "Executive Reporting", desc: "Generate MCA-ready financial statements, statutory board reports, and Ind AS regulatory filings with drill-down analytics for Indian management." },
      ],
    },
    timeline: [
      { step: "01", title: "Transaction Recording", desc: "Automated capture from Indian source systems — AP with GST, AR with TDS, India payroll, and asset accounting with validated statutory posting.", detail: ["Indian multi-source ingestion", "GST real-time validation", "Automated Ind AS posting", "TDS exception workflows"] },
      { step: "02", title: "General Ledger Management", desc: "Centralized Indian ledger with real-time GST updates, parallel accounting (Ind AS/IGAAP), and Universal Journal for MCA reporting.", detail: ["Universal Journal (ACDOCA)", "Ind AS parallel valuations", "Real-time INR balance sheets", "Pan-India entity support"] },
      { step: "03", title: "Reconciliation", desc: "Automated matching across Indian sub-ledgers, domestic bank statements, GSTR-2A, and intercompany accounts with GST-compliant exception management.", detail: ["AI auto-matching for GST", "Indian bank reconciliation", "GSTR-2A vs books matching", "TDS credit reconciliation"] },
      { step: "04", title: "Financial Close", desc: "Streamlined Indian period-end close with automated GST entries, TDS processing, Ind AS adjustments, and India statutory checkpoints.", detail: ["GST close task management", "Automated TDS entries", "INR revaluation & provisions", "India close cockpit"] },
      { step: "05", title: "Financial Consolidation", desc: "Indian group-level consolidation with automated IC elimination, minority interest per Ind AS, and MCA statutory compliance.", detail: ["MCA legal consolidation", "Ind AS IC elimination", "Indian equity adjustments", "Schedule III compliance"] },
      { step: "06", title: "Executive Reporting", desc: "AI-enhanced analytics with real-time dashboards for Indian CFOs, GST predictive insights, and automated MCA filing generation.", detail: ["Real-time India dashboards", "GST predictive analytics", "MCA regulatory filings", "Board-ready Ind AS reports"] },
    ],
    capabilities: [
      { title: "Financial Close Optimization", desc: "Reduce Indian close cycles from 12 days to 4 with automated GST reconciliation, TDS processing, and intelligent bottleneck detection across Indian entities." },
      { title: "Automated GST Reconciliation", desc: "AI-powered matching of GSTR-2A vs purchase register across Indian entities — auto-reconciling ITC credits with 99%+ accuracy and flagging vendor discrepancies." },
      { title: "Ind AS Consolidation & MCA Reporting", desc: "End-to-end statutory consolidation under Ind AS with automated IC elimination, Schedule III preparation, and MCA-compliant group reporting." },
      { title: "India Statutory Compliance", desc: "Continuous GST, TDS, EPF/ESI, and MCA controls monitoring with automated e-filing, statutory documentation, and complete audit traceability." },
      { title: "Real-Time INR Analytics", desc: "Live dashboards with embedded AI for INR cash flow predictions, GST analytics, working capital optimization, and Indian scenario planning." },
      { title: "Process Mining for India", desc: "Data-driven analysis of Indian R2R processes to identify GST bottlenecks, automate manual statutory steps, and improve cycle efficiency." },
    ],
    impact: [
      { value: 67, suffix: "%", label: "Faster Financial Close", desc: "Reduce India close from 12 to 4 days" },
      { value: 99, suffix: "%", label: "GST Auto-Reconciliation", desc: "Intelligent GSTR-2A matching" },
      { value: 50, suffix: "%", label: "Reduction in Statutory Effort", desc: "Automated GST, TDS, MCA filing" },
      { value: 100, suffix: "%", label: "India Audit Compliance", desc: "Complete Ind AS traceability" },
      { value: 4, suffix: "x", label: "Faster MCA Reporting", desc: "Real-time Schedule III dashboards" },
      { value: 40, suffix: "%", label: "Lower Compliance Cost", desc: "Chennai centre cost advantage" },
    ],
    cta: {
      eyebrow: "Ready to Transform?",
      headline: "Transform India Finance Operations with",
      headlineAccent: "Kannanware India",
      desc: "From accelerating GST-compliant financial close to enabling real-time MCA reporting — our Chennai-based SAP consultants deliver measurable outcomes across the Indian R2R lifecycle.",
    },
  },
  emea: {
    hero: {
      eyebrow: "Financial Process Excellence — Middle East & EMEA",
      headline: "Modernizing",
      headlineAccent: "Record-to-Report",
      desc: "Record to Report is the backbone of EMEA financial transparency — from VAT-compliant journal entries through IFRS consolidation to FTA-ready financials. Kannanware optimizes every step for GCC and regional enterprises from our Dubai hub.",
      cta1: "Transform EMEA Finance Operations",
      cta2: "Explore the Process",
    },
    whatIsR2R: {
      eyebrow: "Understanding the EMEA Process",
      heading: "What is",
      headingAccent: "Record to Report?",
      desc: "R2R encompasses the full lifecycle of EMEA financial data — from VAT-compliant transaction capture through IFRS consolidation to FTA regulatory reporting. It is the backbone of GCC financial transparency across multi-currency, multi-entity operations.",
      steps: [
        { title: "Journal Entries", desc: "Capture and post EMEA financial transactions across AED/SAR/QAR with automated VAT validation and multi-currency approval workflows." },
        { title: "General Ledger", desc: "Maintain the central repository of EMEA financial records with real-time multi-currency balance updates, IFRS accounting, and free zone ledger segregation." },
        { title: "Reconciliation", desc: "Match and verify balances across EMEA sub-ledgers, GCC banks, multi-currency intercompany transactions, and FTA VAT returns." },
        { title: "Financial Close", desc: "Execute EMEA period-end closing including VAT accruals, multi-currency revaluation (AED/SAR/GBP), IFRS reclassifications, and FTA compliance checkpoints." },
        { title: "Consolidation", desc: "Aggregate financial data across GCC entities, eliminate multi-currency intercompany transactions, and produce IFRS-compliant group-level financials." },
        { title: "Executive Reporting", desc: "Generate FTA-ready financial statements, IFRS board reports, and GCC regulatory filings with multi-currency drill-down analytics in Arabic and English." },
      ],
    },
    timeline: [
      { step: "01", title: "Transaction Recording", desc: "Automated capture from EMEA source systems — AP with VAT, AR in multi-currencies, GCC payroll, and asset accounting with FTA validation.", detail: ["Multi-currency data ingestion", "VAT real-time validation", "Automated IFRS posting logic", "Free zone exception handling"] },
      { step: "02", title: "General Ledger Management", desc: "Centralized EMEA ledger with real-time multi-currency updates, parallel accounting (IFRS/local GAAP), and Universal Journal for FTA reporting.", detail: ["Universal Journal (ACDOCA)", "IFRS parallel valuations", "Multi-currency balance sheets", "GCC entity support"] },
      { step: "03", title: "Reconciliation", desc: "Automated matching across EMEA sub-ledgers, GCC bank statements, and multi-currency intercompany with transfer pricing-aware exception management.", detail: ["AI multi-currency matching", "GCC bank reconciliation", "Transfer pricing alignment", "VAT input/output matching"] },
      { step: "04", title: "Financial Close", desc: "Streamlined EMEA period-end close with automated VAT entries, multi-currency revaluation, IFRS adjustments, and FTA compliance checkpoints.", detail: ["VAT close task management", "Multi-currency revaluation", "IFRS provisions & accruals", "EMEA close cockpit"] },
      { step: "05", title: "Financial Consolidation", desc: "EMEA group-level consolidation with automated multi-currency IC elimination, minority interest per IFRS, and FTA regulatory compliance.", detail: ["IFRS legal consolidation", "Multi-currency IC elimination", "GCC equity adjustments", "FTA disclosure compliance"] },
      { step: "06", title: "Executive Reporting", desc: "AI-enhanced analytics with real-time dashboards for EMEA executives, multi-currency predictive insights, and automated FTA filing in Arabic/English.", detail: ["Multi-currency dashboards", "Oil price predictive analytics", "FTA regulatory filings", "Arabic/English board reports"] },
    ],
    capabilities: [
      { title: "Financial Close Optimization", desc: "Reduce EMEA close cycles from 10 days to 3 with automated VAT reconciliation, multi-currency processing, and intelligent bottleneck detection across GCC entities." },
      { title: "Automated Multi-Currency Reconciliation", desc: "AI-powered matching across AED/SAR/QAR/GBP transactions — reconciling intercompany, transfer pricing, and free zone entries with 99%+ auto-match rates." },
      { title: "IFRS Consolidation & FTA Reporting", desc: "End-to-end statutory consolidation under IFRS with automated multi-currency IC elimination, FTA disclosure, and GCC-compliant group reporting." },
      { title: "VAT & GCC Compliance", desc: "Continuous VAT controls monitoring across UAE, KSA, and Oman with automated FTA filing, ZATCA integration, and complete audit traceability." },
      { title: "Real-Time Multi-Currency Analytics", desc: "Live dashboards with embedded AI for multi-currency forecasting, oil price impact analysis, and GCC scenario planning in Arabic and English." },
      { title: "Process Mining for EMEA", desc: "Data-driven analysis of EMEA R2R processes to identify multi-currency bottlenecks, automate manual steps, and improve cycle efficiency across GCC." },
    ],
    impact: [
      { value: 70, suffix: "%", label: "Faster Financial Close", desc: "Reduce EMEA close from 10 to 3 days" },
      { value: 98, suffix: "%", label: "VAT Auto-Reconciliation", desc: "Intelligent matching across GCC entities" },
      { value: 45, suffix: "%", label: "Reduction in Manual Effort", desc: "Automation of EMEA R2R tasks" },
      { value: 100, suffix: "%", label: "FTA Audit Compliance", desc: "Complete IFRS traceability" },
      { value: 3, suffix: "x", label: "Faster IFRS Reporting", desc: "Real-time multi-currency dashboards" },
      { value: 55, suffix: "%", label: "Lower Compliance Risk", desc: "Continuous VAT & FTA monitoring" },
    ],
    cta: {
      eyebrow: "Ready to Transform?",
      headline: "Transform EMEA Finance Operations with",
      headlineAccent: "Kannanware",
      desc: "From accelerating VAT-compliant financial close to enabling real-time IFRS reporting — our Dubai-based SAP consultants deliver measurable outcomes across the EMEA Record-to-Report lifecycle.",
    },
  },
};

/* ═══════════════════════════════════════════════════════
   ENERGY PAGE — Region Content
   ═══════════════════════════════════════════════════════ */
export interface EnergyRegionContent {
  hero: { eyebrow: string; headline: string; headlineAccent: string; desc1: string; desc2: string; cta1: string; cta2: string };
  challenges: { title: string; desc: string }[];
  valueChain: { title: string; desc: string }[];
  capabilities: { title: string; desc: string }[];
  archNodes: { label: string; desc: string }[];
  impact: { title: string; desc: string; metric: string; metricLabel: string }[];
  story: { challenge: string; solution: string; outcome: string };
  cta: { eyebrow: string; headline: string; desc: string };
}

const energyContent: Record<Region, EnergyRegionContent> = {
  us: {
    hero: {
      eyebrow: "Industry — US Energy & Natural Resources",
      headline: "US Energy & Natural Resources Transformation with",
      headlineAccent: "SAP",
      desc1: "Helping American energy companies modernize finance, manage complex upstream and downstream assets, and gain real-time intelligence through SAP-powered digital transformation.",
      desc2: "US energy companies operate in dynamic markets shaped by shale revolution economics, EPA regulations, FERC compliance, and volatile commodity pricing. Kannanware enables American energy enterprises to modernize operations using SAP technologies.",
      cta1: "Talk to a US Energy Expert",
      cta2: "Explore SAP Solutions",
    },
    challenges: [
      { title: "US Commodity Volatility", desc: "American energy companies must manage WTI pricing fluctuations, Henry Hub gas benchmarks, and hedging strategies across upstream and midstream operations." },
      { title: "Federal & State Infrastructure", desc: "Managing large-scale US infrastructure across multiple states — from Permian Basin operations to Gulf Coast refineries — requires advanced operational visibility." },
      { title: "EPA & FERC Compliance", desc: "US energy organisations must comply with EPA environmental regulations, FERC reporting, SEC disclosures, and state-level energy mandates." },
      { title: "US Operational Efficiency", desc: "American energy companies must balance production efficiency with cost management across shale operations, renewables, and conventional assets." },
    ],
    valueChain: [
      { title: "Exploration & Production", desc: "US upstream operations from Permian Basin to Bakken — seismic surveys, drilling programs, and production accounting with JVA management for American joint ventures." },
      { title: "Asset Management", desc: "Monitoring US infrastructure — refineries, pipelines, LNG terminals — with predictive maintenance, HSE compliance, and lifecycle tracking across American operations." },
      { title: "Energy Distribution", desc: "Managing complex US energy networks — interstate pipelines, power grid interconnections, and LNG export logistics from Gulf Coast facilities." },
      { title: "Finance & Revenue", desc: "End-to-end US financial operations — SEC-compliant billing, commodity hedging on NYMEX, financial planning, and ASC 606 revenue recognition across American entities." },
      { title: "Analytics & Forecasting", desc: "Predictive demand modeling using WTI/Henry Hub benchmarks, US cost optimization, EPA compliance analytics, and AI-driven scenario planning for American markets." },
    ],
    capabilities: [
      { title: "US Finance Transformation", desc: "Modernize American energy finance with SAP S/4HANA — real-time visibility across upstream, midstream, and downstream with SOX and SEC compliance built in." },
      { title: "US Asset Lifecycle Visibility", desc: "Track American infrastructure investments — refineries, pipelines, wind farms — across the entire asset lifecycle with integrated SEC reporting." },
      { title: "Real-Time US Operational Insights", desc: "Use analytics to monitor US production performance across Permian, Bakken, and Gulf Coast operations — identify inefficiencies and optimize output." },
      { title: "EPA & SEC Compliance", desc: "Automate environmental and financial reporting to meet EPA, FERC, and SEC requirements for American energy companies." },
    ],
    archNodes: [
      { label: "SAP Asset Mgmt", desc: "Enterprise asset management for US energy infrastructure — refineries, pipelines, and wind farms — with predictive maintenance and FERC compliance." },
      { label: "SAP BTP", desc: "Integration platform connecting US energy systems — SCADA, PI historian, and trading platforms — with custom extensions and EPA compliance automation." },
      { label: "SAP Datasphere", desc: "Unified data layer harmonizing US operational and financial data — WTI benchmarks, production metrics, and SEC financials in one platform." },
      { label: "SAP Analytics Cloud", desc: "Advanced analytics for American energy — WTI/Henry Hub forecasting, US production planning, and EPA sustainability dashboards." },
    ],
    impact: [
      { title: "Faster US Financial Reporting", desc: "Accelerate American energy financial close with automated SOX reconciliation and parallel processing across upstream and downstream entities.", metric: "60%", metricLabel: "Faster Close" },
      { title: "US Asset Visibility", desc: "Real-time insights into American infrastructure performance — from Permian Basin wells to Gulf Coast LNG terminals — with integrated maintenance analytics.", metric: "95%", metricLabel: "Asset Visibility" },
      { title: "Better US Decision Intelligence", desc: "Predictive analytics for WTI pricing, US demand planning, EPA compliance forecasting, and AI-driven scenario planning for American markets.", metric: "3x", metricLabel: "Forecast Accuracy" },
      { title: "US Operational Efficiency", desc: "Optimize American production and operational costs through streamlined processes, intelligent automation, and real-time performance monitoring.", metric: "40%", metricLabel: "Cost Reduction" },
    ],
    story: {
      challenge: "A US energy company with Permian Basin and Gulf Coast operations struggled with fragmented reporting across multiple systems, delayed SEC filings, and limited visibility into upstream and downstream financial performance.",
      solution: "Kannanware implemented SAP S/4HANA Finance with integrated analytics, consolidating data from US upstream JVAs, midstream pipelines, and downstream refining into a single SOX-compliant source of truth.",
      outcome: "The company achieved 60% faster SEC reporting, improved WTI hedging forecast accuracy by 3x, and gained real-time operational visibility across all American business units.",
    },
    cta: {
      eyebrow: "Get Started",
      headline: "Transform US Energy Operations with SAP",
      desc: "Partner with Kannanware to modernize American energy finance and operations — with SOX compliance, SEC reporting, and real-time intelligence powered by SAP.",
    },
  },
  in: {
    hero: {
      eyebrow: "Industry — India Energy & Natural Resources",
      headline: "India Energy & Natural Resources Transformation with",
      headlineAccent: "SAP",
      desc1: "Helping Indian energy companies modernize finance, manage complex power generation and distribution assets, and gain real-time intelligence through SAP-powered digital transformation.",
      desc2: "India's energy sector is shaped by ambitious renewable targets, CERC/SERC regulations, coal-to-green transitions, and dynamic tariff structures. Kannanware India enables energy enterprises to modernize with SAP from our Chennai centre.",
      cta1: "Talk to an India Energy Expert",
      cta2: "Explore SAP Solutions",
    },
    challenges: [
      { title: "India Tariff Volatility", desc: "Indian energy companies must navigate dynamic tariff structures set by CERC/SERC, coal linkage pricing, and renewable energy auction benchmarks across states." },
      { title: "Pan-India Infrastructure", desc: "Managing power plants, transmission networks, and renewable installations across multiple Indian states — from Rajasthan solar parks to Gujarat wind corridors." },
      { title: "CERC & MoP Compliance", desc: "Indian energy organisations must comply with CERC tariff orders, MoP regulations, CEA safety standards, and state electricity regulatory requirements." },
      { title: "India Operational Efficiency", desc: "Indian energy companies must balance plant load factors, T&D losses, and coal logistics while transitioning to renewable energy targets under India's NDC commitments." },
    ],
    valueChain: [
      { title: "Power Generation", desc: "Indian power generation from thermal, solar, wind, and hydro — plant performance monitoring, fuel management, and PLF optimization across NTPC and IPP operations." },
      { title: "Asset Management", desc: "Monitoring Indian energy infrastructure — power plants, substations, renewable installations — with predictive maintenance and CEA compliance across pan-India operations." },
      { title: "Energy Distribution", desc: "Managing Indian power distribution — state DISCOM operations, smart metering, AT&C loss reduction, and last-mile electrification under Saubhagya and RDSS schemes." },
      { title: "Finance & Revenue", desc: "End-to-end Indian energy finance — tariff-based billing, GST compliance, CERC regulatory accounting, and Ind AS revenue recognition for Indian power companies." },
      { title: "Analytics & Forecasting", desc: "Predictive demand modeling for Indian power grids, renewable intermittency forecasting, coal logistics optimization, and AI-driven planning for state DISCOM operations." },
    ],
    capabilities: [
      { title: "India Finance Transformation", desc: "Modernize Indian energy finance with SAP S/4HANA — real-time visibility across generation, transmission, and distribution with GST and CERC compliance." },
      { title: "India Asset Lifecycle Visibility", desc: "Track Indian energy assets — power plants, wind farms, solar installations — across the lifecycle with integrated MoP reporting and predictive maintenance." },
      { title: "Real-Time India Operational Insights", desc: "Use analytics to monitor Indian power plant performance, AT&C losses, PLF metrics, and renewable generation — optimizing output across states." },
      { title: "CERC & India Statutory Compliance", desc: "Automate CERC tariff filings, MoP regulatory reporting, CEA safety compliance, and GST returns for Indian energy companies." },
    ],
    archNodes: [
      { label: "SAP Asset Mgmt", desc: "Enterprise asset management for Indian energy infrastructure — power plants, substations, and renewable installations — with predictive maintenance and CEA compliance." },
      { label: "SAP BTP", desc: "Integration platform connecting Indian energy systems — SCADA, smart meters, SLDC/RLDC — with custom extensions and CERC compliance automation." },
      { label: "SAP Datasphere", desc: "Unified data layer harmonizing Indian operational and financial data — tariff structures, PLF metrics, and GST financials in one platform." },
      { label: "SAP Analytics Cloud", desc: "Advanced analytics for Indian energy — demand forecasting per state DISCOM, renewable intermittency prediction, and CERC sustainability dashboards." },
    ],
    impact: [
      { title: "Faster India Financial Reporting", desc: "Accelerate Indian energy financial close with automated GST reconciliation and parallel processing across generation and distribution entities.", metric: "65%", metricLabel: "Faster Close" },
      { title: "India Asset Visibility", desc: "Real-time insights into Indian energy infrastructure — from Rajasthan solar parks to Tamil Nadu wind farms — with integrated maintenance analytics.", metric: "92%", metricLabel: "Asset Visibility" },
      { title: "Better India Decision Intelligence", desc: "Predictive analytics for Indian power demand, monsoon-adjusted renewable forecasting, coal logistics optimization, and AI scenario planning.", metric: "3x", metricLabel: "Forecast Accuracy" },
      { title: "India Operational Efficiency", desc: "Optimize Indian plant load factors, reduce AT&C losses, and streamline coal-to-pit operations through intelligent SAP automation.", metric: "35%", metricLabel: "Cost Reduction" },
    ],
    story: {
      challenge: "An Indian power generation company with thermal and renewable operations across 5 states struggled with fragmented CERC reporting, delayed GST filings, and limited visibility into plant-level financial performance.",
      solution: "Kannanware India implemented SAP S/4HANA Finance from our Chennai centre — consolidating data from thermal plants, wind farms, and solar installations into a GST-compliant, Ind AS-aligned single source of truth.",
      outcome: "The company achieved 65% faster CERC reporting, improved demand forecast accuracy by 3x, and gained real-time operational visibility across all Indian generation and distribution units.",
    },
    cta: {
      eyebrow: "Get Started",
      headline: "Transform India Energy Operations with SAP",
      desc: "Partner with Kannanware India to modernize energy finance and operations — with GST compliance, CERC reporting, and real-time intelligence from our Chennai delivery centre.",
    },
  },
  emea: {
    hero: {
      eyebrow: "Industry — Middle East Energy & Natural Resources",
      headline: "Middle East Energy & Natural Resources Transformation with",
      headlineAccent: "SAP",
      desc1: "Helping GCC energy companies modernize finance, manage complex upstream and downstream assets, and gain real-time intelligence through SAP-powered digital transformation.",
      desc2: "Middle East energy companies operate at the heart of global oil markets — shaped by OPEC+ dynamics, national vision programmes, ESG transition mandates, and multi-currency treasury operations. Kannanware enables GCC energy enterprises to modernize with SAP from our Dubai hub.",
      cta1: "Talk to a Dubai Energy Expert",
      cta2: "Explore SAP Solutions",
    },
    challenges: [
      { title: "OPEC+ & Brent Volatility", desc: "GCC energy companies must manage OPEC+ production quotas, Brent/Dubai crude pricing fluctuations, and hedging strategies across upstream and petrochemical operations." },
      { title: "GCC Mega-Infrastructure", desc: "Managing world-scale energy assets — ADNOC refineries, Aramco facilities, Qatargas LNG trains — requires advanced operational visibility across the Gulf region." },
      { title: "Vision 2030 & ESG Compliance", desc: "GCC energy organisations must align with Saudi Vision 2030, UAE Net Zero 2050, ESG disclosure mandates, and international carbon reporting frameworks." },
      { title: "GCC Operational Excellence", desc: "Middle East energy companies must balance production efficiency with diversification goals — from traditional hydrocarbons to hydrogen, solar, and nuclear energy." },
    ],
    valueChain: [
      { title: "Exploration & Production", desc: "GCC upstream operations — from ADNOC concessions to Aramco megafields — production sharing agreements, JVA accounting, and reserves management for Middle East operators." },
      { title: "Asset Management", desc: "Monitoring GCC mega-infrastructure — refineries, LNG plants, petrochemical complexes — with predictive maintenance, HSE compliance, and lifecycle tracking across the Gulf." },
      { title: "Energy Distribution", desc: "Managing GCC energy networks — cross-border gas pipelines, power interconnections (GCC Grid), and LNG export logistics from Ras Laffan and Das Island." },
      { title: "Finance & Revenue", desc: "End-to-end GCC financial operations — VAT-compliant billing, commodity trading on DME, multi-currency treasury (AED/SAR/USD), and IFRS 15 revenue recognition." },
      { title: "Analytics & Forecasting", desc: "Predictive demand modeling using Brent/Dubai crude benchmarks, GCC cost optimization, ESG compliance analytics, and AI-driven planning for Vision 2030 alignment." },
    ],
    capabilities: [
      { title: "GCC Finance Transformation", desc: "Modernize Middle East energy finance with SAP S/4HANA — real-time visibility across upstream, midstream, and downstream with VAT and IFRS compliance." },
      { title: "GCC Asset Lifecycle Visibility", desc: "Track Middle East energy assets — refineries, LNG trains, solar parks — across the lifecycle with integrated ESG reporting and predictive maintenance." },
      { title: "Real-Time GCC Operational Insights", desc: "Use analytics to monitor GCC production performance across ADNOC, Aramco, and QatarEnergy operations — identify inefficiencies and optimize output." },
      { title: "Vision 2030 & ESG Compliance", desc: "Automate ESG disclosures, carbon reporting, VAT filings, and IFRS regulatory reporting for GCC energy companies aligned to national visions." },
    ],
    archNodes: [
      { label: "SAP Asset Mgmt", desc: "Enterprise asset management for GCC energy mega-infrastructure — refineries, LNG plants, and renewable installations — with predictive maintenance and HSE compliance." },
      { label: "SAP BTP", desc: "Integration platform connecting GCC energy systems — SCADA, PI historian, DME trading — with custom extensions and Vision 2030 compliance automation." },
      { label: "SAP Datasphere", desc: "Unified data layer harmonizing GCC operational and financial data — Brent benchmarks, production metrics, and VAT-compliant financials in one platform." },
      { label: "SAP Analytics Cloud", desc: "Advanced analytics for Middle East energy — Brent/Dubai crude forecasting, GCC production planning, and ESG sustainability dashboards in Arabic and English." },
    ],
    impact: [
      { title: "Faster GCC Financial Reporting", desc: "Accelerate Middle East energy financial close with automated VAT reconciliation and multi-currency processing across upstream and downstream entities.", metric: "65%", metricLabel: "Faster Close" },
      { title: "GCC Asset Visibility", desc: "Real-time insights into Middle East energy infrastructure — from ADNOC refineries to DEWA solar parks — with integrated maintenance and ESG analytics.", metric: "96%", metricLabel: "Asset Visibility" },
      { title: "Better GCC Decision Intelligence", desc: "Predictive analytics for Brent pricing, GCC demand planning, Vision 2030 KPI tracking, and AI-driven scenario planning for Middle East markets.", metric: "3x", metricLabel: "Forecast Accuracy" },
      { title: "GCC Operational Efficiency", desc: "Optimize Middle East production and operational costs through intelligent automation, real-time performance monitoring, and ESG-aligned processes.", metric: "42%", metricLabel: "Cost Reduction" },
    ],
    story: {
      challenge: "A GCC energy company with upstream and petrochemical operations across UAE and Oman struggled with fragmented multi-currency reporting, delayed IFRS filings, and limited visibility into cross-entity financial performance.",
      solution: "Kannanware implemented SAP S/4HANA Finance from our Dubai hub — consolidating data from upstream concessions, refining operations, and trading desks into a VAT-compliant, IFRS-aligned single source of truth.",
      outcome: "The company achieved 65% faster IFRS reporting, improved Brent hedging forecast accuracy by 3x, and gained real-time operational visibility across all GCC business units and currencies.",
    },
    cta: {
      eyebrow: "Get Started",
      headline: "Transform GCC Energy Operations with SAP",
      desc: "Partner with Kannanware to modernize Middle East energy finance and operations — with VAT compliance, IFRS reporting, and real-time intelligence from our Dubai hub.",
    },
  },
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
export function getS4HanaContent(region: Region) { return s4hanaContent[region]; }
export function getR2RContent(region: Region) { return r2rContent[region]; }
export function getEnergyContent(region: Region) { return energyContent[region]; }
