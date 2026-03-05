import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <PageHero title="Privacy Policy" subtitle="How we collect, use, and protect your information." />
      <section className="py-16">
        <div className="container max-w-3xl mx-auto prose prose-lg text-foreground">
          <h2 className="font-display text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground mb-6">We collect personal information such as your name, email address, phone number, and any details you provide through our contact or referral forms. We may also collect usage data through cookies and analytics tools.</p>

          <h2 className="font-display text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-6">Your information is used to respond to enquiries, process referrals, improve our services, and communicate relevant updates. We do not sell or share your personal data with third parties for marketing purposes.</p>

          <h2 className="font-display text-2xl font-bold mb-4">3. Data Security</h2>
          <p className="text-muted-foreground mb-6">We implement industry-standard security measures to protect your personal information from unauthorised access, alteration, or disclosure.</p>

          <h2 className="font-display text-2xl font-bold mb-4">4. Cookies</h2>
          <p className="text-muted-foreground mb-6">Our website uses cookies to enhance your browsing experience. You can manage cookie preferences through your browser settings.</p>

          <h2 className="font-display text-2xl font-bold mb-4">5. Your Rights</h2>
          <p className="text-muted-foreground mb-6">You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at info@earlyinterventionstudio.in.</p>

          <h2 className="font-display text-2xl font-bold mb-4">6. Contact</h2>
          <p className="text-muted-foreground">For privacy-related queries, email us at info@earlyinterventionstudio.in or call 1800-XXX-XXXX.</p>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
