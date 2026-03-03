import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const TherapyJourney = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6"
        >
          Let's get you started on your therapy journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-muted-foreground text-lg mb-8 leading-relaxed"
        >
          Our passionate team of health professionals is here to support you on your therapy journey through our early childhood intervention services. We'll work together with you to understand your child and tailor the right strategies and therapies to give them the best opportunity for a happy and healthy life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <Button variant="hero" size="lg">Enquire Now</Button>
          <Button variant="heroOutline" size="lg">Start Your Booking</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TherapyJourney;
