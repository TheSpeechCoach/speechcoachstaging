import { motion } from "framer-motion";

type Props = {
  heading?: React.ReactNode;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const MidCTA = ({ heading, body, ctaLabel = "Let's talk...", ctaHref = "#cta" }: Props) => {
  return (
    <section className="pt-12 md:pt-16 pb-20 md:pb-28">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -2 }}
          className="inline-block w-full sm:w-auto bg-primary text-primary-foreground hover:opacity-90 transition-all px-10 py-4 rounded-full font-body text-lg tracking-wide glow-gold"
        >
          {ctaLabel}
        </motion.a>
      </div>
    </section>
  );
};

export default MidCTA;
