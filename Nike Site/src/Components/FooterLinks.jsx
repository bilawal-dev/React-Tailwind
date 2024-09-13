export default function FooterLinks({footerLinks}){
    return (
        <div className="flex flex-col gap-5">
            <ul>
                {footerLinks.map((footerLink , index) => {
                    return <li key={index} className="font-montserrat text-white-400 mt-3 hover:text-slate-gray">
                                <a href="/">{footerLink}</a>
                            </li>
                })}
            </ul>
        </div>
    )
}