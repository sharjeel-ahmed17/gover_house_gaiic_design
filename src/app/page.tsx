
import Category from '@/components/home/category/Category'
import Featured from '@/components/home/featured/Featured'
import FurnitureGallery from '@/components/home/furnitureGalleryFurnitureGallery'
import Hero from '@/components/home/hero/Hero'
import RoomInspiration from '@/components/home/roomInspiration/RoomInspiration'
import React from 'react'

const Home = () => {
  return (
  <div>
    {/* <ProductCard /> */}
    <Hero/>
    <Category />
    <Featured/>
    <RoomInspiration />
    <FurnitureGallery />
    <Features />
  </div>
  )
}

export default Home


import { CheckCircle, Headphones, Package, ShieldCheck, Trophy } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-center space-x-3">
      <Icon className="w-8 h-8 text-black" />
      <div>
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};

function Features() {
  const features = [
    { icon: Trophy, title: "High Quality", description: "Crafted from top materials" },
    { icon: ShieldCheck, title: "Warranty Protection", description: "Over 2 years" },
    { icon: Package, title: "Free Shipping", description: "Order over $150" },
    { icon: Headphones, title: "24 / 7 Support", description: "Dedicated support" },
  ];

  return (
    <div className="bg-[#f9f3eb] py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}
