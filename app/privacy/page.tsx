import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="border-b bg-gradient-to-b from-muted/50 to-background">
          <div className="container py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: December 2025</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At DIY Quest, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website diyquest.xyz.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Information We Collect</h2>
              <h3 className="text-xl font-bold mb-3 mt-8">Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Subscribe to our newsletter</li>
                <li>Create an account on our website</li>
                <li>Submit a contact form</li>
                <li>Comment on our blog posts</li>
                <li>Participate in surveys or contests</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 mt-8">Automatically Collected Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device,
                including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Browser type and version</li>
                <li>IP address</li>
                <li>Operating system</li>
                <li>Referring website addresses</li>
                <li>Pages viewed and time spent on pages</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-12">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Send you newsletters and marketing communications (with your consent)</li>
                <li>Respond to your comments and questions</li>
                <li>Prevent fraudulent activity and improve security</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-12">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We use cookies and similar tracking technologies to track activity on our website and hold certain
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                sent.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may employ third-party companies and individuals to facilitate our service, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Analytics services (e.g., Google Analytics)</li>
                <li>Email service providers</li>
                <li>Payment processors</li>
                <li>Hosting providers</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-12">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We implement appropriate technical and organizational security measures to protect your personal
                information. However, no method of transmission over the Internet is 100% secure, and we cannot
                guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-12">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any questions about this Privacy Policy, please contact us at privacy@diyquest.xyz.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
