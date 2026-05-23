import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const links = [
  { to: "/public-speaking-coaching", label: "Public Speaking Coaching" },
  { to: "/elocution-voice-coaching", label: "Voice & Elocution" },
  { to: "/accent-coaching", label: "Accent Coaching" },
  { to: "/executive-corporate-coaching", label: "Executive Coaching" },
  { to: "/online-coaching", label: "Online Coaching" },
];

const ThankYou = () => (
  <main className="bg-background text-foreground min-h-screen flex flex-col">
    <Helmet>
      <title>Thank You | The Speech Coach</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <SiteNav />
    <section className="flex-1 flex items-center justify-center px-6 pt-28 md:pt-32 pb-16 md:pb-20">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Thank You — <span className="italic text-gradient-gold">We'll Be in Touch Shortly.</span>
        </motion.h1>
        <p className="font-body text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Your message has been received. A member of The Speech Coach team will get back to you within
          24 hours. In the meantime, explore our services below.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group flex items-center justify-between gap-3 p-5 rounded-lg border border-border bg-card/40 hover:border-primary/50 transition-all text-left"
            >
              <span className="font-body text-foreground/90">{l.label}</span>
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </section>
    <SiteFooter />
  </main>
);

export default ThankYou;
