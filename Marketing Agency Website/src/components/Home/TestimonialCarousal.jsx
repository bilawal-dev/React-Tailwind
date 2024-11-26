import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import testimonialimage1 from '../../assets/images/testimonial/testimonialimage1.jpeg';
import testimonialimage2 from '../../assets/images/testimonial/testimonialimage2.webp';
import testimonialimage3 from '../../assets/images/testimonial/testimonialimage3.jpg';
import testimonialimage4 from '../../assets/images/testimonial/testimonialimage4.jpg';
import testimonialimage5 from '../../assets/images/testimonial/testimonialimage5.png';
import testimonialimage6 from '../../assets/images/testimonial/testimonialimage6.jpeg';
import TestimonialCard from './TestimonialCard';

const TestimonialCarousel = () => {
  const slides = [
    [
      {
        desc: "We are very pleased with the work that Envisionit delivers. Their creativity, attention to detail and collaborative approach are exceptional. They craft engagement campaigns that capture the essence of our brand, and their data-driven decision-making helps optimize our efforts for maximum impact.",
        authorImage: testimonialimage1,
        authorName: "Michael Gouch",
        authorPosition: "Strategic Marketing Director, Galena Country"
      },
      {
        desc: "As a global leader in payment processing, NMI has been aggressively expanding into new markets with new product offerings. To accomplish this hyper growth, NMI turned to the team at Envisionit to both effectively and efficiently identify, discover, and engage these new audiences.",
        authorImage: testimonialimage2,
        authorName: "Rita Chen",
        authorPosition: "Director of Revenue Growth, NMI"
      }
    ],
    [
      {
        desc: "Envisionit played an instrumental role in the success and growth of Braintree. Their partnership with our marketing team, and deep understanding of payments, allowed us to develop campaigns that drove positive ROI and positioned Braintree as a Fintech Leader",
        authorImage: testimonialimage3,
        authorName: "Tracey Weinberg",
        authorPosition: "SVP of Marketing, Braintree"
      },
      {
        desc: "We appreciate their results-driven approach … taking the time to understand our mission and objectives then putting together a strategic game plan to achieve those objectives.",
        authorImage: testimonialimage4,
        authorName: "Scott Paddock",
        authorPosition: "President, Chicagoland Speedway"
      }
    ],
    [
      {
        desc: "I truly value Envisionit’s partnership as we’ve scaled our programs, evolving further towards digital forward as an organization. Bringing efficiency and insight into how we engage our audiences, we’ve seen continued growth since day one.",
        authorImage: testimonialimage5,
        authorName: "Omar Albertelli",
        authorPosition: "VP of Marketing, Choose Chicago"
      },
      {
        desc: "Envisionit rose to the challenge. Not only capturing the essence of Yoko’s vision, but providing a means to connect this initiative with a larger global audience.",
        authorImage: testimonialimage6,
        authorName: "Robert Karr",
        authorPosition: "Founder, Project120"
      }
    ],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768); // Track screen size

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const updateMedia = () => {
    setIsSmallScreen(window.innerWidth < 768); // Update state based on window size
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia); // Add event listener
    return () => window.removeEventListener('resize', updateMedia); // Clean up
  }, []);

  return (
    <div className="w-full relative">
      <div className="overflow-hidden h-[26rem]">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            className="flex justify-between gap-5"
            initial={{ opacity: 0, x: 100 }} // Start from right
            animate={{ opacity: 1, x: 0 }} // Move to center
            exit={{ opacity: 0.5, x: 0 }} // Move out to left
            transition={{ duration: 0.2 }} // Duration of the animation
          >
            {isSmallScreen ? ( // Check if screen width is less than md
              <TestimonialCard
                key={0}
                desc={slides[currentIndex][0].desc}
                authorImage={slides[currentIndex][0].authorImage}
                authorName={slides[currentIndex][0].authorName}
                authorPosition={slides[currentIndex][0].authorPosition}
              />
            ) : (
              slides[currentIndex].map((testimonial, idx) => (
                <TestimonialCard
                  key={idx}
                  desc={testimonial.desc}
                  authorImage={testimonial.authorImage}
                  authorName={testimonial.authorName}
                  authorPosition={testimonial.authorPosition}
                />
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        className="absolute top-1/2 left-0 max-sm:left-3 -translate-x-7 translate-y-[-50%] bg-white-400 opacity-50 hover:opacity-100 text-black px-6 max-sm:px-3 py-4 max-sm:py-1 rounded-full"
        onClick={handlePrev}
      >
        &#10094;
      </button>

      <button
        className="absolute top-1/2 right-0 max-sm:right-3 translate-x-7 translate-y-[-50%] bg-white-400 opacity-50 hover:opacity-100 text-black px-6 max-sm:px-3 py-4 max-sm:py-1 rounded-full"
        onClick={handleNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default TestimonialCarousel;
