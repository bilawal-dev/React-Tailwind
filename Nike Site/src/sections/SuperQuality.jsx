import Button from "../Components/Button";
import ShoeImage8 from "../assets/images/shoe8.svg"

export default function SuperQuality(){
    return (
        <section id="About Us" className="w-full min-h-screen flex max-lg:flex-col gap-10 max-container">
            <div className="">
                <h1 className="mt-10 text-4xl font-bold font-palanquin lg:max-w-lg max-lg:text-center">
                    We Provide You <span className="text-coral-red">Super Quality</span> Shoes
                </h1>
                <p className="mt-4 text-lg leading-7 text-slate-gray font-montserrat w-[95%] max-lg:text-center">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
                <p className="mt-4 mb-10 text-lg leading-7 text-slate-gray font-montserrat max-lg:text-center">Our dedication to detail and excellence ensures your satisfaction</p>
                <div className="flex max-lg:justify-center"><Button text={'View Details'}/></div>
            </div>

            <div className="">
                <img
                    src={ShoeImage8}
                    alt='product detail'
                    width={1700}
                />
            </div>
        </section>
    )
}