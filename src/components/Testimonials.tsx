import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-card">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl mb-6"
        >
          Real <span className="italic text-gradient-gold">results</span>, real people
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-muted-foreground max-w-lg mx-auto mb-10"
        >
          To see what our clients have said about their coaching experience with The Speech Coach, visit our LinkedIn profile.
        </motion.p>
        <motion.a
          href="https://www.linkedin.com/in/thespeechcoach"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground border border-transparent hover:bg-background hover:text-primary hover:border-primary transition-all px-8 py-3 rounded-full font-body text-sm glow-gold"
        >
          <Linkedin className="w-4 h-4" />
          View Testimonials on LinkedIn
        </motion.a>
      </div>
    </section>
  );
};

export default Testimonials;
