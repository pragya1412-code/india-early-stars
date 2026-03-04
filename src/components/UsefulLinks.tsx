import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import whoWeHelpImg from "@/assets/who-we-help.jpg";
import ourServicesImg from "@/assets/our-services.jpg";
import aboutUsImg from "@/assets/about-us.jpg";
import careersImg from "@/assets/careers.jpg";

const links = [
  { image: whoWeHelpImg, title: "Who We Help", path: "/who-we-help", description: "We offer early intervention and therapy services for all ages, needs and abilities." },
  { image: ourServicesImg, title: "Our Services", path: "/our-services", description: "Our multi-disciplinary teams deliver evidence-based therapy services to help your child thrive." },
  { image: aboutUsImg, title: "About Us", path: "/about-us", description: "We are a national provider of early intervention therapy services helping families across India." },
  { image: careersImg, title: "Careers", path: "/careers", description: "Join our team for a brighter future in allied health where you can make a real difference." },
];

const UsefulLinks = () => {
  return (
    <section className="py-20 section-warm">
      <div className="container">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-12 text-center">
          Useful Links
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <motion.div key={link.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
              <Link to={link.path} className="group block bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-border/50">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={link.image} alt={link.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-sans group-hover:text-primary transition-colors">{link.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{link.description}</p>
                  <span className="text-primary text-sm font-medium mt-3 inline-block">Learn more →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsefulLinks;
