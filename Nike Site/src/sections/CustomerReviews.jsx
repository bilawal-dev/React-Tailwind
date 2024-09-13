import CustomerImage1 from "../assets/images/customer1.jpeg"
import CustomerImage2 from "../assets/images/customer2.svg"
import CustomerReviewCard from "../Components/CustomerReviewCard"

export default function CustomerReviews(){
    return (
        <section className="w-full min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-bold font-palanquin max-lg:text-center">What Our <span className="text-coral-red">Customers</span> Say?</h1>
            <p className="mt-5 w-[45%] text-center leading-6 text-slate-gray text-lg font-montserrat max-lg:w-2/3">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
            <div className="mt-20 flex gap-2">
                <CustomerReviewCard image={CustomerImage1} name={'Morich Brown'} desc={"The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"}/>
                <CustomerReviewCard image={CustomerImage2} name={'Lota Mongeskar'} desc={"The product not only met but exceeded my expectations. I'll definitely be a returning customer!"} />
            </div>
        </section>
    )
}