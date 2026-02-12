import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="cta" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl mb-6"
        >
          Ready to{" "}
          <span className="italic text-gradient-gold">transform</span>
          <br />
          the way you speak?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body text-muted-foreground text-lg max-w-md mx-auto mb-10"
        >
          Book a free discovery call and let's find out how we can help you speak with confidence and impact.
        </motion.p>
        <motion.a
          href="mailto:hello@thespeech.coach"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-block bg-primary text-primary-foreground hover:opacity-90 transition-opacity px-10 py-4 rounded-full font-body text-sm tracking-wide glow-gold"
        >
          Book Your Free Call
        </motion.a>
      </div>
    </section>
  );
};

export default CTASection;
