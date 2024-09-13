import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = ({cart , handleUpdateCartQty , handleRemoveFromCart , handleEmptyCart}) => {

    const isCartEmpty = cart.line_items ? (cart.line_items.length === 0 ? true : false) : true;

    function EmptyCart(){
        return(
        <h1 className="mt-10 text-xl font-palanquin text-slate-gray">
            You Have No Items In Cart
            <Link to={'/'}>
                <span className="text-blue-500 border-b-[1px]"> Start Adding Some</span>
            </Link>
        </h1>
        )
    }

    function FilledCart(){
        return(
        <>
            <div className="mt-5 flex max-lg:justify-center flex-wrap gap-5">
                {cart.line_items.map((item) => {
                    return (
                        <CartItem 
                            key={item.id} 
                            item={item} 
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                        />
                    )
                })}
            </div>
            <div className="mt-8 flex justify-between max-sm:flex-col max-sm:gap-5">                    
                <h1 className="font-semibold text-2xl">{`Subtotal: ${cart.subtotal.formatted_with_code}`}</h1>
                    <div className="flex gap-4 text-white">
                     <button className="bg-red-500 hover:bg-red-600 text-sm px-6 py-2 uppercase rounded-[4px]" onClick={handleEmptyCart}>Empty Cart</button>
                     <Link to={'/checkout'}>
                        <button className="bg-blue-800 hover:bg-blue-900 text-sm px-6 py-2 uppercase rounded-[4px]">Checkout</button>
                     </Link>
                </div>
            </div>
        </>
        )
    }

    return (
    <div className="px-10">
        <h1 className="font-bold font-palanquin text-[35px] max-md:text-[30px]">Your Shopping Cart</h1>
        {isCartEmpty ? <EmptyCart /> : <FilledCart />}
    </div>
  )
}

export default Cart