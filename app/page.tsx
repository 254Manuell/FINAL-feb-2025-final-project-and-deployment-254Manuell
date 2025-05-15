import Link from "next/link"
import FeaturedPlugins from "@/components/featured-plugins"
import CategoryList from "@/components/category-list"
import HeroSection from "@/components/hero-section"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Plugins</h2>
            <Link href="/shop">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <FeaturedPlugins />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Browse Categories</h2>
          <CategoryList />
        </section>

        <section className="bg-slate-50 rounded-lg p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Developer Community</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Get early access to new plugins, exclusive discounts, and connect with other developers.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
