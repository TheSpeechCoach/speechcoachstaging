import { motion } from "framer-motion";

const courses = [
  {
    title: "Confident Public Speaking",
    subtitle: "Introductory Workshop",
    description: "An introductory CPD online coaching workshop focusing on the core skills & characteristics that underpin confident communication and public speaking.",
    duration: "3 hours · 3 sessions",
  },
  {
    title: "Improved Public Speaking",
    subtitle: "Enhancement Workshop",
    description: "Elevate your public speaking skills with this accredited CPD Online Coaching Workshop. Requires completion of the Introductory Workshop.",
    duration: "2 hours · 2 sessions",
  },
  {
    title: "Powerful Public Speaking",
    subtitle: "Complete Programme",
    description: "A complete Communication and Public Speaking Coaching Programme combining Introductory and Improved modules into an accredited online course.",
    duration: "6 hours · 6 workshops",
  },
];

const CPDSection = () => {
  return (
    <section id="cpd" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl mb-4"
        >
          CPD Accredited <span className="italic text-gradient-gold">Courses</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-lg text-muted-foreground mb-8 md:mb-10"
        >
          All courses meet globally recognised standards for professional development, structured to deliver relevant and transformative measurable outcomes.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-card border border-border rounded-lg p-6 md:p-8 flex flex-col"
            >
              <p className="font-body text-xs uppercase tracking-wider text-primary mb-2">{course.subtitle}</p>
              <h3 className="font-display text-xl font-semibold mb-3">{course.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6 flex-1">{course.description}</p>
              <p className="font-body text-sm text-foreground font-medium">{course.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CPDSection;
