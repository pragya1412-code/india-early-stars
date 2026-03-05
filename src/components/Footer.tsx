import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-block">
              <span className="font-sans text-xl font-bold tracking-tight">
                Early<span className="text-primary">Intervention</span>Studio
              </span>
            </Link>
            <p className="text-secondary-foreground/70 text-sm mt-4 leading-relaxed">
              Providing early childhood intervention services and support for young children and families in Delhi.
            </p>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-base mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><Link to="/our-services" className="hover:text-secondary-foreground transition-colors">Occupational Therapy</Link></li>
              <li><Link to="/our-services" className="hover:text-secondary-foreground transition-colors">Speech Therapy</Link></li>
              <li><Link to="/our-services" className="hover:text-secondary-foreground transition-colors">Psychology</Link></li>
              <li><Link to="/our-services" className="hover:text-secondary-foreground transition-colors">Physiotherapy</Link></li>
              <li><Link to="/our-services" className="hover:text-secondary-foreground transition-colors">Assessments</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><Link to="/about-us" className="hover:text-secondary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/find-a-centre" className="hover:text-secondary-foreground transition-colors">Find a Centre</Link></li>
              <li><Link to="/careers" className="hover:text-secondary-foreground transition-colors">Careers</Link></li>
              <li><Link to="/news-events" className="hover:text-secondary-foreground transition-colors">News & Events</Link></li>
              <li><Link to="/contact" className="hover:text-secondary-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /><span>1800-XXX-XXXX</span></li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /><span>info@earlystartindia.in</span></li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /><span>Delhi</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/50">
          <p>© {new Date().getFullYear()} Early Start India. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-secondary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
