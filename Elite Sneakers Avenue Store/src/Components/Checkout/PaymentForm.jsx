import { Elements, CardElement, ElementsConsumer } from "@stripe/react-stripe-js" //These Are Componenets From React-Stripe
import { loadStripe } from "@stripe/stripe-js" //This Is A Function From Stripe
import Review from "./Review"

const stripePromise = loadStripe('pk_test_51Pw5eI2K7IHxG90EwiIiMG4sAM5agfXg9E1VLbWlzKdBE1RvBduB7kV3xJyq9Cemp8PoV2m99ZpJLvyAEHvV3VuK00BXEdjpyI')
const PaymentForm = ({ shippingData, checkoutToken, backStep, nextStep, handleCaptureCheckout}) => {

  async function handleSubmit(event, elements, stripe){
    event.preventDefault();

    if(!stripe || !elements){
      console.log('Stripe || Elements Not Found')
      return
    }

    const cardElement = elements.getElement(CardElement)

    const response = await stripe.createPaymentMethod({ type: 'card' , card: cardElement})
    console.log(response)

    if(response.error){
      console.log('error occured during paymenet : ',response.error)
    }
    else{
      const orderData = {
        line_items: checkoutToken.line_items,
        customer: {
          firstname: shippingData.firstname, 
          lastname: shippingData.lastname, 
          email: shippingData.email
        },
        shipping: {
          name: 'Primary',  
          street: shippingData.address, 
          town_city: shippingData.city, 
          country_state: shippingData.subdivisions,
          postal_zip_code: shippingData.postalcode,
          country: shippingData.countries
        },
        fullfillment: { shipping_method: shippingData.shippingoptions },
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: response.paymentMethod.id
          }
        }
      }

      console.log('checkouttokenid + orderdata : ', checkoutToken.id, orderData)
      handleCaptureCheckout(checkoutToken.id, orderData)

      nextStep()
    }
  }

  return (
    <>
      <Review checkoutToken={checkoutToken}/>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => {
            return (
            <form className="mt-5" onSubmit={(event) => {handleSubmit(event, elements, stripe)}}>
              <CardElement />
              <div className='flex justify-between mt-5'>
                <button type='button' onClick={backStep} className="border border-slate-gray hover:bg-slate-50 px-5 py-2 rounded-md text-xs font-medium font-montserrat text-center uppercase">Back</button>
                <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 font-montserrat outline-none font-medium rounded-md text-sm px-6 py-3 text-center">Pay {checkoutToken.total.formatted_with_symbol}</button>
              </div>
            </form>
            )
          }}
        </ElementsConsumer>
      </Elements>
    </>
  )
}

export default PaymentForm