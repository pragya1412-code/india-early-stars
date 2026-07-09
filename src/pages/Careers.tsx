import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import careersImg from "@/assets/careers.jpg";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919711331299";

const openings = [
  { title: "ABA Therapist", type: "Full-time", location: "India" },
  { title: "Speech-Language Pathologist", type: "Full-time", location: "India" },
  { title: "Occupational Therapist", type: "Full-time / Part-time", location: "India" },
  { title: "Child Psychologist", type: "Full-time", location: "India" },
];

const Careers = () => (
  <Layout>
    <section className="py-16 lg:py-20 bg-secondary text-secondary-foreground">
      <div className="container">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl lg:text-5xl font-extrabold mb-4">
          Careers
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-secondary-foreground/80 max-w-2xl">
          Join our team of passionate therapists making a real difference in children's lives.
        </motion.p>
      </div>
    </section>

    <section className="py-16">
      <div className="container grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={careersImg} alt="Our therapy team" className="rounded-2xl shadow-lg w-full" loading="lazy" width={800} height={600} />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-extrabold text-foreground mb-4">Why Work With Us?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> Work with cutting-edge AI therapy tools</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> Competitive salary and growth opportunities</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> Supportive, collaborative team environment</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> Continuous professional development training</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> Make a meaningful impact on children's lives</li>
          </ul>
        </motion.div>
      </div>
    </section>

    <section className="py-16 section-cool">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-2xl font-extrabold text-foreground mb-8 text-center">Current Openings</h2>
        <div className="space-y-4">
          {openings.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border/50 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="font-bold text-foreground">{job.title}</h3>
                <p className="text-muted-foreground text-sm">{job.type} · {job.location}</p>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in the ${job.title} position.`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="heroOutline" size="sm" className="gap-1.5">
                  <MessageCircle className="h-4 w-4" /> Apply via WhatsApp
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Careers;
