import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const openings = [
  { title: "Speech Therapist", location: "Mumbai", type: "Full-time" },
  { title: "Occupational Therapist", location: "Delhi", type: "Full-time" },
  { title: "Child Psychologist", location: "Bangalore", type: "Full-time" },
  { title: "Physiotherapist", location: "Chennai", type: "Full-time" },
  { title: "Dietitian / Nutritionist", location: "Kolkata", type: "Part-time" },
  { title: "Telehealth Therapist", location: "Remote (India)", type: "Contract" },
];

const Careers = () => (
  <Layout>
    <PageHero title="Careers" subtitle="Join our team for a brighter future in allied health where you can make a real difference." />
    <section className="py-16">
      <div className="container max-w-3xl mx-auto">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-muted-foreground text-lg mb-10 leading-relaxed">
          At Early Start India, we're looking for passionate therapists and professionals who want to change lives. We offer competitive salaries, professional development, and a supportive team culture.
        </motion.p>
        <div className="space-y-4">
          {openings.map((job, i) => (
            <motion.div key={job.title + job.location} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl p-5 border border-border/50 shadow-sm flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-base font-semibold text-foreground">{job.title}</h3>
                <div className="flex items-center gap-4 text-muted-foreground text-sm mt-1">
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
                  <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {job.type}</span>
                </div>
              </div>
              <Button variant="nav" size="sm">Apply Now</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Careers;
