import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does speech coaching cost?",
    a: "Pricing depends on the type of coaching, the number of sessions and whether it is for an individual or a team. Individual 1:1 sessions and packages are available. Corporate team workshops are priced on application. Please get in touch for a personalised quote.",
  },
  {
    q: "How many sessions will I need?",
    a: "This depends on what you're working on. Some clients come for a single intensive session. Others work on an ongoing programme over several months. In your introductory consultation, we'll give you an honest recommendation.",
  },
  {
    q: "Do you offer online sessions?",
    a: "Yes. All coaching is available online via Zoom. The Speech Coach works with clients in over 30 countries. Online sessions are equally as effective as in-person sessions.",
  },
  {
    q: "Do you offer in-person sessions?",
    a: "Yes. In-person sessions are available in London. Please get in touch to discuss locations and availability.",
  },
  {
    q: "What is the difference between speech coaching and speech therapy?",
    a: "Speech therapy is a clinical service for medical or developmental conditions. Speech coaching is for people who communicate perfectly well but want to do it significantly better — more confidently, clearly, and with greater impact.",
  },
  {
    q: "What happens in the introductory consultation?",
    a: "A 20-minute call — no obligation. We'll talk about what you want to work on, answer questions, and let you know how we'd approach your coaching.",
  },
  {
    q: "Do you work with companies and teams?",
    a: "Yes. We offer team workshops and bespoke corporate programmes for teams of 5 to 50 people, online or in-person.",
  },
  {
    q: "Do you work with children?",
    a: "Yes. 1:1 coaching for children and teenagers aged 8–17.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most clients notice a meaningful difference within the first two or three sessions.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const Pricing = () => (
  <main className="bg-background text-foreground min-h-screen">
    <Helmet>
      <title>Speech Coaching Prices & FAQs | The Speech Coach</title>
      <meta
        name="description"
        content="Find out about speech coaching prices, packages and how sessions work. Answers to the most common questions about working with The Speech Coach."
      />
      <link rel="canonical" href="https://www.thespeech.coach/pricing" />
    </Helmet>

    <SiteNav />

    <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="container mx-auto max-w-3xl relative text-center">
        <motion.h1 {...fadeUp} className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
          Pricing & <span className="italic text-gradient-gold">Frequently Asked Questions</span>
        </motion.h1>
        <motion.p {...fadeUp} className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
          Every coaching programme is bespoke — built around you, your goals and your schedule. Below
          you'll find answers to the most common questions we receive.
        </motion.p>
      </div>
    </section>

    <section className="py-16 md:py-20 px-6 border-t border-border">
      <div className="container mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="font-display text-left text-lg md:text-xl hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground text-base leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <section className="py-16 md:py-20 px-6 border-t border-border">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl font-bold mb-6">
          Still have a <span className="italic text-gradient-gold">question?</span>
        </motion.h2>
        <motion.p {...fadeUp} className="font-body text-lg text-muted-foreground mb-10">
          Get in touch — we're happy to help. Book a consultation today.
        </motion.p>
        <Link
          to="/book-now"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground border border-transparent hover:bg-background hover:text-primary hover:border-primary transition-all px-8 py-4 rounded-full font-body text-sm font-medium glow-gold"
        >
          Book a Consultation
          <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-xs text-muted-foreground mt-3 text-center">
          By booking, you agree to our{" "}
          <Link to="/terms-and-conditions" className="underline underline-offset-2 hover:text-primary transition-colors">
            Terms &amp; Conditions
          </Link>{" "}
          and{" "}
          <Link to="/privacy-policy" className="underline underline-offset-2 hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>

    <SiteFooter />
    <StickyMobileCTA />
  </main>
);

export default Pricing;
