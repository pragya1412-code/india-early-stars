import { motion } from "framer-motion";
import { Quote, Medal, Trophy, Mic, BookOpen } from "lucide-react";

const credentials = [
  {
    icon: Medal,
    label: "3x Special Olympics World Games Gold Medalist",
  },
  {
    icon: Trophy,
    label: "Bhim Award recipient",
  },
  {
    icon: Mic,
    label: "TEDx speaker 2026",
  },
  {
    icon: BookOpen,
    label: "8x Limca Book of Records holder",
  },
];

const BrandAmbassadorSection = () => {
  return (
    <section className="py-24 bg-gradient-calm overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <Quote className="h-12 w-12 text-primary/20 mb-6" />
            <blockquote className="serif text-3xl md:text-4xl lg:text-[42px] leading-tight text-ink text-balance">
              "Every child with autism has a story yet to be written. Early intervention writes it better."
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-sage-deep flex items-center justify-center text-primary-foreground font-bold text-lg shadow-soft">
                RS
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">Ranveer Singh Saini</p>
                <p className="text-sm text-muted-foreground">Brand Ambassador & Parent Consultant</p>
              </div>
            </div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white/80 backdrop-blur rounded-3xl border border-ink/10 p-8 md:p-10 shadow-elev"
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/90 to-sage-deep/90 flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-soft">
                RS
              </div>
              <div>
                <h3 className="serif text-2xl font-bold text-foreground">Ranveer Singh Saini</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Brand Ambassador & Parent Consultant
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              India's most decorated autistic athlete. A powerful voice for neurodivergent children
              and their families, helping parents see what is possible when support begins early.
            </p>

            <div className="space-y-4">
              {credentials.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm text-foreground font-medium pt-2">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandAmbassadorSection;
