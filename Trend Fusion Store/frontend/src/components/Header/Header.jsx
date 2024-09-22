import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utilities/context"
import Cart from "../Cart/Cart"
import Search from "../Search/Search"
import { gsap } from "gsap";

const Header = () => {

  const navigate = useNavigate();
  const { cartCount } = useContext(Context);

  const [showCart , setShowCart] = useState(false)
  const cart = useRef(null)
  const [showSearch , setShowSearch] = useState(false)
  const search = useRef(null)

  function handleSearchDisplay(){
    //Closing Animation:
    if(showSearch){
      gsap.fromTo(search.current, 
      {y: 0} ,
      {y: 600, duration: .5 , onComplete: function(){setShowSearch(false)}});
    }
    else{
      setShowSearch(true)
    }
  }

  useEffect(() => {
    //Opening Animation:
    if (showSearch) {
      gsap.fromTo(search.current, 
        {y: 600} ,
        {y: 0, duration: .5});
    }    
} , [showSearch])
  
  function handleCartDisplay(){
    //Closing Animation:
   if(showCart){
      gsap.fromTo(cart.current, 
      {x: 0} ,
      {x: 400, duration: .5 , onComplete: function(){setShowCart(false)}});
    }
    else{
      setShowCart(true)
    }
  }

  useEffect(() => {
    //Opening Animation:
    if (showCart) {
      gsap.fromTo(cart.current, 
        {x: 200} ,
        {x: 0, duration: .5});
    }    
} , [showCart])

  return (
  <>
    <header className="relative pb-20 sm:pb-16">
      <nav className="h-20 sm:h-16 overflow-hidden w-screen fixed z-10 flex justify-between items-center bg-black  text-white font-cabin px-5 sm:px-10 xl:px-20">
        <ul className="flex gap-5 text-md max-900:hidden">
          <li onClick={() => {navigate('/')}} className="cursor-pointer">Home</li>
          <a href="#Footer"><li>About</li></a>
          <a href="#Categories"><li>Categories</li></a>
        </ul>
        <div onClick={() => {navigate('/'); window.scrollTo({top: 0, behavior: 'smooth'})}} className="absolute left-[50%] -translate-x-[50%] text-3xl max-900:static max-900:translate-x-0 cursor-pointer">TrendFusion.</div>
        <ul className="flex gap-5 max-900:gap-4 text-2xl font-bolder">
          <TbSearch onClick={handleSearchDisplay} className=" cursor-pointer"/>
          <span onClick={handleCartDisplay} className="relative cursor-pointer">
            <CgShoppingCart />
            {cartCount !== 0 && (
              <div className="absolute top-[-35%] right-[-50%] flex items-center justify-center w-5 h-5 text-[11px] font-bold text-white bg-purple-600 rounded-full">{cartCount}</div>
            )}
          </span>
        </ul>
      </nav>
    </header>

    {/* We Are Pass Ref To A Functional Component */}
    {showCart && <Cart ref={cart} handleCartDisplay={handleCartDisplay} />}

    {showSearch && <Search ref={search} handleSearchDisplay={handleSearchDisplay} />}
  </>
  )
}

export default Header