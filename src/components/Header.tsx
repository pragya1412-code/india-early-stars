import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logoFull from "@/assets/logo-full.png.asset.json";
import logoMark from "@/assets/logo-mark.png.asset.json";


const navItems = [
  { label: "Philosophy", path: "/about-us" },
  { label: "Programs", path: "/our-services" },
  { label: "Our Team", path: "/our-team" },
  { label: "Journey", path: "/#journey" },
  { label: "Experience", path: "/#experience" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-ink/5" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Early Intervention Studio - Home">
          <img
            src={logoFull.url}
            alt="Early Intervention Studio"
            className="hidden sm:block h-11 lg:h-12 w-auto"
            width="740"
            height="444"
            decoding="async"
          />
          <img
            src={logoMark.url}
            alt="Early Intervention Studio"
            className="sm:hidden h-10 w-auto"
            width="450"
            height="487"
            decoding="async"
          />
        </Link>


        <nav className="hidden lg:flex items-center gap-9">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `text-[13px] tracking-wide text-ink/70 hover:text-ink transition-colors reveal-line ${
                  isActive ? "text-ink" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/book-assessment">
            <Button variant="hero" size="sm" className="px-5">Book a visit</Button>
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden text-ink inline-flex items-center justify-center min-h-11 min-w-11 -mr-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-ink/5 bg-background/95 backdrop-blur-xl animate-fade-in">
          <div className="container py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-base text-ink py-3 border-b border-ink/5"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/book-assessment" onClick={() => setMobileOpen(false)} className="mt-4">
              <Button variant="hero" className="w-full">Book a visit</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
