import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Stage = {
  age: string;
  label: string;
  expected: string[];
  watch: string[];
  tone: string;
};

const stages: Stage[] = [
  {
    age: "0–6m",
    label: "Settling",
    tone: "from-blush/40 to-cream",
    expected: ["Eye contact when held", "Smiles back at you"],
    watch: ["Rarely turns to sound", "Limited eye contact"],
  },
  {
    age: "6–12m",
    label: "Reaching out",
    tone: "from-sky/40 to-cream",
    expected: ["Babbles back and forth", "Responds to their name"],
    watch: ["No babbling", "Doesn't respond to name"],
  },
  {
    age: "12–18m",
    label: "First words",
    tone: "from-butter/50 to-cream",
    expected: ["Single words emerging", "Points to share interest"],
    watch: ["No spoken words", "Doesn't point"],
  },
  {
    age: "18m–3y",
    label: "Pretend & play",
    tone: "from-sage/40 to-cream",
    expected: ["Two-word phrases", "Pretend play"],
    watch: ["Speech regressing", "Avoids social games"],
  },
  {
    age: "3–5y",
    label: "Storytellers",
    tone: "from-blush/45 to-cream",
    expected: ["Tells short stories", "Follows two-step instructions"],
    watch: ["Difficulty with peers", "Echoes out of context"],
  },
  {
    age: "5–10y",
    label: "Belonging",
    tone: "from-sage/40 to-cream",
    expected: ["Reads social cues", "Forms friendships"],
    watch: ["School anxiety", "Rigid routines disrupt life"],
  },
];

const JourneyVisualizer = () => {
  const [active, setActive] = useState(2);
  const stage = stages[active];

  return (
    <section id="journey" className="py-28 lg:py-36 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">The Journey · 0–10 years</p>
          <h2 className="serif text-4xl md:text-5xl text-ink leading-tight text-balance">
            Every child unfolds at their own <em className="italic font-light text-primary">pace</em>.
          </h2>
          <p className="text-ink/65 mt-5 max-w-lg leading-relaxed">
            Move along the timeline. See what's gently expected, and what is worth a quiet conversation with us.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-ink/10" />
          <div
            className="absolute top-1/2 left-0 h-px bg-primary transition-all duration-700"
            style={{ width: `${((active + 0.5) / stages.length) * 100}%` }}
          />
          <div className="relative grid grid-cols-6 gap-2">
            {stages.map((s, i) => (
              <button
                key={s.age}
                onClick={() => setActive(i)}
                className="group flex flex-col items-center py-6 focus:outline-none"
                aria-label={`Stage ${s.age}`}
              >
                <span className={`text-[11px] mb-3 transition-colors ${i === active ? "text-ink" : "text-ink/40 group-hover:text-ink/70"}`}>
                  {s.age}
                </span>
                <span className={`relative block rounded-full transition-all duration-500 ${
                  i === active ? "w-4 h-4 bg-primary ring-8 ring-primary/15" : "w-2.5 h-2.5 bg-ink/25 group-hover:bg-ink/50"
                }`} />
                <span className={`mt-3 text-[11px] tracking-wide transition-colors ${i === active ? "text-ink" : "text-ink/40 group-hover:text-ink/70"}`}>
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.age}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
            className={`mt-14 rounded-3xl p-8 md:p-12 bg-gradient-to-br ${stage.tone} border border-ink/5 shadow-soft`}
          >
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="eyebrow mb-3">{stage.age}</p>
                <h3 className="serif text-3xl md:text-4xl text-ink mb-6">{stage.label}</h3>
                <p className="text-ink/65 leading-relaxed max-w-sm">
                  These are typical signs of unfolding - a quiet ledger, never a verdict.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-primary mb-3">Often emerging</p>
                  <ul className="space-y-2.5">
                    {stage.expected.map((e) => (
                      <li key={e} className="text-sm text-ink/80 flex gap-2">
                        <span className="text-primary mt-[6px] w-1 h-1 rounded-full bg-primary shrink-0" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-3">Worth noticing</p>
                  <ul className="space-y-2.5">
                    {stage.watch.map((w) => (
                      <li key={w} className="text-sm text-ink/70 flex gap-2">
                        <span className="mt-[6px] w-1 h-1 rounded-full bg-ink/40 shrink-0" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default JourneyVisualizer;
