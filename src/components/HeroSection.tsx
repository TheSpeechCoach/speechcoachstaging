import { motion } from "framer-motion";
import { useRef } from "react";
import useFitHeroText from "@/hooks/useFitHeroText";

const HeroSection = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const heroFontSize = useFitHeroText(h1Ref, { maxPx: 96, minPx: 24 });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle radial gold glow */}
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
          <h1
            ref={h1Ref}
            style={{ fontSize: heroFontSize }}
            className="font-display font-bold leading-[1.05] tracking-tight mb-8 flex flex-col items-start"
          >
            <span className="w-max whitespace-nowrap">You tried YouTube.</span>
            <span className="w-max whitespace-nowrap">You tried AI.</span>
            <span className="w-max whitespace-nowrap italic text-gradient-gold">Now you're here.</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-10"
          >
            …with over 30 years of expert speech coaching that transforms nervous speakers into confident, compelling communicators.
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
  );
};

export default HeroSection;
