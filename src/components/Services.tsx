import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "1:1 Private Coaching",
    description: "Bespoke one-to-one programmes built around your goals, your material and your speaking environment.",
  },
  {
    title: "Group Workshops",
    description: "Interactive team sessions delivered at our London HQ or online to teams worldwide.",
  },
  {
    title: "Specialist Programmes",
    description: "Structured, CPD-accredited courses and multi-session programmes focused on a defined discipline.",
  },
  {
    title: "Named-Event Preparation",
    description: "Focused preparation for a specific keynote, pitch, interview, panel or broadcast appearance.",
  },
  {
    title: "Online or In Person",
    description: "Delivered live online to clients worldwide, or in person in London.",
  },
  {
    title: "Intensives",
    description: "Compressed, high-intensity coaching when the date is close and the stakes are high.",
  },
];

const skillsList: { label: string; id: string }[] = [
  { label: "Presentations & Public Speaking", id: "presentations-public-speaking" },
  { label: "Confidence in Communication", id: "confidence-in-communication" },
  { label: "Fluency, Elocution & Articulation", id: "fluency-elocution-articulation" },
  { label: "Stage Presence & Gravitas", id: "stage-presence-gravitas" },
  { label: "Accent, Dialect & Refinement", id: "accent-dialect-refinement" },
  { label: "Voice & Intonation", id: "voice-intonation" },
  { label: "Pace, Cadence & Volume", id: "pace-cadence-volume" },
  { label: "Storytelling Techniques", id: "storytelling-techniques" },
  { label: "Scripting & Composition", id: "scripting-composition" },
  { label: "Gesture & Body Language", id: "gesture-body-language" },
  { label: "Video Conferencing & Digital Discourse", id: "video-conferencing-digital" },
  { label: "Broadcast Voice & Performance", id: "broadcast-voice-performance" },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-20">
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
          className="font-body text-lg text-muted-foreground mb-8 md:mb-10"
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
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-white/20 pt-12 md:pt-16"
        >
          <h3 className="font-display text-3xl md:text-4xl mb-8">
            Areas of <span className="italic text-gradient-gold">expertise</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillsList.map((skill, i) => (
              <Link
                key={i}
                to={`/areas-of-expertise#${skill.id}`}
                className="block bg-card border border-border rounded-lg px-4 py-3 font-body text-sm text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors cursor-pointer"
              >
                {skill.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
