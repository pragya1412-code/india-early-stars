import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const centres = [
  { city: "Delhi", address: "A-12, Hauz Khas, New Delhi 110016", phone: "+91 11 XXXX XXXX", hours: "Mon–Sat, 9 AM – 6 PM" },
  { city: "Mumbai", address: "301, Bandra West, Mumbai 400050", phone: "+91 22 XXXX XXXX", hours: "Mon–Sat, 9 AM – 6 PM" },
  { city: "Bangalore", address: "45, Indiranagar, Bangalore 560038", phone: "+91 80 XXXX XXXX", hours: "Mon–Sat, 9 AM – 6 PM" },
  { city: "Chennai", address: "18, Adyar, Chennai 600020", phone: "+91 44 XXXX XXXX", hours: "Mon–Sat, 9 AM – 6 PM" },
  { city: "Kolkata", address: "7, Salt Lake, Kolkata 700091", phone: "+91 33 XXXX XXXX", hours: "Mon–Sat, 9 AM – 6 PM" },
  { city: "Hyderabad", address: "22, Jubilee Hills, Hyderabad 500033", phone: "+91 40 XXXX XXXX", hours: "Mon–Sat, 9 AM – 6 PM" },
];

const FindACentre = () => (
  <Layout>
    <PageHero title="Find a Centre" subtitle="Visit one of our therapy centres across India. We're growing to be closer to you." />
    <section className="py-16">
      <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {centres.map((c, i) => (
          <motion.div key={c.city} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-3">{c.city}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {c.address}</div>
              <div className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {c.phone}</div>
              <div className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {c.hours}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default FindACentre;
