import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CloudSun, Sparkles, MessageCircle, Smile, Hand, BookOpen } from "lucide-react";

const steps = [
  {
    icon: CloudSun,
    minute: "00:00",
    title: "Arrival",
    body: "A soft-lit room, low cushions, a therapist who knows your child's name and their favourite thing.",
  },
  {
    icon: Hand,
    minute: "00:05",
    title: "Settling",
    body: "A sensory anchor - a smooth pebble, a warm towel, a song - grounds the next forty minutes.",
  },
  {
    icon: Smile,
    minute: "00:12",
    title: "Play that teaches",
    body: "Each prompt is shaped by ABA, DIR/Floortime and what your child shows us today.",
  },
  {
    icon: MessageCircle,
    minute: "00:28",
    title: "Tiny conversations",
    body: "A shared glance, a two-word request. The currency of language is gently widened.",
  },
  {
    icon: BookOpen,
    minute: "00:42",
    title: "Calm close",
    body: "Predictable goodbye, a small story, and three notes for parents on what we saw.",
  },
  {
    icon: Sparkles,
    minute: "00:50",
    title: "Parent debrief",
    body: "Five quiet minutes: what happened, what to practise at home, what's next.",
  },
];

const Simulator = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.05, 0.9], ["0%", "100%"]);

  return (
    <section id="experience" ref={ref} className="py-28 lg:py-36 bg-background relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">Inside a session · 50 minutes</p>
          <h2 className="serif text-4xl md:text-5xl text-ink leading-tight text-balance">
            What an hour with us <em className="italic font-light text-primary">feels</em> like.
          </h2>
          <p className="text-ink/65 mt-4 max-w-md leading-relaxed">
            Scroll. The session unfolds slowly, predictably, with care.
          </p>
        </div>

        <div className="relative grid grid-cols-[24px_1fr] md:grid-cols-[120px_24px_1fr] gap-x-6 md:gap-x-10">
          {/* timeline line */}
          <div className="hidden md:block" />
          <div className="relative">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-ink/10" />
            <motion.div
              style={{ height: lineH }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-primary"
            />
          </div>
          <div />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="contents"
              >
                <div className="hidden md:flex items-start justify-end pt-8 text-xs tracking-wider text-ink/45 font-mono">
                  {s.minute}
                </div>
                <div className="relative flex justify-center pt-9">
                  <div className="w-3.5 h-3.5 rounded-full bg-cream border-2 border-primary z-10" />
                </div>
                <div className="pb-16 md:pb-20">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="md:hidden text-[11px] tracking-wider text-ink/50 font-mono">{s.minute}</span>
                  </div>
                  <h3 className="serif text-2xl md:text-3xl text-ink mb-3">{s.title}</h3>
                  <p className="text-ink/65 leading-relaxed max-w-md">{s.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Simulator;
