import { motion } from "framer-motion";

type Props = {
  heading?: React.ReactNode;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const MidCTA = ({ heading, body, ctaLabel = "Let's talk...", ctaHref = "https://www.thespeech.coach/book-now/" }: Props) => {
  return (
    <section className="pt-8 md:pt-10 pb-16 md:pb-20">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        {heading && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl md:text-5xl mb-6 leading-tight"
          >
            {heading}
          </motion.h2>
        )}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-muted-foreground text-lg mb-10"
        >
          {body}
        </motion.p>
        <motion.a
          href={ctaHref}
          target={ctaHref.startsWith("http") ? "_blank" : undefined}
          rel={ctaHref.startsWith("http") ? "noopener" : undefined}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -2 }}
          className="inline-block w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all px-10 py-4 rounded-full font-body text-lg tracking-wide glow-gold"
        >
          {ctaLabel}
        </motion.a>
      </div>
    </section>
  );
};

export default MidCTA;
