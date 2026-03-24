import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-family.jpg";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "919999999999";
const WHATSAPP_MSG = encodeURIComponent("Hi, I want to know more about autism therapy for my child.");

const HeroSection = () => {
  return (
    <section className="relative min-h-[560px] lg:min-h-[620px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="North Indian mother with child at therapy center in Delhi" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/30" />
      </div>
      <div className="container relative z-10 py-16 lg:py-24">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary-foreground leading-tight mb-4"
          >
            Early Support Can Change Your Child's Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-secondary-foreground/90 mb-8 leading-relaxed"
          >
            Expert autism therapy and early intervention in Delhi powered by science + AI-driven insights.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/book-assessment">
              <Button variant="hero" size="lg" className="gap-2">
                Book Assessment <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" className="gap-2">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
