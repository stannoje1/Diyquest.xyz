import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-2xl bg-primary p-8 md:p-12 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
            <Mail className="h-8 w-8 text-primary-foreground" />
          </div>

          <h2 className="text-balance font-bold text-3xl md:text-4xl mb-4 text-primary-foreground">
            Get DIY Inspiration Weekly
          </h2>

          <p className="text-pretty text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
            Join 10,000+ makers receiving curated project ideas, expert tips, and exclusive tutorials delivered to your
            inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground text-foreground border-0 h-12"
            />
            <Button type="submit" size="lg" variant="secondary" className="sm:w-auto">
              Subscribe
            </Button>
          </form>

          <p className="mt-4 text-sm text-primary-foreground/70">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
