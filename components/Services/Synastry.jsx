import Image from "next/image";
import React, { useState } from "react";
import SecondaryBtn from "../UI/buttons/SecondaryBtn";

const Synastry = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="lg:grid grid-cols-3 flex flex-col">
      <div className="lg:flex hidden items-center col-span-1">
        <Image
          src="/images/service-synastry.jpg"
          className="rounded-xl"
          alt=""
          height={500}
          width={600}
        />
      </div>
      <div className="lg:hidden flex justify-center">
        <Image
          src="/images/service-synastry.jpg"
          className="rounded-xl"
          alt=""
          width={230}
          height={230}
        />
      </div>

      <div className="flex items-center col-span-2 lg:pl-40">
        <div>
          <div className="mt-6 mb-6">
            <h3 className="lg:text-4xl text-3xl  font-bold">
              Synastry Consultation
            </h3>
            <div className="font-semibold mt-3">200 USD</div>
          </div>

          <div>
            <div className="font-semibold mb-2">What is it?</div>
            Synastry is the part of astrology that study the interactions
            between 2 people and it’s not only for couples! You can do it
            between friends, parent-child, coworkers and more. We study first
            the 2 people’s birth charts to understand them as individuals. Then
            we put those birth chart together to create a synastry chart.
            Looking in depth at it will give you the keys to understand any
            relationship and find ways to improve it and make the 2 people
            happier.
          </div>

          <div className="mt-5">
            <div className="font-semibold mb-2">For who is it?</div>
            <ul>
              <li>
                <span className="mr-1">•</span>You want to truly understand your
                relationship with someone.
              </li>
              <li>
                <span className="mr-1">•</span>You want to be happier in your
                relationship.
              </li>
              <li>
                <span className="mr-1">•</span>You want to improve your
                relationship.
              </li>
              <li>
                <span className="mr-1">•</span> You want know what challenges
                you need to face in the relationship.
              </li>
              <li>
                <span className="mr-1">•</span> You want to have advices on how
                to face those challenges.
              </li>
              <li>
                <span className="mr-1">•</span> You want to be more tolerant
                toward each other.
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
                  I use the tropical birth charts with Placidus house system. I
                  start by looking at the elements, modalities, aspects
                  patterns, houses and hemisphere emphasis and at the retrograde
                  planets in each birth charts and compare it. Secondly, I will
                  look in each birth chart at the 7th house and 8th house sign,
                  planets and ruler, nodal axis, vertex and the 10 planets (Sun,
                  Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune
                  and Pluto) and see how it interacts. Then, I will check where
                  each chart’s planets and points fall into the other person’s
                  chart. I will finish by a focus on each chart’s Venus’ and
                  Mars’ signs, houses and aspects.
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
                    the main points for you to work on.
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
            <SecondaryBtn>Book now</SecondaryBtn>

            <span
              onClick={() => setIsExpanded((bool) => !bool)}
              className="text-lg ml-10 underline cursor-pointer smooth hover:opacity-80"
            >
              {isExpanded ? "Read less" : "Read more"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Synastry;
