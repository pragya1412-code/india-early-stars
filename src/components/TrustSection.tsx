import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Mother of Arjun, 4 years",
    text: "Early Intervention Studio changed our lives. Arjun's progress in just 6 months has been incredible. The therapists are so caring and professional.",
    rating: 5,
  },
  {
    name: "Rajesh & Meera Gupta",
    role: "Parents of Ananya, 3 years",
    text: "The AI-powered progress tracking gives us real insight into our daughter's development. We can see exactly how she's improving week by week.",
    rating: 5,
  },
  {
    name: "Dr. Kavita Singh",
    role: "Pediatrician, Delhi",
    text: "I refer families to Early Intervention Studio because their evidence-based approach and use of technology sets them apart from other centers.",
    rating: 5,
  },
];

const TrustSection = () => {
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
            Trusted by Delhi Families
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from parents and professionals who trust us with their children's development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-7 shadow-sm border border-border/50 relative"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-5 right-5" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-muted-foreground text-xs">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 flex flex-wrap justify-center gap-8 text-center"
        >
          <div>
            <p className="text-3xl font-extrabold text-primary">500+</p>
            <p className="text-muted-foreground text-sm">Children Helped</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-primary">15+</p>
            <p className="text-muted-foreground text-sm">Expert Therapists</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-primary">98%</p>
            <p className="text-muted-foreground text-sm">Parent Satisfaction</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-primary">4.9★</p>
            <p className="text-muted-foreground text-sm">Google Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
