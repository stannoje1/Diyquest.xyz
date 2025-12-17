import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, Users } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Woodworking Projects - DIY Tutorials & Plans | DIY Quest",
  description: "Discover beginner to intermediate woodworking projects with step-by-step tutorials. Build beautiful furniture and organizers with our detailed guides.",
  keywords: ["woodworking projects", "DIY woodworking", "wooden furniture", "woodworking tutorials", "beginner woodworking", "wood projects"],
  openGraph: {
    title: "Woodworking Projects - DIY Tutorials",
    description: "Learn woodworking with our comprehensive project tutorials. From desk organizers to coffee tables.",
    type: "website",
    url: "https://diyquest.xyz/categories/woodworking",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woodworking Projects - DIY Tutorials",
    description: "Discover the joy of woodworking with our beginner-friendly project guides.",
  }
}

const woodworkingProjects = [
  {
    title: "Modern Wooden Desk Organizer",
    description: "Transform your workspace with this sleek, minimalist wooden desk organizer.",
    difficulty: "Beginner",
    time: "2-3 hours",
    cost: "$25-40",
    image: "/modern-wooden-desk-organizer-handmade.jpg",
    href: "/projects/modern-wooden-desk-organizer"
  },
  {
    title: "Metal & Wood Coffee Table",
    description: "Industrial chic meets natural warmth in this stunning coffee table design.",
    difficulty: "Intermediate", 
    time: "8-12 hours",
    cost: "$80-150",
    image: "/metal-wood-coffee-table-modern.jpg",
    href: "/projects/metal-wood-coffee-table"
  }
]

export default function WoodworkingCategory() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4">Category</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Woodworking Projects</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover the joy of working with wood through our carefully curated collection of 
                woodworking projects. From beginner-friendly organizers to sophisticated furniture, 
                learn essential techniques while creating beautiful, functional pieces.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{woodworkingProjects.length} Projects Available</span>
                </div>
                <span>•</span>
                <span>Beginner to Intermediate</span>
                <span>•</span>
                <span>Hand Tools & Power Tools</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {woodworkingProjects.map((project) => (
                <Link key={project.title} href={project.href} className="group block">
                  <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge 
                        className="absolute top-4 left-4 bg-background/90 text-foreground hover:bg-background"
                        variant={project.difficulty === "Beginner" ? "secondary" : "default"}
                      >
                        {project.difficulty}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{project.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          <span>{project.cost}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Woodworking Journey?</h2>
                <p className="text-muted-foreground mb-6">
                  These projects are designed to build your skills progressively. Start with the desk organizer 
                  to learn basic techniques, then challenge yourself with the coffee table project.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/essential-diy-tools" className="text-primary hover:underline font-medium">
                    Essential Woodworking Tools Guide →
                  </Link>
                  <Link href="/projects" className="text-primary hover:underline font-medium">
                    Browse All Projects →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}