const FurnitureGallery = () => {
  const images = [
    "/images/cat1.png", // Replace with actual image paths
    "/images/cat1.png",
    "/images/cat1.png",
    "/images/cat1.png",
    "/images/cat1.png",
    "/images/cat1.png",
    "/images/cat1.png",
    "/images/cat1.png",
  ];

  return (
    <div className="bg-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className=" text-2xl text-center md:text-3xl font-bold text-gray-900 mb-8">
          Share your setup with 
        </h2>
        <h3 className=" text-center text-primary">#FuniroFurniture</h3>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
              <img
                src={src}
                alt={`Furniture setup ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FurnitureGallery;
