import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Trophy, Shield, Truck, HeadphonesIcon, Heart, ShoppingCart, User, Search } from "lucide-react"
import Services from "@/components/reuseable/Services"

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[#FAF3EA]">
      

      {/* Hero Section */}
      {/* <div className="bg-[url('/images/cat1.png')] bg-cover bg-center py-24"> */}
      <div className="bg-[url('/images/cat1.png')] bg-cover bg-center py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Cart</h1>
          <div className="flex items-center justify-center space-x-2">
            <Link href="/" className="text-black hover:text-[#B88E2F]">
              Home
            </Link>
            <span>→</span>
            <span className="text-[#9F9F9F]">Cart</span>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-grow">
            <div className="bg-[#F9F1E7] p-4 grid grid-cols-4 gap-4 mb-4">
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Subtotal</div>
            </div>

            <div className="bg-white p-4 grid grid-cols-4 gap-4 items-center">
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Asgaard sofa"
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <span>Asgaard sofa</span>
              </div>
              <div>Rs. 250,000.00</div>
              <div>
                <Input type="number" defaultValue="1" className="w-20" />
              </div>
              <div className="flex items-center justify-between">
                <span>Rs. 250,000.00</span>
                <button className="text-[#B88E2F]">
                  <span className="sr-only">Remove item</span>
                  🗑️
                </button>
              </div>
            </div>
          </div>

          <Card className="w-full lg:w-80 p-6 bg-[#F9F1E7]">
            <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="text-[#B88E2F]">Rs. 250,000.00</span>
              </div>
              <Button className="w-full bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white">Check Out</Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Features */}
     <Services />

     
    </div>
  )
}

