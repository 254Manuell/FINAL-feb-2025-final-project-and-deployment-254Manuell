import Link from "next/link"
import Image from "next/image"
import { getFeaturedProducts } from "@/lib/products"
import { Badge } from "@/components/ui/badge"

export default function FeaturedPlugins() {
  const featuredPlugins = getFeaturedProducts()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredPlugins.map((plugin) => (
        <Link key={plugin.id} href={`/shop/${plugin.id}`}>
          <div className="group border rounded-lg overflow-hidden transition-all hover:shadow-md">
            <div className="aspect-video bg-slate-100 relative overflow-hidden">
              <Image
                src={plugin.image || "/placeholder.svg"}
                alt={plugin.name}
                width={500}
                height={300}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {plugin.isNew && <Badge className="absolute top-2 right-2">New</Badge>}
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1 group-hover:text-slate-700">{plugin.name}</h3>
              <p className="text-sm text-slate-500 mb-2 line-clamp-2">{plugin.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold">KES {plugin.price.toLocaleString()}</span>
                <div className="flex items-center">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} className={i < plugin.rating ? "text-yellow-500" : "text-slate-300"}>
                          ★
                        </span>
                      ))}
                  </div>
                  <span className="text-xs text-slate-500 ml-1">({plugin.reviewCount})</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
