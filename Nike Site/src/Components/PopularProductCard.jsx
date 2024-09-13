import starIcon  from "../assets/icons/star.svg";

export default function PopularProductCard({image , name , price}){
    return (
        <div>
            <img src={image} className="w-full h-full rounded-3xl cursor-pointer border-2 border-transparent hover:border-coral-red"/>

            <div className='mt-8 flex justify-start gap-2.5'>
                <img src={starIcon}/>
                <p className='font-montserrat text-xl text-slate-gray'>
                    (4.5)
                </p>
            </div>

            <h1 className="font-semibold mt-5 text-2xl font-palanquin">{name}</h1>
            <h2 className="font-semibold mt-2 text-3xl text-coral-red font-montserrat">{price}</h2>
        </div>
    )
}