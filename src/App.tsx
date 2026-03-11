import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import S4HanaPage from "./pages/S4HanaPage.tsx";
import BtpPage from "./pages/BtpPage.tsx";
import RecordToReportPage from "./pages/RecordToReportPage.tsx";
import EnergyPage from "./pages/EnergyPage.tsx";
import AdvisoryPage from "./pages/AdvisoryPage.tsx";
import ExecutionPage from "./pages/ExecutionPage.tsx";
import EaaSPage from "./pages/EaaSPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product-expertise/s4hana" element={<S4HanaPage />} />
          <Route path="/product-expertise/btp" element={<BtpPage />} />
          <Route path="/capability/record-to-report" element={<RecordToReportPage />} />
          <Route path="/industry/energy" element={<EnergyPage />} />
          <Route path="/services/advisory" element={<AdvisoryPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
