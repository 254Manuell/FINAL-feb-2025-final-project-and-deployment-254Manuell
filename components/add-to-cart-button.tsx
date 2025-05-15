"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import type { Product } from "@/lib/types"
import { useState } from "react"
import { Check } from "lucide-react"

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addItem(product)
    setIsAdded(true)

    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  return (
    <Button onClick={handleAddToCart} className="flex-1" disabled={isAdded}>
      {isAdded ? (
        <>
          <Check className="mr-2 h-4 w-4" /> Added to Cart
        </>
      ) : (
        "Add to Cart"
      )}
    </Button>
  )
}
