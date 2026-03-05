import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-family.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[520px] lg:min-h-[560px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Indian family with child enjoying quality time together" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/60 to-transparent" />
      </div>
      <div className="container relative z-10 py-16 lg:py-24">
        <div className="max-w-xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl lg:text-5xl font-display font-bold text-secondary-foreground leading-tight mb-4">
            Early childhood intervention services in Delhi
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="text-lg text-secondary-foreground/90 mb-8">
            Early childhood intervention services and support for young children and families in Delhi
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-4">
            <Link to="/enquire"><Button variant="hero" size="lg">Enquire Now</Button></Link>
            <Link to="/enquire"><Button variant="heroOutline" size="lg" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10">Start Your Booking</Button></Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
