import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "@ant-design/react-slick";
import CourseCard from "./CourseCard";

export interface ISliderProps {
  children: React.ReactNode;
}

function Responsive({ children }: ISliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows:false,
    customPaging: (i:number) => (
      <h1
      style={{
        color: 'gray',
        fontSize: '50px',
      }}
    >
      •
    </h1>
    ),
  };
  return (
    <div className="border-[1px] border-transparent   ">
      <Slider {...settings} className="">{children}</Slider>
    </div>
  );
}

export default Responsive;
