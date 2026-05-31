interface MarqueeProps {
  items: string[];
  durationSeconds?: number;
}

const Marquee = ({ items, durationSeconds = 40 }: MarqueeProps) => {
  const loop = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
    >
      <div
        className="flex w-max items-center animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        {loop.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="font-display text-2xl md:text-3xl text-muted-foreground px-6">
              {item}
            </span>
            <span className="text-primary text-2xl md:text-3xl">·</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
