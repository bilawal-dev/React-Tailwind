import { useState } from "react"

export default function MovieCard({image , type ,  title , year}){

    const[isCardHover , setIsCardHover] = useState(false)

    let isImageExist = true
    let isImageHover = false

    if(image === 'N/A'){
        isImageExist = false
    }

    return (
        isImageExist &&  
        (
            <div className={`${isCardHover && 'border'} hover:border border-gray-600 transition-all duration-300 relative w-[310px] mb-10 rounded-2xl`} onMouseOver={() => {setIsCardHover(true)}} onMouseOut={() => {setIsCardHover(false)}}>
                <img 
                    src={image}
                    className={`${isCardHover && 'opacity-25'} transition-all duration-300 w-full h-[320px] object-center rounded-tl-2xl rounded-tr-2xl`}
                />

                {isCardHover && (
                    <p className="absolute top-5 left-10 text-white font-bold text-xl">{year}</p>
                )}

                <div className={`${!isCardHover && 'bg-gray-400'} transition-all duration-300 h-[100px] pt-3 pb-5 px-5 bg-opacity-10 rounded-bl-2xl rounded-br-2xl`}>
                    <h2 className="text-gray-300 text-sm tracking- uppercase">{type}</h2>
                    <h1 className="text-white text-xl font-bold">{title}</h1>
                </div>
            </div>
        )
    )
}