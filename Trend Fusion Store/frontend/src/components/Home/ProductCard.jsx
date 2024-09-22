import { useNavigate } from "react-router-dom"

const ProductCard = ({ image, title, price, id }) => {

  const navigate = useNavigate();

  function handleProductClick(id){
    navigate(`/product/${id}`)
  }

  return (
    <div onClick={() => {handleProductClick(id)}} className="w-[24%] md:w-[23%] max-900:w-[30%] max-sm:w-[47.5%] mb-5">
        <div className="py-14 w-full flex justify-center items-center bg-gray-100">
            <img src={image} className="w-3/4 cursor-pointer hover:scale-[1.1] transition-all duration-200"/>
        </div>
        <div className="h-[20%] w-full mt-2 font-cabin">
            <h1 className="text-lg line-clamp-1">{title}</h1>
            <h2 className="text-lg font-bold">{'PKR ' + price}</h2>
        </div>
    </div>
  )
}

export default ProductCard