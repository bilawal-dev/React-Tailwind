import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import image1 from '../../assets/images/portfolio/image1.jpg';
import image2 from '../../assets/images/portfolio/image2.jpg';
import image3 from '../../assets/images/portfolio/image3.jpg';
import image4 from '../../assets/images/portfolio/image5.jpg';
import image5 from '../../assets/images/portfolio/image4.jpg';

export default function ServicesHeroSection() {
  return (
    <section className="w-full bg-neutral-950 p-4 max-sm:pe-0 md:p-8">
      <div className="mx-auto max-w-5xl text-left">
        <Capabilities
          heading="Strategy"
          subheading="Data-Driven Marketing Solutions"
          imgSrc={image1}
        />
        <Capabilities
          heading="Branding"
          subheading="Creating Unique Brand Identities"
          imgSrc={image2}
        />
        <Capabilities
          heading="Digital Marketing"
          subheading="Maximizing Online Presence"
          imgSrc={image3}
        />
        <Capabilities
          heading="Content Creation"
          subheading="Engaging and Relevant Storytelling"
          imgSrc={image4}
        />
        <Capabilities
          heading="Analytics"
          subheading="Insights for Informed Decisions"
          imgSrc={image5}
        />
      </div>
    </section>
  );
}

const Capabilities = ({ heading, imgSrc, subheading }) => {
  const ref = useRef(null);
  const [isClicked, setIsClicked] = useState(false); // State to track if clicked
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle clicked state
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onClick={handleClick} // Add click event handler
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 transition-colors duration-500 cursor-pointer hover:border-neutral-50 py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl max-sm:text-[33px] font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
          whileTap: { scale: isClicked ? 1 : 0 }, // Scale based on clicked state
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.div>
  );
};
