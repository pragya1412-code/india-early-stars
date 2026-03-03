import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Search, Menu, X } from "lucide-react";

const navItems = [
  "Who We Help",
  "What We Help With",
  "Our Services",
  "About Us",
  "News & Events",
  "Careers",
  "Contact",
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="container flex items-center justify-between py-3">
        <a href="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold text-secondary">
            early<span className="text-primary">Start</span>
          </span>
          <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">India</span>
        </a>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="nav" size="sm">Make a Referral</Button>
          <Button variant="ghost" size="sm" className="gap-1.5">
            <Search className="h-4 w-4" /> Search
          </Button>
          <Button variant="nav" size="sm">Find a Centre</Button>
          <Button variant="ghost" size="sm" className="gap-1.5">
            <Phone className="h-4 w-4" /> 1800-XXX-XXXX
          </Button>
          <Button variant="navFilled" size="sm">Start Your Booking</Button>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:block border-t border-border">
        <div className="container flex items-center gap-8 py-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-medium text-foreground hover:text-primary py-2 border-b border-border/50"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-3">
              <Button variant="hero">Start Your Booking</Button>
              <Button variant="heroOutline">Make a Referral</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
