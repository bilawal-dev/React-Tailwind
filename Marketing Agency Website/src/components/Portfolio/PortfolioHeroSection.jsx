import React from 'react'

const PortfolioHeroSection = () => {
    return (
        <div className="pb-28 md:px-8 lg:px-14 text-center">
          <h1 className="text-white uppercase font-montserrat text-xl max-sm:text-lg font-medium">
            See Our Impact
          </h1>
    
          <h2 className="font-spacegrotest font-extrabold text-[150px] max-lg:text-[100px] max-md:text-[80px] max-sm:text-[70px] leading-none tracking-tight">
            Our <span className='text-yellow-500'>work</span>
          </h2>
    
          <p className="py-5  text-white uppercase font-montserrat mx-auto w-3/4 text-lg max-lg:text-md max-sm:text-sm leading-loose font-normal">
            Discover how we’ve transformed businesses with innovative solutions at Marketiv. Explore our diverse range of successful projects and imagine what we can achieve together.
          </p>
        </div>
      )
}

export default PortfolioHeroSection