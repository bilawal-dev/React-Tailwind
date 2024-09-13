import headerLogo from "../assets/images/header-logo.svg"
import hamburger from "../assets/icons/hamburger.svg"
import { useEffect, useState } from "react"

export default function Nav(){
    const[isMenuOpen , setIsMenuOpen] = useState(false)

    function handleMenuClick(){
        setIsMenuOpen((prevValue) => !prevValue)
    }
    
    function handleLinkClick(){
        isMenuOpen && setIsMenuOpen(false)
    }
    
    const hamburgerStyling = isMenuOpen ? 'max-lg:flex flex-col z-[10] pt-5 space-y-5 font-semibold text-lg text-zinc-900 absolute top-[100%] left-[50%] translate-x-[-50%] h-[100vh] w-[100vw] border text-center backdrop-blur-[10px] bg-slate-200 bg-opacity-50' : 'max-lg:hidden';

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
    } , [isMenuOpen])

    // if(isMenuOpen){
    //     document.body.style.overflow = 'hidden'
    // }

    return(
        <header className="padding-x py-8 absolute top-0 z-10 w-full">
            <nav className="flex justify-between lg:pe-16 items-center w-full">
                <a href="#Home"><img src={headerLogo} alt="Nike"/></a>
                
                <ul className={`flex gap-20 font-montserrat text-slate-gray max-xl:gap-12 ${hamburgerStyling}  `}>
                    <li><a href="#Home" onClick={handleLinkClick}>Home</a></li>
                    <li><a href="#About Us" onClick={handleLinkClick}>About Us</a></li>
                    <li><a href="#Products" onClick={handleLinkClick}>Products</a></li>
                    <li><a href="#Contact Us" onClick={handleLinkClick}>Contact Us</a></li>
                    <li className="font-semibold text-slate-900 lg:relative lg:left-10" onClick={handleLinkClick}><a href="#">Sign in / Explore now</a></li>
                </ul>
                
                <button className="hidden max-lg:block" onClick={handleMenuClick}>
                    <img src={hamburger}
                        width={25}
                        height={25}
                    />
                </button>
            </nav>
        </header>
    )
}