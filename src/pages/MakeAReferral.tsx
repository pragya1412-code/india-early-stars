import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const MakeAReferral = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ referrerName: "", referrerEmail: "", childName: "", childAge: "", concerns: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Referral Submitted!", description: "Thank you. Our team will review and get back to you within 2 business days." });
    setForm({ referrerName: "", referrerEmail: "", childName: "", childAge: "", concerns: "" });
  };

  return (
    <Layout>
      <PageHero title="Make a Referral" subtitle="Refer a child for early intervention services. We accept referrals from parents, doctors, educators, and allied health professionals." />
      <section className="py-16">
        <div className="container max-w-xl mx-auto">
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Your Name</label>
              <Input value={form.referrerName} onChange={(e) => setForm({ ...form, referrerName: e.target.value })} required placeholder="Full name" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Your Email</label>
              <Input type="email" value={form.referrerEmail} onChange={(e) => setForm({ ...form, referrerEmail: e.target.value })} required placeholder="you@example.com" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Child's Name</label>
                <Input value={form.childName} onChange={(e) => setForm({ ...form, childName: e.target.value })} required placeholder="Child's name" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Child's Age</label>
                <Input value={form.childAge} onChange={(e) => setForm({ ...form, childAge: e.target.value })} required placeholder="e.g. 3 years" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Concerns / Reason for Referral</label>
              <Textarea value={form.concerns} onChange={(e) => setForm({ ...form, concerns: e.target.value })} required rows={4} placeholder="Please describe your concerns..." />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">Submit Referral</Button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default MakeAReferral;
