import Heading from "@/components/reuseable/Heading";
import Image from "next/image";
const categories = [
  { image: "/images/cat1.png", title: "Dining" },
  { image: "/images/cat2.png", title: "Living" },
  { image: "/images/cat3.png", title: "Bedroom" },
];


const Category = () => {
  return (
    <div className="container mx-auto mt-16 px-4 lg:px-16 text-center py-6">
   <Heading title="browse the range" />
    <p className="mt-2 text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

      {categories.map((category, index) => (
        <CategoryCard key={index} image={category.image} title={category.title} />
      ))}
    </div>
  </div>

  )
}

export default Category

interface CategoryCardProps {
  image: string;
  title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, title }) => {
  return (
    <div className="bg-white rounded-lg  overflow-hidden">
      <Image width={200} height={200} src={image} alt={title} className="w-full h-[400px] object-cover rounded-lg" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

 
