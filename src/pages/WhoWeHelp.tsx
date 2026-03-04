import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Baby, GraduationCap, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const groups = [
  { icon: Baby, title: "Infants & Toddlers (0–3 years)", description: "Early detection and intervention during the most critical years of brain development." },
  { icon: GraduationCap, title: "Pre-schoolers (3–6 years)", description: "Building foundational skills for school readiness, social participation, and independence." },
  { icon: Users, title: "School-age Children (6–12 years)", description: "Supporting children with developmental challenges to thrive in school and daily life." },
  { icon: Heart, title: "Families & Caregivers", description: "Empowering parents and families with strategies, resources, and emotional support." },
];

const WhoWeHelp = () => (
  <Layout>
    <PageHero title="Who We Help" subtitle="We offer early intervention and therapy services for children of all ages, needs, and abilities — and the families who support them." />
    <section className="py-16">
      <div className="container grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {groups.map((g, i) => (
          <motion.div key={g.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <g.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{g.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{g.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="container text-center mt-12">
        <Link to="/enquire"><Button variant="hero" size="lg">Enquire Now</Button></Link>
      </div>
    </section>
  </Layout>
);

export default WhoWeHelp;
