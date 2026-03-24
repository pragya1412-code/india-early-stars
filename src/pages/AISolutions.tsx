import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Brain, BarChart3, Lightbulb, Gamepad2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aiImg from "@/assets/ai-solutions.jpg";

const features = [
  {
    icon: Brain,
    title: "AI-Based Screening Support",
    description: "Our AI models analyze behavioral patterns from screening questionnaires and observational data, helping therapists identify early developmental indicators more accurately and quickly.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking & Analytics",
    description: "AI continuously monitors your child's therapy milestones and generates visual progress reports. Parents and therapists can see improvement trends over weeks and months.",
  },
  {
    icon: Lightbulb,
    title: "Smart Therapy Insights",
    description: "Based on your child's progress data, AI suggests focus areas and therapy adjustments — helping therapists optimize each session for maximum developmental impact.",
  },
  {
    icon: Gamepad2,
    title: "Interactive Learning Tools",
    description: "AI-powered games and activities keep children engaged during therapy. These tools adapt difficulty levels in real-time based on the child's performance and responses.",
  },
];

const AISolutions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aiImg} alt="AI-powered therapy technology" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/80 to-secondary/50" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl lg:text-5xl font-extrabold text-secondary-foreground mb-4 leading-tight"
            >
              AI-Powered Therapy & Child Development Insights
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-secondary-foreground/85 mb-8"
            >
              We use artificial intelligence to enhance — never replace — our expert therapists. AI helps us deliver more personalized, data-driven care for your child.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/book-assessment">
                <Button variant="hero" size="lg">Book Assessment</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-sm border border-border/50"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI supports, not replaces */}
      <section className="py-16 bg-section-cool">
        <div className="container max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-10 shadow-sm border border-border/50"
          >
            <Shield className="h-12 w-12 text-primary mx-auto mb-5" />
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              AI Supports Therapists, Not Replaces Them
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our AI tools are designed to empower our expert therapists with better data, smarter insights, and more efficient workflows. Every therapy decision is made by a qualified professional — AI simply helps them make better-informed choices.
            </p>
            <Link to="/book-assessment">
              <Button variant="hero" size="lg">Experience the Difference</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AISolutions;
