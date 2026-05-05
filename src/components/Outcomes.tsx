import { motion } from "framer-motion";

const stories = [
  {
    quote: "He looked back at me. After eighteen months of waiting, he looked back at me.",
    parent: "Aanya's mother",
    months: "after 4 months",
  },
  {
    quote: "We arrived afraid. We left with a quiet plan and our daughter humming in the car.",
    parent: "Vihaan's father",
    months: "after first visit",
  },
  {
    quote: "They never made us feel rushed. They never made him feel small.",
    parent: "Arav's parents",
    months: "after 9 months",
  },
];

const Outcomes = () => {
  return (
    <section className="py-28 lg:py-36 bg-gradient-warm relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">Quiet transformations</p>
          <h2 className="serif text-4xl md:text-5xl text-ink leading-tight text-balance">
            Stories told in <em className="italic font-light text-primary">small</em> moments.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="rounded-3xl bg-cream/60 backdrop-blur border border-ink/5 p-8 md:p-9 hover:bg-cream transition-colors duration-500"
            >
              <span className="serif text-4xl text-primary leading-none">"</span>
              <blockquote className="serif text-xl md:text-[22px] text-ink leading-snug mt-3 text-balance">
                {s.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-ink/10 text-sm text-ink/60 flex justify-between">
                <span>{s.parent}</span>
                <span className="text-ink/40">{s.months}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
