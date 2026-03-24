import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Our Services", path: "/our-services" },
  { label: "AI Solutions", path: "/ai-solutions" },
  { label: "Screening", path: "/screening" },
  { label: "About Us", path: "/about-us" },
  { label: "Contact", path: "/contact" },
];

const WHATSAPP_NUMBER = "919999999999";
const WHATSAPP_MSG = encodeURIComponent("Hi, I want to know more about autism therapy for my child.");

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-extrabold text-lg">E</span>
          </div>
          <span className="font-sans text-lg font-extrabold text-foreground tracking-tight">
            Early<span className="text-primary">Intervention</span>Studio
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="text-sm font-bold text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="sm" className="gap-1.5">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </Button>
          </a>
          <Link to="/book-assessment">
            <Button variant="hero" size="sm">Book Assessment</Button>
          </Link>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-sm font-bold text-foreground hover:text-primary py-2.5 border-b border-border/50"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3">
              <Link to="/book-assessment" onClick={() => setMobileOpen(false)}>
                <Button variant="hero" className="w-full">Book Assessment</Button>
              </Link>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                <Button variant="whatsapp" className="w-full gap-1.5">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
