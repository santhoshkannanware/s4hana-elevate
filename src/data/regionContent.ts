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
