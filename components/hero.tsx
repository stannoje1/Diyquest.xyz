import { Button } from "@/components/ui/button"
import { ArrowRight, Hammer } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-2 text-sm font-medium text-secondary-foreground">
            <Hammer className="h-4 w-4" />
            <span>Building creativity, one project at a time</span>
          </div>

          <h1 className="mb-6 text-balance font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight">
            Your Journey to Creative <span className="text-primary">DIY Projects</span>
          </h1>

          <p className="mb-8 text-pretty text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Discover inspiring DIY projects, step-by-step tutorials, and creative ideas that transform your home and
            spark your imagination. Join thousands of makers on their creative journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects/modern-wooden-desk-organizer">
              <Button size="lg" className="gap-2">
                Browse Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/essential-diy-tools">
              <Button size="lg" variant="outline">
                Watch Tutorials
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
    </section>
  )
}
