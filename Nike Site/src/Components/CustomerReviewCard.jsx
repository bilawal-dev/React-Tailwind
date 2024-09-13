import StarIcon from "../assets/icons/star.svg"

export default function CustomerReviewCard({image , desc , name}){
    return (
        <div className="flex flex-col items-center text-center gap-2">
            <img className="rounded-full"
                src={image}
                width={120}
            />
            <p className="mt-5 text-slate-gray font-montserrat text-lg w-[69%] leading-7 max-lg:w-[80%] max-sm:w-[100%]">{desc}</p>
            <div className="flex justify-center items-center gap-2 text-slate-gray font-montserrat text-xl">
                <img 
                    src={StarIcon}
                    width={25}
                />
                (4.5)
            </div>
            <h1 className="font-bold text-3xl font-palanquin">{name}</h1>
        </div>
    )
}