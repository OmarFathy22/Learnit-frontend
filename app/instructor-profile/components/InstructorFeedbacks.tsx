'use client'
import * as React from "react";
import Slider from "@/app/home/components/shared/Slider";
import FeedBackCard from '../../home/components/shared/FeedBackCard'

export interface IAppProps {}
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
    <div className="mt-5">
      <h1 className="gradient-text text-[22px]  ">
      See what other learners say about these courses 
      </h1>
      {/* react slider Here */}
      <div className="">
        <Slider settings={settings}>
        {Array(10).fill(0).map((_, i) => (
    
           <FeedBackCard key={i} />  
        ))}
        </Slider>
      </div>
    </div>
  );
}