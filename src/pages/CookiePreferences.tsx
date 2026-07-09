import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

const STORAGE_KEY = "eis-cookie-consent-v1";

type Choice = "accepted" | "essential";

const CookiePreferences = () => {
  const { toast } = useToast();
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const stored = (typeof window !== "undefined"
      ? (localStorage.getItem(STORAGE_KEY) as Choice | null)
      : null);
    setAnalytics(stored === "accepted");
  }, []);

  const save = () => {
    const choice: Choice = analytics ? "accepted" : "essential";
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    toast({
      title: "Preferences saved",
      description: analytics
        ? "Analytics cookies are enabled. Thank you."
        : "Only essential cookies will be used.",
    });
  };

  const reset = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setAnalytics(false);
    toast({
      title: "Preferences cleared",
      description: "You will be asked again on your next visit.",
    });
  };

  return (
    <Layout>
      <PageHero
        title="Cookie preferences"
        subtitle="You are in control of how we use cookies on this site. Update your choices anytime."
      />

      <section className="py-16 lg:py-20">
        <div className="container max-w-3xl">
          <div className="space-y-6">
            <article className="rounded-2xl border border-ink/10 bg-card p-6 shadow-sm">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="font-display text-xl text-ink mb-1">Essential cookies</h2>
                  <p className="text-sm text-muted-foreground">
                    Required to run the site, remember your consent choice and keep pages
                    secure. These are always on.
                  </p>
                </div>
                <Switch checked disabled aria-label="Essential cookies (always on)" />
              </div>
            </article>

            <article className="rounded-2xl border border-ink/10 bg-card p-6 shadow-sm">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="font-display text-xl text-ink mb-1">Analytics cookies</h2>
                  <p className="text-sm text-muted-foreground">
                    Help us understand which pages families read most, so we can make the
                    information clearer. No personal identifiers are stored.
                  </p>
                </div>
                <Switch
                  checked={analytics}
                  onCheckedChange={setAnalytics}
                  aria-label="Enable analytics cookies"
                />
              </div>
            </article>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="hero" onClick={save} className="min-h-11">
              Save preferences
            </Button>
            <Button variant="outline" onClick={reset} className="min-h-11">
              Reset choices
            </Button>
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            For more detail on how we handle your data, please read our{" "}
            <a href="/privacy-policy" className="underline underline-offset-2 hover:text-ink">
              privacy policy
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default CookiePreferences;
