'use client'
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Star, ShoppingCart, GitCompare,  } from "lucide-react";

const mockProduct = {
  name: "Asgaard Sofa",
  price: "Rs. 250,000.00",
  rating: 4.5,
  reviews: 5,
  description:
    "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
  sizes: ["L", "XL", "XS"],
  colors: ["#7B61FF", "#000000", "#EAB308"],
  sku: "SS001",
  category: "Sofas",
  tags: ["Sofa", "Chair", "Home", "Shop"],
  images: [
    "/images/cat1.png",
    "/images/cat2.png",
    "/images/cat3.png",
    "/images/cat1.png",
  ],
};

export default function ProductDetailsComp() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(mockProduct.colors[0]);
  const [selectedSize, setSelectedSize] = useState(mockProduct.sizes[0]);

  return (
    <div className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-10">
      {/* Image Section */}
      <div>
        <img
          src={mockProduct.images[0]}
          alt={mockProduct.name}
          className="w-full rounded-lg"
        />
        <div className="flex space-x-4 mt-4">
          {mockProduct.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Thumbnail"
              className="w-16 h-16 object-cover rounded-lg border cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Product Details Section */}
      <div>
        <h2 className="text-3xl font-bold">{mockProduct.name}</h2>
        <p className="text-xl text-gray-700">{mockProduct.price}</p>
        <div className="flex items-center space-x-2 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < Math.floor(mockProduct.rating) ? "text-yellow-500" : "text-gray-300"}`}
            />
          ))}
          <span className="text-sm text-gray-500">({mockProduct.reviews} Customer Review)</span>
        </div>
        <p className="text-gray-600 mt-4">{mockProduct.description}</p>

        {/* Size Selection */}
        <div className="mt-4">
          <p className="font-semibold">Size</p>
          <div className="flex space-x-2 mt-2">
            {mockProduct.sizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 border rounded-lg ${selectedSize === size ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div className="mt-4">
          <p className="font-semibold">Color</p>
          <div className="flex space-x-2 mt-2">
            {mockProduct.colors.map((color) => (
              <button
                key={color}
                className="w-8 h-8 rounded-full border-2"
                style={{ backgroundColor: color, borderColor: selectedColor === color ? "black" : "transparent" }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>

        {/* Quantity and Buttons */}
        <div className="mt-6 flex items-center space-x-4">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="p-2 bg-gray-200">
              <Minus />
            </button>
            <span className="px-4">{quantity}</span>
            <button onClick={() => setQuantity((q) => q + 1)} className="p-2 bg-gray-200">
              <Plus />
            </button>
          </div>
          <Button className="flex items-center space-x-2">
            <ShoppingCart className="h-5 w-5" />
            <span>Add To Cart</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <GitCompare className="h-5 w-5" />
            <span>Compare</span>
          </Button>
        </div>

        {/* Product Info */}
        <div className="mt-6 border-t pt-4">
          <p><span className="font-semibold">SKU:</span> {mockProduct.sku}</p>
          <p><span className="font-semibold">Category:</span> {mockProduct.category}</p>
          <p><span className="font-semibold">Tags:</span> {mockProduct.tags.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
