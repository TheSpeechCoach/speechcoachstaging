import AnimatedCounter from "@/components/AnimatedCounter";

const StatsStrip = () => (
  <section className="bg-background py-20 md:py-28 border-t border-border/30">
    <div className="container max-w-5xl mx-auto px-6 text-center">
      <div className="font-display font-bold text-7xl md:text-8xl lg:text-9xl leading-none mb-6">
        <AnimatedCounter target={3000} className="text-gradient-gold" />
      </div>
      <p className="font-display text-xl md:text-2xl text-white">
        clients successfully supported, worldwide<span>*</span>
      </p>
    </div>
  </section>
);

export default StatsStrip;
