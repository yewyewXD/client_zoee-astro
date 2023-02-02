import React from "react";
import BgOverlay from "../UI/BgOverlay";
import Collapsible from "react-collapsible";
import questions from "../../json/questions.json";

const FAQ = () => {
  return (
    <div
      className="text-white relative"
      style={{
        background: "url(/images/faq-bg.webp) no-repeat center center / cover",
      }}
    >
      <BgOverlay opacity={"0.6"} />
      <div className="lg:py-20 py-14 container relative">
        <div className="sm:mb-20 mb-14">
          <h2 className="lg:text-5xl text-4xl text-center font-bold">FAQ</h2>
          <div className="text-center text mt-3 lg:text-2xl text-xl font-semibold">
            You Still Hesitate? Find The Answer To Your Question Just Below…
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-x-20 lg:text-xl sm:text-lg font-semibold">
          {questions.map((question) => (
            <Collapsible
              openedClassName="rotateSvg"
              transitionTime={300}
              classParentString={"mb-7"}
              trigger={
                <div className="flex justify-between items-center border-b-2 pb-2">
                  <div>{question.title}</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="accordion smooth w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              }
              key={`QnA-${question.title}`}
            >
              <div
                className="font-normal mt-1"
                dangerouslySetInnerHTML={{ __html: question.description }}
              />
            </Collapsible>
          ))}
        </div>

        <div className="text-center text mt-6 lg:text-2xl text-xl font-semibold">
          You Got Another Question? Just{" "}
          <a
            href="https://www.instagram.com/direct/t/340282366841710300949128133717595046627"
            rel="noreferrer noopener"
            target={"_blank"}
            className="underline font-bold smooth hover:opacity-80"
          >
            DM
          </a>{" "}
          Or{" "}
          <a
            href={"mailto:easy.astrology.by.zoee@gmail.com"}
            className="underline font-bold smooth hover:opacity-80"
          >
            Email
          </a>{" "}
          Me!
        </div>
      </div>
    </div>
  );
};

export default FAQ;
