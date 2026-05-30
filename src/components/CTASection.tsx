import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-16 md:py-20">
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
          Book a consultation and let's find out how we can help you communicate with clarity, composure, and impact.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://www.thespeech.coach/book-now/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 transition-all px-10 py-4 rounded-full font-body text-sm tracking-wide glow-gold"
          >
            Book Now
          </a>
          <a
            href="tel:+442071646769"
            className="inline-flex items-center gap-2 border border-border text-foreground hover:border-primary/50 transition-colors px-8 py-4 rounded-full font-body text-sm"
          >
            <Phone className="w-4 h-4" />
            +44 (0)207 164 6769
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
