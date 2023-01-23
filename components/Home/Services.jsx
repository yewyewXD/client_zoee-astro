import Image from "next/image";
import Link from "next/link";
import React from "react";
import BgOverlay from "../UI/BgOverlay";
import SecondaryBtn from "../UI/buttons/SecondaryBtn";

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

      <div className="container lg:py-20 py-14 text-white relative">
        <h2 className="lg:text-5xl text-4xl text-center font-bold mb-20">
          Services
        </h2>

        <div className="lg:grid grid-cols-3 flex flex-col items-center">
          <div className="col-span-1 lg:flex justify-end">
            <div>
              <Image
                className="rounded-xl"
                src="/images/service-coaching.jpg"
                alt=""
                height={300}
                width={300}
              />
            </div>
          </div>
          <div className="col-span-2 flex justify-center items-center lg:pl-40 lg:text-left text-center">
            <div>
              <h3 className="lg:text-4xl text-3xl font-bold mt-6 mb-7">
                Coaching Astrology
              </h3>
              <div className="lg:text-xl text-lg lg:w-7/12 sm:w-9/12 lg:mx-0 mx-auto">
                Give you the keys to reach your goals. In Coaching Astrology,
                your birth chart describe who you should be to achieve
                happiness, success and efficiency.
              </div>

              <div className="sm:flex items-center lg:justify-start justify-center mt-10 text-xl">
                <Link passHref href="/services">
                  <SecondaryBtn>See all services</SecondaryBtn>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
