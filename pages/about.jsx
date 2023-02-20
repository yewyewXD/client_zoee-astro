import Head from "next/head";
import Image from "next/image";
import React from "react";
import CallToAction from "../components/UI/CallToAction";
import Footer from "../components/UI/Footer";
import Navbar from "../components/UI/Navbar";
import SectionHead from "../components/UI/SectionHead";

const OutBoundLink = ({ children, href }) => (
  <a
    className="font-bold underline smooth hover:opacity-80 cursor-pointer"
    target={"_blank"}
    rel="noreferrer noopener nofollow"
    href={href}
  >
    {children}
  </a>
);

const About = () => {
  return (
    <div>
      <Head>
        <title>About | Easy Astrology By Zoée</title>
        <meta
          name="description"
          content="I’m Zoée, astrologer, consultant and content creator but not only. I help people to truly understand themselves and change their life with astrology and give them practical keys to reach happiness. All of this using multiple ancient and modern astrology techniques."
        />
        <link rel="icon" href="/images/logo-color.png" />
      </Head>

      <Navbar />

      <main className="text-white">
        <SectionHead title={"About Me"} />

        <div className="bg-green lg:py-20 py-14">
          <div className="container relative">
            {/* Section 1 */}
            <div
              className="lg:grid grid-cols-3 flex flex-col-reverse"
              id="who-am-i"
            >
              <div className="col-span-2 flex lg:pr-20 items-center">
                <div className="2xl:text-xl text-lg">
                  <div className="mb-5 font-bold lg:text-3xl text-xl">
                    Who am I?
                  </div>
                  <div>
                    I’m Zoée, astrologer, consultant and content creator but not
                    only.
                  </div>
                  <div className="mt-5">
                    I help people to <u>truly</u> understand themselves and{" "}
                    <i> change their life</i> with astrology and give them{" "}
                    <b>practical keys</b> to reach happiness. All of this using
                    multiple ancient and modern astrology techniques.
                  </div>

                  <div className="mt-5">
                    What I am doing outside of astrology? So many things! For
                    example, I love reading books on many subjects: psychology,
                    holistic medicines, spirituality (but mainly astrology).
                  </div>

                  <div className="mt-5">
                    Simply, I love <i>learning and deepening</i> my astrology
                    knowledge and skills! Because my passion for it constantly
                    motivates me to progress and learn.
                  </div>

                  <div className="mt-5">
                    Fun fact: I did breakdance for 6 years (it&apos;s the dance
                    you spin on your head). But you probably wonder tell me
                    “what does that have to do with astrology?”.
                  </div>

                  <div className="mt-5">
                    Well, I learned <b>discipline</b> and <b>tenacity</b>.
                    “Never give up until you have achieved your goals”. It’s why
                    I chose to follow my passion and take the challenging way of
                    becoming an astrologer.
                  </div>

                  <div className="mt-5">
                    Oh, and I am also passionate about cooking. I love cooking
                    for my family and friends. I just love serving others. But
                    what I love more than anything is to make them happy and
                    satisfied (just like my clients).
                  </div>

                  <div className="mt-5">
                    Come on, a last passion… I love art! Painting in particular.
                    I try to understand the influence of colors, lines, and
                    shapes on others. And in astrology? I try to understand the
                    influence of the celestial bodies on humans behaviors,
                    traits, health and emotions and on the world.
                  </div>

                  <div className="mt-5">
                    One last thing, <b>honesty</b> is one of my most important
                    values. So if I see that I can&apos;t help you, I will NEVER
                    sell you my services (I really hate those manipulators who
                    just want to make money). I only work with people I know I
                    can help.
                  </div>
                </div>
              </div>
              <div className="col-span-1 lg:flex hidden items-center justify-end">
                <Image
                  className="rounded-full shadow-md shadow-black"
                  src="/images/about-face.jpeg"
                  alt=""
                  width={340}
                  height={400}
                />
              </div>

              <div className="lg:hidden flex justify-center mb-10">
                <Image
                  className="rounded-full shadow-md shadow-black"
                  src="/images/about-face.jpeg"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
            </div>

            {/* Section 2 */}
            <div
              className="lg:grid flex-col grid-cols-3 lg:mt-32 mt-14"
              id="my-story"
            >
              <div className="col-span-1 lg:flex hidden items-center">
                <Image
                  className="rounded-xl shadow-md shadow-black"
                  src="/images/about-img2.jpeg"
                  alt=""
                  width={380}
                  height={500}
                />
              </div>
              <div className="lg:hidden flex justify-center mb-10">
                <Image
                  className="rounded-xl shadow-md shadow-black"
                  src="/images/about-img2.jpeg"
                  alt=""
                  width={300}
                  height={200}
                />
              </div>

              <div className="col-span-2 flex lg:pl-20 items-center">
                <div className="2xl:text-xl text-lg">
                  <div className="mb-5 font-bold lg:text-3xl text-xl">
                    My Story With Astrology
                  </div>
                  <div>
                    Everything started when I was 8 years old. My mom gave me a
                    little paper calendar. It was the first time I discovered my
                    Sun sign. I immediately thought “What?! Why I’m a bull?”
                    (yes, I’m a Taurus haha).
                  </div>

                  <div className="mt-5 font-bold">
                    It was the first time of my life I heard about astrology.
                  </div>

                  <div className="mt-5">
                    Then I kept on <u>trying to understand</u> the other Sun
                    signs of my family. How do they behave? Why do they get
                    along well? Why they don’t?
                  </div>

                  <div className="mt-5">
                    At around 14 years old, I discovered again astrology. Like
                    most of the people, it was through those stupid{" "}
                    <i>Sun sign astrology</i> social media post (I’m sure you
                    know what I’m talking about).
                  </div>

                  <div className="mt-5">
                    Again, I was trying find a logic in the Zodiac signs
                    compatibilities. My mind was restless.{" "}
                    <b>I couldn’t stop thinking about it.</b>
                  </div>

                  <div className="mt-5">
                    But everything changed one day, when I was 16 years old. I
                    met someone that <b>completely</b> changed my vision of
                    astrology. She explained to me that we have a whole birth
                    chart and not just a Sun sign.
                  </div>

                  <div className="mt-5">
                    I became <b>obsessed</b> with astrology and I always wanted
                    to get the birth info of people to look at their birth chart
                    (we all did this lol). I had discovered a magic tool that
                    made me able to truly understand myself and others.
                  </div>

                  <div className="mt-5">
                    At this time I was at high school and I was talking{" "}
                    <u>all the time</u> to my friends, my family and my
                    boyfriend about astrology (they even got annoyed at some
                    points lol). But the truth was that I just loved{" "}
                    <b>help them with astrology.</b>
                  </div>

                  <div className="mt-5">
                    At this time, I was very depressed. I hated high school. I
                    had the feeling to lose my time learning things I don’t care
                    about. I was isolated in my friends group. To make it
                    simple, I was feeling at the <i>wrong place</i>.
                  </div>

                  <div className="mt-5">
                    So, I ended up quitting high school overnight in my last
                    year and <i>I moved from Switzerland to Malaysia at 17</i>{" "}
                    (thanks to my boyfriend for his help).
                  </div>

                  <div className="mt-5">
                    Here I became <b>happy</b> like never. But… I was still{" "}
                    <b>lost</b> about what to do. I had so many passion but I
                    always ended up give up all of them.
                  </div>

                  <div className="mt-5">
                    One day, I had a discussion with my boyfriend about{" "}
                    <i>what should I do in my life</i>. And he told me: “What
                    about astrology? You keep talking about it to me all the
                    time”.
                  </div>

                  <div className="mt-5">
                    I realised astrology has always been{" "}
                    <b>my biggest passion</b>. So it’s how I decided to go all
                    in learning astrology. And finally become an astrologer to
                    help others becoming <i>happy</i>
                    and <i>changing their life</i>.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div
              className="lg:grid grid-cols-3 flex flex-col-reverse lg:mt-32 mt-14"
              id="my-journey"
            >
              <div className="col-span-2 flex lg:pr-20 items-center">
                <div className="2xl:text-xl text-lg">
                  <div className="mb-5 font-bold lg:text-3xl text-xl">
                    My Learning Journey
                  </div>
                  <div>
                    Everyone that start learning astrology will feel this: there
                    is a <b>crazy huge</b> amount of data to learn and
                    understand about astrology. Without surprise, I felt the
                    same.
                  </div>

                  <div className="mt-5">
                    But I was so passionate that it didn’t stopped me. So, after
                    few years of intensive learning,<b> I made it</b>. I
                    mastered enough the symbols and techniques of astrology
                    (even if we never really master it completely lol) and
                    became an <i>astrologer</i>.
                  </div>

                  <div className="mt-5">
                    I know, you probably wonder: “what did you do to achieve
                    this??”
                  </div>

                  <div className="mt-5">
                    The answer is simple: I didn’t rest lol.
                  </div>

                  <div className="mt-5">
                    No seriously, I had to go through{" "}
                    <b>+300 hours of podcasts and videos</b>. Dozens of French
                    and English <b>astrology books</b>. Many{" "}
                    <b>online courses</b> like The Professional Astrologer
                    Course by Chris Brennan and the{" "}
                    <i>Career and Life Direction in Astrology</i> course by
                    Kelly Surtees.
                  </div>

                  <div className="mt-5">
                    You think that’s a lot? That’s not finish! (it would be too
                    easy)
                  </div>

                  <div className="mt-5">
                    I had also to go through{" "}
                    <b>hundreds of hours of practice</b> by reading{" "}
                    <b>+100 charts</b> for people around the world (but also my
                    family and friends) before doing it professionally.
                  </div>

                  <div className="mt-5">
                    But honestly, what taught me the most was…
                  </div>

                  <div className="mt-5">
                    Applying astrology in my <i>daily life</i>. Anytime I wanted
                    to understand a situation, I looked at my transits,
                    someone’s birth chart, the synastry chart and whatever thing
                    that could help me understand what was going on…
                  </div>

                  <div className="mt-5">
                    To make it simple, I truly learned astrology by my own{" "}
                    <b>everyday observations</b> on myself and others.
                  </div>

                  <div className="mt-5">
                    My main influences in my astrology learning are:{" "}
                    <OutBoundLink href="https://www.chrisbrennanastrologer.com/">
                      Chris Brennan
                    </OutBoundLink>
                    ,{" "}
                    <OutBoundLink href="https://www.sebastien-michel.com/">
                      Sebastien Michel
                    </OutBoundLink>
                    ,{" "}
                    <OutBoundLink href="https://www.forrestastrology.com/">
                      Steven Forrest
                    </OutBoundLink>
                    ,{" "}
                    <OutBoundLink href="https://loureinnobrac.fr/astrologie/">
                      Lou Reinnobrac
                    </OutBoundLink>
                    ,{" "}
                    <OutBoundLink href="https://www.kellysastrology.com/">
                      Kelly Surtees
                    </OutBoundLink>{" "}
                    and{" "}
                    <OutBoundLink href="https://francois-barthomeuf.com/">
                      François Barthomeuf
                    </OutBoundLink>
                    .
                  </div>
                </div>
              </div>
              <div className="col-span-1 lg:flex hidden items-center justify-end">
                <Image
                  className="rounded-xl shadow-md shadow-black"
                  src="/images/about-img3.jpeg"
                  alt=""
                  width={380}
                  height={500}
                />
              </div>

              <div className="lg:hidden flex justify-center mb-10">
                <Image
                  className="rounded-xl shadow-md shadow-black"
                  src="/images/about-img3.jpeg"
                  alt=""
                  width={300}
                  height={200}
                />
              </div>
            </div>

            {/* Section 4 */}
            <div className="lg:mt-32 mt-14" id="why-i-chose">
              <div className="2xl:text-xl text-lg">
                <div className="mb-8 font-bold lg:text-3xl text-xl">
                  The 5 Reasons Why I Chose Astrology
                </div>

                <div>
                  <div className="font-bold mb-3 lg:text-2xl text-xl flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-6 h-6 mr-4"
                    >
                      <path d="M352 96c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM240 248V512l-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427V224c0-17.7 14.3-32 32-32H62.3c63.6 0 125.6 19.6 177.7 56zm32 264V248c52.1-36.4 114.1-56 177.7-56H480c17.7 0 32 14.3 32 32V427c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z" />
                    </svg>
                    #1 You never stop learning{" "}
                  </div>
                  <p>
                    Even if I would put my whole life in reading all the
                    astrology books, watch all the videos and take all the
                    courses, I wouldn’t even learn half of it! I just{" "}
                    <b>love learning</b> and feeling like an eternal student.
                    Never stopping to discover new things about astrology makes
                    my passion for it grow even more!
                  </p>
                </div>

                <div className="mt-5">
                  <div className="font-bold mb-3 lg:text-2xl text-xl flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      className="w-8 h-8 mr-4"
                    >
                      <path d="M160 128c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64zM88 480V400H70.2c-10.9 0-18.6-10.7-15.2-21.1l31.1-93.4L57.5 323.3c-10.7 14.1-30.8 16.8-44.8 6.2s-16.8-30.7-6.2-44.8L65.4 207c22.4-29.6 57.5-47 94.6-47s72.2 17.4 94.6 47l58.9 77.7c10.7 14.1 7.9 34.2-6.2 44.8s-34.2 7.9-44.8-6.2l-28.6-37.8L265 378.9c3.5 10.4-4.3 21.1-15.2 21.1H232v80c0 17.7-14.3 32-32 32s-32-14.3-32-32V400H152v80c0 17.7-14.3 32-32 32s-32-14.3-32-32zM480 128c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64zm-8 256v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V300.5L395.1 321c-9.4 15-29.2 19.4-44.1 10s-19.4-29.2-10-44.1l51.7-82.1c17.6-27.9 48.3-44.9 81.2-44.9h12.3c33 0 63.7 16.9 81.2 44.9L619.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L552 300.5V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H472z" />
                    </svg>
                    #2 You Can Truly Understand Yourself And Others.{" "}
                  </div>
                  <p>
                    What made me fall in love for astrology is really this one
                    thing: being able to <u>understand human behaviors</u>{" "}
                    (psychology basically). Their emotions, tastes, fears,
                    relationships and whatever you can imagine. Honestly,
                    psychology is really fascinating but astrology makes it{" "}
                    <i>clearer, easier and more accurate!</i>
                  </p>
                </div>

                <div className="mt-5">
                  <div className="font-bold mb-3 lg:text-2xl text-xl flex items-center">
                    <svg
                      className="w-6 h-6 mr-4 mb-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                    #3 It’s A Meaning Of Life.{" "}
                  </div>
                  <p>
                    When you learn astrology, you will think about it all the
                    time. Simply because it’s <u>everywhere</u>! Astrology
                    explain to us what we are meant to do in this life. But also
                    that we are deeply connected to the Universe!
                  </p>
                </div>

                <div className="mt-5">
                  <div className="font-bold mb-3 lg:text-2xl text-xl flex items-center">
                    <svg
                      className="w-6 h-6 mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" />
                    </svg>
                    #4 It’s Not Just Astrology.{" "}
                  </div>
                  <p>
                    To make it simple, astrology is a{" "}
                    <b>really complete discipline</b>: psychology, mathematics,
                    mythology, history, and way more. If you want to become
                    astrologer nowadays, you need to master social media,
                    marketing, writing, etc. As a very versatile person, I just{" "}
                    <i>love this</i>.
                  </p>
                </div>

                <div className="mt-5">
                  <div className="font-bold mb-3 lg:text-2xl text-xl flex items-center">
                    <svg
                      className="w-6 h-6 mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M320 80c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40zm44.7 84.3L375.8 253c1.6 13.2-7.7 25.1-20.8 26.8s-25.1-7.7-26.8-20.8l-4.4-35h-7.6l-4.4 35c-1.6 13.2-13.6 22.5-26.8 20.8s-22.5-13.6-20.8-26.8l11.1-88.8L255.5 181c-10.1 8.6-25.3 7.3-33.8-2.8s-7.3-25.3 2.8-33.8l27.9-23.6C271.3 104.8 295.3 96 320 96s48.7 8.8 67.6 24.7l27.9 23.6c10.1 8.6 11.4 23.7 2.8 33.8s-23.7 11.4-33.8 2.8l-19.8-16.7zM40 64c22.1 0 40 17.9 40 40v40 80 40.2c0 17 6.7 33.3 18.7 45.3l51.1 51.1c8.3 8.3 21.3 9.6 31 3.1c12.9-8.6 14.7-26.9 3.7-37.8l-15.2-15.2-32-32c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l32 32 15.2 15.2 0 0 25.3 25.3c21 21 32.8 49.5 32.8 79.2V464c0 26.5-21.5 48-48 48H173.3c-17 0-33.3-6.7-45.3-18.7L28.1 393.4C10.1 375.4 0 351 0 325.5V224 160 104C0 81.9 17.9 64 40 64zm560 0c22.1 0 40 17.9 40 40v56 64V325.5c0 25.5-10.1 49.9-28.1 67.9L512 493.3c-12 12-28.3 18.7-45.3 18.7H400c-26.5 0-48-21.5-48-48V385.1c0-29.7 11.8-58.2 32.8-79.2l25.3-25.3 0 0 15.2-15.2 32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32-15.2 15.2c-11 11-9.2 29.2 3.7 37.8c9.7 6.5 22.7 5.2 31-3.1l51.1-51.1c12-12 18.7-28.3 18.7-45.3V224 144 104c0-22.1 17.9-40 40-40z" />
                    </svg>
                    #5 You Can Help Others.{" "}
                  </div>
                  <p>
                    My <u>biggest satisfaction</u> is when I can{" "}
                    <b>truly help someone</b>. Seeing people evolving, becoming
                    who they truly want and being happy… it’s just filling my
                    heart with happiness. It’s one of the biggest reason I
                    wanted to start practicing astrology professionally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CallToAction />
      </main>

      <Footer hideBg />
    </div>
  );
};

export default About;
