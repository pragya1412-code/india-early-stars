import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TherapyJourney from "@/components/TherapyJourney";
import ServicesGrid from "@/components/ServicesGrid";
import TelehealthSection from "@/components/TelehealthSection";
import DifferenceSection from "@/components/DifferenceSection";
import PromiseSection from "@/components/PromiseSection";
import UsefulLinks from "@/components/UsefulLinks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <TherapyJourney />
      <ServicesGrid />
      <TelehealthSection />
      <DifferenceSection />
      <PromiseSection />
      <UsefulLinks />
      <Footer />
    </div>
  );
};

export default Index;
