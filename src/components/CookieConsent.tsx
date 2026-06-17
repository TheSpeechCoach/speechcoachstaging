import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Google Analytics 4 Measurement ID.
 * Set VITE_GA_MEASUREMENT_ID in your environment, OR replace the fallback
 * string below with your real ID (looks like "G-XXXXXXXXXX").
 * Get it from: Google Analytics > Admin > Data Streams > your web stream.
 * Until a real ID is set, no analytics are loaded.
 */
const GA_MEASUREMENT_ID =
  (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) || "G-MX6DK6M6PC";

const CONSENT_KEY = "tsc-cookie-consent";
const PROD_HOSTS = ["www.thespeech.coach", "thespeech.coach"];

/** Custom event other components (e.g. the footer) can fire to reopen the banner. */
export const COOKIE_SETTINGS_EVENT = "tsc:open-cookie-settings";

function gaConfigured() {
  return Boolean(GA_MEASUREMENT_ID) && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX";
}

function loadAnalytics() {
  // Never send analytics from staging/preview hosts, and never without a real ID.
  if (!gaConfigured()) return;
  if (!PROD_HOSTS.includes(window.location.hostname)) return;
  if (document.getElementById("ga4-src")) return;

  const w = window as unknown as { dataLayer: unknown[]; gtag: (...args: unknown[]) => void };
  const script = document.createElement("script");
  script.id = "ga4-src";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem(CONSENT_KEY);
    if (choice === "accepted") loadAnalytics();
    if (!choice) {
      setVisible(true);
      requestAnimationFrame(() => setMounted(true));
    }
    const reopen = () => {
      setVisible(true);
      requestAnimationFrame(() => setMounted(true));
    };
    window.addEventListener(COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  const close = () => {
    setMounted(false);
    setTimeout(() => setVisible(false), 250);
  };

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    loadAnalytics();
    close();
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    close();
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className={`fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 transition-opacity duration-300 motion-reduce:transition-none ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto max-w-3xl rounded-xl border border-border bg-card/95 backdrop-blur-md p-5 md:p-6 shadow-lg">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            We use cookies to understand how the site is used and improve it. You can accept
            analytics cookies or decline non-essential ones. See our{" "}
            <Link to="/privacy-policy" className="text-primary underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={decline}
              className="border border-border text-foreground hover:border-primary hover:text-primary transition-colors px-5 py-2 rounded-full font-body text-sm"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={accept}
              className="bg-primary text-primary-foreground border border-transparent hover:bg-background hover:text-primary hover:border-primary transition-all px-6 py-2 rounded-full font-body text-sm font-medium glow-gold"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
