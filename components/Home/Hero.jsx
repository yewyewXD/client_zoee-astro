import React from "react";
import BgOverlay from "../UI/BgOverlay";
import PrimaryBtn from "../UI/buttons/PrimaryBtn";

const Hero = () => {
  return (
    <div
      className="h-screen w-full relative"
      style={{
        background: "url(/images/hero-bg.jpg) no-repeat center center / cover",
      }}
    >
      <BgOverlay opacity={"0.4"} />
      <div className="container text-white flex flex-col items-center justify-center h-full relative text-center">
        <h1 className="xl:text-6xl md:text-5xl text-3xl font-bold 2xl:w-6/12 lg:w-7/12">
          Ready To Change Your Life With Astrology?
        </h1>
        <div className="text-lg md:mt-6 mt-4 font-semibold xl:w-4/12 lg:w-6/12 md:w-8/12 text-gray-100">
          For self-discovery, relationships, or even self-growth, astrology
          guide you into your life in the best way.
        </div>
        <div className="flex items-center lg:mt-10 mt-6">
          <PrimaryBtn />
        </div>
      </div>
    </div>
  );
};

export default Hero;
