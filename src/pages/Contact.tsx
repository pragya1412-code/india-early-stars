import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "919999999999";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for reaching out. We'll get back to you soon." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-16 lg:py-20 bg-secondary text-secondary-foreground">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-extrabold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-secondary-foreground/80 max-w-2xl"
          >
            Get in touch with our team. We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 space-y-5"
          >
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">Full Name</label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">Email</label>
              <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">Phone</label>
              <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" />
            </div>
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">Message</label>
              <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={4} placeholder="How can we help?" />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">Send Message</Button>
          </motion.form>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="space-y-6">
            <div className="bg-card rounded-2xl p-7 border border-border/50 shadow-sm space-y-5">
              <h3 className="font-extrabold text-foreground text-lg">Get In Touch</h3>
              <div className="flex items-start gap-3 text-sm text-muted-foreground"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /> +91 98XX XXX XXX</div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MessageCircle className="h-4 w-4 mt-0.5 text-whatsapp shrink-0" />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-whatsapp font-bold hover:underline">WhatsApp Us</a>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /> hello@earlyinterventionstudio.in</div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground"><Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" /> Mon–Sat, 9:00 AM – 6:00 PM IST</div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> India</div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773123.20915617!2d61.024585!3d20.593684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m3!1s0x0%3A0x0!2zMjDCsDM1JzM3LjMiTiA2McKwMDEnMjguNSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Early Intervention Studio location in India"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
