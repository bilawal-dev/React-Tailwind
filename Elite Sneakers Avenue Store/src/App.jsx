import Nav from "./Components/Navbar/Nav.jsx"
import Products from "./Components/Products/Products.jsx"
import Cart from "./Components/Cart/Cart.jsx"
import Checkout from "./Components/Checkout/Checkout.jsx"
import { useEffect, useState } from "react"
import { commerce } from "./lib/commerce.js"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"

const App = () => {

  const [products , setProducts] = useState([])
  const [cart , setCart] = useState({})
  const [order , setOrder] = useState({})
  const [error , setError] = useState('')
    
  async function fetchProducts(){
    const response = await commerce.products.list()
    setProducts(response.data)
  }

  async function fetchCart(){
    const response = await commerce.cart.retrieve()
    setCart(response)
  }

  async function addToCart(productID , quantity){
    const response = await commerce.cart.add(productID , quantity)
    setCart(response)
  }

  async function handleUpdateCartQty(productID , quantity) {
    const response = await commerce.cart.update(productID , {quantity : quantity})
    setCart(response)
  }

  async function handleRemoveFromCart(productID){
    const response = await commerce.cart.remove(productID)
    setCart(response)
  }

  async function handleEmptyCart() {
    const response = await commerce.cart.empty()
    setCart(response)
  }

  async function refreshCart() {
    const response = await commerce.cart.refresh()
    setCart(response)
  }

  async function handleCaptureCheckout(checkoutTokenId, newOrder) {
    try {
      const incomingorder = await commerce.checkout.capture(checkoutTokenId, newOrder)
      setOrder(incomingorder)
      refreshCart()
    } catch (error) {
      setError(error.data.error.message)
    }
  }
    
  useEffect(() => {
      fetchProducts()
      fetchCart()
  } , [])

  return (
    <Router>
        <div className="w-screen h-screen">
            <header className="pb-20">
              <Nav totalItems={cart.total_items}/>
            </header>

          <Routes>
            <Route path="/" element={
              <main className="pb-10">
                <Products products={products} addToCart={addToCart}/>
              </main>
            } />

            <Route path="/cart" element={
              cart &&  (
                <section className="pb-10">
                  <Cart 
                    cart={cart} 
                    handleUpdateCartQty={handleUpdateCartQty}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleEmptyCart={handleEmptyCart}
                  />
                </section>
              )
            } />

            <Route path="/checkout" element={
              <Checkout 
                cart={cart}
                order={order}
                handleCaptureCheckout={handleCaptureCheckout}
                error={error}
              />
            } />

          </Routes>
        </div>
    </Router>
  )
}

export default App