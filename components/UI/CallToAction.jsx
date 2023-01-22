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
      <div className="relative py-24">
        <div className="mb-8 lg:text-5xl text-4xl font-semibold">
          Work with me
        </div>
        <Link href="/services" passHref>
          <PrimaryBtn />
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
