import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { commerce } from '../../lib/commerce'

const AddressForm = ({checkoutToken , next}) => {

  const { register , handleSubmit , reset } = useForm()


  const [shippingCountries , setShippingCountries] = useState([])
  const [shippingCountry , setShippingCountry] = useState('')
  const [shippingSubdivisions , setShippingSubdivisions] = useState([])
  const [shippingSubdivision , setShippingSubdivision] = useState(null)
  const [shippingOptions, setShippingOptions] = useState([])
  const [shippingOption , setShippingOption] = useState('')


  useEffect(() => {
    fetchShippingCountries(checkoutToken.id)
  }, [])

  useEffect(() => {
    if(shippingCountry === ''){
      setShippingSubdivisions([])
      setShippingOptions([])
    }

    fetchShippingSubdivisions(shippingCountry)
    fetchShippingOptions(checkoutToken.id  , shippingCountry , null)
  }, [shippingCountry])
  
  async function fetchShippingCountries(checkoutTokenId){
    const response = await commerce.services.localeListShippingCountries(checkoutTokenId)
    setShippingCountries(response.countries)
  }

  async function fetchShippingSubdivisions(shippingCountry){
    
    const response = await commerce.services.localeListSubdivisions(shippingCountry)
    setShippingSubdivisions(response.subdivisions)
  }

  async function fetchShippingOptions(checkoutTokenId , shippingCountry , shippingSubdivision){
    const response = await commerce.checkout.getShippingOptions(checkoutTokenId , {country : shippingCountry , region : shippingSubdivision});
    setShippingOptions(response)
  }


  function handleFormSubmit(data){
    next(data)
    // reset() Reset The Form And Empty All Input Elements
  }

  return (
    <>
      <h1 className='font-semibold text-lg font-montserrat'>Shipping Address</h1>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="grid gap-6 my-6 md:grid-cols-2 font-montserrat">
                
            <input type="text" id="firstname" className="border-b-2 outline-none text-gray-900 text-sm  focus:border-gray-500 block w-full p-2" placeholder="First name *" required {...register('firstname')} />                
            <input type="text" id="lastname" className="border-b-2 text-gray-900 outline-none text-sm  focus:border-gray-500 block w-full p-2" placeholder="Last name *" required {...register('lastname')}/>                
            <input type="text" id="address" className="border-b-2 text-gray-900 outline-none text-sm  focus:border-gray-500 block w-full p-2" placeholder="Address *" required {...register('address')}/>                 
            <input type="email" id="email" className="border-b-2 text-gray-900 outline-none text-sm  focus:border-gray-500 block w-full p-2" placeholder="Email *" required {...register('email')}/>                
            <input type="text" id="city" className="border-b-2 text-gray-900 outline-none text-sm  focus:border-gray-500 block w-full p-2" placeholder="City *" required {...register('city')}/>                
            <input type="text" id="postalcode" className="border-b-2 text-gray-900 outline-none text-sm  focus:border-gray-500 block w-full p-2" placeholder="ZIP / Postal Code *" required {...register('postalcode')}/>
                     
            <div>
              <label htmlFor="countries" className="text-xs font-montserrat text-slate-gray">Shipping Country</label>
              <select id="countries" className="border-b-2 text-gray-900 outline-none text-sm  focus:border-gray-500 block w-full py-1 cursor-pointer" required {...register('countries')} onChange={(event) => {setShippingCountry(event.target.value)}}>
                <option value=''>Choose a country</option>
                {Object.entries(shippingCountries).map((shippingCountry) => {
                  return <option value={shippingCountry[0]} key={shippingCountry[0]}>{shippingCountry[1]}</option>
                })}
              </select>
            </div>   

            <div>
              <label htmlFor="subdivisions" className="text-xs font-montserrat text-slate-gray">Shipping Subdivisions</label>
              <select id="subdivisions" className="border-b-2 text-gray-900 outline-none text-sm  focus:border-gray-500 block w-full py-1" required {...register('subdivisions')} onChange={(event) => {setShippingSubdivision(event.target.value)}}>
                <option value=''>Choose a subdivision</option>
                {Object.entries(shippingSubdivisions).map((shippingSubdivision) => {
                    return <option value={shippingSubdivision[0]} key={shippingSubdivision[0]}>{shippingSubdivision[1]}</option>
                })}
              </select>
            </div>   

            <div>
               <label htmlFor="shippingoptions" className="text-xs font-montserrat text-slate-gray">Shipping Options</label>
               <select id="shippingoptions" className="border-b text-gray-900 outline-none text-sm  focus:border-gray-500 block w-full py-1" required {...register('shippingoptions')}>
               <option value=''>Choose a shipping option</option>
                {shippingOptions.map((shippingOption) => {
                  return <option value={shippingOption.id} key={shippingOption.id}>{`${shippingOption.description} - ${shippingOption.price.formatted_with_symbol}`}</option>
                })}
              </select>
            </div>

          </div>

          <div className='flex justify-between'>
             <Link to={'/cart'}>
                <button type='button' className="border border-slate-gray hover:bg-slate-50 px-2 py-2 rounded-md text-xs font-medium font-montserrat text-center uppercase">Back To Cart</button>
             </Link>
            <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 font-montserrat outline-none font-medium rounded-md text-sm px-6 py-2 text-center">Next</button>
          </div>
      </form>
    </>
  )
}

export default AddressForm