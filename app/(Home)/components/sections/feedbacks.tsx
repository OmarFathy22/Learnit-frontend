'use client'
import * as React from "react";
import Slider from "../shared/Slider";
import FeedBackCard from "../shared/FeedBackCard";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="bg-[--bg-secondary] pb-[70px] ">
      <h1 className="gradient-text text-[30px] pt-[30px] global-padding mb-[30px] ">
      See what other learners like you are saying about their courses 
      </h1>
      {/* react slider Here */}
      <div className="global-padding">
        <Slider>
        {Array(10).fill(0).map((_, i) => (
          <div key={i}>
           <FeedBackCard />  
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
}
