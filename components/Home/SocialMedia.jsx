import Link from "next/link";
import React, { useEffect, useState } from "react";
import socialMedias from "../../json/socialMedias.json";
import Marquee from "react-fast-marquee";
import SecondaryBtn from "../UI/buttons/SecondaryBtn";
import Image from "next/image";

const SocialMedia = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    async function getIgPosts() {
      const res = await fetch("/api/instagram");
      const { data } = await res.json();
      const newData = data.filter(
        (item) => item.media_type === "CAROUSEL_ALBUM"
      );
      setPosts(newData.slice(0, 10));
    }
    getIgPosts();
  }, []);

  return (
    <div className="bg-purple text-white">
      <div className="lg:py-20 py-14">
        <h2 className="lg:text-5xl text-4xl text-center font-bold">
          Social Media
        </h2>
        <div className="capitalize text-center text mt-3 lg:text-2xl sm:text-xl md:mb-20 mb-10">
          Become a member of the{" "}
          <span className="font-bold">Easy Astrology by Zoee</span> community
          now!
        </div>

        {/* Instagram */}
        <div className="container-deep">
          <div className="flex md:flex-row flex-col-reverse justify-between items-center">
            <div className="md:text-left text-center">
              <div>
                <h3 className="lg:text-4xl sm:text-3xl text-2xl font-bold lg:mb-7 sm:mb-4 mb-3">
                  {socialMedias[0].name}
                </h3>
                <div className="lg:text-xl sm:text-lg md:w-8/12">
                  The best way to know when I open{" "}
                  <b>spots for consultations</b>! Follow my daily life, ask me
                  questions, and learn a <i>unique</i> vision of astrology with
                  interesting videos and post <u>everyday</u>!
                </div>

                <div className="lg:mt-10 sm:mt-7 mt-5">
                  <Link
                    href={socialMedias[0].link}
                    target="_blank"
                    rel="noreferrer noopener"
                    passHref
                  >
                    <SecondaryBtn>
                      I Want To Stay Tuned About Consultations
                    </SecondaryBtn>
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:mb-0 mb-6">
              <Image
                src={socialMedias[0].cover}
                className="rounded-2xl shadow-md shadow-black"
                alt=""
                width={400}
                height={500}
                quality={100}
              />
            </div>
          </div>
        </div>

        {posts?.length > 0 && (
          <Marquee
            gradient={false}
            speed={80}
            className="md:my-18 my-10"
            style={{ overflowX: "auto" }}
          >
            {posts.map((post) => (
              <a
                href={post.permalink}
                target={"_blank"}
                rel="noopener noreferrer"
                className="h-60 w-60 mx-4 rounded-lg smooth hover:scale-110 cursor-pointer my-6 shadow-lg shadow-black hover:shadow-xl"
                key={post.id}
                style={{
                  background: `url(${
                    post.thumbnail_url || post.media_url
                  }) no-repeat center center / cover`,
                }}
              ></a>
            ))}
          </Marquee>
        )}

        {/* TikTok */}
        <div className="container-deep">
          <div className="flex md:flex-row-reverse flex-col-reverse justify-between items-center">
            <div className="md:w-5/12 md:text-left text-center">
              <h3 className="lg:text-4xl sm:text-3xl text-2xl font-bold lg:mb-7 sm:mb-4 mb-3">
                {socialMedias[1].name}
              </h3>
              <div className="lg:text-xl sm:text-lg">
                You prefer videos? No problem! Learn astrology in an{" "}
                <i>easy and entertaining</i> way with short funny videos! No
                bullshit Sun sign astrology, just{" "}
                <b>real astrology knowledge</b>.
              </div>

              <div className="lg:mt-10 sm:mt-7 mt-5">
                <Link
                  href={socialMedias[1].link}
                  target="_blank"
                  rel="noreferrer noopener"
                  passHref
                >
                  <SecondaryBtn>I Want To Learn Astrology Easily</SecondaryBtn>
                </Link>
              </div>
            </div>

            <div className="md:mb-0 mb-6">
              <Image
                src={socialMedias[1].cover}
                className="rounded-2xl shadow-md shadow-black"
                alt=""
                width={320}
                height={500}
                quality={100}
              />
            </div>
          </div>
        </div>

        <Marquee
          direction="right"
          gradient={false}
          speed={80}
          className="md:my-18 my-10"
        >
          {socialMedias[1].marqueeImages.map((img) => (
            <a
              href={img.link}
              target={"_blank"}
              rel="noopener noreferrer"
              className="h-72 w-60 mx-4 rounded-lg smooth hover:scale-110 cursor-pointer my-6 shadow-lg shadow-black hover:shadow-xl"
              key={img.src}
              style={{
                background: `url(${img.src}) no-repeat center center / cover`,
              }}
            ></a>
          ))}
        </Marquee>

        {/* Twitter */}
        <div className="container-deep">
          <div className="flex md:flex-row flex-col-reverse justify-between items-center">
            <div className="md:text-left text-center">
              <div>
                <h3 className="lg:text-4xl sm:text-3xl text-2xl font-bold lg:mb-7 sm:mb-4 mb-3">
                  {socialMedias[2].name}
                </h3>
                <div className="lg:text-xl sm:text-lg md:w-8/12">
                  You have been lied to about astrology. I’m here to change
                  that. Find <i>true</i> and <i>exclusive</i> astrology{" "}
                  <b>advices</b> and <b>knowledge</b>, learn astrology{" "}
                  <i>easily</i>, participate to debates and stay updated about
                  my consultations!
                </div>

                <div className="lg:mt-10 sm:mt-7 mt-5">
                  <Link
                    href={socialMedias[2].link}
                    target="_blank"
                    rel="noreferrer noopener"
                    passHref
                  >
                    <SecondaryBtn>
                      I Want To Get Exclusive Astrology Knowledge
                    </SecondaryBtn>
                  </Link>
                </div>
              </div>
            </div>

            <div className="sm:block hidden md:mb-0 mb-6 shadow-md shadow-black rounded-xl">
              <a
                className="twitter-timeline"
                data-width="380"
                data-height="500"
                href="https://twitter.com/easyastrobyzoee?ref_src=twsrc%5Etfw"
              >
                Loading tweets... (refresh page if not showing)
              </a>
            </div>

            <div className="sm:hidden mb-6 shadow-md shadow-black rounded-xl">
              <a
                className="twitter-timeline"
                data-width="280"
                data-height="380"
                href="https://twitter.com/easyastrobyzoee?ref_src=twsrc%5Etfw"
              >
                Loading tweets... (refresh page if not showing)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
