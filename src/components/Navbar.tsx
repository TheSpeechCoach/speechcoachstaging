import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { heroVariants } from "@/data/heroVariants";

type ServiceLink = { to: string; label: string };
type ServiceCategory = { heading: string; links: ServiceLink[] };

const lostHeroLinks: ServiceLink[] = heroVariants.flatMap((v) => [
  { to: `/hero/3/${v.slug}`, label: `${v.title} · 3-line` },
  { to: `/hero/4/${v.slug}`, label: `${v.title} · 4-line` },
]);

const serviceCategories: ServiceCategory[] = [
  {
    heading: "Core Services",
    links: [
      { to: "/executive-corporate-coaching", label: "Executive Coaching" },
      { to: "/team-workshops", label: "Team Workshops" },
      { to: "/speech-coaching-children", label: "Children's Coaching" },
      { to: "/broadcast-media-coaching", label: "Broadcast & Media" },
      { to: "/public-speaking-coaching", label: "Public Speaking" },
      { to: "/presentation-skills-coaching", label: "Presentation Skills" },
      { to: "/communication-coaching", label: "Communication Coaching" },
      { to: "/elocution-voice-coaching", label: "Voice & Elocution" },
      { to: "/accent-coaching", label: "Accent Coaching" },
      { to: "/online-coaching", label: "Online Coaching" },
    ],
  },
  {
    heading: "By Audience",
    links: [
      { to: "/speech-coaching-leaders", label: "Leaders" },
      { to: "/speech-coaching-founders", label: "Founders" },
      { to: "/speech-coaching-professionals", label: "Professionals" },
      { to: "/speech-coaching-hospitality", label: "Hospitality" },
      { to: "/speech-coaching-medical", label: "Medical Professionals" },
      { to: "/speech-coaching-government", label: "Government" },
      { to: "/speech-coaching-charities", label: "Charities & Non-profit" },
      { to: "/speech-coaching-crypto", label: "Crypto & Blockchain" },
      { to: "/speech-coaching-united-nations", label: "United Nations" },
    ],
  },
  {
    heading: "By Topic",
    links: [
      { to: "/voice-coaching", label: "Voice Coaching" },
      { to: "/stammering-fluency-coaching", label: "Stammering & Fluency" },
      { to: "/leadership-communication-coaching", label: "Leadership Communication" },
    ],
  },
  {
    heading: "By Occasion",
    links: [
      { to: "/keynote-conference-coaching", label: "Keynote & Conference" },
      { to: "/pitch-coaching", label: "Pitch Coaching" },
      { to: "/negotiation-coaching", label: "Negotiations" },
      { to: "/sales-presentation-coaching", label: "Sales Presentation" },
      { to: "/media-training", label: "Media Training" },
      { to: "/interview-coaching", label: "Interview Coaching" },
      { to: "/wedding-speech-coaching", label: "Wedding Speech" },
    ],
  },
  {
    heading: "Specialist",
    links: [
      { to: "/speech-coaching-lawyers", label: "Lawyers & Advocacy" },
      { to: "/speech-coaching-teachers", label: "Teachers & Voice Health" },
      { to: "/speech-coaching-content-creators", label: "Content Creators" },
    ],
  },
  {
    heading: "Lost Hero Variants",
    links: lostHeroLinks,
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMobile = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

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
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                >
                  <div className="bg-background border border-border rounded-md shadow-lg p-6 grid grid-cols-5 gap-6 w-[min(90vw,1100px)]">
                    {serviceCategories.map((cat) => (
                      <div key={cat.heading} className="min-w-0">
                        <h3 className="font-display text-xs uppercase tracking-widest text-gradient-gold mb-3">
                          {cat.heading}
                        </h3>
                        <ul className="space-y-2">
                          {cat.links.map((s) => (
                            <li key={s.to}>
                              <Link
                                to={s.to}
                                onClick={() => setServicesOpen(false)}
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                              >
                                {s.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
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
            <div className="flex flex-col gap-4 p-6 font-body max-h-[80vh] overflow-y-auto">
              <a href="#about" onClick={closeMobile} className="text-muted-foreground hover:text-foreground">About</a>
              <div>
                <button
                  className="flex items-center justify-between w-full text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileServicesOpen((s) => !s)}
                  aria-expanded={mobileServicesOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pl-2 flex flex-col gap-5">
                        {serviceCategories.map((cat) => (
                          <div key={cat.heading}>
                            <h3 className="font-display text-xs uppercase tracking-widest text-gradient-gold mb-2">
                              {cat.heading}
                            </h3>
                            <ul className="flex flex-col gap-2">
                              {cat.links.map((s) => (
                                <li key={s.to}>
                                  <Link
                                    to={s.to}
                                    onClick={closeMobile}
                                    className="block text-sm text-muted-foreground hover:text-foreground"
                                  >
                                    {s.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <a href="#methodology" onClick={closeMobile} className="text-muted-foreground hover:text-foreground">Methodology</a>
              <a href="#cpd" onClick={closeMobile} className="text-muted-foreground hover:text-foreground">CPD</a>
              <a href="#faq" onClick={closeMobile} className="text-muted-foreground hover:text-foreground">FAQ</a>
              <a href="tel:+442071646769" className="text-muted-foreground hover:text-foreground flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                +44 (0)207 164 6769
              </a>
              <a href="#cta" onClick={closeMobile} className="border border-primary text-primary px-5 py-2 rounded-full text-sm text-center">
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
