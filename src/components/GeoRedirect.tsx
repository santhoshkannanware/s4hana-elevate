import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import type { Region } from "@/contexts/RegionContext";

const COUNTRY_TO_REGION: Record<string, Region> = {
  US: "us", CA: "us", MX: "us", BR: "us", AR: "us", CL: "us", CO: "us", PE: "us",
  IN: "in", LK: "in", BD: "in", NP: "in",
  GB: "emea", DE: "emea", FR: "emea", IT: "emea", ES: "emea", NL: "emea",
  AE: "emea", SA: "emea", QA: "emea", KW: "emea", BH: "emea", OM: "emea",
  ZA: "emea", NG: "emea", KE: "emea", EG: "emea",
  SE: "emea", NO: "emea", DK: "emea", FI: "emea", PL: "emea", CZ: "emea",
  AT: "emea", CH: "emea", BE: "emea", IE: "emea", PT: "emea",
};

export default function GeoRedirect() {
  const [region, setRegion] = useState<Region | null>(null);

  useEffect(() => {
    const cached = sessionStorage.getItem("kw_geo_region");
    if (cached && ["us", "in", "emea"].includes(cached)) {
      setRegion(cached as Region);
      return;
    }

    fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(3000) })
      .then((r) => r.json())
      .then((data) => {
        const detected = COUNTRY_TO_REGION[data.country_code] || "us";
        sessionStorage.setItem("kw_geo_region", detected);
        setRegion(detected);
      })
      .catch(() => {
        sessionStorage.setItem("kw_geo_region", "us");
        setRegion("us");
      });
  }, []);

  if (!region) {
    return (
      <div style={{ background: "#0c0c0c", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: "#E8A000", fontSize: "0.9rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Detecting your region…
        </div>
      </div>
    );
  }

  return <Navigate to={`/${region}`} replace />;
}
