import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/ServicesGrid";
import TelehealthSection from "@/components/TelehealthSection";
import TherapyJourney from "@/components/TherapyJourney";

const OurServices = () => (
  <Layout>
    <PageHero title="Our Services" subtitle="Our multi-disciplinary teams deliver evidence-based therapy services to help your child thrive." />
    <ServicesGrid />
    <TelehealthSection />
    <TherapyJourney />
  </Layout>
);

export default OurServices;
