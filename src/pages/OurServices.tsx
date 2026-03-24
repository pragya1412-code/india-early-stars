import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, MessageCircle, Hand, Puzzle, Activity, ClipboardCheck, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import therapyImg from "@/assets/therapy-session.jpg";

const services = [
  { icon: Brain, title: "ABA Therapy", description: "Applied Behavior Analysis uses positive reinforcement to develop social, communication and learning skills. Our BCBA-certified therapists create individualized programs." },
  { icon: MessageCircle, title: "Speech Therapy", description: "Our speech-language pathologists help children develop communication, articulation, language comprehension and social communication skills." },
  { icon: Hand, title: "Occupational Therapy", description: "Our OTs help children develop fine motor skills, sensory processing, self-care routines and independence for daily living activities." },
  { icon: Puzzle, title: "Social Skills Training", description: "Group and individual sessions that teach children how to interact, play, share, and build meaningful friendships with peers." },
  { icon: Activity, title: "Sensory Integration", description: "Specialized therapy for children with sensory processing challenges, helping them regulate responses to sensory input in daily life." },
  { icon: ClipboardCheck, title: "Developmental Assessments", description: "Comprehensive evaluations by our clinical team to identify your child's strengths and challenges, forming the basis for a tailored therapy plan." },
  { icon: GraduationCap, title: "School Readiness Program", description: "Preparing children for school with programs that build academic foundations, social skills, and classroom readiness." },
];

const OurServices = () => (
  <Layout>
    <section className="py-16 lg:py-20 bg-secondary text-secondary-foreground">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl lg:text-5xl font-extrabold mb-4"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-secondary-foreground/80 max-w-2xl"
        >
          Evidence-based therapies tailored to your child's unique developmental needs and goals.
        </motion.p>
      </div>
    </section>

    <section className="py-16">
      <div className="container grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img src={therapyImg} alt="Therapist working with child" className="rounded-2xl shadow-lg w-full" loading="lazy" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-extrabold text-foreground mb-4">Personalized Care for Every Child</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At Early Intervention Studio, we don't believe in one-size-fits-all therapy. Every child receives a customized therapy plan designed by our multidisciplinary team after a comprehensive assessment.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our AI-powered progress tracking ensures therapy is continuously optimized based on your child's real-time development data.
          </p>
          <Link to="/book-assessment">
            <Button variant="hero" size="lg">Book Assessment</Button>
          </Link>
        </motion.div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow border border-border/50 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default OurServices;
