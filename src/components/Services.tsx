import { motion } from "framer-motion";

const services = [
  {
    title: "Executives, Leaders & Professionals",
    description: "Refine your public speaking, enhance vocal control, and communicate with precision and impact — whether on stage, in meetings, or on camera. From career progressions to fundraising pitches.",
  },
  {
    title: "Performance & Broadcast",
    description: "Workshops for actors, performers, and voice professionals across film, theatre, television, and radio. Voice characterisation, accent coaching, vocal projection, and voice care.",
  },
  {
    title: "Content Creators & Digital",
    description: "Speech coaching for podcasters, YouTubers, and social media presenters — clear, sustainable, and engaging communication across digital platforms and video conferencing.",
  },
  {
    title: "Children & Young Speakers",
    description: "We teach children how to talk, present, debate, and tell stories that entertain and engage. Building fluency, eloquence, confidence, and character from an early age.",
  },
  {
    title: "Group Workshops",
    description: "Transform your team's communication skills with interactive workshops designed for lasting impact. Available in person at our London HQ or online worldwide.",
  },
];

const skillsList = [
  "Presentations & Public Speaking",
  "Confidence in Communication",
  "Fluency, Elocution & Articulation",
  "Stage Presence & Gravitas",
  "Accent, Dialect & Refinement",
  "Voice & Intonation",
  "Pace, Cadence & Volume",
  "Storytelling Techniques",
  "Scripting & Composition",
  "Gesture & Body Language",
  "Video Conferencing & Digital Discourse",
  "Broadcast Voice & Performance",
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
          className="font-body text-muted-foreground max-w-xl mb-16"
        >
          Every engagement is bespoke. Based in London and working with clients worldwide, we offer private sessions, group workshops, and specialist programmes — delivered online or in person.
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

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="font-display text-2xl mb-8">
            Areas of <span className="italic text-gradient-gold">expertise</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillsList.map((skill, i) => (
              <div key={i} className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
