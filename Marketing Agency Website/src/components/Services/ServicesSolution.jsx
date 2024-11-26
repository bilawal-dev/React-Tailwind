import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSolution() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate heading text when it enters the viewport
    const headingChars = headingRef.current.querySelectorAll('span.char');
    gsap.fromTo(
      headingChars,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.05,
        duration: .5,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animate cards when they enter the viewport
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const splitText = (text) =>
    text.split('').map((char, index) => (
      <span key={index} className="char">
        {char}
      </span>
    ));

  return (
    <section className="mx-auto w-full px-4 py-12 text-white text-left font-bold font-montserrat">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 ref={headingRef} className="font-montserrat text-4xl font-bold md:text-8xl">
          {splitText('Grow faster with our')}
          <span className="xl:block text-white-400">
            {splitText(' all in one solution')}
          </span>
        </h2>
      </div>

      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4 bg-gradient-to-br from-blue-500 to-indigo-400" ref={(el) => (cardsRef.current[0] = el)}>
          <CardTitle>Strategy And Creative.</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] bg-white bg-opacity-30">
            <span className="block text-center font-semibold text-lg max-lg:text-base text-indigo-50">
                Discover cutting-edge strategies tailored to boost your brand’s effectiveness and reach your target audience.
            </span>
          </div>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-8 bg-gradient-to-br from-yellow-500 to-orange-400" ref={(el) => (cardsRef.current[1] = el)}>
          <CardTitle>Media And Content.</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] bg-white bg-opacity-30">
            <span className="block text-center font-semibold text-lg max-lg:text-base text-orange-50">
                Transform your message into captivating content that resonates with your audience and drives engagement.
            </span>
          </div>
        </BounceCard>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8 bg-gradient-to-br from-red-500 to-orange-600" ref={(el) => (cardsRef.current[2] = el)}>
          <CardTitle>Technology</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] bg-white bg-opacity-30">
            <span className="block text-center font-semibold text-lg max-lg:text-base text-emerald-50">
                Utilize the latest technology to streamline processes and enhance your marketing efforts, ensuring optimal results.
            </span>
          </div>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-4 bg-gradient-to-br from-green-400 to-green-600" ref={(el) => (cardsRef.current[3] = el)}>
          <CardTitle>SEO And Analytics.</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] bg-white bg-opacity-30">
            <span className="block text-center font-semibold text-lg max-lg:text-base text-red-50">
                Drive organic traffic with data-driven SEO strategies and gain valuable insights through comprehensive analytics.
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  );
}

const BounceCard = React.forwardRef(({ className, children }, ref) => {
  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 font-extrabold font-montserrat p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
});

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold leading-tight">{children}</h3>
  );
};
