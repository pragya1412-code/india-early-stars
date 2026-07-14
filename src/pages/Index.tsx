import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ProgressTrackingSection from "@/components/ProgressTrackingSection";
import Philosophy from "@/components/Philosophy";
import JourneyVisualizer from "@/components/JourneyVisualizer";
import TypicalChecker from "@/components/TypicalChecker";
import Simulator from "@/components/Simulator";
import PathBuilder from "@/components/PathBuilder";
import Outcomes from "@/components/Outcomes";
import Space from "@/components/Space";
import BrandAmbassadorSection from "@/components/BrandAmbassadorSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProgressTrackingSection />
      <Philosophy />
      <JourneyVisualizer />
      <TypicalChecker />
      <Simulator />
      <PathBuilder />
      <Outcomes />
      <Space />
      <BrandAmbassadorSection />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
