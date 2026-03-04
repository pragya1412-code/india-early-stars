import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import DifferenceSection from "@/components/DifferenceSection";
import PromiseSection from "@/components/PromiseSection";
import { motion } from "framer-motion";

const AboutUs = () => (
  <Layout>
    <PageHero title="About Us" subtitle="We are a national provider of early intervention therapy services helping families across India." />
    <section className="py-16">
      <div className="container max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg text-muted-foreground">
          <p className="text-lg leading-relaxed mb-6">
            Early Start India was founded with a mission to make world-class early childhood intervention accessible to every family in India. We believe that every child deserves the best possible start in life, regardless of where they live or what challenges they face.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Our passionate team of occupational therapists, psychologists, speech therapists, dietitians, and physiotherapists work together with families to create tailored therapy plans. We combine international best practices with local expertise to deliver evidence-based services across our growing network of centres.
          </p>
          <p className="text-lg leading-relaxed">
            With centres in Delhi, Mumbai, Bangalore, Chennai, and Kolkata — and telehealth services available nationwide — we're committed to reaching every child who needs support.
          </p>
        </motion.div>
      </div>
    </section>
    <DifferenceSection />
    <PromiseSection />
  </Layout>
);

export default AboutUs;
