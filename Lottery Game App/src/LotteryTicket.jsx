export default function LotteryTicket({ticket}){
    return (
        <div className="lotteryGame">
            {ticket.map((lotteryTicketNum , index) => {
                return <div key={index}>{lotteryTicketNum}</div>
            })}
        </div>
    )
}