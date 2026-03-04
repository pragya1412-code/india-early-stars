import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const articles = [
  { date: "28 Feb 2026", title: "New Early Start Centre Opens in Hyderabad", excerpt: "Expanding our reach to serve more families in South India with our newest therapy centre." },
  { date: "15 Feb 2026", title: "World Autism Awareness Month: Resources for Families", excerpt: "A curated list of resources, workshops, and community events for families navigating autism." },
  { date: "02 Feb 2026", title: "Tips for Supporting Your Child's Speech Development at Home", excerpt: "Our speech therapists share practical strategies you can use every day." },
  { date: "20 Jan 2026", title: "Early Start India Partners with National Disability Commission", excerpt: "A landmark partnership to improve early intervention accessibility nationwide." },
  { date: "10 Jan 2026", title: "Celebrating Our Therapists: Meet Dr. Priya Sharma", excerpt: "Learn about Dr. Sharma's journey and her approach to paediatric physiotherapy." },
  { date: "02 Jan 2026", title: "2026 Workshop Calendar Now Available", excerpt: "Register for our upcoming parent workshops, community events, and professional development sessions." },
];

const NewsEvents = () => (
  <Layout>
    <PageHero title="News & Events" subtitle="Stay up to date with the latest news, events, and resources from Early Start India." />
    <section className="py-16">
      <div className="container max-w-3xl mx-auto space-y-6">
        {articles.map((a, i) => (
          <motion.article key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
              <Calendar className="h-4 w-4" /> {a.date}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{a.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{a.excerpt}</p>
            <span className="text-primary text-sm font-medium mt-3 inline-block cursor-pointer hover:underline">Read more →</span>
          </motion.article>
        ))}
      </div>
    </section>
  </Layout>
);

export default NewsEvents;
