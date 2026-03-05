import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
      <PageHero title="Contact Us" subtitle="Get in touch with our team. We'd love to hear from you." />
      <section className="py-16">
        <div className="container grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
              <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={4} placeholder="How can we help?" />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">Send Message</Button>
          </motion.form>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm space-y-4">
              <h3 className="font-semibold text-foreground text-lg">Get In Touch</h3>
              <div className="flex items-start gap-3 text-sm text-muted-foreground"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /> 1800-XXX-XXXX (Toll Free)</div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /> info@earlystartindia.in</div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground"><Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" /> Mon–Sat, 9:00 AM – 6:00 PM IST</div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> Delhi</div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
