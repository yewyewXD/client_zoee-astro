import Link from "next/link";
import React from "react";
import BgOverlay from "./BgOverlay";
import PrimaryBtn from "./buttons/PrimaryBtn";

const CallToAction = () => {
  return (
    <div
      className="text-white bg-green text-center relative"
      style={{
        background: "url(/images/hero-bg.jpg) no-repeat center center / cover",
      }}
    >
      <BgOverlay opacity={"0.4"} />
      <div className="relative py-24 flex flex-col justify-center items-center">
        <div className="2xl:mb-10 sm:mb-8 mb-6 2xl:text-5xl lg:text-4xl text-3xl font-bold 2xl:w-5/12 lg:w-6/12 md:w-7/12 sm:w-8/12">
          Are You Ready To Drastically Change Your Life With Astrology? Here Is
          What To Do Next…
        </div>
        <Link href="/#services" passHref>
          <PrimaryBtn>Book A Consultation With Me</PrimaryBtn>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
