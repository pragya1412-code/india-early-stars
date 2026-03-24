import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "919999999999";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-extrabold text-sm">E</span>
              </div>
              <span className="font-sans text-lg font-extrabold tracking-tight">
                Early<span className="text-primary">Intervention</span>Studio
              </span>
            </Link>
            <p className="text-secondary-foreground/70 text-sm mt-4 leading-relaxed">
              Expert autism therapy and early intervention services in Delhi. Powered by science + AI-driven insights.
            </p>
          </div>

          <div>
            <h4 className="font-extrabold text-base mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-secondary-foreground/70">
              <li><Link to="/our-services" className="hover:text-secondary-foreground transition-colors">ABA Therapy</Link></li>
              <li><Link to="/our-services" className="hover:text-secondary-foreground transition-colors">Speech Therapy</Link></li>
              <li><Link to="/our-services" className="hover:text-secondary-foreground transition-colors">Occupational Therapy</Link></li>
              <li><Link to="/our-services" className="hover:text-secondary-foreground transition-colors">Social Skills</Link></li>
              <li><Link to="/screening" className="hover:text-secondary-foreground transition-colors">Free Screening</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-secondary-foreground/70">
              <li><Link to="/about-us" className="hover:text-secondary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/ai-solutions" className="hover:text-secondary-foreground transition-colors">AI Solutions</Link></li>
              <li><Link to="/book-assessment" className="hover:text-secondary-foreground transition-colors">Book Assessment</Link></li>
              <li><Link to="/contact" className="hover:text-secondary-foreground transition-colors">Contact Us</Link></li>
              <li><Link to="/careers" className="hover:text-secondary-foreground transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /><span>+91 98XX XXX XXX</span></li>
              <li className="flex items-start gap-2">
                <MessageCircle className="h-4 w-4 mt-0.5 shrink-0" />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-secondary-foreground transition-colors">WhatsApp Us</a>
              </li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /><span>hello@earlyinterventionstudio.in</span></li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /><span>South Delhi, New Delhi, India</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10">
        <div className="container py-5 flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/50">
          <p>© {new Date().getFullYear()} Early Intervention Studio. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-secondary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-secondary-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
