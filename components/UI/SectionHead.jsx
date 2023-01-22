import React from "react";
import BgOverlay from "./BgOverlay";

const SectionHead = ({ title }) => {
  return (
    <div
      className="lg:h-96 h-80 flex justify-center items-center text-white relative bg-green"
      style={{
        background: "url(/images/hero-bg.jpg) no-repeat top center / cover",
      }}
    >
      <BgOverlay opacity={"0.4"} />
      <h2 className="lg:text-5xl text-4xl text-center font-bold relative">
        {title}
      </h2>
    </div>
  );
};

export default SectionHead;
