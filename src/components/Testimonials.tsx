import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I went from dreading presentations to actually looking forward to them. The transformation was incredible.",
    name: "Sarah M.",
    role: "Marketing Director",
  },
  {
    quote: "My keynote at the annual conference got a standing ovation. I couldn't have done it without this coaching.",
    name: "James R.",
    role: "CEO, Tech Startup",
  },
  {
    quote: "The techniques I learned changed not just my speaking, but how I lead my entire team.",
    name: "Priya K.",
    role: "VP of Operations",
  },
  {
    quote: "Practical, direct, and genuinely transformative. This isn't fluff — it's the real deal.",
    name: "Tom H.",
    role: "Founder & Entrepreneur",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl mb-16 text-center"
        >
          Real <span className="italic text-gradient-gold">results</span>, real people
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border rounded-lg p-8 bg-background"
            >
              <p className="font-body text-foreground text-lg leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
