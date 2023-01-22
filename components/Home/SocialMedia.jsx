import Link from "next/link";
import React from "react";
import socialMedias from "../../json/socialMedias.json";
import Marquee from "react-fast-marquee";
import SecondaryBtn from "../UI/buttons/SecondaryBtn";

const SocialMedia = () => {
  return (
    <div className="bg-purple text-white">
      <div className="lg:py-20 py-14">
        <h2 className="lg:text-5xl text-4xl text-center font-bold">
          Social Media
        </h2>
        <div className="text-center text mt-3 lg:text-xl text-lg mb-20">
          Become a member of the{" "}
          <span className="font-bold">Easy Astrology by Zoee</span> community
          now!
        </div>

        <div className="container-deep">
          <div className="flex justify-between items-center">
            <div>
              <div>
                <h3 className="lg:text-4xl text-3xl font-bold lg:mb-7 mb-4">
                  {socialMedias[0].name}
                </h3>
                <div className="lg:text-xl text-lg w-8/12">
                  {socialMedias[0].text}
                </div>

                <div className="lg:mt-10 mt-7">
                  <Link
                    href={socialMedias[0].link}
                    target="_blank"
                    rel="noreferrer noopener"
                    passHref
                  >
                    <SecondaryBtn>Check it Out</SecondaryBtn>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="h-96 w-80 bg-white"></div>
            </div>
          </div>
        </div>

        <Marquee gradient={false} speed={80} className="my-24">
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
        </Marquee>

        <div className="container-deep">
          <div className="flex flex-row-reverse justify-between items-center">
            <div className="w-5/12">
              <h3 className="lg:text-4xl text-3xl font-bold lg:mb-7 mb-4">
                {socialMedias[1].name}
              </h3>
              <div className="lg:text-xl text-lg">{socialMedias[1].text}</div>

              <div className="lg:mt-10 mt-7">
                <Link
                  href={socialMedias[1].link}
                  target="_blank"
                  rel="noreferrer noopener"
                  passHref
                >
                  <SecondaryBtn>Check it Out</SecondaryBtn>
                </Link>
              </div>
            </div>

            <div>
              <div className="h-96 w-80 bg-white"></div>
            </div>
          </div>
        </div>

        <Marquee
          direction="right"
          gradient={false}
          speed={80}
          className="my-24"
        >
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
        </Marquee>

        <div className="container-deep">
          <div className="flex justify-between items-center">
            <div>
              <div>
                <h3 className="lg:text-4xl text-3xl font-bold lg:mb-7 mb-4">
                  {socialMedias[2].name}
                </h3>
                <div className="lg:text-xl text-lg w-8/12">
                  {socialMedias[2].text}
                </div>

                <div className="lg:mt-10 mt-7">
                  <Link
                    href={socialMedias[2].link}
                    target="_blank"
                    rel="noreferrer noopener"
                    passHref
                  >
                    <SecondaryBtn>Check it Out</SecondaryBtn>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="h-96 w-80 bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
