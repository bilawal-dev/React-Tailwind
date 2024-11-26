import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ServicesHeading = () => {
    const headingRef = useRef(null);
  
    useEffect(() => {
      const chars = headingRef.current.querySelectorAll('span.char');
      gsap.fromTo(
        chars,
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.05,
          duration: .5,
          ease: 'power1.inOut',
        }
      );
    }, []);
  
    const splitText = (text) =>
      text.split('').map((char, index) => (
        <span key={index} className="char">
          {char}
        </span>
      ));
  
    return (
      <div className="pb-28 md:px-8 lg:px-14">
        <h2
          ref={headingRef}
          className="font-spacegrotest font-extrabold text-[150px] max-lg:text-[100px] max-md:text-[80px] max-sm:text-[65px] leading-none tracking-tight"
        >
          {splitText('Our')}
          <br />
          <span className="text-red-500">{splitText('Capabilites')}</span>
        </h2>
      </div>
    );
  };

export default ServicesHeading;
