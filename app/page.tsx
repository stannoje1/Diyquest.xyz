import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedProjects } from "@/components/featured-projects"
import { CategoryGrid } from "@/components/category-grid"
import { RecentPosts } from "@/components/recent-posts"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <CategoryGrid />
        <RecentPosts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
