import { useEffect } from 'react';
import Projects from './Projects';
import PortfolioHeroSection from './PortfolioHeroSection';
import ShuffleSection from './ShuffleSection';
import Example from './test';

export default function Portfolio() {

  useEffect(() => {
    scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <section id="Testimonials" className="relative w-full pb-10 pt-40 flex flex-col items-center text-center text-white bg-black overflow-hidden">
      <PortfolioHeroSection />

      <ShuffleSection />

      {/* <Example /> */}

      <Projects />

    </section>
  )
}