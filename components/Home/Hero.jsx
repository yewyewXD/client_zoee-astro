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
      <BgOverlay opacity={40} />
      <div className="flex flex-col items-center justify-center h-full relative text-center">
        <h1 className="text-6xl font-bold" style={{ width: "700px" }}>
          Ready To Change Your Life With Astrology?
        </h1>
        <div width={"400px"} fontSize={"lg"} mt={4}>
          For self-discovery, relationships, or even self-growth, astrology
          guide you into your life in the best way.
        </div>
        <div className="flex items-center mt-10">
          <button
            className="text-xl px-12 py-7 transition duration-300 rounded-3xl hover:bg-white hover:text-black"
            style={{
              background: "#708285",
            }}
          >
            Book a Reading
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
