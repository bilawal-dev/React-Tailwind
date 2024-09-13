import { useState, useEffect } from "react"
import AddressForm from "./AddressForm"
import PaymentForm from "./PaymentForm"
import Confirmation from "./Confirmation"
import { commerce } from "../../lib/commerce"

const Checkout = ({cart, order, handleCaptureCheckout, error}) => {
  const steps = ['Shipping Address' , 'Payment Details']
  
  const [activeStep , setActiveStep] = useState(0)

  const [checkoutToken , setCheckoutToken] = useState(null)

  const [shippingData ,setShippingData] = useState({})

  useEffect(() => {
    async function generateToken(){
      try {
        const response = await commerce.checkout.generateToken(cart.id , {type: 'cart'})
        setCheckoutToken(response)
      } catch (error) {
        
      }
    }

    generateToken()
  }, [cart])

  function nextStep(){
    console.log('loading next step' , activeStep)
    setActiveStep((prevActiveStep) => {
      return prevActiveStep + 1
    })
  }

  function backStep(){
    setActiveStep((prevActiveStep) => {
      return prevActiveStep - 1
    })
  }


  function next(data){
    setShippingData(data)
    nextStep()
  }

  return (
    <main className="flex justify-center w-screen pb-8">
      <div className="flex flex-col w-1/3 max-lg:w-1/2 max-md:w-3/4 max-sm:w-11/12 px-5 shadow-lg rounded-2xl border pb-5">

        <h1 className="font-semibold font-montserrat text-3xl text-center">Checkout</h1>

        <div className="mt-2 mb-6 flex items-center justify-center gap-2">
          <div className="flex items-center gap-1">
            <span className="flex justify-center items-center h-5 w-5 max-sm:w-7 bg-blue-700 font-palanquin text-white text-[10px] rounded-full font-bold">{activeStep > 0 ? '✔' : 1}</span>            
            <p className="text-xs font-semibold font-palanquin">{steps[0]}</p>
          </div>

          <div className="w-32 border-b border-gray-400"></div>

          <div className="flex items-center gap-1">
            <span className={`flex justify-center items-center h-5 w-5 max-sm:w-7 ${activeStep > 0 ? 'bg-blue-700' : 'bg-gray-400' } font-palanquin text-white text-[10px] rounded-full font-bold`}>{activeStep > 1 ? '✔' : 2}</span>            
            <p className={`text-xs font-palanquin ${activeStep > 0 ? 'font-semibold' : 'font-normal'}`}>{steps[1]}</p>
          </div>
        </div>

        {!checkoutToken && (
          <div role="status" className="flex justify-center">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
          </div>)}

        {activeStep > steps.length ? <Confirmation error={error} order={order}/> : (activeStep === 0 ? (checkoutToken && <AddressForm checkoutToken={checkoutToken} next={next}/>) : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} nextStep={nextStep} handleCaptureCheckout={handleCaptureCheckout}/>)}
      </div>
    </main>
  )
}

export default Checkout