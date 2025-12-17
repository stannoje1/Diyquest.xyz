import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, Users, Leaf, Sun } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Garden & Outdoor DIY Projects - Plant Care & Storage | DIY Quest",
  description: "Enhance your outdoor spaces with functional DIY projects. Build plant hangers, outdoor storage, and garden accessories with our tutorials.",
  keywords: ["garden DIY projects", "outdoor projects", "plant hangers", "outdoor storage", "garden accessories", "macrame plant hanger"],
  openGraph: {
    title: "Garden & Outdoor DIY Projects",
    description: "Create functional and beautiful outdoor projects that connect you with nature.",
    type: "website",
    url: "https://diyquest.xyz/categories/garden-outdoor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garden & Outdoor DIY Projects",
    description: "Build outdoor storage and garden accessories with our step-by-step guides.",
  }
}

const gardenOutdoorProjects = [
  {
    title: "Macramé Plant Hanger",
    description: "Perfect for beginners! Learn basic knots while creating a functional hanging planter.",
    difficulty: "Beginner",
    time: "2-3 hours",
    cost: "$15-25",
    image: "/macrame-plant-hanger-boho-style.jpg",
    href: "/projects/macrame-plant-hanger"
  },
  {
    title: "Industrial Pipe Shelving",
    description: "Rugged outdoor storage solution using galvanized pipes and weather-resistant materials.",
    difficulty: "Advanced",
    time: "4-6 hours",
    cost: "$75-120",
    image: "/industrial-pipe-shelving-unit-rustic-modern.jpg",
    href: "/projects/industrial-pipe-shelving"
  }
]

export default function GardenOutdoorCategory() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4">Category</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Garden & Outdoor Projects</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Enhance your outdoor spaces with functional and beautiful DIY projects. From plant 
                hangers that bring greenery indoors to robust outdoor storage solutions, create 
                projects that connect you with nature and improve your outdoor living.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{gardenOutdoorProjects.length} Projects Available</span>
                </div>
                <span>•</span>
                <span>Beginner to Advanced</span>
                <span>•</span>
                <span>Indoor & Outdoor</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gardenOutdoorProjects.map((project) => (
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
                        variant={project.difficulty === "Beginner" ? "secondary" : "destructive"}
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

            {/* Benefits Section */}
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Garden & Outdoor Projects?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Leaf className="h-8 w-8 mx-auto mb-4 text-green-600" />
                    <h3 className="font-bold mb-2">Connect with Nature</h3>
                    <p className="text-sm text-muted-foreground">
                      Bring plants into your home or improve your outdoor spaces for a healthier, more natural environment.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Sun className="h-8 w-8 mx-auto mb-4 text-yellow-600" />
                    <h3 className="font-bold mb-2">Outdoor Living</h3>
                    <p className="text-sm text-muted-foreground">
                      Create functional outdoor storage and organization solutions that withstand the elements.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                    <h3 className="font-bold mb-2">Wellness Benefits</h3>
                    <p className="text-sm text-muted-foreground">
                      Gardening and outdoor projects promote mental health, physical activity, and mindfulness.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="mt-16 text-center">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">More Projects Coming Soon!</h2>
                  <p className="text-muted-foreground mb-6">
                    We're working on expanding our garden and outdoor collection with projects like 
                    raised garden beds, outdoor lighting, weather stations, and seasonal decorations.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Badge variant="outline">Raised Garden Beds</Badge>
                    <Badge variant="outline">Solar Lighting</Badge>
                    <Badge variant="outline">Weather Station</Badge>
                    <Badge variant="outline">Outdoor Storage</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Green Journey</h2>
                <p className="text-muted-foreground mb-6">
                  Begin with the macramé plant hanger to bring greenery indoors, then tackle the 
                  industrial shelving for robust outdoor organization.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/projects/macrame-plant-hanger" className="text-primary hover:underline font-medium">
                    Start with Plant Hangers →
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