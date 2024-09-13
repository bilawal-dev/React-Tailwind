export default function Button({value , handleButtonClick}){
    return (
        <button value={value} onClick={handleButtonClick}>
            {value}
        </button>
    )
}