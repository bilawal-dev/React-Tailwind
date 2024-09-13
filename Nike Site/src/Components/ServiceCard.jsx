import Icon from "./Icon";

export default function ServiceCard({iconClass , heading , desc}){
    return (
        <div className="flex w-full sm:w-[350px] flex-col items-start shadow-3xl px-9 py-16 rounded-3xl">
            <Icon iconClass={iconClass} colorStyle={'bg-coral-red text-white'}/>
            <h1 className="pt-3 font-bold font-palanquin text-3xl">{heading}</h1> 
            <p className="pt-3 text-lg leading-7 text-slate-gray font-montserrat">{desc}</p>
        </div>
    )
}