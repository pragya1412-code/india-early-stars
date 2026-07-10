import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

type Q = { q: string; options: { label: string; weight: number }[] };

const questions: Q[] = [
  {
    q: "Does your child respond when you call their name, most of the time?",
    options: [
      { label: "Almost always", weight: 0 },
      { label: "Sometimes", weight: 1 },
      { label: "Rarely", weight: 2 },
    ],
  },
  {
    q: "Do they share a smile, point, or look back to you when something interests them?",
    options: [
      { label: "Often", weight: 0 },
      { label: "Now and then", weight: 1 },
      { label: "Almost never", weight: 2 },
    ],
  },
  {
    q: "How do they handle changes to a familiar routine?",
    options: [
      { label: "Adjusts gently", weight: 0 },
      { label: "Needs a moment", weight: 1 },
      { label: "Becomes very distressed", weight: 2 },
    ],
  },
  {
    q: "How would you describe their language for their age?",
    options: [
      { label: "On track", weight: 0 },
      { label: "A little behind", weight: 1 },
      { label: "Notably delayed", weight: 2 },
    ],
  },
  {
    q: "Do they enjoy back-and-forth play with you (peekaboo, pretend, turns)?",
    options: [
      { label: "Very much", weight: 0 },
      { label: "Briefly", weight: 1 },
      { label: "Prefers to play alone", weight: 2 },
    ],
  },
];

const TypicalChecker = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const select = (w: number) => {
    const next = score + w;
    if (step + 1 >= questions.length) {
      setScore(next);
      setDone(true);
    } else {
      setScore(next);
      setStep(step + 1);
    }
  };

  const reset = () => {
    setStep(0);
    setScore(0);
    setDone(false);
  };

  const result =
    score <= 2
      ? {
          title: "Likely typical, gentle observation",
          body: "Your responses suggest your child is broadly tracking with peers. Continue noticing the little things - and trust your instinct if anything shifts.",
        }
      : score <= 5
      ? {
          title: "A few quiet signals",
          body: "Some patterns are worth a calm conversation. A 30-minute consult with our team can help you understand what - if anything - needs gentle support.",
        }
      : {
          title: "Worth a thoughtful look",
          body: "The signals here suggest a deeper conversation would be valuable. Early support is gentle, effective and can make a meaningful difference.",
        };

  return (
    <section id="checker" className="py-28 lg:py-36 bg-cream">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">A gentle check · 2 minutes</p>
          <h2 className="serif text-4xl md:text-5xl text-ink leading-tight text-balance">
            Is this <em className="italic font-light text-primary">typical</em>?
          </h2>
          <p className="text-ink/65 mt-4 max-w-lg mx-auto leading-relaxed">
            Five reassuring questions. No diagnosis - just a clearer sense of where things stand.
          </p>
        </div>

        <div className="rounded-3xl bg-background border border-ink/5 p-8 md:p-12 shadow-soft min-h-[360px] relative overflow-hidden">
          {/* progress */}
          {!done && (
            <div className="flex items-center gap-3 mb-10">
              <div className="flex-1 h-px bg-ink/10 relative">
                <div
                  className="absolute inset-y-0 left-0 bg-primary transition-all duration-700"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
              </div>
              <span className="text-xs text-ink/50">{step + 1} / {questions.length}</span>
            </div>
          )}

          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="serif text-2xl md:text-3xl text-ink leading-snug max-w-xl text-balance">
                  {questions[step].q}
                </h3>
                <div className="mt-8 grid gap-3">
                  {questions[step].options.map((o) => (
                    <button
                      key={o.label}
                      onClick={() => select(o.weight)}
                      className="group text-left px-5 py-4 rounded-2xl border border-ink/10 bg-cream/40 hover:bg-ink hover:text-cream hover:border-ink transition-all duration-300 flex items-center justify-between"
                    >
                      <span className="text-base">{o.label}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Heart className="h-7 w-7 text-primary mb-5" />
                <h3 className="serif text-3xl md:text-4xl text-ink mb-4 text-balance">{result.title}</h3>
                <p className="text-ink/70 leading-relaxed max-w-lg mb-8">{result.body}</p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/book-assessment">
                    <Button variant="hero" size="lg" className="gap-2">
                      Book a quiet conversation <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <button onClick={reset} className="text-sm text-ink/60 hover:text-ink reveal-line px-3">
                    Take it again
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="text-center text-xs text-ink/45 mt-5">
          A parent reflection tool, not a diagnosis.
        </p>
      </div>
    </section>
  );
};

export default TypicalChecker;
