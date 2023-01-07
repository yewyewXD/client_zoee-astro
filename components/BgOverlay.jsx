import React from "react";

const BgOverlay = ({ opacity }) => {
  return (
    <div className={`h-full w-full absolute bg-black opacity-${opacity}`}></div>
  );
};

export default BgOverlay;
