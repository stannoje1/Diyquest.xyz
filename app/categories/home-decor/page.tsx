import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, Users } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Decor DIY Projects - Macramé & Organization | DIY Quest",
  description: "Transform your home with beautiful DIY decor projects. Learn macramé, organization tips, and create cozy spaces with our step-by-step tutorials.",
  keywords: ["home decor DIY", "macrame projects", "home organization", "bohemian decor", "fiber arts", "wall art DIY", "reading nook"],
  openGraph: {
    title: "Home Decor DIY Projects - Tutorials & Ideas",
    description: "Create beautiful home decor with fiber arts, organization solutions, and cozy design ideas.",
    type: "website",
    url: "https://diyquest.xyz/categories/home-decor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Decor DIY Projects",
    description: "Transform your space with handcrafted home decor projects and organization solutions.",
  }
}

const homeDecorProjects = [
  {
    title: "Macramé Wall Hanging",
    description: "Create stunning wall art using traditional macramé techniques with modern flair.",
    difficulty: "Intermediate",
    time: "3-5 hours",
    cost: "$20-35",
    image: "/beautiful-macrame-wall-hanging-boho-style.jpg",
    href: "/projects/macrame-wall-hanging"
  },
  {
    title: "Woven Wall Tapestry",
    description: "Explore traditional weaving techniques to create stunning wall art with texture and color.",
    difficulty: "Intermediate",
    time: "6-10 hours", 
    cost: "$25-50",
    image: "/woven-wall-tapestry-boho-art.jpg",
    href: "/projects/woven-wall-tapestry"
  },
  {
    title: "Macramé Room Divider",
    description: "Large-scale macramé project for creating stunning room divisions and privacy screens.",
    difficulty: "Advanced",
    time: "15-25 hours",
    cost: "$60-120",
    image: "/macrame-room-divider-boho-large.jpg",
    href: "/projects/macrame-room-divider"
  },
  {
    title: "Budget Home Organization",
    description: "Transform your living space with clever organization solutions under $50.",
    difficulty: "Beginner",
    time: "2-4 hours",
    cost: "Under $50",
    image: "/budget-organization-solutions.jpg",
    href: "/budget-home-organization"
  },
  {
    title: "Creating a Cozy Reading Nook",
    description: "Design the perfect reading sanctuary with comfort, lighting, and personal touches.",
    difficulty: "Beginner",
    time: "4-8 hours",
    cost: "$100-300",
    image: "/cozy-reading-nook-design.jpg",
    href: "/cozy-reading-nook"
  }
]

export default function HomeDecorCategory() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4">Category</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Home Decor Projects</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your living space with beautiful, handcrafted home decor projects. From 
                fiber arts to organization solutions, discover projects that add personality, 
                functionality, and warmth to every room in your home.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{homeDecorProjects.length} Projects Available</span>
                </div>
                <span>•</span>
                <span>Beginner to Advanced</span>
                <span>•</span>
                <span>Fiber Arts & Organization</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {homeDecorProjects.map((project) => (
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
                        variant={
                          project.difficulty === "Beginner" ? "secondary" : 
                          project.difficulty === "Intermediate" ? "default" : 
                          "destructive"
                        }
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

            {/* Featured Skills Section */}
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Skills You'll Learn</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold mb-2">Fiber Arts</h3>
                    <p className="text-sm text-muted-foreground">
                      Master macramé, weaving, and textile techniques for creating beautiful wall art and functional pieces.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold mb-2">Space Planning</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn to optimize room layouts, create functional zones, and maximize storage in any space.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold mb-2">Design Principles</h3>
                    <p className="text-sm text-muted-foreground">
                      Understand color theory, texture mixing, and styling techniques for cohesive home decor.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Create Your Personal Style</h2>
                <p className="text-muted-foreground mb-6">
                  These home decor projects help you develop a unique aesthetic while learning valuable 
                  crafting skills. Start with simple organization, then explore the beautiful world of fiber arts.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/projects/macrame-wall-hanging" className="text-primary hover:underline font-medium">
                    Start with Macramé →
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