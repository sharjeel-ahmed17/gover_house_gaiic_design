import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="flex items-center justify-center  bg-gray-100 bg-[url(/images/hero.png)] h-[500px]">
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-8 px-4 lg:px-16">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center"></div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <div className="bg-amber-100 p-6 rounded-lg shadow-xl">
            <p className="text-sm uppercase font-medium text-gray-700">New Arrival</p>
            <h1 className="text-3xl font-bold text-gray-900 leading-tight mt-2">
              Discover Our New Collection
            </h1>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <Button className="mt-6 px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
