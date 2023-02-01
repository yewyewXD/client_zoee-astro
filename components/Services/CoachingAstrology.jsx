import Image from "next/image";
import React, { useState } from "react";
import SecondaryBtn from "../UI/buttons/SecondaryBtn";
import Tick from "../UI/Tick";

const CoachingAstrology = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div>
        <div>
          <div className="mb-5 md:text-4xl text-3xl font-bold">What is it?</div>
          Coaching Astrology is an amazing <i>self-development</i> tool. In
          coaching astrology, your birth chart describe who you should be and
          what you should do to achieve <b>happiness</b>, <b>success</b> and{" "}
          <b>self-growth</b>.
          <div className="sm:mt-5 mt-3">
            It will give you the keys to <b>reach your goals</b>, become a{" "}
            <u>better version of yourself</u> and go on the <i>best</i> life
            path for you.
          </div>
        </div>

        <div className="mt-12">
          <div className="mb-5 md:text-4xl text-3xl font-bold">
            What I Do? (If You Know Astrology)
          </div>
          <div>I use your tropical birth chart with Placidus house system.</div>
          <div className="sm:mt-5 mt-3">
            I look at the positions of the 10 main planets (Sun, Moon, Mercury,
            Venus, Mars, Jupiter, Saturn, Uranus, Neptune and Pluto) in signs
            and houses, and their aspects (conjunction, sextile, square, trine,
            opposition).
          </div>
          <div className="sm:mt-5 mt-3">
            I use a special process to determinate the ones that have the most
            impact on you.
          </div>
          <div className="sm:mt-5 mt-3">
            I will also look at the quadrants, hemispheres, elements and
            modalities.
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
            You have replied “yes” to at least one of those questions. Then the{" "}
            <strong>
              <i>Coaching Astrology Consultation</i>
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
              A <strong> 75 to 90</strong> min online consultation with me.
            </li>
            <li>
              <span className="mr-1 not-italic font-bold">
                <Tick />
              </span>{" "}
              <strong>1 to 2 hours</strong> of preparation time made by me
              before the consultation.
            </li>
            <li>
              <span className="mr-1 not-italic font-bold">
                <Tick />
              </span>
              Bonus 1: A <strong>recording of the consultation</strong> sent
              just after by email.
            </li>
            <li>
              <span className="mr-1 not-italic font-bold">
                <Tick />
              </span>{" "}
              Bonus 2: A <i>personalized document</i> with{" "}
              <strong>practical actions</strong> for you to evolve.
            </li>
            <li>
              <span className="mr-1 not-italic font-bold">
                <Tick />
              </span>{" "}
              Bonus 3: <u>Unlimited</u> support and questions about your chart
              by DM. (only for simple questions, if your questions are too
              complicated to be answered my DM, I will recommend you take a
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

        <div className="sm:mt-20 mt-10 flex justify-center">
          <button className="sm:text-2xl text-xl sm:px-12 px-8 sm:py-6 py-4 border-2 border-white hover:bg-white hover:text-black sm:font-bold font-semibold smooth rounded-lg hover:scale-105">
            I Want To Change My Life Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoachingAstrology;
