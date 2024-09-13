import FooterLogoImage from "../assets/images/footer-logo.svg"
import FooterLinks from "../Components/FooterLinks"
import Icon from "../Components/Icon"

export default function Footer(){
    return (
        <section className="w-full flex max-lg:flex-col pb-28 gap-20">
            <div className="w-1/3">
                <img 
                    src={FooterLogoImage}
                    width={150}
                />
                <p className="mt-7 text-white-400 font-montserrat leading-7  max-lg:w-[200%] max-sm:w-[250%]">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
                <div className="mt-6 flex gap-5 ">
                    <a href="https://www.facebook.com/"><Icon iconClass={'ri-facebook-fill'} colorStyle={'bg-white text-black max-sm:px-3 hover: hover:text-blue-500'}/></a>
                    <a href="https://www.x.com/"><Icon iconClass={'ri-twitter-fill'} colorStyle={'bg-white text-black max-sm:px-3 hover: hover:text-blue-500'}/></a>
                    <a href="https://www.instagram.com/"><Icon iconClass={'ri-instagram-fill'} colorStyle={'bg-white text-black max-sm:px-3 hover: hover:text-coral-red'}/></a>
                </div>
            </div>

            <div className="flex flex-wrap gap-28">
                <div className="font-montserrat text-white flex flex-col">
                    <h1 className="font-semibold text-2xl mb-5">Products</h1>
                    <FooterLinks footerLinks={['Air Force 1' , 'Air Max 1' , 'Air Jordan 1' , 'Air Force 2' , 'Nike Waffle Racer' , 'Nike Cortez']}/>
                </div>
                
                <div className="font-montserrat text-white flex flex-col">
                    <h1 className="font-semibold text-2xl mb-5">Help</h1>
                    <FooterLinks footerLinks={['About us' , 'FAQs' , 'How it works' , 'Privacy policy' , 'Payment policy']}/>
                </div>

                <div className="font-montserrat text-white flex flex-col">
                    <h1 className="font-semibold text-2xl mb-5">Get in touch</h1>
                    <FooterLinks footerLinks={['customer@nike.com' , '+92554862354']}/>
                </div>
            </div>

            <div className="absolute bottom-3 left-0 sm:px-16 w-full flex justify-between items-center max-sm:flex-col">
                <p className="font-montserrat text-white-400 flex items-center text-center gap-2"><span className="text-3xl">&copy;</span> Copyright. All rights reserved.</p>
            
                <p className="right-20 font-montserrat text-white-400">Terms & Conditions</p>
            </div>
        </section>
    )
}