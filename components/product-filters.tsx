"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { getCategories } from "@/lib/products"

export default function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categories = getCategories()

  const [priceRange, setPriceRange] = useState([0, 10000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get("category") ? [searchParams.get("category") as string] : [],
  )
  const [ratings, setRatings] = useState<number[]>([])

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId])
    } else {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId))
    }
  }

  const handleRatingChange = (rating: number, checked: boolean) => {
    if (checked) {
      setRatings([...ratings, rating])
    } else {
      setRatings(ratings.filter((r) => r !== rating))
    }
  }

  const applyFilters = () => {
    const params = new URLSearchParams()

    if (selectedCategories.length > 0) {
      params.set("category", selectedCategories.join(","))
    }

    if (ratings.length > 0) {
      params.set("rating", ratings.join(","))
    }

    if (priceRange[0] > 0 || priceRange[1] < 10000) {
      params.set("minPrice", priceRange[0].toString())
      params.set("maxPrice", priceRange[1].toString())
    }

    router.push(`/shop?${params.toString()}`)
  }

  const resetFilters = () => {
    setPriceRange([0, 10000])
    setSelectedCategories([])
    setRatings([])
    router.push("/shop")
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
              />
              <label
                htmlFor={`category-${category.id}`}
                className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <Slider
          defaultValue={[0, 10000]}
          max={10000}
          step={100}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mb-2"
        />
        <div className="flex items-center justify-between text-sm">
          <span>KES {priceRange[0].toLocaleString()}</span>
          <span>KES {priceRange[1].toLocaleString()}</span>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center">
              <Checkbox
                id={`rating-${rating}`}
                checked={ratings.includes(rating)}
                onCheckedChange={(checked) => handleRatingChange(rating, checked as boolean)}
              />
              <label
                htmlFor={`rating-${rating}`}
                className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                <div className="flex mr-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className={i < rating ? "text-yellow-500" : "text-slate-300"}>
                        ★
                      </span>
                    ))}
                </div>
                & Up
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 space-y-2">
        <Button onClick={applyFilters} className="w-full">
          Apply Filters
        </Button>
        <Button onClick={resetFilters} variant="outline" className="w-full">
          Reset Filters
        </Button>
      </div>
    </div>
  )
}
