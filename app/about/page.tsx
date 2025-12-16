import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Hammer, Lightbulb, Users, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b bg-gradient-to-b from-muted/50 to-background">
          <div className="container py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About DIY Quest</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're a community of makers, creators, and DIY enthusiasts who believe that everyone has the power to
                build, create, and transform their spaces and ideas into reality.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At DIY Quest, we're on a mission to empower people to discover the joy of creating with their own
                  hands. We believe that DIY isn't just about saving money—it's about the satisfaction of building
                  something yourself, learning new skills, and expressing your creativity.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether you're a seasoned craftsperson or just starting your DIY journey, we provide the inspiration,
                  guidance, and community support you need to bring your projects to life.
                </p>
                <Button asChild size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                <img src="/workshop-tools-and-diy-projects.jpg" alt="DIY Workshop" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <Hammer className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Hands-On Learning</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We believe the best way to learn is by doing. Our tutorials are practical, tested, and designed for
                    real-world results.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-4">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Creative Innovation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We encourage thinking outside the box and finding unique solutions to transform ordinary materials
                    into extraordinary projects.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent-foreground mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Community First</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our community of makers supports each other, shares knowledge, and celebrates every success along
                    the way.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Passion & Quality</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every project, tutorial, and guide we create is crafted with care and a genuine passion for DIY
                    excellence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  DIY Quest started in 2020 when a group of passionate makers realized there was a need for a
                  centralized platform that made DIY projects accessible to everyone. We were tired of scattered
                  tutorials, incomplete guides, and overly complicated instructions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We set out to create something different—a place where beginners could find clear, step-by-step
                  guidance, and experienced DIYers could discover new challenges and share their expertise.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, DIY Quest has grown into a thriving community of makers from all walks of life. We've helped
                  thousands of people complete their first projects, master new skills, and discover the incredible
                  satisfaction that comes from creating with your own hands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your DIY Journey?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join our community and discover thousands of projects waiting to inspire your next creation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/">Explore Projects</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
