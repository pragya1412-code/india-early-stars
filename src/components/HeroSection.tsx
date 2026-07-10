import { motion, AnimatePresence, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

type Stat = {
  number: string;
  prompt: string;
  reveal: string;
  source: string;
};

const stats: Stat[] = [
  {
    number: "1 in 68",
    prompt: "How common is autism in India?",
    reveal: "children in India is on the autism spectrum.",
    source: "INCLEN Trust, national study",
  },
  {
    number: "18 million",
    prompt: "How many lives does this touch?",
    reveal: "Indians live with autism today - most undiagnosed, most unsupported.",
    source: "WHO & Ministry of Health estimates",
  },
  {
    number: "4.7 years",
    prompt: "When is autism usually caught?",
    reveal: "is the average age of diagnosis in India. The window for highest-impact intervention closes at 3.",
    source: "Indian Journal of Pediatrics",
  },
  {
    number: "90%",
    prompt: "Does early intervention actually work?",
    reveal: "of children who begin therapy before age 3 show significant gains in language, learning and independence.",
    source: "National Institute of Child Health, USA",
  },
  {
    number: "< 20%",
    prompt: "How many get help in time?",
    reveal: "of Indian children with autism are diagnosed before age 3. Four out of five lose the most critical years.",
    source: "AIIMS pediatric neurology data",
  },
  {
    number: "2 years",
    prompt: "What does a delay actually cost?",
    reveal: "of delayed intervention can reduce expected developmental gains by up to half. Time is the therapy.",
    source: "Lancet Child & Adolescent Health",
  },
];

// Extract the leading numeric portion so we can animate the count-up
const parseNumeric = (s: string): { value: number; prefix: string; suffix: string } => {
  const m = s.match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!m) return { value: 0, prefix: "", suffix: s };
  return { value: parseFloat(m[2]), prefix: m[1], suffix: m[3] };
};

const CountUp = ({ target, duration = 1.4 }: { target: string; duration?: number }) => {
  const { value, prefix, suffix } = parseNumeric(target);
  const mv = useMotionValue(0);
  const isDecimal = target.includes(".");
  const rounded = useTransform(mv, (v) =>
    isDecimal ? v.toFixed(1) : Math.round(v).toLocaleString("en-IN")
  );
  useEffect(() => {
    const controls = animate(mv, value, { duration, ease: [0.16, 1, 0.3, 1] });
    return controls.stop;
  }, [mv, value, duration]);
  return (
    <span className="serif text-5xl md:text-6xl text-primary leading-none tracking-tight tabular-nums inline-flex items-baseline">
      <span>{prefix}</span>
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

const RevealCard = ({ stat, index }: { stat: Stat; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.button
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.05 * index }}
      onClick={() => setOpen((v) => !v)}
      className={`group text-left backdrop-blur border rounded-2xl p-6 transition-all relative overflow-hidden min-h-[200px] ${
        open
          ? "bg-ink text-cream border-ink shadow-elev"
          : "bg-cream/60 border-ink/10 hover:border-ink/30 hover:shadow-elev"
      }`}
      aria-expanded={open}
    >
      <div className={`absolute top-4 right-4 transition ${open ? "text-cream/60" : "text-ink/30 group-hover:text-ink/60"}`}>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.35 }}>
          <Plus className="h-4 w-4" />
        </motion.div>
      </div>
      <p className={`eyebrow mb-4 pr-8 transition-colors ${open ? "text-cream/60" : "text-ink/50"}`}>
        {stat.prompt}
      </p>
      <AnimatePresence mode="wait" initial={false}>
        {!open ? (
          <motion.div
            key="hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="serif text-2xl md:text-3xl text-ink/25 italic">Reveal the number</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="h-px w-8 bg-ink/25 group-hover:w-14 transition-all duration-500" />
              <p className="text-[11px] text-ink/40 tracking-[0.2em] uppercase">Tap to see</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="shown"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <CountUp target={stat.number} />
            <p className="text-cream/80 text-sm mt-4 leading-relaxed">{stat.reveal}</p>
            <p className="text-[10px] text-cream/40 mt-4 tracking-[0.2em] uppercase">
              Source · {stat.source}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-blush rounded-full blob opacity-40 animate-float-slow" />
      <div className="absolute -bottom-40 -right-32 w-[480px] h-[480px] bg-sage rounded-full blob opacity-30 animate-float-slower" />

      <div className="container relative z-10 pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="eyebrow mb-6 inline-flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-breathe" />
            Clinical early intervention
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="serif text-[40px] md:text-[58px] lg:text-[68px] leading-[1.04] text-ink text-balance"
          >
            Not every child speaks in words. <br />
            <em className="italic font-light text-primary">But every child deserves to be heard - early.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="text-ink/70 text-lg md:text-xl mt-7 max-w-2xl leading-relaxed"
          >
            A clinical early-intervention practice for children 1–10 with autism and developmental delays. Evidence-led, delivered with urgency.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link to="/book-assessment">
              <Button variant="hero" size="lg" className="gap-2 px-7">
                Book a clinical assessment <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/screening" className="text-sm text-ink/70 hover:text-ink reveal-line">
              Free 2-minute developmental check →
            </Link>
          </motion.div>
        </div>

        {/* Numbers - reveal the number */}
        <div className="mt-20 lg:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-end justify-between flex-wrap gap-4 mb-10 border-t border-ink/10 pt-10"
          >
            <div>
              <p className="eyebrow text-ink/50 mb-3">The silent emergency · in numbers</p>
              <h2 className="serif text-3xl md:text-4xl text-ink max-w-xl leading-tight text-balance">
                Late diagnosis is the quietest crisis in Indian child health.
              </h2>
            </div>
            <p className="text-sm text-ink/55 max-w-xs">
              Six numbers every parent should know. Tap any card.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <RevealCard key={s.number} stat={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
