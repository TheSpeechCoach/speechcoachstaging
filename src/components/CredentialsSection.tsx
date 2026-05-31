import { motion } from "framer-motion";

const logoBase = "https://www.thespeech.coach/staging26/wp-content/uploads/2026/04";
const logos = [
  `${logoBase}/9.png`,
  `${logoBase}/10-1.png`,
  `${logoBase}/11-1.png`,
  `${logoBase}/12-1.png`,
  `${logoBase}/1-1.png`,
  `${logoBase}/2-1.png`,
  `${logoBase}/3-1.png`,
  `${logoBase}/4-1.png`,
  `${logoBase}/5-1.png`,
  `${logoBase}/6-1.png`,
  `${logoBase}/7-1.png`,
  `${logoBase}/8-1.png`,
];

const CredentialsSection = () => {
  // duplicate for seamless marquee
  const loop = [...logos, ...logos];
  return (
    <section className="py-16 md:py-20 border-t border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-10"
        >
          Trusted by
        </motion.h2>
      </div>
      <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex gap-16 animate-[marquee_40s_linear_infinite] w-max hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loop.map((src, i) => (
            <div key={i} className="flex items-center justify-center h-16 md:h-20 px-4 shrink-0">
              <img
                src={src}
                alt="Client logo"
                className="max-h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
