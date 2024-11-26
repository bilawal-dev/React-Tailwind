import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollPortfolio from "./ScrollPortfolio";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.1 });
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        setShouldAnimate(isInView);
    }, [isInView]);

    const words = text.split(" ");

    return (
        <div ref={ref} className="text-center">
            <h2 className="font-spacegrotest sticky top-[10vh] font-extrabold text-[90px] max-md:text-[70px] max-sm:text-[36px] leading-none">
                {words.map((word, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: shouldAnimate ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: shouldAnimate ? index * 0.2 : 0 }}
                        className="inline-block"
                    >
                        {word}
                        <span>&nbsp;</span>
                    </motion.span>
                ))}
            </h2>
        </div>
    );
};

const AnimatedImage = ({ src, alt, title, description, additionalClasses = "" }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
  
    useEffect(() => {
      gsap.fromTo(ref.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.5, scrollTrigger: {
          trigger: ref.current,
          start: "top 80%"
        }});
    }, []);
  
    const handleMouseMove = (event) => {
      const rect = ref.current.getBoundingClientRect();
      const xVal = (event.clientX - rect.left) / rect.width - 0.5;
      const yVal = (event.clientY - rect.top) / rect.height - 0.5;
      gsap.to(ref.current, { rotationY: xVal * 30, rotationX: -yVal * 30 });
    };
  
    return (
      <div
        ref={ref}
        className={`relative w-[420px] max-lg:w-[320px] mx-auto cursor-pointer ${additionalClasses}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          gsap.to(ref.current, { rotationY: 0, rotationX: 0, duration: 1 });
        }}
        onMouseMove={handleMouseMove}
      >
        <img
          src={src}
          alt={alt}
          className={`rounded-sm object-center object-cover w-full h-[400px] transition-transform duration-300`} // Set fixed height here
        />
        {/* Overlay for larger screens */}
        <div className={`absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"} max-lg:opacity-100`}>
          <h3 className="text-md font-semibold">{title}</h3>
          <p className="my-2 text-2xl font-montserrat font-bold">{description}</p>
        </div>
      </div>
    );
  };


export default function PortfolioSection() {
    const animatedText = "We're a marketing agency designed to deliver the greatest impact.";

    return (
        <section id="Portfolio">
            <div className="flex flex-col items-center pt-10 sm:pb-28 pb-20 px-4 md:px-8 lg:px-14 text-white text-left bg-black overflow-hidden">
                <AnimatedText text={animatedText} />
            </div>
            <ScrollPortfolio />
        </section>
    );
}
