export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
  reviewCount: number
  isNew: boolean
  version: string
  lastUpdated: string
  features: string[]
  requirements: string[]
  reviews: {
    user: string
    rating: number
    date: string
    comment: string
  }[]
}
