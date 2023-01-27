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
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

const SERVICE_ITEMS = [
  {
    title: "Coaching Astrology",
    price: "150 USD",
    description:
      "Give you the keys to reach your goals. In Coaching Astrology, your birth chart describe who you should be to achieve happiness, success and efficiency.",
    image: "/images/service-coaching.jpg",
    link: "/services#coaching",
  },

  {
    title: "Follow-up Consultation",
    price: "50 USD",
    description:
      "Follow-up your progress and assess the effectiveness of the previous consultation. Give you additional advices, answer any questions and bring you more guidance and support on your self-growth journey.",
    image: "/images/service-follow.jpg",
    link: "/services#followup",
  },

  {
    title: "Synastry Consultation",
    price: "200 USD",
    description:
      "Synastry is the part of astrology that study the interactions between 2 people and it’s not only for couples! It gives you the keys to understand any relationship and find ways to improve it and make the 2 people happier.",
    image: "/images/service-synastry.jpg",
    link: "/services#synastry",
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
                    className="rounded-xl"
                    src={service.image}
                    alt=""
                    height={230}
                    width={230}
                  />
                </div>

                <div className="text-center mt-10 flex flex-col items-center">
                  <div className="text-4xl font-bold relative flex justify-center items-center w-max">
                    {service.title}{" "}
                    <span className="text-lg font-semibold absolute -right-20 top-3 leading-tight">
                      - {service.price}
                    </span>
                  </div>

                  <div className="mt-4 text-xl w-9/12">
                    {service.description}
                  </div>
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
