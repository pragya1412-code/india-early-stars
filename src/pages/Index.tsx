import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import Philosophy from "@/components/Philosophy";
import JourneyVisualizer from "@/components/JourneyVisualizer";
import TypicalChecker from "@/components/TypicalChecker";
import Simulator from "@/components/Simulator";
import PathBuilder from "@/components/PathBuilder";
import Outcomes from "@/components/Outcomes";
import Space from "@/components/Space";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <Philosophy />
      <JourneyVisualizer />
      <TypicalChecker />
      <Simulator />
      <PathBuilder />
      <Outcomes />
      <Space />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
