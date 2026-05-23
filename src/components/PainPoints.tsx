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
    <section id="about" className="pt-16 md:pt-20">
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

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors"
            >
              <p className="font-body text-lg">
                <span className="font-semibold text-foreground">{point.bold}</span>{" "}
                <span className="text-muted-foreground">{point.rest}</span>
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PainPoints;
