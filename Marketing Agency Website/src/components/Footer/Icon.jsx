export default function Icon({iconClass , colorStyle}){
    return (
        <i className={`${iconClass} flex justify-center items-center h-12 w-12 rounded-full ${colorStyle} text-2xl cursor-pointer`}></i>
    )
}