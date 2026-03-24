import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, MessageCircle, Hand, Puzzle } from "lucide-react";

const therapies = [
  {
    icon: Brain,
    title: "ABA Therapy",
    description: "Applied Behavior Analysis is a proven, evidence-based therapy that helps children develop social, communication, and learning skills through structured reinforcement.",
    color: "bg-primary/10",
  },
  {
    icon: MessageCircle,
    title: "Speech Therapy",
    description: "Our speech therapists help children develop communication, articulation, language comprehension and social communication skills.",
    color: "bg-soft-blue/10",
  },
  {
    icon: Hand,
    title: "Occupational Therapy",
    description: "Our OTs help children develop fine motor skills, sensory processing, self-care routines and independence for daily living.",
    color: "bg-accent/15",
  },
  {
    icon: Puzzle,
    title: "Social Skills Training",
    description: "Group and individual sessions that teach children how to interact, play, share, and build friendships with peers.",
    color: "bg-primary/10",
  },
];

const TherapiesSection = () => {
  return (
    <section className="py-20 section-cool">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-3">
            Our Therapy Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Evidence-based therapies tailored to your child's unique needs and developmental goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {therapies.map((therapy, index) => (
            <motion.div
              key={therapy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to="/our-services"
                className="block bg-card rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all border border-border/50 group h-full"
              >
                <div className={`w-14 h-14 rounded-xl ${therapy.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <therapy.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{therapy.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{therapy.description}</p>
                <span className="text-primary text-sm font-bold mt-4 inline-block group-hover:translate-x-1 transition-transform">
                  Learn more →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapiesSection;
