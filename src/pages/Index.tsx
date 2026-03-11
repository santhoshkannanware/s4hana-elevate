import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyKannanware from "@/components/WhyKannanware";
import SolutionsSection from "@/components/SolutionsSection";
import CultureSection from "@/components/CultureSection";
import DeliveryModel from "@/components/DeliveryModel";
import AdvisoryModel from "@/components/AdvisoryModel";
import OfficeCFO from "@/components/OfficeCFO";
import IndustryFocus from "@/components/IndustryFocus";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={loading ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Navbar />
        <HeroSection />
        <WhyKannanware />
        <SolutionsSection />
        <CultureSection />
        <DeliveryModel />
        <AdvisoryModel />
        <OfficeCFO />
        <IndustryFocus />
        <FinalCTA />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
