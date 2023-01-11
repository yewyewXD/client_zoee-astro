import React from "react";
import Slider from "react-slick";
import testimonials from "../../json/testimonials.json";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const Testimonial = () => {
  return (
    <div className="bg-green text-white relative">
      <div className="container py-20 relative">
        <h2 className="text-5xl text-center font-bold">Testimonials</h2>
        <div className="text-center text mt-3 mb-6 text-xl">
          See what others have to say...
        </div>

        <div className="mb-6">
          <Slider {...settings}>
            {testimonials.map((review) => (
              <div
                key={`testimonial-${review.name}`}
                className="text-black rounded w-5/12 p-3"
              >
                <div className="bg-white rounded-xl overflow-hidden">
                  <div
                    className="w-full h-44 bg-brown"
                    style={
                      review.image
                        ? {
                            background: `url(${review.image}) no-repeat center center / cover`,
                          }
                        : {}
                    }
                  ></div>
                  <div className="p-8 text-lg">
                    <div className="h-36 mb-2">{`"${review.text}"`}</div>
                    <div className="font-semibold leading-tight">
                      {review.name}
                    </div>
                    <div className="text-base italic">{review.from}</div>
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
