const StickyMobileCTA = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-background/95 backdrop-blur-md border-t border-border">
    <a
      href="https://www.thespeech.coach/book-now/"
      target="_blank"
      rel="noopener"
      className="block w-full text-center bg-primary text-primary-foreground hover:bg-primary/90 transition-all px-6 py-3 rounded-full font-body text-sm font-medium glow-gold"
    >
      Book a Consultation
    </a>
  </div>
);

export default StickyMobileCTA;
