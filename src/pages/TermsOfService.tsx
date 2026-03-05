import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const TermsOfService = () => {
  return (
    <Layout>
      <PageHero title="Terms of Service" subtitle="Please read these terms carefully before using our services." />
      <section className="py-16">
        <div className="container max-w-3xl mx-auto prose prose-lg text-foreground">
          <h2 className="font-display text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-6">By accessing and using EarlyInterventionStudio's website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

          <h2 className="font-display text-2xl font-bold mb-4">2. Services</h2>
          <p className="text-muted-foreground mb-6">We provide early childhood intervention services including occupational therapy, speech therapy, psychology, physiotherapy, and assessments. All services are subject to availability and professional assessment.</p>

          <h2 className="font-display text-2xl font-bold mb-4">3. User Responsibilities</h2>
          <p className="text-muted-foreground mb-6">You agree to provide accurate information when using our forms, booking services, or making referrals. You are responsible for maintaining the confidentiality of any account credentials.</p>

          <h2 className="font-display text-2xl font-bold mb-4">4. Intellectual Property</h2>
          <p className="text-muted-foreground mb-6">All content on this website, including text, images, logos, and design, is the property of EarlyInterventionStudio and is protected by applicable intellectual property laws.</p>

          <h2 className="font-display text-2xl font-bold mb-4">5. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-6">EarlyInterventionStudio is not liable for any indirect, incidental, or consequential damages arising from the use of our website or services.</p>

          <h2 className="font-display text-2xl font-bold mb-4">6. Changes to Terms</h2>
          <p className="text-muted-foreground">We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of any changes.</p>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
