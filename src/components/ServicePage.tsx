import { Helmet } from "react-helmet-async";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import StickyMobileCTA from "./StickyMobileCTA";

export interface ContentBlock {
  heading: string;
  intro?: string;
  items: string[];
}

interface ServicePageProps {
  metaTitle: string;
  metaDescription: string;
  h1: ReactNode;
  subheading: string;
  intro: string;
  problemsHeading?: string;
  problems: string[];
  workOnHeading?: string;
  workOn: string[];
  extraBlocks?: ContentBlock[];
  closingHeading?: string;
  closing: string;
  ctaLabel?: string;
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const ServicePage = ({
  metaTitle,
  metaDescription,
  h1,
  subheading,
  intro,
  problemsHeading = "Does this sound familiar?",
  problems,
  workOnHeading = "What we work on",
  workOn,
  extraBlocks = [],
  closingHeading = "Ready to take the next step?",
  closing,
  ctaLabel = "Book a Consultation",
}: ServicePageProps) => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <SiteNav />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-4xl relative text-center">
          <motion.h1
            {...fadeUp}
            className="font-display text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
          >
            {h1}
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
            {ctaLabel}
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
            {workOnHeading}
          </motion.h2>
          <ul className="grid md:grid-cols-2 gap-5">
            {workOn.map((w, i) => (
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

      {/* Extra blocks */}
      {extraBlocks.map((block, i) => (
        <section key={i} className="py-16 px-6 border-t border-border">
          <div className="container mx-auto max-w-4xl">
            <motion.h2 {...fadeUp} className="font-display text-2xl md:text-4xl font-bold mb-6">
              {block.heading}
            </motion.h2>
            {block.intro && (
              <motion.p {...fadeUp} className="font-body text-lg text-muted-foreground mb-8">
                {block.intro}
              </motion.p>
            )}
            {block.items.length > 0 && (
              <ul className="grid md:grid-cols-2 gap-4">
                {block.items.map((item, j) => (
                  <motion.li
                    key={j}
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: j * 0.04, ease: "easeOut" }}
                    className="flex gap-3 items-start"
                  >
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="font-body text-foreground/90">{item}</span>
                  </motion.li>
                ))}
              </ul>
            )}
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
            {closing}
          </motion.p>
          <motion.a
            {...fadeUp}
            href="mailto:info@thespeech.coach"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all px-8 py-4 rounded-full font-body text-sm font-medium glow-gold"
          >
            {ctaLabel}
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </section>

      <SiteFooter />
      <StickyMobileCTA />
    </main>
  );
};

export default ServicePage;
