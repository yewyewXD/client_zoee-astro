import React from "react";
import BgOverlay from "../BgOverlay";

const Hero = () => {
  return (
    <div
      className="h-screen w-full relative"
      style={{
        background: "url(/images/hero-bg.jpg) no-repeat center center / cover",
      }}
    >
      <BgOverlay opacity={"40"} />
      <div className="text-white flex flex-col items-center justify-center h-full relative text-center">
        <h1 className="text-6xl font-bold" style={{ width: "700px" }}>
          Ready To Change Your Life With Astrology?
        </h1>
        <div className="text-lg mt-6 font-semibold w-4/12 text-gray-100">
          For self-discovery, relationships, or even self-growth, astrology
          guide you into your life in the best way.
        </div>
        <div className="flex items-center mt-10">
          <a href="#" class="btn text-xl font-semibold"></a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
