// import TestimonialCard from "./TestimonialCard";
import TestimonialCard from "./TestimonialCard";
import TestimonialCarousel from "./TestimonialCarousal";

export default function TestimonialSection() {
    
    return (
        <section id="Testimonials" className="flex flex-col items-center text-center pb-28 px-4 md:px-8 lg:px-14 text-white bg-black overflow-hidden">
            <h1 className="text-white uppercase font-montserrat text-xl max-sm:text-lg font-medium">Testimonials</h1>

            <h2 className=" pt-2 w-full font-spacegrotest font-extrabold text-[60px] leading-none">
                A few kind words
            </h2>

            

            <div className="mt-16 w-full flex items-center justify-center gap-5">
                <TestimonialCarousel />
            </div>


        </section>
    );
}
