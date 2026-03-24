import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import telehealthImg from "@/assets/telehealth.jpg";
import { Link } from "react-router-dom";

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
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
            Online Therapy from Home
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-6 leading-relaxed">
            Can't visit our Delhi center? Get the same quality therapy through secure video sessions. Our telehealth services are flexible, convenient, and just as effective.
          </p>
          <Link to="/our-services">
            <Button variant="hero" size="lg">Explore Telehealth</Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={telehealthImg} alt="Mother with child during online therapy session" className="rounded-2xl shadow-xl w-full" loading="lazy" width={800} height={600} />
        </motion.div>
      </div>
    </section>
  );
};

export default TelehealthSection;
