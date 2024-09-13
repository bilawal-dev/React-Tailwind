import { useState } from "react"

export default function QuoteGenerator(){

    const [advice , setAdvice] = useState('Your Daily Dose Of Advice!');

    async function fetchAdvice(){
        const URL = 'https://api.adviceslip.com/advice';

        try {
            const response = await fetch(URL)

            if(!response.ok){
                throw new Error('Failed To Fetched Data')
            }

            const data = await response.json()

            setAdvice(data.slip.advice)

        } catch (error) {
            console.log('error')
        }
    }

    return (
        <div className="w-2/5 max-lg:w-1/2 max-md:w-[90%] h-1/3 px-5 flex flex-col justify-evenly items-center rounded-3xl bg-slate-50 bg-opacity-25 backdrop-blur-[10px] border shadow-2xl mx-auto">
            <h1 className="font-normal text-2xl max-sm:text-xl text-center text-gray-600">{advice}</h1>
            <button onClick={fetchAdvice} className="uppercase text-sm text-blue-500 border border-blue-500 px-5 py-2 outline-none rounded-full hover:text-white hover:bg-blue-500 transition-all duration-300">Give Me Advice!</button>
        </div>
    )
}