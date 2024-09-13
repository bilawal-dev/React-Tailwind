import { useState } from "react";
import Button from "../Components/Button";
import ShoeCard from "../Components/ShoeCard";
import ArrowRight from "../assets/icons/arrow-right.svg"
import ShoeImage1 from "../assets/images/big-shoe1.png"
import ShoeImage2 from "../assets/images/big-shoe2.png"
import ShoeImage3 from "../assets/images/big-shoe3.png"

export default function Hero(){
  const[bigShoeImage , setBigShoeImage] = useState(ShoeImage1)

    return (
        <section id="Home" className="w-full flex flex-row max-xl:flex-col min-h-screen max-container">

          <div className="relative flex flex-col justify-center items-start xl:w-[50%] max-xl:padding-x pt-28 ps-16">
            <p className="text-xl font-montserrat text-coral-red">Our Summer Collections</p>
            <h1 className="mt-8 font-palanquin font-bold text-8xl w-full max-lg:text-6xl xl:w-[130%] xl:leading-[120px] z-[1]">
              <span className="xl:bg-white-400 xl:pe-10">The New Arrival</span> <span className="text-coral-red">Nike</span> Shoes
              </h1>
            <p className="font-montserrat mt-5 mb-14 text-lg text-slate-gray w-[70%] xl:leading-8">Discover stylish Nike arrivals, quality comfort, and innovation for your active life </p>
            
            <Button text={'Shop Now'} icon={ArrowRight}/>

            <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 max-xl:mb-10">
              <div className="flex flex-col items-start">
                <p className="font-bold text-4xl font-palanquin">1k+</p>
                <p className="text-slate-gray font-montserrat">Brands</p>
              </div>
              <div>
                <p className="font-bold text-4xl font-palanquin">500+</p>
                <p className="text-slate-gray font-montserrat">Shops</p>
              </div>
              <div>
                <p className="font-bold text-4xl font-palanquin">250k+</p>
                <p className="text-slate-gray font-montserrat">Customers</p>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-center items-center w-full max-xl:pt-5 max-xl:pb-28 xl:w-[50%] max-xl:padding-x bg-hero bg-cover bg-center">
            <img src={bigShoeImage}/>
            <div className="flex gap-7 absolute bottom-[-5%] max-xl:bottom-[-10%]">
              <ShoeCard image={ShoeImage1} bigShoeImage={bigShoeImage} setShoeImage={setBigShoeImage}/>
              <ShoeCard image={ShoeImage2} bigShoeImage={bigShoeImage} setShoeImage={setBigShoeImage}/>
              <ShoeCard image={ShoeImage3} bigShoeImage={bigShoeImage} setShoeImage={setBigShoeImage}/>
            </div>
          </div>
        </section>
    )
}