import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, TrendingUp } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Modern Wooden Desk Organizer",
    category: "Woodworking",
    time: "3 hours",
    difficulty: "Beginner",
    image: "/modern-wooden-desk-organizer-handmade.jpg",
    href: "/projects/modern-wooden-desk-organizer",
  },
  {
    title: "Macramé Wall Hanging",
    category: "Crafts",
    time: "2 hours",
    difficulty: "Intermediate",
    image: "/beautiful-macrame-wall-hanging-boho-style.jpg",
    href: "/projects/macrame-wall-hanging",
  },
  {
    title: "Industrial Pipe Shelving",
    category: "Furniture",
    time: "4 hours",
    difficulty: "Advanced",
    image: "/industrial-pipe-shelving-unit-rustic-modern.jpg",
    href: "/projects/industrial-pipe-shelving",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Trending Now</span>
            </div>
            <h2 className="text-balance font-bold text-3xl md:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-pretty text-muted-foreground">Handpicked projects from our creative community</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.title} href={project.href} className="group block">
              <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} - ${project.difficulty} ${project.category.toLowerCase()} project tutorial`}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-background/90 text-foreground hover:bg-background">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{project.time}</span>
                    </div>
                    <span>•</span>
                    <span>{project.difficulty}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
