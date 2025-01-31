import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import MainComp from './MainComp'
import MainCardComponent from "./MainCardComponent"
import ProductListComp from "./Lolo"



const images = [
  "/images/cat1.png",
  "/images/cat1.png",
  "/images/cat1.png",
  "/images/cat1.png",
 
]
export default function ProductDetail() {
  return (
    <>
    <ProductListComp/>
   {/* <MainCardComponent/> */}
    {/* <MainComp/> */}
    <div className="min-h-screen bg-background">
   

      {/* Breadcrumb */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4">
    
          <nav className="flex items-center gap-2 text-sm text-text-secondary">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/shop">Shop</Link>
            <span>/</span>
            <span className="text-text-primary">Asgaard sofa</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <main>
        <div className="grid md:grid-cols-2 grid-cols-1">
          {/* Product Images */}
          <div className="flex gap-4 md:flex-row flex-col p-2">
            <div className="flex md:flex-col flex-row md:justify-normal justify-center gap-4 md:order-1 order-2">
              {images.map((i) => (
                <button key={i} className="w-20 h-20 border border-border rounded-lg overflow-hidden">
                  <Image
                    src="/images/cat1.png"
                    alt={`Asgaard sofa view ${i}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-square relative md:order-2 order-1">
              <Image
                src="/images/cat1.png"
                alt="Asgaard sofa main view"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-medium">Asgaard sofa</h1>
            <p className="text-2xl text-text-secondary">Rs. 250,000.00</p>

            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className={`w-4 h-4 ${i <= 4 ? "text-primary fill-primary" : "text-text-secondary"}`} />
              ))}
              <span className="text-text-secondary">5 Customer Review</span>
            </div>

            <p className="text-text-secondary">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero
              with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </p>

            {/* Size Selector */}
            <div className="space-y-2">
              <span className="text-sm font-medium">Size</span>
              <div className="flex gap-2">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    className="w-10 h-10 border border-text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="space-y-2">
              <span className="text-sm font-medium">Color</span>
              <div className="flex gap-2">
                {["#816DFA", "#000000", "#B88E2F"].map((color) => (
                  <button key={color} className="w-8 h-8 rounded-full" style={{ backgroundColor: color }} />
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-border rounded">
                <button className="px-4 py-2 hover:bg-gray-100">-</button>
                <span className="px-4 py-2">1</span>
                <button className="px-4 py-2 hover:bg-gray-100">+</button>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white">Add To Cart</Button>
            </div>

            {/* Product Meta */}
            <div className="pt-6 border-t border-border space-y-2 text-sm">
              <p>SKU: SS001</p>
              <p>Category: Sofas</p>
              <p>Tags: Sofa, Chair, Home, Shop</p>
              <div className="flex items-center gap-4">
                <span>Share:</span>
                <div className="flex gap-2">
                  <button className="hover:text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                  <button className="hover:text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="border-b border-border w-full justify-start rounded-none bg-transparent">
              <TabsTrigger
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="additional"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
              >
                Additional Information
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
              >
                Reviews (5)
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-8">
              <p className="text-text-secondary">
                Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the
                unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
              </p>
              <p className="mt-4 text-text-secondary">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting
                the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a
                well-balanced audio which boasts a clear midrange and extended highs for a sound.
              </p>
            </TabsContent>
            <TabsContent value="additional" className="mt-8">
             somethings else
            </TabsContent>
            <TabsContent value="reviews" className="mt-8">
              hellow
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-3xl font-medium text-center mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Syltherine",
                description: "Stylish cafe chair",
                price: "Rp 2,500,000",
                discount: "-30%",
              },
              {
                title: "Leviosa",
                description: "Stylish cafe chair",
                price: "Rp 2,500,000",
              },
              {
                title: "Lolito",
                description: "Luxury big sofa",
                price: "Rp 7,000,000",
                discount: "-50%",
              },
              {
                title: "Respira",
                description: "Outdoor bar table and stool",
                price: "Rp 500,000",
                badge: "New",
              },
            ].map((product, i) => (
              <Card key={i} className="group">
                <div className="relative aspect-square">
                  <Image
                    src="/images/cat3.png"
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                  {product.discount && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 text-sm rounded">
                      {product.discount}
                    </span>
                  )}
                  {product.badge && (
                    <span className="absolute top-4 right-4 bg-primary text-white px-2 py-1 text-sm rounded">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{product.title}</h3>
                  <p className="text-text-secondary text-sm">{product.description}</p>
                  <p className="mt-2 font-medium">{product.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

     
    </div>
    </>
  )
}

