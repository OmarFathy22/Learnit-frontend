import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "@ant-design/react-slick";

export interface ISliderProps {
  children: React.ReactNode;
}

function Responsive({ children }: ISliderProps) {
  let settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3 ,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="border-[1px] border-transparent">
      <Slider {...settings} className="">{children}</Slider>
    </div>
  );
}

export default Responsive;
