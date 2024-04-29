"use client";
import * as React from "react";
import Slider from "../shared/Slider";
import { GoArrowRight } from "react-icons/go";
import CourseCard from "../shared/CourseCard";

export interface IAppProps {}
const categories = [
  "Development",
  "Business",
  "Finance",
  "Design",
  "Marketing",
  "IT & Software",
  "Personal Development",
];
export default function App(props: IAppProps) {
  return (
    <div className="bg-[--bg-tertiary] h-[101vh] py-[5%] gradient-b-border  ">
      <h1 className="gradient-text text-[30px]  global-padding ">
        Master your career
      </h1>
      <ul className="flex justify-between gradient-border global-padding py-3 mt-[30px] mb-[80px] ">
        {categories.map((category, i) => (
          <li key={i} className={`cursor-pointer text-[--sub-text] font-medium text-[20px] ${!i && "gradient-text"}`}>
            {category}
          </li>
        ))}
        <li className="cursor-pointer flex items-center gap-1 text-[--sub-text]  font-medium text-[20px]">
          <h1>All Categories</h1>
           <span><GoArrowRight size={20} /></span>
        </li>
      </ul>
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
