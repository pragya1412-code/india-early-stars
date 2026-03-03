import { motion } from "framer-motion";
import { Heart, MapPin, Shield, Sparkles } from "lucide-react";

const promises = [
  {
    icon: Heart,
    title: "Holistic care and treatment plans",
    description: "Our multi-disciplinary team works together with you to understand your child's needs with evidence-based strategies.",
  },
  {
    icon: MapPin,
    title: "Pan-India reach",
    description: "With centres across major cities and an experienced team of therapists, find help when you need it, where you need it.",
  },
  {
    icon: Shield,
    title: "Government scheme support",
    description: "We help you navigate government disability support schemes and provide quality, safe services aligned with national guidelines.",
  },
  {
    icon: Sparkles,
    title: "Early intervention at all stages",
    description: "Early intervention is not just for young children. We offer therapies that cater to all ages, needs and abilities.",
  },
];

const PromiseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            The Early Start India Promise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <promise.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">{promise.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{promise.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
