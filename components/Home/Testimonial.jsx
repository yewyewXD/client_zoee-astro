import React from "react";
import Slider from "react-slick";
import testimonials from "../../json/testimonials.json";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },

    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },

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

const Testimonial = () => {
  return (
    <div className="bg-brown text-white relative">
      <div className="sm:px-20 px-4 lg:py-20 py-14 relative">
        <h2 className="lg:text-5xl text-4xl text-center font-bold">
          Testimonials
        </h2>
        <div className="text-center text mt-3 mb-6 lg:text-2xl text-xl font-semibold">
          Read What Other Happy Clients Have To Say…
        </div>

        <div className="mb-6">
          <Slider {...settings}>
            {testimonials.map((review) => (
              <div
                key={`testimonial-${review.name}`}
                className="text-black rounded lg:w-5/12 sm:p-3 p-2"
              >
                <div className="bg-white rounded-xl overflow-hidden lg:max-w-none max-w-md lg:mx-0 mx-auto shadow-md shadow-gray-600">
                  <div
                    className="w-full xl:h-44 h-40"
                    style={
                      review.image
                        ? {
                            background: `url(${review.image}) no-repeat ${review.imgPosition} / cover`,
                          }
                        : {}
                    }
                  ></div>
                  <div className="xl:p-8 p-6 2xl:text-lg text-base">
                    <div className="2xl:h-36 lg:h-28 mb-4">{`"${review.text}"`}</div>
                    <div>
                      <div className="font-semibold leading-tight">
                        {review.name}
                      </div>
                      <div className="italic">{review.from}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
