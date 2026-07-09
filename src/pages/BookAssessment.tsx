import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, CheckCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "919711331299";

const BookAssessment = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    parentName: "",
    phone: "",
    childAge: "",
    concern: "",
    preferredTime: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Assessment Booked! ✅",
      description: "Our team will contact you within 24 hours to confirm your appointment.",
    });
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-20 min-h-[60vh] flex items-center">
          <div className="container max-w-lg mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-3xl font-extrabold text-foreground mb-4">
                Assessment Booked Successfully!
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Our team will contact you within 24 hours to confirm your appointment and discuss next steps.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I just booked an assessment. Can you confirm my appointment?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="lg" className="w-full gap-2">
                    <MessageCircle className="h-4 w-4" /> Follow Up on WhatsApp
                  </Button>
                </a>
                <a href="tel:+919711331299">
                  <Button variant="heroOutline" size="lg" className="w-full gap-2">
                    <Phone className="h-4 w-4" /> Call Us Now
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 lg:py-20">
        <div className="container max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-3">
              Book a Free Assessment
            </h1>
            <p className="text-muted-foreground text-lg">
              Take the first step. Our team will guide you through the process.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 space-y-5"
          >
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">Parent / Guardian Name *</label>
              <Input
                value={form.parentName}
                onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                required
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">Phone Number *</label>
              <Input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">Child's Age *</label>
              <Input
                value={form.childAge}
                onChange={(e) => setForm({ ...form, childAge: e.target.value })}
                required
                placeholder="e.g. 3 years"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">Your Concern</label>
              <Textarea
                value={form.concern}
                onChange={(e) => setForm({ ...form, concern: e.target.value })}
                rows={3}
                placeholder="Tell us about your child's development concerns..."
              />
            </div>
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">Preferred Time</label>
              <Input
                value={form.preferredTime}
                onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                placeholder="e.g. Weekday mornings"
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Book Now
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Or call us directly at <a href="tel:+919711331299" className="text-primary font-bold">+91 97113 31299</a>
            </p>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default BookAssessment;
