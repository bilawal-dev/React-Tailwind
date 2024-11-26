import { Link } from "react-router-dom";

export default function AboutusSection() {
    return (
        <section id="About Us" className="w-full pt-20 pb-28 px-4 md:px-8 lg:px-14 text-white text-left bg-black overflow-hidden">
            <h1 className="text-white uppercase font-montserrat text-xl max-sm:text-lg font-medium">
                Digital marketing, strategy, and solutions
            </h1>

            <h2 className="sm:pt-5 pt-2 w-full md:w-8/12 max-lg:w-10/12 font-spacegrotest font-extrabold xl:text-[70px] lg:text-[60px] md:text-[55px] sm:text-[40px] text-[36px] leading-none">
                Marketing at the speed of opportunity
            </h2>

            <p className="pt-12 max-sm:pt-8 pb-5 font-montserrat max-lg:text-sm text-md lg:w-10/12 max-sm:leading-relaxed">
                Strategy, creative, media, and technology expertise. That alone is not enough. You need an agency that acts as your partner, deeply understands your industry, and has the ability to help you seize every opportunity while creating a few new ones along the way.
            </p>

            <Link to={'/Services'}>
                <button className="font-spacegrotest font-bold text-lg outline-none py-3 px-8 cursor-pointer bg-[#24a6fe] text-black border-2 border-transparent hover:text-white hover:bg-black hover:border-[#24a6fe] transition-all duration-300">
                    Why us
                </button>
            </Link>
        </section>
    );
}
