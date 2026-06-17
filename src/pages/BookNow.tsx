import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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

const inputClass =
  "w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-colors";
const labelClass =
  "block font-body text-sm text-muted-foreground mb-2";

/**
 * Formspree form ID. Set VITE_FORMSPREE_ID in your environment, OR replace the
 * fallback string below with your real ID (the part after /f/ in your Formspree
 * endpoint, e.g. "xanbqkpl"). Create the form at https://formspree.io.
 */
const FORMSPREE_ID =
  (import.meta.env.VITE_FORMSPREE_ID as string | undefined) || "xpqeebgn";

const BookNow = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSubmitting(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      navigate("/thank-you");
    } catch {
      setError(true);
      setSubmitting(false);
    }
  };

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>Book a Consultation | The Speech Coach</title>
        <meta
          name="description"
          content="Book a consultation with The Speech Coach. Tell us what you're working towards and we'll be in touch within 24 hours."
        />
        <link rel="canonical" href="https://www.thespeech.coach/book-now" />
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

      <section className="py-16 md:py-20 px-6 border-t border-border">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            {...fadeUp}
            className="bg-card border border-border rounded-xl p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  Full name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="organisation" className={labelClass}>
                  Organisation (optional)
                </label>
                <input
                  id="organisation"
                  name="organisation"
                  type="text"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="focus" className={labelClass}>
                  What would you like to work on?
                </label>
                <select id="focus" name="focus" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Please select…
                  </option>
                  <option>Public Speaking</option>
                  <option>Executive and Corporate</option>
                  <option>Accent and Pronunciation</option>
                  <option>Voice and Elocution</option>
                  <option>Online Coaching</option>
                  <option>Children's Coaching</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Anything else you'd like us to know?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={inputClass}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground border border-transparent hover:bg-background hover:text-primary hover:border-primary transition-all px-8 py-3 rounded-full font-body text-sm font-medium glow-gold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending…" : "Request a Consultation"}
                  {!submitting && <ArrowRight className="w-4 h-4" />}
                </button>
                {error && (
                  <p className="mt-4 font-body text-sm text-muted-foreground">
                    Something went wrong sending your message. Please try again, or email us
                    directly at{" "}
                    <a
                      href="mailto:info@thespeech.coach"
                      className="text-primary underline underline-offset-2"
                    >
                      info@thespeech.coach
                    </a>
                    .
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
      <StickyMobileCTA />
    </main>
  );
};

export default BookNow;
