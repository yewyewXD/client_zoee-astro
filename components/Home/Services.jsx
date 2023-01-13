import Image from "next/image";
import React from "react";
import BgOverlay from "../BgOverlay";

const Services = () => {
  return (
    <div
      style={{
        background:
          "url(/images/services-bg.jpg) no-repeat center center / cover",
      }}
      className="relative"
    >
      <BgOverlay opacity={"0.6"} />

      <div className="container py-20 text-white relative">
        <h2 className="text-5xl text-center font-bold mb-20">Services</h2>

        <div className="grid grid-cols-3 items-center">
          <div className="col-span-1 flex justify-end">
            <div className="p-3 rounded-xl ServiceCard">
              <Image
                src="/images/service-img.png"
                className="rounded-xl"
                alt=""
                height={200}
                width={300}
              />
            </div>
          </div>
          <div className="col-span-2 flex justify-center items-center pl-40">
            <div>
              <h3 className="text-4xl font-bold mt-6 mb-7">
                Coaching Astrology
              </h3>
              <div className="text-xl w-7/12">
                Give you the keys to reach your goals. In Coaching Astrology,
                your birth chart describe who you should be to achieve
                happiness, success and efficiency.
              </div>

              <div className="flex items-center mt-10">
                <a href="#" className="btn text-xl font-semibold"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
