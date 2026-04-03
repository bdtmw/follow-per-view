import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import PositioningSection from "@/components/landing/PositioningSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import WhatYouGetSection from "@/components/landing/WhatYouGetSection";
import DifferentiationSection from "@/components/landing/DifferentiationSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import ResultsSection from "@/components/landing/ResultsSection";
import OfferSection from "@/components/landing/OfferSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <PositioningSection />
      <HowItWorksSection />
      <WhatYouGetSection />
      <DifferentiationSection />
      <UseCasesSection />
      <ResultsSection />
      <OfferSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
