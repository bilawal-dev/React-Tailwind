import { useState } from "react";
import heroSectionDesktopVideo from '../../assets/videos/Home Hero Video For Desktop.mp4';
import heroSectionMobileVideo from '../../assets/videos/Home Hero Video For Mobile.mp4';

export default function HeroSection() {
    return (
        <section id="Home" className="relative w-full lg:mt-20 pe-14 bg-black min-h-screen">
            <video 
                className="hidden sm:block absolute inset-0 w-full h-full transition-transform duration-300" 
                autoPlay 
                loop 
                muted 
                playsInline
            >
                <source src={heroSectionDesktopVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <video 
                className="hidden max-sm:block absolute inset-0 object-cover w-full h-full transition-transform duration-300" 
                autoPlay 
                loop 
                muted 
                playsInline
            >
                <source src={heroSectionMobileVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    );
}
