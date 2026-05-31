import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const audiences = [
  {
    title: "Executives & Leaders",
    description: "Boards, C-suites and senior leaders preparing for the rooms where their authority must be unmistakable.",
  },
  {
    title: "Founders & Entrepreneurs",
    description: "Founders raising, pitching and representing the company — investor decks, fireside chats and the all-hands.",
  },
  {
    title: "Professionals",
    description: "Lawyers, doctors, consultants and senior specialists whose careers turn on how their expertise lands.",
  },
  {
    title: "Performers & Broadcasters",
    description: "Voice, accent and on-camera coaching for actors, presenters and broadcast professionals.",
  },
  {
    title: "Content Creators & Digital",
    description: "Podcasters, YouTubers and digital presenters building a sustainable, magnetic on-camera voice.",
  },
  {
    title: "Children & Young Speakers",
    description: "Coaching for children and teenagers — fluency, confidence and presence built from an early age.",
  },
];

const WhoWeWorkWith = () => {
  return (
    <section id="who-we-work-with" className="py-16 md:py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl mb-4"
        >
          Who we <span className="italic text-gradient-gold">work with</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-lg text-muted-foreground mb-8 md:mb-10"
        >
          A snapshot of the people whose work depends on how they speak. The full picture spans dozens of professions and sectors.
        </motion.p>

        <div className="space-y-0">
          {audiences.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border-t border-border py-8 md:py-10 grid md:grid-cols-3 gap-4 md:gap-8 items-start"
            >
              <h3 className="font-display text-xl md:text-2xl font-semibold">{a.title}</h3>
              <p className="font-body text-muted-foreground md:col-span-2 text-base leading-relaxed">
                {a.description}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/who-we-work-with"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all px-8 py-4 rounded-full font-body text-sm font-medium glow-gold"
          >
            See everyone we work with
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
