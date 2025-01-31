import { Button } from "@/components/ui/button";
import Image from "next/image";


const MainCardComponent = () => {
  return (
    <div className="w-[285px] h-[446px] relative">
     
      <div className="relative">
        <span className="absolute right-8 top-8 bg-red-600 rounded-full p-2">-50%</span>
        <Image
          src="/images/cat1.png"
          alt="hello worlds"
          width={285}
          height={301}
        />
      </div>
      {/* content */}

      <div className="p-4">
        <h2>title</h2>
        <h3>sub title </h3>
        <div className="flex justify-between">
          <p>price</p>
          <p>dis price</p>
        </div>
      </div>
    </div>
  );
};

export default MainCardComponent;
