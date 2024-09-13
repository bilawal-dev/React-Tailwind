export const ProductCard = ({product, addToCart}) => {
  return (
    <div className="w-full h-[400px] ring-1 ring-slate-200 shadow-xl rounded-xl mb-5">
        <div className="flex justify-center items-center bg-slate-200 w-full h-[60%] rounded-tr-xl rounded-tl-xl">
            <img 
                src={product.image.url}
                width={230}
            />
        </div>
        <div className="w-full h-[40%] p-4">
            <div className="flex max-sm:flex-col max-sm:gap-3 sm:justify-between max-sm:text-center mb-3 font-montserrat font-semibold text-lg">
                <h1 className="lg:w-[55%]">{product.name}</h1>
                <h2>{product.price.formatted_with_symbol}</h2>
            </div>
            <p className="text-slate-gray text-sm mb-4 max-sm:text-center">{product.description.slice(3 , product.description.length-4)}</p>
            <div className="flex justify-end">
                <button onClick={() => {addToCart(product.id , 1)}} className="py-2 px-3 hover:bg-slate-200 rounded-[50%]"><i className="ri-shopping-cart-line"></i></button>
            </div>
        </div>
    </div>
  )
}