import ServiceCard from "../Components/ServiceCard"

export default function Services(){
    return (
        <section className="max-container flex justify-center flex-wrap gap-9"> 
            <ServiceCard iconClass={'ri-truck-fill'} heading={'Free shipping'} desc={'Enjoy seamless shopping with our complimentary shipping service.'}/>
            <ServiceCard iconClass={'ri-shield-check-fill'} heading={'Secure Payment'} desc={'Experience worry-free transactions with our secure payment options.'}/>
            <ServiceCard iconClass={'ri-hand-heart-fill'} heading={'Love to help you'} desc={'Our dedicated team is here to assist you every step of the way.'}/>
        </section>
    )
}

//iconClass Is From Remix-Icons.