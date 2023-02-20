import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "../../components/UI/Footer";
import Navbar from "../../components/UI/Navbar";
import SectionHead from "../../components/UI/SectionHead";
import Tick from "../../components/UI/Tick";
import { isSlotAvailable } from "../../utils";
import { SyncLoader } from "react-spinners";
import { canOpenCheck, COACHING_TEMPLATE_ID } from "../../config";

const Coaching = ({ openPaymentModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOk, setIsOk] = useState(true);

  async function handleBooking() {
    const canOpen = canOpenCheck({ productId: COACHING_TEMPLATE_ID });
    if (!canOpen) {
      setIsOk(false);
      return;
    }

    setIsLoading(true);
    const isOpen = await isSlotAvailable();
    setIsLoading(false);

    if (isOpen) {
      openPaymentModal({
        productId: COACHING_TEMPLATE_ID,
        price: 150,
        image: "/images/service-coaching.jpg",
        title: "Coaching Astrology Consultation",
      });
    } else {
      setIsOk(false);
    }
  }

  return (
    <div>
      <Head>
        <title>Coaching Astrology Consultation | Easy Astrology By Zoée</title>
        <meta
          name="description"
          content="Coaching Astrology is an amazing self-development tool. In coaching astrology, your birth chart describes who you should be and what you should do to achieve happiness, success and self-growth. It will give you the keys to reach your goals, become a better version of yourself and go on the best life path for you."
        />
        <link rel="icon" href="/images/logo-color.png" />

        {/* OG */}
        <meta
          content="Coaching Astrology Consultation | Easy Astrology By Zoée"
          property="og:title"
        />
        <meta content="https://easyastrologybyzoee.com/" property="og:url" />
        <meta
          content="Coaching Astrology is an amazing self-development tool. In coaching astrology, your birth chart describes who you should be and what you should do to achieve happiness, success and self-growth. It will give you the keys to reach your goals, become a better version of yourself and go on the best life path for you."
          property="og:description"
        />
        <meta
          content="https://easyastrologybyzoee.com/images/service-coaching.jpg"
          property="og:image"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Coaching Astrology Consultation | Easy Astrology By Zoée"
        />
        <meta
          name="twitter:description"
          content="Coaching Astrology is an amazing self-development tool. In coaching astrology, your birth chart describes who you should be and what you should do to achieve happiness, success and self-growth. It will give you the keys to reach your goals, become a better version of yourself and go on the best life path for you."
        />
        <meta
          name="twitter:image"
          content="https://easyastrologybyzoee.com/images/service-coaching.jpg"
        />
      </Head>

      <Navbar />

      <main className="text-white">
        <SectionHead title={"Coaching Astrology Consultation (150 USD)"} />

        <div className="bg-green lg:py-20 py-14">
          <div className="container-deep 2xl:text-2xl sm:text-xl text-lg">
            <div>
              <div>
                <div className="mb-5 2xl:text-4xl text-3xl font-bold">
                  What is it?
                </div>
                Coaching Astrology is an amazing <i>self-development</i> tool.
                In coaching astrology, your birth chart describes who you should
                be and what you should do to achieve <b>happiness</b>,{" "}
                <b>success</b> and <b>self-growth</b>.
                <div className="sm:mt-5 mt-3">
                  It will give you the keys to <b>reach your goals</b>, become a{" "}
                  <u>better version of yourself</u> and go on the <i>best</i>{" "}
                  life path for you.
                </div>
              </div>

              <div className="mt-12">
                <div className="mb-5 2xl:text-4xl text-3xl font-bold">
                  What I Do? (If You Know Astrology)
                </div>
                <div>
                  I use your tropical birth chart with Placidus house system.
                </div>
                <div className="sm:mt-5 mt-3">
                  I look at the positions of the 10 main planets (Sun, Moon,
                  Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune and
                  Pluto) in signs and houses, and their aspects (conjunction,
                  sextile, square, trine, opposition).
                </div>
                <div className="sm:mt-5 mt-3">
                  I use a special process to determinate the ones that have the
                  most impact on you.
                </div>
                <div className="sm:mt-5 mt-3">
                  I will also look at the quadrants, hemispheres, elements and
                  modalities.
                </div>
              </div>

              <div className="mt-12">
                <div className="mb-5 2xl:text-4xl text-3xl font-bold">
                  Is It For You?
                </div>

                <div>Do you want to…</div>

                <ul className="sm:mt-5 mt-3 italic">
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Truly understand yourself
                  </li>
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Evolve into a better version of yourself
                  </li>
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Clearly know what challenges you need to face
                  </li>
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Know how to face those challenges
                  </li>
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Find your hidden talents and strengths
                  </li>

                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Know what’s the happiest life path for you
                  </li>

                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Know how to reach happiness
                  </li>
                </ul>

                <div className="sm:mt-5 mt-3">
                  You have replied “yes” to at least one of those questions.
                  Then the{" "}
                  <strong>
                    <i>Coaching Astrology Consultation</i>
                  </strong>{" "}
                  is for you.
                </div>
              </div>

              <div className="mt-12">
                <div className="mb-5 2xl:text-4xl text-3xl font-bold">
                  What Will You Get?
                </div>
                <ul>
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    A <strong> 75 to 90 min</strong> online consultation with me
                  </li>
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    <strong>1 to 2 hours</strong> of preparation time made by me
                    before the consultation
                  </li>
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>
                    Bonus 1: A <strong>recording of the consultation</strong>{" "}
                    sent just after by email
                  </li>
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Bonus 2: A <i>personalized document</i> with{" "}
                    <strong>practical actions</strong> for you to evolve
                  </li>
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Bonus 3: <u>Unlimited</u> support and questions about your
                    chart by DM *
                  </li>

                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Bonus 4: A{" "}
                    <strong>
                      <i>25% discount</i>
                    </strong>{" "}
                    on your next order (except{" "}
                    <strong>
                      <i>the Follow-up Consultation</i>
                    </strong>
                    )
                  </li>
                </ul>

                <div className="text-base mt-5 flex flex-wrap">
                  <span className="mr-1">
                    * Only for simple questions, if your questions are too
                    complicated to be answered my DM, I will recommend you take
                    a
                  </span>
                  <strong>
                    <i> Follow-up Consultation</i>
                  </strong>{" "}
                </div>
              </div>

              <div className="sm:mt-20 mt-10 flex flex-col items-center">
                <button
                  onClick={handleBooking}
                  disabled={!isOk}
                  className={`sm:text-2xl text-xl sm:px-12 px-8 sm:py-6 py-4 border-2 border-white ${
                    !isLoading &&
                    "hover:bg-white hover:text-black hover:scale-105"
                  } sm:font-bold font-semibold smooth rounded-lg relative flex items-center justify-center`}
                >
                  <span className="absolute">
                    <SyncLoader color={"white"} loading={isLoading} size={12} />
                  </span>
                  {!isOk ? (
                    <div>
                      No spots available now... Go follow me on{" "}
                      <Link
                        href="/#social"
                        className="underline font-bold hover:opacity-80 smooth"
                      >
                        social media
                      </Link>{" "}
                      to know when I open new spots!
                    </div>
                  ) : (
                    <span className={isLoading ? "text-transparent" : ""}>
                      I Want To Change My Life Now!
                    </span>
                  )}
                </button>

                <div className="mt-6 2xl:text-xl text-lg">
                  Please read the{" "}
                  <Link
                    href="/disclaimer"
                    className="underline font-bold hover:opacity-80 smooth"
                  >
                    disclaimers
                  </Link>{" "}
                  before booking a consultation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
export default Coaching;
