import HeroImage from "../../assets/banner-img.png"

const Hero = () => {
  return (
    <section className="w-screen h-[91vh] flex justify-center bg-gradient-to-r from-[#8e2de2] to-[#4a00e0]">
      <div className="w-3/4 flex max-900:flex-col-reverse max-900:justify-end max-900:pt-2 max-sm:pt-5 items-center gap-20 max-900:gap-8">
          
      <div className="text-white font-cabin flex flex-col items-center">
        <h1 className="text-8xl 2xl:text-9xl font-bold">SALES</h1>
        <p className="2xl:text-2xl text-center my-5">TrendFusion offers a curated collection of the latest fashion and lifestyle trends, seamlessly blending style and innovation.</p>
        <div className="flex gap-4 text-xs 2xl:text-lg font-medium">
          <button className="uppercase border border-bg-white w-32 py-3">Read More</button>
          <button className="uppercase bg-white text-black w-32 py-3">Shop Now</button>
        </div>
      </div>
      
      <img  
        src={HeroImage} 
        className="w-[400px] 2xl:w-[500px] max-900:w-[250px] max-sm:w-[180px]"
      />
    </div>
    </section>
  )
}

export default Hero