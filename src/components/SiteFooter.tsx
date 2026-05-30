import { Link } from "react-router-dom";
import { Linkedin, Youtube, Instagram, Phone, Mail } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a8.16 8.16 0 0 0 4.77 1.52V6.79a4.85 4.85 0 0 1-1.84-.1Z" />
  </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21.94 4.32 18.7 19.61c-.24 1.08-.88 1.34-1.78.83l-4.92-3.62-2.37 2.28c-.26.26-.48.48-.99.48l.35-5.02 9.13-8.25c.4-.35-.09-.55-.61-.2L6.22 13.27 1.36 11.75c-1.06-.33-1.08-1.06.22-1.57l19-7.32c.88-.33 1.65.2 1.36 1.46Z" />
  </svg>
);

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
            <Link to="/" className="flex items-center gap-3 font-display text-3xl tracking-tight">
              <img src="/White.png" alt="" className="h-10 w-auto" />
              <span className="font-display text-foreground flex items-baseline leading-none gap-2">
                <span className="font-bold">The</span>
                <span className="italic text-gradient-gold">Speech</span>
                <span className="font-bold">Coach</span>
              </span>
            </Link>
            <p className="font-body text-sm text-muted-foreground mt-4 max-w-xs">
              Bespoke speech, voice and communication coaching for professionals worldwide.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/thespeechcoach" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a aria-label="YouTube" href="https://www.youtube.com/@TheSpeechCoach" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a aria-label="Instagram" href="https://www.instagram.com/thespeech.coach" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a aria-label="TikTok" href="https://www.tiktok.com/@thespeechcoach" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a aria-label="Telegram" href="https://t.me/thespeechcoach" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <TelegramIcon className="w-5 h-5" />
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
        {/* Row B — legal links */}
        <div className="mt-6 pt-6 border-t border-border/40 text-center md:text-left">
          <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <span className="text-muted-foreground mx-2">•</span>
          <Link to="/terms-and-conditions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Terms &amp; Conditions
          </Link>
        </div>

        {/* Row C — disclaimer + copyright */}
        <div className="mt-4 text-center md:text-left text-xs text-muted-foreground/70 leading-relaxed">
          <p>
            <span className="text-foreground/50">*</span>The 3,000+ figure reflects both clinical and non-clinical clients successfully supported since 1995.
          </p>
          <p>
            © {new Date().getFullYear()} The Speech Coach Limited. Registered in England &amp; Wales. Company No. 11516901. ICO Registration No. ZA754577.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
