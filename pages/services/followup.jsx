import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "../../components/UI/Footer";
import Navbar from "../../components/UI/Navbar";
import SectionHead from "../../components/UI/SectionHead";
import Tick from "../../components/UI/Tick";
import { getClients } from "../../utils";
import { SyncLoader } from "react-spinners";
import { FOLLOWUP_TEMPLATE_ID } from "../../helpers/config";
import { canOpenCheck } from "../../helpers/utils";

const Followup = ({ openPaymentModal }) => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleBooking() {
    const canOpen = canOpenCheck({ productId: FOLLOWUP_TEMPLATE_ID });
    if (!canOpen) {
      setIsOk(false);
      return;
    }

    setIsLoading(true);
    const clients = await getClients();
    setIsLoading(false);

    openPaymentModal({
      productId: FOLLOWUP_TEMPLATE_ID,
      price: 50,
      image: "/images/service/service-follow.jpg",
      title: "Follow-up Consultation",
      clients,
    });
  }

  return (
    <div>
      <Head>
        <title>Follow-up Consultation | Easy Astrology By Zoée</title>
        <meta
          name="description"
          content="Follow-up your self-growth progress and make sure the previous consultation was effective. But it will also give you additional advices, answer any of your questions and bring you more guidance and support on your journey."
        />
        <link rel="icon" href="/images/logo-color.png" />

        {/* OG */}
        <meta
          content="Follow-up Consultation | Easy Astrology By Zoée"
          property="og:title"
        />
        <meta content="https://easyastrologybyzoee.com/" property="og:url" />
        <meta
          content="Follow-up your self-growth progress and make sure the previous consultation was effective. But it will also give you additional advices, answer any of your questions and bring you more guidance and support on your journey."
          property="og:description"
        />
        <meta
          content="https://easyastrologybyzoee.com/images/service/service-follow.jpg"
          property="og:image"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Follow-up Consultation | Easy Astrology By Zoée"
        />
        <meta
          name="twitter:description"
          content="Follow-up your self-growth progress and make sure the previous consultation was effective. But it will also give you additional advices, answer any of your questions and bring you more guidance and support on your journey."
        />
        <meta
          name="twitter:image"
          content="https://easyastrologybyzoee.com/images/service/service-follow.jpg"
        />
      </Head>

      <Navbar />

      <main className="text-white">
        <SectionHead title={"Follow-up Consultation (50 USD)"} />

        <div className="bg-purple lg:py-20 py-14">
          <div className="container-deep 2xl:text-2xl sm:text-xl text-lg">
            <div>
              <div>
                <div className="mb-5 2xl:text-4xl text-3xl font-bold">
                  What is it?
                </div>

                <div>
                  The goal is simple: follow-up your <i>self-growth progress</i>{" "}
                  and make sure the previous consultation was <i>effective</i>.
                  But it will also give you <strong>additional advices</strong>,
                  answer any of your <strong>questions</strong> and bring you
                  more <strong>guidance</strong> and <strong>support</strong> on
                  your journey.
                </div>

                <div className="sm:mt-5 mt-3">
                  You need to have done a{" "}
                  <strong>
                    <i>Coaching Astrology Consultation</i>
                  </strong>{" "}
                  or a{" "}
                  <strong>
                    <i>Synastry Consultation</i>
                  </strong>{" "}
                  with me before.
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
                    Answer more questions about your chart
                  </li>
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Clear doubts you have about your yourself and your progress
                  </li>
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Explore more in depth your chart
                  </li>
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Get support and guidance on your self-growth journey
                  </li>
                </ul>

                <div className="sm:mt-5 mt-3">
                  You have replied “yes” to at least one of those questions.
                  Then the{" "}
                  <strong>
                    <i>Follow-up Consultation</i>
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
                    A <strong>30 to 45 min </strong>online follow-up
                    consultation with me
                  </li>

                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Bonus: A <strong>recording</strong> of the consultation sent
                    just after by email
                  </li>
                </ul>
              </div>

              <div className="sm:mt-20 mt-10 flex flex-col items-center">
                <button
                  onClick={handleBooking}
                  className={`sm:text-2xl text-xl sm:px-12 px-8 sm:py-6 py-4 border-2 border-white ${
                    !isLoading &&
                    "hover:bg-white hover:text-black hover:scale-105"
                  } sm:font-bold font-semibold smooth rounded-lg relative flex items-center justify-center`}
                >
                  <span className="absolute">
                    <SyncLoader color={"white"} loading={isLoading} size={12} />
                  </span>

                  <span className={isLoading ? "text-transparent" : ""}>
                    I Want To Continue My Self-Growth Journey
                  </span>
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
export default Followup;
