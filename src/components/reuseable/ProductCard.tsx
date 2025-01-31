import Image from "next/image"


const ProductCard = ({product} : {product : any}) => {
  return (
    <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden relative h-[301px]">
    <Image
    width={200}
    height={200}
      src={product.image}
      alt={product.title}
      className="w-full h-48 object-cover"
    />
    {product.discount && (
      <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
        {product.discount}
      </span>
    )}
    <div className="p-4 text-left">
      <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <div className="flex gap-3 items-center">
      <span className="text-gray-900 font-bold mt-2">{product.price}</span>
      {product.oldPrice && (
        <span className="text-gray-400 text-sm line-through">{product.oldPrice}</span>
      )}
      </div>
    </div>
  </div>
  )
}

export default ProductCard