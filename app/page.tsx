import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedProjects } from "@/components/featured-projects"
import { CategoryGrid } from "@/components/category-grid"
import { RecentPosts } from "@/components/recent-posts"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "DIY Quest - Your Journey to Creative DIY Projects",
  description: "Discover inspiring DIY projects, tutorials, and creative ideas for makers of all skill levels. From woodworking to home decor, electronics to outdoor projects.",
  keywords: ["DIY projects", "woodworking", "home decor", "crafts", "tutorials", "macrame", "industrial design"],
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DIY Quest',
    url: 'https://diyquest.xyz',
    description: 'Your ultimate destination for DIY projects, creative inspiration, and hands-on tutorials.',
    publisher: {
      '@type': 'Organization',
      name: 'DIY Quest',
      url: 'https://diyquest.xyz',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://diyquest.xyz/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  )
}
