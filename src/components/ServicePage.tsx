import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import StickyMobileCTA from "./StickyMobileCTA";

export interface ExtraSection {
  heading: string;
  content: string;
}

interface ServicePageProps {
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  tagline: string;
  headline: string;
  headlineAccent: string;
  subheading: string;
  intro: string;
  problemsHeading?: string;
  problems: string[];
  workHeading?: string;
  workItems: string[];
  extraSections?: ExtraSection[];
  closingHeading: string;
  closingBody: string;
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const seoLinks = [
  { to: "/public-speaking-coaching", label: "Public Speaking Coaching" },
  { to: "/elocution-voice-coaching", label: "Elocution Lessons" },
  { to: "/accent-coaching", label: "Accent Coaching" },
  { to: "/executive-corporate-coaching", label: "Executive Speech Coach" },
  { to: "/presentation-skills-coaching", label: "Presentation Skills" },
  { to: "/communication-coaching", label: "Communication Coach" },
  { to: "/online-coaching", label: "Online Speech Coach" },
  { to: "/speech-coaching-children", label: "Speech Coaching for Children" },
  { to: "/team-workshops", label: "Team Workshops" },
];

const ServicePage = ({
  seoTitle,
  seoDescription,
  canonicalPath,
  tagline,
  headline,
  headlineAccent,
  subheading,
  intro,
  problemsHeading = "Does this sound like you?",
  problems,
  workHeading = "What we work on",
  workItems,
  extraSections = [],
  closingHeading,
  closingBody,
}: ServicePageProps) => {
  const canonical = `https://www.thespeech.coach${canonicalPath}`;
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
      </Helmet>

      <SiteNav />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-4xl relative text-center">
          <motion.p
            {...fadeUp}
            className="font-body uppercase tracking-[0.2em] text-xs text-primary mb-6"
          >
            {tagline}
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
            className="font-display text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
          >
            {headline}{" "}
            <span className="italic text-gradient-gold">{headlineAccent}</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            {subheading}
          </motion.p>
          <motion.a
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            href="mailto:info@thespeech.coach"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all px-8 py-4 rounded-full font-body text-sm font-medium glow-gold"
          >
            Book Your Free Consultation
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 border-t border-border">
        <div className="container mx-auto max-w-3xl">
          <motion.p {...fadeUp} className="font-body text-lg text-muted-foreground leading-relaxed">
            {intro}
          </motion.p>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20 px-6 bg-card/40 border-y border-border">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl font-bold mb-12 text-center">
            {problemsHeading}
          </motion.h2>
          <ul className="grid md:grid-cols-2 gap-5">
            {problems.map((p, i) => (
              <motion.li
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                className="flex gap-4 p-5 rounded-lg border border-border bg-background/40"
              >
                <span className="text-primary font-display text-lg leading-none mt-1">—</span>
                <span className="font-body text-foreground/90">{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we work on */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl font-bold mb-12 text-center">
            {workHeading}
          </motion.h2>
          <ul className="grid md:grid-cols-2 gap-5">
            {workItems.map((w, i) => (
              <motion.li
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                className="flex gap-3 items-start"
              >
                <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span className="font-body text-foreground/90">{w}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Extra sections */}
      {extraSections.map((s, i) => (
        <section key={i} className="py-16 px-6 border-t border-border">
          <div className="container mx-auto max-w-3xl">
            <motion.h2 {...fadeUp} className="font-display text-2xl md:text-4xl font-bold mb-6">
              {s.heading}
            </motion.h2>
            <motion.p {...fadeUp} className="font-body text-lg text-muted-foreground leading-relaxed">
              {s.content}
            </motion.p>
          </div>
        </section>
      ))}

      {/* Closing CTA */}
      <section className="py-24 px-6 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h2
            {...fadeUp}
            className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {closingHeading}
          </motion.h2>
          <motion.p {...fadeUp} className="font-body text-lg text-muted-foreground mb-10">
            {closingBody}
          </motion.p>
          <motion.a
            {...fadeUp}
            href="mailto:info@thespeech.coach"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all px-8 py-4 rounded-full font-body text-sm font-medium glow-gold"
          >
            Book Your Free Consultation
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <p className="font-body text-sm text-muted-foreground mt-6">
            Or call us:{" "}
            <a href="tel:+442071646769" className="text-primary hover:underline">
              +44 (0)207 164 6769
            </a>
          </p>
        </div>
      </section>

      {/* SEO keyword links */}
      <section className="py-16 px-6 border-t border-border bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <p className="font-body uppercase tracking-[0.2em] text-xs text-primary text-center mb-8">
            Explore More Services
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {seoLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-body text-sm text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <StickyMobileCTA />
    </main>
  );
};

export default ServicePage;
