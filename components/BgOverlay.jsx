import React from "react";

function BgOverlay({ opacity }) {
  return (
    <div
      className={`h-full w-full absolute bg-black`}
      style={{ opacity }}
    ></div>
  );
}

export default BgOverlay;
