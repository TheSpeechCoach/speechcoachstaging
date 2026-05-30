import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { areasOfExpertise } from "@/data/areasOfExpertise";
import CTASection from "@/components/CTASection";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const AreasOfExpertise = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>Areas of Expertise | Speech, Voice & Communication Coaching | The Speech Coach</title>
        <meta
          name="description"
          content="The full range of speech, voice and communication skills we coach — from public speaking and presence to accent, voice, storytelling and broadcast performance."
        />
        <link rel="canonical" href="https://speechcoachstaging.lovable.app/areas-of-expertise" />
      </Helmet>

      <SiteNav />

      {/* Hero */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-4xl relative text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-8"
          >
            Professional Public Speaking Coaching
          </motion.p>
          <motion.h1
            {...fadeUp}
            className="font-display text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
          >
            Areas of <span className="italic text-gradient-gold">Expertise</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            We coach across the full range of speech, voice and communication skills.
          </motion.p>
          <motion.a
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            href="https://www.thespeech.coach/book-now/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all px-8 py-4 rounded-full font-body text-sm font-medium glow-gold"
          >
            Book a Consultation
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </section>

      {/* Areas — each its own section with stable id */}
      {areasOfExpertise.map((area, i) => (
        <section
          key={area.id}
          id={area.id}
          className="py-16 md:py-20 px-6 border-t border-border scroll-mt-24"
        >
          <div className="container mx-auto max-w-3xl">
            <motion.h2
              {...fadeUp}
              className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight"
            >
              {(() => {
                const m = area.name.match(/^(.*?)( & | ?, ?)(.+)$/);
                if (m) {
                  return (
                    <>
                      {m[1]}
                      {m[2]}
                      <span className="italic text-gradient-gold">{m[3]}</span>
                    </>
                  );
                }
                const idx = area.name.lastIndexOf(" ");
                if (idx === -1) {
                  return <span className="italic text-gradient-gold">{area.name}</span>;
                }
                return (
                  <>
                    {area.name.slice(0, idx + 1)}
                    <span className="italic text-gradient-gold">{area.name.slice(idx + 1)}</span>
                  </>
                );
              })()}
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
              className="font-body text-lg text-muted-foreground leading-relaxed"
            >
              {area.paragraph}
            </motion.p>
          </div>
        </section>
      ))}

      <div className="container mx-auto max-w-3xl px-6 pb-16 md:pb-20">
        <p className="text-right font-display italic text-gradient-gold text-2xl md:text-3xl">...and more...</p>
      </div>

      <div className="border-t border-border">
        <CTASection />
      </div>

      <SiteFooter />
      <StickyMobileCTA />
    </main>
  );
};

export default AreasOfExpertise;
