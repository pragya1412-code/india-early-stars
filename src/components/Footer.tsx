import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logoMark from "@/assets/logo-mark.png.asset.json";


const Footer = () => {
  return (
    <footer className="bg-ink text-cream/90">
      <div className="container py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={logoMark.url}
                alt=""
                aria-hidden="true"
                className="h-14 w-auto"
                width="450"
                height="487"
              />
              <span className="serif text-xl text-cream leading-tight">Early Intervention Studio</span>
            </div>
            <h3 className="serif text-2xl md:text-3xl text-cream leading-tight max-w-md text-balance">
              A quieter place to begin your child's biggest steps.
            </h3>
            <p className="text-cream/60 text-sm mt-6 max-w-sm leading-relaxed">
              A private early-intervention practice for families seeking thoughtful, evidence-led care.
            </p>
          </div>


          <div className="lg:col-span-3">
            <p className="eyebrow text-cream/50 mb-5">Visit</p>
            <ul className="space-y-3 text-sm text-cream/75">
              <li className="flex items-start gap-2.5"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" /><span>India</span></li>
              <li className="flex items-start gap-2.5"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" /><span>+91 98 1000 1000</span></li>
              <li className="flex items-start gap-2.5"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" /><span>hello@earlyinterventionstudio.in</span></li>
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
           <Link to="/cookie-preferences" className="hover:text-cream/80">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
