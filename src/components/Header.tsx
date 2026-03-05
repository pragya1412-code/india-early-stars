import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Who We Help", path: "/who-we-help" },
  { label: "What We Help With", path: "/what-we-help-with" },
  { label: "Our Services", path: "/our-services" },
  { label: "About Us", path: "/about-us" },
  { label: "News & Events", path: "/news-events" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-sans text-xl font-bold text-secondary tracking-tight">
            Early<span className="text-primary">Intervention</span>Studio
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/make-a-referral"><Button variant="nav" size="sm">Make a Referral</Button></Link>
          <Button variant="ghost" size="sm" className="gap-1.5">
            <Search className="h-4 w-4" /> Search
          </Button>
          <Link to="/find-a-centre"><Button variant="nav" size="sm">Find a Centre</Button></Link>
          <Button variant="ghost" size="sm" className="gap-1.5">
            <Phone className="h-4 w-4" /> 1800-XXX-XXXX
          </Button>
          <Link to="/enquire"><Button variant="navFilled" size="sm">Start Your Booking</Button></Link>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <nav className="hidden lg:block border-t border-border">
        <div className="container flex items-center gap-8 py-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-sm font-medium text-foreground hover:text-primary py-2 border-b border-border/50"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3">
              <Link to="/enquire" onClick={() => setMobileOpen(false)}><Button variant="hero" className="w-full">Start Your Booking</Button></Link>
              <Link to="/make-a-referral" onClick={() => setMobileOpen(false)}><Button variant="heroOutline" className="w-full">Make a Referral</Button></Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
