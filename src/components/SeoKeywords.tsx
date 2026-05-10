import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const keywordLinks = [
  { to: "/public-speaking-coaching", label: "Public Speaking Coaching" },
  { to: "/elocution-voice-coaching", label: "Elocution Lessons" },
  { to: "/elocution-voice-coaching", label: "Voice Coaching" },
  { to: "/accent-coaching", label: "Accent Coaching" },
  { to: "/executive-corporate-coaching", label: "Executive Speech Coach" },
  { to: "/presentation-skills-coaching", label: "Presentation Skills Coaching" },
  { to: "/communication-coaching", label: "Communication Coach" },
  { to: "/online-coaching", label: "Online Speech Coach" },
  { to: "/speech-coaching-children", label: "Speech Coaching for Children" },
  { to: "/team-workshops", label: "Team Communication Workshops" },
];

const SeoKeywords = () => (
  <section className="py-20 px-6 border-t border-border">
    <div className="container mx-auto max-w-4xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight"
      >
        Trusted by Professionals in{" "}
        <span className="italic text-gradient-gold">Over 30 Countries</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-body text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto"
      >
        The Speech Coach works with executives, managers, founders, non-native English speakers,
        actors, podcasters and parents of children aged 8–17 — helping them speak with confidence,
        clarity and genuine impact. Coaching covers public speaking, voice and elocution, accent
        reduction and refinement, presentation skills, communication confidence, executive presence
        and gravitas. Sessions are available 1:1 online worldwide or in person in London.
      </motion.p>
      <ul className="flex flex-wrap justify-center gap-x-3 gap-y-2 font-body text-sm">
        {keywordLinks.map((l, i) => (
          <li key={i} className="flex items-center">
            <Link
              to={l.to}
              className="text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              {l.label}
            </Link>
            {i < keywordLinks.length - 1 && (
              <span className="text-muted-foreground/40 ml-3" aria-hidden="true">·</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default SeoKeywords;
