import Link from "next/link"
import Image from "next/image"
import { getAllProducts } from "@/lib/products"
import { Badge } from "@/components/ui/badge"

export default function ProductGrid() {
  const products = getAllProducts()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {products.map((product) => (
        <Link key={product.id} href={`/shop/${product.id}`}>
          <div className="group border rounded-lg overflow-hidden transition-all hover:shadow-md">
            <div className="aspect-video bg-slate-100 relative overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={300}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {product.isNew && <Badge className="absolute top-2 right-2">New</Badge>}
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold group-hover:text-slate-700">{product.name}</h3>
                <Badge variant="outline">{product.category}</Badge>
              </div>
              <p className="text-sm text-slate-500 mb-2 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold">KES {product.price.toLocaleString()}</span>
                <div className="flex items-center">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} className={i < product.rating ? "text-yellow-500" : "text-slate-300"}>
                          ★
                        </span>
                      ))}
                  </div>
                  <span className="text-xs text-slate-500 ml-1">({product.reviewCount})</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
