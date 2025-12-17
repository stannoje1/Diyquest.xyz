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
              <p className="text-muted-foreground">Last updated: December 17, 2025</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At DIY Quest ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website 
                diyquest.xyz and any associated services.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Information We Collect</h2>
              
              <h3 className="text-xl font-bold mb-3 mt-8">Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Subscribe to our newsletter</li>
                <li>Create an account on our website</li>
                <li>Submit a contact form or comment</li>
                <li>Participate in surveys, contests, or promotions</li>
                <li>Interact with our website features</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 mt-8">Automatically Collected Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you visit our website, we automatically collect certain information about your device and usage:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>IP address and geographic location</li>
                <li>Browser type, version, and language</li>
                <li>Operating system and device information</li>
                <li>Referring website and exit pages</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Click and scroll data</li>
                <li>Search terms used to find our site</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-12">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies, web beacons, and similar tracking technologies to enhance your browsing experience 
                and analyze website usage. These technologies help us:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Personalize content and advertisements</li>
                <li>Improve website functionality and security</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 mt-8">Third-Party Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We may allow third-party companies to place cookies on our website for analytics and advertising 
                purposes. You can control cookie preferences through your browser settings.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Google AdSense and Advertising</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use Google AdSense and other advertising networks to display ads on our website. These services may:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Use cookies to serve ads based on your prior visits to our website or other websites</li>
                <li>Collect information about your interests to show relevant advertisements</li>
                <li>Track ad performance and user interactions</li>
                <li>Share anonymized data with advertisers and partners</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You may opt out of personalized advertising by visiting Google's Ads Settings or 
                the Network Advertising Initiative opt-out page.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Analytics Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We use Google Analytics and similar services to understand how visitors interact with our website. 
                These services collect information such as how often users visit our site, what pages they visit, 
                and what other sites they used prior to coming to our site. We use this information to improve our website.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Provide, maintain, and improve our website and services</li>
                <li>Send newsletters and marketing communications (with your consent)</li>
                <li>Respond to your inquiries and customer service requests</li>
                <li>Analyze website usage and optimize user experience</li>
                <li>Personalize content and advertisements</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-12">Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li><strong>Service Providers:</strong> With third-party companies that perform services on our behalf</li>
                <li><strong>Analytics Partners:</strong> With analytics providers to understand website usage</li>
                <li><strong>Advertising Partners:</strong> With advertising networks for targeted advertising</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-12">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, no method 
                of transmission over the internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Your Rights and Choices</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt out of marketing communications</li>
                <li>Disable cookies through your browser settings</li>
                <li>Request information about how your data is processed</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-12">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our website is not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If we become aware that we have collected personal 
                information from a child under 13, we will take steps to delete such information.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your information may be transferred to and processed in countries other than your country of residence. 
                These countries may have different data protection laws. We ensure appropriate safeguards are in place 
                to protect your information.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by posting the new policy on this page and updating the "Last updated" date. Your continued use 
                of our website after any changes indicates your acceptance of the updated policy.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-12">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>DIY Quest</strong><br />
                  Email: privacy@diyquest.xyz<br />
                  Website: <a href="/contact" className="text-primary hover:underline">Contact Form</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
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
