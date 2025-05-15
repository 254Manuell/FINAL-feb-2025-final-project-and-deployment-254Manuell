import Image from "next/image"
import { notFound } from "next/navigation"
import { getProductById } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AddToCartButton from "@/components/add-to-cart-button"
import RelatedProducts from "@/components/related-products"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    return {
      title: "Product Not Found | Plugins Hub",
      description: "The requested product could not be found",
    }
  }

  return {
    title: `${product.name} | Plugins Hub`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-slate-100 rounded-lg p-8 flex items-center justify-center">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>

        <div>
          <div className="mb-4">
            <Badge>{product.category}</Badge>
          </div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="text-2xl font-bold text-slate-800 mb-4">KES {product.price.toLocaleString()}</div>
          <p className="text-slate-600 mb-6">{product.description}</p>

          <div className="flex gap-4 mb-8">
            <AddToCartButton product={product} />
            <Button variant="outline">Add to Wishlist</Button>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
              <span>Version:</span>
              <span className="font-medium">{product.version}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>Last Updated:</span>
              <span className="font-medium">{product.lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="details" className="mb-16">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="installation">Installation</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="p-6">
          <h3 className="text-xl font-semibold mb-4">Features</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-4">Requirements</h3>
          <ul className="list-disc pl-5 space-y-2">
            {product.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="installation" className="p-6">
          <h3 className="text-xl font-semibold mb-4">Installation Instructions</h3>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-md mb-6 font-mono">
            npm install {product.name.toLowerCase().replace(/\s+/g, "-")}
          </div>
          <p className="mb-4">After installation, import the plugin in your project:</p>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-md font-mono">
            {`import { ${product.name.replace(/\s+/g, "")} } from '${product.name.toLowerCase().replace(/\s+/g, "-")}';`}
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="p-6">
          <div className="space-y-6">
            {product.reviews.map((review, index) => (
              <div key={index} className="border-b pb-6 last:border-b-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold">{review.user}</div>
                  <div className="text-sm text-slate-500">{review.date}</div>
                </div>
                <div className="flex items-center mb-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className={i < review.rating ? "text-yellow-500" : "text-slate-300"}>
                        ★
                      </span>
                    ))}
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <section>
        <h2 className="text-2xl font-bold mb-8">Related Plugins</h2>
        <RelatedProducts category={product.category} currentId={product.id} />
      </section>
    </div>
  )
}
