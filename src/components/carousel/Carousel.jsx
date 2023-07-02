import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

const VariableWidth = ({ children }) => {
  const settings = {
    className: "slider variable-width",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    arrows: false,

    //autoplay:true,
    //dots: true,
    //infinite: true,
    //autoplay: true,
    //speed: 15000,
    //autoplaySpeed: 1000,
    //cssEase: "linear"
  };

  return (
    <div className="py-8 bg-[#D9D9D9]">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default VariableWidth;
