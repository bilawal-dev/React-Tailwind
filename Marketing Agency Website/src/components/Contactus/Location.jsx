import React from "react";
import Locationimage from "../../assets/images/locationimage.jpg";

//CHANGE TEXTUAL CONTENT ACCORDING TO THE MARKETING AGENCY POINT OF VIEW marketiv.

const Metric = ({ title, description }) => {
  return (
    <div className="flex flex-col text-left relative">
      <h1 className="text-white font-montserrat text-3xl max-sm:text-xl font-bold before:content-[''] before:block before:w-1 before:h-8 before:bg-sky-400 before:absolute before:-left-3 before:top-3">
        {title}
      </h1>
      <p className="mb-8 w-3/4 font-montserrat text-white-400 text-sm">
        {description}
      </p>
    </div>
  );
};

export default function Location() {
  return (
    <section className="pt-24 pb-20 relative bg-black overflow-hidden w-full flex flex-col px-8 lg:px-14">
      <div>
        <div
          style={{ backgroundImage: `url(${Locationimage})` }}
          className="absolute clip-path inset-0 w-full h-full bg-cover bg-black opacity-50"
        />

        <div className="relative flex flex-col text-left text-white">
          <h1 className="text-lg font-spacegrotest font-bold text-sky-400 md:text-xl">
            Scale Your Reach
          </h1>

          <h2 className="my-5 text-4xl max-sm:text-[35px] font-montserrat text-white font-bold leading-none">
            Transform Your
            <br />
            Digital Presence
          </h2>

          <p className="mt-5 mb-16 font-montserrat w-full md:w-1/2 text-white-400 text-base">
            At Marketiv, we tackle your marketing challenges, propelling your brand to new heights. Our customized strategies and cutting-edge solutions drive visibility and forge enduring connections as you grow your reach.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <Metric title="+ 500" description="Managed over 500 successful campaigns, showcasing our expertise." />
            <Metric title="99.99 %" description="Achieving a 99.99% client satisfaction rate with our services." />
            <Metric title="47+" description="Operating in 47 diverse markets, reflecting our global footprint." />
            <Metric title="135+" description="135 skilled professionals committed to your marketing success." />
          </div>
        </div>

        <style jsx="true">{`
          .clip-path {
            clip-path: polygon(0% 12.5%, 100% 0%, 100% 100%, 0% 100%);
          }
        `}</style>
      </div>
    </section>
  );
}
