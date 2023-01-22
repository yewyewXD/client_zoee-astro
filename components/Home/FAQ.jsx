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
      <div className="py-20 container relative">
        <h2 className="lg:text-5xl text-4xl text-center font-bold mb-20">
          FAQ
        </h2>

        <div className="grid grid-cols-2 gap-x-20 lg:text-xl text-lg font-semibold">
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
      </div>
    </div>
  );
};

export default FAQ;
