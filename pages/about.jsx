import Head from "next/head";
import Image from "next/image";
import React from "react";
import BgOverlay from "../components/BgOverlay";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionHead from "../components/SectionHead";

const About = () => {
  return (
    <div>
      <Head>
        <title>About | Easy Astrology By Zoée</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo-color.png" />
      </Head>

      <Navbar />

      <main className="text-white">
        <SectionHead title={"About Me"} />

        <div className="bg-green py-20">
          <div className="container-deep relative">
            <div className="grid grid-cols-3">
              <div className="col-span-2 flex pr-20 items-center">
                <div className="text-2xl">
                  <div className="font-bold">
                    I’m Zoée, astrologer, consultant and content creator but not
                    only.
                  </div>
                  <div className="mt-5">
                    Well, I&apos;ll say it again (better too much than not
                    enough): I help people truly understand themselves with
                    astrology to reach happiness. And all of this using
                    multiples ancient and moderns astrology techniques.
                  </div>

                  <div className="mt-5">
                    Well, apart from that I love reading books on many subjects!
                    Psychology, holistic medicines, spirituality but mainly
                    astrology. Simply, I LOVE learning and deepening my
                    astrology knowledge and skills! Because my passion for it
                    constantly motivates me to progress and learn.
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <Image
                  className="rounded-full"
                  src="/images/about-face.jpeg"
                  alt=""
                  width={340}
                  height={400}
                />
              </div>
            </div>

            <div className="text-2xl">
              <div className="mt-6">
                Fun fact: I did breakdance for 6 years (yes you read it right,
                it&apos;s the dance you turn on your head haha). But you are
                going to tell me “what does that have to do with astrology?”.
                Well, I learned discipline and tenacity. Never give up until you
                have achieved your goals. It’s why I chose to follow my passion
                and take the challenging way of becoming an astrologer.
              </div>

              <div className="mt-5">
                Otherwise, I am also passionate about cooking. I love cooking
                for my family and friends. Simply because I love serving others.
                But what I love more than anything is making them happy and
                satisfied (like my clients).
              </div>

              <div className="mt-5">
                Come on, a last passion (I have too much of it lol)… I love art!
                Painting in particular. I put myself in the place of those who
                observe the painting and I try to understand the influence of
                colors, lines, and shapes on the observators. And in astrology?
                Well I try to understand the influence of the celestial bodies
                on humans behaviors, traits, health and emotions.
              </div>

              <div className="mt-5">
                One last thing (after I stop talking about myself), honesty is
                one of the most important values in my opinion. So if I see that
                I can&apos;t help you, I will NEVER sell you my services (not
                like those manipulators who just want to make money). I only
                work with people I know I can help.
              </div>
            </div>
          </div>
        </div>

        <div
          className="text-white bg-green text-center relative"
          style={{
            background:
              "url(/images/hero-bg.jpg) no-repeat center center / cover",
          }}
        >
          <BgOverlay opacity={"0.4"} />
          <div className="relative py-20">
            <div className="mb-8 text-5xl font-semibold">Work with me</div>
            <button className="btn text-xl font-semibold"></button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
