import { motion } from "framer-motion";

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
    <section id="methodology" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl mb-4"
        >
          Our <span className="italic text-gradient-gold">methodology</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-muted-foreground max-w-xl mb-16"
        >
          An integrated and evidence-informed approach drawing on techniques from communication science, performance training, and clinical voice practice.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-background border border-border rounded-lg p-8"
            >
              <span className="text-primary font-display text-3xl font-bold">{step.number}</span>
              <h3 className="font-display text-xl font-semibold mt-4 mb-3">{step.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
