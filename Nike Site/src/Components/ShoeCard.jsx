export default function ShoeCard({image , bigShoeImage , setShoeImage}){
    
    function handleShoeClick(event , image){
        setShoeImage(image)
    }
    let borderStyle = 'border-2 border-transparent'

    return (
        <div 
            className={`flex justify-center items-center border-2 bg-card bg-cover bg-center px-5 py-6 rounded-xl cursor-pointer ${bigShoeImage === image ? 'border-coral-red' : 'border-transparent'}`}
            onClick={(event) => {handleShoeClick(event , image)}}>
            <img 
                src={image}
                width={127}
                height={103.34}
            />
        </div>
    )
}