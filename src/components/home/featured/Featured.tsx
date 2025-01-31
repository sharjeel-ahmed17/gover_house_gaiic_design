import React from 'react'
import { Button } from '@/components/ui/button';
import { mockData } from '@/app/data/featured';
import ProductCard from '@/components/reuseable/ProductCard';

const Featured = () => {
  return (
    <div className="container mx-auto mt-16 px-4 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-8">
          {mockData.map((product) => (
           <ProductCard product={product}/>
          ))}
        </div>
        <Button className="mt-6 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
          Show More
        </Button>
      </div>
  )
}

export default Featured