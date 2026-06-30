import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-ink text-cream/90">
      <div className="container py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h3 className="serif text-3xl md:text-4xl text-cream leading-tight max-w-md text-balance">
              A quieter place to begin your child's biggest steps.
            </h3>
            <p className="text-cream/60 text-sm mt-6 max-w-sm leading-relaxed">
              Early Intervention Studio is a private early-intervention practice for families seeking thoughtful, evidence-led care.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-cream/50 mb-5">Visit</p>
            <ul className="space-y-3 text-sm text-cream/75">
              <li className="flex items-start gap-2.5"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" /><span>14 Aurobindo Marg, South Delhi 110016</span></li>
              <li className="flex items-start gap-2.5"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" /><span>+91 98 1000 1000</span></li>
              <li className="flex items-start gap-2.5"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" /><span>hello@studio-eveil.in</span></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-cream/50 mb-5">Explore</p>
            <ul className="space-y-3 text-sm text-cream/75">
              <li><Link to="/about-us" className="hover:text-cream reveal-line">Philosophy</Link></li>
              <li><Link to="/our-services" className="hover:text-cream reveal-line">Programs</Link></li>
              <li><Link to="/screening" className="hover:text-cream reveal-line">Gentle check</Link></li>
              <li><Link to="/careers" className="hover:text-cream reveal-line">Careers</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-cream/50 mb-5">Hours</p>
            <ul className="space-y-3 text-sm text-cream/75">
              <li>Mon – Sat</li>
              <li>9 am – 6:30 pm</li>
              <li className="text-cream/50">By appointment</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center text-xs text-cream/45 gap-3">
          <p>© {new Date().getFullYear()} Early Intervention Studio</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-cream/80">Privacy</Link>
            <Link to="/terms-of-service" className="hover:text-cream/80">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
