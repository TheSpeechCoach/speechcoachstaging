import { motion } from "framer-motion";
import { staggerContainer, revealItem } from "@/lib/motion";

const pillars = [
  {
    title: "What to Say",
    body: "The message itself: structure, argument and the precise words that land. We build what you say so it is clear, deliberate and made for the room you are in.",
  },
  {
    title: "How to Say It",
    body: "The delivery: voice, pace, articulation and emphasis. We shape how the message comes across so it carries weight and holds attention.",
  },
  {
    title: "How to Own It",
    body: "The presence: composure, authority and command of the room. We work on how you inhabit the moment, so it reads as effortless and unmistakably yours.",
  },
];

const OurMethodology = () => {
  return (
    <section id="methodology" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl mb-4"
        >
          Our <span className="italic text-gradient-gold">Methodology</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-lg text-muted-foreground mb-8 md:mb-10"
        >
          Everything we teach rests on three pillars — what you say, how you say it, and how you own it.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              variants={revealItem}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <h3 className="font-display text-xl font-semibold italic text-gradient-gold mb-3">{p.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurMethodology;
