import { motion } from "framer-motion";
import { staggerContainer, revealItem } from "@/lib/motion";

const steps = [
  {
    number: "01",
    title: "Initial Assessment & Evaluation",
    description: "Assessment, analysis and evaluation of speech, voice and communication skills and a comprehensive discussion of coaching goals.",
  },
  {
    number: "02",
    title: "Bespoke, Professional Coaching",
    description: "1-to-1 or group-based speech coaching programmes, delivered in-person or online and designed to meet defined targets.",
  },
  {
    number: "03",
    title: "Practical, Interactive Learning",
    description: "The provision of all materials, exercises and strategies designed to encourage rapid consolidation & lifelong-learning.",
  },
];

const MethodologySection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-card">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl mb-4"
        >
          How It <span className="italic text-gradient-gold">Works</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-lg text-muted-foreground mb-8 md:mb-10"
        >
          Every engagement follows a clear, structured path — from initial assessment to embedded, lasting results.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={revealItem}
              className="bg-background border border-border rounded-xl p-8 hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <span className="text-primary font-display text-3xl font-bold">{step.number}</span>
              <h3 className="font-display text-xl font-semibold mt-4 mb-3">{step.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologySection;
