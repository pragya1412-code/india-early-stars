import { motion } from "framer-motion";
import { Brain, BarChart3, Users, Heart } from "lucide-react";

const differentiators = [
  {
    icon: Brain,
    title: "Early Diagnosis Support",
    description: "We identify developmental delays early using validated screening tools and clinical expertise.",
  },
  {
    icon: BarChart3,
    title: "AI-Assisted Progress Tracking",
    description: "Our AI tools track your child's improvement over time and provide data-driven therapy adjustments.",
  },
  {
    icon: Users,
    title: "Personalized Therapy Plans",
    description: "Every child gets a custom therapy roadmap tailored to their unique strengths and challenges.",
  },
  {
    icon: Heart,
    title: "Parent-Focused Approach",
    description: "We empower parents with tools, training, and ongoing support to extend therapy benefits at home.",
  },
];

const DifferentiatorsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-3">
            Why Choose Early Intervention Studio?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine clinical excellence with cutting-edge technology to deliver the best outcomes for your child.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
