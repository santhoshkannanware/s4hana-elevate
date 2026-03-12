import { createContext, useContext, ReactNode } from "react";
import { useParams, useNavigate } from "react-router-dom";

export type Region = "us" | "in" | "emea";

export const REGIONS: { code: Region; label: string; flag: string }[] = [
  { code: "us", label: "United States", flag: "🇺🇸" },
  { code: "in", label: "India", flag: "🇮🇳" },
  { code: "emea", label: "EMEA", flag: "🇪🇺" },
];

interface RegionContextType {
  region: Region;
  setRegion: (r: Region) => void;
  regionPath: (path: string) => string;
}

const RegionContext = createContext<RegionContextType>({
  region: "us",
  setRegion: () => {},
  regionPath: (p) => `/us${p}`,
});

export function useRegion() {
  return useContext(RegionContext);
}

export function RegionProvider({ children }: { children: ReactNode }) {
  const { region: paramRegion } = useParams<{ region: string }>();
  const navigate = useNavigate();

  const region: Region = (["us", "in", "emea"].includes(paramRegion || "") ? paramRegion : "us") as Region;

  const setRegion = (newRegion: Region) => {
    const currentPath = window.location.pathname;
    const withoutRegion = currentPath.replace(/^\/(us|in|emea)/, "") || "/";
    navigate(`/${newRegion}${withoutRegion === "/" ? "" : withoutRegion}`);
  };

  const regionPath = (path: string) => `/${region}${path}`;

  return (
    <RegionContext.Provider value={{ region, setRegion, regionPath }}>
      {children}
    </RegionContext.Provider>
  );
}
