import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "@ant-design/react-slick";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";



export interface ISliderProps {
  settings ?: any;
  children: React.ReactNode;
}

let DefualtSettings = {
  dots: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 4 ,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: <div ><MdKeyboardArrowRight /></div>,
  prevArrow: <div ><MdKeyboardArrowLeft /></div>,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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
        slidesToScroll:2,
        // centerMode: true,
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
function Responsive({settings = DefualtSettings , children }: ISliderProps) {
  return (
    <div className="border-[1px] border-transparent ">
      <Slider {...settings} className="px-3 Slider">{children}</Slider>
    </div>
  );
}

export default Responsive;
