import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const GetInTouch = () => {
    // Create refs for the three child divs
    const generalRef = useRef(null);
    const businessRef = useRef(null);
    const accountingRef = useRef(null);

    useEffect(() => {
        // GSAP animation for each section
        const generalAnimation = gsap.fromTo(generalRef.current, 
            { opacity: 0 }, 
            { 
                opacity: 1, 
                duration: 1, 
                scrollTrigger: {
                    trigger: generalRef.current,
                    start: "top 80%", // Trigger when the top of the element reaches 80% of the viewport height
                    toggleActions: "play none none reverse" // Play on enter, reverse on leave
                }
            });

        const businessAnimation = gsap.fromTo(businessRef.current, 
            { opacity: 0 }, 
            { 
                opacity: 1, 
                duration: 1, 
                delay: 0.2, // Delay for the second div
                scrollTrigger: {
                    trigger: businessRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

        const accountingAnimation = gsap.fromTo(accountingRef.current, 
            { opacity: 0 }, 
            { 
                opacity: 1, 
                duration: 1, 
                delay: 0.4, // Delay for the third div
                scrollTrigger: {
                    trigger: accountingRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

        // Cleanup function to kill scroll triggers on unmount
        return () => {
            generalAnimation.scrollTrigger.kill();
            businessAnimation.scrollTrigger.kill();
            accountingAnimation.scrollTrigger.kill();
        };
    }, []);

    return (
        <section id="GetInTouch" className="w-full flex flex-col gap-20 max-lg:gap-16 max-md:gap-10 pt-20 pb-28 px-4 md:px-8 lg:px-14 text-white text-left bg-black overflow-hidden">
            <h2 className="sm:pt-5 pt-2 w-full md:w-8/12 max-lg:w-10/12 font-spacegrotest font-extrabold xl:text-[80px] text-[60px] max-sm:text-[40px] leading-none">
                Get in touch
            </h2>

            <div className="lg:w-4/5 flex justify-between flex-wrap gap-5 max-lg:gap-10">
                <div ref={generalRef} className="flex flex-col text-left gap-3">
                    <h1 className="text-white uppercase font-montserrat text-3xl max-sm:text-xl font-bold">General</h1>
                    <ul className="flex flex-col">
                        <li className="flex items-baseline gap-2">
                            <h1 className="font-bold text-xl max-sm:text-lg">Phone:</h1>
                            <h2 className="font-montserrat max-sm:text-sm cursor-pointer hover:text-[#24a6fe]">+41 77 285 54 95</h2>
                        </li>
                        <li className="flex items-baseline gap-2">
                            <h1 className="font-bold text-xl max-sm:text-lg">Fax:</h1>
                            <h2 className="font-montserrat max-sm:text-sm cursor-pointer hover:text-[#24a6fe]">info@marketiv.ch</h2>
                        </li>
                    </ul>
                </div>

                <div ref={businessRef} className="flex flex-col text-left gap-3">
                    <h1 className="text-white uppercase font-montserrat text-3xl max-sm:text-xl font-bold">New business</h1>
                    <ul className="flex flex-col">
                        <li className="flex items-baseline gap-2">
                            <h1 className="font-bold text-xl max-sm:text-lg">Phone:</h1>
                            <h2 className="font-montserrat max-sm:text-sm cursor-pointer hover:text-[#24a6fe]">+41 77 285 54 95</h2>
                        </li>
                        <li className="flex items-baseline gap-2">
                            <h1 className="font-bold text-xl max-sm:text-lg">Email:</h1>
                            <h2 className="font-montserrat max-sm:text-sm cursor-pointer hover:text-[#24a6fe]">info@marketiv.ch</h2>
                        </li>
                    </ul>
                </div>

                <div ref={accountingRef} className="flex flex-col text-left gap-3">
                    <h1 className="text-white uppercase font-montserrat text-3xl max-sm:text-xl font-bold">Accounting</h1>
                    <ul className="flex flex-col">
                        <li className="flex items-baseline gap-2">
                            <h1 className="font-bold text-xl max-sm:text-lg">Phone:</h1>
                            <h2 className="font-montserrat max-sm:text-sm cursor-pointer hover:text-[#24a6fe]">+41 77 285 54 95</h2>
                        </li>
                        <li className="flex items-baseline gap-2">
                            <h1 className="font-bold text-xl max-sm:text-lg">Email:</h1>
                            <h2 className="font-montserrat max-sm:text-sm cursor-pointer hover:text-[#24a6fe]">info@marketiv.ch</h2>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;