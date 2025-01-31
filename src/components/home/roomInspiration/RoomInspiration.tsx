import { ChevronLeft, ChevronRight } from "lucide-react";

const RoomInspiration = () => {
  return (
    <div className="bg-gray-50 py-8 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-gray-600 mt-2">
            Our designer already made a lot of beautiful prototypes of rooms that inspire you.
          </p>
        </div>

        <div className="relative">
          {/* Slide 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Left Column */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
              <div className="space-y-4">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src="/images/cat1.png" // Replace with an actual image
                    alt="Room"
                    className="rounded-md w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Inner Peace
                  </h3>
                  <p className="text-sm text-gray-500">Q1 - Bed Room</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2">
              <img
                src="/images/cat1.png" // Replace with an actual image
                alt="Room Inspiration"
                className="rounded-lg w-full"
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 text-gray-700 hover:bg-gray-100">
            <ChevronLeft />
          </button>
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 text-gray-700 hover:bg-gray-100">
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomInspiration;
