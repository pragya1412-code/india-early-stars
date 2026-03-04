import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import TherapyJourney from "@/components/TherapyJourney";
import ServicesGrid from "@/components/ServicesGrid";
import TelehealthSection from "@/components/TelehealthSection";
import DifferenceSection from "@/components/DifferenceSection";
import PromiseSection from "@/components/PromiseSection";
import UsefulLinks from "@/components/UsefulLinks";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TherapyJourney />
      <ServicesGrid />
      <TelehealthSection />
      <DifferenceSection />
      <PromiseSection />
      <UsefulLinks />
    </Layout>
  );
};

export default Index;
