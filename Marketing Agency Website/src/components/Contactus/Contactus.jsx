import contactImage from '../../assets/images/contactpageimage.jpg';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Location from "./Location";
import GetInTouch from "./GetInTouch";
import ContactUsHeroSection from './ContactUsHeroSection'

gsap.registerPlugin(ScrollTrigger);

export default function Contactus() {
    const imageRef = useRef(null);

    useEffect(() => {
        // Initial image size animation setup
        gsap.fromTo(imageRef.current, 
            { width: "70%" }, 
            { 
                width: "100%", 
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 80%",
                    end: "top 30%", // When to reverse the animation
                    scrub: true // Smoothly animate during scroll
                }
            });

        // Scroll to top on component mount
        scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <section id="Testimonials" className="relative w-full pt-40 flex flex-col items-center text-center text-white bg-black overflow-hidden">
            <ContactUsHeroSection />
            <img
                ref={imageRef}
                src={contactImage}
                className="h-[60vh] max-sm:h-[30vh] object-cover"
            />
            
            <GetInTouch />
            
            <Location />
        </section>
    );
}
