import { motion } from "framer-motion";

const painPoints = [
  {
    bold: "You freeze up during presentations",
    rest: "and your message gets lost in the nerves?",
  },
  {
    bold: "Big keynote or pitch coming up",
    rest: "and you're not sure how to prepare or deliver with impact?",
  },
  {
    bold: "Your ideas are strong",
    rest: "but you struggle to communicate them with clarity and authority?",
  },
  {
    bold: "Want to command the room",
    rest: "but your voice, pace, or body language lets you down?",
  },
];

const PainPoints = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl mb-4"
        >
          Do these scenarios{" "}
          <span className="font-bold italic text-gradient-gold">sound familiar?</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-colors"
            >
              <p className="font-body text-lg">
                <span className="font-semibold text-foreground">{point.bold}</span>{" "}
                <span className="text-muted-foreground">{point.rest}</span>
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl mb-4">
            Say it differently.{" "}
            <span className="italic text-gradient-gold">Land it differently.</span>
          </h3>
          <p className="font-body text-muted-foreground max-w-lg mx-auto mb-8">
            We work directly with executives, founders, leaders, and professionals whose work depends on clear expression, confident delivery, and authentic presence.
          </p>
          <a
            href="#cta"
            className="inline-block border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all px-8 py-3 rounded-full font-body text-sm"
          >
            Let's talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;
