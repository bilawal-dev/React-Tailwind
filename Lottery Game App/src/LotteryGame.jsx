import { useState } from 'react'
import "./LotteryGame.css"
import LotteryTicket from './LotteryTicket'

function setInitialTicket(n){
    const randomArray = []
    for(let i = 0 ; i < n ; i++){
        randomArray.push(0)
    }
    return randomArray;
}

export default function LotteryGame({sizeOfTicket , winningTarget}){

    const [ticket , setTicket] = useState(() => setInitialTicket(sizeOfTicket))
    const [sum , setSum] = useState(0)

    function startLotteryGame(event){
        setSum(0);

        const randomArray = []
        for(let i = 0 ; i < sizeOfTicket ; i++){
            randomArray.push(Math.floor(Math.random() * 10) + 1)
        }

        setTicket(randomArray)

        const sum = randomArray.reduce((prev , curr) => prev += curr)
        setSum(sum)
    }
    
    return (
        <div className="lotteryGameContainer">
            <h1>Lottery Game</h1>
            <LotteryTicket ticket={ticket}/>
            <button onClick={startLotteryGame}>Click To Start Game</button>
            {sum !== 0 && <div className="displayResults">
                <h4 >{sum}</h4>
                {sum === winningTarget ? <h2 style={{color : 'green'}}>Congrats! You Won The Lottery</h2> : <h2 style={{color : 'red'}}>Better Luck Next Time!</h2>}
            </div>}
        </div>
    )
}