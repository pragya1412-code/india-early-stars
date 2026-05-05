import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-28 lg:py-36 bg-cream relative overflow-hidden">
      <div className="absolute -left-40 -top-40 w-[500px] h-[500px] bg-blush rounded-full blob opacity-50 animate-float-slow" />
      <div className="absolute -right-32 -bottom-40 w-[460px] h-[460px] bg-sage rounded-full blob opacity-50 animate-float-slower" />

      <div className="container max-w-3xl text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-6"
        >
          When you're ready
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="serif text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.04] text-balance"
        >
          Begin with a <em className="italic font-light text-primary">conversation</em>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-ink/65 text-lg mt-7 max-w-xl mx-auto leading-relaxed"
        >
          Forty minutes with a senior clinician. No pressure, no labels — just a quiet, considered first step.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link to="/book-assessment">
            <Button variant="hero" size="lg" className="gap-2 px-8">
              Book a private visit <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="heroOutline" size="lg" className="px-8">
              Speak with our team
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
