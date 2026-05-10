import { motion } from "framer-motion";

type Props = {
  heading: React.ReactNode;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const MidCTA = ({ heading, body, ctaLabel = "Let's talk...", ctaHref = "#cta" }: Props) => {
  return (
    <section className="py-20 md:py-28 bg-card border-y border-border">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-3xl md:text-5xl mb-6 leading-tight"
        >
          {heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-muted-foreground text-lg mb-8"
        >
          {body}
        </motion.p>
        <motion.a
          href={ctaHref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block bg-primary text-primary-foreground hover:opacity-90 transition-opacity px-8 py-3 rounded-full font-body text-sm tracking-wide glow-gold"
        >
          {ctaLabel}
        </motion.a>
      </div>
    </section>
  );
};

export default MidCTA;
