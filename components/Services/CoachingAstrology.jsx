import Image from "next/image";
import React, { useState } from "react";

const CoachingAstrology = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="grid grid-cols-3">
      <div className="flex items-center col-span-1">
        <Image
          src="/images/service-coaching.jpg"
          className="rounded-xl"
          alt=""
          width={500}
          height={400}
        />
      </div>
      <div className="flex items-center col-span-2 pl-40 text-xl">
        <div>
          <div className="mt-6 mb-6">
            <h3 className="text-4xl font-bold">
              Coaching Astrology Consultation{" "}
            </h3>
            <div className="text-xl font-semibold mt-3">150 USD</div>
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

          <div className="flex items-center mt-10">
            <button className="border-2 border-white px-10 py-4 hover:bg-white hover:text-black smooth">
              Book now
            </button>

            <span
              onClick={() => setIsExpanded((bool) => !bool)}
              className="text-lg ml-10 underline cursor-pointer"
            >
              {isExpanded ? "Read less" : "Read more"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingAstrology;
