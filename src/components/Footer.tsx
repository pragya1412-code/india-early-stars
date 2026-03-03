import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-bold">
              early<span className="text-primary">Start</span>
            </span>
            <span className="text-xs font-medium tracking-wider uppercase ml-2 text-secondary-foreground/60">India</span>
            <p className="text-secondary-foreground/70 text-sm mt-4 leading-relaxed">
              Providing early childhood intervention services and support for young children and families across India.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-semibold text-base mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Occupational Therapy</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Speech Therapy</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Psychology</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Physiotherapy</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Assessments</a></li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Find a Centre</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">News & Events</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span>1800-XXX-XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>info@earlystartindia.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Delhi · Mumbai · Bangalore · Chennai · Kolkata</span>
              </li>
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
