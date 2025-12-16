import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    title: "10 Essential Tools Every DIY Beginner Should Own",
    excerpt:
      "Starting your DIY journey? Here are the must-have tools that will help you tackle any project with confidence.",
    author: "Sarah Mitchell",
    date: "Dec 10, 2024",
    category: "Tips & Guides",
    image: "/essential-diy-tools-workshop.jpg",
    href: "/essential-diy-tools",
  },
  {
    title: "Upcycling Old Furniture: Before & After Ideas",
    excerpt:
      "Transform vintage finds into stunning pieces with these creative upcycling techniques and inspiring transformations.",
    author: "Mike Johnson",
    date: "Dec 8, 2024",
    category: "Inspiration",
    image: "/upcycled-furniture-before-after-vintage-chair.jpg",
    href: "/upcycling-furniture",
  },
  {
    title: "Budget-Friendly Home Organization Hacks",
    excerpt: "Get organized without breaking the bank! Discover clever storage solutions using everyday materials.",
    author: "Emma Davis",
    date: "Dec 5, 2024",
    category: "Organization",
    image: "/home-organization-storage-solutions-diy.jpg",
    href: "/budget-home-organization",
  },
  {
    title: "Creating a Cozy Reading Nook in Any Space",
    excerpt: "Learn how to design the perfect reading corner with comfortable seating, lighting, and personal touches.",
    author: "David Lee",
    date: "Dec 3, 2024",
    category: "Home Decor",
    image: "/cozy-reading-nook-corner-books-cushions.jpg",
    href: "/cozy-reading-nook",
  },
]

export function RecentPosts() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-balance font-bold text-3xl md:text-4xl mb-4">Latest from the Blog</h2>
          <p className="text-pretty text-muted-foreground text-lg">
            Tips, inspiration, and guides to fuel your creativity
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.title} href={post.href} className="group block">
              <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="relative aspect-[4/3] md:aspect-auto md:col-span-2 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 md:col-span-3">
                    <Badge variant="secondary" className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
