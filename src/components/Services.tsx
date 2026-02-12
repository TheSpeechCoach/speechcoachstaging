import { motion } from "framer-motion";

const services = [
  {
    title: "1:1 Coaching",
    description: "Personalised sessions tailored to your specific goals — whether it's a TED talk, board presentation, or wedding speech.",
  },
  {
    title: "Keynote Preparation",
    description: "End-to-end support from structure and storytelling to delivery, body language, and stage presence.",
  },
  {
    title: "Executive Presence",
    description: "Learn to command a room with vocal authority, strategic pausing, and confident delivery that inspires trust.",
  },
  {
    title: "Group Workshops",
    description: "Transform your team's communication skills with interactive workshops designed for lasting impact.",
  },
  {
    title: "Pitch Coaching",
    description: "Nail your investor pitch, sales presentation, or business case with compelling narrative and delivery.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl mb-4"
        >
          How we <span className="italic text-gradient-gold">work</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-muted-foreground max-w-lg mb-16"
        >
          Every engagement is bespoke. We meet you where you are and take you where you need to be.
        </motion.p>

        <div className="space-y-0">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border-t border-border py-8 md:py-10 grid md:grid-cols-3 gap-4 md:gap-8 items-start"
            >
              <h3 className="font-display text-xl md:text-2xl font-semibold">{s.title}</h3>
              <p className="font-body text-muted-foreground md:col-span-2 text-base leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default Services;
