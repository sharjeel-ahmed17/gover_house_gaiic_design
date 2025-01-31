import { ProductGrid } from "./GridProduct"
import type { Product } from "@/types/product"

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Slythgrine",
    description: "stylish sofa chair",
    price: 2500000,
    imageUrl:
      "/images/cat1.png",
    saleTag: "sale",
  },
  {
    id: "2",
    name: "Leyloga",
    description: "stylish sofa chair",
    price: 2500000,
    imageUrl:
      "/images/cat1.png",
    saleTag: "sale",
  },
  {
    id: "3",
    name: "Lolito",
    description: "luxury big sofa",
    price: 7000000,
    imageUrl:
      "/images/cat1.png",
    saleTag: "sale",
    originalPrice: 14000000,
  },
  {
    id: "4",
    name: "Respira",
    description: "Outdoor sofa table and chair",
    price: 500000,
    imageUrl:
      "/images/cat1.png",
    saleTag: "new",
  },
  {
    id: "5",
    name: "Grifo",
    description: "Night lamp",
    price: 1500000,
    imageUrl:
      "/images/cat1.png",
  },
  {
    id: "6",
    name: "Muggo",
    description: "Small mug",
    price: 150000,
    imageUrl:
      "/images/cat1.png",
    saleTag: "new",
  },
  {
    id: "7",
    name: "Pingky",
    description: "Cute bed set",
    price: 7000000,
    imageUrl:
      "/images/cat1.png",
    saleTag: "sale",
  },
  {
    id: "8",
    name: "Potty",
    description: "Minimalist flower pot",
    price: 500000,
    imageUrl:
      "/images/cat1.png",
    saleTag: "new",
  },
]

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-2xl font-bold">Our Products</h1>
      <ProductGrid products={sampleProducts} />
    </main>
  )
}

