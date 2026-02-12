import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <a href="#" className="font-display text-xl tracking-tight">
          <span className="font-bold">The</span>
          <span className="italic text-gradient-gold">Speech</span>
          <span className="font-bold">.Coach</span>
        </a>
        <div className="hidden md:flex items-center gap-8 font-body text-sm">
          <a href="#pain-points" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Results</a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          <a href="#cta" className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all px-5 py-2 rounded-full text-sm">
            Let's Talk
          </a>
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6 font-body">
              <a href="#pain-points" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground">About</a>
              <a href="#services" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground">Services</a>
              <a href="#testimonials" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground">Results</a>
              <a href="#faq" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground">FAQ</a>
              <a href="#cta" onClick={() => setMenuOpen(false)} className="border border-primary text-primary px-5 py-2 rounded-full text-sm text-center">
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
