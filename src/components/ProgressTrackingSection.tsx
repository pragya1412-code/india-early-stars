import { motion } from "framer-motion";
import { UserCircle, BarChart3, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: UserCircle,
    title: "Digital Child Profile (CDCP)",
    description: "Every child's goals, milestones, and session notes updated in real time.",
  },
  {
    icon: BarChart3,
    title: "Hi Rasmus Technology",
    description: "First centre in India to deploy Hi Rasmus at scale, the world's most trusted ABA tracking platform.",
  },
  {
    icon: LayoutDashboard,
    title: "Real-Time Parent Dashboard",
    description: "Parents see their child's progress after every session, not a quarterly report.",
  },
];

const ProgressTrackingSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="serif text-3xl lg:text-4xl font-extrabold text-foreground mb-3">
            How We Track Every Child's Progress
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparent, data-led care that keeps parents informed and clinicians aligned.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-ink/10 p-8 shadow-soft hover:shadow-elev transition-shadow group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressTrackingSection;
