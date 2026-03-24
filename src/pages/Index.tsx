import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import ScreeningCTA from "@/components/ScreeningCTA";
import TherapiesSection from "@/components/TherapiesSection";
import TrustSection from "@/components/TrustSection";
import TelehealthSection from "@/components/TelehealthSection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919999999999";
const WHATSAPP_MSG = encodeURIComponent("Hi, I want to know more about autism therapy for my child.");

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DifferentiatorsSection />
      <ScreeningCTA />
      <TherapiesSection />
      <TrustSection />
      <TelehealthSection />

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-extrabold mb-4"
          >
            Ready to Start Your Child's Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/90 text-lg mb-8"
          >
            Book a free initial assessment or chat with us on WhatsApp. We're here to help, every step of the way.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/book-assessment">
              <Button variant="accent" size="lg" className="gap-2">
                Book Assessment <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer">
              <Button variant="heroOutline" size="lg" className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
