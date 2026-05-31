import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import StickyMobileCTA from "@/components/StickyMobileCTA";

type Audience = { label: string; href: string; description: string };

const byProfession: Audience[] = [
  { label: "Leaders", href: "/speech-coaching-leaders", description: "C-suites, boards and senior leaders." },
  { label: "Founders", href: "/speech-coaching-founders", description: "Founders raising, pitching and representing the company." },
  { label: "Professionals", href: "/speech-coaching-professionals", description: "Senior specialists whose careers turn on how they communicate." },
  { label: "Lawyers", href: "/speech-coaching-lawyers", description: "Advocacy, courtroom presence and client communication." },
  { label: "Medical Professionals", href: "/speech-coaching-medical", description: "Consultants, clinicians and medical leaders." },
  { label: "Teachers", href: "/speech-coaching-teachers", description: "Voice care, classroom presence and authority." },
  { label: "Content Creators", href: "/speech-coaching-content-creators", description: "Podcasters, YouTubers and digital presenters." },
];

const bySector: Audience[] = [
  { label: "Government & Public Sector", href: "/speech-coaching-government", description: "Ministers, senior officials and regulators." },
  { label: "Diplomats & International Bodies", href: "/speech-coaching-united-nations", description: "Coaching for delegates, diplomats and UN-affiliated bodies." },
  { label: "Charities & Non-Profits", href: "/speech-coaching-charities", description: "Cause-led communication for trustees and fundraisers." },
  { label: "Hospitality", href: "/speech-coaching-hospitality", description: "Hospitality leaders presenting to owners and investors." },
  { label: "Crypto & Blockchain", href: "/speech-coaching-crypto", description: "Founders and executives across digital assets." },
];

const byContext: Audience[] = [
  { label: "Broadcast & Media", href: "/broadcast-media-coaching", description: "Studio-condition training for TV, radio and podcast." },
  { label: "Children & Young Speakers", href: "/speech-coaching-children", description: "Fluency, confidence and presence for ages 8–17." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const Group = ({ title, items }: { title: string; items: Audience[] }) => (
  <div className="mb-8 md:mb-10">
    <motion.h2 {...fadeUp} className="font-display text-2xl md:text-3xl font-bold mb-8">
      {title}
    </motion.h2>
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((a, i) => (
        <motion.div
          key={a.href}
          {...fadeUp}
          transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
        >
          <Link
            to={a.href}
            className="block p-6 md:p-8 rounded-xl border border-border bg-card/40 hover:border-primary/40 transition-colors h-full"
          >
            <h3 className="font-display text-lg md:text-xl font-semibold mb-2 flex items-center gap-2">
              {a.label}
              <ArrowRight className="w-4 h-4 text-primary" />
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">{a.description}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
);

const WhoWeWorkWithPage = () => (
  <main className="bg-background text-foreground min-h-screen">
    <Helmet>
      <title>Who We Work With | The Speech Coach</title>
      <meta
        name="description"
        content="The Speech Coach works with leaders, founders, professionals, broadcasters and public-sector figures whose work depends on how they speak. Explore every audience we serve."
      />
    </Helmet>

    <SiteNav />

    <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="container mx-auto max-w-3xl relative text-center">
        <motion.h1 {...fadeUp} className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
          Who we <span className="italic text-gradient-gold">work with</span>
        </motion.h1>
        <motion.p {...fadeUp} className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
          From C-suites and founders to broadcasters, diplomats and young speakers — the people we coach share one thing in common: their work depends on how they speak.
        </motion.p>
      </div>
    </section>

    <section className="py-16 md:py-20 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <Group title="By profession" items={byProfession} />
        <Group title="By sector" items={bySector} />
        <Group title="By context" items={byContext} />
      </div>
    </section>

    <section className="py-16 md:py-20 px-6 border-t border-border">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl font-bold mb-6">
          Ready to <span className="italic text-gradient-gold">start the work?</span>
        </motion.h2>
        <motion.p {...fadeUp} className="font-body text-lg text-muted-foreground mb-10">
          Book a consultation and we'll talk through where you are and where you want to be.
        </motion.p>
        <Link
          to="/book-now"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/80 transition-all px-8 py-4 rounded-full font-body text-sm font-medium glow-gold"
        >
          Book a Consultation
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    <SiteFooter />
    <StickyMobileCTA />
  </main>
);

export default WhoWeWorkWithPage;
