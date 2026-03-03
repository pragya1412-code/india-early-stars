import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import telehealthImg from "@/assets/telehealth.jpg";

const TelehealthSection = () => {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Therapy services through telehealth
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-6 leading-relaxed">
            Can't get to one of our centres? Receive responsive, flexible and creative early childhood intervention services online with our Telehealth appointments. Support your child's development from the comfort of your own home.
          </p>
          <Button
            variant="hero"
            size="lg"
          >
            Find Out More
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={telehealthImg}
            alt="Therapist conducting telehealth session with child"
            className="rounded-2xl shadow-xl w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TelehealthSection;
