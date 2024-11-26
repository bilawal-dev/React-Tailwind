import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import headerLogo from "../../assets/images/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

function DesktopNav() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setScrolled(scrollPosition > window.innerHeight - 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function handleNavScroll() {
        scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <nav className="hidden lg:flex justify-between items-center w-full">
            <motion.div
                initial={{ y: 0, opacity: 1 }}
                animate={scrolled ? { y: -20, opacity: 0 } : { y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`fixed z-20 ${scrolled ? 'top-5 left-14' : 'top-7 p-4'}`}
            >
                {!scrolled && (
                    <Link to={'/'} onClick={handleNavScroll}>
                        <img
                            src={headerLogo}
                            alt="Marketiv."
                            loading="lazy"
                            className="h-24 w-full border-4 object-center object-cover border-b-white bg-black"
                        />
                    </Link>
                )}
            </motion.div>

            <Link to={'/'} className="fixed z-20 top-5 left-14">
                <motion.div
                    href="#Home"
                    initial={{ y: 20, opacity: 0 }}
                    animate={scrolled ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {scrolled && (
                        <h1 className="text-3xl font-spacegrotest font-semibold">Marketiv.</h1>
                    )}
                </motion.div>
            </Link>

            <ul className="flex items-center ms-[25%] xl:ms-[30%] gap-12 text-xl font-spacegrotest font-bold">
                <li><Link to={'/'} onClick={handleNavScroll} className="hover:text-[#24a6fe] transition-all duration-150">Home</Link></li>
                <li><Link to={'/Services'} onClick={handleNavScroll} className="hover:text-[#24a6fe] transition-all duration-150">Services</Link></li>
                <li><Link to={'/Portfolio'} onClick={handleNavScroll} className="hover:text-[#24a6fe] transition-all duration-150">Portfolio</Link></li>
                <li><Link to={'/Contactus'} onClick={handleNavScroll} className="hover:text-[#24a6fe] transition-all duration-150">Contact Us</Link></li>
            </ul>

            <Link to={'/Contactus'} onClick={handleNavScroll} className="font-spacegrotest font-bold text-lg outline-none border-[#24a6fe] border-2 py-2 px-8 cursor-pointer hover:bg-[#24a6fe] hover:text-black transition-all duration-300">
                Contact
            </Link>
        </nav>
    );
}

function MobileNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => setIsMenuOpen((prevValue) => !prevValue);

    const handleLinkClick = () => {
        if (isMenuOpen) setIsMenuOpen(false);

        scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    const menuVariants = {
        hidden: {
            clipPath: 'circle(0% at 100% 0%)',
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        },
        visible: {
            clipPath: 'circle(150% at 50% 50%)',
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
                when: "beforeChildren",
                staggerChildren: 0.1, // Stagger the appearance of child elements
                delayChildren: 0 // Delay before children start to appear
            }
        }
    };

    const linkVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        }
    };

    const socialIconVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        }
    };

    const arrowIconVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        }
    };

    return (
        <nav className="lg:hidden fixed top-0 left-0 w-full text-white z-10">
            <div className="flex justify-between items-center px-5 py-5">
                <Link to={'/'} onClick={handleLinkClick} className="text-3xl font-spacegrotest font-semibold">
                    Marketiv.
                </Link>

                <button
                    className="z-20"
                    onClick={handleMenuClick}
                    aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
                >
                    {isMenuOpen ? <FiX size={35} /> : <FiMenu size={35} />}
                </button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.ul
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                        className="flex flex-col items-center pt-40 gap-[5%] text-[3.5vh] font-bold font-spacegrotest absolute top-0 right-0 w-full h-screen text-center bg-[#171717] shadow-inner-border-black"
                    >
                        <motion.li variants={linkVariants}>
                            <Link to={'/'} onClick={handleLinkClick} className="hover:text-[#24a6fe] transition-all duration-150">Home</Link>
                        </motion.li>
                        <motion.li variants={linkVariants}>
                            <Link to={'/Services'} onClick={handleLinkClick} className="hover:text-[#24a6fe] transition-all duration-150">Services</Link>
                        </motion.li>
                        <motion.li variants={linkVariants}>
                            <Link to={'/Portfolio'} onClick={handleLinkClick} className="hover:text-[#24a6fe] transition-all duration-150">Portfolio</Link>
                        </motion.li>
                        <motion.li variants={linkVariants}>
                            <Link to={'/Contactus'} onClick={handleLinkClick} className="hover:text-[#24a6fe] transition-all duration-150">Contactus</Link>
                        </motion.li>
                        <motion.li variants={linkVariants}>
                            <Link to={'/Contactus'} onClick={handleLinkClick}>
                                <button className="font-spacegrotest font-extrabold text-[2.6vh] outline-none py-3 px-8 cursor-pointer bg-[#24a6fe] text-black transition-all duration-300">Contact</button>
                            </Link>
                        </motion.li>

                        <div className="absolute bottom-5 flex justify-between items-center w-full px-5">
                            <motion.div className="w-full max-sm:w-28 py-2 flex items-center gap-5">
                                <motion.div className="flex gap-1 text-sm text-white">
                                    <motion.a
                                        href="https://www.instagram.com/marketiv.ch?igsh=c3FxY2Z2MDFpZHNz"
                                        target="_blank"
                                        className="bg-transparent p-2 text-[3.2vh] hover:opacity-50 cursor-pointer"
                                        variants={socialIconVariants}
                                    >
                                        <FaFacebookF />
                                    </motion.a>
                                    <motion.a
                                        href="https://www.instagram.com/marketiv.ch?igsh=c3FxY2Z2MDFpZHNz"
                                        target="_blank"
                                        className="bg-transparent p-2 text-[3.2vh] hover:opacity-50 cursor-pointer"
                                        variants={socialIconVariants}
                                    >
                                        <FaTwitter />
                                    </motion.a>
                                    <motion.a
                                        href="https://www.instagram.com/marketiv.ch?igsh=c3FxY2Z2MDFpZHNz"
                                        target="_blank"
                                        className="bg-transparent p-2 text-[3.2vh] hover:opacity-50 cursor-pointer"
                                        variants={socialIconVariants}
                                    >
                                        <FaLinkedinIn />
                                    </motion.a>
                                    <motion.a
                                        href="https://www.instagram.com/marketiv.ch?igsh=c3FxY2Z2MDFpZHNz"
                                        target="_blank"
                                        className="bg-transparent p-2 text-[3.2vh] hover:opacity-50 cursor-pointer"
                                        variants={socialIconVariants}
                                    >
                                        <FaInstagram />
                                    </motion.a>
                                </motion.div>
                            </motion.div>

                            <Link to={'/Contactus'} onClick={handleLinkClick}>
                                <motion.button
                                    className="border-none outline-none p-4 bg-black rounded-full bg-opacity-50"
                                    variants={arrowIconVariants}
                                >
                                    <FaArrowRight />
                                </motion.button>
                            </Link>

                        </div>
                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default function Header() {
    return (
        <header className="fixed top-0 left-0 px-16 max-lg:px-5 py-7 max-lg:py-10 z-50 w-full bg-black text-white">
            <nav className="flex justify-between items-center w-full">
                <DesktopNav />
                <MobileNav />
            </nav>
        </header>
    );
}
