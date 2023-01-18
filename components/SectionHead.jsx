import React from "react";
import BgOverlay from "./BgOverlay";

const SectionHead = ({ title }) => {
  return (
    <div
      className="h-96 flex justify-center items-center text-white relative bg-green"
      style={{
        background: "url(/images/hero-bg.jpg) no-repeat center center / cover",
      }}
    >
      <BgOverlay opacity={"0.4"} />
      <h2 className="text-5xl text-center font-bold relative">{title}</h2>
    </div>
  );
};

export default SectionHead;
