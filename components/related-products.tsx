import Link from "next/link"
import Image from "next/image"
import { getRelatedProducts } from "@/lib/products"

export default function RelatedProducts({
  category,
  currentId,
}: {
  category: string
  currentId: string
}) {
  const relatedProducts = getRelatedProducts(category, currentId)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {relatedProducts.map((product) => (
        <Link key={product.id} href={`/shop/${product.id}`}>
          <div className="group border rounded-lg overflow-hidden transition-all hover:shadow-md">
            <div className="aspect-video bg-slate-100 relative overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={180}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1 group-hover:text-slate-700 line-clamp-1">{product.name}</h3>
              <p className="text-sm text-slate-500 mb-2 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold">KES {product.price.toLocaleString()}</span>
                <div className="flex">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className={i < product.rating ? "text-yellow-500" : "text-slate-300"}>
                        ★
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
