import { IoMdClose } from "react-icons/io"
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem"
import { forwardRef, useEffect, useRef, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { Context } from "../../utilities/context"

/* Since We Are Passing The Ref To A Functional Component So, As A Result 
   We Wil Wrap The Component In forwardRef() */

const Cart = forwardRef(({ handleCartDisplay }, cart) => {

    const {cartItems, cartSubTotal} = useContext(Context);
    
    const navigate = useNavigate();

    function EmptyCart(){
        return (
         <div className="mt-20 flex flex-col items-center text-center">
            <BsCartX className="text-9xl text-gray-200 font-bold block"/>
            <h1 className="my-3 font-cabin font-semibold tracking-wide">No Products In The Class</h1>
            <button onClick={() => {handleCartDisplay(); navigate('/')}} type="button" className="text-white bg-purple-700 font-montserrat tracking-wider px-3 py-2 2xl:py-3 gap-2 text-xs uppercase">Return To Shop</button>
         </div>
        )
    }

    function FilledCart(){
        return (
         <>
            {/* overflow-x-hidden is used to add a vertical scollbar which is then customized by me using external library which provides scrollbar tailwind classes*/}
            <div className="lg:scrollbar scrollbar-thumb-slate-100 overflow-x-hidden flex flex-col items-start gap-2">
                {cartItems.map((cartItem) => {
                    return (
                        <CartItem 
                            key={cartItem.id} 
                            cartItem={cartItem}
                        />
                        )
                    }) 
                }
            </div>

            <div className="ps-2 pb-4 pe-6 w-full absolute bottom-0 left-[50%] translate-x-[-50%] flex flex-col bg-white">
                <hr/>
                <div className="flex justify-between items-center font-cabin uppercase my-2">
                    <h1 className="font-bold text-md">SubTotal:</h1>
                    <h2 className="text-lg font-bold text-purple-600">PKR {cartSubTotal}</h2>
                </div>
                <hr />
                <button type="button" className="mt-4 text-white bg-purple-700 font-montserrat tracking-wider px-3 py-2 2xl:py-3 gap-2 text-xs uppercase">Checkout</button>
            </div>
         </>
        )
    }

  return (
    <section className="fixed z-50 top-0 left-0 w-screen h-screen flex">

        <div className="w-full h-full bg-black/40" onClick={handleCartDisplay}>
            {/* This Is Just The Black Shadow Layout */}
        </div>

        <div ref={cart} className="absolute right-0 h-full w-[60%] md:w-[40%] lg:w-[30%] bg-white flex flex-col pe-[3%] px-2 pt-5 max-sm:pt-8 pb-28">
            
            <div className="flex justify-between items-center font-cabin uppercase">
                <h1 className="font-bold text-lg">Shopping Cart</h1>
                <div className="flex items-center gap-1 cursor-pointer hover:text-slate-gray" onClick={handleCartDisplay}>
                    <IoMdClose className="text-md"/>
                    <h2 className="text-xs font-bold">Close</h2>
                </div>
            </div>

            <hr className="my-3 max-sm:mt-5"/>

            {cartItems.length > 0 ? <FilledCart /> : <EmptyCart />}
        </div>
    </section>
  )
})

export default Cart