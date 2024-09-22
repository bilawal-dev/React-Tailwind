import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import NewsletterImage from "../../assets/newsletter-bg.jpeg";

const Newsletter = () => {
  return (
    <section className="font-cabin bg-center bg-cover flex flex-col items-center" style={{ backgroundImage: `url(${NewsletterImage})`}}> 
      <h1 className="pt-10 text-sm text-slate-gray uppercase tracking-wider font-bolder">NewsLetter</h1>
      <h2 className="mt-2 mb-4 text-2xl uppercase font-semibold text-center max-sm:px-1">Sign Up For Latest Updates And Offers</h2>
      <div className="flex gap-2">
        <input type="email" placeholder="Email Address" className="border-none outline-none py-1 ps-2 w-64 max-sm:flex-grow" />
        <button className="bg-purple-700 text-white text-sm px-6">Subscribe</button>
      </div>
      <h3 className="mt-3 mb-4 text-sm text-slate-gray">Will Be Used In Accordance With Our Privacy Policy</h3>
      <div className="flex gap-3 pb-5 text-sm text-white">
        <span className="bg-black p-2 rounded-full cursor-pointer">
          <FaFacebookF/>
        </span>
        <span className="bg-black p-2 rounded-full cursor-pointer">
          <FaTwitter />
        </span>
        <span className="bg-black p-2 rounded-full cursor-pointer">
          <FaInstagram />
        </span>
        <span className="bg-black p-2 rounded-full cursor-pointer">
          <FaLinkedinIn />
        </span>
      </div>
    </section>
  )
}

export default Newsletter