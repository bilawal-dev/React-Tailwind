import HeroSection from "./HeroSection"
import AboutusSection from "./AboutusSection"
import PortfolioSection from "./PortfolioSection"
import TestimonialSection from "./TestimonialSection"
import { useEffect } from "react"

const Home = () => {

  useEffect(() => {
    scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <section className="overflow-hidden">
      <HeroSection />
      <AboutusSection />
      <PortfolioSection />
      <TestimonialSection />
    </section>
  )
}

export default Home