import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const CoachSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl mb-8"
          >
            The <span className="italic text-gradient-gold">Coach</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              For more than 30 years, <span className="text-foreground font-medium">Vinny Raval</span> — The Speech Coach — has helped people strengthen their communication and public speaking skills across corporate, public sector, and creative industries in the UK and internationally.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              His approach combines insights from speech science, performance training, and communication psychology, creating a distinctive methodology that delivers measurable progress and supports long-term development.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Every coaching programme is tailored to the individual, reflecting their goals, context, and speaking environment. Sessions are available one-to-one or in group settings, delivered online or in person.
            </p>
            <a
              href="https://www.linkedin.com/in/thespeechcoach"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-body text-sm transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              View testimonials on LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoachSection;
