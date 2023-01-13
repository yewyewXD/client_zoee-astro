import Link from "next/link";
import React from "react";
import socialMedias from "../../json/socialMedias.json";
import Marquee from "react-fast-marquee";

const SocialMedia = () => {
  return (
    <div className="bg-purple text-white">
      <div className="py-20">
        <h2 className="text-5xl text-center font-bold">Social Media</h2>
        <div className="text-center text mt-3 text-xl mb-20">
          Become a member of the{" "}
          <span className="font-bold">Easy Astrology by Zoee</span> community
          now!
        </div>

        <div className="container-deep">
          <div className="flex justify-between items-center">
            <div>
              <div>
                <h3 className="text-4xl font-bold mt-6 mb-7">
                  {socialMedias[0].name}
                </h3>
                <div className="text-xl w-8/12">{socialMedias[0].text}</div>

                <Link
                  href={socialMedias[0].link}
                  target="_blank"
                  rel="noreferrer noopener"
                  passHref
                >
                  <button className="text-xl font-semibold mt-10 border-2 px-10 py-4 hover:bg-white hover:text-black smooth">
                    Check it Out
                  </button>
                </Link>
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
              <h3 className="text-4xl font-bold mt-6 mb-7">
                {socialMedias[1].name}
              </h3>
              <div className="text-xl">{socialMedias[1].text}</div>

              <Link
                href={socialMedias[1].link}
                target="_blank"
                rel="noreferrer noopener"
                passHref
              >
                <button className="text-xl font-semibold mt-10 border-2 px-10 py-4 hover:bg-white hover:text-black smooth">
                  Check it Out
                </button>
              </Link>
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
                <h3 className="text-4xl font-bold mt-6 mb-7">
                  {socialMedias[2].name}
                </h3>
                <div className="text-xl w-8/12">{socialMedias[2].text}</div>

                <Link
                  href={socialMedias[2].link}
                  target="_blank"
                  rel="noreferrer noopener"
                  passHref
                >
                  <button className="text-xl font-semibold mt-10 border-2 px-10 py-4 hover:bg-white hover:text-black smooth">
                    Check it Out
                  </button>
                </Link>
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
