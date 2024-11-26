import { FaRegHandPointDown } from "react-icons/fa";

const HeroSection = () => {
    return (
        <div className="pb-24 md:px-8 lg:px-14">
            <h1 className="text-white uppercase font-montserrat text-xl max-sm:text-lg font-medium">
                Get In Touch
            </h1>

            <h2 className="font-spacegrotest font-extrabold text-[150px] max-lg:text-[100px] max-md:text-[80px] max-sm:text-[70px] leading-none tracking-tight">
                Let’s <span className="text-blue-500">talk</span>
            </h2>

            <p className="py-5 leading-relaxed text-white uppercase font-montserrat text-lg max-lg:text-md max-sm:text-sm max-sm:leading-loose font-normal">
                If you’re looking for an agency that thinks differently, we’d love to chat with you about what challenges you’re navigating for your business today.
            </p>

            <button>
                <a href="#ContactSection"><FaRegHandPointDown className="text-[#24a6fe] text-4xl" /></a>
            </button>
        </div>
    );
};

export default HeroSection;