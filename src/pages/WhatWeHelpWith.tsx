import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Brain, Eye, Ear, Footprints, Utensils, MessageSquare, Puzzle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const conditions = [
  { icon: Brain, title: "Autism Spectrum Disorder", description: "Tailored intervention for social communication, behaviour, and sensory needs." },
  { icon: Puzzle, title: "Developmental Delays", description: "Support for children not meeting developmental milestones at expected ages." },
  { icon: MessageSquare, title: "Speech & Language Delays", description: "Help with talking, understanding language, stuttering, and social communication." },
  { icon: Footprints, title: "Motor & Movement Difficulties", description: "Physiotherapy and OT for gross and fine motor challenges." },
  { icon: Eye, title: "Sensory Processing Challenges", description: "Strategies for children who are over- or under-responsive to sensory input." },
  { icon: Utensils, title: "Feeding & Nutrition Issues", description: "Help with fussy eating, food aversions, and nutritional planning." },
  { icon: Ear, title: "Hearing & Vision Impairments", description: "Early intervention strategies for children with sensory impairments." },
  { icon: BookOpen, title: "Learning Difficulties", description: "Support for reading, writing, attention, and academic challenges." },
];

const WhatWeHelpWith = () => (
  <Layout>
    <PageHero title="What We Help With" subtitle="From autism and developmental delays to speech, motor, and sensory challenges — our team is here to help." />
    <section className="py-16 section-warm">
      <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {conditions.map((c, i) => (
          <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl p-5 border border-border/50 shadow-sm">
            <c.icon className="h-6 w-6 text-primary mb-3" />
            <h3 className="text-base font-semibold text-foreground mb-1">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="container text-center mt-12">
        <Link to="/enquire"><Button variant="hero" size="lg">Get Started</Button></Link>
      </div>
    </section>
  </Layout>
);

export default WhatWeHelpWith;
