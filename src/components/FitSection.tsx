import { motion } from "framer-motion";

const criteria = [
  "You're a leader, founder, or professional who speaks publicly",
  "You have a specific event, pitch, or presentation coming up",
  "You're committed to practice and growth between sessions",
  "You value honest, direct feedback over surface-level praise",
];

const FitSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl mb-12"
        >
          What we need from you{" "}
          <span className="italic text-gradient-gold">to be a fit:</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {criteria.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 items-start bg-background border border-border rounded-lg p-6"
            >
              <span className="text-primary font-display text-2xl font-bold mt-[-2px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-body text-foreground">{c}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="font-display text-xl mb-6 text-muted-foreground">Do you tick these boxes?</p>
          <a
            href="#cta"
            className="inline-block border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all px-8 py-3 rounded-full font-body text-sm"
          >
            Let's talk about you
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FitSection;
