import { Linkedin, Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

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

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        {/* Row A */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="font-display text-lg tracking-tight">
            <span className="font-bold">The</span>
            <span className="italic text-gradient-gold">Speech</span>
            <span className="font-bold">.Coach</span>
          </Link>
          <div className="flex items-center gap-5">
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
            © {currentYear} The Speech Coach Limited. Registered in England &amp; Wales. Company No. 11516901. ICO Registration No. ZA754577.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
