import { ReactLenis } from "lenis/dist/lenis-react";
import { motion, useMotionTemplate, useScroll, useTransform, useMotionValue, useSpring, } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import centerImage from '../../assets/images/scrollcenterimage.jpg'

gsap.registerPlugin(ScrollTrigger);

export default function ScrollPortfolio() {
  return (
    <div className="bg-black mb-28">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Hero />
        {/* <Schedule /> */}
      </ReactLenis>
    </div>
  );
};

const SECTION_HEIGHT = 1300;

const Hero = () => {
  return (
    <section className="flex flex-col items-center">
      <div style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }} className="relative w-full flex flex-col items-center">
        <CenterImage />
        <ParallaxImages />
      </div>

      <Link to={'/portfolio'}>
        <button className="md:mt-10 font-spacegrotest font-bold text-lg outline-none py-3 px-8 cursor-pointer bg-[#24a6fe] text-black border-2 border-transparent hover:text-white hover:bg-black hover:border-[#24a6fe] transition-all duration-300">
          See all work
        </button>
      </Link>
    </section>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [1000, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [1000, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0.2]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          `url(${centerImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto md:w-11/12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-md:gap-10 py-20">
      <div>
        <AnimatedImage
          src={image1}
          title="Innovative Marketing Solutions"
          description="Pioneering new ideas."
        />
      </div>
      <div className="lg:pt-20">
        <AnimatedImage
          src={image2}
          title="Strategic"
          description="Planned for success."
        />
      </div>
      <div>
        <AnimatedImage
          src={image3}
          title="Creative Vision"
          description="Boundless imagination."
        />
      </div>
      <div className="lg:pt-20">
        <AnimatedImage
          src={image4}
          title="Reliable"
          description="Trusted by brands."
        />
      </div>
    </div>
  );
};

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = 20 / 2;

const AnimatedImage = ({ src, alt, title, description }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

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

  useEffect(() => {
    gsap.fromTo(ref.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.5, scrollTrigger: {
          trigger: ref.current,
          start: "top 80%"
        }
      });
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseMove()
      }}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className={`relative w-[420px] max-lg:w-[320px] mx-auto shadow-[0_0px_10px_5px_rgba(255,255,255,0.1)]`}
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
        className={`absolute inset-0 flex flex-col justify-end p-4 text-white bg-black bg-opacity-50 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"} max-lg:opacity-100`}
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}>
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="my-2 text-2xl font-montserrat font-bold">{description}</p>
      </div>

    </motion.div>
  );
};