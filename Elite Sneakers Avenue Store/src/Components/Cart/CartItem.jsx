const CartItem = ({item , handleUpdateCartQty , handleRemoveFromCart}) => {
  return (
    <div className="w-[280px] max-md:w-2/3 max-sm:w-full h-[320px] max-lg:pb-4 ring-1 ring-slate-200 shadow-xl rounded-xl">
        <div className="flex justify-center items-center bg-slate-200 w-full h-[60%] rounded-tr-xl rounded-tl-xl">
            <img 
                src={item.image.url}
                width={180}
            />
        </div>
        <div className="w-full h-[40%] p-4">
            <div className="flex max-lg:flex-col max-lg:gap-3 lg:justify-between max-lg:text-center mb-3 font-montserrat font-semibold text-lg">
                <h1 className="lg:w-[55%]">{item.name}</h1>
                <h2>{item.price.formatted_with_symbol}</h2>
            </div>
            <div className="mt-5 flex gap-8 max-md:justify-center">
                <div className="flex justify-center items-center gap-3">
                    <button className="py-1 px-4 hover:bg-slate-200 rounded-md" onClick={() => {handleUpdateCartQty(item.id , item.quantity - 1)}}>-</button>
                    <h2>{item.quantity}</h2>
                    <button className="py-1 px-4 hover:bg-slate-200 rounded-md" onClick={() => {handleUpdateCartQty(item.id , item.quantity + 1)}}>+</button>
                </div>
                <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-6 py-2 uppercase rounded-[4px]" onClick={() => {handleRemoveFromCart(item.id)}}>Remove</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem