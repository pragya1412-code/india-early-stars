import { motion } from "framer-motion";
import { Brain, MessageCircle, Hand, Apple, Activity, Puzzle, GraduationCap, ClipboardCheck, HeartHandshake } from "lucide-react";

const services = [
  {
    icon: Hand,
    title: "Occupational Therapy",
    description: "Our occupational therapists help children take part in daily activities, like self-care and school work, by supporting regulation and teaching skills.",
  },
  {
    icon: Brain,
    title: "Psychology & Counselling",
    description: "Our child psychologists provide guidance to support learning, emotional regulation, resilience and overall wellbeing.",
  },
  {
    icon: MessageCircle,
    title: "Speech & Language Therapy",
    description: "Our speech therapists support children to develop speech and language to build confident communication and social participation.",
  },
  {
    icon: Apple,
    title: "Nutrition & Dietetics",
    description: "From feeding challenges to fussy eaters, we help your child eat better, manage health and get the nutrition they need.",
  },
  {
    icon: Activity,
    title: "Physiotherapy",
    description: "Our physiotherapists help children enhance movement, mobility, strength and overall fitness through tailored therapy plans.",
  },
  {
    icon: Puzzle,
    title: "Autism Intervention (ESDM)",
    description: "Support your child's progress with the Early Start Denver Model, a play-based intervention for young children with autism.",
  },
  {
    icon: GraduationCap,
    title: "School Readiness",
    description: "Support your child to be ready for school, developing the confidence and independence to thrive in a classroom environment.",
  },
  {
    icon: ClipboardCheck,
    title: "Developmental Assessments",
    description: "Identify your child's needs and develop an action plan alongside our therapists with detailed developmental assessments.",
  },
  {
    icon: HeartHandshake,
    title: "Social Work & Family Support",
    description: "Social workers help improve emotional and social wellbeing, manage challenges and provide support for the whole family.",
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-20 section-warm">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            How we can help your child
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From early intervention support to therapy services, we offer tailored plans that support your child's development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border/50 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              <a href="#" className="text-primary text-sm font-medium mt-3 inline-block hover:underline">
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
