import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroVisual = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      animate(mx, x * 30, { duration: 1.2, ease: [0.22, 1, 0.36, 1] });
      animate(my, y * 30, { duration: 1.2, ease: [0.22, 1, 0.36, 1] });
    };
    const onLeave = () => {
      animate(mx, 0, { duration: 1.2 });
      animate(my, 0, { duration: 1.2 });
    };
    const el = ref.current;
    el?.addEventListener("mousemove", onMove);
    el?.addEventListener("mouseleave", onLeave);
    return () => {
      el?.removeEventListener("mousemove", onMove);
      el?.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my]);

  const x1 = useTransform(mx, (v) => v);
  const y1 = useTransform(my, (v) => v);
  const x2 = useTransform(mx, (v) => -v * 0.6);
  const y2 = useTransform(my, (v) => -v * 0.6);

  return (
    <div ref={ref} className="relative aspect-square w-full max-w-[560px] mx-auto">
      {/* Concentric rings */}
      <motion.div
        className="absolute inset-0 rounded-full border border-ink/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-[8%] rounded-full border border-ink/10 border-dashed"
        animate={{ rotate: -360 }}
        transition={{ duration: 120, ease: "linear", repeat: Infinity }}
      />
      <motion.div className="absolute inset-[16%] rounded-full border border-ink/15" />

      {/* Gradient orbs */}
      <motion.div
        style={{ x: x1, y: y1 }}
        className="absolute top-[10%] left-[10%] w-2/3 h-2/3 rounded-full opacity-80"
      >
        <div className="w-full h-full rounded-full bg-blush blob animate-float-slow" />
      </motion.div>
      <motion.div
        style={{ x: x2, y: y2 }}
        className="absolute bottom-[8%] right-[6%] w-1/2 h-1/2 rounded-full opacity-70"
      >
        <div className="w-full h-full rounded-full bg-sage blob animate-float-slower" />
      </motion.div>
      <motion.div
        style={{ x: x1, y: y2 }}
        className="absolute top-[30%] right-[14%] w-1/3 h-1/3 rounded-full opacity-60"
      >
        <div className="w-full h-full rounded-full bg-sky blob animate-float-slow" />
      </motion.div>

      {/* Center medallion */}
      <div className="absolute inset-[28%] rounded-full bg-cream/70 backdrop-blur-md border border-ink/5 shadow-elev flex items-center justify-center">
        <div className="text-center px-4">
          <Sparkles className="h-5 w-5 text-primary mx-auto mb-2" />
          <p className="serif text-xl text-ink leading-tight">éveil</p>
          <p className="text-[10px] tracking-[0.25em] uppercase text-ink/50 mt-1">awakening</p>
        </div>
      </div>

      {/* Floating chips with milestones */}
      {[
        { t: "First word", a: "12m", pos: "top-[2%] left-[40%]" },
        { t: "Joint play", a: "24m", pos: "top-[40%] left-[-4%]" },
        { t: "Pretend", a: "36m", pos: "bottom-[6%] left-[28%]" },
        { t: "Storytelling", a: "48m", pos: "top-[14%] right-[-2%]" },
      ].map((c) => (
        <motion.div
          key={c.t}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className={`absolute ${c.pos} bg-cream/90 backdrop-blur border border-ink/5 rounded-full px-3.5 py-1.5 shadow-soft`}
        >
          <span className="text-[11px] text-ink/80">
            {c.t} · <span className="text-ink/50">{c.a}</span>
          </span>
        </motion.div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const t = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" });
    setTime(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Ambient blobs */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-blush rounded-full blob opacity-50 animate-float-slow" />
      <div className="absolute -bottom-40 -right-32 w-[480px] h-[480px] bg-sage rounded-full blob opacity-40 animate-float-slower" />

      <div className="container relative z-10 pt-10 pb-20 lg:pt-16 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 lg:pr-6">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="eyebrow mb-6 inline-flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-breathe" />
              Early intervention · Delhi · Est. 2025
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="serif text-[44px] md:text-[60px] lg:text-[72px] leading-[1.02] text-ink text-balance"
            >
              The earliest years <br />
              are the most <em className="italic font-light text-primary">tender</em>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
              className="text-ink/65 text-lg mt-7 max-w-md leading-relaxed"
            >
              A boutique studio for children 1–10 navigating autism and developmental differences — held by clinicians who listen first, then guide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link to="/book-assessment">
                <Button variant="hero" size="lg" className="gap-2 px-7">
                  Book a private visit <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="#journey" className="text-sm text-ink/70 hover:text-ink reveal-line">
                Walk through a child's journey →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.6 }}
              className="mt-14 flex items-center gap-8 text-xs text-ink/55"
            >
              <div>
                <p className="serif text-2xl text-ink">12+</p>
                <p>certified clinicians</p>
              </div>
              <div className="w-px h-10 bg-ink/15" />
              <div>
                <p className="serif text-2xl text-ink">1:1</p>
                <p>parent-led care</p>
              </div>
              <div className="w-px h-10 bg-ink/15" />
              <div>
                <p className="serif text-2xl text-ink">{time || "—"}</p>
                <p>Delhi, IST</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
