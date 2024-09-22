import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa"
import paymentsImage from "../../assets/payments.png"
import ContactItem from "./ContactItem"
import FooterList from "./FooterList"

const Footer = () => {
  return (
    <footer id="Footer" className="pt-6 flex flex-col">

      <div className="mx-auto ps-20 max-md:ps-5 grid lg:grid-cols-3 gap-5">
        <div className="font-cabin">
          <h1 className="font-bold mb-3">About</h1>
          <p className="w-[95%] md:w-4/5 text-sm text-slate-gray leading-relaxed">At TrendFusion, we blend the latest fashion and lifestyle trends to keep you stylish and ahead of the curve. Discover unique pieces to elevate your everyday look.        </p>
        </div>

        <div className="font-cabin">
        <h1 className="font-bold mb-3">Contact</h1>
          <ContactItem Icon={FaLocationArrow} desc={'PAF Academy Risalpur Cantt, Risalpur, KPK, Pakistan, 23200'}/>
          <ContactItem Icon={FaMobileAlt} desc={'Phone: 0322-9019199'}/>
          <ContactItem Icon={FaEnvelope} desc={'store@trendfusion.com'}/>
        </div>

        <div className="flex gap-20">
          <div className="font-cabin">
            <h1 className="font-bold mb-3">Categories</h1>
            <FooterList list={['Headphones', 'Smart Watches', 'Bluetooth Speakers', 'Wireless Earbuds', 'Home Theatre', 'Projectors']}/>
          </div>

          <div className="font-cabin">
            <h1 className="font-bold mb-3">Pages</h1>
            <FooterList list={['Home', 'About', 'Privacy Policy', 'Returns', 'Terms & Conditions', 'Contact Us']}/>
          </div>
        </div>
      </div>

      <hr className="h-2 my-2"/>

      <div className="py-2 flex justify-around items-center">
        <p className="max-sm:w-[90%] text-xs font-cabin text-slate-gray uppercase text-center leading-relaxed font-bold">TrendFusion 2024 Created By Muhammad Bilawal. Premium Ecommerce Solutions.</p>
        <img src={paymentsImage} className="max-900:hidden"/>
      </div>
    </footer>
  )
}

export default Footer