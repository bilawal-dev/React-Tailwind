import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from "../../assets/images/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import FooterLinks from "./FooterLinks";

export default function Footer() {

    return (
        <section className="px-5 sm:px-16 sm:pt-24 pt-12 w-full flex max-lg:flex-col pb-28 gap-20 bg-black overflow-hidden">
            <div className="w-1/3">
                <div className="w-36 max-sm:w-28 py-2 flex items-center gap-5">
                    <img
                        src={headerLogo}
                        alt="Nike"
                        loading="lazy"
                        className="h-24 max-sm:h-20 w-full border-2 object-center object-cover border-b-white"
                    />
                    <div className="flex gap-1 text-sm text-white">
                        <a
                            href="https://www.instagram.com/marketiv.ch?igsh=c3FxY2Z2MDFpZHNz"
                            target="_blank"
                            className="bg-black p-2 text-lg hover:bg-white hover:text-black cursor-pointer"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://www.instagram.com/marketiv.ch?igsh=c3FxY2Z2MDFpZHNz"
                            target="_blank"
                            className="bg-black p-2 text-lg hover:bg-white hover:text-black cursor-pointer"
                        >
                            <FaTwitter />
                        </a>

                        <a
                            href="https://www.instagram.com/marketiv.ch?igsh=c3FxY2Z2MDFpZHNz"
                            target="_blank"
                            className="bg-black p-2 text-lg hover:bg-white hover:text-black cursor-pointer"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="https://www.instagram.com/marketiv.ch?igsh=c3FxY2Z2MDFpZHNz"
                            target="_blank"
                            className="bg-black p-2 text-lg hover:bg-white hover:text-black cursor-pointer"
                        >

                            <FaInstagram />

                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-left mt-7 text-white font-montserrat leading-7 max-lg:w-[200%] max-sm:w-[250%]">
                    <a
                        href="tel:+41772855495"
                        className="hover:text-slate-gray cursor-pointer"
                    >
                        +41 77 285 54 95
                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=info@marketiv.ch"
                        target="_blank"
                        className="hover:text-slate-gray cursor-pointer"
                    >
                        info@marketiv.ch
                    </a>


                    <a
                        href="https://www.google.com/maps/place/Zürich,+Switzerland"
                        target="_blank"
                        className="hover:text-slate-gray cursor-pointer"
                    >
                        Jurastrasse 17, 4900 Langenthal
                        Zürich, Switzerland
                    </a>

                </div>
            </div>

            <div className="flex flex-wrap gap-28 max-md:gap-16 max-sm:mb-10">
                <div className="font-montserrat text-white flex flex-col">
                    <h1 className="font-semibold text-2xl mb-5">Expertise</h1>
                    <FooterLinks
                        footerLinks={[
                            { name: 'Our work', href: '/Portfolio' },
                            { name: 'Solutions', href: '/Portfolio' },
                            { name: 'Technology', href: '/Portfolio' },
                            { name: 'Solutions', href: '/Portfolio' },
                            { name: 'Insights', href: '/Portfolio' }
                        ]}
                    />
                </div>

                <div className="font-montserrat text-white flex flex-col">
                    <h1 className="font-semibold text-2xl mb-5">Capabilities</h1>
                    <FooterLinks
                        footerLinks={[
                            { name: 'Strategy', href: '/Services' },
                            { name: 'Creative', href: '/Services' },
                            { name: 'Paid Media', href: '/Services' },
                            { name: 'Content marketing', href: '/Services' },
                            { name: 'Technology', href: '/Services' },
                            { name: 'Data and analytics', href: '/Services' },
                            { name: 'SEO', href: '/Services' }
                        ]}
                    />
                </div>

                <div className="font-montserrat text-white flex flex-col">
                    <h1 className="font-semibold text-2xl mb-5">Agency</h1>
                    <FooterLinks
                        footerLinks={[
                            { name: 'Get in Touch', href: '/Contactus' },
                            { name: 'Our Location', href: '/Contactus' },
                            { name: 'Contact', href: '/Contactus' }
                        ]}
                    />
                </div>
            </div>

            <div className="absolute bottom-3 left-0 sm:px-16 w-full flex justify-between items-center max-md:flex-col max-md:gap-2">
                <p className="font-montserrat text-white-400 flex items-center text-center gap-2">&copy; 2024 Marketiv Switzerland. All Rights Reserved.</p>

                <Link to={'/Contactus'} className="right-20 font-montserrat text-white-400 cursor-pointer hover:text-[#24a6fe]">
                    For Inquiries, Please Contact Us
                </Link>
            </div>
        </section>
    );
}
