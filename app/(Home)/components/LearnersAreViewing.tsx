"use client";
import * as React from "react";
import Slider from "../../home/components/shared/Slider";
import { GoArrowRight } from "react-icons/go";
import CourseCard from "../../home/components/shared/CourseCard";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="bg-[--bg-secondary] h-[101vh] py-[5%] gradient-b-border  ">
      <h1 className="gradient-text text-[30px] pt-[30px] global-padding mb-[30px] ">
       Learners Are Viewing
      </h1>
      {/* react slider Here */}
      <div className="global-padding">
        <Slider>
        {Array(10).fill(0).map((_, i) => (
          <div key={i}>
           <CourseCard id={i} />  
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
}