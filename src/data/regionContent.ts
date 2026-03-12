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
    description: "Kannanware accelerates SAP transformation for Indian enterprises across Manufacturing, Energy, BFSI & Services — with AI-native delivery from our India centres.",
    trustBadges: ["Make in India", "SAP Certified Partner", "Pan-India Delivery Centres"],
  },
  emea: {
    badge: "SAP Certified AI-First Implementation Partner — EMEA",
    headlinePre: "EMEA's AI-First",
    headlinePost: "SAP Consulting Partner",
    headlineAccent: "Transforming Europe & Beyond.",
    description: "Kannanware delivers SAP solutions across EMEA — covering Finance, Supply Chain, HR & Analytics with deep regulatory and localisation expertise.",
    trustBadges: ["GDPR-Ready Delivery", "SAP Certified Partner", "Pan-European Footprint"],
  },
};

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
    { target: 12, suffix: "+", label: "Enterprise Clients Across EMEA", sublabel: "UK, Germany, Middle East & Africa" },
    { target: 25, suffix: "K", label: "EMEA Project Hours", sublabel: "Regulatory-Compliant Delivery" },
    { target: 200, suffix: "+", label: "Years Combined EMEA Expertise", sublabel: "Cross-Border Specialists" },
    { target: 70, suffix: "%", label: "SAP-Certified EMEA Consultants", sublabel: "Multi-Lingual Teams" },
    { target: 20, suffix: "+", label: "Countries Covered in EMEA", sublabel: "Localisation at Scale" },
  ],
};

const contactContent: Record<Region, RegionContact> = {
  us: {
    phone: "+1 (555) 234-5678",
    email: "us@kannanware.com",
    address: "New York, NY — United States",
    currency: "USD",
  },
  in: {
    phone: "+91 44 4567 8900",
    email: "india@kannanware.com",
    address: "Chennai, Tamil Nadu — India",
    currency: "INR",
  },
  emea: {
    phone: "+44 20 7946 0958",
    email: "emea@kannanware.com",
    address: "London, United Kingdom",
    currency: "EUR",
  },
};

const ctaContent: Record<Region, RegionCTA> = {
  us: {
    heading: "Ready to transform",
    headingAccent: "with SAP?",
    description: "Whether starting a new SAP journey, optimising an existing landscape, or seeking managed support — Kannanware is your AI-first SAP partner.",
  },
  in: {
    heading: "Ready to accelerate",
    headingAccent: "your SAP journey?",
    description: "From greenfield implementations to RISE with SAP migrations — Kannanware India brings AI-first delivery to your doorstep with cost-effective, high-quality execution.",
  },
  emea: {
    heading: "Ready to modernise",
    headingAccent: "across EMEA?",
    description: "Kannanware brings deep SAP expertise with GDPR-compliant, multi-lingual delivery across the UK, Europe, Middle East & Africa.",
  },
};

export function getHeroContent(region: Region) { return heroContent[region]; }
export function getMetrics(region: Region) { return metricsContent[region]; }
export function getContact(region: Region) { return contactContent[region]; }
export function getCTAContent(region: Region) { return ctaContent[region]; }
