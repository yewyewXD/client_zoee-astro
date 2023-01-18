import Link from "next/link";
import React from "react";
import BgOverlay from "./BgOverlay";

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
        <div className="mb-8 text-5xl font-semibold">Work with me</div>
        <Link href="/services" passHref>
          <button className="btn text-xl font-semibold"></button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
