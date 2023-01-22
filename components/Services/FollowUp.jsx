import Image from "next/image";
import React, { useState } from "react";
import SecondaryBtn from "../UI/buttons/SecondaryBtn";

const FollowUp = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex:grid grid-cols-3 flex flex-col-reverse">
      <div className="flex items-center col-span-2 lg:pr-40">
        <div>
          <div className="mt-6 mb-6">
            <h3 className="lg:text-4xl text-3xl font-bold">
              Follow-up Consultation
            </h3>
            <div className="font-semibold mt-3">50 USD</div>
          </div>

          <div>
            <div className="font-semibold mb-2">What is it?</div>
            The goal of this consultation is to follow-up your progress and
            assess the effectiveness of the previous consultation. But also to
            give you additional advices, answer any questions and bring you more
            guidance and support on your self-growth journey.
          </div>

          <div className="mt-5">
            <div className="font-semibold mb-2">For who is it?</div>
            <ul>
              <li>
                <span className="mr-1">•</span>You have done an coaching
                astrology consultation with me before.
              </li>
              <li>
                <span className="mr-1">•</span> You have more questions about
                your chart.
              </li>
              <li>
                <span className="mr-1">•</span> You have doubts that need to be
                cleared.
              </li>
              <li>
                <span className="mr-1">•</span>You want to explore more your
                chart.
              </li>
              <li>
                <span className="mr-1">•</span> You want support on your
                self-growth journey.
              </li>
            </ul>
          </div>

          {isExpanded && (
            <>
              <div className="mt-5">
                <div className="font-semibold mb-2">What you will get?</div>
                <ul>
                  <li>
                    <span className="mr-1">•</span> A 30 to 45 min online
                    follow-up consultation with me.
                  </li>
                  <li>
                    <span className="mr-1">•</span> A recording of the
                    consultation sent just after.
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

      <div className="lg:flex hidden items-center col-span-1">
        <Image
          src="/images/service-follow.jpg"
          className="rounded-xl"
          alt=""
          width={450}
          height={500}
        />
      </div>

      <div className="lg:hidden flex justify-center">
        <Image
          src="/images/service-follow.jpg"
          className="rounded-xl"
          alt=""
          width={230}
          height={230}
        />
      </div>
    </div>
  );
};

export default FollowUp;
