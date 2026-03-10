import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import WhyKannanware from "@/components/WhyKannanware";
import SolutionsSection from "@/components/SolutionsSection";
import CultureSection from "@/components/CultureSection";
import DeliveryModel from "@/components/DeliveryModel";
import AdvisoryModel from "@/components/AdvisoryModel";
import IndustryFocus from "@/components/IndustryFocus";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <WhyKannanware />
      <SolutionsSection />
      <CultureSection />
      <DeliveryModel />
      <AdvisoryModel />
      <IndustryFocus />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
