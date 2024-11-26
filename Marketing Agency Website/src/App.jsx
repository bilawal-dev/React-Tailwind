import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Services from "./components/Services/Services"
import Portfolio from "./components/Portfolio/Portfolio"
import Contactus from "./components/Contactus/Contactus"
import NewsletterSection from "./components/NewsletterSection"
import Footer from "./components/Footer/Footer"
// import { Header, Home, Category, SingleProduct, Newsletter, Footer } from "./components/index"

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <NewsletterSection />
      <Footer />
    </BrowserRouter>
    </>
  )
}