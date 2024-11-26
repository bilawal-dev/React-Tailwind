import { useRef, useState, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useMotionTemplate, useMotionValue, useSpring,} from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = 20 / 2;

const ProjectCard = ({ src, alt, title, description }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative w-full mx-auto shadow-[0_0px_10px_5px_rgba(255,255,255,0.1)]"
        >
            <img
                src={src}
                alt={alt}
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                loading="lazy"
                className={`rounded-sm object-center object-cover w-full h-[450px] max-sm:h-[400px] transition-transform duration-300`}
            />

            {/* Overlay */}
            <div 
                className={`absolute inset-0 flex flex-col justify-end p-5 text-left text-white bg-black bg-opacity-30`}
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
            >
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="my-2 text-[35px] max-lg:text-[25px] max-md:text-lg leading-tight font-montserrat font-bold">{description}</p>
            </div>

        </motion.div>
    );
};

export default ProjectCard;