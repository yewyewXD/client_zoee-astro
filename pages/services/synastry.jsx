import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../../components/UI/Footer";
import Navbar from "../../components/UI/Navbar";
import SectionHead from "../../components/UI/SectionHead";
import Tick from "../../components/UI/Tick";

const Synastry = () => {
  return (
    <div>
      <Head>
        <title>Synastry Consultation | Easy Astrology By Zoée</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo-color.png" />
      </Head>

      <Navbar />

      <main className="text-white">
        <SectionHead title={"Synastry Consultation - 200 USD"} />

        <div className="bg-red lg:py-20 py-14">
          <div className="container-deep lg:text-2xl sm:text-xl text-lg">
            <div>
              <div>
                <div className="mb-5 md:text-4xl text-3xl font-bold">
                  What is it?
                </div>
                <div>
                  Synastry is the part of astrology that study the{" "}
                  <strong>relationship</strong> between 2 people and it’s not
                  only for couples! You can do it between{" "}
                  <strong>friends, parent-child, coworkers</strong> and more.
                </div>
                <div className="sm:mt-5 mt-3">
                  This is the best option to give you the keys to{" "}
                  <u>understand any relationship</u> and find ways to improve
                  it. Result: everyone is <i>happier</i> in the relationship!
                </div>
              </div>

              <div className="mt-12">
                <div className="mb-5 md:text-4xl text-3xl font-bold">
                  What I Do? (If You Know Astrology)
                </div>
                <div>
                  I use the tropical birth charts with Placidus house system.
                </div>
                <div className="sm:mt-5 mt-3">
                  I start by looking at the elements, modalities, aspects,
                  houses, hemispheres and retrograde planets in each birth
                  charts and compare it.
                </div>
                <div className="sm:mt-5 mt-3">
                  Then, I will look in each birth chart at the 7th house and 8th
                  house signs, planets and rulers.
                </div>
                <div className="sm:mt-5 mt-3">
                  I also look at the nodal axis, Vertex and the 10 planets (Sun,
                  Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune
                  and Pluto) and see how it interacts.
                </div>
                <div className="sm:mt-5 mt-3">
                  After, I will check where each chart’s planets and points fall
                  into the other person’s chart.
                </div>
                <div className="sm:mt-5 mt-3">
                  I will finish by a focus on each chart’s Venus’ and Mars’
                  signs, houses and aspects.
                </div>
              </div>

              <div className="mt-12">
                <div className="mb-5 md:text-4xl text-3xl font-bold">
                  Is It For You?
                </div>

                <div>Do you want to…</div>

                <ul className="sm:mt-5 mt-3 italic">
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Truly understand your relationship with someone
                  </li>
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Become much happier in your relationship
                  </li>
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Improve drastically your relationship
                  </li>
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Know clearly what challenges you need to face in your
                    relationship
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
                    Discover the strengths of your relationship
                  </li>

                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Be more tolerant toward each other
                  </li>
                </ul>

                <div className="sm:mt-5 mt-3">
                  You have replied “yes” to at least one of those questions.
                  Then the{" "}
                  <strong>
                    <i>Synastry Consultation</i>
                  </strong>{" "}
                  is for you.
                </div>
              </div>

              <div className="mt-12">
                <div className="mb-5 md:text-4xl text-3xl font-bold">
                  What Will You Get?
                </div>
                <ul>
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    A <strong> 75 to 90 min</strong> online consultation with
                    me.
                  </li>
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    <strong>2 to 3 hours</strong> of preparation time made by me
                    before the consultation.
                  </li>
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>
                    Bonus 1: A <strong>recording of the consultation</strong>{" "}
                    sent just after by email.
                  </li>
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Bonus 2: A <i>personalized document</i> with the main points
                    for you to work on.
                  </li>
                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Bonus 3: <u>Unlimited</u> support and questions about your
                    chart by DM. (only for simple questions, if your questions
                    are too complicated to be answered my DM, I will recommend
                    you to take a
                    <strong>
                      <i> Follow-up Consultation</i>
                    </strong>{" "}
                    )
                  </li>

                  <li>
                    <span className="mr-1 not-italic font-bold">
                      <Tick />
                    </span>{" "}
                    Bonus 4: A{" "}
                    <strong>
                      <i>25% discount</i>
                    </strong>{" "}
                    on your next order! (except{" "}
                    <strong>
                      <i>the Follow-up Consultation</i>
                    </strong>
                    )
                  </li>
                </ul>
              </div>

              <div className="mt-12">
                No spots available? Go follow me on{" "}
                <Link
                  href="/#social"
                  className="underline font-bold hover:opacity-80 smooth"
                >
                  social media
                </Link>{" "}
                to know when I open new spots!
              </div>

              <div className="sm:mt-20 mt-10 flex justify-center">
                <button className="sm:text-2xl text-xl sm:px-12 px-8 sm:py-6 py-4 border-2 border-white hover:bg-white hover:text-black sm:font-bold font-semibold smooth rounded-lg hover:scale-105">
                  I Want To Improve My Relationship Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
export default Synastry;