import { motion } from "framer-motion";

const eyebrows = ["The Why", "The Will", "The Want"];

const criteria = [
  "You have a specific event, pitch, keynote, or presentation coming up",
  "You're committed to practice and growth between sessions",
  "You value honest, evidence-informed feedback over surface-level praise",
];

const FitSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl mb-8 md:mb-10"
        >
          Do You{" "}
          <span className="italic text-gradient-gold">Have…?</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {criteria.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 items-start bg-card border border-border rounded-xl p-8"
            >
              <span className="text-primary font-display text-2xl font-bold mt-[-2px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <span className="text-primary font-body text-xs uppercase tracking-widest mb-1 block">
                  {eyebrows[i]}
                </span>
                <p className="font-body text-foreground">{c}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="font-display text-xl mb-6 text-muted-foreground">If the answer is yes</p>
          <a
            href="https://www.thespeech.coach/book-now/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 transition-all px-8 py-3 rounded-full font-body text-sm glow-gold"
          >
            Let's talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FitSection;

