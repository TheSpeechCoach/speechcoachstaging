import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { label: "Public Speaking", to: "/public-speaking-coaching" },
  { label: "Voice & Elocution", to: "/elocution-voice-coaching" },
  { label: "Accent Coaching", to: "/accent-coaching" },
  { label: "Executive Coaching", to: "/executive-corporate-coaching" },
  { label: "Presentation Skills", to: "/presentation-skills-coaching" },
  { label: "Communication Coaching", to: "/communication-coaching" },
  { label: "Online Coaching", to: "/online-coaching" },
  { label: "Team Workshops", to: "/team-workshops" },
  { label: "Children & Teens", to: "/speech-coaching-children" },
  { label: "Broadcast & Media", to: "/broadcast-media-coaching" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <Link to="/" className="font-display text-xl tracking-tight">
          <span className="font-bold">The</span>
          <span className="italic text-gradient-gold">Speech</span>
          <span className="font-bold">.Coach</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-body text-sm">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              Services
              <ChevronDown className="w-3 h-3" />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                >
                  <div className="min-w-[240px] bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-xl py-2">
                    {services.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#methodology" className="text-muted-foreground hover:text-foreground transition-colors">Methodology</a>
          <a href="#cpd" className="text-muted-foreground hover:text-foreground transition-colors">CPD</a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          <a href="tel:+442071646769" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-3.5 h-3.5" />
            +44 (0)207 164 6769
          </a>
          <a href="#cta" className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all px-5 py-2 rounded-full text-sm">
            Contact Us
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
              <a href="#about" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground">About</a>
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-wider text-primary/80">Services</span>
                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={() => setMenuOpen(false)}
                    className="text-muted-foreground hover:text-foreground pl-3"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
              <a href="#methodology" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground">Methodology</a>
              <a href="#cpd" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground">CPD</a>
              <a href="#faq" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground">FAQ</a>
              <a href="tel:+442071646769" className="text-muted-foreground hover:text-foreground flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                +44 (0)207 164 6769
              </a>
              <a href="#cta" onClick={() => setMenuOpen(false)} className="border border-primary text-primary px-5 py-2 rounded-full text-sm text-center">
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
