import Link from "next/link"
import { getCategories } from "@/lib/products"

export default function CategoryList() {
  const categories = getCategories()

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Link key={category.id} href={`/shop?category=${category.id}`} className="group">
          <div className="border rounded-lg p-6 text-center transition-all hover:shadow-md hover:border-slate-300">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-200 transition-colors">
              <span className="text-2xl">{category.icon}</span>
            </div>
            <h3 className="font-medium group-hover:text-slate-700">{category.name}</h3>
            <p className="text-sm text-slate-500 mt-1">{category.count} plugins</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
