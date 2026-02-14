import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Speaker on stage with golden spotlights" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-8"
          >
            Inspire • Engage • Influence
          </motion.p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8">
            Find your{" "}
            <span className="italic text-gradient-gold">voice</span>,
            <br />
            own the{" "}
            <span className="font-bold italic">room</span>
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
            className="inline-block border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all px-8 py-3 rounded-full font-body text-sm tracking-wide"
          >
            Let's talk about you
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
