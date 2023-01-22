import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-green text-white">
      <div className="py-20">
        <h2 className="text-5xl text-center font-bold mb-20">Who am I?</h2>

        <div className="container-deep">
          <div className="grid grid-cols-3">
            <div className="col-span-2 flex pr-40 items-center">
              <div className="2xl:text-2xl text-xl">
                <div>
                  I’m Zoée, astrologer, consultant and content creator but not
                  only.
                </div>
                <div className="2xl:mt-5 mt-3">
                  Well, I&apos;ll say it again (better too much than not
                  enough): I help people truly understand themselves with
                  astrology to reach happiness. And all of this using multiples
                  ancient and moderns astrology techniques.
                </div>

                <Link passHref href="/about">
                  <button className="2xl:mt-10 mt-7 border-2 border-white px-10 py-4 hover:bg-white hover:text-black smooth">
                    Read more
                  </button>
                </Link>
              </div>
            </div>

            <div className="col-span-1">
              <Image
                className="rounded-full"
                src="/images/about-face.jpeg"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
