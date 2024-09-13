import PopularProductCard from "../Components/PopularProductCard"
import ShoeImage4 from "../assets/images/shoe4.svg"
import ShoeImage5 from "../assets/images/shoe5.svg"
import ShoeImage6 from "../assets/images/shoe6.svg"
import ShoeImage7 from "../assets/images/shoe7.svg"

export default function PopularProducts(){
    return (
        <section id="Products" className="flex flex-col items-center w-full min-h-screen mt-28">
            <h1 className="text-4xl font-bold font-palanquin">Our <span className="text-coral-red">Popular</span> Products</h1>
           
            <p className="lg:w-lg lg:text-lg mt-5 text-slate-gray font-montserrat">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
            
            <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
                <div>
                    <PopularProductCard image={ShoeImage4} name={'Nike Air Jordan-01'} price={'$200.20'}/>
                </div>
                <div>
                    <PopularProductCard image={ShoeImage5} name={'Nike Air Jordan-10'} price={'$210.20'}/>
                </div>
                <div>
                    <PopularProductCard image={ShoeImage6} name={'Nike Air Jordan-100'} price={`$220.20`}/>
                </div>
                <div>
                    <PopularProductCard image={ShoeImage7} name={'Nike Air Jordan-X'} price={'$230.20'}/>
                </div>
            </div>
        </section>
    )
}