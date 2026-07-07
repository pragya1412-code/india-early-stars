import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Heart, Target, Award, Users } from "lucide-react";
import aboutImg from "@/assets/about-us.jpg";
import careersImg from "@/assets/careers.jpg";

const AboutUs = () => (
  <Layout>
    {/* Hero */}
    <section className="py-16 lg:py-20 bg-secondary text-secondary-foreground">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl lg:text-5xl font-extrabold mb-4"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-secondary-foreground/80 max-w-2xl"
        >
          We're a team of passionate therapists building the future of autism care in India.
        </motion.p>
      </div>
    </section>

    {/* Mission */}
    <section className="py-16">
      <div className="container grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img src={aboutImg} alt="Family at Early Intervention Studio" className="rounded-2xl shadow-lg w-full" loading="lazy" width={800} height={600} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-extrabold text-foreground mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Early Intervention Studio was founded with a single belief: every child deserves the best possible start in life. We combine world-class clinical expertise with AI-powered technology to deliver early intervention services that are personalized, effective, and accessible.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We serve families across India with in-person and telehealth therapy. Our team of certified therapists is trained in internationally recognized methods including ABA, ESDM, and evidence-based speech and occupational therapy.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="py-16 section-cool">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-2xl font-extrabold text-foreground mb-10 text-center">Why Early Intervention Matters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Heart, title: "Compassion First", desc: "Every decision we make starts with empathy for the child and their family." },
            { icon: Target, title: "Evidence-Based", desc: "All our therapies are grounded in peer-reviewed research and clinical best practices." },
            { icon: Award, title: "Expert Therapists", desc: "Our team holds advanced certifications from leading institutions in India and abroad." },
            { icon: Users, title: "Family-Centered", desc: "We partner with parents to extend therapy benefits into everyday life at home." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-16">
      <div className="container grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-extrabold text-foreground mb-4">Our Team</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our multidisciplinary team includes ABA therapists, speech-language pathologists, occupational therapists, child psychologists, and special educators - all dedicated to your child's growth.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With over 50 combined years of experience in pediatric therapy, our therapists bring deep expertise and genuine care to every session.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img src={careersImg} alt="Our therapy team" className="rounded-2xl shadow-lg w-full" loading="lazy" width={800} height={600} />
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default AboutUs;
