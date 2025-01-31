import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
        {product.saleTag && (
          <div
            className={`absolute right-2 top-2 rounded-full px-3 py-1 text-sm font-medium text-white
            ${product.saleTag === "sale" ? "bg-pink-500" : "bg-teal-500"}`}
          >
            {product.saleTag}
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 flex justify-between p-2 opacity-0 transition-opacity group-hover:opacity-100">
          <button className="rounded-full bg-white/80 p-2 backdrop-blur-sm">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="rounded-full bg-white/80 p-2 backdrop-blur-sm">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex items-center gap-2">
          <span className="font-medium">Rp {product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">Rp {product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  )
}

