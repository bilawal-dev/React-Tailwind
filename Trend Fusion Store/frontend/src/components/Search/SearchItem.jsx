import { useNavigate } from "react-router-dom"

const SearchItem = ({ handleSearchDisplay, image, id }) => {

  const navigate = useNavigate();

  function handleProductClick(id){
    handleSearchDisplay();
    navigate(`/product/${id}`)
  }

  return (
    <div onClick={() => {handleProductClick(id)}} className="flex flex-col gap-2 cursor-pointer">
        <div className="max-w-xl flex items-center gap-2 hover:bg-slate-50">
            <img 
                src={image}
                width={50}
                className="p-2 bg-gray-100"
            />
            <div className="flex flex-col">
                <h1 className="text-sm font-bold line-clamp-1">Sonic Bliss | Experience Crystal Clear Sound Like Never Before</h1>
                <p className="text-sm line-clamp-1">Sonic Bliss delivers unparalleled delivers unparalleled audio clarity, exceptional comfort, and premium sound quality. Whether you're at home, at work, or on the go, immerse yourself in a world of crystal clear sound and experience music like never before. Enjoy every beat, every note, with the perfect blend of style and performance.</p>
            </div>
        </div>

        <hr />
    </div>
  )
}

export default SearchItem