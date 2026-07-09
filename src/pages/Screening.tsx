import Layout from "@/components/Layout";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, MessageCircle, CheckCircle, AlertTriangle, AlertCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919711331299";

const steps = [
  {
    title: "Step 1: Child's Age",
    question: "How old is your child?",
    options: ["Under 1 year", "1–2 years", "2–3 years", "3–5 years", "5–7 years", "7–10 years"],
  },
  {
    title: "Step 2: Behavior",
    questions: [
      "Does your child respond to their name when called?",
      "Does your child make eye contact during interactions?",
      "Does your child get unusually upset by small changes in routine?",
    ],
  },
  {
    title: "Step 3: Communication",
    questions: [
      "Does your child point at objects to show interest?",
      "Does your child use words or phrases to communicate needs?",
      "Does your child understand simple instructions?",
    ],
  },
  {
    title: "Step 4: Social Interaction",
    questions: [
      "Does your child imitate actions or sounds?",
      "Does your child show interest in playing with other children?",
      "Does your child share enjoyment with you (e.g., showing toys)?",
    ],
  },
];

type Answers = Record<string, string>;

const Screening = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const canProceed = () => {
    if (currentStep === 0) return !!answers["age"];
    const step = steps[currentStep];
    if (step.questions) {
      return step.questions.every((_, i) => !!answers[`step${currentStep}_q${i}`]);
    }
    return true;
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const getRisk = () => {
    let concernCount = 0;
    Object.entries(answers).forEach(([key, val]) => {
      if (key === "age") return;
      if (key.includes("q2") && currentStep >= 1) {
        // Q3 in behavior step is reverse-scored
      }
      if (val === "No" || val === "Rarely") concernCount++;
    });

    if (concernCount >= 6) return "high";
    if (concernCount >= 3) return "moderate";
    return "low";
  };

  const risk = showResult ? getRisk() : null;

  const riskConfig = {
    low: {
      icon: CheckCircle,
      title: "Low Risk",
      color: "text-primary",
      bg: "bg-primary/10",
      description: "Based on your responses, your child shows typical developmental patterns. However, if you have any concerns, we recommend consulting with a professional.",
    },
    moderate: {
      icon: AlertTriangle,
      title: "Moderate Risk",
      color: "text-accent",
      bg: "bg-accent/15",
      description: "Your child may benefit from a professional developmental assessment. Early intervention can make a significant difference.",
    },
    high: {
      icon: AlertCircle,
      title: "High Risk",
      color: "text-destructive",
      bg: "bg-destructive/10",
      description: "Your child may benefit from early intervention services. We strongly recommend scheduling a comprehensive assessment with our team.",
    },
  };

  return (
    <Layout>
      <section className="py-16 lg:py-20 bg-section-cool min-h-[70vh]">
        <div className="container max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-3">
              Free Autism Screening
            </h1>
            <p className="text-muted-foreground text-lg">
              Answer a few simple questions to understand your child's development. Takes just 2 minutes.
            </p>
          </motion.div>

          {!showResult && (
            <>
              {/* Progress bar */}
              <div className="flex gap-2 mb-8">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-full transition-colors ${
                      i <= currentStep ? "bg-primary" : "bg-border"
                    }`}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-card rounded-2xl p-8 shadow-sm border border-border/50"
                >
                  <h2 className="text-xl font-bold text-foreground mb-6">{steps[currentStep].title}</h2>

                  {currentStep === 0 ? (
                    <div>
                      <p className="text-muted-foreground mb-4">{steps[0].question}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {steps[0].options.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleAnswer("age", option)}
                            className={`p-4 rounded-xl border-2 text-sm font-bold transition-all ${
                              answers["age"] === option
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border hover:border-primary/50 text-foreground"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {steps[currentStep].questions?.map((q, i) => (
                        <div key={i}>
                          <p className="text-foreground font-medium mb-3">{q}</p>
                          <div className="flex gap-3">
                            {["Yes", "Sometimes", "Rarely", "No"].map((opt) => (
                              <button
                                key={opt}
                                onClick={() => handleAnswer(`step${currentStep}_q${i}`, opt)}
                                className={`flex-1 py-3 rounded-xl border-2 text-sm font-bold transition-all ${
                                  answers[`step${currentStep}_q${i}`] === opt
                                    ? "border-primary bg-primary/10 text-primary"
                                    : "border-border hover:border-primary/50 text-foreground"
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex justify-between mt-8">
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      className="gap-1"
                    >
                      <ArrowLeft className="h-4 w-4" /> Back
                    </Button>
                    <Button
                      variant="hero"
                      onClick={nextStep}
                      disabled={!canProceed()}
                      className="gap-1"
                    >
                      {currentStep === steps.length - 1 ? "See Results" : "Next"} <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          )}

          {showResult && risk && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border/50 text-center"
            >
              <div className={`w-20 h-20 rounded-full ${riskConfig[risk].bg} flex items-center justify-center mx-auto mb-6`}>
                {(() => {
                  const Icon = riskConfig[risk].icon;
                  return <Icon className={`h-10 w-10 ${riskConfig[risk].color}`} />;
                })()}
              </div>
              <h2 className={`text-2xl font-extrabold mb-3 ${riskConfig[risk].color}`}>
                {riskConfig[risk].title}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md mx-auto">
                {riskConfig[risk].description}
              </p>

              {(risk === "moderate" || risk === "high") && (
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Link to="/book-assessment">
                    <Button variant="hero" size="lg" className="gap-2">
                      Book Assessment <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, my child's screening showed " + riskConfig[risk].title + ". I'd like to discuss next steps.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="whatsapp" size="lg" className="gap-2">
                      <MessageCircle className="h-4 w-4" /> Talk on WhatsApp
                    </Button>
                  </a>
                </div>
              )}

              {risk === "low" && (
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Link to="/book-assessment">
                    <Button variant="heroOutline" size="lg">Book Assessment Anyway</Button>
                  </Link>
                </div>
              )}

              <div className="bg-muted rounded-xl p-4 text-xs text-muted-foreground leading-relaxed">
                <strong>⚠️ Disclaimer:</strong> This screening is not a medical diagnosis. It is a preliminary tool to help identify potential developmental concerns. Please consult a qualified healthcare professional for a comprehensive assessment.
              </div>

              <button
                onClick={() => { setShowResult(false); setCurrentStep(0); setAnswers({}); }}
                className="mt-6 text-primary text-sm font-bold hover:underline"
              >
                Take Screening Again
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Screening;
