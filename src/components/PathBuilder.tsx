import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const concerns = [
  { id: "speech", label: "Delayed speech" },
  { id: "social", label: "Social interaction" },
  { id: "sensory", label: "Sensory sensitivity" },
  { id: "behavior", label: "Repetitive behaviour" },
  { id: "play", label: "Difficulty with play" },
  { id: "school", label: "School transitions" },
  { id: "feeding", label: "Feeding & routines" },
  { id: "motor", label: "Motor coordination" },
];

const map: Record<string, { name: string; why: string }> = {
  speech: { name: "Speech-Language Therapy", why: "Builds expressive language, comprehension and conversational turn-taking." },
  social: { name: "Social Cognition Group", why: "Small peer cohorts that nurture friendship, sharing, and reading social cues." },
  sensory: { name: "Sensory Integration (OT)", why: "Calms an overwhelmed nervous system through graded, playful sensory experiences." },
  behavior: { name: "Naturalistic ABA", why: "Replaces rigid loops with flexible, meaningful behaviours - within real life." },
  play: { name: "DIR/Floortime", why: "Joins your child where they are and gently expands shared, joyful play." },
  school: { name: "School Readiness", why: "A bridge program preparing children for inclusive classroom life." },
  feeding: { name: "Feeding & Routines", why: "Reduces mealtime stress and widens food repertoires, gently." },
  motor: { name: "Pediatric OT", why: "Strengthens coordination, balance, handwriting and self-care skills." },
};

const PathBuilder = () => {
  const [picked, setPicked] = useState<string[]>([]);
  const [step, setStep] = useState<"pick" | "result">("pick");

  const toggle = (id: string) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const recs = picked.map((p) => map[p]).filter(Boolean);

  return (
    <section className="py-28 lg:py-36 bg-cream relative overflow-hidden">
      <div className="absolute -left-32 top-1/3 w-[300px] h-[300px] rounded-full bg-blush blob opacity-40 animate-float-slow" />
      <div className="absolute -right-24 bottom-10 w-[260px] h-[260px] rounded-full bg-sage blob opacity-40 animate-float-slower" />

      <div className="container max-w-5xl relative z-10">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-4">A path, made for you</p>
          <h2 className="serif text-4xl md:text-5xl text-ink leading-tight text-balance">
            Tell us what you've <em className="italic font-light text-primary">noticed</em>.
          </h2>
          <p className="text-ink/65 mt-4 max-w-md leading-relaxed">
            Choose anything that fits. We'll sketch a starting roadmap - not a prescription.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {step === "pick" ? (
            <motion.div
              key="pick"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {concerns.map((c) => {
                  const on = picked.includes(c.id);
                  return (
                    <button
                      key={c.id}
                      onClick={() => toggle(c.id)}
                      className={`group relative aspect-[4/3] rounded-2xl border transition-all duration-500 p-5 text-left ${
                        on
                          ? "bg-ink text-cream border-ink shadow-elev"
                          : "bg-background border-ink/10 text-ink/80 hover:border-ink/40 hover:-translate-y-0.5"
                      }`}
                    >
                      <span className="absolute top-4 right-4">
                        <span className={`block w-5 h-5 rounded-full border transition ${
                          on ? "bg-primary border-primary" : "border-ink/25"
                        }`}>
                          {on && <Check className="h-3 w-3 text-cream m-auto mt-[3px]" />}
                        </span>
                      </span>
                      <span className="absolute bottom-5 left-5 right-5 serif text-lg leading-tight">{c.label}</span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button
                  variant="hero"
                  size="lg"
                  disabled={picked.length === 0}
                  onClick={() => setStep("result")}
                  className="gap-2 px-7"
                >
                  See your path <ArrowRight className="h-4 w-4" />
                </Button>
                <span className="text-sm text-ink/50">{picked.length} chosen</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="rounded-3xl bg-background border border-ink/5 p-8 md:p-12 shadow-soft">
                <p className="eyebrow mb-3">A possible path · drafted</p>
                <h3 className="serif text-3xl md:text-4xl text-ink mb-8">Your child's roadmap</h3>
                <ol className="relative space-y-8">
                  {recs.map((r, i) => (
                    <li key={r.name} className="grid grid-cols-[40px_1fr] gap-5">
                      <div className="flex flex-col items-center">
                        <span className="serif text-xl text-primary">{String(i + 1).padStart(2, "0")}</span>
                        {i < recs.length - 1 && <span className="flex-1 w-px bg-ink/10 mt-2" />}
                      </div>
                      <div className="pb-2">
                        <h4 className="serif text-xl text-ink mb-1.5">{r.name}</h4>
                        <p className="text-ink/65 text-sm leading-relaxed max-w-lg">{r.why}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-10 flex flex-wrap items-center gap-4 pt-8 border-t border-ink/5">
                  <Link to="/book-assessment">
                    <Button variant="hero" size="lg" className="gap-2">
                      Discuss this with us <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <button
                    onClick={() => { setStep("pick"); }}
                    className="text-sm text-ink/60 hover:text-ink reveal-line"
                  >
                    Adjust selections
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PathBuilder;
