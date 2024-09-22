import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header, Home, Category, SingleProduct, Newsletter, Footer } from "./components/index"
import AppContext from "./utilities/context"

export default function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:title" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  )
}