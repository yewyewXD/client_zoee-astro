import React from "react";
import BgOverlay from "../UI/BgOverlay";
import PrimaryBtn from "../UI/buttons/PrimaryBtn";

const Hero = () => {
  return (
    <div className="HeroSection h-screen w-full relative">
      <BgOverlay opacity={"0.4"} />
      <div className="container text-white flex flex-col items-center justify-center h-full relative text-center">
        <div className="xl:text-xl sm:text-lg mb-3">
          For People Who Want To Become The Best Version Of Themselves…
        </div>
        <h1 className="xl:text-6xl md:text-4xl text-3xl font-bold lg:w-7/12">
          How Would You Like To Drastically Change Your Life With Astrology?
        </h1>
        <div className="xl:text-xl sm:text-lg md:mt-6 mt-4 font-semibold xl:w-5/12 lg:w-7/12 md:w-9/12 text-gray-100">
          I use multiple <i>ancient and modern astrology techniques</i> to help
          you discover your <strong>hidden talents</strong>, use your{" "}
          <strong>true potential</strong>, transform <i>drastically</i> your
          relationships and find the <u>happiest life path</u> for you.
        </div>
        <div className="flex items-center lg:mt-10 mt-6">
          <PrimaryBtn>Yes! I Want To Change My Life Now!</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Hero;
