const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-display text-lg tracking-tight">
          <span className="font-bold">The</span>
          <span className="italic text-gradient-gold">Speech</span>
          <span className="font-bold">.Coach</span>
        </a>
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} The Speech Coach. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
