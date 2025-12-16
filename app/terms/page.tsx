import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="border-b bg-gradient-to-b from-muted/50 to-background">
          <div className="container py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: December 2025</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                By accessing or using DIY Quest (diyquest.xyz), you agree to be bound by these Terms of Service. If you
                disagree with any part of these terms, you may not access our website.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Use of Our Website</h2>
              <h3 className="text-xl font-bold mb-3 mt-8">Permitted Use</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may use our website for lawful purposes only. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit harmful or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our website or servers</li>
                <li>Use automated systems to scrape or collect data</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 mt-8">User Accounts</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you create an account on our website, you are responsible for maintaining the security of your
                account and password. You agree to accept responsibility for all activities that occur under your
                account.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Intellectual Property</h2>
              <h3 className="text-xl font-bold mb-3 mt-8">Our Content</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All content on DIY Quest, including text, graphics, logos, images, videos, and software, is the property
                of DIY Quest or its content suppliers and is protected by copyright and other intellectual property
                laws. You may not reproduce, distribute, modify, or create derivative works without our express written
                permission.
              </p>

              <h3 className="text-xl font-bold mb-3 mt-8">User-Generated Content</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you submit content to DIY Quest (comments, projects, photos, etc.), you grant us a worldwide,
                non-exclusive, royalty-free license to use, reproduce, modify, and display that content in connection
                with our services.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You represent that you own or have the necessary rights to submit the content and that it does not
                violate any third-party rights or applicable laws.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Project Instructions and Safety</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                DIY Quest provides project instructions and tutorials for informational purposes only. You acknowledge
                that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>You undertake DIY projects at your own risk</li>
                <li>You should always follow proper safety precautions and use appropriate protective equipment</li>
                <li>
                  You should consult with professionals for projects involving electrical work, plumbing, or structural
                  modifications
                </li>
                <li>
                  We are not responsible for any injuries, damages, or losses resulting from following our instructions
                </li>
                <li>Local building codes and regulations may apply to your projects</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-12">Links to Third-Party Websites</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our website may contain links to third-party websites. We have no control over and assume no
                responsibility for the content, privacy policies, or practices of any third-party sites.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our website is provided on an "as is" and "as available" basis. DIY Quest makes no warranties, expressed
                or implied, regarding the operation of our website or the information, content, or materials included on
                it. To the fullest extent permissible by law, we disclaim all warranties, including implied warranties
                of merchantability and fitness for a particular purpose.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                DIY Quest and its affiliates, officers, employees, or agents shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages resulting from your use of or inability to use
                our website, even if we have been advised of the possibility of such damages.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You agree to indemnify and hold harmless DIY Quest and its affiliates from any claims, damages, losses,
                liabilities, and expenses (including legal fees) arising out of your use of our website, your violation
                of these Terms, or your violation of any rights of another party.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We may terminate or suspend your access to our website immediately, without prior notice or liability,
                for any reason, including if you breach these Terms of Service.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                These Terms shall be governed by and construed in accordance with the laws of the United States, without
                regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                provide at least 30 days' notice prior to any new terms taking effect.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any questions about these Terms of Service, please contact us at legal@diyquest.xyz.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
