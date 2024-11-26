import { useEffect } from 'react';
import ServicesHeroSection from "./ServicesHeroSection"
import ServicesContent from "./ServicesContent"
import ServicesHeading from './ServicesHeading';
import ServicesSolution from './ServicesSolution';


export default function Services() {
  useEffect(() => {
    scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <section id="Testimonials" className="relative w-full pb-20 pt-40 flex flex-col items-center text-center text-white bg-black overflow-hidden">
      <ServicesHeading />

      <ServicesHeroSection />

      <ServicesContent />

      <ServicesSolution />
    </section>
  )
}