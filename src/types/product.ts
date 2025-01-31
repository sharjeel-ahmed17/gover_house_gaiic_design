export interface Product {
    id: string
    name: string
    description: string
    price: number
    imageUrl: string
    saleTag?: "sale" | "new"
    originalPrice?: number
  }
  
  