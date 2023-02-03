import Image from "next/image";
import Link from "next/link";
import React from "react";
import SecondaryBtn from "../UI/buttons/SecondaryBtn";

const AboutMe = () => {
  return (
    <div className="bg-green text-white">
      <div className="lg:py-20 py-14">
        <h2 className="2xl:text-5xl text-4xl text-center font-bold md:mb-20 mb-10">
          About Me
        </h2>

        <div className="container-deep">
          <div className="md:grid grid-cols-3 flex flex-col-reverse">
            <div className="col-span-2 flex lg:pr-40 md:pr-20 items-center">
              <div className="2xl:text-2xl 2xl:text-xl sm:text-lg md:text-left text-center">
                <div>
                  I’m Zoée, astrologer, consultant and content creator but not
                  only.
                </div>
                <div className="2xl:mt-5 mt-3">
                  I help people to <u>truly</u> understand themselves and{" "}
                  <i> change their life</i> with astrology and give them{" "}
                  <b>practical keys</b> to reach happiness. All of this using
                  multiples ancient and moderns astrology techniques.
                </div>

                <div className="2xl:mt-10 mt-7"></div>
                <Link passHref href="/about">
                  <SecondaryBtn>Discover Who Am I</SecondaryBtn>
                </Link>
              </div>
            </div>

            <div className="col-span-1 md:flex hidden items-center">
              <Image
                className="rounded-full shadow-md shadow-black"
                src="/images/about-face.jpeg"
                alt=""
                width={400}
                height={400}
              />
            </div>

            <div className="md:hidden flex justify-center mb-8">
              <Image
                className="rounded-full shadow-md shadow-black"
                src="/images/about-face.jpeg"
                alt=""
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
