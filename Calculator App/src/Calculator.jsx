import DisplayResult from "./DisplayResult.jsx"
import ButtonPanel from "./ButtonPanel.jsx"
import { useState } from "react"

export default function Calculator(){
    const [display , setDisplay] = useState('');

    function handleButtonClick(event){
        const value = event.target.value

        if(value === 'AC'){
            setDisplay('');
        }
        else if(value === 'DEL'){
            setDisplay(display.slice(0 , display.length-1))
        }
        else if(value === '='){
            setDisplay(eval(display))
        }
        else{
            setDisplay((prevDisplay) => {
                return prevDisplay + value;
            })
        }
    }

    return (
        <div className="calculatorContainer">
            <h1>Calculator</h1>
            <DisplayResult display={display}/>
            <ButtonPanel handleButtonClick={handleButtonClick}/>
        </div>
    )
}