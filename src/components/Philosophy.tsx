import { motion } from "framer-motion";

const principles = [
  {
    n: "01",
    t: "Listen before we lead",
    b: "Every plan begins with the child you know - not the one we assume.",
  },
  {
    n: "02",
    t: "Evidence, gently held",
    b: "ABA, DIR/Floortime, OT, SLT, social cognition - chosen for fit, not fashion.",
  },
  {
    n: "03",
    t: "The room matters",
    b: "Soft acoustics, natural light, sensory zoning - environment as therapy.",
  },
  {
    n: "04",
    t: "Parents as partners",
    b: "We coach you alongside your child, so growth lives at home too.",
  },
];

const Philosophy = () => {
  return (
    <section className="py-28 lg:py-36 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="eyebrow mb-4">Philosophy</p>
            <h2 className="serif text-4xl md:text-5xl text-ink leading-tight text-balance">
              Therapy as a <em className="italic font-light text-primary">quiet</em> craft.
            </h2>
            <p className="text-ink/65 mt-6 leading-relaxed max-w-md">
              We believe children grow best in places that feel slow, safe and considered. Our practice is built around four ideas we return to, every day.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-ink/10">
              {principles.map((p, i) => (
                <motion.li
                  key={p.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.05 }}
                  className="py-8 grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-6"
                >
                  <span className="serif text-2xl text-ink/35">{p.n}</span>
                  <div>
                    <h3 className="serif text-2xl md:text-3xl text-ink mb-3">{p.t}</h3>
                    <p className="text-ink/65 leading-relaxed max-w-lg">{p.b}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
