import {Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer} from "./sections/Sections.js"
import Nav from "./Components/Nav.jsx"

export default function App() {
  return (
    <main className="relative">
      <Nav />
      
      <section>
        <Hero/>
      </section>

      <section className="padding">
        <PopularProducts />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>

      <section className="padding-x py-10">
        <Services />
      </section>

      <section className="padding">
        <SpecialOffer />
      </section>

      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>

      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>

      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}