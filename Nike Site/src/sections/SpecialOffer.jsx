import ShoePromotionImage from '../assets/images/offer.svg'
import ArrowRight from "../assets/icons/arrow-right.svg"
import Button from "../Components/Button";

export default function SpecialOffer(){
    return (
        <section className="flex justify-between items-start max-lg:flex-col max-lg:text-center">
            <div className="w-full lg:w-[48%] max-lg:flex max-lg:justify-center max-lg:ms-10">
                <img 
                    src={ShoePromotionImage}
                    width={550}
                />
            </div>
            <div className="w-full lg:w-[48%] lg:mt-10">
                <h1 className='text-4xl font-palanquin font-bold'><span className='text-coral-red'>Special</span> Offer</h1>
                
                <p className='mt-5 text-lg font-montserrat text-slate-gray leading-7'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
                <p className='mt-5 text-lg font-montserrat text-slate-gray leading-7'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
                
                <div className='mt-10 flex max-lg:justify-center flex-wrap gap-5'>
                    <Button text={'Shop Now'} icon={ArrowRight}/>
                    <button className='flex justify-center item-center gap-3 px-8 py-4 rounded-full font-montserrat ring-slate-gray ring-1 text-slate-gray'>Learn More</button>
                </div>

            </div>
        </section>
    )
}