import Image from "next/image";
import React, { useState } from "react";
import SecondaryBtn from "../UI/buttons/SecondaryBtn";

const CoachingAstrology = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="lg:grid grid-cols-3 flex flex-col">
      <div className="lg:flex hidden items-center justify-start col-span-1">
        <Image
          src="/images/service-coaching.jpg"
          className="rounded-xl shadow-md shadow-black"
          alt=""
          width={500}
          height={400}
        />
      </div>
      <div className="lg:hidden flex justify-center">
        <Image
          src="/images/service-coaching.jpg"
          className="rounded-xl shadow-md shadow-black"
          alt=""
          width={230}
          height={230}
        />
      </div>

      <div className="flex items-center col-span-2 lg:pl-40">
        <div>
          <div className="mt-6 mb-6">
            <div className="brand-underline-wrapper">
              <span className="brand-underline"></span>
              <h3 className="lg:text-4xl text-3xl font-bold">
                Coaching Astrology Consultation
              </h3>
            </div>
            <div className="font-semibold mt-3">150 USD</div>
          </div>

          <div>
            <div className="font-semibold mb-2">What is it?</div>
            Coaching Astrology is a very efficient self-development tool. In
            coaching astrology, we say that your birth chart describe who you
            should be and what you should do to achieve happiness, success and
            efficiency. It will give you the keys to reach your goals, then the
            choice belongs to you to use it or not.
          </div>

          <div className="mt-5">
            <div className="font-semibold mb-2">For who is it?</div>
            <ul>
              <li>
                <span className="mr-1">•</span> You want to truly understand
                yourself
              </li>
              <li>
                <span className="mr-1">•</span> You want to evolve{" "}
              </li>
              <li>
                <span className="mr-1">•</span> You want to know what challenges
                you need to face{" "}
              </li>
              <li>
                <span className="mr-1">•</span> You want to find your talents{" "}
              </li>
              <li>
                <span className="mr-1">•</span> You want to know what’s the
                happiest life path for you
              </li>
              <li>
                <span className="mr-1">•</span> You want get advices to reach
                this happiness state
              </li>
            </ul>
          </div>

          {isExpanded && (
            <>
              <div className="mt-5">
                <div className="font-semibold mb-2">
                  What I do? (for those that know astrology)
                </div>
                <div>
                  I use your tropical birth chart with Placidus house system and
                  I analyse the positions of the 10 main planets (Sun, Moon,
                  Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune and
                  Pluto), the Houses, and the Ptolemaic aspects (conjunction,
                  sextile, square, trine, opposition). I use a special process
                  to determinate the ones that have the most impact on you. I
                  will also look at the quadrants, hemispheres, elements and
                  modalities.
                </div>
              </div>

              <div className="mt-5">
                <div className="font-semibold mb-2">What you will get?</div>
                <ul>
                  <li>
                    <span className="mr-1">•</span> A 75 to 90 min online
                    consultation with me.
                  </li>
                  <li>
                    <span className="mr-1">•</span> A recording of the
                    consultation sent just after.
                  </li>
                  <li>
                    <span className="mr-1">•</span>A personalized document with
                    practical steps for you to take to evolve.
                  </li>
                  <li>
                    <span className="mr-1">•</span> Unlimited support and
                    questions about your chart by DM. (as long as the questions
                    are answerable by text and doesn’t necessitate an additional
                    consultation)
                  </li>
                  <li>
                    <span className="mr-1">•</span> A 25% discount on your next
                    order!
                  </li>
                </ul>
              </div>
            </>
          )}

          <div className="flex sm:flex-row flex-col-reverse items-center sm:mt-10">
            <SecondaryBtn>Book now</SecondaryBtn>

            <span
              onClick={() => setIsExpanded((bool) => !bool)}
              className={`sm:text-lg text-sm sm:ml-10 sm:my-0 my-6 sm:underline cursor-pointer smooth hover:opacity-80 sm:inline-block flex ${
                isExpanded ? "flex-col-reverse" : "flex-col"
              } items-center`}
            >
              {isExpanded ? "Read less" : "Read more"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 sm:hidden"
              >
                {isExpanded ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                )}
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingAstrology;
