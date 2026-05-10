import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/public-speaking-coaching", label: "Public Speaking" },
  { to: "/elocution-voice-coaching", label: "Voice & Elocution" },
  { to: "/accent-coaching", label: "Accent Coaching" },
  { to: "/executive-corporate-coaching", label: "Executive Coaching" },
  { to: "/online-coaching", label: "Online Coaching" },
  { to: "/team-workshops", label: "Team Workshops" },
  { to: "/speech-coaching-children", label: "Children" },
  { to: "/pricing", label: "Pricing" },
];

const SiteNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <Link to="/" className="font-display text-xl tracking-tight">
          <span className="font-bold">The</span>
          <span className="italic text-gradient-gold">Speech</span>
          <span className="font-bold">.Coach</span>
        </Link>
        <div className="hidden lg:flex items-center gap-6 font-body text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a href="tel:+442071646769" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-3.5 h-3.5" />
            +44 (0)207 164 6769
          </a>
        </div>
        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6 font-body">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
              <a href="tel:+442071646769" className="text-muted-foreground hover:text-foreground flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                +44 (0)207 164 6769
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default SiteNav;
