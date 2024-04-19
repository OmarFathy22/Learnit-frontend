"use client";
import * as React from "react";
import Slider from "./Slider";
import { GoArrowRight } from "react-icons/go";
import CourseCard from "./CourseCard";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="bg-[--bg-secondary] pb-[70px] ">
      <h1 className="gradient-text text-[30px] pt-[30px] global-padding mb-[30px] ">
        Recommended for you
      </h1>
      {/* react slider Here */}
      <div className="global-padding">
        <Slider>
        {Array(10).fill(0).map((_, i) => (
          <div key={i}>
           <CourseCard />  
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
}
