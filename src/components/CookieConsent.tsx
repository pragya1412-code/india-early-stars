import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const STORAGE_KEY = "eis-cookie-consent-v1";

type Choice = "accepted" | "essential";

export function getCookieConsent(): Choice | null {
  if (typeof window === "undefined") return null;
  return (localStorage.getItem(STORAGE_KEY) as Choice | null) ?? null;
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getCookieConsent()) {
      // slight delay so it doesn't fight the hero animation
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const decide = (choice: Choice) => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 rounded-2xl border border-ink/10 bg-background/95 backdrop-blur-xl shadow-xl p-5 animate-fade-in"
    >
      <button
        type="button"
        onClick={() => decide("essential")}
        aria-label="Dismiss cookie banner and keep essential only"
        className="absolute top-2 right-2 inline-flex items-center justify-center min-h-11 min-w-11 rounded-full text-ink/60 hover:text-ink hover:bg-ink/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <X aria-hidden="true" className="h-4 w-4" />
      </button>
      <h2 className="font-display text-base font-semibold text-ink mb-1.5">
        A note on cookies
      </h2>
      <p className="text-[13px] leading-relaxed text-ink-soft mb-4">
        We use essential cookies to run this site, and optional analytics to
        understand how families find us. You can change your mind anytime in{" "}
        <Link to="/cookie-preferences" className="underline underline-offset-2 hover:text-ink">
          cookie preferences
        </Link>
        .
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="hero" size="sm" className="min-h-11" onClick={() => decide("accepted")}>
          Accept all
        </Button>
        <Button variant="outline" size="sm" className="min-h-11" onClick={() => decide("essential")}>
          Essential only
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
