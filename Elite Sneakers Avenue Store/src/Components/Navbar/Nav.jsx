import { Link, useLocation } from "react-router-dom"

const Nav = ({totalItems}) => {

  const Location = useLocation()

  return (
    <nav className="fixed w-full h-16 flex justify-between items-center ps-10 pe-16 border bg-white bg-opacity-50 backdrop-blur-[5px]">
        <Link to={'/'}>
          <h1 className="text-xl font-bold font-montserrat">Elite Sneakers Avenue</h1>
        </Link>

        {Location.pathname === '/' && (
          <Link to={'cart'}>
            <button className="relative px-3 hover:bg-slate-200 rounded-full border-none outline-none">
              <i className="ri-shopping-cart-2-fill text-3xl"></i>
              <span className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 text-xs font-bold bg-red-600 text-white rounded-full translate-x-1">{totalItems}</span>
            </button>  
          </Link>
        )}
    </nav> 
  )
}

export default Nav