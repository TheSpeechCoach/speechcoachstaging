import { motion } from "framer-motion";

const credentials = [
  { label: "Featured in", name: "Men's Health" },
  { label: "Coaching Members of", name: "Forbes 30 Under 30" },
  { label: "Coaching Actors on", name: "Netflix" },
  { label: "Coaching Creators on", name: "YouTube" },
  { label: "Coaching Speakers on", name: "TED" },
];

const CredentialsSection = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-sm text-muted-foreground text-center mb-10 tracking-wide uppercase"
        >
          Trusted by leaders across industries
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {credentials.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">{c.label}</p>
              <p className="font-display text-lg md:text-xl font-semibold text-foreground">{c.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
