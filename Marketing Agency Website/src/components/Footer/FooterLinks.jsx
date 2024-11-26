import { Link } from "react-router-dom"

function handleClick() {
    // Scroll to top on component mount
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

export default function FooterLinks({ footerLinks }) {
    return (
        <ul className="flex flex-col max-md:flex-row flex-wrap gap-2 max-sm:gap-3">
            {footerLinks.map((footerLink, index) => {
                return (
                    <li key={index} onClick={handleClick} className="font-montserrat text-white-400 md:mt-3 hover:text-[#24a6fe]">
                        <Link to={footerLink.href}>{footerLink.name}</Link>
                    </li>
                )
            })}
        </ul>
    )
}