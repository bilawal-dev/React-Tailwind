export default function Button({text , icon}){
    return (
        <button className="flex justify-center item-center gap-3 px-8 py-4 rounded-full font-montserrat bg-coral-red text-white max-sm:px-4">
            {text}
            <img src={icon}/>
        </button>
    )
}