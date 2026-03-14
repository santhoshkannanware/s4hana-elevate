import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RegionProvider } from "@/contexts/RegionContext";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import S4HanaPage from "./pages/S4HanaPage.tsx";
import BtpPage from "./pages/BtpPage.tsx";
import RecordToReportPage from "./pages/RecordToReportPage.tsx";
import EnergyPage from "./pages/EnergyPage.tsx";
import AdvisoryPage from "./pages/AdvisoryPage.tsx";
import ExecutionPage from "./pages/ExecutionPage.tsx";
import EaaSPage from "./pages/EaaSPage.tsx";
import CvOptimiserPage from "./pages/CvOptimiserPage.tsx";
import AiResumeBuilderPage from "./pages/AiResumeBuilderPage.tsx";
import TalentMatcherPage from "./pages/TalentMatcherPage.tsx";
import OurStoryPage from "./pages/OurStoryPage.tsx";
import SapBusinessAiPage from "./pages/SapBusinessAiPage.tsx";
import GeoRedirect from "./components/GeoRedirect.tsx";
import CustomCursor from "./components/CustomCursor.tsx";

const queryClient = new QueryClient();

function RegionRoutes() {
  return (
    <RegionProvider>
      <Routes>
        <Route index element={<Index />} />
        {/* Products */}
        <Route path="products/cloud-erp/s4hana" element={<S4HanaPage />} />
        <Route path="products/technology-platform/btp" element={<BtpPage />} />
        {/* Industries */}
        <Route path="industries/energy" element={<EnergyPage />} />
        {/* Transform & Manage > Functions */}
        <Route path="transform-manage/functions/record-to-report" element={<RecordToReportPage />} />
        {/* Transform & Manage > Services */}
        <Route path="transform-manage/services/advisory" element={<AdvisoryPage />} />
        <Route path="transform-manage/services/execution" element={<ExecutionPage />} />
        <Route path="transform-manage/services/eaas" element={<EaaSPage />} />
        {/* KIN AI */}
        <Route path="kin-ai/cv-optimiser" element={<CvOptimiserPage />} />
        <Route path="kin-ai/ai-resume-builder" element={<AiResumeBuilderPage />} />
        <Route path="kin-ai/talent-matcher" element={<TalentMatcherPage />} />
        {/* About */}
        <Route path="about/our-story" element={<OurStoryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RegionProvider>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CustomCursor />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Auto-detect region from IP, fallback to /us */}
          <Route path="/" element={<GeoRedirect />} />
          {/* Region-prefixed routes */}
          <Route path="/:region/*" element={<RegionRoutes />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
