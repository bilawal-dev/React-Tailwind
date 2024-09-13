import Button from "./Button.jsx"

export default function ButtonPanel({handleButtonClick}){
    const btnArray = [
                        'AC' , 'DEL' , '%' , '/'  ,  
                        '7'  , '8'   , '9' , '*'  ,
                        '4'  , '5'   , '6' , '-'  ,
                        '1'  , '2'   , '3' , '+'  ,
                        '0'  , '.'   , '='
                     ]
    return (
        <div className="buttonPanel">
            {btnArray.map((value , index) => {
                return <Button key={index} value={value} handleButtonClick={handleButtonClick}/>
            })}
        </div>
    )
}