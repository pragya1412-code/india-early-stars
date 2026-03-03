import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const DifferenceSection = () => {
  return (
    <section className="py-20 section-cool">
      <div className="container max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4"
        >
          The Early Start Difference
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl font-display text-primary mb-6"
        >
          Dedicated early childhood intervention services with a team that cares
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg mb-4 leading-relaxed"
        >
          Our occupational therapists, psychologists, speech therapists, dietitians and physiotherapists work with parents to help them meet their child's development goals.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-muted-foreground text-lg mb-8 leading-relaxed"
        >
          We work together with you, share information, provide evidence-informed advice on your journey, and achieve better outcomes for your child's life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <Button variant="hero" size="lg">Enquire Now</Button>
          <Button variant="heroOutline" size="lg">Start Your Booking</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferenceSection;
