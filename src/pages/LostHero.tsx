import { useParams, Link } from "react-router-dom";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { getHeroVariant } from "@/data/heroVariants";
import useFitHeroText from "@/hooks/useFitHeroText";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const LostHero = () => {
  const { variant, slug } = useParams<{ variant: string; slug: string }>();
  const entry = slug ? getHeroVariant(slug) : undefined;

  if (!entry || (variant !== "3" && variant !== "4")) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteNav />
        <main className="container mx-auto px-6 py-32 text-center">
          <h1 className="font-display text-3xl">Hero variant not found</h1>
          <Link to="/" className="text-primary underline mt-6 inline-block">
            Back home
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const lines = variant === "3" ? entry.threeLine : entry.fourLine;
  const subheading =
    variant === "3" ? entry.threeLineSubheading : entry.fourLineSubheading;
  const appendNowHere = lines[lines.length - 1] !== "Now you're here.";
  const finalLineIndex = lines.length - 1;

  const h1Ref = useRef<HTMLHeadingElement>(null);
  useFitHeroText(h1Ref, { maxPx: 96, minPx: 28, deps: [lines.join("|")] });

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>{entry.metaTitle}</title>
        <meta name="description" content={entry.metaDescription} />
        <link
          rel="canonical"
          href={`https://speechcoachstaging.lovable.app/hero/${variant}/${entry.slug}`}
        />
      </Helmet>

      <SiteNav />

      {/* Hero — matches homepage HeroSection layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-8"
            >
              Inspire • Engage • Influence
            </motion.p>

            <motion.h1
              ref={h1Ref}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
              }}
              className="font-display font-bold leading-[1.05] tracking-tight mb-8"
            >
              {lines.map((line, i) => {
                const isGold = i === finalLineIndex && !appendNowHere;
                return (
                  <motion.span
                    key={`${entry.slug}-${i}`}
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`block whitespace-nowrap ${isGold ? "italic text-gradient-gold" : ""}`}
                  >
                    {line}
                  </motion.span>
                );
              })}
              {appendNowHere && (
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="block whitespace-nowrap italic text-gradient-gold"
                >
                  Now you're here.
                </motion.span>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-10"
            >
              {subheading}
            </motion.p>

            <motion.a
              href="#cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-block bg-primary text-primary-foreground hover:opacity-90 transition-opacity px-8 py-3 rounded-full font-body text-sm tracking-wide glow-gold"
            >
              Let's talk about you...
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 px-6 border-t border-border">
        <div className="container mx-auto max-w-3xl">
          {entry.introExtended ? (
            entry.introExtended.split(/\n\n+/).map((para, i) => (
              <motion.p
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
                className="font-body text-lg text-muted-foreground leading-relaxed mb-6 last:mb-0"
              >
                {para}
              </motion.p>
            ))
          ) : (
            <motion.p {...fadeUp} className="font-body text-lg text-muted-foreground leading-relaxed">
              {entry.intro}
            </motion.p>
          )}
        </div>
      </section>

      {/* Why this matters */}
      {entry.whyMatters && (
        <section className="py-16 md:py-20 px-6 bg-card/40 border-y border-border">
          <div className="container mx-auto max-w-3xl">
            <motion.h2
              {...fadeUp}
              className="font-display text-3xl md:text-5xl font-bold mb-10"
            >
              Why this <span className="italic text-gradient-gold">matters</span>
            </motion.h2>
            {entry.whyMatters.split(/\n\n+/).map((para, i) => (
              <motion.p
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
                className="font-body text-lg text-muted-foreground leading-relaxed mb-6 last:mb-0"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </section>
      )}

      {/* Problems */}
      <section className="py-16 md:py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl font-bold mb-12">
            Does this <span className="italic text-gradient-gold">sound familiar?</span>
          </motion.h2>
          <ul className="grid md:grid-cols-2 gap-5">
            {entry.problems.map((p, i) => (
              <motion.li
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.04, ease: "easeOut" }}
                className="flex gap-4 p-5 rounded-lg border border-border bg-card/40"
              >
                <span className="text-primary font-display text-lg leading-none mt-1">—</span>
                <span className="font-body text-foreground/90">{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* The approach */}
      {entry.approach && (
        <section className="py-16 md:py-20 px-6 bg-card/40 border-y border-border">
          <div className="container mx-auto max-w-3xl">
            <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl font-bold mb-10">
              The <span className="italic text-gradient-gold">approach</span>
            </motion.h2>
            {entry.approach.split(/\n\n+/).map((para, i) => (
              <motion.p
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
                className="font-body text-lg text-muted-foreground leading-relaxed mb-6 last:mb-0"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </section>
      )}

      {/* What we work on */}
      <section className="py-16 md:py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl font-bold mb-12">
            What we <span className="italic text-gradient-gold">work on</span>
          </motion.h2>
          <ul className="grid md:grid-cols-2 gap-5">
            {entry.workOn.map((w, i) => (
              <motion.li
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.04, ease: "easeOut" }}
                className="flex gap-3 items-start"
              >
                <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span className="font-body text-foreground/90">{w}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcomes */}
      {entry.outcomes && entry.outcomes.length > 0 && (
        <section className="py-16 md:py-20 px-6 bg-card/40 border-y border-border">
          <div className="container mx-auto max-w-4xl">
            <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl font-bold mb-12">
              What <span className="italic text-gradient-gold">changes</span>
            </motion.h2>
            <ul className="grid md:grid-cols-2 gap-5">
              {entry.outcomes.map((o, i) => (
                <motion.li
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.04, ease: "easeOut" }}
                  className="flex gap-3 items-start"
                >
                  <ArrowRight className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span className="font-body text-foreground/90">{o}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Formats */}
      {entry.formats && entry.formats.length > 0 && (
        <section className="py-16 md:py-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl font-bold mb-12">
              How we <span className="italic text-gradient-gold">work</span>
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {entry.formats.map((f, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                  className="p-7 rounded-lg border border-border bg-card/40 h-full"
                >
                  <h3 className="font-display text-xl mb-3 text-foreground">{f.name}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case snapshot */}
      {entry.caseSnapshot && (
        <section className="py-16 md:py-20 px-6 bg-card/40 border-y border-border">
          <div className="container mx-auto max-w-3xl">
            <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl font-bold mb-10">
              In <span className="italic text-gradient-gold">practice</span>
            </motion.h2>
            <motion.blockquote
              {...fadeUp}
              className="font-body italic text-lg md:text-xl text-foreground/85 leading-relaxed border-l-2 border-primary pl-6"
            >
              {entry.caseSnapshot}
            </motion.blockquote>
          </div>
        </section>
      )}

      {/* FAQs */}
      {entry.faqs && entry.faqs.length > 0 && (
        <section className="py-16 md:py-20 px-6">
          <div className="container mx-auto max-w-3xl">
            <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl font-bold mb-10">
              Common <span className="italic text-gradient-gold">questions</span>
            </motion.h2>
            <div className="space-y-4">
              {entry.faqs.map((f, i) => (
                <motion.details
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.04, ease: "easeOut" }}
                  className="group border border-border rounded-lg px-6 py-5 bg-card/40 open:bg-card/60"
                >
                  <summary className="font-body font-medium text-foreground cursor-pointer list-none flex justify-between items-center gap-4">
                    <span>{f.question}</span>
                    <span className="text-primary transition-transform group-open:rotate-45 text-xl leading-none shrink-0">+</span>
                  </summary>
                  <p className="font-body text-muted-foreground leading-relaxed mt-4">
                    {f.answer}
                  </p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section id="cta" className="py-24 px-6 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h2
            {...fadeUp}
            className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {entry.closingHeading}
          </motion.h2>
          <motion.p {...fadeUp} className="font-body text-lg text-muted-foreground mb-10">
            {entry.closingCopy}
          </motion.p>
          <motion.a
            {...fadeUp}
            href="mailto:info@thespeech.coach"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all px-8 py-4 rounded-full font-body text-sm font-medium glow-gold"
          >
            {entry.ctaLabel}
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </section>

      <SiteFooter />
      <StickyMobileCTA />
    </main>
  );
};

export default LostHero;

