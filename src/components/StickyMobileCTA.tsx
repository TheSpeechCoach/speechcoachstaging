import { Link } from "react-router-dom";

const StickyMobileCTA = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-background/95 backdrop-blur-md border-t border-border">
    <Link
      to="/book-now"
      className="block w-full text-center bg-primary text-primary-foreground border border-transparent hover:bg-background hover:text-primary hover:border-primary transition-all px-6 py-3 rounded-full font-body text-sm font-medium glow-gold"
    >
      Book a Consultation
    </Link>
  </div>
);

export default StickyMobileCTA;
