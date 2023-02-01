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
  },

  {
    title: "Follow-up Consultation",
    price: "50 USD",
    description:
      "Wanna follow-up your <strong>progress</strong> on becoming the <u>best version of yourself</u>? This is the best option! You will get precious additional <strong>advices</strong>, get <strong>answers</strong> to any of your questions but also important <u>guidance and support</u> on your self-growth journey. All you doubts and worries will be away!",
    image: "/images/service-follow.jpg",
    link: "/services#followup",
    ctaText: "I Want To Continue My Self-Growth Journey",
  },

  {
    title: "Synastry Consultation",
    price: "200 USD",
    description:
      "Do you want to be <strong>happier</strong> in your relationship? Here is the solution! <strong>Truly understand</strong> and improve <u>drastically</u> your relationships (for couple, friends, parent-child, coworkers and more). Become <strong>more tolerant</strong> towards each other. Discover what challenges you need to face and how but also the <u>strengths</u> of your union. No more sadness and annoying arguments!",
    image: "/images/service-synastry.jpg",
    link: "/services#synastry",
    ctaText: "I Want To Improve My Relationship Now",
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

      <div className="container lg:py-20 py-14 text-white relative">
        <h2 className="lg:text-5xl text-4xl text-center font-bold mb-20">
          Services
        </h2>

        <Slider {...settings}>
          {SERVICE_ITEMS.map((service) => (
            <div key={`service-item-${service.title}`}>
              <div className="flex flex-col justify-center items-center">
                <div>
                  <Image
                    className="rounded-xl shadow-md shadow-black"
                    src={service.image}
                    alt=""
                    height={230}
                    width={230}
                  />
                </div>

                <div className="text-center mt-10 flex flex-col items-center">
                  <div className="md:text-4xl sm:text-3xl text-2xl font-bold relative sm:flex justify-center items-center w-max">
                    {service.title}{" "}
                    <span className="text-lg font-semibold absolute -right-20 top-3 leading-tight sm:inline-block hidden">
                      - {service.price}
                    </span>
                    <div className="font-semibold text-base sm:hidden">
                      {`(${service.price})`}
                    </div>
                  </div>

                  <div
                    className="md:mt-4 mt-2 md:text-xl sm:text-lg xl:w-7/12 sm:w-9/12"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  ></div>
                </div>

                <div className="mt-6">
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
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
