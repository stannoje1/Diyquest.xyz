import { Card, CardContent } from "@/components/ui/card"
import { Hammer, Scissors, PaintBucket, Lightbulb, Leaf, Wrench } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    name: "Woodworking",
    icon: Hammer,
    color: "text-[oklch(0.55_0.18_40.2)]",
    href: "/projects/modern-wooden-desk-organizer",
  },
  {
    name: "Crafts & Sewing",
    icon: Scissors,
    color: "text-[oklch(0.48_0.12_180)]",
    href: "/projects/macrame-wall-hanging",
  },
  {
    name: "Home Decor",
    icon: PaintBucket,
    color: "text-[oklch(0.68_0.14_76.5)]",
    href: "/cozy-reading-nook",
  },
  {
    name: "Electronics",
    icon: Lightbulb,
    color: "text-[oklch(0.45_0.16_30)]",
    href: "/essential-diy-tools",
  },
  {
    name: "Garden & Outdoor",
    icon: Leaf,
    color: "text-[oklch(0.62_0.13_160)]",
    href: "/budget-home-organization",
  },
  {
    name: "Repairs & Fixes",
    icon: Wrench,
    color: "text-[oklch(0.55_0.18_40.2)]",
    href: "/upcycling-furniture",
  },
]

export function CategoryGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-balance font-bold text-3xl md:text-4xl mb-4">Explore by Category</h2>
          <p className="text-pretty text-muted-foreground text-lg max-w-2xl mx-auto">
            Find the perfect project for your interests and skill level
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.name} href={category.href} className="group block">
                <Card className="group cursor-pointer hover:shadow-lg hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-muted ${category.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{category.name}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
