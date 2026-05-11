import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const services = [
  { to: "/public-speaking-coaching", label: "Public Speaking" },
  { to: "/elocution-voice-coaching", label: "Voice & Elocution" },
  { to: "/accent-coaching", label: "Accent Coaching" },
  { to: "/executive-corporate-coaching", label: "Executive Coaching" },
  { to: "/presentation-skills-coaching", label: "Presentation Skills" },
  { to: "/communication-coaching", label: "Communication Coaching" },
  { to: "/online-coaching", label: "Online Coaching" },
  { to: "/team-workshops", label: "Team Workshops" },
  { to: "/speech-coaching-children", label: "Children" },
  { to: "/broadcast-media-coaching", label: "Broadcast & Media" },
];

const SiteNav = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <Link to="/" className="font-display text-xl tracking-tight">
          <span className="font-bold">The</span>
          <span className="italic text-gradient-gold">Speech</span>
          <span className="font-bold">.Coach</span>
        </Link>
        <div className="hidden lg:flex items-center gap-6 font-body text-sm">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`
            }
          >
            Home
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setServicesOpen((s) => !s)}
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full pt-3 min-w-[260px]"
                >
                  <div className="bg-background border border-border rounded-md shadow-lg py-2">
                    {services.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`
            }
          >
            Pricing
          </NavLink>

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
              <Link to="/" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
              {services.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {s.label}
                </Link>
              ))}
              <Link to="/pricing" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
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
