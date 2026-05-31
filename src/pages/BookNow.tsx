import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import StatsStrip from "@/components/StatsStrip";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const BookNow = () => (
  <main className="bg-background text-foreground min-h-screen">
    <Helmet>
      <title>Book a Consultation | The Speech Coach</title>
      <meta
        name="description"
        content="Book a consultation with The Speech Coach. Tell us what you're working towards and we'll be in touch within 24 hours."
      />
    </Helmet>

    <SiteNav />

    <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="container mx-auto max-w-3xl relative text-center">
        <motion.p
          {...fadeUp}
          className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6"
        >
          Book a Consultation
        </motion.p>
        <motion.h1
          {...fadeUp}
          className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Let's start the{" "}
          <span className="italic text-gradient-gold">conversation.</span>
        </motion.h1>
        <motion.p
          {...fadeUp}
          className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Tell us what you're working towards and we'll be in touch within 24 hours.
        </motion.p>
      </div>
    </section>

    <StatsStrip />

    <SiteFooter />
    <StickyMobileCTA />
  </main>
);

export default BookNow;
