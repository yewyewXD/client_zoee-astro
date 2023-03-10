import React from "react";
import BgOverlay from "./BgOverlay";
import PrimaryBtn from "./buttons/PrimaryBtn";

const Footer = ({ hideBg }) => {
  return (
    <footer
      className="text-center text-white relative bg-red"
      style={
        !hideBg
          ? {
              background:
                "url(/images/hero-bg.jpg) no-repeat center center / cover",
            }
          : {}
      }
    >
      {!hideBg && <BgOverlay opacity={"0.4"} />}
      <div className="relative sm:py-8 py-4 px-6 font-semibold">
        Copyright {new Date().getFullYear()} @ easy.astrology.by.zoee
      </div>
    </footer>
  );
};

export default Footer;
