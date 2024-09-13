import "./App.css"
import LotteryGame from "./LotteryGame"

function App(){
  return (
    <>
      <LotteryGame sizeOfTicket={3} winningTarget={15}/>
    </>
  )
}

export default App