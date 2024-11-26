import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function NewsletterSection() {

  const [email, setEmail] = useState('');

  function handleEmailSubmit(event) {
    event.preventDefault();
    console.log(email)
    setEmail('');
  }

  function handleArrowClick() {
    scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <section id="ContactSection" className="relative bg-white pt-32 max-sm:pt-20 pb-10 px-5 sm:px-10 lg:px-16 overflow-hidden">
      <div className="xl:w-11/12 flex justify-between max-lg:flex-col-reverse max-lg:gap-16">

        <div className="flex justify-between max-lg:flex-col xl:gap-36 gap-10 mx:gap-10">

          {/* Left Column */}
          <div className="flex ">
            <a
              href="https://www.google.com/maps/place/Zürich,+Switzerland"
              target="_blank"
              className="leading-relaxed text-black text-base font-montserrat font-medium hover:text-sky-500 cursor-pointer"
            >
              Jurastrasse 17,
              <br />
              4900 Langenthal
              <br />
              Zürich,
              <br />
              Switzerland
            </a>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col max-lg:flex-row flex-wrap xl:gap-16 gap-10">
            <ul className="flex flex-col gap-1 text-black text-base font-montserrat font-medium">
              <a
                href="https://www.instagram.com/marketiv.ch?igsh=c3FxY2Z2MDFpZHNz"
                target="_blank"
                className="hover:text-sky-500"
              >

                Twitter / X

              </a>

              <a
                href="https://www.instagram.com/marketiv.ch?igsh=c3FxY2Z2MDFpZHNz"
                target="_blank"
                className="hover:text-sky-500"
              >

                Instagram

              </a>

              <a
                href="https://www.instagram.com/marketiv.ch?igsh=c3FxY2Z2MDFpZHNz"
                target="_blank"
                className="hover:text-sky-500"
              >

                Linkedin

              </a>
            </ul>
            <ul className="flex flex-col gap-1 text-black text-base font-montserrat font-medium">
              <li>General enquiries</li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@marketiv.ch"
                target="_blank"
                className="hover:text-sky-500 cursor-pointer"
              >
                info@marketiv.ch
              </a>          </ul>
            <ul className="flex flex-col gap-1 text-black text-base font-montserrat font-medium">
              <li>New business</li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@marketiv.ch"
                target="_blank"
                className="hover:text-sky-500 cursor-pointer"
              >
                info@marketiv.ch
              </a>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl max-sm:text-[40px] font-montserrat font-medium text-black">
            Subscribe to
            <br />
            our newsletter
          </h2>

          <form onSubmit={handleEmailSubmit} className="mt-5 flex relative w-full  md:w-[450px]">
            <input
              type="email"
              className="w-full px-4 py-4 rounded-3xl font-montserrat bg-slate-100 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#24a6fe]"
              placeholder="Your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button className="absolute right-5  text-3xl text-slate-gray rounded-r-md">
              →
            </button>
          </form>
        </div>
      </div>

      <div className="w-full md:pe-32 pt-20 flex md:items-center justify-between max-md:flex-col max-md:gap-3 text-black font-montserrat font-medium text-sm">
        <h1>&copy; 2024 Marketiv Creative Studio.</h1>

        <h2>R&D: labs.marketiv.co</h2>

        <h3 className="flex items-center gap-2">Built by Marketiv with <span className="text-red-500 text-2xl">♥</span></h3>

      </div>

        <button onClick={handleArrowClick} className="absolute bottom-8 right-10 hover:bottom-10 transition-all duration-300 h-12 w-12 rounded-full flex justify-center items-center bg-black text-white ">
          <FaArrowUp />
        </button>
    </section >
  );
}
