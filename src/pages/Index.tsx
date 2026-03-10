import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import WhyKannanware from "@/components/WhyKannanware";
import SolutionsSection from "@/components/SolutionsSection";
import CFOSection from "@/components/CFOSection";
import FunctionalCapability from "@/components/FunctionalCapability";
import PlatformExpertise from "@/components/PlatformExpertise";
import DeliveryModel from "@/components/DeliveryModel";
import AdvisoryModel from "@/components/AdvisoryModel";
import IndustryFocus from "@/components/IndustryFocus";
import SuccessStories from "@/components/SuccessStories";
import GlobalPresence from "@/components/GlobalPresence";
import CultureSection from "@/components/CultureSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <WhyKannanware />
      <SolutionsSection />
      <CFOSection />
      <FunctionalCapability />
      <PlatformExpertise />
      <DeliveryModel />
      <AdvisoryModel />
      <IndustryFocus />
      <SuccessStories />
      <GlobalPresence />
      <CultureSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
