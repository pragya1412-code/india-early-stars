import { motion } from "framer-motion";

const rooms = [
  { name: "The Quiet Room", note: "Acoustic foam, dimmable warm light, weighted cushions." },
  { name: "The Movement Studio", note: "Climbing wall, swings, soft proprioceptive zones." },
  { name: "The Conversation Nook", note: "Two chairs, one table, tea — for parent debriefs." },
  { name: "The Garden Court", note: "Native plants, sand-play, an open sky for the overwhelmed." },
];

const Space = () => {
  return (
    <section className="py-28 lg:py-36 bg-ink text-cream">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow text-cream/55 mb-4">The Studio</p>
          <h2 className="serif text-4xl md:text-5xl leading-tight text-balance text-cream">
            A space designed to <em className="italic font-light text-accent">disappear</em>.
          </h2>
          <p className="text-cream/60 mt-5 max-w-lg leading-relaxed">
            Four interconnected rooms, each tuned to a child's nervous system. Architecture by Studio Lotus, sensory design by our clinicians.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {rooms.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="group relative aspect-[16/10] rounded-3xl overflow-hidden border border-cream/10 bg-cream/[0.04]"
            >
              <div
                className={`absolute inset-0 transition-transform duration-1000 group-hover:scale-105 ${
                  i % 4 === 0 ? "bg-gradient-to-br from-blush/30 via-transparent to-sage/20" :
                  i % 4 === 1 ? "bg-gradient-to-br from-sage/30 via-transparent to-sky/20" :
                  i % 4 === 2 ? "bg-gradient-to-br from-butter/30 via-transparent to-blush/20" :
                  "bg-gradient-to-br from-sky/30 via-transparent to-sage/25"
                }`}
              />
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <p className="text-xs tracking-[0.2em] uppercase text-cream/45 mb-3">Room {String(i + 1).padStart(2, "0")}</p>
                <h3 className="serif text-2xl md:text-3xl text-cream mb-2">{r.name}</h3>
                <p className="text-cream/60 text-sm max-w-sm">{r.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Space;
