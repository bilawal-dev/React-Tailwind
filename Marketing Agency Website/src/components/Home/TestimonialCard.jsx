export default function TestimonialCard({ desc, authorImage, authorName, authorPosition }){
    return(
            <section className="relative w-1/2 max-md:w-full h-[26rem] bg-[#171717] ">
                <div className="px-4 py-8 mx-auto text-center lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                        <svg className="h-10" viewBox="0 0 24 27" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                fill="currentColor">
                            </path>
                        </svg>

                        <blockquote>
                            <p className="ps-10 text-md text-left font-montserrat text-white font-normal leading-normal">
                                {desc}
                            </p>
                        </blockquote>

                        <figcaption className="ps-10 absolute bottom-5 flex items-center mt-20 gap-5">
                            <img className="w-16 max-sm:w-14 h-16 max-sm:h-14 rounded-full object-cover" src={authorImage} alt="profile picture" />
                            <div className="flex flex-col text-left text-white font-montserrat">
                                <div className="font-bold">{authorName}</div>
                                <div className="text-sm max-sm:text-xs font-medium">{authorPosition}</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>

    )   
}