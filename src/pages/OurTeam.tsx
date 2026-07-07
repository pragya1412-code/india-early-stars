import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, MessageCircle, Hand, HeartPulse, GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import teamImg from "@/assets/team-hero.jpg";

const disciplines = [
  {
    icon: Brain,
    title: "Behavioural Therapists",
    body: "BCBA-informed practitioners trained in ABA, ESDM and DIR/Floortime. They translate clinical goals into gentle, play-based sessions.",
    count: "6",
  },
  {
    icon: MessageCircle,
    title: "Speech-Language Pathologists",
    body: "ASHA-aligned SLPs building expressive language, receptive comprehension, articulation and AAC where words are still finding their way.",
    count: "4",
  },
  {
    icon: Hand,
    title: "Occupational Therapists",
    body: "Sensory integration, fine motor and self-regulation. Every session is graded to the child's arousal, not the clock.",
    count: "5",
  },
  {
    icon: HeartPulse,
    title: "Child Psychologists",
    body: "Developmental assessment, parent counselling and co-regulation strategy. The quiet architects of every therapy plan.",
    count: "3",
  },
  {
    icon: GraduationCap,
    title: "Special Educators",
    body: "School-readiness, literacy scaffolds and IEP shadowing. They bridge the studio and the classroom your child is walking into.",
    count: "4",
  },
  {
    icon: Sparkles,
    title: "Clinical Leadership",
    body: "Developmental pediatricians and program directors reviewing every case at intake, 30 days and 90 days.",
    count: "2",
  },
];

const OurTeam = () => (
  <Layout>
    {/* Hero */}
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="container relative z-10 pt-16 pb-14 lg:pt-24 lg:pb-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-5"
          >
            The Team · all under one roof
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05 }}
            className="serif text-4xl md:text-6xl leading-[1.05] text-ink text-balance"
          >
            One child. One plan.{" "}
            <em className="italic font-light text-primary">One team.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-ink/70 text-lg mt-6 max-w-2xl leading-relaxed"
          >
            Behavioural therapists, speech-language pathologists, occupational therapists,
            child psychologists and special educators - collaborating in the same studio, on
            the same child, in the same week. No referrals across the city. No lost context.
          </motion.p>
        </div>
      </div>
    </section>

    {/* Team photo */}
    <section className="pb-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden shadow-elev"
        >
          <img
            src={teamImg}
            alt="Multidisciplinary clinical team at Early Intervention Studio"
            className="w-full h-auto object-cover"
            width={1600}
            height={1000}
          />
        </motion.div>
      </div>
    </section>

    {/* Disciplines */}
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Six disciplines · one hub</p>
          <h2 className="serif text-3xl md:text-5xl text-ink leading-tight text-balance">
            The rarest thing in Indian autism care is a{" "}
            <em className="italic font-light text-primary">team that talks to each other</em>.
          </h2>
          <p className="text-ink/65 mt-5 leading-relaxed">
            Every child at Early Intervention Studio is held by a single, integrated
            clinical team. We share notes weekly, meet monthly and revise the plan
            together - so no insight ever falls between two therapists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {disciplines.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl bg-cream/60 border border-ink/10 p-7 hover:border-ink/30 hover:shadow-elev transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <d.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="serif text-3xl text-ink/25 group-hover:text-primary transition-colors">
                  {d.count}
                </span>
              </div>
              <h3 className="serif text-xl text-ink mb-3">{d.title}</h3>
              <p className="text-ink/65 text-sm leading-relaxed">{d.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How we work together */}
    <section className="py-24 bg-cream">
      <div className="container max-w-4xl">
        <p className="eyebrow mb-4 text-center">How the team moves as one</p>
        <h2 className="serif text-3xl md:text-4xl text-ink text-center leading-tight text-balance mb-14">
          A shared clinical language, week after week.
        </h2>
        <div className="space-y-4">
          {[
            {
              t: "Monday · Joint case review",
              b: "Every therapist working with your child shares a 5-minute update. The clinical lead reconciles goals.",
            },
            {
              t: "Wednesday · Cross-discipline pairing",
              b: "One OT sits inside a speech session. One behavioural therapist sits inside an OT session. Insights compound.",
            },
            {
              t: "Friday · Parent digest",
              b: "A single, plain-English note from the whole team lands on WhatsApp - what changed, what to try at home.",
            },
            {
              t: "Every 30 days · Plan revision",
              b: "The team, the child, the parents. The plan is revised - never on autopilot.",
            },
          ].map((r, i) => (
            <motion.div
              key={r.t}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-6 items-start p-6 rounded-2xl bg-background border border-ink/5"
            >
              <div className="serif text-2xl text-primary/70 min-w-[24px]">0{i + 1}</div>
              <div>
                <h3 className="serif text-lg text-ink mb-1">{r.t}</h3>
                <p className="text-ink/65 text-sm leading-relaxed">{r.b}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24">
      <div className="container text-center max-w-2xl">
        <h2 className="serif text-3xl md:text-4xl text-ink leading-tight text-balance mb-5">
          Meet the team your child will actually work with.
        </h2>
        <p className="text-ink/65 mb-8">
          A 45-minute clinical assessment. You leave with a plan, not a diagnosis-anxiety.
        </p>
        <Link to="/book-assessment">
          <Button variant="hero" size="lg" className="gap-2 px-7">
            Book a clinical assessment <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default OurTeam;
