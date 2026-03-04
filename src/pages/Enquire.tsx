import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Enquire = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", childAge: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Enquiry Received!", description: "Thank you! Our team will contact you within 24 hours to help you get started." });
    setForm({ name: "", email: "", phone: "", childAge: "", service: "", message: "" });
  };

  return (
    <Layout>
      <PageHero title="Start Your Booking" subtitle="Enquire now to begin your child's therapy journey. Our team will guide you every step of the way." />
      <section className="py-16">
        <div className="container max-w-xl mx-auto">
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Parent / Guardian Name</label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Full name" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Child's Age</label>
                <Input value={form.childAge} onChange={(e) => setForm({ ...form, childAge: e.target.value })} placeholder="e.g. 4 years" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Service Interested In</label>
                <Input value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} placeholder="e.g. Speech Therapy" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Tell Us More</label>
              <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} placeholder="Any specific concerns or questions..." />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">Submit Enquiry</Button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Enquire;
