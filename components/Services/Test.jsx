import React from "react";

const Test = () => {
  return (
    <div className="mt-10 px-20 py-8 mx-auto bg-gray">
      <h3 className="text-3xl font-bold">Coaching Astrology Consultation</h3>

      <div className="w-4/12 mt-6">
        <h4 className="text-2xl font-bold">What is it?</h4>
        <div>
          Coaching Astrology is a very efficient self-development tool. In
          coaching astrology, we say that your birth chart describes who you
          should be and what you should do to achieve happiness, success and
          efficiency. It will give you the keys to reach your goals, then the
          choice belongs to you to use it or not.
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-bold">What’s the benefits?</h3>
        <ul>
          <li>
            <span className="mr-2">-</span> You will truly understand yourself
          </li>
          <li>
            <span className="mr-2">-</span> You will evolve
          </li>
          <li>
            <span className="mr-2">-</span> You will know what challenges you
            need to face
          </li>
          <li>
            <span className="mr-2">-</span> You will find your talents{" "}
          </li>
          <li>
            <span className="mr-2">-</span> You will know what’s the happiest
            life path for you
          </li>
          <li>
            <span className="mr-2">-</span> You will get advices to reach this
            happiness state
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold mt-6">
          What I do? (for those that know astrology)
        </h3>
        <div>
          I use your tropical birth chart with Placidus house system and I
          analyse the positions of the 10 main planets (Sun, Moon, Mercury,
          Venus, Mars, Jupiter, Saturn, Uranus, Neptune and Pluto), the Houses,
          and the Ptolemaic aspects (conjunction, sextile, square, trine,
          opposition). I use a special process to determinate the ones that have
          the most impact on you. I will also look at the quadrants,
          hemispheres, elements and modalities.
        </div>
      </div>

      <div className="mt-10">
        <button className="bg-red text-xl px-8 py-3 smooth hover:opacity-70">
          Book a Coaching
        </button>
      </div>
    </div>
  );
};

export default Test;
