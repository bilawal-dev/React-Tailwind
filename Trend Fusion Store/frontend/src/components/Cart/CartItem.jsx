import { IoMdClose } from "react-icons/io"
import { useContext } from "react"
import { Context } from "../../utilities/context"

const CartItem = ({ cartItem }) => {

  const {handleRemoveFromCart, handleCartProductQty} = useContext(Context);

  return (
    <div className="w-full flex items-center gap-2 hover:bg-slate-50 pe-2">
      <div className="p-2 flex justify-center items-center bg-gray-100">
        <img src={import.meta.env.VITE_DEV_URL + cartItem.img[0].url} width={90}/>
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-sm line-clamp-1">{cartItem.title}</h1>
          <div>
            <IoMdClose onClick={() => {handleRemoveFromCart(cartItem)}} className="text-lg cursor-pointer hover:text-slate-gray"/>
          </div>
        </div>

        <span className="border-2">
          <button onClick={() => {handleCartProductQty(cartItem, -1)}} className="h-full text-xl text-slate-gray outline-none border-r-2 px-2">-</button>
          <span className="px-3">{cartItem.quantity}</span>
          <button onClick={() => {handleCartProductQty(cartItem, +1)}} className="h-full text-xl text-slate-gray outline-none border-l-2 px-2">+</button>
        </span>

        <h2 className="mt-1 text-purple-700 font-bold font-cabin text-xs">{`${cartItem.quantity} x PKR ${cartItem.price}`}</h2>
      </div>
    </div>  
  )
}

export default CartItem