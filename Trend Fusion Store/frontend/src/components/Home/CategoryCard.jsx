import { useNavigate } from "react-router-dom"

const CategoryCard = ({ image, title }) => {
  const navigate = useNavigate();

  function handleCategoryClick(title){
    navigate(`/category/${title}`)
  }

  return (
    <div onClick={() => {handleCategoryClick(title)}} className="w-[23%] max-md:w-[45%] overflow-hidden">
        <img 
            src={image}
            className="cursor-pointer hover:scale-[1.1] transition-all duration-300"
        />
    </div>  
  )
}

export default CategoryCard