import Image from "next/image";
import Link from "next/link";
import React from "react";
import BgOverlay from "../UI/BgOverlay";
import SecondaryBtn from "../UI/buttons/SecondaryBtn";
import Slider from "react-slick";
import { useRouter } from "next/router";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 640,
      settings: {
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
      },
    },
  ],
};

const SERVICE_ITEMS = [
  {
    title: "Coaching Astrology",
    price: "150 USD",
    description:
      "You want to become a <i>better version of yourself</i>? If yes, this is exactly what do you need! Truly understand yourself, by knowing your <strong>strengths</strong>, discovering your <strong>hidden talents</strong>, knowing the challenges you need to face and how and what’s the <u>happiest life</u> path for you. All of this with <strong>practical advices</strong> to help you evolve and finally be proud of yourself. ",
    image: "/images/service-coaching.jpg",
    link: "/services#coaching",
    ctaText: "I Want To Change My Life Now",
    alt: false,
  },

  {
    title: "Follow-up Consultation",
    price: "50 USD",
    description:
      "Wanna follow-up your <strong>progress</strong> on becoming the <u>best version of yourself</u>? This is the best option! You will get precious additional <strong>advices</strong>, get <strong>answers</strong> to any of your questions but also important <u>guidance and support</u> on your self-growth journey. All you doubts and worries will be away!",
    image: "/images/service-follow.jpg",
    link: "/services#followup",
    ctaText: "I Want To Continue My Self-Growth Journey",
    alt: true,
  },

  {
    title: "Synastry Consultation",
    price: "200 USD",
    description:
      "Do you want to be <strong>happier</strong> in your relationship? Here is the solution! <strong>Truly understand</strong> and improve <u>drastically</u> your relationships (for couple, friends, parent-child, coworkers and more). Become <strong>more tolerant</strong> towards each other. Discover what challenges you need to face and how but also the <u>strengths</u> of your union. No more sadness and annoying arguments!",
    image: "/images/service-synastry.jpg",
    link: "/services#synastry",
    ctaText: "I Want To Improve My Relationship Now",
    alt: false,
  },
];

const Services = () => {
  const router = useRouter();

  return (
    <div
      style={{
        background: "url(/images/hero-bg.jpg) no-repeat center center / cover",
      }}
      className="relative"
    >
      <BgOverlay opacity={"0.5"} />

      <div className="container-deep lg:py-20 py-14 text-white relative">
        <h2 className="lg:text-5xl text-4xl text-center font-bold mb-20">
          Services
        </h2>

        {SERVICE_ITEMS.map((service) => (
          <div key={`service-item-${service.title}`}>
            <div
              className={`flex ${
                service.alt ? "md:flex-row-reverse" : "md:flex-row"
              } flex-col justify-between items-center md:my-28 my-20`}
            >
              <Image
                className="rounded-xl shadow-md shadow-black"
                src={service.image}
                alt=""
                height={300}
                width={300}
              />

              <div
                className={`${
                  service.alt ? "xl:pr-40 md:pr-20" : "xl:pl-40 md:pl-20"
                } md:text-left text-center md:mt-0 mt-8`}
              >
                <div className="md:text-4xl sm:text-3xl text-2xl font-bold relative">
                  {service.title} - {service.price}
                </div>

                <div
                  className="md:mt-5 mt-3 md:text-xl sm:text-lg"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                ></div>

                <div className="mt-8">
                  <SecondaryBtn
                    onClick={() => {
                      router.push(service.link);
                    }}
                  >
                    Learn More
                  </SecondaryBtn>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
