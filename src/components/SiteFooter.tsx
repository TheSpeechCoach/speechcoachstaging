import { Link } from "react-router-dom";
import { Linkedin, Youtube, Instagram, Phone, Mail } from "lucide-react";

const services = [
  { to: "/public-speaking-coaching", label: "Public Speaking" },
  { to: "/elocution-voice-coaching", label: "Voice & Elocution" },
  { to: "/accent-coaching", label: "Accent Coaching" },
  { to: "/executive-corporate-coaching", label: "Executive Coaching" },
  { to: "/presentation-skills-coaching", label: "Presentation Skills" },
  { to: "/communication-coaching", label: "Communication Coaching" },
  { to: "/online-coaching", label: "Online Coaching" },
  { to: "/team-workshops", label: "Team Workshops" },
  { to: "/speech-coaching-children", label: "Children's Coaching" },
  { to: "/pricing", label: "Pricing" },
];

const SiteFooter = () => {
  return (
    <footer className="border-t border-border py-16 mt-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="font-display text-xl tracking-tight">
              <span className="font-bold">The</span>
              <span className="italic text-gradient-gold">Speech</span>
              <span className="font-bold">.Coach</span>
            </Link>
            <p className="font-body text-sm text-muted-foreground mt-4 max-w-xs">
              Bespoke speech, voice and communication coaching for professionals worldwide.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.linkedin.com/in/thespeechcoach" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2 font-body text-sm">
              {services.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="text-muted-foreground hover:text-foreground transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <a href="tel:+442071646769" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  +44 (0)207 164 6769
                </a>
              </li>
              <li>
                <a href="mailto:info@thespeech.coach" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  info@thespeech.coach
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} The Speech Coach Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
