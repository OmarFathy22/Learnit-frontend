'use client'
import * as React from "react";
import Slider from "../shared/Slider";
import FeedBackCard from "../shared/FeedBackCard";

export interface IAppProps {}
let settings = {
  dots: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 4 ,
  slidesToScroll: 4,
  initialSlide: 0,
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
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
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
export default function App(props: IAppProps) {
  return (
    <div className="bg-[--bg-secondary] h-[101vh] py-[5%] gradient-b-border   ">
      <h1 className="gradient-text text-[30px]  global-padding mb-[30px] ">
      See what other learners like you are saying about their courses 
      </h1>
      {/* react slider Here */}
      <div className="global-padding">
        <Slider settings={settings}>
        {Array(10).fill(0).map((_, i) => (
    
           <FeedBackCard key={i} />  
        ))}
        </Slider>
      </div>
    </div>
  );
}
