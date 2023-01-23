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
        <div className="text-center text mt-3 lg:text-xl text-lg md:mb-20 mb-10">
          Become a member of the{" "}
          <span className="font-bold">Easy Astrology by Zoee</span> community
          now!
        </div>

        {/* Instagram */}
        <div className="container-deep">
          <div className="flex md:flex-row flex-col-reverse justify-between items-center">
            <div className="md:text-left text-center">
              <div>
                <h3 className="lg:text-4xl text-3xl font-bold lg:mb-7 mb-4">
                  {socialMedias[0].name}
                </h3>
                <div className="lg:text-xl text-lg md:w-8/12">
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
              <div className="md:h-96 h-72 md:w-80 w-60 bg-white mb:mb-0 mb-8"></div>
            </div>
          </div>
        </div>

        <Marquee gradient={false} speed={80} className="md:my-24 my-16">
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
        </Marquee>

        {/* TikTok */}
        <div className="container-deep">
          <div className="flex md:flex-row-reverse flex-col-reverse justify-between items-center">
            <div className="md:w-5/12 md:text-left text-center">
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
              <div className="md:h-96 h-72 md:w-80 w-60 bg-white mb:mb-0 mb-8"></div>
            </div>
          </div>
        </div>

        <Marquee
          direction="right"
          gradient={false}
          speed={80}
          className="md:my-24 my-16"
        >
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
          <div className="h-60 w-60 bg-white mx-4"></div>
        </Marquee>

        {/* Twitter */}
        <div className="container-deep">
          <div className="flex md:flex-row flex-col-reverse justify-between items-center">
            <div className="md:text-left text-center">
              <div>
                <h3 className="lg:text-4xl text-3xl font-bold lg:mb-7 mb-4">
                  {socialMedias[2].name}
                </h3>
                <div className="lg:text-xl text-lg md:w-8/12">
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
              <div className="md:h-96 h-72 md:w-80 w-60 bg-white mb:mb-0 mb-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
